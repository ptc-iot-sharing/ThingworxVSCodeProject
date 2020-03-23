# 23 Mar 2020

The `upload` task no longer removes the current version of the extension before uploading the new one. Instead, it increments the version number then upgrades the existing extension in place. This is because removing and then reinstalling the extension would cause property and configuration table values to be lost during the upgrade.

A new `removeAndUpload` task can be used to obtain the previous behaviour.

# 1.0.0

Inital Release