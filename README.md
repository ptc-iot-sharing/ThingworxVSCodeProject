**🖐 NOTE: This is still a work in progress.**

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
 * **Debug support**: By using the `ThingworxVSCodeDebugger` visual studio code extension and the `BMDebugServer` thingworx extension, developers can also debug their thingworx typescript projects directly from visual studio code. The debugger supports most common features including setting breakpoints, exception breakpoints, stepping, evaluating expressions and changing variable values. For more information about setting up debugging, see [Usage Guide](https://github.com/BogdanMihaiciuc/ThingworxVSCodeDebugger/wiki/Usage-Guide)

# Development

## Pre-Requisites

The following software is required:

* [NodeJS](https://nodejs.org/en/): needs to be installed and added to the `PATH`. You should use the LTS version (v14+).

The following software is recommended:

* [Visual Studio Code](https://code.visualstudio.com/): An integrated developer enviroment with great javascript and typescript support. You can also use any IDE of your liking, it just that most of the testing was done using VSCode.

## Development Environment

In order to develop with this project you need to do the following:
1. Clone this repository
2. Copy `.env.sample` to `.env` and configure the `THINGWORX_SERVER` and either `THINGWORX_USER` and `THINGWORX_PASSWORD` or `THINGWORX_APP_KEY` and other fields as needed.
3. Open `package.json` and `twconfig.json` and change the fields as needed.
4. Run `npm install`. This will install the development dependencies for the project.
5. Run `npm run watch:declarations`. This will start a background process that is needed for generating certain files. **Don't forget this as compilation can fail if the generated files become stale.**
6. Start working on the project.

## Entity Dependencies

By default, the project contains the declarations for all the out of the box entities available in a fresh installation of Thingworx, however there may be the case that you need to use some entities that had been previously created on the Thingworx instance using the composer. To handle this, it is possible to define entity dependencies in `twconfig.json`. There are two types of dependencies that can be specified there:
 - `projectDependencies`: An array where you specify the Thingworx project names on which your local projects depends. This will download the declaration for all of the entities that are included in the project.
 - `entityDependencies`: An array where you specify entity types and names (e.g. `"Things/MyThing"`). This can be used to download specific entities, such as extension templates.

Whenever you change `twconfig.json`, run `npx twc install` to pull the declarations from the Thingworx server specified in `package.json`.

Whenever entities are downloaded in this way, all other dependencies are downloaded as well, so if your `MyThing` thing depends on the `MyDataShape` data shape, you don't need to specify both in `twconfig.json`.

## File Structure
```
ThingworxVSCodeProject
│   README.md              // This file
│   package.json           // Standard npm package details; the package name is also used as the extension name
│   tsconfig.json          // Standard typescript configuration file
│   twconfig.json          // Thingworx-specific configuration
│   metadata.xml           // Thingworx metadata file for this extension; This is automatically updated based on your package.json and build settings
│   LICENSE                // License file
│   .env                   // Contains environment variables and thingworx connection details
└───src                    // Main folder where your development will take place
│   └───file1.ts           // Thingworx entity file
│   │   ...
│   └───[Project1]         // In multi-project mode, each subfolder represents a thingworx project
│   │   └───src            // Project's source folder
│   │   │   └───file2.ts   // Thingworx entity file
│   │   │   ...
│   │   └───tsconfig.json  // Project's typescript configuration file; Project dependencies are extracted from this
└───static                 // Supporting files required for compilation; Don't change these
└───tw_imports             // Entity dependencies downloaded from a Thingworx server
└───build                  // Temporary folder used during compilation
└───zip                    // Location of the built extension
```

## Source Files

Any TypeScript file you add to the `src` folder will be compiled into a Thingworx entity. There are some restrictions on what is allowed to be included in these files, namely:

 - There may only be a single class definition per file - each file must correspond to a single entity
 - The root of the file may only contain:
    - One class definition
    - Interface definitions
    - Enums, but only if they are declared `const` since these are erased at runtime
    - Comments
 - Property, method argument and return types can use either Thingworx base types or TypeScript standard types such as `string`, `number`. 
 - Imports and modules are ignored; these will lead to runtime errors if used


## Current Limitations

 - Only Things, ThingTemplates, ThingShapes, DataShapes, Users, Groups, Organizations and Projects are supported currently. For other types of entities you will still need to use the composer.
 - <strike>Description currently cannot be specified. In the future, JSDoc comments will be used for this purpose.</strike> (1 Apr 2020)
 - <strike>Non-javascript services such as SQL</strike> or Flow services are not supported. (19 Mar 2022)
 - <strike>Projects and </strike>tags cannot be specified currently. </strike>Note that your project will however be packaged as an extension that can be easily installed, updated and removed.</strike> (27 Jul 2020)
 - <strike>Configuration tables are not currently supported, but this likely to be supported in some manner soon.</strike> (23 Mar 2020)
 - XML handling via E4X is not and will not be supported. Using E4X syntax will lead to a compilation error. You should use the various XML methods to work around this limitation.

## Build

To build the extension, run `npm run build` in the root of the project. This will generate an extension .zip file in the zip folder in the root of the project.

To build the extension and upload it to Thingworx, run `npm run upload` in the root of the project. The details of the Thingworx server to which the script will upload the extension are declared in the project's environment or `package.json` file. These are:
 * `thingworxServer` - The server to which the extension will be uploaded.
 * `thingworxAppKey` or `thingworxUser` and `thingworxPassword` - The credentials used for uploading. This should be a user that has permission to install extensions.

To create a debug build that can be used for debugging, add the `--debug` argument to any task. For example, to create and upload a debug build, run `npx twc upload --debug`. For more information about debugging and debug builds, see [BMDebugServer](https://github.com/BogdanMihaiciuc/BMDebugServer) and [ThingworxVSCodeDebugger](https://github.com/BogdanMihaiciuc/ThingworxVSCodeDebugger).

## Deployment

Deployment to Thingworx is part of the build process as explained above. Alternatively, you can manually install the extension that is generated in the zip folder in the root of the project.

# Recent Changes

For a complete changelog see [CHANGELOG.md](CHANGELOG.md).

## 2 May 2022

- Support for inline SQL
- Support for generating `fieldDefinitions` exports
- Support for the `override` keyword

## 22 Apr 2022
- Support for global functions
- Experimental support for API types generation

## 8 Apr 2022
- Support for method helpers such as METHOD_NAME and LOG_PREFIX

## 28 Mar 2022
- Support for inferred types in property declarations and data shape field declarations

## 19 Mar 2022

- Support for multiple projects
- Support for SQL services
- Support for using environment variables in configuration table values

## 28 Dec 2021

- Support for creating debug builds.

# Credit/Acknowledgment

[Petrisor Lacatus](https://github.com/stefan-lacatus) - had the original idea for this, inferred property types and bug fixes, support for method helpers, API generation, data shape inheritance, `declare` on class members.

[Bogdan Mihaiciuc](https://github.com/BogdanMihaiciuc) - main developer.

[thomas-thomas-tfs](https://github.com/thomas-thomas-tfs) - deployment using app keys.

[carlo-quinonez](https://github.com/carlo-quinonez) - bug fixes and documentation improvements.

[dwil618](https://github.com/dwil618) - support for min/max aspects and date initializers.

# Disclaimer

The Thingworx VSCode Project is not an official Thingworx product. It is something developed to improve the life of a Thingworx developer and they need to understand that it is not supported and any issues encountered are their own responsibility.

# License

[MIT License](LICENSE)
