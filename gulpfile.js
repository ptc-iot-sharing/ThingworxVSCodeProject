// @ts-check

const { series, src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const del = require('del');

const ts = require('gulp-typescript');
const fs = require('fs');
const path = require('path');

const transformer = require('bm-thing-transformer');

const xml2js = require('xml2js');
const gulpZip = require('gulp-zip');
const request = require('request');

// @ts-ignore
const package = require('./package.json');
const zipName = `${package.packageName}-${package.version}.zip`;

// @ts-ignore
const twConfig = require('./twconfig.json');

async function incrementVersion() {
    const version = package.version.split('-');
    const versionComponents = version[0].split('.');

    const minorVersion = (parseInt(versionComponents[2]) || 0) + 1;
    versionComponents[2] = minorVersion.toString();

    version[0] = versionComponents.join('.');
    
    package.version = version.join('-');
    console.log(`Increased version number to ${package.version}`);

    fs.writeFileSync('./package.json', JSON.stringify(package, undefined, '\t'));
}

async function clean() {
    await del('build');
}

async function build(cb) {
    //@ts-ignore
    twConfig.store = {};

    const project = ts.createProject('./tsconfig.json', {
        getCustomTransformers: () => ({
            before: [
                transformer.TWThingTransformerFactory(__dirname, false, false, twConfig)
            ],
            after: [
                transformer.TWThingTransformerFactory(__dirname, true, false, twConfig)
            ]
        })
    });

    // Prepare the transformers
    await new Promise(resolve => project.src().pipe(project()).dts.pipe(concat('index.d.ts')).pipe(dest('build/@types')).on('finish', resolve));

    // Write out the entity XML files
    // @ts-ignore
    for (const key in twConfig.store) {
        if (key == '@globalBlocks') continue;
        // @ts-ignore
        const entity = twConfig.store[key];
        entity.write();
    }

    // Copy and update the metadata file
    const metadataFile = await new Promise(resolve => fs.readFile('./metadata.xml', 'utf8', (err, data) => resolve(data)));
    const metadataXML = await new Promise(resolve => xml2js.parseString(metadataFile, (err, result) => resolve(result)));

    const extensionPackage = metadataXML.Entities.ExtensionPackages[0].ExtensionPackage[0];
    extensionPackage.$.name = package.packageName;
    extensionPackage.$.packageVersion = package.version.split('-')[0];
    extensionPackage.$.description = package.description;
    extensionPackage.$.buildNumber = JSON.stringify({giteaURL: package.autoUpdate.gitHubURL});

    const builder = new xml2js.Builder();
    const outXML = builder.buildObject(metadataXML);

    fs.writeFileSync('build/metadata.xml', outXML);

    if (twConfig.experimentalGlobals) {
        console.log('\x1b[1m\n\n🛑🛑🛑 Experimental support for global code is enabled.\n\nMake sure you understand the risks involved before using this feature and be aware the support is likely to break in future versions of Thingworx.\n\n\x1b[0m');
    }

    cb();
}

async function zip() {
    await del('zip');

    // Create a zip of the build directory
    const zipStream = src('build/**')
        .pipe(gulpZip(zipName))
        .pipe(dest('zip'));

    await new Promise(resolve => zipStream.on('end', resolve));
}

async function gen() {
    return watch('src/**/*.ts', async function() {
        //@ts-ignore
        twConfig.store = {};

        const project = ts.createProject('./tsconfig.json', {
            getCustomTransformers: () => ({
                before: [
                    transformer.TWThingTransformerFactory(__dirname, false, true, twConfig)
                ]
            })
        });
    
        // Prepare the transformers
        await new Promise(resolve => project.src().pipe(project()).on('finish', resolve));
    
        // Write out the entity XML files
        let definition = '';
        // @ts-ignore
        for (const key in twConfig.store) {
            if (key == '@globalBlocks') continue;
            // @ts-ignore
            const entity = twConfig.store[key];
            definition += `\n${entity.toDefinition()}\n`;
        }
    
        if (!fs.existsSync('static/gen')) fs.mkdirSync('static/gen');
        fs.writeFileSync('static/gen/Generated.d.ts', definition);
    });
}

async function removeExtension() {
    const host = package.thingworxServer;
    const user = package.thingworxUser;
    const password = package.thingworxPassword;

    return new Promise((resolve, reject) => {
        request.post({
            url: `${host}/Thingworx/Subsystems/PlatformSubsystem/Services/DeleteExtensionPackage`,
            headers: {
                'X-XSRF-TOKEN': 'TWX-XSRF-TOKEN-VALUE',
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-THINGWORX-SESSION': 'true'
            },
            body: {packageName: package.packageName},
            json: true
        },
        function (err, httpResponse, body) {
            if (err) {
                console.error("Failed to delete widget from thingworx");
                // Failing to remove the previous version shouldn't stop the upload process; this can happen, for example, during
                // the first upload when the widget when no previous version exists
                resolve();
                return;
            }

            if (httpResponse.statusCode != 200) {
                console.log(`Failed to delete widget from thingworx. We got status code ${httpResponse.statusCode} (${httpResponse.statusMessage})
                body:
                ${httpResponse.body}`);
            } 
            else {
                console.log(`Deleted previous version of ${package.packageName} from Thingworx!`);
            }
            resolve();
        })
        .auth(user, password);
    })
}

async function upload() {
    const host = package.thingworxServer;
    const user = package.thingworxUser;
    const password = package.thingworxPassword;

    console.log(`Uploading to ${package.thingworxServer}...`);

    return new Promise((resolve, reject) => {
        // load the file from the zip folder
        let formData = {
            file: fs.createReadStream(
                path.join('zip', zipName)
            )
        };
        // POST request to the ExtensionPackageUploader servlet
        request
            .post(
                {
                    url: `${host}/Thingworx/ExtensionPackageUploader?purpose=import`,
                    headers: {
                        'X-XSRF-TOKEN': 'TWX-XSRF-TOKEN-VALUE'
                    },
                    formData: formData
                },
                function (err, httpResponse, body) {
                    if (err) {
                        console.error("Failed to upload widget to thingworx");
                        reject(err);
                        return;
                    }
                    if (httpResponse.statusCode != 200) {
                        reject(`Failed to upload widget to thingworx. We got status code ${httpResponse.statusCode} (${httpResponse.statusMessage})
body:
${httpResponse.body}`);
                    } else {
                        console.log(`Uploaded widget version ${package.version} to Thingworx!`);
                        resolve();
                    }
                }
            )
            .auth(user, password);

    })
}

exports.build = series(clean, build, zip);
exports.upload = series(incrementVersion, clean, build, zip, upload);
exports.removeAndUpload = series(clean, build, zip, removeExtension, upload);
exports.default = series(gen);



// ************************************************** THINGWORX DEPENDENCIES ***********************************************

let installProgress;

const installedEntities = {};

async function getEntity(name, kind, slice) {
    // Thing packages will be handled by templates
    if (kind == 'ThingPackages') return;

    // Skip if already installed
    if (installedEntities[kind] && installedEntities[kind][name]) return;

    const host = package.thingworxServer;
    const user = package.thingworxUser;
    const password = package.thingworxPassword;

    installProgress.entity = `${kind}/${name}`;

    return await new Promise((resolve, reject) => {
        request.get(
                {
                    url: `${host}/Thingworx/${kind}/${name}${kind == 'Resources' ? '/metadata' : ''}`,
                    headers: {
                        'X-XSRF-TOKEN': 'TWX-XSRF-TOKEN-VALUE',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                },
                async function (err, httpResponse, body) {
                    if (err) {
                        installProgress.progress += slice;
                        console.error(`Could not get the metadata for entity ${kind}.${name}.`);
                        reject(err);
                        return;
                    }
                    if (httpResponse.statusCode != 200) {
                        installProgress.progress += slice;
                        console.error(`Could not get the metadata for entity ${kind}.${name}.\nServer returned status code ${httpResponse.statusCode}\nbody:\n${body}`);
                        reject(new Error(`Server returned status code ${httpResponse.statusCode}`));
                    } else {
                        body = JSON.parse(body);
                        // Don't reimport system objects
                        if (body.isSystemObject || (body.aspects && body.aspects.isSystemObject)) {
                            installProgress.progress += slice;
                            return resolve(body);
                        }

                        switch (kind) {
                            case 'Things':
                                importThing(body);
                                break;
                            case 'ThingTemplates':
                                importThingTemplate(body);
                                break;
                            case 'ThingShapes':
                                importThingShape(body);
                                break;
                            case 'DataShapes':
                                importDataShape(body);
                                break;
                            case 'Resources':
                                importResource(body);
                                break;
                            default:
                                importEntityDeclaration(name, kind, body.description);
                        }

                        // Import dependencies as well
                        try {
                            installProgress.entity = `${kind}/${name}/Dependencies`
                            const dependencies = await getEntityDependencies(name, kind);
                            const entitySlice = slice / (dependencies.rows.length + 1);
                            installProgress.progress += entitySlice;

                            for (const dependency of dependencies.rows) {
                                await getEntity(dependency.name, dependency.parentName, entitySlice);
                            }
                        }
                        catch (e) {

                        }

                        resolve(body);
                    }
                }
            )
            .auth(user, password);

    });
}


async function getEntityDependencies(name, kind) {
    const host = package.thingworxServer;
    const user = package.thingworxUser;
    const password = package.thingworxPassword;

    return await new Promise((resolve, reject) => {
        request.post(
                {
                    url: `${host}/Thingworx/${kind}/${name}/Services/GetOutgoingDependencies`,
                    headers: {
                        'X-XSRF-TOKEN': 'TWX-XSRF-TOKEN-VALUE',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: '{}'
                },
                function (err, httpResponse, body) {
                    if (err) {
                        console.error(`Could not get the dependency list for entity ${kind}.${name}.`);
                        reject(err);
                        return;
                    }
                    if (httpResponse.statusCode != 200) {
                        console.error(`Could not get the dependency list for entity ${kind}.${name}.\nServer returned status code ${httpResponse.statusCode}\nbody:\n${body}`);
                        reject(new Error(`Server returned status code ${httpResponse.statusCode}`));
                    } else {
                        body = JSON.parse(body);
                        resolve(body);
                    }
                }
            )
            .auth(user, password);

    });
}

function baseTypeOfPropertyDefinition(definition) {
    let baseType = definition.baseType;

    if (baseType == 'JSON') return 'TWJSON';

    if (baseType == 'INFOTABLE' && definition.aspects.dataShape) {
        return `INFOTABLE<${definition.aspects.dataShape.indexOf('.') != -1 ? JSON.stringify(definition.aspects.dataShape) : definition.aspects.dataShape}>`
    }

    if (baseType == 'THINGNAME') {
        if (definition.aspects.thingShape && definition.aspects.thingTemplate) {
            return `THIGNAME<'${definition.aspects.thingTemplate}','${definition.aspects.thingShape}'>`;
        }
        else if (definition.aspects.thingTemplate) {
            return `THIGNAME<'${definition.aspects.thingTemplate}'>`;
        }
        else if (definition.aspects.thingShape) {
            return `THIGNAME<undefined,'${definition.aspects.thingShape}'>`;
        }
    }

    return baseType;
}

function argumentTypesOfService(service) {
    let args = [];

    for (const argument of Object.values(service.parameterDefinitions || service.Inputs.fieldDefinitions)) {
        args.push(`${argument.name}${argument.aspects.isRequired || argument.aspects.defaultValue ? '' : '?'}: ${baseTypeOfPropertyDefinition(argument)}`);
    }

    return `{${args.join(',')}}`;
}

function argumentDocumentationsOfService(service) {
    let docs = [];

    for (const argument of Object.values(service.parameterDefinitions || service.Inputs.fieldDefinitions)) {
        docs.push(`@param ${argument.name} ${argument.description}`);
    }

    return docs.join('\n\t * ');
}

function declarationOfProperty(property) {
    return `
    /**
     * ${property.description}
     */
    ${property.name}: ${baseTypeOfPropertyDefinition(property)};
`;
}

function declarationOfSubscription(subscription) {
    return `
    /**
     * ${subscription.description}
     */
    private ${subscription.name}();
`;
}

function declarationOfEvent(event) {
    return `
    /**
     * ${event.description}
     */
    ${event.name}: EVENT<${event.dataShape}>;
`;
}

function declarationOfService(service) {
    return `
    /**
     * ${service.description}
     * ${argumentDocumentationsOfService(service)}
     * @return ${service.resultType.description}
     */
    ${service.aspects.isAsync ? 'async ' : ''}${service.name}(args: ${argumentTypesOfService(service)}): ${baseTypeOfPropertyDefinition(service.resultType)};
`;
}

function superclassOfEntity(entity) {
    const shapes = Object.keys(entity.implementedShapes).map(shape => JSON.stringify(shape));
    if (!shapes.length) {
        return `ThingTemplateReference(${JSON.stringify(entity.thingTemplate || entity.baseThingTemplate)})`;
    }

    return `ThingTemplateWithShapes(${JSON.stringify(entity.thingTemplate || entity.baseThingTemplate)}, ${shapes.join(', ')})`;
}

function importThing(body) {
    const name = body.name;
    const sanitiziedName = body.name.replace(/\./g, '_');
    let declaration = `declare class ${sanitiziedName} extends ${superclassOfEntity(body)} {\n\n`;

    for (const property of Object.values(body.thingShape.propertyDefinitions)) {
        // Don't include inherited properties
        if (property.sourceType != 'Unknown' && property.sourceType != 'Thing') continue;

        declaration += declarationOfProperty(property);
    }

    for (const subscription of Object.values(body.thingShape.subscriptions)) {
        // Don't include inherited subscriptions
        if (subscription.sourceType != 'Thing' || subscription.source != '') continue;

        declaration += declarationOfSubscription(subscription);
    }

    for (const event of Object.values(body.thingShape.eventDefinitions)) {
        // Don't include inherited events
        if (event.sourceType != 'Unknown' && event.sourceType != 'Thing') continue;

        declaration += declarationOfEvent(event);
    }

    for (const service of Object.values(body.thingShape.serviceDefinitions)) {
        // Don't include inherited services
        if (service.sourceType != 'Unknown' && service.sourceType != 'Thing') continue;

        declaration += declarationOfService(service);
    }

    declaration += '\n}\n';

    // Write out the thing
    if (!fs.existsSync(`./tw_imports/Things/`)) {
        fs.mkdirSync(`./tw_imports/Things/`);
    }

    installedEntities.Things = installedEntities.Things || {};
    installedEntities.Things[name] = true;

    fs.writeFileSync(`./tw_imports/Things/${name}.d.ts`, `${declaration}\n\ndeclare interface Things {
    /**
     * ${body.description}
     */ 
    ${JSON.stringify(name)}: ${sanitiziedName}; 
}`
    );
}

function memberIsPartOfThingTemplateDefinition(member, definition) {
    if (member.sourceType == 'ThingTemplate' && member.sourceName == definition.name) return true;
    if (member.sourceType == 'Unknown') return true;
    if (member.sourceType == 'ThingPackage' && member.sourceName == definition.thingPackage) return true;

    return false;
}

function importThingTemplate(body) {
    const name = body.name;
    const sanitiziedName = body.name.replace(/\./g, '_');
    let declaration = `declare class ${sanitiziedName} extends ${superclassOfEntity(body)} {\n\n`;

    // For templates, the effective shape will be used to also include memebers
    // originating from the thing package
    for (const property of Object.values(body.effectiveShape.propertyDefinitions)) {
        // Don't include inherited properties
        if (!(memberIsPartOfThingTemplateDefinition(property, body))) continue;

        declaration += declarationOfProperty(property);
    }

    for (const subscription of Object.values(body.effectiveShape.subscriptions)) {
        // Don't include inherited subscriptions
        if (subscription.sourceType != 'Thing' || subscription.source != '') continue;

        declaration += declarationOfSubscription(subscription);
    }

    for (const event of Object.values(body.effectiveShape.eventDefinitions)) {
        // Don't include inherited events
        if (!(memberIsPartOfThingTemplateDefinition(event, body))) continue;

        declaration += declarationOfEvent(event);
    }

    for (const service of Object.values(body.effectiveShape.serviceDefinitions)) {
        // Don't include inherited services
        if (!(memberIsPartOfThingTemplateDefinition(service, body))) continue;

        declaration += declarationOfService(service);
    }

    declaration += '\n}\n';

    // Write out the thing
    if (!fs.existsSync(`./tw_imports/ThingTemplates/`)) {
        fs.mkdirSync(`./tw_imports/ThingTemplates/`);
    }

    installedEntities.ThingTemplates = installedEntities.ThingTemplates || {};
    installedEntities.ThingTemplates[name] = true;

    fs.writeFileSync(`./tw_imports/ThingTemplates/${name}.d.ts`, `${declaration}\n\ndeclare interface ThingTemplates {
    /**
     * ${body.description}
     */ 
    ${JSON.stringify(name)}: ThingTemplateEntity<${sanitiziedName}>; 
}`
    );
}

function importThingShape(body) {
    const name = body.name;
    const sanitiziedName = body.name.replace(/\./g, '_');
    let declaration = `declare class ${sanitiziedName} extends ThingShapeBase {\n\n`;
    
    for (const property of Object.values(body.propertyDefinitions)) {
        declaration += declarationOfProperty(property);
    }

    for (const subscription of Object.values(body.subscriptions)) {
        declaration += declarationOfSubscription(subscription);
    }

    for (const event of Object.values(body.eventDefinitions)) {
        declaration += declarationOfEvent(event);
    }

    for (const service of Object.values(body.serviceDefinitions)) {
        declaration += declarationOfService(service);
    }

    declaration += '\n}\n';

    // Write out the thing
    if (!fs.existsSync(`./tw_imports/ThingShapes/`)) {
        fs.mkdirSync(`./tw_imports/ThingShapes/`);
    }

    installedEntities.ThingShapes = installedEntities.ThingShapes || {};
    installedEntities.ThingShapes[name] = true;

    fs.writeFileSync(`./tw_imports/ThingShapes/${name}.d.ts`, `${declaration}\n\ndeclare interface ThingShapes {
    /**
     * ${body.description}
     */ 
    ${JSON.stringify(name)}: ThingShapeEntity<${sanitiziedName}>; 
}`
    );
}

function importDataShape(body) {
    const name = body.name;
    const sanitiziedName = body.name.replace(/\./g, '_');
    let declaration = `declare class ${sanitiziedName} extends DataShapeBase {\n\n`;
    
    for (const property of Object.values(body.fieldDefinitions)) {
        declaration += declarationOfProperty(property);
    }
    declaration += '\n}\n';

    // Write out the thing
    if (!fs.existsSync(`./tw_imports/DataShapes/`)) {
        fs.mkdirSync(`./tw_imports/DataShapes/`);
    }

    installedEntities.DataShapes = installedEntities.DataShapes || {};
    installedEntities.DataShapes[name] = true;

    fs.writeFileSync(`./tw_imports/DataShapes/${name}.d.ts`, `${declaration}\n\ndeclare interface DataShapes {
    /**
     * ${body.description}
     */ 
    ${JSON.stringify(name)}: DataShapeEntity<${sanitiziedName}>; 
}`
    );
}

function importResource(body) {
    const name = body.name;
    const sanitiziedName = body.name.replace(/\./g, '_');
    let declaration = `declare class ${sanitiziedName} extends ResourceEntity {\n\n`;

    for (const service of Object.values(body.effectiveShape.serviceDefinitions)) {
        declaration += `
    /**
     * ${service.description}
     * ${argumentDocumentationsOfService(service)}
     * @return 
     */
    ${service.aspects.isAsync ? 'async ' : ''}${service.name}(args: ${argumentTypesOfService(service)}): ${baseTypeOfPropertyDefinition(service.Outputs)};
`;
    }

    declaration += '\n}\n';

    // Write out the thing
    if (!fs.existsSync(`./tw_imports/Resources/`)) {
        fs.mkdirSync(`./tw_imports/Resources/`);
    }

    installedEntities.Resources = installedEntities.Resources || {};
    installedEntities.Resources[name] = true;

    fs.writeFileSync(`./tw_imports/Resources/${name}.d.ts`, `${declaration}\n\ndeclare interface Resources {
    /**
     * ${body.description}
     */ 
    ${JSON.stringify(name)}: ${sanitiziedName}; 
}`
    );
}

function importEntityDeclaration(name, kind, description, genericArgument) {
    if (!fs.existsSync(`./tw_imports/${kind}/`)) {
        fs.mkdirSync(`./tw_imports/${kind}/`);
    }

    installedEntities[kind] = installedEntities[kind] || {};
    installedEntities[kind][name] = true;

    fs.writeFileSync(`./tw_imports/${kind}/${name}.d.ts`, `declare interface ${kind} { 
    /**
     *  ${description}
     */
    ${JSON.stringify(name)}: ${kind.substring(0, kind.length - 1)}Entity${genericArgument ? `<${genericArgument}>` : ''}; 
}`
    );
}

async function getProjectEntities(name) {
    const host = package.thingworxServer;
    const user = package.thingworxUser;
    const password = package.thingworxPassword;

    return await new Promise((resolve, reject) => {
        request.post(
                {
                    url: `${host}/Thingworx/Resources/SearchFunctions/Services/SpotlightSearch`,
                    headers: {
                        'X-XSRF-TOKEN': 'TWX-XSRF-TOKEN-VALUE',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "searchExpression": "**",
                        "withPermissions": false,
                        "sortBy": "name",
                        "isAscending": true,
                        "searchDescriptions": true,
                        "aspects": {
                            "isSystemObject": false
                        },
                        "projectName": name,
                        "searchText": ""
                    })
                },
                function (err, httpResponse, body) {
                    if (err) {
                        console.error(`Could not get the entity list for project ${name}.`);
                        reject(err);
                        return;
                    }
                    if (httpResponse.statusCode != 200) {
                        console.error(`Could not get the entity list for project ${name}.\nServer returned status code ${httpResponse.statusCode}\nbody:\n${body}`);
                        reject(new Error(`Server returned status code ${httpResponse.statusCode}`));
                    } else {
                        body = JSON.parse(body);
                        // Add the declaration for this project
                        if (!fs.existsSync('./tw_imports/Projects/')) {
                            fs.mkdirSync('./tw_imports/Projects/');
                        }

                        installedEntities.Projects = installedEntities.Projects || {};
                        installedEntities.Projects[name] = true;

                        fs.writeFileSync(`./tw_imports/Projects/${name}.d.ts`, `declare interface Projects { ${name}: ProjectEntity; }`)

                        resolve(body);
                    }
                }
            )
            .auth(user, password);

    });
}

async function getExtension(name, slice) {
    if (installedEntities.Extensions && installedEntities.Extensions[name]) {
        return installProgress.progress += slice;
    }

    installProgress.entity = `Extensions/${name}/@types`;

    const host = package.thingworxServer;
    const user = package.thingworxUser;
    const password = package.thingworxPassword;

    // Try first to get the type definitions, if they exist
    // TODO: This will always return 404 as it looks like only widget files are accessible in Common/extensions
    // Will need another workaround for this
    const definition = await new Promise((resolve, reject) => {
        request.get(
                {
                    url: `${host}/Thingworx/Common/extensions/${name}/@types/index.d.ts`,
                    headers: {'X-XSRF-TOKEN': 'TWX-XSRF-TOKEN-VALUE'}
                },
                async function (err, httpResponse, body) {
                    if (err) {
                        installProgress.progress += slice;
                        console.error(`Could not get the extension details for ${name}.`);
                        reject(err);
                        return;
                    }
                    if (httpResponse.statusCode != 200) {
                        if (httpResponse.statusCode == 404) {
                            // If the extension does not export types, then get the entity list and import that
                            resolve('');
                        }
                        else {
                            installProgress.progress += slice;
                            console.error(`Could not get the extension details for ${name}.\nServer returned status code ${httpResponse.statusCode}\nbody:\n${body}`);
                            reject(new Error(`Server returned status code ${httpResponse.statusCode}`));
                        }
                    } 
                    else {
                        resolve(body);
                    }
                }
            )
            .auth(user, password);

    });

    if (definition) {
        if (!fs.existsSync(`./tw_imports/Extensions/`)) {
            fs.mkdirSync(`./tw_imports/Extensions/`);
        }
    
        installedEntities.Extensions = installedEntities.Extensions || {};
        installedEntities.Extensions[name] = true;
    
        fs.writeFileSync(`./tw_imports/Extensions/${name}.d.ts`, definition);

        installProgress.progress += slice / 2;
    }

    installProgress.entity = `Extensions/${name}/Entities`;
    // Regardless of whether the type definitions existed, it is necessary to load the entity list
    // provided by the extension
    const packageDetails = await new Promise((resolve, reject) => {
        request.post(
                {
                    url: `${host}/Thingworx/Subsystems/PlatformSubsystem/Services/GetExtensionPackageDetails`,
                    headers: {
                        'X-XSRF-TOKEN': 'TWX-XSRF-TOKEN-VALUE',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({packageName: name})
                },
                function (err, httpResponse, body) {
                    if (err) {
                        console.error(`Could not get the entity list for extension ${name}.`);
                        reject(err);
                        return;
                    }
                    if (httpResponse.statusCode != 200) {
                        console.error(`Could not get the entity list for extension ${name}.\nServer returned status code ${httpResponse.statusCode}\nbody:\n${body}`);
                        reject(new Error(`Server returned status code ${httpResponse.statusCode}`));
                    } else {
                        body = JSON.parse(body);
                        resolve(body);
                    }
                }
            )
            .auth(user, password);

    });

    if (definition) {
        // If the extension provided a definition, just mark the entities as imported
        for (const row of packageDetails.rows) {
            if (row.parentName == 'Resources' || row.parentName == 'ThingPackages' || row.parentName == 'Widgets') continue;

            installedEntities[row.parentName] = installedEntities[row.parentName] || {};
            installedEntities[row.parentName][row.name] = true;
        }

        installProgress.progress += slice / 2;
    }
    else {
        // Otherwise, each entity has to be loaded separately
        const entitiesToLoad = packageDetails.rows.filter(row => (row.parentName != 'Resources' && row.parentName != 'ThingPackages' && row.parentName != 'Widgets'));
        const entitySlice = slice / (entitiesToLoad.length + 1);
        installProgress.progress += entitySlice;

        for (const row of entitiesToLoad) {
            await getEntity(row.name, row.parentName, entitySlice);
        }
    }
}

async function install() {

    // Get total packages to install
    const totalPackages = twConfig.projectDependencies.length + twConfig.entityDependencies.length + (twConfig.extensionDependencies || []).length;
    let progress = 0;
    let entity = '';


    console.log('');
    console.log(`Downloading TWX dependencies from ${package.thingworxServer}...`);

    const cliProgrss = require('cli-progress');
    const bar = new cliProgrss.SingleBar({hideCursor: true, format: '{bar} | {percentage}% | {entity}'}, cliProgrss.Presets.shades_classic);
    bar.start(1, 0, {percentage: 0, entity: ''});

    installProgress = {
        get progress() {
            return progress;
        },
        set progress(p) {
            progress = p;
            bar.update(progress, {percentage: (p * 100).toFixed(), entity});
        },

        get entity() {
            return entity;
        },
        set entity(e) {
            entity = e;
            bar.update(progress, {percentage: progress.toFixed(), entity});
        }
    }

    // I may in the future be smarter about this, but for now this will just delete and
    // fully recreate the tw_imports folder
    await del('tw_imports');
    fs.mkdirSync('./tw_imports');

    for (const extension of twConfig.extensionDependencies) {
        const slice = 1 / totalPackages;

        await getExtension(extension, slice);
    }

    for (const project of twConfig.projectDependencies) {
        const slice = 1 / totalPackages;
        installProgress.entity = 'Projects/' + project
        const entities = await getProjectEntities(project);
        const projectSlice = slice / (entities.rows.length + 1);

        installProgress.progress += projectSlice;

        for (const row of entities.rows) {

            // Don't import system objects as those are part of the default installation
            if (row.isSystemObject) continue;
            installProgress.progress += projectSlice;
            await getEntity(row.name, row.parentType, projectSlice);
        }
    }

    for (const entity of twConfig.entityDependencies) {
        const components = entity.split('/');
        await getEntity(components[1], components[0], 1 / totalPackages);
    }

    installProgress.progress = 1;
    installProgress.entity = 'Complete';

    bar.stop();

    console.log('');
}

exports.install = series(install);
