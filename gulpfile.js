// @ts-check

const { series, src, dest, watch } = require('gulp');
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

async function incrementVersion() {
    const version = package.version.split('-');
    const versionComponents = version[0].split('.');

    const minorVersion = (parseInt(versionComponents[2]) || 0) + 1;
    versionComponents[2] = minorVersion;

    version[0] = versionComponents.join('.');
    
    package.version = version.join('-');
    console.log(`Increased version number to ${package.version}`);

    fs.writeFileSync('./package.json', JSON.stringify(package, undefined, '\t'));
}

async function clean() {
    await del('build');
}

async function build(cb) {
    const project = ts.createProject('./tsconfig.json', {
        getCustomTransformers: () => ({
            before: [
                transformer.TWThingTransformerFactory(__dirname)
            ],
            after: [
                transformer.TWThingTransformerFactory(__dirname, true)
            ]
        })
    });

    // Prepare the transformers
    await new Promise(resolve => project.src().pipe(project()).on('finish', resolve));

    // Write out the entity XML files
    // @ts-ignore
    for (const key in global._TWEntities) {
        // @ts-ignore
        const entity = global._TWEntities[key];
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
        await del('static/gen');
        const project = ts.createProject('./tsconfig.json', {
            getCustomTransformers: () => ({
                before: [
                    transformer.TWThingTransformerFactory(__dirname)
                ]
            })
        });
    
        // Prepare the transformers
        await new Promise(resolve => project.src().pipe(project()).on('finish', resolve));
    
        // Write out the entity XML files
        let definition = '';
        // @ts-ignore
        for (const key in global._TWEntities) {
            // @ts-ignore
            const entity = global._TWEntities[key];
            definition += `\n${entity.toDefinition()}\n`;
        }
    
        fs.mkdirSync('static/gen');
        fs.writeFileSync('static/gen/Generated.d.ts', definition);
    })
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

            if (err) {
                console.error("Failed to delete widget from thingworx");
                return;
            }
            if (httpResponse.statusCode != 200) {
                console.log(`Failed to delete widget from thingworx. We got status code ${httpResponse.statusCode} (${httpResponse.statusMessage})
                body:
                ${httpResponse.body}`);
            } else {
                console.log(`Deleted previous version of ${package.packageName} from Thingworx!`);
            }
        })
        .auth(user, password);
    })
}

exports.build = series(clean, build, zip);
exports.upload = series(clean, build, zip, upload);
exports.default = series(gen);
