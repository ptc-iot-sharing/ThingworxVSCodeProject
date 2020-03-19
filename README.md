**NOTE: This is still an early work in progress.**

# Intro

A project template that allows the development of Thingworx models in a TypeScript IDE like Visual Studio Code.

# Who is it for

This template is primarily aimed at Thingworx developer who are already very familiar with the composer but are also used to working in a regular IDE. To be able to succesfully use this, you should at least have an understanding of how the modelling environment works in Thingworx and some basic knowledge of TypeScript.

# Why use it

There are many advantages to this, and here are some of them:

 * **Git friendly**: In this project, thingworx entities are really just typescript source files (with some restrictions) so they can be easily used with git clients.
 * **Collaboration**: Collaboration in thingworx can be difficult. If developers use the same instance they can overwrite each other's changes by mistake; if they use different instances it can be difficult to merge the work. Using a classic file-based project instead makes it easier for multiple developers to work on the same project against the same git repository.
 * **Version management**: The entities are deployed as an extension instead of a regular entity export. Because of this, the entities themselves "gain" the version of the extension they are part of. Additionally, upgrading the extension will cause Thingworx to automatically remove old entities, whereas with a regular export, leftover entities must be found and removed manually.
 * **Developer friendly**: Creating entities in thingworx isn't very comfortable for developers. Common features found in IDEs, such as finding references, project-wide searching for code and even having multiple services open at the same time are not really possible. Since this project is just a typescript project, you can make use of all of your IDE's features.
 * **Typescript features**: You can also make use of typescript features that don't exist in thingworx, such as creating and using interfaces, marking methods and properties as private and using newer javascript features that can be transpiled. Note that some of these are erased on the Thingworx side, but they can nevertheless be useful while developing.
 * **Separate development and runtime**: In thingworx, any change happens immediately and can affect the system. When using this project template, you have to first build & publish your updated code for it to take effect.

# Development

## Pre-Requisites

The following software is required:

* [NodeJS](https://nodejs.org/en/): needs to be installed and added to the `PATH`. You should use the LTS version.
* [gulp command line utility](https://gulpjs.com/docs/en/getting-started/quick-start): is needed to run the build script.

The following software is recommended:

* [Visual Studio Code](https://code.visualstudio.com/): An integrated developer enviroment with great javascript and typescript support. You can also use any IDE of your liking, it just that most of the testing was done using VSCode.

## Development Environment

In order to develop with this project you need to do the following:
1. Clone this repository
2. Open `package.json` and configure the `thingworxServer`, `thingworxUser`, `thingworxPassword` and other fields as needed.
3. Run `npm install`. This will install the development dependencies for the project.
4. Run `gulp`. This will start a background process that is needed for generating certain files. **Don't forget this as compilation can fail if the generated files become stale.**
5. Start working on the project.

## File Structure
```
ThingworxVSCodeProject
│   README.md         // this file
│   package.json      // here you specify Thingworx connection details
│   metadata.xml      // thingworx metadata file for this widget. This is automatically updated based on your package.json and build settings
│   LICENSE           // license file
│   gulpfile.js       // build script
└───src               // main folder where your developement will take place
│   │   file1.ts            // thingworx entity file
|   |   ...
└───static            // supporting files required for compilation. Don't change these.
└───build             // temporary folder used during compilation
└───zip               // location of the built extension
```

## Source Files

Any TypeScript file you add to the `src` folder will be compiled into a Thingworx entity. There are some restrictions on what is allowed to be included in these files, namely:

 - There may only be a single class definition per file - each file must correspond to a single entity
 - The root of the file may only contain:
    - One class definition
    - Interface definitions
    - Enums, but only if they are declared `const` since these are erased at runtime
    - Comments
 - Property, method argument and return types must only be Thingworx base types. You can only use TypeScript standard types such as `string`, `number` and others in method bodies
 - Imports and modules are ignored; these will lead to runtime errors if used


## Current Limitations

 - Only Things, ThingTemplates, ThingShapes and DataShapes are supported currently. For other types of entities you will still need to use the composer.
 - Non-javascript services such as SQL or Flow services are not supported.
 - Projects and tags cannot be specified currently. Note that your project will however be packaged as an extension that can be easily installed, updated and removed.

## Build

To build the extension, run `gulp build` in the root of the project. This will generate an extension .zip file in the zip folder in the root of the project.

To build the extension and upload it to Thingworx, run `gulp upload` in the root of the project. The details of the Thingworx server to which the script will upload the extension are declared in the project's `package.json` file. These are:
 * `thingworxServer` - The server to which the extension will be uploaded.
 * `thingworxUser` and `thingworxPassword` - The credentials used for uploading. This should be a user that has permission to install extensions.

## Deployment

Deployment to Thingworx is part of the build process as explained above. Alternatively, you can manually install the extension that is generated in the zip folder in the root of the project.

# Credits and Aknowledgements

[Petrisor Lacatus](https://github.com/stefan-lacatus), who had the original idea of using `tsc` to create Thingworx entities. This uses some definitions and ideas from [MonacoEditorTWX](https://github.com/ptc-iot-sharing/MonacoEditorTWX).

# License

[MIT License](LICENSE)