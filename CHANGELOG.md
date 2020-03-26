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