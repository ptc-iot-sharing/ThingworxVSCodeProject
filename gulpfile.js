// @ts-check

const { series, src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const del = require('del');

const ts = require('gulp-typescript');
const fs = require('fs');
const path = require('path');

const transformer = require('bm-thing-transformer');
const jsonToTsTransformer = require('bm-thing-transformer/dist/JsonToTsTransformer');

const xml2js = require('xml2js');
const gulpZip = require('gulp-zip');
const request = require('request');

// @ts-ignore
const package = require('./package.json');
const zipName = `${package.packageName}-${package.version}.zip`;

// @ts-ignore
const twConfig = require('./twconfig.json');
const { randomUUID } = require('crypto');

/**
 * Command line arguments; the following are supported:
 * * __--debug__: Creates a debug build with additional debug information
 */
 const args = (argList => {
    let arg = {}, a, opt, thisOpt, curOpt;
    for (a = 0; a < argList.length; a++) {
        thisOpt = argList[a].trim();
        opt = thisOpt.replace(/^\-+/, '');
        
        if (opt === thisOpt) {
            // argument value
            if (curOpt) arg[curOpt] = opt;
            curOpt = null;
        }
        else {
            // argument name
            curOpt = opt;
            arg[curOpt] = true;
        }
    }
    return arg;
})(process.argv);

require('dotenv').config();

const thingworxConnectionDetails = (() => {
    if (!process.env.THINGWORX_SERVER) {
        console.error('The thingworx server is not defined in your environment, defaulting to loading from package.json');
        return ({
            thingworxServer: package.thingworxServer,
            thingworxUser: package.thingworxUser,
            thingworxPassword: package.thingworxPassword,
            thingworxAppKey: package.thingworxAppKey
        });
    }
    else {
        return ({
            thingworxServer: process.env.THINGWORX_SERVER,
            thingworxUser: process.env.THINGWORX_USER,
            thingworxPassword: process.env.THINGWORX_PASSWORD,
            thingworxAppKey: process.env.THINGWORX_APPKEY
        });
    }
})();

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

/**
 * Authorizes the given request with either an app key, or a user/password combo
 * depending on which fields are defined in `package.json`
 * @param {request.Request} request 
 */
function authorizeRequest(request) {
    if (thingworxConnectionDetails.thingworxAppKey) {
        request.setHeader('appKey', thingworxConnectionDetails.thingworxAppKey);
    }
    else {
        request.auth(thingworxConnectionDetails.thingworxUser, thingworxConnectionDetails.thingworxPassword);
    }
}

async function clean() {
    await del('build');
}

async function build(cb) {
    //@ts-ignore
    twConfig.store = {};

    const project = ts.createProject('./tsconfig.json', {
        getCustomTransformers: (program) => ({
            before: [
                transformer.TWThingTransformerFactory(program, __dirname, false, false, twConfig)
            ],
            after: [
                transformer.TWThingTransformerFactory(program, __dirname, true, false, twConfig)
            ]
        })
    });

    // Prepare the transformers
    await new Promise(resolve => project.src().pipe(project()).dts.pipe(concat('index.d.ts')).pipe(dest('build/@types')).on('finish', resolve));

    const entities = [];
    // Write out the entity XML files
    // @ts-ignore
    for (const key in twConfig.store) {
        if (key == '@globalBlocks') continue;
        // @ts-ignore
        const entity = twConfig.store[key];
        entity.write();
        entities.push(entity);
    }

    // If project entity generation is enabled, create the project entity
    if (twConfig.generateProjectEntity) {
        const builder = new xml2js.Builder();
        const dependencies = {extensions: '', projects: ''};

        if (twConfig.includeProjectDependencies) {
            dependencies.extensions = (twConfig.extensionDependencies || []).join(',');
            dependencies.projects = (twConfig.projectDependencies || []).join(',');
        }

        const projectEntity = {
            Entities: {
                Projects: [
                    {
                        Project: [
                            {
                                $: {
                                    artifactId: "",
                                    "aspect.projectType": "Component",
                                    dependsOn: JSON.stringify(dependencies),
                                    description: "",
                                    documentationContent: "",
                                    groupId: "",
                                    homeMashup: "",
                                    minPlatformVersion: "",
                                    name: twConfig.projectName,
                                    packageVersion: "1.0.0",
                                    projectName: twConfig.projectName,
                                    publishResult: "",
                                    state: "DRAFT",
                                    tags: "",
                                },
                            },
                        ],
                    },
                ],
            },
        };

        const projectXML = builder.buildObject(projectEntity);
        
        if (!fs.existsSync(`build`)) fs.mkdirSync(`build`);
        if (!fs.existsSync(`build/Entities`)) fs.mkdirSync(`build/Entities`);
        if (!fs.existsSync(`build/Entities/Projects`)) fs.mkdirSync(`build/Entities/Projects`);

        fs.writeFileSync('build/Entities/Projects/Project.xml', projectXML);
    }

    // If this is a debug build, create a notifier thing that informs the debugger runtime that new source files are available
    if (args.debug) {
        const debugEntityName = randomUUID();
        const debugEntity = transformer.TWThingTransformer.projectDebugThingXML(debugEntityName, entities, package.thingworxProjectName);
        writeDebugInformationEntity(debugEntityName, debugEntity);
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

/**
 * Generates and writes out the Thingworx declarations to `/static/gen/Generated.d.ts`.
 * This makes it possible to use syntax like `ThingTemplates.GenericThing.GetImplementingThings()`.
 */
async function buildDeclarations() {
    //@ts-ignore
    twConfig.store = {};
    if (args.debug) {
        //@ts-ignore
        twConfig.debug = true;
    }

    const project = ts.createProject('./tsconfig.json', {
        getCustomTransformers: (program) => ({
            before: [
                transformer.TWThingTransformerFactory(program, __dirname, false, true, twConfig)
            ]
        })
    });

    // Prepare the transformers
    await new Promise(resolve => project.src().pipe(project()).on('finish', resolve).on('error', resolve));

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
}

/**
 * Starts a watch process that generates Thingworx declarations whenever any source file is changed.
 */
async function gen() {
    return watch('src/**/*.ts', buildDeclarations);
}

async function removeExtension() {
    const host = package.thingworxServer;

    return new Promise((resolve, reject) => {
        const twRequest = request.post({
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
                console.error("Failed to delete project from thingworx");
                // Failing to remove the previous version shouldn't stop the upload process; this can happen, for example, during
                // the first upload when the project when no previous version exists
                resolve();
                return;
            }

            if (httpResponse.statusCode != 200) {
                console.log(`Failed to delete project from thingworx. We got status code ${httpResponse.statusCode} (${httpResponse.statusMessage})
                body:
                ${httpResponse.body}`);
            } 
            else {
                console.log(`Deleted previous version of ${package.packageName} from Thingworx!`);
            }
            resolve();
        })
        

        authorizeRequest(twRequest);
    })
}

async function upload() {
    const host = thingworxConnectionDetails.thingworxServer;

    console.log(`Uploading to ${thingworxConnectionDetails.thingworxServer}...`);

    return new Promise((resolve, reject) => {
        // load the file from the zip folder
        let formData = {
            file: fs.createReadStream(
                path.join('zip', zipName)
            )
        };
        // POST request to the ExtensionPackageUploader servlet
        const twRequest = request.post(
                {
                    url: `${host}/Thingworx/ExtensionPackageUploader?purpose=import`,
                    headers: {
                        'X-XSRF-TOKEN': 'TWX-XSRF-TOKEN-VALUE',
                        'Accept':'application/json'
                    },
                    formData: formData
                },
                function (err, httpResponse, body) {
                    if (err) {
                        console.error("Failed to upload project to thingworx");
                        reject(err);
                        return;
                    }
                    if (httpResponse.statusCode != 200) {
                        reject(`Failed to upload project to thingworx. We got status code ${httpResponse.statusCode} (${httpResponse.statusMessage})
body:
${httpResponse.body}`);
                    } else {
                        console.log(`Uploaded project version ${package.version} to Thingworx!`);
                        console.log(body);
                        resolve();
                    }
                }
            );

        authorizeRequest(twRequest);

    })
}

async function deploy() {
    // Discover any deployment endpoints and invoke them one by one
    let deploymentEndpoints = [];

    // @ts-ignore
    for (const key in twConfig.store) {
        if (key == '@globalBlocks') continue;
        // @ts-ignore
        const entity = twConfig.store[key];
        
        if (entity.deploymentEndpoints?.length) {
            deploymentEndpoints = deploymentEndpoints.concat(entity.deploymentEndpoints);
        }
    }

    const host = thingworxConnectionDetails.thingworxServer;

    for (const endpoint of deploymentEndpoints) {
        await new Promise((resolve, reject) => {
            console.log(`Running deployment script "${endpoint}...`);
            const twRequest = request.post(
                {
                    url: `${host}/Thingworx/${endpoint}`,
                    headers: {
                        'X-XSRF-TOKEN': 'TWX-XSRF-TOKEN-VALUE',
                        'Accept':'application/json',
                        'Content-Type': 'application/json'
                    }
                },
                function (err, httpResponse, body) {
                    if (err) {
                        console.error(`Deployment script "${endpoint}" failed:`);
                        reject(err);
                        return;
                    }
                    if (httpResponse.statusCode != 200) {
                        reject(`Deployment script "${endpoint}" failed with status code ${httpResponse.statusCode} (${httpResponse.statusMessage})
    body:
    ${httpResponse.body}`);
                    } else {
                        resolve();
                    }
                }
            );

            authorizeRequest(twRequest);
        });
    }
}

exports.buildDeclarations = series(buildDeclarations);
exports.build = series(buildDeclarations, clean, build, zip);
exports.upload = series(buildDeclarations, incrementVersion, clean, build, zip, upload);
exports.deploy = series(buildDeclarations, incrementVersion, clean, build, zip, upload, deploy);
exports.removeAndUpload = series(buildDeclarations, clean, build, zip, removeExtension, upload);
exports.removeAndDeploy = series(buildDeclarations, clean, build, zip, removeExtension, upload, deploy);
exports.remove = series(removeExtension);
exports.default = series(gen);

/**
 * Writes the thing that represents the debug information entity, providing information
 * about the available breakpoint locations in each file.
 * @param {string} name     The name of the entity.
 * @param {string} xml      The entity's XML content.
 */
function writeDebugInformationEntity(name, xml) {
    if (!fs.existsSync(`build`)) fs.mkdirSync(`build`);
    if (!fs.existsSync(`build/Entities`)) fs.mkdirSync(`build/Entities`);

    if (!fs.existsSync(`build/Entities/Things`)) fs.mkdirSync(`build/Entities/Things`);

    fs.writeFileSync(`build/Entities/Things/${name}.xml`, xml);
}


// ************************************************** THINGWORX DEPENDENCIES ***********************************************

let installProgress;

const installedEntities = {};

/**
 * An array that contains the thing package names which require a generic argument.
 */
const GenericThingPackages = ['StreamThing', 'DataTableThing', 'RemoteStream', 'RemoteDataTable'];

async function getEntity(name, kind, slice) {
    // Thing packages will be handled by templates
    if (kind == 'ThingPackages') return;

    // Skip if already installed
    if (installedEntities[kind] && installedEntities[kind][name]) return;

    const host = thingworxConnectionDetails.thingworxServer;

    installProgress.entity = `${kind}/${name}`;

    return await new Promise((resolve, reject) => {
        const twRequest = request.get(
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
                            case 'Organizations':
                                importEntityDeclaration(name, kind, body.description, Object.keys(body.organizationalUnits).map(o => JSON.stringify(o)).join(' | '));
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
            );
           
            authorizeRequest(twRequest);

    });
}


async function getEntityDependencies(name, kind) {
    const host = thingworxConnectionDetails.thingworxServer;

    return await new Promise((resolve, reject) => {
        const twRequest = request.post(
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
            );
            
        authorizeRequest(twRequest);

    });
}

function baseTypeOfPropertyDefinition(definition) {
    let baseType = definition.baseType;

    if (baseType == 'JSON') return 'TWJSON';

    if (baseType == 'INFOTABLE' && definition.aspects.dataShape) {
        if (definition.aspects.dataShape.indexOf('.') != -1) {
            return `InfoTableReference<${JSON.stringify(definition.aspects.dataShape)}>`;
        }
        else {
            return `INFOTABLE<${definition.aspects.dataShape}>`;
        }
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
    ${service.name}(args: ${argumentTypesOfService(service)}): ${service.aspects.isAsync ? 'NOTHING' : baseTypeOfPropertyDefinition(service.resultType)};
`;
}

function superclassOfEntity(entity, genericArgument = '') {
    const shapes = Object.keys(entity.implementedShapes);
    const shapeReferences = shapes.map(shape => JSON.stringify(shape));
    const superclassName = entity.thingTemplate || entity.baseThingTemplate;

    if (!shapes.length) {
        if (superclassName.indexOf('.') != -1) {
            return `ThingTemplateReference(${JSON.stringify(superclassName)})`;
        }
        else {
            return superclassName + genericArgument;
        }
    }

    const isReferenceType = (superclassName.indexOf('.') != -1) || shapes.some(shape => shape.indexOf('.') != -1);
    if (isReferenceType) {
        return `ThingTemplateWithShapesReference(${JSON.stringify(superclassName)}, ${shapeReferences.join(', ')})`;
    }
    else {
        return `ThingTemplateWithShapes(${superclassName}${genericArgument}, ${shapes.join(', ')})`;
    }

}

function importThing(body) {
    const name = body.name;
    let sanitizedName = body.name.replace(/\./g, '_');
    let declaration;
    const targetFileName = `${name}${twConfig.generateOnlyTypesForDependencies ? '.d' : ''}.ts`;

    if (twConfig.generateOnlyTypesForDependencies) {
        sanitizedName = body.name.replace(/\./g, '_');
        // Things that inherit from generic thing packages must specify an instance of the generic argument
        const hasGenericArgument = GenericThingPackages.includes(body.effectiveThingPackage);
        const genericArgument = hasGenericArgument ? `<${body.configurationTables.Settings?.rows?.[0]?.dataShape ?? 'DataShapeBase'}>` : '';
        
        declaration = `declare class ${sanitizedName} extends ${superclassOfEntity(body, genericArgument)} {\n\n`;

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
    } else {
        const jsonTransformer = new jsonToTsTransformer.JsonThingToTsTransformer();
        let data = jsonTransformer.createTsDeclarationForEntity(body, 'Thing');
        sanitizedName = data.className;
        declaration = data.declaration;
    }

    // Write out the thing
    if (!fs.existsSync(`./tw_imports/Things/`)) {
        fs.mkdirSync(`./tw_imports/Things/`);
    }

    installedEntities.Things = installedEntities.Things || {};
    installedEntities.Things[name] = true;

    fs.writeFileSync(`./tw_imports/Things/${targetFileName}`, `${declaration}\n\ndeclare interface Things {
    /**
     * ${body.description}
     */ 
    ${JSON.stringify(name)}: ${sanitizedName}; 
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
    let sanitizedName = body.name.replace(/\./g, '_');
    let declaration;
    const targetFileName = `${name}${twConfig.generateOnlyTypesForDependencies ? '.d' : ''}.ts`;
    // Templates that inherit from generic thing packages must be defined with a generic argument
    const hasGenericArgument = GenericThingPackages.includes(body.effectiveThingPackage);
    const genericArgument = hasGenericArgument ? '<T extends DataShapeBase>' : '';
    const superclassGenericArgument = hasGenericArgument ? '<T>' : '';
    if (twConfig.generateOnlyTypesForDependencies) {    
        declaration = `declare class ${sanitizedName}${genericArgument} extends ${superclassOfEntity(body, superclassGenericArgument)} {\n\n`;

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
    } else {
        const jsonTransformer = new jsonToTsTransformer.JsonThingToTsTransformer();
        let data = jsonTransformer.createTsDeclarationForEntity(body, 'ThingTemplate');
        sanitizedName = data.className;
        declaration = data.declaration;
    }
    // Write out the thing
    if (!fs.existsSync(`./tw_imports/ThingTemplates/`)) {
        fs.mkdirSync(`./tw_imports/ThingTemplates/`);
    }

    installedEntities.ThingTemplates = installedEntities.ThingTemplates || {};
    installedEntities.ThingTemplates[name] = true;

    fs.writeFileSync(`./tw_imports/ThingTemplates/${targetFileName}`, `${declaration}\n\ndeclare interface ThingTemplates {
    /**
     * ${body.description}
     */ 
    ${JSON.stringify(name)}: ThingTemplateEntity<${sanitizedName}${hasGenericArgument ? '<any>' : ''}>; 
}`
    );
}

function importThingShape(body) {
    const name = body.name;
    let sanitizedName = body.name.replace(/\./g, '_');
    let declaration;
    const targetFileName = `${name}${twConfig.generateOnlyTypesForDependencies ? '.d' : ''}.ts`;

    if (twConfig.generateOnlyTypesForDependencies) {
        declaration = `declare class ${sanitizedName} extends ThingShapeBase {\n\n`;
        
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
    } else {
        const jsonTransformer = new jsonToTsTransformer.JsonThingToTsTransformer();
        let data = jsonTransformer.createTsDeclarationForEntity(body, 'ThingShape');
        sanitizedName = data.className;
        declaration = data.declaration;
    }

    // Write out the thing
    if (!fs.existsSync(`./tw_imports/ThingShapes/`)) {
        fs.mkdirSync(`./tw_imports/ThingShapes/`);
    }

    installedEntities.ThingShapes = installedEntities.ThingShapes || {};
    installedEntities.ThingShapes[name] = true;

    fs.writeFileSync(`./tw_imports/ThingShapes/${targetFileName}`, `${declaration}\n\ndeclare interface ThingShapes {
    /**
     * ${body.description}
     */ 
    ${JSON.stringify(name)}: ThingShapeEntity<${sanitizedName}>; 
}`
    );
}

function importDataShape(body) {
    const name = body.name;
    let sanitizedName = body.name.replace(/\./g, '_');
    let declaration;
    const targetFileName = `${name}${twConfig.generateOnlyTypesForDependencies ? '.d' : ''}.ts`;

    if (twConfig.generateOnlyTypesForDependencies) {
        declaration = `declare class ${sanitizedName} extends DataShapeBase {\n\n`;
        
        for (const property of Object.values(body.fieldDefinitions)) {
            declaration += declarationOfProperty(property);
        }
        declaration += '\n}\n';
    } else {
        const jsonTransformer = new jsonToTsTransformer.JsonThingToTsTransformer();
        let data = jsonTransformer.createTsDeclarationForEntity(body, 'DataShape');
        sanitizedName = data.className;
        declaration = data.declaration;
    }
    // Write out the thing
    if (!fs.existsSync(`./tw_imports/DataShapes/`)) {
        fs.mkdirSync(`./tw_imports/DataShapes/`);
    }

    installedEntities.DataShapes = installedEntities.DataShapes || {};
    installedEntities.DataShapes[name] = true;

    fs.writeFileSync(`./tw_imports/DataShapes/${targetFileName}`, `${declaration}\n\ndeclare interface DataShapes {
    /**
     * ${body.description}
     */ 
    ${JSON.stringify(name)}: DataShapeEntity<${sanitizedName}>; 
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
    ${service.name}(args: ${argumentTypesOfService(service)}): ${service.aspects.isAsync ? 'NOTHING' : baseTypeOfPropertyDefinition(service.Outputs)};
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
    const host = thingworxConnectionDetails.thingworxServer;
   
    

    return await new Promise((resolve, reject) => {
        const twRequest = request.post(
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
            );

        authorizeRequest(twRequest);

    });
}

async function getExtension(name, slice) {
    // Extensions may optionally have a version number attached to them, remove that before processing
    if (name.indexOf(':') >= 0) {
        name = name.substring(0, name.indexOf(':'))
    }

    if (installedEntities.Extensions && installedEntities.Extensions[name]) {
        return installProgress.progress += slice;
    }

    installProgress.entity = `Extensions/${name}/@types`;

    const host = thingworxConnectionDetails.thingworxServer;

    // Try first to get the type definitions, if they exist
    // TODO: This will always return 404 as it looks like only widget files are accessible in Common/extensions
    // Will need another workaround for this
    const definition = await new Promise((resolve, reject) => {
        const twRequest = request.get(
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
            );
           
        authorizeRequest(twRequest);

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
        const twRequest = request.post(
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
           
        authorizeRequest(twRequest);

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
    console.log(`Downloading TWX dependencies from ${thingworxConnectionDetails.thingworxServer}...`);

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
