# 22 Apr 2022

Adds support for declaring and using global functions. Whenever a service makes a call to a global function, that global function's definition will be copied to the service's code during compilation. This will also copy over any other global functions that the initial function calls. Added support for a new property `"globalFunctions"` in `twconfig.json` to control whether these declarations are allowed.

Adds experimental support for generating an API declarations file that can be consumed by a separate frontend or node project. ([stefan-lacatus](https://github.com/stefan-lacatus))

# 8 Apr 2022

Adds support for generating method helpers, that are useful variables that can be used for logging. The following variables can be enabled: `METHOD_NAME`, `CLASS_NAME`, `FILE_PATH` and `LOG_PREFIX`. Added support for a new property `"methodHelpers"` in `twconfig.json` to control which of these are generated. ([stefan-lacatus](https://github.com/stefan-lacatus))

# 28 Mar 2022

Resolves an issue that caused multiproject builds to fail on windows systems.

Added support for using inferred types in property declarations and data shape field declarations. ([stefan-lacatus](https://github.com/stefan-lacatus))

Resolved an issue that cause base type errors to report the invalid base types as `undefined` rather than the actual types.

Resolved an issue that caused permission decorators applied to templates to be incorrectly emitted as runtime permissions instead of instance runtime permissions. ([stefan-lacatus](https://github.com/stefan-lacatus))

# 19 Mar 2022

Moved the various build and dependency tasks into an external `bm-thing-cli` command line tool and removed `gulpfile.js` as well as the gulp-related dependencies. Additionally, the decorator and default entity declarations have been moved into `bm-thing-transformer`. These changes should make it easier to update to new verions as fewer local files will need to be updated. Existing gulp projects can use the `npx twc upgrade` command to update to the new format.

Added support for creating and building multiple thingworx projects from the same typescript project. These can be built into either separate extensions for each project or a single extension containing all projects. Multi-project mode can be enabled by using the `npx twc add-project` command. Local project dependencies can be specified in each project's `tsconfig.json` file, by adding a relative to another project's source folder (e.g. `"../<MyProjectDependency>"`).

Added support for SQL services using the `@SQLQuery` and `@SQLCommand` decorators, and the `SQLQuery` and `SQLCommand` tagged literal functions. Added an example database thing using them.

Added a new `generateThingInstances` option to `twconfig.json` that, when enabled, will cause a number of random things to be declared whenever a thing template or thing shape is defined. This allows types that use subsets of `keyof Things` to not resolve to `never` and enable proper autocomplete and type checking for `THINGNAME` values for types that have no instances by default. The generated names change during every build to prevent referencing those virtual entities directly by accident.

The `GROUPNAME` type is now properly defined as `keyof Groups` instead of `string`.

The `minimumThingWorxVersion` option can now be specified in `twconfig.json` instead of `package.json`.

Added the type definitions for the following filter types: `Matches`, `NotMatches`, `TAGGED`, `NOTTAGGED`, `IN`, `NOTIN`, `MissingValue`, `NotMissingValue`, `Near`, `NotNear`.

Improved type checking on queries by matching the type of the property specified by `fieldName` to the type of the values specified in the filter. For example, the following query will report a type error if the `"pressure"` property is a `NUMBER`:
```ts
ThingShapes.ExampleThingShape.QueryImplementingThingsWithData({query: {
    filters: {
        type: 'EQ',
        fieldName: 'pressure', // An error is reported here because '3' cannot be assigned to 'pressure' property
        value: '3',
    }
}})
```

Resolves various issues with importing declarations from a thingworx server:
 - When importing declaration from thingworx, importing entities with the same names but different types will no longer lead to duplicate identifiers.
 - Importing entities whose names contain non-alphanumeric characters is now supported.
 - Importing data things using data shapes whose names are not valid typescript identifiers will now no longer lead to compile time errors.
 - Importing templates no longer causes some superclass members to be redeclared.
 - Importing entities whose member names are not valid typescript identifiers is now supported.

Added the definitions for the `QueryImplementingThingsOptimized` and `QueryImplementingThingsOptimizedWithTotalCount` services on thing templates and thing shapes. Additionally improved the typings for `GetImplementingThingsWithData` so that intellisense can autocomplete all property names on the resulting infotable rows.

Added the definitions for a `StyleThemeEntity` to resolve compilation errors when style theme entities were imported from a thingworx server.

Added the definition for the standard `ThingNames` data shape.

# 29 Jan 2022

Replaced all instances of the `JSON` type with the `TWJSON` type.

Improved the formatting of the upload response message. Instead of printing out the JSON response that Thingworx provides, the build script will now try to extract and present the relevant information.

# 29 Dec 2021

Added the ability to generate debug builds by using the `--debug` argument.

# 13 Oct 2021

Added support for the `@unit` decorator which can be used to specify a unit for numeric properties.

# 28 Jun 2021

Added support for the `@allow`, `@allowInstance`, `@deny` and `@denyInstance` decorators which can be used to specify permissions at the entity or property, service or event levels.

Added support for the `@visible` and `@visibleInstance` decorators which can be used to specify visibility permissions for entities.

Added support for creating users and groups via a new `UserList` class.

Added support for creating organizations via the new `OrganizationBase` class.

Added support for using environment variables in service code or for default values. Like const enums, these are inlined at compile time. Note that these are based on the environment variables of the system used to build the application and not the target thingworx server.

Added two new `deploy` and `removeAndDeploy` tasks. Added a new `@deploy` decorator that can be added to thing services. When using either of those two tasks, after a successful installation, the services marked with that decorator will be invoked.

Updates the transformer version which resolves a critical issue resulting from the upgrade to Typescript 4 that caused replacement to fail for references to `this` or constant values in service code.

# 18 Jun 2021

Cleaned up `.DS_Store` files from the repo and placeholder values from the `metadata.xml` file.

Add support for specifying connection details in an `.env` file that can be excluded from git. If present, this file will have priority over the connection details specified in `package.json`.

Add support for specifying the types of a service's arguments using an interface instead of a type literal.

# 15 Apr 2021

Improved documentation and example.

Declarations are now also generated prior to building.

# 8 Apr 2021

Fixed an import error when importing entities with async services.

Fixed an import error when importing entities that required generic arguments, such as those extending `Stream` or `DataTable`.

# 8 Mar 2021

Added support for using an app key instead of username and password for deployment.

# 6 Nov 2020

Added the `@ordinal(_)` decorator that can be used on data shape fields.

## Updates to Thing Transformer

Added support for the `@ordinal` decorator and the `autoGenerateDataShapeOrdinals` configuration flag.

# 8 Apr 2020

## Updates to Thing Transformer

Fixed import error when using infotables without a specified data shape.

# 6 Apr 2020

The build phase will now also emit declarations under `build/@types/index.d.ts`.

Added support for specifying extensions as dependencies.

# 3 Apr 2020

Added support for downloading entity declarations from Thingworx.

# 2 Apr 2020

Added example for using ES6 features.

## Updates to Thing Transformer

The transformer will now inline helpers when required by services, allowing syntax that requires them in ES5 to be used.

# 1 Apr 2020

Improved generics for `Stream` and `DataTable`.

## Updates to Thing Transformer

Added support for specifying Thingworx descriptions via JSDoc comments.

Added support for using and inlining const enum members.

# 24 Mar 2020

When declarations are generated, the generated directory is no longer deleted and recreated, instead the declarations file is overwritten in place. This resolves improper error messages being thrown by the typescript compiler during the declaration generation phase.

The return types for `CreateValues` and `CreateValuesWithData` on data shapes now have the correct generics applied.

## Updates to Thing Transformer

Resolves a crash when returning infotables or thingnames from services.

# 23 Mar 2020

The `upload` task no longer removes the current version of the extension before uploading the new one. Instead, it increments the version number then upgrades the existing extension in place. This is because removing and then reinstalling the extension would cause property and configuration table values to be lost during the upgrade.

A new `removeAndUpload` task can be used to obtain the previous behaviour.

Added support for specifying configuration tables via the `@ConfigurationTables` decorator. A new example thing template makes use of this decorator.

## Updates to Thing Transformer

Resolves an issue where the base thing template for a thing template was improperly specified as `thingTemplate` instead of `baseThingTemplate`.

Resolves an issue where literals other than strings or numbers that were specified in property initializers would be ignored and cause a crash during compilation.

Added support for configuration table definition decorators.

# 1.0.0

Inital Release