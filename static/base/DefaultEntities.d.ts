declare type RemoteEvent = any;

declare class RootEntity {}


declare class ApplicationKeyEntity extends RootEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the associated user name
	 * @return Key ID
	 */
	GetUserName(args?:{}): STRING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Returns if the application key is expired
	 * @return true if the application key is expired
	 */
	IsExpired(args?:{}): BOOLEAN;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Set the expiration date
	 * @param expirationDate The expiration date of the application key
	 * @return result
	 */
	SetExpirationDate(args?:{expirationDate?: DATETIME}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the expiration date
	 * @return The expiration date of the application key
	 */
	GetExpirationDate(args?:{}): DATETIME;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Access the key ID
	 * @return Key ID
	 */
	GetKeyID(args?:{}): STRING;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Resets the expiration date to the default set in the UserManagementSubsystem configuration
	 * @return result
	 */
	ResetExpirationDateToDefault(args?:{}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Set the associated user name for this application key
	 * @param name User name
	 * @return result
	 */
	SetUserName(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Set the client name for this application key
	 * @param name Client name
	 * @return result
	 */
	SetClientName(args?:{name?: STRING}): NOTHING;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Set the IP whitelist for this application key
	 * @param list IP whitelist (IP addresses 
	 * @return result
	 */
	SetIPWhitelist(args?:{list?: STRING}): NOTHING;

}



declare class AuthenticatorEntity extends RootEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Returns group mappings between the Identity Provider and Thingworx
	 * @return User Provisioning group mappings
	 */
	GetProvisioningUserGroupMappings(args?:{}): INFOTABLE<UserProvisioningUserGroupMappings>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Returns Provisioning user defaults (e.g. Description, Home Mashup, etc)
	 * @return User Provisioning User Defaults
	 */
	GetProvisioningUserDefaults(args?:{}): INFOTABLE<UserProvisioningUserDefaults>;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Returns users that are excluded during provisioning
	 * @return User
	 */
	GetProvisioningUserExclusionList(args?:{}): INFOTABLE<UserProvisioningExclusionList>;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Reloads the Resource Provider Scopes
	 * @return result
	 */
	ReloadResourceProviderScopes(args?:{}): NOTHING;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Sets default groups assigned to users during provisioning
	 * @param groupNames User Provisioning default user groups
	 * @return result
	 */
	SetProvisioningUserDefaultGroups(args?:{groupNames?: INFOTABLE<UserProvisioningDefaultGroups>}): NOTHING;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Sets Identity Provider attribute names used when assigning user defaults
	 * @param idpUserDefaults User Provisioning User Defaults
	 * @return result
	 */
	SetProvisioningUserDefaultsFromIdP(args?:{idpUserDefaults?: INFOTABLE<UserProvisioningIdentityProviderAttributes>}): NOTHING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Sets group mappings between the Identity Provider and Thingworx
	 * @param groupMappings User Provisioning group mappings
	 * @return result
	 */
	SetProvisioningUserGroupMappings(args?:{groupMappings?: INFOTABLE<UserProvisioningUserGroupMappings>}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Returns true if SSO is enabled
	 * @return true if sso is enabled
	 */
	IsSSOEnabled(args?:{}): BOOLEAN;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Returns Provisioning Options (e.g. Create User, Modify User, etc.)
	 * @return User Provisioning Options
	 */
	GetProvisioningOptions(args?:{}): INFOTABLE<UserProvisioningOptions>;

	/**
	 * Enable this authenticator
	 * @return result
	 */
	EnableAuthenticator(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Sets Provisioning user defaults (e.g. Description, Home Mashup, etc)
	 * @param userDefaults User Provisioning User Defaults
	 * @return result
	 */
	SetProvisioningUserDefaults(args?:{userDefaults?: INFOTABLE<UserProvisioningUserDefaults>}): NOTHING;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Returns Identity Provider attribute names used when assigning user defaults
	 * @return User Provisioning User Defaults
	 */
	GetProvisioningUserDefaultsFromIdP(args?:{}): INFOTABLE<any>;

	/**
	 * Returns user extension defaults, plus mappings from the Identity Provider
	 * @return User Provisioning user extension mappings
	 */
	GetProvisioningUserExtensionMappings(args?:{}): INFOTABLE<UserProvisioningUserExtensionMappings>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Sets users that are excluded during provisioning
	 * @param users User
	 * @return result
	 */
	SetProvisioningUserExclusionList(args?:{users?: INFOTABLE<UserProvisioningUserExclusionList>}): NOTHING;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Returns default groups assigned to users during provisioning
	 * @return User Provisioning default user groups
	 */
	GetProvisioningUserDefaultGroups(args?:{}): INFOTABLE<UserProvisioningDefaultGroups>;

	/**
	 * Sets Provisioning Options (e.g. Create User, Modify User, etc.)
	 * @param provisioningOptions 
	 * @return result
	 */
	SetProvisioningOptions(args?:{provisioningOptions?: INFOTABLE<UserProvisioningOptions>}): NOTHING;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Disable this authenticator
	 * @return result
	 */
	DisableAuthenticator(args?:{}): NOTHING;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Sets user extension defaults, plus mappings from the Identity Provider
	 * @param userExtensionMappings User Provisioning user extension mappings
	 * @return result
	 */
	SetProvisioningUserExtensionMappings(args?:{userExtensionMappings?: INFOTABLE<UserProvisioningUserExtensionMappings>}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}


declare class ThingShapeEntity<T extends ThingShapeBase> extends RootEntity {


	__thingShapeType: T;

	/**
	 * Return a list of all the things that implement this shape along with the thing properties and values
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Name pattern
	 * @param query Query definition
	 * @param tags Tags to search on
	 * @return Implementing Things With Data
	 */
	QueryImplementingThingsWithData(args?:{maxItems?: NUMBER, nameMask?: STRING, query?: QUERY<Struct<T>>, tags?: TAGS}): INFOTABLE<Struct<T>>;

	/**
	 * Set the property binding for a property
	 * @param propertyName Property name
	 * @param aspects Aspects for the local binding
	 * @param sourceThingName Thing name to bind to
	 * @param sourcePropertyName Source property name
	 * @return result
	 */
	SetLocalPropertyBinding(args?:{propertyName?: STRING, aspects?: JSON, sourceThingName?: STRING, sourcePropertyName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Disable Subscription
	 * @param propertyName Property name
	 * @param thingName Thing name
	 * @param eventName Event name
	 * @return result
	 */
	DisableSubscription(args?:{propertyName?: STRING, thingName?: THINGNAME, eventName?: STRING}): NOTHING;

	/**
	 * Add or update an event definition
	 * @param remoteEventName Remote event name
	 * @param name Property name
	 * @param description Property description
	 * @param category Category
	 * @param remote Is a remote service
	 * @param dataShape Data shape
	 * @return result
	 */
	AddEventDefinition(args?:{remoteEventName?: STRING, name?: STRING, description?: STRING, category?: STRING, remote?: BOOLEAN, dataShape?: DATASHAPENAME}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Remove the remote service binding for a service
	 * @param serviceName Service name
	 * @return result
	 */
	RemoveRemoteServiceBinding(args?:{serviceName?: STRING}): NOTHING;

	/**
	 * Get alert definition for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Alert definition
	 */
	GetAlertDefinition(args?:{alertName?: STRING, property?: STRING}): INFOTABLE<AlertDefinition>;

	/**
	 * Get effective alert definitions for a property
	 * @param property Property name
	 * @return Alert definition
	 */
	GetAlertDefinitions(args?:{property?: STRING}): INFOTABLE<AlertDefinition>;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Remove an alert for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @param persistent Persist this change
	 * @return result
	 */
	RemoveAlert(args?:{alertName?: STRING, property?: STRING, persistent?: BOOLEAN}): NOTHING;

	/**
	 * Get the current property definitions for this thing
	 * @param type Type to filter on
	 * @return Property values
	 */
	GetInstancePropertyDefinitions(args?:{type?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get a location alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetLocationAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): LOCATION;

	/**
	 * Get the mashups related to this thing shape
	 * @return Mashups
	 */
	GetMashups(args?:{}): INFOTABLE<MashupList>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetIntegerAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): INTEGER;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Remove the remote property binding for a property
	 * @param propertyName Property name
	 * @return result
	 */
	RemoveRemotePropertyBinding(args?:{propertyName?: STRING}): NOTHING;

	/**
	 * Remove a service definition
	 * @param name Service name
	 * @return result
	 */
	RemoveServiceDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetLongAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): LONG;

	/**
	 * Get the property binding for a property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetLocalPropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get the current service definitions for this thing
	 * @return Service definitions
	 */
	GetInstanceServiceDefinitions(args?:{}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetInstanceRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Add or update a service definition
	 * @param name Property name
	 * @param description Property description
	 * @param remoteServiceName Remote service name
	 * @param category Category
	 * @param remote Is a remote service
	 * @param parameters Service parameters
	 * @param resultType Service result type
	 * @param timeout Request timeout
	 * @return result
	 */
	AddServiceDefinition(args?:{name?: STRING, description?: STRING, remoteServiceName?: STRING, category?: STRING, remote?: BOOLEAN, parameters?: INFOTABLE<FieldDefinition>, resultType?: INFOTABLE<FieldDefinition>, timeout?: INTEGER}): NOTHING;

	/**
	 * Set a location alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetLocationAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: LOCATION}): NOTHING;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Add or update an alert for a property
	 * @param alertType Alert type
	 * @param alertName Alert name
	 * @param property Property name
	 * @param description Alert description
	 * @param attributes Alert attributes
	 * @param priority Alert priority
	 * @param persistent Persist this change
	 * @param enabled Alert enabled
	 * @return result
	 */
	AddOrUpdateAlert(args?:{alertType?: STRING, alertName?: STRING, property?: STRING, description?: STRING, attributes?: INFOTABLE, priority?: INTEGER, persistent?: BOOLEAN, enabled?: BOOLEAN}): NOTHING;

	/**
	 * Add a property transform definition
	 * @param logged Log property value
	 * @param name Property name
	 * @param description Property description
	 * @param category Category
	 * @param persistent Persist these changes
	 * @param propertyTransformConfig Infotable of key/value pairs that configure the desired property transform calculation. The available keys can be found in the help center documentation.
	 * @param timeout Request timeout
	 * @return result
	 */
	AddPropertyTransformDefinition(args?:{logged?: BOOLEAN, name?: STRING, description?: STRING, category?: STRING, persistent?: BOOLEAN, propertyTransformConfig?: INFOTABLE<FieldValuePair>, timeout?: INTEGER}): NOTHING;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Set property logging status for a specific property
	 * @param propertyName Property name
	 * @param enabled Enable/disable logging
	 * @return result
	 */
	SetPropertyLogging(args?:{propertyName?: STRING, enabled?: BOOLEAN}): NOTHING;

	/**
	 * Get the current event definitions for this thing
	 * @return Event definitions
	 */
	GetInstanceEventDefinitions(args?:{}): INFOTABLE<EventDefinition>;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Set the additional information for units for a specific Long, Integer, or Number property.
	 * @param propertyName Property name
	 * @param units Units (eg. lbs, F, inches, etc.) associated with input. For information only.
	 * @return result
	 */
	SetUnitsForNumericPropertyDefinition(args?:{propertyName?: STRING, units?: STRING}): NOTHING;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Get a list of logged properties for this thing that are of a numeric data type
	 * @return Property names
	 */
	GetNumericLoggedProperties(args?:{}): INFOTABLE<PropertyDefinition>;

	/**
	 * Return a list of all the things that implement this shape
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Name pattern
	 * @param query Query definition
	 * @param tags Tags to search on
	 * @return Implementing Things
	 */
	QueryImplementingThings(args?:{maxItems?: NUMBER, nameMask?: STRING, query?: QUERY<RootEntityList>, tags?: TAGS}): INFOTABLE<RootEntityList>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetInstanceRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove the remote event binding for a event
	 * @param eventName Event name
	 * @return result
	 */
	RemoveRemoteEventBinding(args?:{eventName?: STRING}): NOTHING;

	/**
	 * Set the remote property binding for a property
	 * @param propertyName Property name
	 * @param pushThreshold Push threshold
	 * @param aspects Aspects for the remote binding
	 * @param foldType How a remote property's value should be handled by the server when a connection is lost
	 * @param sourcePropertyName Source property name
	 * @param timeout Request timeout
	 * @param pushType Push type
	 * @param cacheTime Property's cache time value at the server
	 * @return result
	 */
	SetRemotePropertyBinding(args?:{propertyName?: STRING, pushThreshold?: NUMBER, aspects?: JSON, foldType?: STRING, sourcePropertyName?: STRING, timeout?: INTEGER, pushType?: STRING, cacheTime?: INTEGER}): NOTHING;

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get local alert definitions for a property
	 * @param property Property name
	 * @return Alert definition
	 */
	GetLocalAlertDefinitions(args?:{property?: STRING}): INFOTABLE<AlertDefinition>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Set a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetIntegerAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: INTEGER}): NOTHING;

	/**
	 * Add a property definition
	 * @param defaultValue Default value for property
	 * @param remoteBindingAspects Aspects for the remote binding
	 * @param description Property description
	 * @param readOnly Read only
	 * @param type Data type
	 * @param remote Is a remote property
	 * @param remotePropertyName Remote property name
	 * @param timeout Request timeout
	 * @param pushType Push type
	 * @param dataChangeThreshold Data change threshold
	 * @param logged Log property value
	 * @param name Property name
	 * @param pushThreshold Push threshold
	 * @param dataChangeType Data change type
	 * @param category Category
	 * @param persistent Persist property value
	 * @param dataShape Data shape
	 * @return result
	 */
	AddPropertyDefinition(args?:{defaultValue?: STRING, remoteBindingAspects?: JSON, description?: STRING, readOnly?: BOOLEAN, type?: BASETYPENAME, remote?: BOOLEAN, remotePropertyName?: STRING, timeout?: INTEGER, pushType?: STRING, dataChangeThreshold?: NUMBER, logged?: BOOLEAN, name?: STRING, pushThreshold?: NUMBER, dataChangeType?: STRING, category?: STRING, persistent?: BOOLEAN, dataShape?: DATASHAPENAME}): NOTHING;

	/**
	 * Get a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetNumberAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): NUMBER;

	/**
	 * Get a date alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetDateTimeAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): DATETIME;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Return a list of all the things that implement this shape along with the thing properties and values
	 * @param maxItems Maximum number of items to return
	 * @param basicPropertyNames Basic Property names
	 * @param nameMask Name pattern
	 * @param propertyNames Property names
	 * @param query Query definition
	 * @param tags Tags to search on
	 * @return Implementing Things With Data
	 */
	QueryImplementingThingsWithNamedData(args?:{maxItems?: NUMBER, basicPropertyNames?: INFOTABLE<EntityList>, nameMask?: STRING, propertyNames?: INFOTABLE<EntityList>, query?: QUERY, tags?: TAGS}): INFOTABLE<RootEntityList>;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get a list of logged properties for this thing
	 * @param type Type to filter on
	 * @return Property names
	 */
	GetLoggedProperties(args?:{type?: BASETYPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Remove a event definition
	 * @param name Event name
	 * @return result
	 */
	RemoveEventDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Check to see if an alert is defined for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Has alert definition
	 */
	HasAlert(args?:{alertName?: STRING, property?: STRING}): BOOLEAN;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Enable Subscription
	 * @param propertyName Property name
	 * @param thingName Thing name
	 * @param eventName Event name
	 * @return result
	 */
	EnableSubscription(args?:{propertyName?: STRING, thingName?: THINGNAME, eventName?: STRING}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Set the remote event binding for a event
	 * @param sourceEventName Source event name
	 * @param eventName Event name
	 * @return result
	 */
	SetRemoteEventBinding(args?:{sourceEventName?: STRING, eventName?: STRING}): NOTHING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Remove a property definition
	 * @param name Property name
	 * @return result
	 */
	RemovePropertyDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Set a string alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetStringAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Set the remote service binding for a service
	 * @param sourceServiceName Source service name
	 * @param serviceName Service name
	 * @param timeout Request timeout
	 * @return result
	 */
	SetRemoteServiceBinding(args?:{sourceServiceName?: STRING, serviceName?: STRING, timeout?: INTEGER}): NOTHING;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Set a date alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetDateTimeAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: DATETIME}): NOTHING;

	/**
	 * Get the effective local property bindings
	 * @return Property binding
	 */
	GetEffectiveLocalPropertyBindings(args?:{}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get a boolean alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetBooleanAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Return a list of all the things that implement this shape
	 * @return Implementing Things
	 */
	GetImplementingThings(args?:{}): INFOTABLE<RootEntityList>;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Add an instance  run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddInstanceRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Set a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetNumberAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: NUMBER}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Set a boolean alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetBooleanAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: BOOLEAN}): NOTHING;

	/**
	 * Delete an instance  run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteInstanceRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Return a list of all the things that implement this shape along with the thing properties and values
	 * @return Implementing Things
	 */
	GetImplementingThingsWithData(args?:{}): INFOTABLE<RootEntityList>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Get property logging status for a specific property
	 * @param propertyName Property name
	 * @return Property logging status
	 */
	GetPropertyLogging(args?:{propertyName?: STRING}): BOOLEAN;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Remove the local property binding for a property
	 * @param propertyName Property name
	 * @return result
	 */
	RemoveLocalPropertyBinding(args?:{propertyName?: STRING}): NOTHING;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get the remote event binding for a event
	 * @param eventName Event name
	 * @return Event binding
	 */
	GetRemoteEventBinding(args?:{eventName?: STRING}): INFOTABLE<RemoteEventBinding>;

	/**
	 * Get a list of assigned instance runtime permissions
	 * @return Permission list
	 */
	GetInstanceRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the remote service binding for a service
	 * @param serviceName Service name
	 * @return Service binding
	 */
	GetRemoteServiceBinding(args?:{serviceName?: STRING}): INFOTABLE<RemoteServiceBinding>;

	/**
	 * Get the remote property binding for a property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetRemotePropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<RemotePropertyBinding>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the effective local property binding for a property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetEffectiveLocalPropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}

declare class DataShapeEntity<T extends DataShapeBase> extends RootEntity {


	__dataShapeType: T;

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Add a field definition
	 * @param name Property name
	 * @param description Property description
	 * @param type Data type
	 * @param ordinal Ordinal/order
	 * @param primaryKey Is Primary Key
	 * @param dataShape Data shape
	 * @return result
	 */
	AddFieldDefinition(args?:{name?: STRING, description?: STRING, type?: BASETYPENAME, ordinal?: INTEGER, primaryKey?: BOOLEAN, dataShape?: DATASHAPENAME}): NOTHING;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a field definition by name for this data shape
	 * @param name Field name
	 * @return Field definitions
	 */
	GetFieldDefinition(args?:{name?: STRING}): INFOTABLE<FieldDefinition>;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Get the effective fields for this data shape
	 * @return Field definitions
	 */
	GetEffectiveFieldDefinitions(args?:{}): INFOTABLE<FieldDefinition>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the metadata for this data shape as JSON
	 * @return Field definitions
	 */
	GetDataShapeMetadataAsJSON(args?:{}): JSON;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the entities that use this data shape
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetRelatedEntities(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the fields for this data shape
	 * @return Field definitions
	 */
	GetFieldDefinitions(args?:{}): INFOTABLE<FieldDefinition>;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get an effective field definition by name for this data shape
	 * @param name Field name
	 * @return Field definitions
	 */
	GetEffectiveFieldDefinition(args?:{name?: STRING}): INFOTABLE<FieldDefinition>;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Create an empty info table of the correct datashape for this data table
	 * @return Created Infotable
	 */
	CreateValues(args?:{}): INFOTABLE<T>;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the effective metadata for this data shape as JSON
	 * @return Field definitions
	 */
	GetEffectiveDataShapeMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Remove a field definition
	 * @param name Property name
	 * @return result
	 */
	RemoveFieldDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Create an info table of the correct datashape for this stream and include data values
	 * @param values Data values (JSON Object)
	 * @return Created Infotable
	 */
	CreateValuesWithData(args?:{values?: JSON}): INFOTABLE<T>;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Update a field definition
	 * @param name Property name
	 * @param description Property description
	 * @param type Data type
	 * @param ordinal Ordinal/order
	 * @param primaryKey Is Primary Key
	 * @param dataShape Data shape
	 * @return result
	 */
	UpdateFieldDefinition(args?:{name?: STRING, description?: STRING, type?: BASETYPENAME, ordinal?: INTEGER, primaryKey?: BOOLEAN, dataShape?: DATASHAPENAME}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}


declare class ThingTemplateEntity<T extends GenericThing> extends RootEntity {


	__thingTemplateType: T;

	/**
	 * Return a list of all the things that implement this template along with the thing properties and values
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Name pattern
	 * @param query Query definition
	 * @param tags Tags to search on
	 * @return Implementing Things With Data
	 */
	QueryImplementingThingsWithData(args?:{maxItems?: NUMBER, nameMask?: STRING, query?: QUERY<Struct<T>>, tags?: TAGS}): INFOTABLE<Struct<T>>;

	/**
	 * Set an entire shared multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetSharedMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Set the property binding for a property
	 * @param propertyName Property name
	 * @param aspects Aspects for the local binding
	 * @param sourceThingName Thing name to bind to
	 * @param sourcePropertyName Source property name
	 * @return result
	 */
	SetLocalPropertyBinding(args?:{propertyName?: STRING, aspects?: JSON, sourceThingName?: STRING, sourcePropertyName?: STRING}): NOTHING;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddInstanceVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the identifier for a thing
	 * @return Value Stream Name
	 */
	GetValueStream(args?:{}): THINGNAME;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Disable Subscription
	 * @param propertyName Property name
	 * @param thingName Thing name
	 * @param eventName Event name
	 * @return result
	 */
	DisableSubscription(args?:{propertyName?: STRING, thingName?: THINGNAME, eventName?: STRING}): NOTHING;

	/**
	 * Add or update an event definition
	 * @param remoteEventName Remote event name
	 * @param name Property name
	 * @param description Property description
	 * @param category Category
	 * @param remote Is a remote service
	 * @param dataShape Data shape
	 * @return result
	 */
	AddEventDefinition(args?:{remoteEventName?: STRING, name?: STRING, description?: STRING, category?: STRING, remote?: BOOLEAN, dataShape?: DATASHAPENAME}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Update/add one or more rows in a shared multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetSharedConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Remove the remote service binding for a service
	 * @param serviceName Service name
	 * @return result
	 */
	RemoveRemoteServiceBinding(args?:{serviceName?: STRING}): NOTHING;

	/**
	 * Get alert definition for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Alert definition
	 */
	GetAlertDefinition(args?:{alertName?: STRING, property?: STRING}): INFOTABLE<AlertDefinition>;

	/**
	 * Get effective alert definitions for a property
	 * @param property Property name
	 * @return Alert definition
	 */
	GetAlertDefinitions(args?:{property?: STRING}): INFOTABLE<AlertDefinition>;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Remove an alert for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @param persistent Persist this change
	 * @return result
	 */
	RemoveAlert(args?:{alertName?: STRING, property?: STRING, persistent?: BOOLEAN}): NOTHING;

	/**
	 * Get the current property definitions for this thing
	 * @param type Type to filter on
	 * @return Property values
	 */
	GetInstancePropertyDefinitions(args?:{type?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get a location alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetLocationAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): LOCATION;

	/**
	 * Get a list of instance visibility permissions
	 * @return Permission list
	 */
	GetInstanceVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get the mashups related to this thing template
	 * @return Mashups
	 */
	GetMashups(args?:{}): INFOTABLE<MashupList>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetIntegerAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): INTEGER;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific shared configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetSharedConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Set the value stream for a thing
	 * @param name Value stream name
	 * @return result
	 */
	SetValueStream(args?:{name?: THINGNAME}): NOTHING;

	/**
	 * Remove the remote property binding for a property
	 * @param propertyName Property name
	 * @return result
	 */
	RemoveRemotePropertyBinding(args?:{propertyName?: STRING}): NOTHING;

	/**
	 * Remove a service definition
	 * @param name Service name
	 * @return result
	 */
	RemoveServiceDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetLongAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): LONG;

	/**
	 * Get a list of assigned instance design time permissions
	 * @return Permission list
	 */
	GetInstanceDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the property binding for a property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetLocalPropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get the current service definitions for this thing
	 * @return Service definitions
	 */
	GetInstanceServiceDefinitions(args?:{}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetInstanceRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Add or update a service definition
	 * @param name Property name
	 * @param description Property description
	 * @param remoteServiceName Remote service name
	 * @param category Category
	 * @param remote Is a remote service
	 * @param parameters Service parameters
	 * @param resultType Service result type
	 * @param timeout Request timeout
	 * @return result
	 */
	AddServiceDefinition(args?:{name?: STRING, description?: STRING, remoteServiceName?: STRING, category?: STRING, remote?: BOOLEAN, parameters?: INFOTABLE<FieldDefinition>, resultType?: INFOTABLE<FieldDefinition>, timeout?: INTEGER}): NOTHING;

	/**
	 * Set a location alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetLocationAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: LOCATION}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetInstanceVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Add or update an alert for a property
	 * @param alertType Alert type
	 * @param alertName Alert name
	 * @param property Property name
	 * @param description Alert description
	 * @param attributes Alert attributes
	 * @param priority Alert priority
	 * @param persistent Persist this change
	 * @param enabled Alert enabled
	 * @return result
	 */
	AddOrUpdateAlert(args?:{alertType?: STRING, alertName?: STRING, property?: STRING, description?: STRING, attributes?: INFOTABLE, priority?: INTEGER, persistent?: BOOLEAN, enabled?: BOOLEAN}): NOTHING;

	/**
	 * Delete an instance design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteInstanceDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Add a property transform definition
	 * @param logged Log property value
	 * @param name Property name
	 * @param description Property description
	 * @param category Category
	 * @param persistent Persist these changes
	 * @param propertyTransformConfig Infotable of key/value pairs that configure the desired property transform calculation. The available keys can be found in the help center documentation.
	 * @param timeout Request timeout
	 * @return result
	 */
	AddPropertyTransformDefinition(args?:{logged?: BOOLEAN, name?: STRING, description?: STRING, category?: STRING, persistent?: BOOLEAN, propertyTransformConfig?: INFOTABLE<FieldValuePair>, timeout?: INTEGER}): NOTHING;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Add an instance design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddInstanceDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Add multiple property definitions at once
	 * @param ignoreInvalidDefinitions True will skip over any invalid definitions provided, false indicates to fail the whole transaction when atleast one invalid definition is found
	 * @param values Infotable where each row defines a property, using the PropertyDefinitionWithDetails data shape
	 * @return Table of information about which properties caused errors while attempting to add
	 */
	AddPropertyDefinitions(args?:{ignoreInvalidDefinitions?: BOOLEAN, values?: INFOTABLE<PropertyDefinitionWithDetails>}): INFOTABLE<BulkProcessingReport>;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Set a list of instance design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetInstanceDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Set property logging status for a specific property
	 * @param propertyName Property name
	 * @param enabled Enable/disable logging
	 * @return result
	 */
	SetPropertyLogging(args?:{propertyName?: STRING, enabled?: BOOLEAN}): NOTHING;

	/**
	 * Get the current event definitions for this thing
	 * @return Event definitions
	 */
	GetInstanceEventDefinitions(args?:{}): INFOTABLE<EventDefinition>;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Set the additional information for units for a specific Long, Integer, or Number property.
	 * @param propertyName Property name
	 * @param units Units (eg. lbs, F, inches, etc.) associated with input. For information only.
	 * @return result
	 */
	SetUnitsForNumericPropertyDefinition(args?:{propertyName?: STRING, units?: STRING}): NOTHING;

	/**
	 * Return a list of all the things that implement this template along with the thing property history
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of things
	 * @param endDate End time
	 * @param nameMask Name pattern
	 * @param query Thing query definition
	 * @param maxDataItems Maximum number of data rows per thing
	 * @param dataQuery Data query definition
	 * @param startDate Start time
	 * @param tags Tags to search on
	 * @return Implementing Things With Property History
	 */
	QueryImplementingThingsWithPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, nameMask?: STRING, query?: QUERY, maxDataItems?: NUMBER, dataQuery?: QUERY, startDate?: DATETIME, tags?: TAGS}): INFOTABLE;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Get a list of logged properties for this thing that are of a numeric data type
	 * @return Property names
	 */
	GetNumericLoggedProperties(args?:{}): INFOTABLE<PropertyDefinition>;

	/**
	 * Return a list of all the things that implement this template
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Name pattern
	 * @param query Query definition
	 * @param tags Tags to search on
	 * @return Implementing Things
	 */
	QueryImplementingThings(args?:{maxItems?: NUMBER, nameMask?: STRING, query?: QUERY<RootEntityList>, tags?: TAGS}): INFOTABLE<RootEntityList>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetInstanceRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove the remote event binding for a event
	 * @param eventName Event name
	 * @return result
	 */
	RemoveRemoteEventBinding(args?:{eventName?: STRING}): NOTHING;

	/**
	 * Set the remote property binding for a property
	 * @param propertyName Property name
	 * @param pushThreshold Push threshold
	 * @param aspects Aspects for the remote binding
	 * @param foldType How a remote property's value should be handled by the server when a connection is lost
	 * @param sourcePropertyName Source property name
	 * @param timeout Request timeout
	 * @param pushType Push type
	 * @param cacheTime Property's cache time value at the server
	 * @return result
	 */
	SetRemotePropertyBinding(args?:{propertyName?: STRING, pushThreshold?: NUMBER, aspects?: JSON, foldType?: STRING, sourcePropertyName?: STRING, timeout?: INTEGER, pushType?: STRING, cacheTime?: INTEGER}): NOTHING;

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get local alert definitions for a property
	 * @param property Property name
	 * @return Alert definition
	 */
	GetLocalAlertDefinitions(args?:{property?: STRING}): INFOTABLE<AlertDefinition>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Set a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetIntegerAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: INTEGER}): NOTHING;

	/**
	 * Add a property definition
	 * @param defaultValue Default value for property
	 * @param remoteBindingAspects Aspects for the remote binding
	 * @param description Property description
	 * @param readOnly Read only
	 * @param type Data type
	 * @param remote Is a remote property
	 * @param remotePropertyName Remote property name
	 * @param timeout Request timeout
	 * @param pushType Push type
	 * @param dataChangeThreshold Data change threshold
	 * @param logged Log property value
	 * @param name Property name
	 * @param pushThreshold Push threshold
	 * @param dataChangeType Data change type
	 * @param category Category
	 * @param persistent Persist property value
	 * @param dataShape Data shape
	 * @return result
	 */
	AddPropertyDefinition(args?:{defaultValue?: STRING, remoteBindingAspects?: JSON, description?: STRING, readOnly?: BOOLEAN, type?: BASETYPENAME, remote?: BOOLEAN, remotePropertyName?: STRING, timeout?: INTEGER, pushType?: STRING, dataChangeThreshold?: NUMBER, logged?: BOOLEAN, name?: STRING, pushThreshold?: NUMBER, dataChangeType?: STRING, category?: STRING, persistent?: BOOLEAN, dataShape?: DATASHAPENAME}): NOTHING;

	/**
	 * Get a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetNumberAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): NUMBER;

	/**
	 * Get a date alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetDateTimeAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): DATETIME;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Return a list of all the things that implement this template along with the specified thing properties and values
	 * @param maxItems Maximum number of items to return
	 * @param basicPropertyNames Basic Property names
	 * @param nameMask Name pattern
	 * @param propertyNames Property names
	 * @param query Query definition
	 * @param tags Tags to search on
	 * @return Implementing Things With Data
	 */
	QueryImplementingThingsWithNamedData(args?:{maxItems?: NUMBER, basicPropertyNames?: INFOTABLE<EntityList>, nameMask?: STRING, propertyNames?: INFOTABLE<EntityList>, query?: QUERY, tags?: TAGS}): INFOTABLE<RootEntityList>;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get a list of logged properties for this thing
	 * @param type Type to filter on
	 * @return Property names
	 */
	GetLoggedProperties(args?:{type?: BASETYPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Remove a event definition
	 * @param name Event name
	 * @return result
	 */
	RemoveEventDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Check to see if an alert is defined for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Has alert definition
	 */
	HasAlert(args?:{alertName?: STRING, property?: STRING}): BOOLEAN;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Enable Subscription
	 * @param propertyName Property name
	 * @param thingName Thing name
	 * @param eventName Event name
	 * @return result
	 */
	EnableSubscription(args?:{propertyName?: STRING, thingName?: THINGNAME, eventName?: STRING}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Set the remote event binding for a event
	 * @param sourceEventName Source event name
	 * @param eventName Event name
	 * @return result
	 */
	SetRemoteEventBinding(args?:{sourceEventName?: STRING, eventName?: STRING}): NOTHING;

	/**
	 * Delete all rows from a shared multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllSharedConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Return a list of all the things that implement this template along with the thing property history
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of things
	 * @param endDate End time
	 * @param propertyNames Property names
	 * @param nameMask Name pattern
	 * @param query Thing query definition
	 * @param maxDataItems Maximum number of data rows per thing
	 * @param dataQuery Data query definition
	 * @param startDate Start time
	 * @param tags Tags to search on
	 * @return Implementing Things With Named Property History
	 */
	QueryImplementingThingsWithNamedPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyNames?: INFOTABLE<EntityList>, nameMask?: STRING, query?: QUERY, maxDataItems?: NUMBER, dataQuery?: QUERY, startDate?: DATETIME, tags?: TAGS}): INFOTABLE;

	/**
	 * Remove a property definition
	 * @param name Property name
	 * @return result
	 */
	RemovePropertyDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Set a string alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetStringAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Set the remote service binding for a service
	 * @param sourceServiceName Source service name
	 * @param serviceName Service name
	 * @param timeout Request timeout
	 * @return result
	 */
	SetRemoteServiceBinding(args?:{sourceServiceName?: STRING, serviceName?: STRING, timeout?: INTEGER}): NOTHING;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Check to see if a thing is derived from a particular thing template
	 * @param thingTemplateName Thing template name
	 * @return Is Derived From Template
	 */
	IsDerivedFromTemplate(args?:{thingTemplateName?: THINGTEMPLATENAME}): BOOLEAN;

	/**
	 * Set a date alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetDateTimeAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: DATETIME}): NOTHING;

	/**
	 * Get the effective local property bindings
	 * @return Property binding
	 */
	GetEffectiveLocalPropertyBindings(args?:{}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get a boolean alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetBooleanAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): BOOLEAN;

	/**
	 * Delete an entire shared configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteSharedConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteInstanceVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Return a list of all the things that implement this template
	 * @return Implementing Things
	 */
	GetImplementingThings(args?:{}): INFOTABLE<RootEntityList>;

	/**
	 * Get a list of instance design time permissions
	 * @return Permission list
	 */
	GetInstanceDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check if a shared configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsSharedMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Add an instance  run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddInstanceRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Set a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetNumberAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: NUMBER}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Set a boolean alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @param persistent Make it persistent
	 * @param value Parameter value
	 * @return result
	 */
	SetBooleanAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING, persistent?: BOOLEAN, value?: BOOLEAN}): NOTHING;

	/**
	 * Delete an instance  run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteInstanceRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Return a list of all the things that implement this template along with the thing properties and values
	 * @return Implementing Things
	 */
	GetImplementingThingsWithData(args?:{}): INFOTABLE<RootEntityList>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Get a specific shared configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetSharedConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Get property logging status for a specific property
	 * @param propertyName Property name
	 * @return Property logging status
	 */
	GetPropertyLogging(args?:{propertyName?: STRING}): BOOLEAN;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Remove the local property binding for a property
	 * @param propertyName Property name
	 * @return result
	 */
	RemoveLocalPropertyBinding(args?:{propertyName?: STRING}): NOTHING;

	/**
	 * Get base thing template name
	 * @return Base thing template name
	 */
	GetBaseThingTemplate(args?:{}): THINGTEMPLATENAME;

	/**
	 * Get effective thing package
	 * @return Effective thing package name
	 */
	GetEffectiveThingPackageName(args?:{}): STRING;

	/**
	 * Delete one or more rows from a shared multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteSharedConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get the remote event binding for a event
	 * @param eventName Event name
	 * @return Event binding
	 */
	GetRemoteEventBinding(args?:{eventName?: STRING}): INFOTABLE<RemoteEventBinding>;

	/**
	 * Get a list of assigned instance runtime permissions
	 * @return Permission list
	 */
	GetInstanceRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the remote service binding for a service
	 * @param serviceName Service name
	 * @return Service binding
	 */
	GetRemoteServiceBinding(args?:{serviceName?: STRING}): INFOTABLE<RemoteServiceBinding>;

	/**
	 * Get the remote property binding for a property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetRemotePropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<RemotePropertyBinding>;

	/**
	 * Set an entire shared configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetSharedConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Set a list of instance visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetInstanceVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the effective local property binding for a property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetEffectiveLocalPropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class ModelTagEntity extends RootEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Delete a specific vocabulary term
	 * @param term Vocabulary Term
	 * @return result
	 */
	DeleteVocabularyTerm(args?:{term?: STRING}): NOTHING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Whether the vocabulary is dynamic or not
	 * @return Is dynamic vocabulary indicator
	 */
	IsDynamic(args?:{}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Add a new vocabulary term
	 * @param term Vocabulary Term
	 * @return result
	 */
	AddVocabularyTerm(args?:{term?: STRING}): NOTHING;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Return a list of vocabulary terms
	 * @return Vocabulary Terms
	 */
	GetVocabularyTerms(args?:{}): INFOTABLE<VocabularyTerm>;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Return a list of entities linked to this vocabulary term
	 * @param filter Term filter
	 * @param maxItems Maximum number of items to return
	 * @param types Entity types
	 * @param term Term to match
	 * @return Vocabulary Term Links
	 */
	QueryVocabularyTermLinks(args?:{filter?: STRING, maxItems?: NUMBER, types?: JSON, term?: STRING}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Return a list of vocabulary terms and their usage/frequency
	 * @param filter Term filter
	 * @param maxItems Maximum number of items to return
	 * @return Vocabulary Term Usage
	 */
	QueryVocabularyTermUsage(args?:{filter?: STRING, maxItems?: NUMBER}): INFOTABLE<VocabularyTermUsage>;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Return a list of entities linked to this vocabulary term
	 * @param maxItems Maximum number of items to return
	 * @param term Term to match
	 * @return Vocabulary Term Links
	 */
	GetVocabularyTermLinks(args?:{maxItems?: NUMBER, term?: STRING}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Return a list of entities linked to this vocabulary
	 * @param maxItems Maximum number of items to return
	 * @return Vocabulary Links
	 */
	GetVocabularyLinks(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Return a list of vocabulary terms
	 * @param filter Term filter
	 * @param maxItems Maximum number of items to return
	 * @return Vocabulary Terms
	 */
	QueryVocabularyTerms(args?:{filter?: STRING, maxItems?: NUMBER}): INFOTABLE<VocabularyTerm>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Return a list of vocabulary terms and their usage/frequency
	 * @param maxItems Maximum number of items to return
	 * @return Vocabulary Term Usage
	 */
	GetVocabularyTermUsage(args?:{maxItems?: NUMBER}): INFOTABLE<VocabularyTermUsage>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Return a specific vocabulary term
	 * @param name Vocabulary term
	 * @return Vocabulary Terms
	 */
	GetVocabularyTerm(args?:{name?: STRING}): INFOTABLE<VocabularyTerm>;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class LogEntity extends RootEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Set the Log Level for a sub logger within the application
	 * @param sublogger Sublogger name
	 * @param level New log level
	 * @return result
	 */
	SetSubLoggerLevel(args?:{sublogger?: STRING, level?: STRING}): NOTHING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * turns OFF exception stack tracing for internal log statements that require it
	 * @return result
	 */
	DisableStackTracing(args?:{}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Write a new log entry
	 * @param level Log level (DEBUG, INFO, WARN, ERROR)
	 * @param origin Origin of the log event
	 * @param message Message to log
	 * @return result
	 */
	Write(args?:{level?: STRING, origin?: STRING, message?: STRING}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * turns ON exception stack tracing for internal log statements that require it
	 * @return result
	 */
	EnableStackTracing(args?:{}): NOTHING;

	/**
	 * Get Current Log Level
	 * @return Current Log Level Setting
	 */
	GetLogLevel(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Retrieve a list of all log entries with optional filtering, sorting, date range, and keyword query
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Keywords to search content
	 * @param fromLogLevel From log level
	 * @param instance Specific class or log source
	 * @param isRegex The Search expression should be treated as REGEX
	 * @param endDate End time
	 * @param origin Specific class or log source
	 * @param thread Log messages for a specific thread
	 * @param platformId Log message from a specific instance
	 * @param ascendingSearch Ascending search indicator (true = ascending, false = descending)
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param toLogLevel To log level
	 * @param user Log messages for a specific user
	 * @param sortFieldName Sort field name
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryLogEntries(args?:{maxItems?: NUMBER, searchExpression?: STRING, fromLogLevel?: STRING, instance?: STRING, isRegex?: BOOLEAN, endDate?: DATETIME, origin?: STRING, thread?: STRING, platformId?: STRING, ascendingSearch?: BOOLEAN, oldestFirst?: BOOLEAN, toLogLevel?: STRING, user?: USERNAME, sortFieldName?: STRING, startDate?: DATETIME}): INFOTABLE<LogEntry>;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get Log Levels
	 * @return Log levels
	 */
	GetLogLevels(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Set the Log Level Setting
	 * @param level New log write level
	 * @return result
	 */
	SetLogLevel(args?:{level?: STRING}): NOTHING;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Retrieve a list of all log entries
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @return Table entries
	 */
	GetLogEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER}): INFOTABLE<LogEntry>;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class MediaEntitieEntity extends RootEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the mime type
	 * @return Image mime type
	 */
	GetMimeType(args?:{}): STRING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Get the content as an image
	 * @return Image content
	 */
	GetImage(args?:{}): IMAGE;

	/**
	 * Stream a file
	 * @param headers Custom headers needed to stream from backend server 
	 * @param filePath Path on repository to file
	 * @param fileRepositoryThing FileRepositoryThing which manages the file that's streamed into it
	 * @param relativeURL Relative URL of backend server to stream content from
	 * @return Stream files from the specified backend system to the specified file in FileRepositoryThing 
	 */
	StreamToFileRepository(args?:{headers?: JSON, filePath?: STRING, fileRepositoryThing?: THINGNAME, relativeURL?: STRING}): JSON;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Streaming Media Metrics
	 * @return Streaming Media Metrics
	 */
	ReportMetrics(args?:{}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Stream a file
	 * @param headers Custom headers needed to stream to backend server 
	 * @param filePath Path on repository to file
	 * @param fileRepositoryThing FileRepositoryThing which manages the file to be streamed
	 * @param relativeURL Relative URL of backend server to stream content to
	 * @return Stream the specified file from FileRepositoryThing 
	 */
	StreamFromFileRepository(args?:{headers?: JSON, filePath?: STRING, fileRepositoryThing?: THINGNAME, relativeURL?: STRING}): JSON;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get a URL to proxy content relative to the configured origin server
	 * @param clientFollowsRedirect If the response of the proxied URL is of redirect type, then whether the client should call the redirected url or media entity.Set this flag value to true if client should follow the redirect rather than Media Entity
	 * @param isAbsoluteTargetUrl Is the provided target URL an absolute URL or relative.
	 * @param targetUrl Actual URL of content to stream.  Must be under the configured origin server
	 * @return proxy URL to remote content
	 */
	GetProxyUrl(args?:{clientFollowsRedirect?: BOOLEAN, isAbsoluteTargetUrl?: BOOLEAN, targetUrl?: STRING}): STRING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class MenuEntity extends RootEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get menu items for this menu
	 * @return Menu items
	 */
	GetMenuItems(args?:{}): INFOTABLE<MenuEntry>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get menu items for the current user
	 * @return Menu items
	 */
	GetEffectiveMenu(args?:{}): INFOTABLE<MenuEntry>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class MashupEntity extends RootEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the number of rows for this mashup
	 * @return Rows
	 */
	GetRows(args?:{}): NUMBER;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get preview image
	 * @return Entity Preview
	 */
	GetPreview(args?:{}): IMAGE;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Return a list of related things
	 * @return Related entities
	 */
	GetRelatedThings(args?:{}): INFOTABLE<RootEntityList>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Return a list of related thing shapes
	 * @return Related entities
	 */
	GetRelatedThingShapes(args?:{}): INFOTABLE<RootEntityList>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Return a list of related thing templates
	 * @return Related entities
	 */
	GetRelatedThingTemplates(args?:{}): INFOTABLE<RootEntityList>;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Get the parameter definitions for this mashup
	 * @return Parameter definitions
	 */
	GetParameters(args?:{}): INFOTABLE;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the number of columnns for this mashup
	 * @return Columns
	 */
	GetColumns(args?:{}): NUMBER;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class StyleDefinitionEntity extends RootEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class StateDefinitionEntity extends RootEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class LocalizationTableEntity extends RootEntity {

	/**
	 * Delete a token
	 * @param name Token name
	 * @return result
	 */
	DeleteToken(args?:{name?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Update a token
	 * @param name Token name
	 * @param value Token value
	 * @return result
	 */
	UpdateToken(args?:{name?: STRING, value?: STRING}): NOTHING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Return a list of all tokens
	 * @return Localization tokens
	 */
	GetTokens(args?:{}): INFOTABLE<LocalizationToken>;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Add or update a token
	 * @param name Token name
	 * @param value Token value
	 * @return result
	 */
	AddOrUpdateToken(args?:{name?: STRING, value?: STRING}): NOTHING;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Return a list of all tokens with usage information
	 * @return Localization tokens and usage
	 */
	GetTokensAnnotated(args?:{}): INFOTABLE<LocalizationTokenAnnotated>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Add a token and its value
	 * @param name Token name
	 * @param value Token value
	 * @return result
	 */
	AddToken(args?:{name?: STRING, value?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Return the value for the given token
	 * @param name Token name
	 * @return Localization token
	 */
	GetToken(args?:{name?: STRING}): STRING;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Add a token with value and usage
	 * @param usage Token usage
	 * @param name Token name
	 * @param context Translation context
	 * @param value Localized value
	 * @return result
	 */
	AddTokenAnnotated(args?:{usage?: STRING, name?: STRING, context?: STRING, value?: STRING}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class OrganizationEntity<T extends string = string> extends RootEntity {

	/**
	 * A field that is used to provide compile time information about the units that are available in this
	 * organization entity. You should not access this value at runtime.
	 */
	__units: T;

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Add a user/group to this organization
	 * @param name Organizational Unit name
	 * @param member Member
	 * @param type Member type must be set to either User or Group
	 * @return result
	 */
	AddMember(args?:{name?: STRING, member?: STRING, type?: STRING}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Get mobile mashup
	 * @return Mobile mashup
	 */
	GetMobileMashup(args?:{}): MASHUPNAME;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Return a list of all the child connections in this organization for a specific node
	 * @param name Name of node for whom to return children
	 * @return Organization connections
	 */
	GetChildConnections(args?:{name?: STRING}): INFOTABLE<OrganizationConnection>;

	/**
	 * Return a list of all the connections in this suborganization
	 * @param maxDepth Maximum depth to search
	 * @param start Starting organizational unit name
	 * @return SubOrganization connections
	 */
	GetSubOrganizationConnections(args?:{maxDepth?: NUMBER, start?: STRING}): INFOTABLE<OrganizationConnection>;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Check if the parent of a given organizational unit in the organization matches a specific name
	 * @param parentName Parent name to compare to
	 * @param name Name to search for
	 * @return Parent name
	 */
	IsParent(args?:{parentName?: STRING, name?: STRING}): STRING;

	/**
	 * Checks to see if a organizational unit exists in this organization
	 * @param name Name to search for
	 * @return True if found, false if not
	 */
	IsInOrganization(args?:{name?: STRING}): BOOLEAN;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove a user/organization from this organization
	 * @param name Organizational Unit name
	 * @param member Member
	 * @param type Member type
	 * @return result
	 */
	DeleteMember(args?:{name?: STRING, member?: STRING, type?: STRING}): NOTHING;

	/**
	 * Move an organizational unit
	 * @param parentName Name of parent organizational unit
	 * @param name Name of organizational unit to add
	 * @return result
	 */
	MoveOrganizationalUnit(args?:{parentName?: STRING, name?: STRING}): NOTHING;

	/**
	 * Get a list of members in this organization
	 * @param name Organizational Unit name
	 * @return Organizational Unit Members
	 */
	GetMembers(args?:{name?: STRING}): INFOTABLE<EntityReferenceWithDescription>;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Query a list of members in this organizational unit
	 * @param filter Term filter
	 * @param maxItems Maximum number of items to return
	 * @param types Entity types
	 * @param name Organizational Unit name
	 * @return Organization Members
	 */
	QueryMembers(args?:{filter?: STRING, maxItems?: NUMBER, types?: JSON, name?: STRING}): INFOTABLE<EntityReferenceWithDescription>;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Checks to see if a thing exists as a child of the starting thing
	 * @param start Starting name
	 * @param name Name to search for
	 * @return True if found, false if not
	 */
	IsChild(args?:{start?: STRING, name?: STRING}): BOOLEAN;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get members by name in this organization
	 * @param name Organizational Unit name
	 * @param member Member name
	 * @return Organizational Unit Member
	 */
	GetMember(args?:{name?: STRING, member?: STRING}): INFOTABLE<EntityReferenceWithDescription>;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Delete a specific organizational unit from the organization
	 * @param deleteChildren Delete children also
	 * @param name Name of the organizational unit to remove
	 * @return result
	 */
	DeleteOrganizationalUnit(args?:{deleteChildren?: BOOLEAN, name?: STRING}): NOTHING;

	/**
	 * Get the description of organizational unit
	 * @param name Organizational Unit name
	 * @return description of organizational unit
	 */
	GetOrganizationalUnitDescription(args?:{name?: STRING}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Return a list of all the connections in this organization
	 * @param maxDepth Maximum depth to search
	 * @return Organization connections
	 */
	GetOrganizationConnections(args?:{maxDepth?: NUMBER}): INFOTABLE<OrganizationConnection>;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Add an organizational unit
	 * @param parentName Name of parent organizational unit
	 * @param name Name of organizational unit to add
	 * @return result
	 */
	AddOrganizationalUnit(args?:{parentName?: STRING, name?: STRING}): NOTHING;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get parent of a given organizational unit
	 * @param name Name to search for
	 * @return Parent name
	 */
	GetParentName(args?:{name?: STRING}): STRING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Set/update the description of organizational unit
	 * @param name Organizational Unit name
	 * @param description description of organizational unit
	 * @return result
	 */
	SetOrganizationalUnitDescription(args?:{name?: STRING, description?: STRING}): NOTHING;

	/**
	 * Checks to see if a organizational unit exists in this suborganization
	 * @param start Starting name
	 * @param name Name to search for
	 * @return True if found, false if not
	 */
	IsInSubOrganization(args?:{start?: STRING, name?: STRING}): BOOLEAN;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Return a list of all the parent connections in this organization for a specific node
	 * @param name Name of node for whom to return children
	 * @return Organization connections
	 */
	GetParentConnections(args?:{name?: STRING}): INFOTABLE<OrganizationConnection>;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Assign a list of users/groups to this organization unit
	 * @param members Members
	 * @param name Organizational Unit name
	 * @return result
	 */
	AssignMembers(args?:{members?: INFOTABLE<Principal>, name?: STRING}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Set mobile mashup
	 * @param name Mobile mashup name
	 * @return result
	 */
	SetMobileMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class UserEntity extends RootEntity {

	/**
	 * Get a subset of the current property values for this thing
	 * @param propertyNames Property names
	 * @return Property values
	 */
	GetNamedPropertyValues(args?:{propertyNames?: INFOTABLE<EntityList>}): INFOTABLE;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Service to lock a user.
	 * @return result
	 */
	LockUser(args?:{}): NOTHING;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get application key expiration info associated with this user.  Must specify true to at least one parameter to return any application keys, true to both parameters if you want to return all application keys
	 * @param expiredKeys Expired keys
	 * @param unexpiredKeys Unexpired keys
	 * @return Result
	 */
	GetApplicationKeyExpirationInfo(args?:{expiredKeys?: BOOLEAN, unexpiredKeys?: BOOLEAN}): INFOTABLE<ApplicationKeyExpirationInfo>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get persistent value
	 * @param name Parameter name
	 * @return Parameter value
	 */
	GetPersistentValue(args?:{name?: STRING}): JSON;

	/**
	 * Change password
	 * @param newPasswordConfirm New Password Confirmation
	 * @param oldPassword Previous Password
	 * @param newPassword New Password
	 * @return result
	 */
	ChangePassword(args?:{newPasswordConfirm?: STRING, oldPassword?: STRING, newPassword?: STRING}): NOTHING;

	/**
	 * Get the current property values for this thing
	 * @return Property values
	 */
	GetPropertyValues(args?:{}): INFOTABLE;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Get a subset of the current property values for this thing
	 * @param values Property values
	 * @return result
	 */
	SetPropertyValues(args?:{values?: INFOTABLE}): NOTHING;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get Enabled Status
	 * @return Enabled status
	 */
	IsEnabled(args?:{}): BOOLEAN;

	/**
	 * Get the timestamp for a specific property
	 * @param propertyName Property name
	 * @return Time value
	 */
	GetPropertyTime(args?:{propertyName?: STRING}): DATETIME;

	/**
	 * Set the user's language preferences
	 * @param preferences New preferences, ordered best first, comma separated
	 * @return result
	 */
	SetLanguagePreferences(args?:{preferences?: STRING}): NOTHING;

	/**
	 * Get Locked Status
	 * @return Locked status
	 */
	IsLocked(args?:{}): BOOLEAN;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get list of groups that this user is a member of
	 * @return Result
	 */
	GetGroups(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the current property values for this thing as VTQ
	 * @return Property values
	 */
	GetPropertyValuesVTQ(args?:{}): INFOTABLE;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get list of organizations that this user is a member of
	 * @return Result
	 */
	GetOrganizations(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Set persistent value
	 * @param name Parameter name
	 * @param value Parameter value
	 * @return result
	 */
	SetPersistentValue(args?:{name?: STRING, value?: JSON}): NOTHING;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Set mobile mashup
	 * @param name Mobile mashup name
	 * @return result
	 */
	SetMobileMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the quality for a specific property
	 * @param propertyName Property name
	 * @return Quality value
	 */
	GetPropertyQuality(args?:{propertyName?: STRING}): STRING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Get mobile mashup
	 * @return Mobile mashup
	 */
	GetMobileMashup(args?:{}): MASHUPNAME;

	/**
	 * Get the attributes of the User entity that an unprivileged user may see
	 * @return Preference-related user attributes
	 */
	GetUserPreferenceInfo(args?:{}): INFOTABLE<SystemInformation>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Service to enable a user.
	 * @return result
	 */
	EnableUser(args?:{}): NOTHING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Service to disable a user.
	 * @return result
	 */
	DisableUser(args?:{}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Reset cached security context
	 * @return result
	 */
	ResetSecurityContext(args?:{}): NOTHING;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Get the current property values for this thing as VTQ
	 * @param propertyNames Property names
	 * @return Property values
	 */
	GetNamedPropertyValuesVTQ(args?:{propertyNames?: INFOTABLE<EntityList>}): INFOTABLE;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Delete application keys associated with this user. Must specify true to at least one parameter to delete any application keys, true to both parameters if you want to delete all application keys.
	 * @param deleteExpiredKeys Delete expired keys
	 * @param deleteUnexpiredKeys Delete unexpired keys
	 * @return result
	 */
	DeleteApplicationKeys(args?:{deleteExpiredKeys?: BOOLEAN, deleteUnexpiredKeys?: BOOLEAN}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Assign new password
	 * @param newPasswordConfirm New Password Confirmation
	 * @param newPassword New Password
	 * @return result
	 */
	AssignNewPassword(args?:{newPasswordConfirm?: STRING, newPassword?: STRING}): NOTHING;

	/**
	 * Service to unlock a user.
	 * @return result
	 */
	UnlockUser(args?:{}): NOTHING;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get list of organizational units that this user is a member of
	 * @return Result
	 */
	GetOrganizationalUnits(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Returns true if the specified key id associated with this user exists
	 * @param keyId The Key Id
	 * @return Result
	 */
	DoesApplicationKeyWithKeyIdExist(args?:{keyId?: STRING}): BOOLEAN;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class GroupEntity extends RootEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Add a user/group to this group
	 * @param member Member
	 * @param type Member type
	 * @return result
	 */
	AddMember(args?:{member?: STRING, type?: STRING}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove a user/group from this group
	 * @param member Member
	 * @param type Member type
	 * @return result
	 */
	DeleteMember(args?:{member?: STRING, type?: STRING}): NOTHING;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Get members by name in this group
	 * @param name Field name
	 * @return Group Member
	 */
	GetGroupMember(args?:{name?: STRING}): INFOTABLE<GroupMember>;

	/**
	 * Get a list of members in this group
	 * @return Group Members
	 */
	GetGroupMembers(args?:{}): INFOTABLE<GroupMember>;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Query a list of members in this group
	 * @param filter Term filter
	 * @param maxItems Maximum number of items to return
	 * @param types Entity types
	 * @return Group Members
	 */
	QueryGroupMembers(args?:{filter?: STRING, maxItems?: NUMBER, types?: JSON}): INFOTABLE<GroupMember>;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get list of organizational units that this group is a member of
	 * @return Result
	 */
	GetOrganizationalUnits(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get list of groups that this group is a member of
	 * @return Result
	 */
	GetGroups(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Assign a list of users/groups to this group
	 * @param members Members
	 * @return result
	 */
	AssignMembers(args?:{members?: INFOTABLE<Principal>}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get list of organizations that this group is a member of
	 * @return Result
	 */
	GetOrganizations(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare class PersistenceProviderEntity extends RootEntity {

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Is the persistence provider's ValueStream processor running (i.e. currently processing)
	 * @return true if ValueStream processing is running
	 */
	IsValueStreamDataProcessingRunning(args?:{}): BOOLEAN;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Does the persistence provider's package support Stream processing
	 * @return true if Stream processing is supported
	 */
	IsStreamDataProcessingSupported(args?:{}): BOOLEAN;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Update the settings for Stream Data persistence
	 * @param scanRate Rate at which to check the buffer status in milliseconds
	 * @param maximumQueueSize Maximum number of value stream entries to queue (will be rejected after that)
	 * @param maximumWaitTime Maximum wait time before flushing value stream buffer in milliseconds
	 * @param sizeThreshold Maximum number of items to accumulate before flushing value stream buffer
	 * @param numberOfProcessingThreads Number of processing threads
	 * @param maximumBlockSize Maximum number of value stream writes to process in one block
	 * @return result
	 */
	UpdateValueStreamDataProcessingSettings(args?:{scanRate?: NUMBER, maximumQueueSize?: NUMBER, maximumWaitTime?: NUMBER, sizeThreshold?: NUMBER, numberOfProcessingThreads?: NUMBER, maximumBlockSize?: NUMBER}): NOTHING;

	/**
	 * Update the settings for Stream Data persistence
	 * @param scanRate Rate at which to check the buffer status in milliseconds
	 * @param maximumQueueSize Maximum number of stream entries to queue (will be rejected after that)
	 * @param maximumWaitTime Maximum wait time before flushing stream buffer in milliseconds
	 * @param sizeThreshold Maximum number of items to accumulate before flushing stream buffer
	 * @param numberOfProcessingThreads Number of processing threads
	 * @param maximumBlockSize Maximum number of stream writes to process in one block
	 * @return result
	 */
	UpdateStreamDataProcessingSettings(args?:{scanRate?: NUMBER, maximumQueueSize?: NUMBER, maximumWaitTime?: NUMBER, sizeThreshold?: NUMBER, numberOfProcessingThreads?: NUMBER, maximumBlockSize?: NUMBER}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Reports the persistence store information
	 * @return An infotable containing persistence store information
	 */
	GetPersistenceInformation(args?:{}): INFOTABLE<PersistenceInformation>;

	/**
	 * Connect to the data source based on the configuration defined in the Connection Information configuration table
	 * @return true if connected
	 */
	ConnectDataSource(args?:{}): BOOLEAN;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Reset performance information for ValueStream data processing
	 * @return 
	 */
	ResetValueStreamDataProcessingPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Performs a test to verify the connectivity to the data source based on the configuration defined in the Connection Information configuration table
	 * @return An infotable informing whether the servers configured are reacheable
	 */
	TestConnectivity(args?:{}): INFOTABLE<ConnectionStatus>;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Reports the persistence store schema metadata
	 * @return An infotable containing persistence store schema metadata
	 */
	GetPersistenceSchemaMetadata(args?:{}): INFOTABLE<PersistenceSchemaMetadata>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Is the persistence provider's DataTable processor running (i.e. currently processing)
	 * @return true if DataTable processing is running
	 */
	IsDataTableDataProcessingRunning(args?:{}): BOOLEAN;

	/**
	 * Update the settings for DataTable Data persistence
	 * @param scanRate Rate at which to check the buffer status in milliseconds
	 * @param maximumQueueSize Maximum number of DataTable entries to queue (will be rejected after that)
	 * @param maximumWaitTime Maximum wait time before flushing DataTable buffer in milliseconds
	 * @param sizeThreshold Maximum number of items to accumulate before flushing DataTable buffer
	 * @param numberOfProcessingThreads Number of processing threads
	 * @param maximumBlockSize Maximum number of DataTable writes to process in one block
	 * @return result
	 */
	UpdateDataTableDataProcessingSettings(args?:{scanRate?: NUMBER, maximumQueueSize?: NUMBER, maximumWaitTime?: NUMBER, sizeThreshold?: NUMBER, numberOfProcessingThreads?: NUMBER, maximumBlockSize?: NUMBER}): NOTHING;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Reset performance information for DataTable data processing
	 * @return 
	 */
	ResetDataTableDataProcessingPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Is the persistence provider's ValueStream processor set to auto start at the time of platform initialization
	 * @return true if ValueStream processing starts automatically at the time of platform initialization
	 */
	DoesValueStreamDataProcessingStartAutomatically(args?:{}): BOOLEAN;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Get performance information for ValueStream data processing
	 * @return Performance metrics
	 */
	GetValueStreamDataProcessingPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

	/**
	 * Return the configuration table for Stream Processor settings
	 * @return Result Indicator
	 */
	GetStreamDataProcessingSettings(args?:{}): INFOTABLE;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Get performance information for DataTable data processing
	 * @return Performance metrics
	 */
	GetDataTableDataProcessingPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

	/**
	 * Reset performance information for Stream data processing
	 * @return 
	 */
	ResetStreamDataProcessingPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Get performance information for Stream data processing
	 * @return Performance metrics
	 */
	GetStreamDataProcessingPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

	/**
	 * Invalidate all cache entries
	 * @return true if successful
	 */
	InvalidateCaches(args?:{}): BOOLEAN;

	/**
	 * Return the configuration table for Value Stream Processor settings
	 * @return Result Indicator
	 */
	GetValueStreamDataProcessingSettings(args?:{}): INFOTABLE;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Is the persistence provider's Stream processor set to auto start at the time of platform initialization
	 * @return true if Stream processing starts automatically at the time of platform initialization
	 */
	DoesStreamDataProcessingStartAutomatically(args?:{}): BOOLEAN;

	/**
	 * Return the configuration table for DataTable Processor settings
	 * @return Result Indicator
	 */
	GetDataTableDataProcessingSettings(args?:{}): INFOTABLE;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Disconnect from the data source
	 * @return true if disconnected
	 */
	DisconnectDataSource(args?:{}): BOOLEAN;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Is the persistence provider's DataTable processor set to auto start at the time of platform initialization
	 * @return true if DataTable processing starts automatically at the time of platform initialization
	 */
	DoesDataTableDataProcessingStartAutomatically(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Does the persistence provider's package support DataTable processing
	 * @return true if DataTable processing is supported
	 */
	IsDataTableDataProcessingSupported(args?:{}): BOOLEAN;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check whether the persistence provider is the default for data providers
	 * @return true if is the default data persistence provider
	 */
	GetIsDefaultDataPersistenceProvider(args?:{}): BOOLEAN;

	/**
	 * Does the persistence provider's package support ValueStream processing
	 * @return true if ValueStream processing is supported
	 */
	IsValueStreamDataProcessingSupported(args?:{}): BOOLEAN;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Is the persistence provider's Stream processor running (i.e. currently processing)
	 * @return true if Stream processing is running
	 */
	IsStreamDataProcessingRunning(args?:{}): BOOLEAN;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check whether the connections to the data source are live
	 * @return An infotable containing the status of the connections
	 */
	IsConnected(args?:{}): INFOTABLE<ConnectionStatus>;

}



declare class ProjectEntity extends RootEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Set an entire multi-row configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetMultiRowConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Set the entities for a project. This clears entities from the project first.
	 * @param entities Entity list
	 * @return result
	 */
	SetEntities(args?:{entities?: INFOTABLE<EntityReference>}): NOTHING;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): JSON;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table row as an InfoTable
	 * @param key Row key value
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTableRow(args?:{key?: STRING, tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): JSON;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Update/add one or more rows in a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get home mashup
	 * @return Home mashup
	 */
	GetHomeMashup(args?:{}): MASHUPNAME;

	/**
	 * Check to see if an entity has a specific design time permission for a specific group
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckDesignTimePermissionForGroup(args?:{type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get the tags for an entity
	 * @return tags
	 */
	GetTags(args?:{}): TAGS;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Get Project artifact id
	 * @return Project artifact id
	 */
	GetArtifactId(args?:{}): STRING;

	/**
	 * Get Project version
	 * @return Project version
	 */
	GetVersion(args?:{}): STRING;

	/**
	 * Lists the first level project external dependencies
	 * @return List first level external dependencies of project
	 */
	ListExternalDependencies(args?:{}): INFOTABLE<EntityDependency>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Check to see if an entity has a specific design time permission for the current user
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermission(args?:{type?: STRING}): BOOLEAN;

	/**
	 * Get a specific configuration table definition as an InfoTable
	 * @param tableName Configuration table name
	 * @return Configuration Table Definition
	 */
	GetConfigurationTableDefinition(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific design time permission for a specific user
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckDesignTimePermissionForUser(args?:{type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): JSON;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: JSON}): NOTHING;

	/**
	 * Has outgoing dependencies
	 * @return Has dependencies
	 */
	HasOutgoingDependencies(args?:{}): BOOLEAN;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

	/**
	 * Adds to the project of all model entities filtered by keyword query and tags
	 * @param searchExpression Search expression
	 * @param types Entity types
	 * @param tags Tags
	 * @return result
	 */
	AddEntities(args?:{searchExpression?: STRING, types?: JSON, tags?: TAGS}): NOTHING;

	/**
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Get the entities of the project
	 * @return List of entity references in the project
	 */
	GetEntities(args?:{}): INFOTABLE<EntityReference>;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get minimum Platform version
	 * @return Minimum Platform version
	 */
	GetMinPlatformVersion(args?:{}): STRING;

	/**
	 * Get the current property definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Property definitions
	 */
	GetPropertyDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get list of all of the projects that this project depends on, including itself
	 * @return List of dependent projects
	 */
	GetAllDependentProjectNames(args?:{}): INFOTABLE<GenericStringList>;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, ordinal?: INTEGER, isHidden?: BOOLEAN}): NOTHING;

	/**
	 * Get Project group id
	 * @return Project group id
	 */
	GetGroupId(args?:{}): STRING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

}



declare interface ApplicationKeys {

}

declare const ApplicationKeys: ApplicationKeys;

declare interface Authenticators {

	/**
	 * SSO Authenticator
	 */
	ThingworxSSOAuthenticator: AuthenticatorEntity;

	/**
	 * Mobile App Builder Authenticator that validates against the Thingworx User/Passwords
	 */
	ThingworxMobileAuthorizationAuthenticator: AuthenticatorEntity;

	/**
	 * Mobile App Builder Authenticator that validates against the Thingworx Mobile Tokens
	 */
	ThingworxMobileTokenAuthenticator: AuthenticatorEntity;

	/**
	 * Authenticates the application key provided
	 */
	ThingworxApplicationKeyAuthenticator: AuthenticatorEntity;

	/**
	 * Authenticates via form login
	 */
	ThingworxFormAuthenticator: AuthenticatorEntity;

	/**
	 * Basic HTTP authentication
	 */
	ThingworxHttpBasicAuthenticator: AuthenticatorEntity;

	/**
	 * Authenticates the username and password provided
	 */
	ThingworxBasicAuthenticator: AuthenticatorEntity;

}

declare const Authenticators: Authenticators;

declare interface ThingShapes {

	/**
	 * Data table shape
	 */
	DataTable: ThingShapeEntity<DataTableShape>;

	/**
	 * Connected device
	 */
	Connectable: ThingShapeEntity<Connectable>;

	/**
	 * Remote tunneling
	 */
	Tunneling: ThingShapeEntity<Tunneling>;

	/**
	 * Provides a set of statistical monitoring services. To use these services, create a Thing and attach this ThingShape. This component is installed with ThingWorx but is not active until the DescriptiveAnalytics microservice is installed.
	 */
	StatisticalMonitoringThingShape: ThingShapeEntity<StatisticalMonitoringThingShape>;

	/**
	 * Stream shape
	 */
	Stream: ThingShapeEntity<StreamShape>;

	/**
	 * Indicates this RemoteThing will accept egress on behalf of another RemoteThing
	 */
	EgressGateway: ThingShapeEntity<EgressGateway>;

	/**
	 * Industrial Connectivity Thing Shape
	 */
	IndustrialThingShape: ThingShapeEntity<IndustrialThingShape>;

	/**
	 * File transfer
	 */
	FileTransfer: ThingShapeEntity<FileTransfer>;

	/**
	 * An edge device that controls when the platform sends messages to it.
	 */
	EdgeControlled: ThingShapeEntity<EdgeControlled>;

	/**
	 * Remote metadata browsing
	 */
	RemoteMetadataBrowsing: ThingShapeEntity<RemoteMetadataBrowsing>;

	/**
	 * A device that delegates its outbound remote communication to an EgressGateway
	 */
	RoutedEgress: ThingShapeEntity<RoutedEgress>;

	/**
	 * User extension properties
	 */
	UserExtensions: ThingShapeEntity<UserExtensions>;

	/**
	 * Value Stream shape
	 */
	ValueStream: ThingShapeEntity<ValueStreamShape>;

	/**
	 * Provides a set of statistical calculation services. To use these services, create a Thing and attach this ThingShape. This component is installed with ThingWorx but is not active until the DescriptiveAnalytics microservice is installed.
	 */
	StatisticalCalculationThingShape: ThingShapeEntity<StatisticalCalculationThingShape>;

	/**
	 * Gateway Services
	 */
	Gateway: ThingShapeEntity<Gateway>;

	/**
	 * A device which can define its connection status
	 */
	Reportable: ThingShapeEntity<Reportable>;

	/**
	 * Blog shape
	 */
	Blog: ThingShapeEntity<BlogShape>;

	/**
	 * Requires a shared connection
	 */
	RequiresSharedConnection: ThingShapeEntity<RequiresSharedConnection>;

	/**
	 * Default shape for session properties
	 */
	GlobalSessionProperties: ThingShapeEntity<GlobalSessionProperties>;

	/**
	 * This shape allows a RemoteThing to support multiple bind requests using a routing group.
	 */
	MultiBindRemoteThing: ThingShapeEntity<MultiBindRemoteThing>;

	/**
	 * Logging Services
	 */
	LogProvider: ThingShapeEntity<LogProvider>;

	/**
	 * File system interaction
	 */
	FileSystemServices: ThingShapeEntity<FileSystemServices>;

	/**
	 * Wiki shape
	 */
	Wiki: ThingShapeEntity<WikiShape>;

	/**
	 * Remote thing core functionality
	 */
	Remotable: ThingShapeEntity<Remotable>;

	/**
	 * Capability of API mapping
	 */
	APIMappable: ThingShapeEntity<APIMappable>;

}

declare const ThingShapes: ThingShapes;

declare interface DataShapes {

	/**
	 * DataShape used to populate licensed user group usage data
	 */
	LicenseGroupUsageDataShape: DataShapeEntity<LicenseGroupUsageDataShape>;

	/**
	 * Used by the AuditDataTable
	 */
	DTAuditShape: DataShapeEntity<DTAuditShape>;

	/**
	 * Design Time Permissions
	 */
	DesignTimePermissions: DataShapeEntity<DesignTimePermissions>;

	/**
	 * Entity reference with description
	 */
	EntityReferenceWithDescription: DataShapeEntity<EntityReferenceWithDescription>;

	/**
	 * Users exluded from provisioning
	 */
	UserProvisioningUserExclusionList: DataShapeEntity<UserProvisioningUserExclusionList>;

	/**
	 * The results of a signals job
	 */
	AnalyticsSignalsResult: DataShapeEntity<AnalyticsSignalsResult>;

	/**
	 * Project Information
	 */
	ProjectInfo: DataShapeEntity<ProjectInfo>;

	/**
	 * Thing definition
	 */
	Thing: DataShapeEntity<Thing>;

	/**
	 * Entity usage
	 */
	EntityUsage: DataShapeEntity<EntityUsage>;

	/**
	 * Information related to a transfer reservation
	 */
	TransferReservation: DataShapeEntity<TransferReservation>;

	/**
	 * Boolean value stream
	 */
	BooleanValueStream: DataShapeEntity<BooleanValueStream>;

	/**
	 * Network connection list with template information
	 */
	NetworkConnectionWithTemplate: DataShapeEntity<NetworkConnectionWithTemplate>;

	/**
	 * Application key security event content
	 */
	ApplicationKeySecurityEvent: DataShapeEntity<ApplicationKeySecurityEvent>;

	/**
	 * 
	 */
	Nokia_SimEventDS: DataShapeEntity<Nokia_SimEventDS>;

	/**
	 * DataShape used for detailing a NotificationHandler for a particular NotificationContent
	 */
	NotificationHandlerDetails: DataShapeEntity<NotificationHandlerDetails>;

	/**
	 * Export file information
	 */
	ExportFile: DataShapeEntity<ExportFile>;

	/**
	 * Vocabulary Term
	 */
	VocabularyTerm: DataShapeEntity<VocabularyTerm>;

	/**
	 * Spotlight search results
	 */
	SpotlightSearch: DataShapeEntity<SpotlightSearch>;

	/**
	 * Group member
	 */
	GroupMember: DataShapeEntity<GroupMember>;

	/**
	 * Directory information
	 */
	FileSystemDirectory: DataShapeEntity<FileSystemDirectory>;

	/**
	 * GAV of Dependent Solution
	 */
	SolutionDependency: DataShapeEntity<SolutionDependency>;

	/**
	 * Edge Thing properties with subscriptions list including push type and threshold
	 */
	EdgeThingPropertyNotification: DataShapeEntity<EdgeThingPropertyNotification>;

	/**
	 * Generic Entry List
	 */
	GenericEntry: DataShapeEntity<GenericEntry>;

	/**
	 * Data shape for representing array of number type
	 */
	NumberArrayElement: DataShapeEntity<NumberArrayElement>;

	/**
	 * Date facets
	 */
	DateFacets: DataShapeEntity<DateFacets>;

	/**
	 * Image value stream
	 */
	ImageValueStream: DataShapeEntity<ImageValueStream>;

	/**
	 * Long anomaly alert
	 */
	LongAnomalyAlert: DataShapeEntity<LongAnomalyAlert>;

	/**
	 * Paginated list containing job configurations and statuses
	 */
	AnalyticsJobInfoPage: DataShapeEntity<AnalyticsJobInfoPage>;

	/**
	 * Alert summary
	 */
	AlertSummary: DataShapeEntity<AlertSummary>;

	/**
	 * DataShape used to populate license information at runtime
	 */
	LicenseInfoTableDataShape: DataShapeEntity<LicenseInfoTableDataShape>;

	/**
	 * The min (exclusive) and max (inclusive) values specifying a single bin, and the number of data points within that range. Only the first bin has an inclusive minimum.
	 */
	AnalyticsDataDistributionBin: DataShapeEntity<AnalyticsDataDistributionBin>;

	/**
	 * DataShape used to dispaly license usage information along with time stamp
	 */
	LicenseUsageDataShapeWithTimeStamp: DataShapeEntity<LicenseUsageDataShapeWithTimeStamp>;

	/**
	 * Scheduled event structure
	 */
	ScheduledEvent: DataShapeEntity<ScheduledEvent>;

	/**
	 * Anomaly Monitor content
	 */
	AnomalyMonitorState: DataShapeEntity<AnomalyMonitorState>;

	/**
	 * Data shape representing an Industrial Connectivity group
	 */
	IndustrialGroups: DataShapeEntity<IndustrialGroups>;

	/**
	 * Network connection list
	 */
	NetworkConnection: DataShapeEntity<NetworkConnection>;

	/**
	 * Information related to a tunnel session
	 */
	TunnelSession: DataShapeEntity<TunnelSession>;

	/**
	 * Thing property definition
	 */
	PropertyDefinition: DataShapeEntity<PropertyDefinition>;

	/**
	 * Signal information for specific fields
	 */
	AnalyticsSignalValue: DataShapeEntity<AnalyticsSignalValue>;

	/**
	 * Semantic link to any system entity
	 */
	EntityDescriptor: DataShapeEntity<EntityDescriptor>;

	/**
	 * Common entity information
	 */
	EntitySummary: DataShapeEntity<EntitySummary>;

	/**
	 * Persistence Information
	 */
	PersistenceInformation: DataShapeEntity<PersistenceInformation>;

	/**
	 * Basic Statistics on Platform in list
	 */
	SystemStatistics: DataShapeEntity<SystemStatistics>;

	/**
	 * List of names of cryptographic algoritms
	 */
	ChecksumAlgorithmList: DataShapeEntity<ChecksumAlgorithmList>;

	/**
	 * Long compare alert
	 */
	LongCompareAlert: DataShapeEntity<LongCompareAlert>;

	/**
	 * Device status
	 */
	DeviceStatus: DataShapeEntity<DeviceStatus>;

	/**
	 * Application Key listing
	 */
	ApplicationKey: DataShapeEntity<ApplicationKey>;

	/**
	 * Vocabulary term usage
	 */
	VocabularyTermUsage: DataShapeEntity<VocabularyTermUsage>;

	/**
	 * DataShape used for Vec2 BaseTypes.
	 */
	Vec2DataShape: DataShapeEntity<Vec2DataShape>;

	/**
	 * Data shape for representing array of long type
	 */
	LongArrayElement: DataShapeEntity<LongArrayElement>;

	/**
	 * Object Differences
	 */
	Difference: DataShapeEntity<Difference>;

	/**
	 * Entity counts
	 */
	EntityCount: DataShapeEntity<EntityCount>;

	/**
	 * Options used during user Provisioning
	 */
	UserProvisioningOptions: DataShapeEntity<UserProvisioningOptions>;

	/**
	 * User Provisioning Default Settings
	 */
	UserProvisioningDefaultSettings: DataShapeEntity<UserProvisioningDefaultSettings>;

	/**
	 * Undefined Data Shape
	 */
	Undefined: DataShapeEntity<Undefined>;

	/**
	 * Data shape for representing array of JSON type
	 */
	JSONArrayElement: DataShapeEntity<JSONArrayElement>;

	/**
	 * Chat message
	 */
	ChatMessage: DataShapeEntity<ChatMessage>;

	/**
	 * Result of reading from an open file
	 */
	ReadFromBinaryFileResult: DataShapeEntity<ReadFromBinaryFileResult>;

	/**
	 * Description of the optimization results
	 */
	AnalyticsOptimizationResult: DataShapeEntity<AnalyticsOptimizationResult>;

	/**
	 * Diagnostic digest for industrial properties
	 */
	IndustrialDiagnosticDigest: DataShapeEntity<IndustrialDiagnosticDigest>;

	/**
	 * Integer anomaly alert
	 */
	IntegerAnomalyAlert: DataShapeEntity<IntegerAnomalyAlert>;

	/**
	 * Role
	 */
	Role: DataShapeEntity<Role>;

	/**
	 * InfoTable match alert
	 */
	InfoTableMatchAlert: DataShapeEntity<InfoTableMatchAlert>;

	/**
	 * Remote event Binding
	 */
	RemoteEventBinding: DataShapeEntity<RemoteEventBinding>;

	/**
	 * Organization connection list
	 */
	OrganizationConnection: DataShapeEntity<OrganizationConnection>;

	/**
	 * Subsystem status
	 */
	SubsystemStatus: DataShapeEntity<SubsystemStatus>;

	/**
	 * Alert definition
	 */
	AlertDefinition: DataShapeEntity<AlertDefinition>;

	/**
	 * 
	 */
	StatusChange: DataShapeEntity<StatusChange>;

	/**
	 * Blog Entry List with Comments
	 */
	BlogEntryWithComments: DataShapeEntity<BlogEntryWithComments>;

	/**
	 * Datashape for IndustrialConfiguration Events
	 */
	IndustrialConfigurationEvent: DataShapeEntity<IndustrialConfigurationEvent>;

	/**
	 * List of lever fields with their original and optimized values
	 */
	AnalyticsOptimizedField: DataShapeEntity<AnalyticsOptimizedField>;

	/**
	 * Dashboard listing
	 */
	DashboardList: DataShapeEntity<DashboardList>;

	/**
	 * Persistence Information
	 */
	AllPersistenceInformation: DataShapeEntity<AllPersistenceInformation>;

	/**
	 * Collaboration or data entry event content
	 */
	EntryChangeEvent: DataShapeEntity<EntryChangeEvent>;

	/**
	 * DataShape used for Vec3 BaseTypes.
	 */
	Vec3DataShape: DataShapeEntity<Vec3DataShape>;

	/**
	 * Wiki History List
	 */
	WikiHistory: DataShapeEntity<WikiHistory>;

	/**
	 * Boolean match alert
	 */
	BooleanMatchAlert: DataShapeEntity<BooleanMatchAlert>;

	/**
	 * Data Shape Definition
	 */
	DataShape: DataShapeEntity<DataShape>;

	/**
	 * Metadata describing the results
	 */
	AnalyticsResultDetails: DataShapeEntity<AnalyticsResultDetails>;

	/**
	 * Datashape for Solution Deliveries
	 */
	SolutionDelivery: DataShapeEntity<SolutionDelivery>;

	/**
	 * DateTime value stream
	 */
	DateTimeValueStream: DataShapeEntity<DateTimeValueStream>;

	/**
	 * Stream Entry data
	 */
	StreamData: DataShapeEntity<StreamData>;

	/**
	 * A more in-depth Thing property definition for use in the AddPropertyDefinitions service
	 */
	PropertyDefinitionWithDetails: DataShapeEntity<PropertyDefinitionWithDetails>;

	/**
	 * Datashape for Entity Dependencies
	 */
	EntityDependency: DataShapeEntity<EntityDependency>;

	/**
	 * Long match alert
	 */
	LongMatchAlert: DataShapeEntity<LongMatchAlert>;

	/**
	 * The result of the validation job
	 */
	AnalyticsValidationResult: DataShapeEntity<AnalyticsValidationResult>;

	/**
	 * Thing start event content
	 */
	ThingStartEvent: DataShapeEntity<ThingStartEvent>;

	/**
	 * Event definition
	 */
	EventDefinition: DataShapeEntity<EventDefinition>;

	/**
	 * Location match alert
	 */
	LocationMatchAlert: DataShapeEntity<LocationMatchAlert>;

	/**
	 * Entity usage
	 */
	EntityUsageReport: DataShapeEntity<EntityUsageReport>;

	/**
	 * Local property Binding
	 */
	LocalPropertyBinding: DataShapeEntity<LocalPropertyBinding>;

	/**
	 * Persistent Provider Connection Status
	 */
	ConnectionStatus: DataShapeEntity<ConnectionStatus>;

	/**
	 * Localization token and usage
	 */
	LocalizationTokenAnnotated: DataShapeEntity<LocalizationTokenAnnotated>;

	/**
	 * Entity list
	 */
	EntityList: DataShapeEntity<EntityList>;

	/**
	 * Navigation menu entry
	 */
	MenuEntry: DataShapeEntity<MenuEntry>;

	/**
	 * Remote Thing properties with subscriptions list including data change type and threshold
	 */
	LegacyEdgeThingPropertyNotification: DataShapeEntity<LegacyEdgeThingPropertyNotification>;

	/**
	 * Data shape for defining the UserExtensions config table on a User
	 */
	UserExtensionsData: DataShapeEntity<UserExtensionsData>;

	/**
	 * DataShape used to return an InfoTable of items that succeed or fail in a bulk processing service
	 */
	BulkProcessingReport: DataShapeEntity<BulkProcessingReport>;

	/**
	 * Thing facets
	 */
	ThingFacets: DataShapeEntity<ThingFacets>;

	/**
	 * Thing name, property values
	 */
	RemotePropertyUpdates: DataShapeEntity<RemotePropertyUpdates>;

	/**
	 * A matrix of predictions (rows correspond to the original classifications and columns correspond to the predicted classification)
	 */
	AnalyticsConfusionMatrix: DataShapeEntity<AnalyticsConfusionMatrix>;

	/**
	 * String match alert
	 */
	StringMatchAlert: DataShapeEntity<StringMatchAlert>;

	/**
	 * Integer match alert
	 */
	IntegerMatchAlert: DataShapeEntity<IntegerMatchAlert>;

	/**
	 * Value, time, quality, state
	 */
	VTQ: DataShapeEntity<VTQ>;

	/**
	 * Status of an analytics job
	 */
	AnalyticsJobStatus: DataShapeEntity<AnalyticsJobStatus>;

	/**
	 * Dashboard definition
	 */
	DashboardChange: DataShapeEntity<DashboardChange>;

	/**
	 * Database tables
	 */
	DatabaseTable: DataShapeEntity<DatabaseTable>;

	/**
	 * Vocabulary Term List
	 */
	VocabularyTermList: DataShapeEntity<VocabularyTermList>;

	/**
	 * DataShape used to populate licensed users usage data
	 */
	LicenseUserUsageDataShape: DataShapeEntity<LicenseUserUsageDataShape>;

	/**
	 * Navigation menu definition
	 */
	Menu: DataShapeEntity<Menu>;

	/**
	 * Mashup facets
	 */
	MashupFacets: DataShapeEntity<MashupFacets>;

	/**
	 * Number compare alert
	 */
	NumberCompareAlert: DataShapeEntity<NumberCompareAlert>;

	/**
	 * An extension of the AnalyticsDatasetRef which includes information to assist in distinguishing created datasets
	 */
	AnalyticsDatasetRefWithTags: DataShapeEntity<AnalyticsDatasetRefWithTags>;

	/**
	 * Information about an open file
	 */
	GetTransferInfoResult: DataShapeEntity<GetTransferInfoResult>;

	/**
	 * Alert event content
	 */
	AlertEvent: DataShapeEntity<AlertEvent>;

	/**
	 * Data shape for representing array of string type
	 */
	StringArrayElement: DataShapeEntity<StringArrayElement>;

	/**
	 * Value, time, quality, state
	 */
	VTQL: DataShapeEntity<VTQL>;

	/**
	 * A list of active directory groups for a given domain
	 */
	ActiveDirectoryDomainGroups: DataShapeEntity<ActiveDirectoryDomainGroups>;

	/**
	 * InfoTable value stream
	 */
	InfoTableValueStream: DataShapeEntity<InfoTableValueStream>;

	/**
	 * Time index bucket
	 */
	TimeIndexBucket: DataShapeEntity<TimeIndexBucket>;

	/**
	 * User Provisioning Exclusion List
	 */
	UserProvisioningExclusionList: DataShapeEntity<UserProvisioningExclusionList>;

	/**
	 * Anomaly Alert Training Statistics
	 */
	AnomalyAlertTrainingStatistics: DataShapeEntity<AnomalyAlertTrainingStatistics>;

	/**
	 * Identity provider attributes used for user default
	 */
	UserProvisioningIdentityProviderAttributes: DataShapeEntity<UserProvisioningIdentityProviderAttributes>;

	/**
	 * 
	 */
	ReportingConfiguration: DataShapeEntity<ReportingConfiguration>;

	/**
	 * Data shape representing an Industrial Connectivity item (tag)
	 */
	IndustrialItems: DataShapeEntity<IndustrialItems>;

	/**
	 * Ordered profile conditions
	 */
	AnalyticsProfileCondition: DataShapeEntity<AnalyticsProfileCondition>;

	/**
	 * ScriptService Result Shape
	 */
	ScriptServiceResult: DataShapeEntity<ScriptServiceResult>;

	/**
	 * Data shape for representing array of InfoTable type
	 */
	InfoTableArrayElement: DataShapeEntity<InfoTableArrayElement>;

	/**
	 * Semantic link to any system entity
	 */
	EntityDescriptorWithTimestamp: DataShapeEntity<EntityDescriptorWithTimestamp>;

	/**
	 * Describes a result returned by the "SecurityServices.sanitizeHtml()" Service.
	 */
	HtmlSanitizationResult: DataShapeEntity<HtmlSanitizationResult>;

	/**
	 * 
	 */
	AnalyticsTimeSeriesPmmlValues: DataShapeEntity<AnalyticsTimeSeriesPmmlValues>;

	/**
	 * Wiki Pages With Comments
	 */
	WikiPageWithComments: DataShapeEntity<WikiPageWithComments>;

	/**
	 * Integer value stream
	 */
	IntegerValueStream: DataShapeEntity<IntegerValueStream>;

	/**
	 * Alert Store
	 */
	AlertStore: DataShapeEntity<AlertStore>;

	/**
	 * Notification Recipient
	 */
	Recipient: DataShapeEntity<Recipient>;

	/**
	 * Data facets
	 */
	DataFacets: DataShapeEntity<DataFacets>;

	/**
	 * Collaboration facets
	 */
	CollaborationFacets: DataShapeEntity<CollaborationFacets>;

	/**
	 * Script Function Library
	 */
	ScriptFunctionLibrary: DataShapeEntity<ScriptFunctionLibrary>;

	/**
	 * Database columns
	 */
	DatabaseColumn: DataShapeEntity<DatabaseColumn>;

	/**
	 * The results of a binned distribution query
	 */
	BinnedDistributionQueryRow: DataShapeEntity<BinnedDistributionQueryRow>;

	/**
	 * Thing Entries
	 */
	ThingEntry: DataShapeEntity<ThingEntry>;

	/**
	 * Configuration table
	 */
	ConfigurationTable: DataShapeEntity<ConfigurationTable>;

	/**
	 * Audit History search results
	 */
	AuditHistory: DataShapeEntity<AuditHistory>;

	/**
	 * File name and contents
	 */
	File: DataShapeEntity<File>;

	/**
	 * Data Table Entries
	 */
	DataTableEntry: DataShapeEntity<DataTableEntry>;

	/**
	 * Collection of statistics describing model performance
	 */
	AnalyticsValidationMetrics: DataShapeEntity<AnalyticsValidationMetrics>;

	/**
	 * Thing shape definition
	 */
	ThingShape: DataShapeEntity<ThingShape>;

	/**
	 * DataShape used to store license usage information
	 */
	LicenseUsageDataShape: DataShapeEntity<LicenseUsageDataShape>;

	/**
	 * Location deviation alert
	 */
	LocationDeviationAlert: DataShapeEntity<LocationDeviationAlert>;

	/**
	 * Tag facets
	 */
	TagFacets: DataShapeEntity<TagFacets>;

	/**
	 * Entity reference
	 */
	EntityReference: DataShapeEntity<EntityReference>;

	/**
	 * Thing permission matrix for the current user
	 */
	UserPermissions: DataShapeEntity<UserPermissions>;

	/**
	 * Log Entry
	 */
	LogEntry: DataShapeEntity<LogEntry>;

	/**
	 * Collaboration Comment
	 */
	Comment: DataShapeEntity<Comment>;

	/**
	 * Metadata describing the fields of a dataset
	 */
	AnalyticsDatasetMetadata: DataShapeEntity<AnalyticsDatasetMetadata>;

	/**
	 * Blog Entry List
	 */
	BlogEntry: DataShapeEntity<BlogEntry>;

	/**
	 * Edge Thing events that are bound
	 */
	EdgeThingEventNotification: DataShapeEntity<EdgeThingEventNotification>;

	/**
	 * Entity counts
	 */
	EntityUsageCount: DataShapeEntity<EntityUsageCount>;

	/**
	 * Information about a Endpoint Session
	 */
	CommunicationEndpointSession: DataShapeEntity<CommunicationEndpointSession>;

	/**
	 * Data shape for representing array of boolean type
	 */
	BooleanArrayElement: DataShapeEntity<BooleanArrayElement>;

	/**
	 * AnomalyMonitor Status Event
	 */
	AnomalyMonitorStatusEvent: DataShapeEntity<AnomalyMonitorStatusEvent>;

	/**
	 * Solution Information
	 */
	SolutionInfo: DataShapeEntity<SolutionInfo>;

	/**
	 * policy rules used by a ConnectionMonitor to monitor an IConnectable
	 */
	ConnectionPolicy: DataShapeEntity<ConnectionPolicy>;

	/**
	 * DataShape used to contain information when a user last accessed a licensed resource
	 */
	LicensedUserAccessDataShape: DataShapeEntity<LicensedUserAccessDataShape>;

	/**
	 * Wiki Pages
	 */
	WikiPage: DataShapeEntity<WikiPage>;

	/**
	 * Dashboard item configuration parameter
	 */
	DashboardItemParameter: DataShapeEntity<DashboardItemParameter>;

	/**
	 * Property name, value, time, quality, state
	 */
	NamedVTQ: DataShapeEntity<NamedVTQ>;

	/**
	 * User status
	 */
	UserStatus: DataShapeEntity<UserStatus>;

	/**
	 * Root Entity list with permissions
	 */
	RootEntityListWithPermissions: DataShapeEntity<RootEntityListWithPermissions>;

	/**
	 * Thing relationship list
	 */
	ThingRelationship: DataShapeEntity<ThingRelationship>;

	/**
	 * Timer event structure
	 */
	TimerEvent: DataShapeEntity<TimerEvent>;

	/**
	 * Common facets
	 */
	CommonFacets: DataShapeEntity<CommonFacets>;

	/**
	 * Long range alert
	 */
	LongRangeAlert: DataShapeEntity<LongRangeAlert>;

	/**
	 * Localization table properties
	 */
	LanguageDescription: DataShapeEntity<LanguageDescription>;

	/**
	 * Root Entity list
	 */
	RootEntityList: DataShapeEntity<RootEntityList>;

	/**
	 * DataShape used to pass route definitions to the Integration Runtime
	 */
	RouteDefinition: DataShapeEntity<RouteDefinition>;

	/**
	 * Related mashup information
	 */
	RelatedMashup: DataShapeEntity<RelatedMashup>;

	/**
	 * A field name and value pair 
	 */
	FieldValuePair: DataShapeEntity<FieldValuePair>;

	/**
	 * Group
	 */
	Group: DataShapeEntity<Group>;

	/**
	 * Name and description of currently registered AnalyticsServerThings
	 */
	AnalyticsConnectedServers: DataShapeEntity<AnalyticsConnectedServers>;

	/**
	 * A set of calculated statistics about a field in a dataset
	 */
	FieldDistributionStatistics: DataShapeEntity<FieldDistributionStatistics>;

	/**
	 * Stream Entries
	 */
	StreamEntry: DataShapeEntity<StreamEntry>;

	/**
	 * Integer deviation alert
	 */
	IntegerDeviationAlert: DataShapeEntity<IntegerDeviationAlert>;

	/**
	 * Dashboard item definition
	 */
	DashboardItem: DataShapeEntity<DashboardItem>;

	/**
	 * A row in the result from a distribution query
	 */
	DistributionQueryRow: DataShapeEntity<DistributionQueryRow>;

	/**
	 * Network of semantic links to any system entity
	 */
	EntityNetwork: DataShapeEntity<EntityNetwork>;

	/**
	 * Service definition
	 */
	ServiceDefinition: DataShapeEntity<ServiceDefinition>;

	/**
	 * Thing space
	 */
	ThingSpace: DataShapeEntity<ThingSpace>;

	/**
	 * Parameters passed to a job configuration
	 */
	AnalyticsJobConfigParameter: DataShapeEntity<AnalyticsJobConfigParameter>;

	/**
	 * Entity facets
	 */
	MultilevelFacets: DataShapeEntity<MultilevelFacets>;

	/**
	 * Comparative list of provided goal values and scores predicted by the model
	 */
	AnalyticsPVAS: DataShapeEntity<AnalyticsPVAS>;

	/**
	 * Tunnel status information
	 */
	TunnelStatus: DataShapeEntity<TunnelStatus>;

	/**
	 * Number match alert
	 */
	NumberMatchAlert: DataShapeEntity<NumberMatchAlert>;

	/**
	 * Property list
	 */
	PropertyList: DataShapeEntity<PropertyList>;

	/**
	 * DataShape used to pass route identifiers to the Integration Runtime
	 */
	RouteIDList: DataShapeEntity<RouteIDList>;

	/**
	 * A list of fields that can be modified for optimization
	 */
	AnalyticsOptimizationLever: DataShapeEntity<AnalyticsOptimizationLever>;

	/**
	 * Event structure
	 */
	Event: DataShapeEntity<Event>;

	/**
	 * Integer range alert
	 */
	IntegerRangeAlert: DataShapeEntity<IntegerRangeAlert>;

	/**
	 * Property alert summary
	 */
	PropertyAlertSummary: DataShapeEntity<PropertyAlertSummary>;

	/**
	 * Number deviation alert
	 */
	NumberDeviationAlert: DataShapeEntity<NumberDeviationAlert>;

	/**
	 * Vocabulary
	 */
	Vocabulary: DataShapeEntity<Vocabulary>;

	/**
	 * Definition of an edge thing registered with a Microserver and its connection information
	 */
	TunnelEndpoint: DataShapeEntity<TunnelEndpoint>;

	/**
	 * Dashboard definition
	 */
	Dashboard: DataShapeEntity<Dashboard>;

	/**
	 * Search results
	 */
	SearchResults: DataShapeEntity<SearchResults>;

	/**
	 * Group Provisioning Exclusion List
	 */
	GroupProvisioningExclusionList: DataShapeEntity<GroupProvisioningExclusionList>;

	/**
	 * A single bin in an FFT result
	 */
	AnalyticsFourierTransformFrequencyBin: DataShapeEntity<AnalyticsFourierTransformFrequencyBin>;

	/**
	 * Alert status details
	 */
	AlertStatus: DataShapeEntity<AlertStatus>;

	/**
	 * Information related to a file transfer
	 */
	FileTransferJob: DataShapeEntity<FileTransferJob>;

	/**
	 * Permissions
	 */
	Permissions: DataShapeEntity<Permissions>;

	/**
	 * EditedEntities
	 */
	EditedEntities: DataShapeEntity<EditedEntities>;

	/**
	 * Data shape for representing array of integer type
	 */
	IntegerArrayElement: DataShapeEntity<IntegerArrayElement>;

	/**
	 * DataShape used for returning a list of notification definitions
	 */
	NotificationDefinitionNames: DataShapeEntity<NotificationDefinitionNames>;

	/**
	 * DateTime compare alert
	 */
	DateTimeCompareAlert: DataShapeEntity<DateTimeCompareAlert>;

	/**
	 * DataShape used to populate list of licensed App names
	 */
	LicenseAppNamesDataShape: DataShapeEntity<LicenseAppNamesDataShape>;

	/**
	 * The result of a Fourier transform
	 */
	AnalyticsFourierTransformResult: DataShapeEntity<AnalyticsFourierTransformResult>;

	/**
	 * Information on the job's configuration and its current status
	 */
	AnalyticsJobInfo: DataShapeEntity<AnalyticsJobInfo>;

	/**
	 * Collaboration or data entry event content
	 */
	EntryCommentEvent: DataShapeEntity<EntryCommentEvent>;

	/**
	 * Spotlight search results
	 */
	SpotlightSearchWithPersistent: DataShapeEntity<SpotlightSearchWithPersistent>;

	/**
	 * Wiki Page List
	 */
	WikiPageList: DataShapeEntity<WikiPageList>;

	/**
	 * Options used in user CRUD operations
	 */
	UserOptions: DataShapeEntity<UserOptions>;

	/**
	 * Parameters specific to anomaly detection training requests.
	 */
	AnalyticsAnomalyDetectionParams: DataShapeEntity<AnalyticsAnomalyDetectionParams>;

	/**
	 * Application Key Expiration Information
	 */
	ApplicationKeyExpirationInfo: DataShapeEntity<ApplicationKeyExpirationInfo>;

	/**
	 * Value, time, quality, state
	 */
	NamedVTQL: DataShapeEntity<NamedVTQL>;

	/**
	 * Map of all things and their properties that have established local binding to a thing
	 */
	IncomingLocalPropertyBinding: DataShapeEntity<IncomingLocalPropertyBinding>;

	/**
	 * Database command result - number of modified rows
	 */
	DatabaseCommandResults: DataShapeEntity<DatabaseCommandResults>;

	/**
	 * DateTime match alert
	 */
	DateTimeMatchAlert: DataShapeEntity<DateTimeMatchAlert>;

	/**
	 * List of bound items for an Industrial Gateway
	 */
	IndustrialBoundItems: DataShapeEntity<IndustrialBoundItems>;

	/**
	 * User configuration data
	 */
	UserConfiguration: DataShapeEntity<UserConfiguration>;

	/**
	 * Machine learning techniques and configurations
	 */
	AnalyticsTrainingLearner: DataShapeEntity<AnalyticsTrainingLearner>;

	/**
	 * Entity Difference
	 */
	EntityDifference: DataShapeEntity<EntityDifference>;

	/**
	 * Name/value of performance metrics
	 */
	ThingworxMetric: DataShapeEntity<ThingworxMetric>;

	/**
	 * Thing package definition
	 */
	ThingPackage: DataShapeEntity<ThingPackage>;

	/**
	 * Navigation menu item
	 */
	MenuItem: DataShapeEntity<MenuItem>;

	/**
	 * Basic Statistics on Platform by DataType
	 */
	SystemStatisticsByDataType: DataShapeEntity<SystemStatisticsByDataType>;

	/**
	 * Data shape for representing property write counts for each thing
	 */
	ThingPropertyWriteCounts: DataShapeEntity<ThingPropertyWriteCounts>;

	/**
	 * DateTime deviation alert
	 */
	DateTimeDeviationAlert: DataShapeEntity<DateTimeDeviationAlert>;

	/**
	 * Localization token
	 */
	LocalizationToken: DataShapeEntity<LocalizationToken>;

	/**
	 * Data change event content
	 */
	DataChangeEvent: DataShapeEntity<DataChangeEvent>;

	/**
	 * Parameters for upsampling and downsampling a boolean goal
	 */
	AnalyticsSamplingParams: DataShapeEntity<AnalyticsSamplingParams>;

	/**
	 * Application Key Expiration Information Collection
	 */
	ApplicationKeyExpirationInfoCollection: DataShapeEntity<ApplicationKeyExpirationInfoCollection>;

	/**
	 * Any data change event content
	 */
	AnyDataChangeEvent: DataShapeEntity<AnyDataChangeEvent>;

	/**
	 * Presence changed event content
	 */
	PresenceChangeEvent: DataShapeEntity<PresenceChangeEvent>;

	/**
	 * Information about an active thread pool
	 */
	ThreadPoolStats: DataShapeEntity<ThreadPoolStats>;

	/**
	 * Extension report data shape
	 */
	ExtensionReportDataShape: DataShapeEntity<ExtensionReportDataShape>;

	/**
	 * A five number summary (min, lowerQuartile, median, upperQuartile, max
	 */
	AnalyticsFiveNumberSummaryResult: DataShapeEntity<AnalyticsFiveNumberSummaryResult>;

	/**
	 * Group Provisioning Default Settings
	 */
	GroupProvisioningDefaultSettings: DataShapeEntity<GroupProvisioningDefaultSettings>;

	/**
	 * The generated profiles from a profiles job
	 */
	AnalyticsProfilingResult: DataShapeEntity<AnalyticsProfilingResult>;

	/**
	 * Data Shape Definition
	 */
	ObjectAttribute: DataShapeEntity<ObjectAttribute>;

	/**
	 * Subscription listing
	 */
	Subscription: DataShapeEntity<Subscription>;

	/**
	 * File information with Links
	 */
	FileSystemFileWithLinks: DataShapeEntity<FileSystemFileWithLinks>;

	/**
	 * The metrics for a specific bin of a continuous goal
	 */
	AnalyticsValidationBinError: DataShapeEntity<AnalyticsValidationBinError>;

	/**
	 * Security event content
	 */
	SecurityEvent: DataShapeEntity<SecurityEvent>;

	/**
	 * Number value stream
	 */
	NumberValueStream: DataShapeEntity<NumberValueStream>;

	/**
	 * DateTime range alert
	 */
	DateTimeRangeAlert: DataShapeEntity<DateTimeRangeAlert>;

	/**
	 * DataShape used for Vec4 BaseTypes.
	 */
	Vec4DataShape: DataShapeEntity<Vec4DataShape>;

	/**
	 * A value at a given moment in time
	 */
	AnalyticsTimedValue: DataShapeEntity<AnalyticsTimedValue>;

	/**
	 * Extension Package
	 */
	ExtensionPackage: DataShapeEntity<ExtensionPackage>;

	/**
	 * Alert history
	 */
	AlertHistory: DataShapeEntity<AlertHistory>;

	/**
	 * Number anomaly alert
	 */
	NumberAnomalyAlert: DataShapeEntity<NumberAnomalyAlert>;

	/**
	 * DataShape used for license status
	 */
	LicenseStatusShape: DataShapeEntity<LicenseStatusShape>;

	/**
	 * AnomalyMonitor Status Event
	 */
	AnyAnomalyMonitorStatusEvent: DataShapeEntity<AnyAnomalyMonitorStatusEvent>;

	/**
	 * Generic data shape to hold a list of strings
	 */
	GenericStringList: DataShapeEntity<GenericStringList>;

	/**
	 * Connector status for monitoring connectors
	 */
	ConnectorStatus: DataShapeEntity<ConnectorStatus>;

	/**
	 * Paginated list of job statuses
	 */
	AnalyticsJobStatusPage: DataShapeEntity<AnalyticsJobStatusPage>;

	/**
	 * Locked users
	 */
	LockedUsers: DataShapeEntity<LockedUsers>;

	/**
	 * Run Time Permissions
	 */
	RunTimePermissions: DataShapeEntity<RunTimePermissions>;

	/**
	 * Infotable compare alert
	 */
	InfoTableCompareAlert: DataShapeEntity<InfoTableCompareAlert>;

	/**
	 * Utilization Statistics
	 */
	UtilizationStatistics: DataShapeEntity<UtilizationStatistics>;

	/**
	 * Property alert summary detail
	 */
	PropertyAlertSummaryDetail: DataShapeEntity<PropertyAlertSummaryDetail>;

	/**
	 * Federation subscriber status
	 */
	SubscriberStatus: DataShapeEntity<SubscriberStatus>;

	/**
	 * Number range alert
	 */
	NumberRangeAlert: DataShapeEntity<NumberRangeAlert>;

	/**
	 * Paginated list containing AnalyticsResultDetails
	 */
	AnalyticsResultDetailsPage: DataShapeEntity<AnalyticsResultDetailsPage>;

	/**
	 * Stream entry with values
	 */
	StreamEntryWithValues: DataShapeEntity<StreamEntryWithValues>;

	/**
	 * Collaboration search result
	 */
	CollaborationSearchResult: DataShapeEntity<CollaborationSearchResult>;

	/**
	 * Entity facet
	 */
	NamedFacets: DataShapeEntity<NamedFacets>;

	/**
	 * Mapping of Identity Provider group names to Thingworx Group names
	 */
	UserProvisioningUserGroupMappings: DataShapeEntity<UserProvisioningUserGroupMappings>;

	/**
	 * Persistence Schema Metadata
	 */
	PersistenceSchemaMetadata: DataShapeEntity<PersistenceSchemaMetadata>;

	/**
	 * Options used during user Provisioning
	 */
	UserProvisioningUserDefaults: DataShapeEntity<UserProvisioningUserDefaults>;

	/**
	 * Integer compare alert
	 */
	IntegerCompareAlert: DataShapeEntity<IntegerCompareAlert>;

	/**
	 * Thing name, event values
	 */
	RemoteEventUpdates: DataShapeEntity<RemoteEventUpdates>;

	/**
	 * Service configuration
	 */
	ServiceImplementation: DataShapeEntity<ServiceImplementation>;

	/**
	 * Operating/Platform/Environment Information
	 */
	SystemInformation: DataShapeEntity<SystemInformation>;

	/**
	 * People facets
	 */
	PeopleFacets: DataShapeEntity<PeopleFacets>;

	/**
	 * Message Store list
	 */
	MessageStoreList: DataShapeEntity<MessageStoreList>;

	/**
	 * Extension info data shape
	 */
	ExtensionInfoDataShape: DataShapeEntity<ExtensionInfoDataShape>;

	/**
	 * String value stream
	 */
	StringValueStream: DataShapeEntity<StringValueStream>;

	/**
	 * Security principal
	 */
	Principal: DataShapeEntity<Principal>;

	/**
	 * Time series dataset list
	 */
	TimeSeriesDataset: DataShapeEntity<TimeSeriesDataset>;

	/**
	 * Long value stream
	 */
	LongValueStream: DataShapeEntity<LongValueStream>;

	/**
	 * Remote property Binding
	 */
	RemotePropertyBinding: DataShapeEntity<RemotePropertyBinding>;

	/**
	 * The minimum, median, and maximum confidence interval values.
	 */
	AnalyticsConfidenceIntervalResult: DataShapeEntity<AnalyticsConfidenceIntervalResult>;

	/**
	 * Field definition
	 */
	FieldDefinition: DataShapeEntity<FieldDefinition>;

	/**
	 * The minimum, median and maximum time interval between the given timestamps
	 */
	AnalyticsSamplingFrequencyResult: DataShapeEntity<AnalyticsSamplingFrequencyResult>;

	/**
	 * Mashup list
	 */
	MashupList: DataShapeEntity<MashupList>;

	/**
	 * Generic Result Shape
	 */
	GenericResult: DataShapeEntity<GenericResult>;

	/**
	 * DataShape used for ThingCode BaseTypes.
	 */
	ThingCodeDataShape: DataShapeEntity<ThingCodeDataShape>;

	/**
	 * DataShape used for returning a list of notification handlers
	 */
	NotificationHandlers: DataShapeEntity<NotificationHandlers>;

	/**
	 * Service handler definition
	 */
	HandlerDefinition: DataShapeEntity<HandlerDefinition>;

	/**
	 * Mapping of User Extension properties to Identity Provider names
	 */
	UserProvisioningUserExtensionMappings: DataShapeEntity<UserProvisioningUserExtensionMappings>;

	/**
	 * Geofence datapoint
	 */
	GeoFencePoint: DataShapeEntity<GeoFencePoint>;

	/**
	 * Thing Stream Entries
	 */
	ThingStreamEntry: DataShapeEntity<ThingStreamEntry>;

	/**
	 * Description of the model outputs
	 */
	AnalyticsModelOutputField: DataShapeEntity<AnalyticsModelOutputField>;

	/**
	 * Data shape for representing array of datetime type
	 */
	DatetimeArrayElement: DataShapeEntity<DatetimeArrayElement>;

	/**
	 * Long deviation alert
	 */
	LongDeviationAlert: DataShapeEntity<LongDeviationAlert>;

	/**
	 * Resource
	 */
	Resource: DataShapeEntity<Resource>;

	/**
	 * Table showing the number of predictions for each classification
	 */
	AnalyticsConfusionMatrixRow: DataShapeEntity<AnalyticsConfusionMatrixRow>;

	/**
	 * File information
	 */
	FileSystemFile: DataShapeEntity<FileSystemFile>;

	/**
	 * DataShape used for descriptors of events
	 */
	EventDescriptor: DataShapeEntity<EventDescriptor>;

	/**
	 * Description of the model inputs
	 */
	AnalyticsModelInputField: DataShapeEntity<AnalyticsModelInputField>;

	/**
	 * Description of the model inputs
	 */
	AnalyticsPmmlFieldsResponse: DataShapeEntity<AnalyticsPmmlFieldsResponse>;

	/**
	 * Dashboard group definition
	 */
	DashboardGroup: DataShapeEntity<DashboardGroup>;

	/**
	 * A single ROC pair made up of a false positive rate, true positive rate, and threshold.
	 */
	AnalyticsRocPair: DataShapeEntity<AnalyticsRocPair>;

	/**
	 * Default groups assigned to users during provisioning
	 */
	UserProvisioningDefaultGroups: DataShapeEntity<UserProvisioningDefaultGroups>;

	/**
	 * Semantic link to any system entity
	 */
	EntitySearchResult: DataShapeEntity<EntitySearchResult>;

	/**
	 * The result of realtime predictive scoring
	 */
	AnalyticsPredictionScores: DataShapeEntity<AnalyticsPredictionScores>;

	/**
	 * Industrial Connectivity Thing Property Notification with aspects
	 */
	IndustrialThingPropertyNotification: DataShapeEntity<IndustrialThingPropertyNotification>;

	/**
	 * Bound name
	 */
	BoundName: DataShapeEntity<BoundName>;

	/**
	 * Data shape for representing property write report
	 */
	PropertyWriteReport: DataShapeEntity<PropertyWriteReport>;

	/**
	 * Remote service Binding
	 */
	RemoteServiceBinding: DataShapeEntity<RemoteServiceBinding>;

	/**
	 * Options used during SCIM Provisioning
	 */
	SCIMProvisioningOptions: DataShapeEntity<SCIMProvisioningOptions>;

	/**
	 * Blog Entry History
	 */
	BlogHistory: DataShapeEntity<BlogHistory>;

	/**
	 * Data associated with a configuration modification
	 */
	ConfigurationChange: DataShapeEntity<ConfigurationChange>;

	/**
	 * All Persistence Schema Metadata
	 */
	AllPersistenceSchemaMetadata: DataShapeEntity<AllPersistenceSchemaMetadata>;

	/**
	 * Offline CleanUp Result
	 */
	OfflineAuditArchiveCleanUpShape: DataShapeEntity<OfflineAuditArchiveCleanUpShape>;

	/**
	 * Location value stream
	 */
	LocationValueStream: DataShapeEntity<LocationValueStream>;

	/**
	 * Notification Event
	 */
	NotificationEvent: DataShapeEntity<NotificationEvent>;

	/**
	 * Reference to a dataset
	 */
	AnalyticsDatasetRef: DataShapeEntity<AnalyticsDatasetRef>;

	/**
	 * Collaboration Entry List
	 */
	CollaborationEntry: DataShapeEntity<CollaborationEntry>;

	/**
	 * Aspect name/type
	 */
	Aspects: DataShapeEntity<Aspects>;

	/**
	 * Definition of an edge thing registered with a Microserver and its connection information
	 */
	EdgeThingEndpoint: DataShapeEntity<EdgeThingEndpoint>;

}

declare const DataShapes: DataShapes;

declare interface ThingTemplates {

	/**
	 * Data Table
	 */
	DataTable: ThingTemplateEntity<DataTable<any>>;

	/**
	 * 
	 */
	StatisticalCalculationMicroserver: ThingTemplateEntity<StatisticalCalculationMicroserver>;

	/**
	 * Template for a connector that connects to a Windchill system via HTTP which executes Windchill Swagger REST end points.
	 */
	WindchillSwaggerConnector: ThingTemplateEntity<WindchillSwaggerConnector>;

	/**
	 * A gateway used for Industrial Connectivity Servers
	 */
	IndustrialGateway: ThingTemplateEntity<IndustrialGateway>;

	/**
	 * Security monitor thing
	 */
	SecurityMonitor: ThingTemplateEntity<SecurityMonitor>;

	/**
	 * A gateway used for browser applications
	 */
	BrowserGateway: ThingTemplateEntity<BrowserGateway>;

	/**
	 * 
	 */
	AnalyticsGateway: ThingTemplateEntity<AnalyticsGateway>;

	/**
	 * Direct database connection via JDBC
	 */
	Database: ThingTemplateEntity<Database>;

	/**
	 * A lock that can be acquired and released by threads.
	 */
	LockTemplate: ThingTemplateEntity<LockTemplate>;

	/**
	 * Template for a Reporting Strategy that uses bind events
	 */
	ReportingByConnection: ThingTemplateEntity<ReportingByConnection>;

	/**
	 * Template for a thing that represents an Connection Server
	 */
	ConnectionServer: ThingTemplateEntity<ConnectionServer>;

	/**
	 * 
	 */
	ProfilingMicroserver: ThingTemplateEntity<ProfilingMicroserver>;

	/**
	 * Template for a thing that represents an SDK functioning as a gateway
	 */
	SDKGateway: ThingTemplateEntity<SDKGateway>;

	/**
	 * Remote Data Table
	 */
	RemoteDataTable: ThingTemplateEntity<RemoteDataTable<any>>;

	/**
	 * 
	 */
	ClusteringMicroserver: ThingTemplateEntity<ClusteringMicroserver>;

	/**
	 * 
	 */
	TrainingMicroserver: ThingTemplateEntity<TrainingMicroserver>;

	/**
	 * Scheduled event generator
	 */
	Scheduler: ThingTemplateEntity<Scheduler>;

	/**
	 * Template for a thing that represents an EMS
	 */
	EMSGateway: ThingTemplateEntity<EMSGateway>;

	/**
	 * Value Stream
	 */
	ValueStream: ThingTemplateEntity<ValueStream>;

	/**
	 * Template for a thing that has a connection to a remote database via an EMS or SDK
	 */
	RemoteDatabase: ThingTemplateEntity<RemoteDatabase>;

	/**
	 * Template for a thing that has a connection to a remote thing
	 */
	RemoteThing: ThingTemplateEntity<RemoteThing>;

	/**
	 * 
	 */
	PrescriptiveMicroserver: ThingTemplateEntity<PrescriptiveMicroserver>;

	/**
	 * A remote thing that supports file transfer
	 */
	RemoteThingWithFileTransfer: ThingTemplateEntity<RemoteThingWithFileTransfer>;

	/**
	 * A thing that connects to a system via HTTP and to call OData REST endpoints
	 */
	ODataConnector: ThingTemplateEntity<ODataConnector>;

	/**
	 * Template for a thing that connects to the back-end connected system via HTTP connection and executes flows generted for the rest end points published by the back end system through a swaggerSpec
	 */
	SwaggerConnector: ThingTemplateEntity<SwaggerConnector>;

	/**
	 * 
	 */
	DumperTemplate: ThingTemplateEntity<DumperTemplate>;

	/**
	 * Template for a Data Table thing that stores audit data. This is is for internal use only.     All services have been restricted.
	 */
	AuditDataTableThing: ThingTemplateEntity<AuditDataTableThing>;

	/**
	 * 
	 */
	StatisticalMonitoringMicroserver: ThingTemplateEntity<StatisticalMonitoringMicroserver>;

	/**
	 * Source control repository
	 */
	SourceControlRepository: ThingTemplateEntity<SourceControlRepository>;

	/**
	 * Template for a thing that connects to the back-end connected system
	 */
	GenericConnector: ThingTemplateEntity<GenericConnector>;

	/**
	 * Template for a thing that connects to SAP Netweaver using SAP OData Services
	 */
	SAPODataConnector: ThingTemplateEntity<SAPODataConnector>;

	/**
	 * Implements a websocket server than can notify UI application listeners of user-defined events.
	 */
	AsynchronousUpdaterTemplate: ThingTemplateEntity<AsynchronousUpdaterTemplate>;

	/**
	 * Template for a thing that represents the Integration Runtime
	 */
	IntegrationRuntime: ThingTemplateEntity<IntegrationRuntime>;

	/**
	 * A remote thing that supports tunneling
	 */
	RemoteThingWithTunnels: ThingTemplateEntity<RemoteThingWithTunnels>;

	/**
	 * Remote Value Stream
	 */
	RemoteValueStream: ThingTemplateEntity<RemoteValueStream>;

	/**
	 * 
	 */
	MachineTemplate: ThingTemplateEntity<MachineTemplate>;

	/**
	 * 
	 */
	ResultsMicroserver: ThingTemplateEntity<ResultsMicroserver>;

	/**
	 * Stream
	 */
	Stream: ThingTemplateEntity<Stream<any>>;

	/**
	 * 
	 */
	DataMicroserver: ThingTemplateEntity<DataMicroserver>;

	/**
	 * File repository
	 */
	FileRepository: ThingTemplateEntity<FileRepository>;

	/**
	 * 
	 */
	PropertyTransformMicroserver: ThingTemplateEntity<PropertyTransformMicroserver>;

	/**
	 * Template for a thing that connects to the back-end connected system via HTTP connection
	 */
	HTTPConnector: ThingTemplateEntity<HTTPConnector>;

	/**
	 * Remote Stream
	 */
	RemoteStream: ThingTemplateEntity<RemoteStream<any>>;

	/**
	 * Template for a Thing that sends notifications when an event occurs
	 */
	NotificationHandler: ThingTemplateEntity<NotificationHandler>;

	/**
	 * 
	 */
	AnalyticsServer: ThingTemplateEntity<AnalyticsServer>;

	/**
	 * 
	 */
	ValidationMicroserver: ThingTemplateEntity<ValidationMicroserver>;

	/**
	 * A gateway for extension executors
	 */
	ExtensionGateway: ThingTemplateEntity<ExtensionGateway>;

	/**
	 * 
	 */
	AnalyticsJobServer: ThingTemplateEntity<AnalyticsJobServer>;

	/**
	 * Remote Wiki
	 */
	RemoteWiki: ThingTemplateEntity<RemoteWiki>;

	/**
	 * 
	 */
	SignalsMicroserver: ThingTemplateEntity<SignalsMicroserver>;

	/**
	 * Template for a thing that represents a Thingworx Server
	 */
	ThingworxServer: ThingTemplateEntity<ThingworxServer>;

	/**
	 * Blog
	 */
	Blog: ThingTemplateEntity<Blog>;

	/**
	 * Template for a Reporting Strategy
	 */
	ReportingStrategy: ThingTemplateEntity<ReportingStrategy>;

	/**
	 * External content crawler
	 */
	ContentCrawler: ThingTemplateEntity<ContentCrawler>;

	/**
	 * Remote Blog
	 */
	RemoteBlog: ThingTemplateEntity<RemoteBlog>;

	/**
	 * Timer
	 */
	Timer: ThingTemplateEntity<Timer>;

	/**
	 * 
	 */
	PredictionMicroserver: ThingTemplateEntity<PredictionMicroserver>;

	/**
	 * Generic thing
	 */
	GenericThing: ThingTemplateEntity<GenericThing>;

	/**
	 * A remote thing that supports tunneling and file transfer
	 */
	RemoteThingWithTunnelsAndFileTransfer: ThingTemplateEntity<RemoteThingWithTunnelsAndFileTransfer>;

	/**
	 * Wiki
	 */
	Wiki: ThingTemplateEntity<Wiki>;

}

declare const ThingTemplates: ThingTemplates;

declare interface ModelTags {

	/**
	 * Applications vocabulary for tagging application entities
	 */
	Applications: ModelTagEntity;

	/**
	 * 
	 */
	PTC: ModelTagEntity;

}

declare const ModelTags: ModelTags;

declare interface Logs {

	/**
	 * Security Log
	 */
	SecurityLog: LogEntity;

	/**
	 * Script Log
	 */
	ScriptLog: LogEntity;

	/**
	 * Configuration Log
	 */
	ConfigurationLog: LogEntity;

	/**
	 * Application Log
	 */
	ApplicationLog: LogEntity;

	/**
	 * Communication Log
	 */
	CommunicationLog: LogEntity;

	/**
	 * Database Log
	 */
	DatabaseLog: LogEntity;

}

declare const Logs: Logs;

declare interface MediaEntities {

	/**
	 * 
	 */
	Priority8Icon: MediaEntitieEntity;

	/**
	 * Dark gradiated background for search buttons on the whtie gloss bar
	 */
	SearchButtonBackground: MediaEntitieEntity;

	/**
	 * 
	 */
	LogSettingsIcon: MediaEntitieEntity;

	/**
	 * Default map selected icon
	 */
	DefaultMapSelectedIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	Priority1Icon: MediaEntitieEntity;

	/**
	 * 
	 */
	MessagesIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	BoundIcon: MediaEntitieEntity;

	/**
	 * Offline status
	 */
	StatusOffline: MediaEntitieEntity;

	/**
	 * 
	 */
	MonitoringLogsIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	LogCommunicationIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	ActiveTransfersIcon: MediaEntitieEntity;

	/**
	 * Default map selection icon
	 */
	DefaultMapSelectionIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	IDIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	RestartSubsystemIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	LogAlertUnackIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	StopSubsystemIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	TunnelIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	ExtensionsIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	SetIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	Priority5Icon: MediaEntitieEntity;

	/**
	 * 
	 */
	LogAlertAckIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	LogLevelErrorIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	UnsatisfiedSubscribeIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	LogLevelAllIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	MonitoringAlertsIcon: MediaEntitieEntity;

	/**
	 * Default map start icon
	 */
	DefaultMapStartIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	SystemIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	LogLevelInfoIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	SubsystemNotRunning: MediaEntitieEntity;

	/**
	 * 
	 */
	LogAlertIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	Priority9Icon: MediaEntitieEntity;

	/**
	 * 
	 */
	LogLevelWarnIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	UnboundIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	CollapseIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	HorizontalMenuArrow: MediaEntitieEntity;

	/**
	 * 
	 */
	LogViewerIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	GeneralIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	ExpandIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	ConnectionServerStatus: MediaEntitieEntity;

	/**
	 * Vertical shadow bar (6px x 6px) - shadowing to the left
	 */
	VerticalShadowLeft: MediaEntitieEntity;

	/**
	 * Busy Status
	 */
	StatusBusy: MediaEntitieEntity;

	/**
	 * 
	 */
	ServerPublishedToIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	SubsystemSelected: MediaEntitieEntity;

	/**
	 * 
	 */
	LogLevelDebugIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	AcknowledgeAlertIcon: MediaEntitieEntity;

	/**
	 * Default map marker icon
	 */
	DefaultMapMarkerIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	Priority4Icon: MediaEntitieEntity;

	/**
	 * 
	 */
	ConnectedThingIcon: MediaEntitieEntity;

	/**
	 * Unavailable status
	 */
	StatusUnavailable: MediaEntitieEntity;

	/**
	 * 
	 */
	ServerPublishingIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	SatisfiedSubscribeIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	MonitoringSystemPropertiesIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	LogApplicationIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	FederationUnknownStatus: MediaEntitieEntity;

	/**
	 * 
	 */
	ThingWorxSystemTargetLogo: MediaEntitieEntity;

	/**
	 * 
	 */
	NotEqualTo: MediaEntitieEntity;

	/**
	 * 
	 */
	dropdownArrow: MediaEntitieEntity;

	/**
	 * 
	 */
	ThingsIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	MonitoringUserIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	GridSortDescendingArrow: MediaEntitieEntity;

	/**
	 * 
	 */
	DeleteIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	DeviceUnboundIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	StartSubsystemIcon: MediaEntitieEntity;

	/**
	 * White gloss bar (8px x 48px)
	 */
	WhiteGlossGradientBar: MediaEntitieEntity;

	/**
	 * Available status
	 */
	StatusAvailable: MediaEntitieEntity;

	/**
	 * 
	 */
	GridRowIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	SubsystemMonitoring: MediaEntitieEntity;

	/**
	 * 
	 */
	EqualTo: MediaEntitieEntity;

	/**
	 * 
	 */
	AlertHistory: MediaEntitieEntity;

	/**
	 * 
	 */
	federationDiagram: MediaEntitieEntity;

	/**
	 * Unknown status
	 */
	StatusUnknown: MediaEntitieEntity;

	/**
	 * 
	 */
	Priority3Icon: MediaEntitieEntity;

	/**
	 * 
	 */
	Priority10Icon: MediaEntitieEntity;

	/**
	 * 
	 */
	LogLevelTraceIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	DeviceIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	GridRowExpansionIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	VerticalMenuArrow: MediaEntitieEntity;

	/**
	 * Horizontal Shadow downward facing (6px x 6px)
	 */
	HorizontalShadowDown: MediaEntitieEntity;

	/**
	 * 
	 */
	DeviceStatusIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	Priority7Icon: MediaEntitieEntity;

	/**
	 * 
	 */
	EdgeStatusIcon: MediaEntitieEntity;

	/**
	 * Default map end icon
	 */
	DefaultMapEndIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	MonitoringStatusIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	PerformanceMetricsIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	HomeMashupIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	MonitoringSessionShapeManagerIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	FederationStatus: MediaEntitieEntity;

	/**
	 * 
	 */
	AcknowledgeSourceIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	LogConfigurationIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	SubsystemRunning: MediaEntitieEntity;

	/**
	 * 
	 */
	LogScriptIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	comboDropDownArrow: MediaEntitieEntity;

	/**
	 * 
	 */
	Priority2Icon: MediaEntitieEntity;

	/**
	 * 
	 */
	GridRowCollapseIcon: MediaEntitieEntity;

	/**
	 * Error status
	 */
	StatusError: MediaEntitieEntity;

	/**
	 * 
	 */
	DefaultRefreshIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	IntegrationConnectorsIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	LogRefreshIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	GridSortAscendingArrow: MediaEntitieEntity;

	/**
	 * 
	 */
	LogSecurityIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	SubsystemIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	SimpleGear: MediaEntitieEntity;

	/**
	 * 
	 */
	SimplePlus: MediaEntitieEntity;

	/**
	 * 
	 */
	MonitoringLogSettingsIcon: MediaEntitieEntity;

	/**
	 * 
	 */
	Priority6Icon: MediaEntitieEntity;

}

declare const MediaEntities: MediaEntities;

declare interface Menus {

	/**
	 * 
	 */
	MonitoringStatus: MenuEntity;

	/**
	 * 
	 */
	ThingworxMonitoringMenu: MenuEntity;

}

declare const Menus: Menus;

declare interface Mashups {

	/**
	 * 
	 */
	DefaultMashupToEditGadget: MashupEntity;

	/**
	 * 
	 */
	testcss: MashupEntity;

	/**
	 * 
	 */
	ContentCrawlerMashup: MashupEntity;

	/**
	 * 
	 */
	oldl: MashupEntity;

	/**
	 * 
	 */
	ExampleMashup: MashupEntity;

	/**
	 * 
	 */
	MonitoringAlertHistory: MashupEntity;

	/**
	 * 
	 */
	LogViewer: MashupEntity;

	/**
	 * 
	 */
	MonitoringPlatformStats: MashupEntity;

	/**
	 * 
	 */
	InfotestSub: MashupEntity;

	/**
	 * Container with header
	 */
	"Header Only": MashupEntity;

	/**
	 * 
	 */
	StreamMashup: MashupEntity;

	/**
	 * Preview of widgets for theme editing
	 */
	"Theme Preview": MashupEntity;

	/**
	 * 
	 */
	DashboardViewer: MashupEntity;

	/**
	 * Container with side panels, header and footer
	 */
	"Header and Footer with Side Panels": MashupEntity;

	/**
	 * 
	 */
	MonitoringFederationStatus: MashupEntity;

	/**
	 * 
	 */
	test_old_value_display: MashupEntity;

	/**
	 * Container with header and footer
	 */
	"Header and Footer": MashupEntity;

	/**
	 * Container with left panel, header and footer
	 */
	"Header and Footer with Left Panel": MashupEntity;

	/**
	 * Device Landscape Status Mashup
	 */
	MonitoringDeviceStatus: MashupEntity;

	/**
	 * 
	 */
	PlatformSubsystemHomeMashup: MashupEntity;

	/**
	 * 
	 */
	oldvd: MashupEntity;

	/**
	 * 
	 */
	WikiContributorMashup: MashupEntity;

	/**
	 * 
	 */
	DataTableMashup: MashupEntity;

	/**
	 * 
	 */
	DebuggerMashup: MashupEntity;

	/**
	 * Connection Server Status Monitoring
	 */
	MonitoringConnectionServerStatus: MashupEntity;

	/**
	 * Connector Monitoring Mashup
	 */
	MonitoringConnectorStatus: MashupEntity;

	/**
	 * 
	 */
	MonitoringSubsystemDefaultHomeMashup: MashupEntity;

	/**
	 * 
	 */
	BlogContributorMashup: MashupEntity;

	/**
	 * 
	 */
	MonitoringSubsystemDetail: MashupEntity;

	/**
	 * 
	 */
	MonitoringAlertSummary: MashupEntity;

	/**
	 * 
	 */
	test2: MashupEntity;

	/**
	 * 
	 */
	MonitoringSubsystemSelector: MashupEntity;

	/**
	 * 
	 */
	newvd: MashupEntity;

	/**
	 * 
	 */
	MonitoringSystemPropertyDetail: MashupEntity;

	/**
	 * 
	 */
	ExtensionManagerListing: MashupEntity;

	/**
	 * 
	 */
	valuedisplay: MashupEntity;

	/**
	 * 
	 */
	MonitoringUserManagementSubsystem: MashupEntity;

	/**
	 * 
	 */
	MonitoringSubsystemGeneralPerformance: MashupEntity;

	/**
	 * 
	 */
	oldvdtest: MashupEntity;

	/**
	 * 
	 */
	MonitoringUserStatus: MashupEntity;

	/**
	 * 
	 */
	ThingWorxMonitor: MashupEntity;

	/**
	 * 
	 */
	newltest: MashupEntity;

	/**
	 * 
	 */
	view: MashupEntity;

	/**
	 * 
	 */
	MonitoringTunnelSubsystem: MashupEntity;

	/**
	 * 
	 */
	BlogEntryMashup: MashupEntity;

	/**
	 * 
	 */
	BlogMashup: MashupEntity;

	/**
	 * 
	 */
	test: MashupEntity;

	/**
	 * 
	 */
	oldltest: MashupEntity;

	/**
	 * 
	 */
	WikiMashup: MashupEntity;

	/**
	 * 
	 */
	newvdtest: MashupEntity;

	/**
	 * Container with left panel
	 */
	"Left Panel Only": MashupEntity;

	/**
	 * Detail mashup for use in Subsystem Mashup Repeater
	 */
	SubsystemDetail: MashupEntity;

	/**
	 * 
	 */
	vtest: MashupEntity;

	/**
	 * 
	 */
	vtest2: MashupEntity;

	/**
	 * 
	 */
	testtestestestest: MashupEntity;

	/**
	 * 
	 */
	WikiPageMashup: MashupEntity;

	/**
	 * 
	 */
	MonitoringIntegrationSubsystem: MashupEntity;

	/**
	 * 
	 */
	LicenseSubsystemHomeMashup: MashupEntity;

	/**
	 * 
	 */
	MonitoringMessageStoreSubsystem: MashupEntity;

	/**
	 * 
	 */
	Infotest: MashupEntity;

	/**
	 * 
	 */
	DataTableEditor: MashupEntity;

	/**
	 * 
	 */
	test_new_value_display: MashupEntity;

	/**
	 * 
	 */
	MonitoringFileTransferSubsystem: MashupEntity;

	/**
	 * 
	 */
	newl: MashupEntity;

}

declare const Mashups: Mashups;

declare interface StyleDefinitions {

	/**
	 * Theme: Thingworx
	 */
	DefaultTreeSelectedStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultMapRouteStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultMenuLevelSelectedStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultPreferencesStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultConfigureGadgetButtonStyle: StyleDefinitionEntity;

	/**
	 * Default table wrapper style
	 */
	DefaultGridAdvancedWrapperStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	RaisedButton: StyleDefinitionEntity;

	/**
	 * Default Style for Date Time Picker on Time Selector - Theme: Thingworx
	 */
	DefaultTimeDatePickerStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultShapeUnfilledBackgroundStyle: StyleDefinitionEntity;

	/**
	 * Button with no background or border
	 */
	MaterialButtonOrangeHoverStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Time Picker Widget - Theme: ThingWorx
	 */
	DefaultTimePickerStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDashboardGadgetStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	RaisedButtonRed: StyleDefinitionEntity;

	/**
	 * 
	 */
	SubsystemRunningStyle: StyleDefinitionEntity;

	/**
	 * Offline status
	 */
	StatusOffline: StyleDefinitionEntity;

	/**
	 * Button with no background or border
	 */
	MaterialButtonOrangeStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	RaisedButtonRedPressed: StyleDefinitionEntity;

	/**
	 * Default table border style
	 */
	DefaultGridAdvancedHeaderStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	UIDefaultButton: StyleDefinitionEntity;

	/**
	 * Default Style for Grid Widget Row Hover - Theme: ThingWorx
	 */
	DefaultRowHoverStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Tag Cloud Widget Link Selected- Theme: ThingWorx
	 */
	DefaultSelectedTagStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultButtonDisabledStyle: StyleDefinitionEntity;

	/**
	 * Default Style for File Upload Widget - Theme: ThingWorx
	 */
	DefaultFileUploadStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultSliderHandleStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultLoginStyle: StyleDefinitionEntity;

	/**
	 * Default range chart selection style
	 */
	DefaultRangeSelectionStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Blog Widget Buttons - Theme: ThingWorx
	 */
	DefaultBlogButtonsStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDashboardStyle: StyleDefinitionEntity;

	/**
	 * Button with no background or border
	 */
	BorderlessButtonStyle: StyleDefinitionEntity;

	/**
	 * Default chart legend style - Theme:Thingworx
	 */
	DefaultChartLegendStyle: StyleDefinitionEntity;

	/**
	 * DefaultChartIndicatorStyle in Charts for Theme: Thingworx
	 */
	DefaultChartIndicatorStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultMenuStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	UIDefaultButtonPressed: StyleDefinitionEntity;

	/**
	 * Default Style for Wiki Widget Content - Theme: ThingWorx
	 */
	DefaultWikiContentStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Link Widget - Theme: Thingworx
	 */
	DefaultLinkStyle: StyleDefinitionEntity;

	/**
	 * Menu indicator for submenu's existing - Theme: Thingworx
	 */
	DefaultMenuHorizontalArrowStyle: StyleDefinitionEntity;

	/**
	 * Default range box style
	 */
	DefaultRangeBoxStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	MonitoringHeaderStyle: StyleDefinitionEntity;

	/**
	 * Default Style for the Target Mashup
	 */
	DefaultMasterMashupStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Auto Refresh Widget - Theme: ThingWorx
	 */
	DefaultAutoRefreshStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Slider Widget Min - Theme: ThingWorx
	 */
	DefaultSliderMinStyle: StyleDefinitionEntity;

	/**
	 * Default table wrapper style
	 */
	DefaultTableWrapperStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	StatusBusy: StyleDefinitionEntity;

	/**
	 * Button with no background or border
	 */
	MaterialButtonActiveStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Checkbox Widget - Theme: ThingWorx
	 */
	DefaultCheckboxStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Folding Panel Widget - Theme: ThingWorx
	 */
	DefaultFoldingPanelStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Tag Cloud Widget Header - Theme: ThingWorx
	 */
	DefaultTagCloudHeader: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDashboardGroupTitleStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Blog Widget Posts - Theme: ThingWorx
	 */
	DefaultBlogPostStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Grid Advanced Widget Row Selected - Theme: ThingWorx
	 */
	DefaultGridAdvancedRowSelectedStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultWidgetLabelStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultMenuHoverStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Blog Widget Header - Theme: ThingWorx
	 */
	DefaultBlogHeaderStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Property Display Widget - Theme: ThingWorx
	 */
	DefaultPropertyDisplayStyle: StyleDefinitionEntity;

	/**
	 * Default chart area style - Theme: Thingworx
	 */
	DefaultChartAreaStyle: StyleDefinitionEntity;

	/**
	 * Default table sorting style
	 */
	DefaultTableSortingStyle: StyleDefinitionEntity;

	/**
	 * Default Style for File Upload Widget Repository - Theme: ThingWorx
	 */
	DefaultRepositoryStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Grid Widget Header - Theme: ThingWorx
	 */
	DefaultGridHeaderStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultLinkHoverStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultTabCollapseStyle: StyleDefinitionEntity;

	/**
	 * Button with no background or border
	 */
	MaterialButtonOrangeActiveStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	FederationUnknownStatus: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultValueDisplayNoTextStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDashboardTabStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Fieldset Widget - Theme: ThingWorx
	 */
	DefaultFieldsetStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Grid Widget Row Selected - Theme: ThingWorx
	 */
	DefaultRowSelectedStyle: StyleDefinitionEntity;

	/**
	 * Default gauge face style
	 */
	DefaultGaugeFaceStyle: StyleDefinitionEntity;

	/**
	 * Default map region style
	 */
	DefaultMapRegionStyle: StyleDefinitionEntity;

	/**
	 * Default row expansion icon style
	 */
	DefaultRowExpansionIconStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Grid advanced Widget Row Hover - Theme: ThingWorx
	 */
	DefaultGridAdvancedRowHoverStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Slider Widget BG - Theme: ThingWorx
	 */
	DefaultSliderBGStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultWikiNavigationSelectedStyle: StyleDefinitionEntity;

	/**
	 * Default gauge center style
	 */
	DefaultGaugeCenterStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	StatusAvailable: StyleDefinitionEntity;

	/**
	 * Default Style for Tabs Widget Unselected - Theme: ThingWorx
	 */
	DefaultTabUnselectedStyle: StyleDefinitionEntity;

	/**
	 * DefaultPanelStyle for Panel in Theme: Thingworx
	 */
	DefaultPanelStyle: StyleDefinitionEntity;

	/**
	 * Default sort ascending style
	 */
	DefaultSortAscendingStyle: StyleDefinitionEntity;

	/**
	 * Default gauge label style
	 */
	DefaultGaugeLabelStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	MaterialBrightRippleStyle: StyleDefinitionEntity;

	/**
	 * Default Style for List Widget Combo Dropdown Button - Theme: ThingWorx
	 */
	DefaultComboDropdownButtonStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Blog Widget - Theme: ThingWorx
	 */
	DefaultBlogStyle: StyleDefinitionEntity;

	/**
	 * DefaultRowBackgroundStyle for Grid in Thingworx Theme
	 */
	DefaultRowBackgroundStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Grid Advanced Widget Row Alternate - Theme: ThingWorx
	 */
	DefaultGridAdvancedRowAlternateBackgroundStyle: StyleDefinitionEntity;

	/**
	 * Default cell border style
	 */
	DefaultGridAdvancedCellBorderStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDashboardGroupStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultTabDisabledStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultAddToDashboardButtonStyle: StyleDefinitionEntity;

	/**
	 * Default chart axis style - Theme: Thingworx
	 */
	DefaultChartAxisStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultWikiToolbarStyle: StyleDefinitionEntity;

	/**
	 * Default Refresh Button Style - Theme: Thingworx
	 */
	DefaultTimeRefreshBtnStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultInputBGStyle: StyleDefinitionEntity;

	/**
	 * Default grid style
	 */
	DefaultGridStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultAutoRefreshToggleStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultWhiteLabelStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultSliderTrackerStyle: StyleDefinitionEntity;

	/**
	 * Default pagination selected style
	 */
	DefaultPaginationSelectedStyle: StyleDefinitionEntity;

	/**
	 * Default table header style
	 */
	DefaultTableHeaderStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Google Location Widget - Theme: ThingWorx
	 */
	DefaultGoogleLocationStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Squeal Widget Text - Theme: ThingWorx
	 */
	DefaultSquealInputTextStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Data Filter Widget - Theme: ThingWorx
	 */
	DefaultDataFilterStyle: StyleDefinitionEntity;

	/**
	 * Default row icon style
	 */
	DefaultRowIconStyle: StyleDefinitionEntity;

	/**
	 * Default cell validation error style
	 */
	DefaultGridAdvancedCellValidationErrorStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	MonitoringMenuStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	ThingWorxSystemTargetHeader: StyleDefinitionEntity;

	/**
	 * Default gauge style
	 */
	DefaultGaugeStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Slider Widget Value - Theme: ThingWorx
	 */
	DefaultSliderValueStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Popup Title - Theme: ThingWorx
	 */
	DefaultPopupTitleStyle: StyleDefinitionEntity;

	/**
	 * Default cell validation error tooltip style
	 */
	DefaultGridAdvancedCellValidationErrorTooltipStyle: StyleDefinitionEntity;

	/**
	 * Default range whisker style
	 */
	DefaultRangeWhiskerStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Tabs Widget Selected - Theme: ThingWorx
	 */
	DefaultTabSelectedStyle: StyleDefinitionEntity;

	/**
	 * Error status
	 */
	StatusError: StyleDefinitionEntity;

	/**
	 * Default gauge border style
	 */
	DefaultGaugeBorderStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultValueDisplayStyleWithBorder: StyleDefinitionEntity;

	/**
	 * Default style for button widget active state - Theme: Thingworx
	 */
	DefaultNavigationActiveStyle: StyleDefinitionEntity;

	/**
	 * Default Gauge Legend Style
	 */
	DefaultGaugeLegendStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultCollectionCellStyle: StyleDefinitionEntity;

	/**
	 * Default Style for the List Widgets Combo Textbox - Theme: Thingworx
	 */
	DefaultComboTextboxStyle: StyleDefinitionEntity;

	/**
	 * Default Style for DataFilter Widget Add Button - Theme: ThingWorx
	 */
	DefaultDataFilterAddButtonStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDropdownStyle: StyleDefinitionEntity;

	/**
	 * Default gauge value style
	 */
	DefaultGaugeValueStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultAutoRefreshToggleOffStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultRepeaterCellStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Tag Cloud Widget Body Link - Theme: ThingWorx
	 */
	DefaultTagCloudBodyLink: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDropdownSelectedStyle: StyleDefinitionEntity;

	/**
	 * Default Style for the TextArea Widget - Theme: Thingworx
	 */
	DefaultTextAreaStyle: StyleDefinitionEntity;

	/**
	 * Menu indicator for submenu's existing - Theme: Thingworx
	 */
	DefaultMenuVerticalArrowStyle: StyleDefinitionEntity;

	/**
	 * Default style for textbox widget focus - Theme: Thingworx
	 */
	DefaultFocusStyle: StyleDefinitionEntity;

	/**
	 * Default style for navigation focus - Theme: Thingworx
	 */
	DefaultNavigationFocusStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultNavigationHoverStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Wiki Widget Navigation - Theme: ThingWorx
	 */
	DefaultWikiNavigationStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultGridBackgroundStyle: StyleDefinitionEntity;

	/**
	 * DefaultTreeBGStyle for Tree in Thingworx Theme
	 */
	DefaultTreeBGStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultLEDStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDropdownButtonStyle: StyleDefinitionEntity;

	/**
	 * Default range midpoint style
	 */
	DefaultRangeMidpointStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDashboardConfigButtonStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultMenuLevelStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultMenuBackgroundStyle: StyleDefinitionEntity;

	/**
	 * Button with no background or border - active state
	 */
	BorderlessButtonActiveStyle: StyleDefinitionEntity;

	/**
	 * DefaultChartGridStyle for Grids in Theme:Thingworx
	 */
	DefaultChartGridStyle: StyleDefinitionEntity;

	/**
	 * Default row collapse icon style
	 */
	DefaultRowCollapseIconStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultTitleBarStyle: StyleDefinitionEntity;

	/**
	 * Default pagination hover style
	 */
	DefaultPaginationHoverStyle: StyleDefinitionEntity;

	/**
	 * Default toolbar style
	 */
	DefaultToolbarStyle: StyleDefinitionEntity;

	/**
	 * Default Row Background Style for Grid Advanced in Thingworx Theme
	 */
	DefaultGridAdvancedRowBorderStyle: StyleDefinitionEntity;

	/**
	 * Default chart background style - Theme: Thingworx
	 */
	DefaultChartStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDashboardGroupExpandCollapseStyle: StyleDefinitionEntity;

	/**
	 * Default map selected marker style
	 */
	DefaultMapSelectedStyle: StyleDefinitionEntity;

	/**
	 * DefaultLabelStyle for Label in Theme:Thingworx
	 */
	DefaultLabelStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultValueDisplayStyle: StyleDefinitionEntity;

	/**
	 * Default style for Selected Chart Items - Theme: Thingworx
	 */
	DefaultChartSelectionStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultLoginButtonStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	RaisedButtonPressed: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDashboardGadgetTitleStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultMenuStates: StyleDefinitionEntity;

	/**
	 * DefaultNavigation Style for Navigation in Thingworx Theme
	 */
	DefaultNavigationStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Chat Status Widget - Theme: ThingWorx
	 */
	DefaultChatStatusStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultBlogLinksStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Auto Refresh Widget - Theme: ThingWorx
	 */
	DefaultListItemAlternateStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultMenuSelectedStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Tabs Widget Content - Theme: ThingWorx
	 */
	DefaultTabContentStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultTabExpandStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Button Widget - Theme: ThingWorx
	 */
	DefaultButtonStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Slider Widget Max - Theme: ThingWorx
	 */
	DefaultSliderMaxStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultMenuLevelHoverStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	MonitoringMenuSelectedStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultAutoRefreshToggleSliderStyle: StyleDefinitionEntity;

	/**
	 * Default map path start style
	 */
	DefaultMapStartStyle: StyleDefinitionEntity;

	/**
	 * Default pagination button style
	 */
	DefaultPaginationButtonStyle: StyleDefinitionEntity;

	/**
	 * Default Style for List Widget Item - Theme: ThingWorx
	 */
	DefaultListItemStyle: StyleDefinitionEntity;

	/**
	 * Button with no background or border
	 */
	MaterialButtonStyle: StyleDefinitionEntity;

	/**
	 * Default Style for List Widget Background - Theme: ThingWorx
	 */
	DefaultListBackgroundStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDashboardTitleStyle: StyleDefinitionEntity;

	/**
	 * Default table footer style
	 */
	DefaultGridAdvancedFooterStyle: StyleDefinitionEntity;

	/**
	 * Default map path end style
	 */
	DefaultMapEndStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Radio Button Widget Depressed - Theme: ThingWorx
	 */
	DefaultRadioButtonDepressedStyle: StyleDefinitionEntity;

	/**
	 * Default Style for the Repeater Widget - Theme: Thingworx
	 */
	DefaultRepeaterStyle: StyleDefinitionEntity;

	/**
	 * Default Style for the Master Mashup - Theme: Thingworx
	 */
	DefaultMasterWindowStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultSquealSearchInputTextStyle: StyleDefinitionEntity;

	/**
	 * Default table sorting style
	 */
	DefaultGridAdvancedSortingStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultCollectionRippleStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultWikiButtonStyle: StyleDefinitionEntity;

	/**
	 * Default Style for List Widget Hover - Theme: ThingWorx
	 */
	DefaultListItemHoverStyle: StyleDefinitionEntity;

	/**
	 * Default style for button widget hover - Theme: Thingworx
	 */
	DefaultButtonHoverStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Grid Widget Row Alternate - Theme: ThingWorx
	 */
	DefaultRowAlternateBackgroundStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultImageBorderStyle: StyleDefinitionEntity;

	/**
	 * Default sort descending style
	 */
	DefaultSortDescendingStyle: StyleDefinitionEntity;

	/**
	 * Default Style for List Widget Combo Highlight - Theme: ThingWorx
	 */
	DefaultComboItemHighlightedStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Wiki Widget Header - Theme: ThingWorx
	 */
	DefaultWikiHeaderStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Divider Widget - Theme: ThingWorx
	 */
	DefaultDividerStyle: StyleDefinitionEntity;

	/**
	 * Default map path/trace style
	 */
	DefaultMapPathStyle: StyleDefinitionEntity;

	/**
	 * Default Row Background Style for Grid Advanced in Thingworx Theme
	 */
	DefaultGridAdvancedRowBackgroundStyle: StyleDefinitionEntity;

	/**
	 * Button with no background or border - hover state
	 */
	BorderlessButtonHoverStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultDashboardMenuStyle: StyleDefinitionEntity;

	/**
	 * Default grid editable field style
	 */
	DefaultGridEditableFieldStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	StatusUnknown: StyleDefinitionEntity;

	/**
	 * Default gravity panel style
	 */
	ExtendedPanelDefaultStyle: StyleDefinitionEntity;

	/**
	 * Default style for button widget active state - Theme: Thingworx
	 */
	DefaultButtonActiveStyle: StyleDefinitionEntity;

	/**
	 * Default Gauge Tick Style
	 */
	DefaultGaugeTickStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultRadioButtonStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultBlogPostToolbarStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultBlogButtonsHoverStyle: StyleDefinitionEntity;

	/**
	 * Button with no background or border
	 */
	MaterialButtonHoverStyle: StyleDefinitionEntity;

	/**
	 * Default frame layout style
	 */
	FrameLayoutDefaultStyle: StyleDefinitionEntity;

	/**
	 * Default style for button focus - Theme: Thingworx
	 */
	DefaultButtonFocusStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Folding Panel Widget Header - Theme: ThingWorx
	 */
	DefaultFoldingPanelHeaderStyle: StyleDefinitionEntity;

	/**
	 * Default map currently selected location style
	 */
	DefaultMapSelectionStyle: StyleDefinitionEntity;

	/**
	 * Default Time Selector Background - Theme: Thingworx
	 */
	DefaultTimeBGStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultCollectionCellSelectedStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Squeal Widget BG - Theme: ThingWorx
	 */
	DefaultSquealBGStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultChartStyle20: StyleDefinitionEntity;

	/**
	 * Default Style for Fieldset Widget Label - Theme: ThingWorx
	 */
	DefaultFieldsetLabelStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Squeal Widget Button - Theme: ThingWorx
	 */
	DefaultSquealBtnStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultChartStyle21: StyleDefinitionEntity;

	/**
	 * 
	 */
	MaterialDarkRippleStyle: StyleDefinitionEntity;

	/**
	 * Default Auto Refresh Button Style - Theme : Thingworx
	 */
	DefaultTimeAutoRefreshBtnStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultChartStyle24: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultChartStyle22: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultChartStyle23: StyleDefinitionEntity;

	/**
	 * Green - Default chart series 2 style
	 */
	DefaultChartStyle2: StyleDefinitionEntity;

	/**
	 * Red - Default chart series 3 style
	 */
	DefaultChartStyle3: StyleDefinitionEntity;

	/**
	 * 
	 */
	NSToolbarStyle: StyleDefinitionEntity;

	/**
	 * Blue - Default chart series 1 style
	 */
	DefaultChartStyle1: StyleDefinitionEntity;

	/**
	 * Default Style for Squeal Widget Input - Theme: ThingWorx
	 */
	DefaultSquealInputBGStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultCollectionCellHoverStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Wiki Widget Search - Theme: ThingWorx
	 */
	DefaultWikiSearchStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	SubsystemNotRunningStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Repeater Widget when Selected - Theme: Thingworx
	 */
	DefaultRepeaterSelectedStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultBlogButtonsActiveStyle: StyleDefinitionEntity;

	/**
	 * Default grid invalid field style
	 */
	DefaultGridInvalidFieldStyle: StyleDefinitionEntity;

	/**
	 * Default tooltip style
	 */
	DefaultTooltipStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultChartStyle17: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultChartStyle18: StyleDefinitionEntity;

	/**
	 * Yellow - Default chart series 15 style
	 */
	DefaultChartStyle15: StyleDefinitionEntity;

	/**
	 * Pink - Default chart series 16 style
	 */
	DefaultChartStyle16: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultChartStyle19: StyleDefinitionEntity;

	/**
	 * Default map marker style
	 */
	DefaultMapMarkerStyle: StyleDefinitionEntity;

	/**
	 * Brown - Default chart series 10 style
	 */
	DefaultChartStyle10: StyleDefinitionEntity;

	/**
	 * Default Style for List Widget Selected - Theme: ThingWorx
	 */
	DefaultListItemSelectedStyle: StyleDefinitionEntity;

	/**
	 * Tan - Default chart series 13 style
	 */
	DefaultChartStyle13: StyleDefinitionEntity;

	/**
	 * Cyan - Default chart series 14 style
	 */
	DefaultChartStyle14: StyleDefinitionEntity;

	/**
	 * Purple - Default chart series 11 style
	 */
	DefaultChartStyle11: StyleDefinitionEntity;

	/**
	 * Lt. Green - Default chart series 12 style
	 */
	DefaultChartStyle12: StyleDefinitionEntity;

	/**
	 * Default Style for Tag Cloud Widget Link Hover - Theme: ThingWorx
	 */
	DefaultTagCloudBodyHover: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultSliderTrackerProgressStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultCollectionCellActiveStyle: StyleDefinitionEntity;

	/**
	 * Default gauge needle style
	 */
	DefaultGaugeNeedleStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultWikiStyle: StyleDefinitionEntity;

	/**
	 * Lt. Gray - Default chart series 8 style
	 */
	DefaultChartStyle8: StyleDefinitionEntity;

	/**
	 * Fuchsia - Default chart series 9 style
	 */
	DefaultChartStyle9: StyleDefinitionEntity;

	/**
	 * Dk. Gray - Default chart series 6 style
	 */
	DefaultChartStyle6: StyleDefinitionEntity;

	/**
	 * Silver - Default chart series 7 style
	 */
	DefaultChartStyle7: StyleDefinitionEntity;

	/**
	 * Orange - Default chart series 4 style
	 */
	DefaultChartStyle4: StyleDefinitionEntity;

	/**
	 * Lt. Blue - Default chart series 5 style
	 */
	DefaultChartStyle5: StyleDefinitionEntity;

	/**
	 * Default chart title style - Theme: Thingworx
	 */
	DefaultChartTitleStyle: StyleDefinitionEntity;

	/**
	 * Default Style for the TextBox Widgets - Theme: Thingworx
	 */
	DefaultTextBoxStyle: StyleDefinitionEntity;

	/**
	 * Default Style for Tag Cloud Widget Body BG - Theme: ThingWorx
	 */
	DefaultTagCloudBodyBG: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultContainerStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	BorderlessButtonFocusStyle: StyleDefinitionEntity;

	/**
	 * DefaultShapeStyle for Shape in Thingworx Theme
	 */
	DefaultShapeStyle: StyleDefinitionEntity;

	/**
	 * Default Style for the Mashup - Theme: Thingworx
	 */
	DefaultMashupStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	DefaultRepeaterUnselectedStyle: StyleDefinitionEntity;

	/**
	 * 
	 */
	NSToolbarDividerStyle: StyleDefinitionEntity;

}

declare const StyleDefinitions: StyleDefinitions;

declare interface StateDefinitions {

	/**
	 * 
	 */
	SubsystemRunningStatus: StateDefinitionEntity;

	/**
	 * 
	 */
	AlarmAckState: StateDefinitionEntity;

	/**
	 * 
	 */
	AlertType: StateDefinitionEntity;

	/**
	 * 
	 */
	LockedState: StateDefinitionEntity;

	/**
	 * States for color coding log entries
	 */
	LogViewer: StateDefinitionEntity;

	/**
	 * 
	 */
	FederationConnectionStatus: StateDefinitionEntity;

	/**
	 * 
	 */
	AlertPriorityState: StateDefinitionEntity;

	/**
	 * 
	 */
	LogType: StateDefinitionEntity;

	/**
	 * Three state alarm
	 */
	SimpleAlarm: StateDefinitionEntity;

	/**
	 * 
	 */
	LogType2: StateDefinitionEntity;

	/**
	 * Status state
	 */
	StatusState: StateDefinitionEntity;

}

declare const StateDefinitions: StateDefinitions;

declare interface LocalizationTables {

	/**
	 * de localization table
	 */
	de: LocalizationTableEntity;

	/**
	 * ru localization table
	 */
	ru: LocalizationTableEntity;

	/**
	 * fr localization table
	 */
	fr: LocalizationTableEntity;

	/**
	 * zh-CN localization table
	 */
	'zh-CN': LocalizationTableEntity;

	/**
	 * System localization table
	 */
	System: LocalizationTableEntity;

	/**
	 * ko localization table
	 */
	ko: LocalizationTableEntity;

	/**
	 * zh-TW localization table
	 */
	'zh-TW': LocalizationTableEntity;

	/**
	 * it localization table
	 */
	it: LocalizationTableEntity;

	/**
	 * Default localization table
	 */
	Default: LocalizationTableEntity;

	/**
	 * es localization table
	 */
	es: LocalizationTableEntity;

	/**
	 * ja localization table
	 */
	ja: LocalizationTableEntity;

}

declare const LocalizationTables: LocalizationTables;

declare interface Organizations {

	/**
	 * Composer organization
	 */
	Composer: OrganizationEntity;

	/**
	 * Default organization
	 */
	Everyone: OrganizationEntity;

	/**
	 * Development organization
	 */
	Development: OrganizationEntity;

}

declare const Organizations: Organizations;

declare interface Users {

	/**
	 * System
	 */
	System: UserEntity;

	/**
	 * Administrator
	 */
	Administrator: UserEntity;

	/**
	 * SuperUser
	 */
	SuperUser: UserEntity;

}

declare const Users: Users;

declare interface Groups {

	/**
	 * All users
	 */
	Users: GroupEntity;

	/**
	 * Built-in group for Solution Central developer role
	 */
	SolutionCentralDevelopers: GroupEntity;

	/**
	 * Built-in group for users that need to use Composer
	 */
	ComposerUsers: GroupEntity;

	/**
	 * Built-in application developers role
	 */
	Developers: GroupEntity;

	/**
	 * Built-in application designers role
	 */
	Designers: GroupEntity;

	/**
	 * Built-in group for Solution Central administrators role
	 */
	SolutionCentralSiteAdministrators: GroupEntity;

	/**
	 * Built-in system administrators role
	 */
	Administrators: GroupEntity;

	/**
	 * Security administrators role
	 */
	SecurityAdministrators: GroupEntity;

}

declare const Groups: Groups;

declare interface PersistenceProviders {

	/**
	 * 
	 */
	ThingworxPersistenceProvider: PersistenceProviderEntity;

}

declare const PersistenceProviders: PersistenceProviders;

declare interface Projects {

	/**
	 * 
	 */
	test: ProjectEntity;

}

declare const Projects: Projects;

/**
 * DataShape used to populate licensed user group usage data
 */
 declare class LicenseGroupUsageDataShape extends DataShapeBase {

	/**
	 * 
	 */
	GroupName: STRING;

	/**
	 * 
	 */
	NumberGroupLicenses: STRING;

	/**
	 * 
	 */
	NumberGroupLicensesUnique: STRING;

	/**
	 * 
	 */
	ProductName: STRING;

	/**
	 * 
	 */
	NumberGroupLicensesAllocated: STRING;


}

/**
 * Used by the AuditDataTable
 */
 declare class DTAuditShape extends DataShapeBase {

	/**
	 * category for the audit entry
	 */
	auditCategory: STRING;

	/**
	 * collection of field replacements within the message
	 */
	messageArgs: INFOTABLE<any>;

	/**
	 * generated GUID for the audit entry
	 */
	id: GUID;

	/**
	 * i18n message key for the audit entry
	 */
	message: STRING;

	/**
	 * user generating the audit entry
	 */
	user: STRING;


}

/**
 * Design Time Permissions
 */
 declare class DesignTimePermissions extends DataShapeBase {

	/**
	 * Is Permitted Access
	 */
	isPermitted: BOOLEAN;

	/**
	 * Principal Name
	 */
	name: STRING;

	/**
	 * Principal Type
	 */
	type: STRING;

	/**
	 * Permission Name
	 */
	permissionName: STRING;


}

/**
 * Entity reference with description
 */
 declare class EntityReferenceWithDescription extends DataShapeBase {

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Entity type
	 */
	type: STRING;


}

/**
 * Users exluded from provisioning
 */
 declare class UserProvisioningUserExclusionList extends DataShapeBase {

	/**
	 * User
	 */
	exclusionListUserNames: USERNAME;


}

/**
 * The results of a signals job
 */
 declare class AnalyticsSignalsResult extends DataShapeBase {

	/**
	 * List of signal fields and their predictive power
	 */
	signals: INFOTABLE<AnalyticsSignalValue>;

	/**
	 * Field measured against for mutual information
	 */
	goalField: STRING;


}

/**
 * Project Information
 */
 declare class ProjectInfo extends DataShapeBase {

	/**
	 * projects this project depends on
	 */
	dependsOn: STRING;

	/**
	 * project name
	 */
	name: STRING;

	/**
	 * project description
	 */
	description: STRING;

	/**
	 * version of project
	 */
	version: STRING;


}

/**
 * Thing definition
 */
 declare class Thing extends DataShapeBase {

	/**
	 * Indicates if a system object or not
	 */
	isSystemObject: BOOLEAN;

	/**
	 * Implemented shapes
	 */
	implementedShapes: INFOTABLE<EntityList>;

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Home mashup
	 */
	homeMashup: MASHUPNAME;

	/**
	 * Thing template
	 */
	thingTemplate: THINGTEMPLATENAME;

	/**
	 * Enabled
	 */
	enabled: BOOLEAN;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * Entity usage
 */
 declare class EntityUsage extends DataShapeBase {

	/**
	 * Total count entities
	 */
	total: INTEGER;

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Disabled entities
	 */
	disabled: INTEGER;

	/**
	 * Enabled entities
	 */
	enabled: INTEGER;


}

/**
 * Information related to a transfer reservation
 */
 declare class TransferReservation extends DataShapeBase {

	/**
	 * The User who owns the reservation
	 */
	reservedBy: STRING;

	/**
	 * The reservation Id
	 */
	id: STRING;

	/**
	 * The time the reservation was acquired
	 */
	reservedAt: DATETIME;


}

/**
 * Boolean value stream
 */
 declare class BooleanValueStream extends DataShapeBase {

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * value
	 */
	value: BOOLEAN;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Network connection list with template information
 */
 declare class NetworkConnectionWithTemplate extends DataShapeBase {

	/**
	 * From entity name
	 */
	from: STRING;

	/**
	 * Avatar URL
	 */
	avatar: IMAGELINK;

	/**
	 * Thing template
	 */
	thingTemplate: THINGTEMPLATENAME;

	/**
	 * To entity name
	 */
	to: STRING;

	/**
	 * Connection type
	 */
	connectionType: STRING;


}

/**
 * Application key security event content
 */
 declare class ApplicationKeySecurityEvent extends DataShapeBase {

	/**
	 * Application Key
	 */
	applicationKey: STRING;

	/**
	 * Message
	 */
	message: STRING;


}

/**
 * 
 */
 declare class Nokia_SimEventDS extends DataShapeBase {


}

/**
 * DataShape used for detailing a NotificationHandler for a particular NotificationContent
 */
 declare class NotificationHandlerDetails extends DataShapeBase {

	/**
	 * The localized name for the type of notifications handler
	 */
	localizedName: STRING;

	/**
	 * The identifier for the type of supported notification handler
	 */
	handlerID: GUID;

	/**
	 * The name of the NotificationContent to which the handler is assigned
	 */
	contentName: NOTIFICATIONCONTENTNAME;


}

/**
 * Export file information
 */
 declare class ExportFile extends DataShapeBase {

	/**
	 * File size
	 */
	size: NUMBER;

	/**
	 * Date last modified
	 */
	lastModifiedDate: DATETIME;

	/**
	 * Export file name
	 */
	name: STRING;


}

/**
 * Vocabulary Term
 */
 declare class VocabularyTerm extends DataShapeBase {

	/**
	 * Name
	 */
	name: STRING;


}

/**
 * Spotlight search results
 */
 declare class SpotlightSearch extends DataShapeBase {

	/**
	 * Current user has read permission
	 */
	read: BOOLEAN;

	/**
	 * Last modified date
	 */
	lastModifiedDate: DATETIME;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Current user has update permission
	 */
	update: BOOLEAN;

	/**
	 * Entity type
	 */
	type: STRING;

	/**
	 * Current user has delete permission
	 */
	delete: BOOLEAN;

	/**
	 * Parent type
	 */
	parentType: STRING;

	/**
	 * Indicates if the object is from an extension
	 */
	isExtension: BOOLEAN;

	/**
	 * Indicates if a system object or not
	 */
	isSystemObject: BOOLEAN;

	/**
	 * Parent name
	 */
	parentName: STRING;

	/**
	 * Indicates if is editable or not
	 */
	isEditable: BOOLEAN;

	/**
	 * Indicates if the object is editable as an extension
	 */
	isEditableExtensionObject: BOOLEAN;

	/**
	 * Entity name (or id)
	 */
	name: STRING;

	/**
	 * Indicates if the object is editable as a system object
	 */
	isEditableSystemObject: BOOLEAN;

	/**
	 * Entity id
	 */
	id: STRING;


}

/**
 * Group member
 */
 declare class GroupMember extends DataShapeBase {

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Type
	 */
	type: STRING;


}

/**
 * Directory information
 */
 declare class FileSystemDirectory extends DataShapeBase {

	/**
	 * Directory Path
	 */
	path: STRING;

	/**
	 * Parent Directory Path
	 */
	parentPath: STRING;

	/**
	 * Directory name
	 */
	name: STRING;


}

/**
 * GAV of Dependent Solution
 */
 declare class SolutionDependency extends DataShapeBase {

	/**
	 * Last modified date of the dependency
	 */
	lastModifiedDate: DATETIME;

	/**
	 * Solution name
	 */
	displayName: STRING;

	/**
	 * GroupId of dependency
	 */
	groupId: STRING;

	/**
	 * Artifactory download URL of dependency
	 */
	downloadURL: STRING;

	/**
	 * ArtifactId of dependency
	 */
	artifactId: STRING;

	/**
	 * URL of the dependency in Solution Central
	 */
	href: STRING;

	/**
	 * Solution Id of dependency
	 */
	solutionId: STRING;

	/**
	 * Version of dependency
	 */
	version: STRING;

	/**
	 * Deploy status of the Solution on this instance
	 */
	deployStatus: BOOLEAN;


}

/**
 * Edge Thing properties with subscriptions list including push type and threshold
 */
 declare class EdgeThingPropertyNotification extends DataShapeBase {

	/**
	 * Edge property name
	 */
	edgeName: STRING;

	/**
	 * Change threshold to generate event for numeric properties
	 */
	pushThreshold: NUMBER;

	/**
	 * String representing push type for event notification to subscribers
	 */
	pushType: STRING;


}

/**
 * Generic Entry List
 */
 declare class GenericEntry extends DataShapeBase {

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry id
	 */
	id: STRING;

	/**
	 * Source of the entry
	 */
	source: STRING;

	/**
	 * Entry type
	 */
	type: STRING;

	/**
	 * List of tags
	 */
	tags: TAGS;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Data shape for representing array of number type
 */
 declare class NumberArrayElement extends DataShapeBase {

	/**
	 * 
	 */
	element: NUMBER;


}

/**
 * Date facets
 */
 declare class DateFacets extends DataShapeBase {

	/**
	 * End date
	 */
	endDate: DATETIME;

	/**
	 * Count
	 */
	count: INTEGER;

	/**
	 * Start date
	 */
	startDate: DATETIME;


}

/**
 * Image value stream
 */
 declare class ImageValueStream extends DataShapeBase {

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * value
	 */
	value: IMAGE;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Long anomaly alert
 */
 declare class LongAnomalyAlert extends DataShapeBase {

	/**
	 * Rate of Anomaly Detection (ms)
	 */
	anomalyDetectionRate: LONG;

	/**
	 * Rate of Inbound Sampling (ms)
	 */
	inboundSamplingRate: INTEGER;

	/**
	 * Self Train
	 */
	selfTrain: BOOLEAN;

	/**
	 * Time Allowed for Training (ms)
	 */
	trainingTime: INTEGER;

	/**
	 * Calibrate using device data
	 */
	calibrateWithDeviceData: BOOLEAN;

	/**
	 * Unique Identifier for the PMML Model
	 */
	modelID: STRING;

	/**
	 * Certainty Percentage
	 */
	certainty: NUMBER;

	/**
	 * Secondary Properties
	 */
	secondaryProperties: STRING;


}

/**
 * Paginated list containing job configurations and statuses
 */
 declare class AnalyticsJobInfoPage extends DataShapeBase {

	/**
	 * URI to the next page
	 */
	next: STRING;

	/**
	 * Count of all records
	 */
	total: LONG;

	/**
	 * URI to the previous page
	 */
	previous: STRING;

	/**
	 * List of job configurations and statuses
	 */
	values: INFOTABLE<AnalyticsJobInfo>;


}

/**
 * Alert summary
 */
 declare class AlertSummary extends DataShapeBase {

	/**
	 * Alert duration
	 */
	duration: NUMBER;

	/**
	 * Alert acknowledge timestamp
	 */
	ackTimestamp: DATETIME;

	/**
	 * Alert type
	 */
	alertType: STRING;

	/**
	 * Alert acknowledged by
	 */
	ackBy: STRING;

	/**
	 * Alert acknowledge state
	 */
	ack: BOOLEAN;

	/**
	 * Alert name
	 */
	name: STRING;

	/**
	 * Alert source property
	 */
	sourceProperty: STRING;

	/**
	 * Alert description
	 */
	description: STRING;

	/**
	 * Alert source thing
	 */
	source: STRING;

	/**
	 * Alert message
	 */
	message: STRING;

	/**
	 * Alert priority
	 */
	priority: INTEGER;

	/**
	 * Alert timestamp
	 */
	timestamp: DATETIME;


}

/**
 * DataShape used to populate license information at runtime
 */
 declare class LicenseInfoTableDataShape extends DataShapeBase {

	/**
	 * Number of days remaining to expire
	 */
	DaysRemaining: INTEGER;

	/**
	 * Is enforced
	 */
	IsEnforced: STRING;

	/**
	 * Expiry date of license feature
	 */
	ExpirationDate: STRING;

	/**
	 * Product name
	 */
	ProductName: STRING;

	/**
	 * Total features in license file
	 */
	TotalFeatureCount: STRING;

	/**
	 * version of license feature
	 */
	Version: STRING;

	/**
	 * Available feature count
	 */
	AvailableFeatureCount: STRING;

	/**
	 * In use feature count
	 */
	InUseFeatureCount: INTEGER;

	/**
	 * License feature name
	 */
	FeatureName: STRING;


}

/**
 * The min (exclusive) and max (inclusive) values specifying a single bin, and the number of data points within that range. Only the first bin has an inclusive minimum.
 */
 declare class AnalyticsDataDistributionBin extends DataShapeBase {

	/**
	 * min range (exclusive) for this bin
	 */
	min: NUMBER;

	/**
	 * max range (inclusive) for this bin
	 */
	max: NUMBER;

	/**
	 * number of data points in this bin
	 */
	count: INTEGER;


}

/**
 * DataShape used to dispaly license usage information along with time stamp
 */
 declare class LicenseUsageDataShapeWithTimeStamp extends DataShapeBase {

	/**
	 * License Model Type
	 */
	LicenseModel: STRING;

	/**
	 * Transaction Type
	 */
	TransactionType: INTEGER;

	/**
	 * Product Name
	 */
	ProductName: STRING;

	/**
	 * In Use Feature Count
	 */
	InUseFeatureCount: LONG;

	/**
	 * User Name
	 */
	source: STRING;

	/**
	 * Feature Name
	 */
	FeatureName: STRING;

	/**
	 * Transaction time
	 */
	timestamp: DATETIME;


}

/**
 * Scheduled event structure
 */
 declare class ScheduledEvent extends DataShapeBase {

	/**
	 * Event timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Anomaly Monitor content
 */
 declare class AnomalyMonitorState extends DataShapeBase {

	/**
	 * state of the thingwatcher
	 */
	watcherStatus: STRING;

	/**
	 * Alert type
	 */
	alertType: STRING;

	/**
	 * Alert Name
	 */
	alertName: STRING;

	/**
	 * Alert source property
	 */
	propertyName: STRING;

	/**
	 * Any error or information message
	 */
	message: STRING;

	/**
	 * Thingwatcher state timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Data shape representing an Industrial Connectivity group
 */
 declare class IndustrialGroups extends DataShapeBase {

	/**
	 * Whether the group has any subgroups at all
	 */
	HasAnySubGroups: BOOLEAN;

	/**
	 * Parent
	 */
	Parent: STRING;

	/**
	 * Whether the group is an internal group
	 */
	IsSystemGroup: BOOLEAN;

	/**
	 * FullPath
	 */
	FullPath: STRING;

	/**
	 * Whether the group has any non-internal subgroups
	 */
	HasNonSystemSubGroups: BOOLEAN;

	/**
	 * Name
	 */
	Name: STRING;


}

/**
 * Network connection list
 */
 declare class NetworkConnection extends DataShapeBase {

	/**
	 * From entity name
	 */
	from: STRING;

	/**
	 * To entity name
	 */
	to: STRING;

	/**
	 * Connection type
	 */
	connectionType: STRING;


}

/**
 * Information related to a tunnel session
 */
 declare class TunnelSession extends DataShapeBase {

	/**
	 * Number of connections tunnel will allow
	 */
	numConnects: INTEGER;

	/**
	 * Connected Thing being tunneled to
	 */
	targetThing: STRING;

	/**
	 * Number of bytes transferred
	 */
	bytesTransferred: NUMBER;

	/**
	 * Current status code of this tunnel
	 */
	code: INTEGER;

	/**
	 * Message about this tunnel's current state
	 */
	message: STRING;

	/**
	 * Size of tunnel data buffer
	 */
	blockSize: INTEGER;

	/**
	 * Duration of the tunnel in milliseconds
	 */
	duration: INTEGER;

	/**
	 * Port that tunnel will connect to
	 */
	port: INTEGER;

	/**
	 * Protocol being tunneled
	 */
	proto: STRING;

	/**
	 * Read timeout used at server endpoint
	 */
	readTimeout: INTEGER;

	/**
	 * The tunnel Id
	 */
	tunnelId: STRING;

	/**
	 * Host that tunnel will connect to
	 */
	host: STRING;

	/**
	 * Time the tunnel was initiated
	 */
	startTime: DATETIME;

	/**
	 * Time the tunnel was completed
	 */
	endTime: DATETIME;

	/**
	 * Current state of this tunnel
	 */
	state: STRING;

	/**
	 * User that initiated the tunnel
	 */
	user: STRING;

	/**
	 * Name of tunnel to open
	 */
	tunnelName: STRING;

	/**
	 * Has this tunnel completed
	 */
	isComplete: BOOLEAN;


}

/**
 * Thing property definition
 */
 declare class PropertyDefinition extends DataShapeBase {

	/**
	 * Flag indicating whether or not this field is read only
	 */
	isReadOnly: BOOLEAN;

	/**
	 * Flag indicating whether or not this field has a persistent value
	 */
	isPersistent: BOOLEAN;

	/**
	 * Flag indicating whether or not this field has a persistent value
	 */
	isLogged: BOOLEAN;

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Base data type
	 */
	baseType: BASETYPENAME;


}

/**
 * Signal information for specific fields
 */
 declare class AnalyticsSignalValue extends DataShapeBase {

	/**
	 * Measure of correlation between the goal field and signal fields
	 */
	normalizedMutualInformation: NUMBER;

	/**
	 * The amount of additional information provided about the goal beyond that provided by the previously selected fields
	 */
	informationGain: NUMBER;

	/**
	 * Linear correlation between the goal field and signal fields (-1 to 1, where 0 = no correlation and -1 or 1 = high correlation)
	 */
	pearsonsCorrelation: NUMBER;

	/**
	 * Fields that define this signal
	 */
	fields: INFOTABLE<GenericStringList>;


}

/**
 * Semantic link to any system entity
 */
 declare class EntityDescriptor extends DataShapeBase {

	/**
	 * Parent name
	 */
	parentName: STRING;

	/**
	 * Entity name (or id)
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Entity id
	 */
	id: STRING;

	/**
	 * Entity type
	 */
	type: STRING;

	/**
	 * Parent type
	 */
	parentType: STRING;


}

/**
 * Common entity information
 */
 declare class EntitySummary extends DataShapeBase {

	/**
	 * Indicates if a system object or not
	 */
	isSystemObject: BOOLEAN;

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Home mashup
	 */
	homeMashup: MASHUPNAME;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * Persistence Information
 */
 declare class PersistenceInformation extends DataShapeBase {

	/**
	 * Name of the information property
	 */
	name: STRING;

	/**
	 * Description of the information property
	 */
	description: STRING;

	/**
	 * Value of the information property
	 */
	value: STRING;


}

/**
 * Basic Statistics on Platform in list
 */
 declare class SystemStatistics extends DataShapeBase {

	/**
	 * State Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Value
	 */
	value: NUMBER;


}

/**
 * List of names of cryptographic algoritms
 */
 declare class ChecksumAlgorithmList extends DataShapeBase {

	/**
	 * Name of a cryptographic algorithm to use to compute a checksum
	 */
	checksumAlgorithm: STRING;


}

/**
 * Long compare alert
 */
 declare class LongCompareAlert extends DataShapeBase {

	/**
	 * Limit includes value
	 */
	limitInclusive: BOOLEAN;

	/**
	 * Limit to compare
	 */
	limit: LONG;


}

/**
 * Device status
 */
 declare class DeviceStatus extends DataShapeBase {

	/**
	 * Thing identifier
	 */
	identifier: STRING;

	/**
	 * Connection status
	 */
	isConnected: BOOLEAN;

	/**
	 * Thing name
	 */
	name: STRING;

	/**
	 * Thing description
	 */
	description: STRING;

	/**
	 * Reporting status
	 */
	isReporting: BOOLEAN;

	/**
	 * Thing template
	 */
	thingTemplate: THINGTEMPLATENAME;

	/**
	 * Last connection time
	 */
	lastConnection: DATETIME;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * Application Key listing
 */
 declare class ApplicationKey extends DataShapeBase {

	/**
	 * Client name
	 */
	clientName: STRING;

	/**
	 * User name linked to this application key
	 */
	userNameReference: USERNAME;

	/**
	 * Key ID
	 */
	name: STRING;

	/**
	 * Usage description
	 */
	description: STRING;

	/**
	 * Application Key ID
	 */
	id: STRING;

	/**
	 * IP White List
	 */
	ipWhitelist: STRING;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * Vocabulary term usage
 */
 declare class VocabularyTermUsage extends DataShapeBase {

	/**
	 * Number of links
	 */
	count: INTEGER;

	/**
	 * Term name
	 */
	name: STRING;

	/**
	 * Term description
	 */
	description: STRING;


}

/**
 * DataShape used for Vec2 BaseTypes.
 */
 declare class Vec2DataShape extends DataShapeBase {

	/**
	 * 
	 */
	x: NUMBER;

	/**
	 * 
	 */
	y: NUMBER;


}

/**
 * Data shape for representing array of long type
 */
 declare class LongArrayElement extends DataShapeBase {

	/**
	 * 
	 */
	element: LONG;


}

/**
 * Object Differences
 */
 declare class Difference extends DataShapeBase {

	/**
	 * The type of the difference (ADD, REMOVE, CHANGE)
	 */
	diffType: STRING;

	/**
	 * The name of the difference object
	 */
	name: STRING;

	/**
	 * The description of the difference object
	 */
	description: STRING;

	/**
	 * The actual difference
	 */
	difference: INFOTABLE<any>;

	/**
	 * The type of the objects compared in the difference
	 */
	diffObjectType: STRING;


}

/**
 * Entity counts
 */
 declare class EntityCount extends DataShapeBase {

	/**
	 * Total Count
	 */
	count: INTEGER;

	/**
	 * Entity type name
	 */
	name: STRING;


}

/**
 * Options used during user Provisioning
 */
 declare class UserProvisioningOptions extends DataShapeBase {

	/**
	 * 
	 */
	terminateUserSessionsOnAuthenticatorChange: BOOLEAN;

	/**
	 * 
	 */
	userModificationEnabled: BOOLEAN;

	/**
	 * 
	 */
	requireAllCredentialsAttributesAreProvisioned: BOOLEAN;

	/**
	 * 
	 */
	userCreationEnabled: BOOLEAN;


}

/**
 * User Provisioning Default Settings
 */
 declare class UserProvisioningDefaultSettings extends DataShapeBase {

	/**
	 * User Provisioning Default Description
	 */
	userDefaultDescription: STRING;

	/**
	 * User Provisioning Default Mobile Mashup
	 */
	userDefaultMobileMashupName: MASHUPNAME;

	/**
	 * User Provisioning Default Project Name
	 */
	userDefaultProjectName: PROJECTNAME;

	/**
	 * User Provisioning Default Tags
	 */
	userDefaultTags: TAGS;

	/**
	 * User Provisioning Default Home Mashup
	 */
	userDefaultHomeMashupName: MASHUPNAME;


}

/**
 * Undefined Data Shape
 */
 declare class Undefined extends DataShapeBase {

	/**
	 * Unknown
	 */
	unknown: STRING;


}

/**
 * Data shape for representing array of JSON type
 */
 declare class JSONArrayElement extends DataShapeBase {

	/**
	 * 
	 */
	element: JSON;


}

/**
 * Chat message
 */
 declare class ChatMessage extends DataShapeBase {

	/**
	 * From user
	 */
	from: USERNAME;

	/**
	 * To user
	 */
	to: USERNAME;

	/**
	 * Message content
	 */
	content: HTML;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Result of reading from an open file
 */
 declare class ReadFromBinaryFileResult extends DataShapeBase {

	/**
	 * A buffer of file data, Base64 enccoded
	 */
	data: BLOB;

	/**
	 * The size of the data returned
	 */
	count: INTEGER;

	/**
	 * Is this the last block of date
	 */
	eof: BOOLEAN;


}

/**
 * Description of the optimization results
 */
 declare class AnalyticsOptimizationResult extends DataShapeBase {

	/**
	 * The value of the row when scored without optimizations
	 */
	originalScore: NUMBER;

	/**
	 * The value of the row when scored with optimization
	 */
	optimizedScore: NUMBER;

	/**
	 * List of lever fields with their original and optimized values
	 */
	leverFields: INFOTABLE<AnalyticsOptimizedField>;

	/**
	 * The field values of the row identifiers
	 */
	identifiers: INFOTABLE<GenericStringList>;

	/**
	 * Error message if an exception occurs
	 */
	errorMessage: STRING;


}

/**
 * Diagnostic digest for industrial properties
 */
 declare class IndustrialDiagnosticDigest extends DataShapeBase {

	/**
	 * 
	 */
	ReadOnly: BOOLEAN;

	/**
	 * 
	 */
	Description: STRING;

	/**
	 * 
	 */
	Address: STRING;

	/**
	 * 
	 */
	DriverPersistedName: STRING;

	/**
	 * 
	 */
	CurrentValue: VARIANT;

	/**
	 * 
	 */
	Error: BOOLEAN;

	/**
	 * 
	 */
	Datatype: STRING;

	/**
	 * 
	 */
	Name: STRING;

	/**
	 * 
	 */
	CurrentTimestamp: DATETIME;

	/**
	 * 
	 */
	CurrentQuality: STRING;

	/**
	 * 
	 */
	Valid: BOOLEAN;

	/**
	 * 
	 */
	DriverFriendlyName: STRING;

	/**
	 * 
	 */
	Model: STRING;


}

/**
 * Integer anomaly alert
 */
 declare class IntegerAnomalyAlert extends DataShapeBase {

	/**
	 * Rate of Anomaly Detection (ms)
	 */
	anomalyDetectionRate: LONG;

	/**
	 * Rate of Inbound Sampling (ms)
	 */
	inboundSamplingRate: INTEGER;

	/**
	 * Self Train
	 */
	selfTrain: BOOLEAN;

	/**
	 * Time Allowed for Training (ms)
	 */
	trainingTime: INTEGER;

	/**
	 * Calibrate using device data
	 */
	calibrateWithDeviceData: BOOLEAN;

	/**
	 * Unique Identifier for the PMML Model
	 */
	modelID: STRING;

	/**
	 * Certainty Percentage
	 */
	certainty: NUMBER;

	/**
	 * Secondary Properties
	 */
	secondaryProperties: STRING;


}

/**
 * Role
 */
 declare class Role extends DataShapeBase {

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * InfoTable match alert
 */
 declare class InfoTableMatchAlert extends DataShapeBase {

	/**
	 * value
	 */
	value: INTEGER;


}

/**
 * Remote event Binding
 */
 declare class RemoteEventBinding extends DataShapeBase {

	/**
	 * Bound item name
	 */
	name: STRING;

	/**
	 * Source item name
	 */
	sourceName: STRING;


}

/**
 * Organization connection list
 */
 declare class OrganizationConnection extends DataShapeBase {

	/**
	 * From entity name
	 */
	from: STRING;

	/**
	 * To entity name
	 */
	to: STRING;

	/**
	 * Connection type
	 */
	connectionType: STRING;


}

/**
 * Subsystem status
 */
 declare class SubsystemStatus extends DataShapeBase {

	/**
	 * Run status
	 */
	isRunning: BOOLEAN;

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * State
	 */
	state: STRING;

	/**
	 * Enabled
	 */
	enabled: BOOLEAN;

	/**
	 * Entity Friendly Name
	 */
	friendlyName: STRING;

	/**
	 * Auto start
	 */
	autoStart: BOOLEAN;


}

/**
 * Alert definition
 */
 declare class AlertDefinition extends DataShapeBase {

	/**
	 * Alert attributes
	 */
	alertAttributes: INFOTABLE<any>;

	/**
	 * Alert type
	 */
	alertType: STRING;

	/**
	 * Alert name
	 */
	name: STRING;

	/**
	 * Alert description
	 */
	description: STRING;

	/**
	 * Alert priority
	 */
	priority: INTEGER;

	/**
	 * Alert enable status
	 */
	enabled: BOOLEAN;


}

/**
 * 
 */
 declare class StatusChange extends DataShapeBase {


}

/**
 * Blog Entry List with Comments
 */
 declare class BlogEntryWithComments extends DataShapeBase {

	/**
	 * Comments on this blog entry
	 */
	comments: INFOTABLE<Comment>;

	/**
	 * Number of comments
	 */
	count: INTEGER;

	/**
	 * Source of the entry
	 */
	source: STRING;

	/**
	 * Number of ratings
	 */
	ratingCount: INTEGER;

	/**
	 * Title for the entry
	 */
	title: STRING;

	/**
	 * Entry type
	 */
	type: STRING;

	/**
	 * Flag indicating a sticky entry
	 */
	isSticky: BOOLEAN;

	/**
	 * Content for the entry
	 */
	content: STRING;

	/**
	 * Parent entry id
	 */
	parentId: STRING;

	/**
	 * Containing entry id
	 */
	entryId: STRING;

	/**
	 * List of tags
	 */
	tags: TAGS;

	/**
	 * Time of last update
	 */
	lastUpdated: DATETIME;

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry id
	 */
	id: STRING;

	/**
	 * Average rating
	 */
	ratingAverage: NUMBER;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Datashape for IndustrialConfiguration Events
 */
 declare class IndustrialConfigurationEvent extends DataShapeBase {

	/**
	 * 
	 */
	configurationName: STRING;

	/**
	 * 
	 */
	message: STRING;

	/**
	 * 
	 */
	status: STRING;


}

/**
 * List of lever fields with their original and optimized values
 */
 declare class AnalyticsOptimizedField extends DataShapeBase {

	/**
	 * Optimized value of the field
	 */
	optimalValue: STRING;

	/**
	 * Name of the field
	 */
	fieldName: STRING;

	/**
	 * Original value of the field
	 */
	originalValue: STRING;


}

/**
 * Dashboard listing
 */
 declare class DashboardList extends DataShapeBase {

	/**
	 * Current user can edit this dashboard
	 */
	isEditable: BOOLEAN;

	/**
	 * Current user is owner of this dashboard
	 */
	isOwner: BOOLEAN;

	/**
	 * Dashboard ID
	 */
	id: STRING;

	/**
	 * Dashboard title
	 */
	title: STRING;


}

/**
 * Persistence Information
 */
 declare class AllPersistenceInformation extends DataShapeBase {

	/**
	 * Name of the persistence provider
	 */
	persistenceProvider: STRING;

	/**
	 * Name of the information property
	 */
	name: STRING;

	/**
	 * Name of the persistence provider package
	 */
	persistenceProviderPackage: STRING;

	/**
	 * Description of the information property
	 */
	description: STRING;

	/**
	 * Value of the information property
	 */
	value: STRING;


}

/**
 * Collaboration or data entry event content
 */
 declare class EntryChangeEvent extends DataShapeBase {

	/**
	 * Entry id
	 */
	id: STRING;

	/**
	 * Entry Type
	 */
	type: STRING;


}

/**
 * DataShape used for Vec3 BaseTypes.
 */
 declare class Vec3DataShape extends DataShapeBase {

	/**
	 * 
	 */
	x: NUMBER;

	/**
	 * 
	 */
	y: NUMBER;

	/**
	 * 
	 */
	z: NUMBER;


}

/**
 * Wiki History List
 */
 declare class WikiHistory extends DataShapeBase {

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry id
	 */
	id: STRING;

	/**
	 * Source of the entry
	 */
	source: STRING;

	/**
	 * Entry type
	 */
	type: STRING;

	/**
	 * Content for the entry
	 */
	content: STRING;

	/**
	 * Parent entry id
	 */
	parentId: STRING;

	/**
	 * Containing entry id
	 */
	entryId: STRING;

	/**
	 * List of tags
	 */
	tags: TAGS;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Boolean match alert
 */
 declare class BooleanMatchAlert extends DataShapeBase {

	/**
	 * value
	 */
	value: BOOLEAN;


}

/**
 * Data Shape Definition
 */
 declare class DataShape extends DataShapeBase {

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Field definitions
	 */
	fieldDefinitions: INFOTABLE<any>;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * Metadata describing the results
 */
 declare class AnalyticsResultDetails extends DataShapeBase {

	/**
	 * ID of the result
	 */
	resultId: STRING;

	/**
	 * URI to the result for reference, if applicable (Data, Training, Clusters)
	 */
	resultUri: STRING;

	/**
	 * Description of the result
	 */
	description: STRING;

	/**
	 * Date and time the result was last modified
	 */
	lastModified: STRING;

	/**
	 * Name of the result
	 */
	resultName: STRING;

	/**
	 * Status of the result
	 */
	status: STRING;

	/**
	 * Queryable tags associated with this result
	 */
	tags: INFOTABLE<GenericStringList>;


}

/**
 * Datashape for Solution Deliveries
 */
 declare class SolutionDelivery extends DataShapeBase {

	/**
	 * Solution Delivery Id
	 */
	solutionDeliveryId: STRING;

	/**
	 * Solution Delivery Creator
	 */
	createdBy: STRING;

	/**
	 * Display name of Solution Delivery
	 */
	displayName: STRING;

	/**
	 * Solution Delivery last updated
	 */
	lastUpdateDate: DATETIME;

	/**
	 * Download URL
	 */
	downloadURL: STRING;

	/**
	 * Description of Solution Delivery
	 */
	description: STRING;

	/**
	 * URL to Solution in Solution Central
	 */
	href: STRING;

	/**
	 * Solution Id
	 */
	solutionId: STRING;

	/**
	 * State of the Solution Delivery
	 */
	state: STRING;

	/**
	 * Solution Delivery creation date
	 */
	creationDate: DATETIME;

	/**
	 * Version
	 */
	version: STRING;


}

/**
 * DateTime value stream
 */
 declare class DateTimeValueStream extends DataShapeBase {

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * value
	 */
	value: DATETIME;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Stream Entry data
 */
 declare class StreamData extends DataShapeBase {

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * A more in-depth Thing property definition for use in the AddPropertyDefinitions service
 */
 declare class PropertyDefinitionWithDetails extends DataShapeBase {

	/**
	 * The default value for the property
	 */
	defaultValue: STRING;

	/**
	 * For remote properties only: Remote binding aspects
	 */
	remoteBindingAspects: JSON;

	/**
	 * Flag indicating whether or not this property is bound to a remote property
	 */
	isRemote: BOOLEAN;

	/**
	 * Flag indicating whether or not this property has a persistent value
	 */
	isLogged: BOOLEAN;

	/**
	 * Description of the property
	 */
	description: STRING;

	/**
	 * For remote properties only: The name of the remote property
	 */
	remotePropertyName: STRING;

	/**
	 * For remote properties only: Connection timeout
	 */
	timeout: INTEGER;

	/**
	 * Base data type of the property
	 */
	baseType: BASETYPENAME;

	/**
	 * For remote properties only: Push type
	 */
	pushType: STRING;

	/**
	 * Flag indicating whether or not this property is read only
	 */
	isReadOnly: BOOLEAN;

	/**
	 * Data change threshold
	 */
	dataChangeThreshold: NUMBER;

	/**
	 * Flag indicating whether or not this property has a persistent value
	 */
	isPersistent: BOOLEAN;

	/**
	 * Name of the property
	 */
	name: STRING;

	/**
	 * For remote properties only: Push threshold
	 */
	pushThreshold: NUMBER;

	/**
	 * Data change type
	 */
	dataChangeType: STRING;

	/**
	 * Category of the property
	 */
	category: STRING;

	/**
	 * DataShape
	 */
	dataShape: DATASHAPENAME;


}

/**
 * Datashape for Entity Dependencies
 */
 declare class EntityDependency extends DataShapeBase {

	/**
	 * Dependent entity container version
	 */
	containerVersion: STRING;

	/**
	 * Dependent entity last modified date
	 */
	dependentEntityType: STRING;

	/**
	 * Dependent entity container name
	 */
	containerName: STRING;

	/**
	 * Dependent entity container type
	 */
	containerType: STRING;

	/**
	 * Entity name
	 */
	entityName: STRING;

	/**
	 * Entity type
	 */
	entityType: STRING;

	/**
	 * State of dependent entity container
	 */
	containerState: STRING;

	/**
	 * Dependent entity name
	 */
	dependentEntityName: STRING;

	/**
	 * Used-In information of dependent entity
	 */
	whereUsed: JSON;

	/**
	 * Dependent entity last modified
	 */
	dependentEntityLastModified: DATETIME;


}

/**
 * Long match alert
 */
 declare class LongMatchAlert extends DataShapeBase {

	/**
	 * value
	 */
	value: LONG;


}

/**
 * The result of the validation job
 */
 declare class AnalyticsValidationResult extends DataShapeBase {

	/**
	 * Name of the job
	 */
	jobName: STRING;

	/**
	 * Result ID for the predicted vs actual scores
	 */
	pvaId: STRING;

	/**
	 * Total number of records evaluated
	 */
	recordCount: LONG;

	/**
	 * Description of the job
	 */
	description: STRING;

	/**
	 * The evaluated field
	 */
	goalField: STRING;

	/**
	 * URI to the model
	 */
	modelUri: STRING;

	/**
	 * Confidence model URI
	 */
	confidenceModelUri: STRING;

	/**
	 * Collection of statistics describing model performance
	 */
	validationMetrics: INFOTABLE<AnalyticsValidationMetrics>;


}

/**
 * Thing start event content
 */
 declare class ThingStartEvent extends DataShapeBase {


}

/**
 * Event definition
 */
 declare class EventDefinition extends DataShapeBase {

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Event data type definition
	 */
	dataShape: STRING;


}

/**
 * Location match alert
 */
 declare class LocationMatchAlert extends DataShapeBase {

	/**
	 * value
	 */
	value: LOCATION;


}

/**
 * Entity usage
 */
 declare class EntityUsageReport extends DataShapeBase {

	/**
	 * Local host name
	 */
	localHostName: STRING;

	/**
	 * User entities usage
	 */
	userEntities: INFOTABLE<EntityUsage>;

	/**
	 * Date generated
	 */
	dateGenerated: DATETIME;

	/**
	 * Total things enabled
	 */
	enabledThings: INTEGER;

	/**
	 * System templates only
	 */
	systemTemplatesOnly: BOOLEAN;

	/**
	 * Entities usage
	 */
	entities: INFOTABLE<EntityUsage>;

	/**
	 * Total things disabled
	 */
	disabledThings: INTEGER;

	/**
	 * Local hardware address
	 */
	localHardwareAddress: STRING;

	/**
	 * Thingworx version
	 */
	thingworxVersion: STRING;

	/**
	 * Total things
	 */
	totalThings: INTEGER;

	/**
	 * Include system objects
	 */
	includeSystemUsers: BOOLEAN;

	/**
	 * User name
	 */
	userName: STRING;


}

/**
 * Local property Binding
 */
 declare class LocalPropertyBinding extends DataShapeBase {

	/**
	 * Remote binding aspects
	 */
	aspects: JSON;

	/**
	 * Bound item name
	 */
	name: STRING;

	/**
	 * Source item name
	 */
	sourceName: STRING;

	/**
	 * Source thing name
	 */
	sourceThingName: STRING;


}

/**
 * Persistent Provider Connection Status
 */
 declare class ConnectionStatus extends DataShapeBase {

	/**
	 * Connection data (Server(s), Port etc.)
	 */
	connectionData: STRING;

	/**
	 * Connection status
	 */
	status: BOOLEAN;


}

/**
 * Localization token and usage
 */
 declare class LocalizationTokenAnnotated extends DataShapeBase {

	/**
	 * Token usage
	 */
	usage: STRING;

	/**
	 * Translation context
	 */
	context: STRING;

	/**
	 * Token name
	 */
	name: STRING;

	/**
	 * Localized value
	 */
	value: STRING;


}

/**
 * Entity list
 */
 declare class EntityList extends DataShapeBase {

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;


}

/**
 * Navigation menu entry
 */
 declare class MenuEntry extends DataShapeBase {

	/**
	 * Link destination
	 */
	linkDestination: STRING;

	/**
	 * Is a default menu item
	 */
	isDefault: BOOLEAN;

	/**
	 * Menu entry parent id
	 */
	parentMenuId: STRING;

	/**
	 * Optional image URL
	 */
	imageURL: IMAGELINK;

	/**
	 * Link target (Popup, Mashup, New)
	 */
	linkTarget: STRING;

	/**
	 * Description for tooltip
	 */
	description: STRING;

	/**
	 * Menu entry id
	 */
	menuId: STRING;

	/**
	 * Link type (Mashup, Hyperlink, or Menu)
	 */
	linkType: STRING;

	/**
	 * Menu entry title
	 */
	title: STRING;


}

/**
 * Remote Thing properties with subscriptions list including data change type and threshold
 */
 declare class LegacyEdgeThingPropertyNotification extends DataShapeBase {

	/**
	 * Change threshold to generate event for numeric properties
	 */
	dataChangeThreshold: NUMBER;

	/**
	 * Name at Edge MicroServer
	 */
	edgeName: STRING;

	/**
	 * Name at application server
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * String representing data change type for event notification to subscribers
	 */
	dataChangeType: STRING;

	/**
	 * Name of the edge thing
	 */
	remoteThing: STRING;

	/**
	 * Base data type
	 */
	baseType: STRING;


}

/**
 * Data shape for defining the UserExtensions config table on a User
 */
 declare class UserExtensionsData extends DataShapeBase {

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Value
	 */
	value: STRING;

	/**
	 * Last update time
	 */
	lastUpdateTime: DATETIME;


}

/**
 * DataShape used to return an InfoTable of items that succeed or fail in a bulk processing service
 */
 declare class BulkProcessingReport extends DataShapeBase {

	/**
	 * A flag indicating whether or not this service successfully processed this item
	 */
	success: BOOLEAN;

	/**
	 * The error message generated trying to process this item
	 */
	errorMessage: STRING;

	/**
	 * The name of the item processed
	 */
	name: STRING;


}

/**
 * Thing facets
 */
 declare class ThingFacets extends DataShapeBase {

	/**
	 * Thing template facets
	 */
	thingTemplateFacets: INFOTABLE<NamedFacets>;

	/**
	 * Model tag facets
	 */
	modelTagFacets: INFOTABLE<MultilevelFacets>;

	/**
	 * Network facets
	 */
	networkFacets: INFOTABLE<NamedFacets>;

	/**
	 * Type facets
	 */
	typeFacets: INFOTABLE<NamedFacets>;

	/**
	 * Count
	 */
	count: INTEGER;

	/**
	 * Property value facets
	 */
	propertyValueFacets: INFOTABLE<FieldDefinition>;

	/**
	 * Thing shape facets
	 */
	thingShapeFacets: INFOTABLE<NamedFacets>;


}

/**
 * Thing name, property values
 */
 declare class RemotePropertyUpdates extends DataShapeBase {

	/**
	 * Property updates
	 */
	values: INFOTABLE<NamedVTQ>;

	/**
	 * Thing name
	 */
	name: STRING;


}

/**
 * A matrix of predictions (rows correspond to the original classifications and columns correspond to the predicted classification)
 */
 declare class AnalyticsConfusionMatrix extends DataShapeBase {

	/**
	 * Table showing the number of predictions for each classification
	 */
	matrix: INFOTABLE<AnalyticsConfusionMatrixRow>;

	/**
	 * Classification values for the matrix (applied left to right and top to bottom)
	 */
	labels: INFOTABLE<GenericStringList>;


}

/**
 * String match alert
 */
 declare class StringMatchAlert extends DataShapeBase {

	/**
	 * value
	 */
	value: STRING;


}

/**
 * Integer match alert
 */
 declare class IntegerMatchAlert extends DataShapeBase {

	/**
	 * value
	 */
	value: INTEGER;


}

/**
 * Value, time, quality, state
 */
 declare class VTQ extends DataShapeBase {

	/**
	 * time
	 */
	time: DATETIME;

	/**
	 * value
	 */
	value: VARIANT;

	/**
	 * quality
	 */
	quality: STRING;


}

/**
 * Status of an analytics job
 */
 declare class AnalyticsJobStatus extends DataShapeBase {

	/**
	 * Length of time the job was in the queue
	 */
	queuedDuration: STRING;

	/**
	 * Job types with corresponding job IDs
	 */
	jobTypesWithId: INFOTABLE<FieldValuePair>;

	/**
	 * Date and time the job was started
	 */
	startDateTime: STRING;

	/**
	 * Date and time the job was submitted
	 */
	queuedStartDateTime: STRING;

	/**
	 * URI to the job result for reference, if applicable (Data, Training, Clusters)
	 */
	referenceUri: STRING;

	/**
	 * Length of time the job took to run
	 */
	runTime: STRING;

	/**
	 * Current state of the job (COMPLETED,RUNNING,FAILED,EXPIRED,QUEUED,UNKNOWN,TERMINATED)
	 */
	state: STRING;

	/**
	 * Date and time the job was completed
	 */
	endDateTime: STRING;

	/**
	 * Extra information for reporting issues about the job
	 */
	message: STRING;


}

/**
 * Dashboard definition
 */
 declare class DashboardChange extends DataShapeBase {

	/**
	 * Sequence in the target group
	 */
	sequence: INTEGER;

	/**
	 * Dashboard Item ID
	 */
	dashboardItemID: STRING;

	/**
	 * Target Dashboard Group ID
	 */
	targetGroupID: STRING;

	/**
	 * Source Dashboard Group ID
	 */
	sourceGroupID: STRING;


}

/**
 * Database tables
 */
 declare class DatabaseTable extends DataShapeBase {

	/**
	 * Table name
	 */
	name: STRING;

	/**
	 * Table type
	 */
	type: STRING;


}

/**
 * Vocabulary Term List
 */
 declare class VocabularyTermList extends DataShapeBase {

	/**
	 * Vocabulary Name
	 */
	vocabulary: STRING;

	/**
	 * Vocabulary Term
	 */
	vocabularyTerm: STRING;


}

/**
 * DataShape used to populate licensed users usage data
 */
 declare class LicenseUserUsageDataShape extends DataShapeBase {

	/**
	 * 
	 */
	LicenseGroupType: STRING;

	/**
	 * 
	 */
	UserName: STRING;

	/**
	 * 
	 */
	UsageCount: LONG;


}

/**
 * Navigation menu definition
 */
 declare class Menu extends DataShapeBase {

	/**
	 * Indicates if a system object or not
	 */
	isSystemObject: BOOLEAN;

	/**
	 * Optional image URL
	 */
	imageURL: IMAGELINK;

	/**
	 * Menu items
	 */
	menuItems: INFOTABLE<MenuItem>;

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Groups associated with this menu
	 */
	groupReferences: INFOTABLE<EntityList>;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * Mashup facets
 */
 declare class MashupFacets extends DataShapeBase {

	/**
	 * Related thing template facets
	 */
	thingTemplateFacets: INFOTABLE<NamedFacets>;

	/**
	 * Model tag facets
	 */
	modelTagFacets: INFOTABLE<MultilevelFacets>;

	/**
	 * Count
	 */
	count: INTEGER;

	/**
	 * Related thing shape facets
	 */
	thingShapeFacets: INFOTABLE<NamedFacets>;

	/**
	 * Related thing facets
	 */
	thingFacets: INFOTABLE<NamedFacets>;


}

/**
 * Number compare alert
 */
 declare class NumberCompareAlert extends DataShapeBase {

	/**
	 * Limit includes value
	 */
	limitInclusive: BOOLEAN;

	/**
	 * Limit to compare
	 */
	limit: NUMBER;


}

/**
 * An extension of the AnalyticsDatasetRef which includes information to assist in distinguishing created datasets
 */
 declare class AnalyticsDatasetRefWithTags extends DataShapeBase {

	/**
	 * Number of fields in the dataset
	 */
	fieldCount: INTEGER;

	/**
	 * SQL WHERE clause to refine the dataset
	 */
	filter: STRING;

	/**
	 * Location of the data
	 */
	datasetUri: STRING;

	/**
	 * Metadata of the dataset (for providing data as part of request)
	 */
	metadata: INFOTABLE<AnalyticsDatasetMetadata>;

	/**
	 * An infotable of data (must be flat. for providing data as part of request)
	 */
	data: INFOTABLE<any>;

	/**
	 * Structure of the data (csv, parquet)
	 */
	format: STRING;

	/**
	 * The date and time that the create dataset ref job was posted
	 */
	createdDateAndTime: STRING;

	/**
	 * Fields to remove from the dataset
	 */
	exclusions: INFOTABLE<GenericStringList>;

	/**
	 * Number of rows in the dataset
	 */
	rowCount: LONG;

	/**
	 * Queryable tags associated to this dataset
	 */
	tags: INFOTABLE<GenericStringList>;


}

/**
 * Information about an open file
 */
 declare class GetTransferInfoResult extends DataShapeBase {

	/**
	 * Max size of a file to transfer
	 */
	maxFileSize: LONG;

	/**
	 * Temporary location to transfer files to
	 */
	stagingDir: STRING;

	/**
	 * Max size of data for read and write calls
	 */
	blockSize: INTEGER;


}

/**
 * Alert event content
 */
 declare class AlertEvent extends DataShapeBase {

	/**
	 * Alert acknowledge timestamp
	 */
	ackTimestamp: DATETIME;

	/**
	 * Alert type
	 */
	alertType: STRING;

	/**
	 * Alert acknowledged by
	 */
	ackBy: STRING;

	/**
	 * Alert acknowledge state
	 */
	ack: BOOLEAN;

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Alert source property
	 */
	sourceProperty: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Alert message
	 */
	message: STRING;

	/**
	 * Alert priority
	 */
	priority: INTEGER;


}

/**
 * Data shape for representing array of string type
 */
 declare class StringArrayElement extends DataShapeBase {

	/**
	 * 
	 */
	element: STRING;


}

/**
 * Value, time, quality, state
 */
 declare class VTQL extends DataShapeBase {

	/**
	 * location
	 */
	location: LOCATION;

	/**
	 * time
	 */
	time: DATETIME;

	/**
	 * value
	 */
	value: VARIANT;

	/**
	 * quality
	 */
	quality: STRING;


}

/**
 * A list of active directory groups for a given domain
 */
 declare class ActiveDirectoryDomainGroups extends DataShapeBase {

	/**
	 * Active Directory Group Name
	 */
	activeDirectoryGroupName: STRING;


}

/**
 * InfoTable value stream
 */
 declare class InfoTableValueStream extends DataShapeBase {

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * value
	 */
	value: INFOTABLE<any>;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Time index bucket
 */
 declare class TimeIndexBucket extends DataShapeBase {

	/**
	 * Parent bucket id
	 */
	parentBucketId: STRING;

	/**
	 * Depth
	 */
	depth: NUMBER;

	/**
	 * Entry count
	 */
	entryCount: NUMBER;

	/**
	 * Bucket count
	 */
	bucketCount: NUMBER;

	/**
	 * Bucket id
	 */
	id: STRING;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * User Provisioning Exclusion List
 */
 declare class UserProvisioningExclusionList extends DataShapeBase {

	/**
	 * Thingworx User Name
	 */
	thingworxUserName: USERNAME;


}

/**
 * Anomaly Alert Training Statistics
 */
 declare class AnomalyAlertTrainingStatistics extends DataShapeBase {

	/**
	 * Status of Thingwatcher
	 */
	watcherStatus: STRING;

	/**
	 * Number of validation cycles
	 */
	numberOfValidationCycles: NUMBER;

	/**
	 * Alert Name
	 */
	alert: STRING;

	/**
	 * Property Name
	 */
	property: STRING;

	/**
	 * Number of training cycles
	 */
	numberOfTrainingCycles: NUMBER;

	/**
	 * Pearsons correlation
	 */
	pearsonsCorrelation: NUMBER;

	/**
	 * Training Data Collection start time
	 */
	trainingDataCollectionStartTime: DATETIME;

	/**
	 * Training Data Collection stop time
	 */
	trainingDataCollectionStopTime: DATETIME;


}

/**
 * Identity provider attributes used for user default
 */
 declare class UserProvisioningIdentityProviderAttributes extends DataShapeBase {

	/**
	 * Identity Provider Attribute containing the user's description
	 */
	userIdentityProviderDescription: STRING;

	/**
	 * Identity Provider Attribute containing the user's tags
	 */
	userIdentityProviderTags: STRING;

	/**
	 * Identity Provider Attribute containing the user's mobile mashup
	 */
	userIdentityProviderMobileMashup: STRING;

	/**
	 * Identity Provider Attribute containing the user's groups
	 */
	userIdentityProviderGroups: STRING;

	/**
	 * Identity Provider Attribute containing the user's home mashup
	 */
	userIdentityProviderHomeMashup: STRING;


}

/**
 * 
 */
 declare class ReportingConfiguration extends DataShapeBase {

	/**
	 * Strategy to determine health
	 */
	reportingStrategy: THINGNAME;


}

/**
 * Data shape representing an Industrial Connectivity item (tag)
 */
 declare class IndustrialItems extends DataShapeBase {

	/**
	 * ReadOnly
	 */
	ReadOnly: BOOLEAN;

	/**
	 * Description
	 */
	Description: STRING;

	/**
	 * BaseType
	 */
	BaseType: BASETYPENAME;

	/**
	 * SourceType
	 */
	SourceType: STRING;

	/**
	 * DataShape
	 */
	DataShape: DATASHAPENAME;

	/**
	 * Source
	 */
	Source: STRING;

	/**
	 * Name
	 */
	Name: STRING;


}

/**
 * Ordered profile conditions
 */
 declare class AnalyticsProfileCondition extends DataShapeBase {

	/**
	 * Distance between the mean goals of the condition's population and the total population (in standard deviations)
	 */
	stdDevFromMean: NUMBER;

	/**
	 * Field selected for the condition
	 */
	fieldName: STRING;

	/**
	 * Number of records that fit the condition
	 */
	populationCount: LONG;

	/**
	 * ID for the profile
	 */
	profileId: STRING;

	/**
	 * Measure evaluating the strength of the condition
	 */
	zScore: NUMBER;

	/**
	 * Mean goal for all records that fit the condition
	 */
	averageGoal: NUMBER;

	/**
	 * Maximum bin value of the field selected for the condition (applies to Continuous fields)
	 */
	binMaximum: NUMBER;

	/**
	 * Minimum bin value of the field selected for the condition (applies to Continuous fields)
	 */
	binMinimum: NUMBER;

	/**
	 * Value of the field selected for the condition (applies to Categorical, Ordinal, and Boolean fields)
	 */
	value: STRING;

	/**
	 * Percent of total population that fits the condition
	 */
	populationPercentage: NUMBER;


}

/**
 * ScriptService Result Shape
 */
 declare class ScriptServiceResult extends DataShapeBase {

	/**
	 * The column number of the error/warning; ignored if status is TRUE
	 */
	columnNumber: INTEGER;

	/**
	 * The line number of the error/warning; ignored if status is TRUE
	 */
	lineNumber: INTEGER;

	/**
	 * Error or informational message
	 */
	message: STRING;

	/**
	 * Status indicator (true = successful)
	 */
	status: BOOLEAN;


}

/**
 * Data shape for representing array of InfoTable type
 */
 declare class InfoTableArrayElement extends DataShapeBase {

	/**
	 * 
	 */
	element: INFOTABLE<any>;


}

/**
 * Semantic link to any system entity
 */
 declare class EntityDescriptorWithTimestamp extends DataShapeBase {

	/**
	 * Parent name
	 */
	parentName: STRING;

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Entity type
	 */
	type: STRING;

	/**
	 * Parent type
	 */
	parentType: STRING;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Describes a result returned by the "SecurityServices.sanitizeHtml()" Service.
 */
 declare class HtmlSanitizationResult extends DataShapeBase {

	/**
	 * The sanitized HTML
	 */
	sanitizedHtml: STRING;

	/**
	 * Uniquely identifies the sanitization run that produced this result
	 */
	sanitizationId: STRING;


}

/**
 * 
 */
 declare class AnalyticsTimeSeriesPmmlValues extends DataShapeBase {

	/**
	 * 
	 */
	lookahead: INTEGER;

	/**
	 * 
	 */
	temporalFieldName: STRING;

	/**
	 * 
	 */
	transformVersion: STRING;

	/**
	 * 
	 */
	numberOfDataPointsPerCycle: INTEGER;

	/**
	 * 
	 */
	samplingFrequency: INTEGER;

	/**
	 * 
	 */
	entityIdFieldName: STRING;

	/**
	 * 
	 */
	numberOfDataPointsForTraining: INTEGER;

	/**
	 * 
	 */
	lookbackSize: INTEGER;


}

/**
 * Wiki Pages With Comments
 */
 declare class WikiPageWithComments extends DataShapeBase {

	/**
	 * Comments on this blog entry
	 */
	comments: INFOTABLE<Comment>;

	/**
	 * Number of comments
	 */
	count: INTEGER;

	/**
	 * Source of the entry
	 */
	source: STRING;

	/**
	 * Number of ratings
	 */
	ratingCount: INTEGER;

	/**
	 * Title for the entry
	 */
	title: STRING;

	/**
	 * Entry type
	 */
	type: STRING;

	/**
	 * Content for the entry
	 */
	content: STRING;

	/**
	 * Parent entry id
	 */
	parentId: STRING;

	/**
	 * Containing entry id
	 */
	entryId: STRING;

	/**
	 * List of tags
	 */
	tags: TAGS;

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry id
	 */
	id: STRING;

	/**
	 * Average rating
	 */
	ratingAverage: NUMBER;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Integer value stream
 */
 declare class IntegerValueStream extends DataShapeBase {

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * value
	 */
	value: INTEGER;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Alert Store
 */
 declare class AlertStore extends DataShapeBase {

	/**
	 * Alert type
	 */
	alertType: STRING;

	/**
	 * Alert Records
	 */
	records: STRING;

	/**
	 * Alert enabled
	 */
	isEnabled: BOOLEAN;

	/**
	 * Alert name
	 */
	name: STRING;

	/**
	 * Alert source property
	 */
	sourceProperty: STRING;

	/**
	 * Alert source thing
	 */
	source: STRING;

	/**
	 * Alert message
	 */
	message: STRING;

	/**
	 * Alert defined entity
	 */
	entity: STRING;


}

/**
 * Notification Recipient
 */
 declare class Recipient extends DataShapeBase {

	/**
	 * The name of the user or group
	 */
	name: STRING;


}

/**
 * Data facets
 */
 declare class DataFacets extends DataShapeBase {

	/**
	 * Data type facets
	 */
	dataTypeFacets: INFOTABLE<NamedFacets>;

	/**
	 * Source facets
	 */
	sourceFacets: INFOTABLE<MultilevelFacets>;

	/**
	 * Model tag facets
	 */
	modelTagFacets: INFOTABLE<MultilevelFacets>;

	/**
	 * Count
	 */
	count: INTEGER;

	/**
	 * Data tag facets
	 */
	dataTagFacets: INFOTABLE<MultilevelFacets>;

	/**
	 * Data shape facets
	 */
	dataShapeFacets: INFOTABLE<NamedFacets>;

	/**
	 * Data entity facets
	 */
	dataEntityFacets: INFOTABLE<MultilevelFacets>;

	/**
	 * Source tag facets
	 */
	sourceTagFacets: INFOTABLE<MultilevelFacets>;


}

/**
 * Collaboration facets
 */
 declare class CollaborationFacets extends DataShapeBase {

	/**
	 * Data type facets
	 */
	dataTypeFacets: INFOTABLE<NamedFacets>;

	/**
	 * Source facets
	 */
	sourceFacets: INFOTABLE<MultilevelFacets>;

	/**
	 * Count
	 */
	count: INTEGER;

	/**
	 * Data tag facets
	 */
	dataTagFacets: INFOTABLE<MultilevelFacets>;

	/**
	 * Data entity facets
	 */
	dataEntityFacets: INFOTABLE<MultilevelFacets>;

	/**
	 * Date facets
	 */
	dateFacets: INFOTABLE<DateFacets>;

	/**
	 * Source tag facets
	 */
	sourceTagFacets: INFOTABLE<MultilevelFacets>;


}

/**
 * Script Function Library
 */
 declare class ScriptFunctionLibrary extends DataShapeBase {

	/**
	 * script function library name
	 */
	name: DATETIME;

	/**
	 * extension package description
	 */
	description: STRING;

	/**
	 * Java class name
	 */
	className: STRING;


}

/**
 * Database columns
 */
 declare class DatabaseColumn extends DataShapeBase {

	/**
	 * Column name
	 */
	name: STRING;

	/**
	 * Column data type
	 */
	baseType: STRING;


}

/**
 * The results of a binned distribution query
 */
 declare class BinnedDistributionQueryRow extends DataShapeBase {

	/**
	 * The observed minimum value in a bin
	 */
	min: NUMBER;

	/**
	 * The observed maximum value in a bin
	 */
	max: NUMBER;

	/**
	 * Range definition for a bin
	 */
	bin: STRING;

	/**
	 * The sum of the goal field values among the records in a bin
	 */
	totalGoal: NUMBER;

	/**
	 * The average value of the goal field among the records in a bin
	 */
	averageGoal: NUMBER;

	/**
	 * The number of records that fall into a bin
	 */
	count: LONG;


}

/**
 * Thing Entries
 */
 declare class ThingEntry extends DataShapeBase {

	/**
	 * Entry Destination
	 */
	name: THINGNAME;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * Entry Type
	 */
	type: STRING;

	/**
	 * Tags
	 */
	tags: TAGS;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Configuration table
 */
 declare class ConfigurationTable extends DataShapeBase {

	/**
	 * Configuration Data
	 */
	configurationData: INFOTABLE<any>;

	/**
	 * Name
	 */
	name: STRING;


}

/**
 * Audit History search results
 */
 declare class AuditHistory extends DataShapeBase {

	/**
	 * category for the audit entry
	 */
	auditCategory: STRING;

	/**
	 * 
	 */
	sourceType: STRING;

	/**
	 * 
	 */
	source: STRING;

	/**
	 * audit message text
	 */
	message: STRING;

	/**
	 * user generating the audit entry
	 */
	user: STRING;

	/**
	 * 
	 */
	timestamp: DATETIME;


}

/**
 * File name and contents
 */
 declare class File extends DataShapeBase {

	/**
	 * A buffer of file data, Base64 enccoded
	 */
	data: BLOB;

	/**
	 * Temporary location to transfer files to
	 */
	name: STRING;


}

/**
 * Data Table Entries
 */
 declare class DataTableEntry extends DataShapeBase {

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Location of last modification
	 */
	location: LOCATION;

	/**
	 * Source of last modification
	 */
	source: STRING;

	/**
	 * Internal key value
	 */
	key: STRING;

	/**
	 * Tags
	 */
	tags: TAGS;

	/**
	 * Time of last modification
	 */
	timestamp: DATETIME;


}

/**
 * Collection of statistics describing model performance
 */
 declare class AnalyticsValidationMetrics extends DataShapeBase {

	/**
	 * Area under the ROC curve (BOOLEAN goals)
	 */
	areaUnderCurve: STRING;

	/**
	 * Number of records observed false but predicted true (BOOLEAN goals)
	 */
	falsePositiveRate: STRING;

	/**
	 * Adjusted R-Squared modifies the R-Squared value by taking into account the number of predictors used in the model (CONTINUOUS goals)
	 */
	rSquaredAdjusted: STRING;

	/**
	 * Number of records observed true and predicted true (BOOLEAN goals)
	 */
	truePositiveRate: STRING;

	/**
	 * Expanded metrics for specific bins (CONTINUOUS goals)
	 */
	binErrors: INFOTABLE<AnalyticsValidationBinError>;

	/**
	 * Precision or Positive Predictive Value represents the fraction of true positives from positive instances predicted (BOOLEAN goals)
	 */
	precision: STRING;

	/**
	 * R-Squared measures how well a model fits to data (CONTINUOUS goals)
	 */
	rSquared: STRING;

	/**
	 * Percent of records that were correctly predicted (BOOLEAN, CATEGORICAL goals)
	 */
	accuracy: STRING;

	/**
	 * Matthews Correlation Coefficient is a comparison of true and false positives with true and false negatives (BOOLEAN, CATEGORICAL goals)
	 */
	mcc: STRING;

	/**
	 * Linear correlation between actual and predicted scores (-1 to 1, where 0 = no correlation and -1 or 1 = high correlation) (CONTINUOUS, ORDINAL goals)
	 */
	pearsonCorrelation: STRING;

	/**
	 * The confusion matrix of the predictions (BOOLEAN, CATEGORICAL, ORDINAL goals)
	 */
	confusionMatrix: INFOTABLE<AnalyticsConfusionMatrix>;

	/**
	 * Recall, Sensitivity, or True Positive Rate represents the fraction of true positives from total positive instances (BOOLEAN goals)
	 */
	recall: STRING;

	/**
	 * Root Mean Squared Error is the standard deviation of the differences between actual and predicted scores (CONTINUOUS, ORDINAL goals)
	 */
	rmse: STRING;

	/**
	 * Specificity, or True Negative Rate represents the fraction of true negatives from total negative instances (BOOLEAN goals)
	 */
	specificity: STRING;

	/**
	 * A list of ROC pairs used to build the ROC curve.
	 */
	rocCurve: INFOTABLE<AnalyticsRocPair>;

	/**
	 * RMSE with scores normalized between 0 and 1 (CONTINUOUS, ORDINAL goals)
	 */
	rmseNormalized: STRING;


}

/**
 * Thing shape definition
 */
 declare class ThingShape extends DataShapeBase {

	/**
	 * Property definitions
	 */
	propertyDefinitions: INFOTABLE<any>;

	/**
	 * Event definitions
	 */
	eventDefinitions: INFOTABLE<any>;

	/**
	 * Service implementations
	 */
	serviceImplementations: INFOTABLE<any>;

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Contained Thing Shapes
	 */
	containedThingShapes: INFOTABLE<any>;

	/**
	 * Service definitions
	 */
	serviceDefinitions: INFOTABLE<any>;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * DataShape used to store license usage information
 */
 declare class LicenseUsageDataShape extends DataShapeBase {

	/**
	 * License Model Type
	 */
	LicenseModel: STRING;

	/**
	 * Transaction Type
	 */
	TransactionType: INTEGER;

	/**
	 * Product Name
	 */
	ProductName: STRING;

	/**
	 * In Use Feature Count
	 */
	InUseFeatureCount: LONG;

	/**
	 * Usage ID
	 */
	UsageID: INTEGER;

	/**
	 * Feature Name
	 */
	FeatureName: STRING;


}

/**
 * Location deviation alert
 */
 declare class LocationDeviationAlert extends DataShapeBase {

	/**
	 * Limit includes value
	 */
	limitInclusive: BOOLEAN;

	/**
	 * Limit to deviation from reference value
	 */
	limit: NUMBER;

	/**
	 * Units of distance (M, K, N)
	 */
	units: STRING;

	/**
	 * Reference value
	 */
	value: LOCATION;


}

/**
 * Tag facets
 */
 declare class TagFacets extends DataShapeBase {

	/**
	 * Count
	 */
	count: INTEGER;

	/**
	 * Vocabulary facets
	 */
	vocabularyFacets: INFOTABLE<MultilevelFacets>;


}

/**
 * Entity reference
 */
 declare class EntityReference extends DataShapeBase {

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity type
	 */
	type: STRING;


}

/**
 * Thing permission matrix for the current user
 */
 declare class UserPermissions extends DataShapeBase {

	/**
	 * Permission
	 */
	isPermitted: BOOLEAN;

	/**
	 * Feature name
	 */
	name: STRING;


}

/**
 * Log Entry
 */
 declare class LogEntry extends DataShapeBase {

	/**
	 * entity instance with the log entry
	 */
	instance: STRING;

	/**
	 * level of log entry
	 */
	level: STRING;

	/**
	 * session associated with the log entry
	 */
	session: STRING;

	/**
	 * origin of the log entry
	 */
	origin: STRING;

	/**
	 * identifier for the platform that logged the entry
	 */
	platformId: STRING;

	/**
	 * thread that generated log entry
	 */
	thread: STRING;

	/**
	 * user that generated log entry
	 */
	user: USERNAME;

	/**
	 * log message content
	 */
	content: STRING;

	/**
	 * Time of log entry
	 */
	timestamp: DATETIME;


}

/**
 * Collaboration Comment
 */
 declare class Comment extends DataShapeBase {

	/**
	 * Source of the entry
	 */
	source: STRING;

	/**
	 * Number of ratings
	 */
	ratingCount: INTEGER;

	/**
	 * Title for the entry
	 */
	title: STRING;

	/**
	 * Entry type
	 */
	type: STRING;

	/**
	 * Content for the entry
	 */
	content: STRING;

	/**
	 * Parent entry id
	 */
	parentId: STRING;

	/**
	 * Containing entry id
	 */
	entryId: STRING;

	/**
	 * List of tags
	 */
	tags: TAGS;

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry id
	 */
	id: STRING;

	/**
	 * Average rating
	 */
	ratingAverage: NUMBER;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Metadata describing the fields of a dataset
 */
 declare class AnalyticsDatasetMetadata extends DataShapeBase {

	/**
	 * Time between observations in a Temporal field
	 */
	timeSamplingInterval: INTEGER;

	/**
	 * If true, this field remains unchanged over time
	 */
	isStatic: BOOLEAN;

	/**
	 * Name of the field
	 */
	fieldName: STRING;

	/**
	 * Minimum observed value for Continuous fields
	 */
	min: NUMBER;

	/**
	 * Maximum observed value for Continuous fields
	 */
	max: NUMBER;

	/**
	 * Format of the data (STRING,DOUBLE,BOOLEAN,INTEGER)
	 */
	dataType: STRING;

	/**
	 * Behavior of the data (CONTINUOUS,CATEGORICAL,ORDINAL,BOOLEAN,TEMPORAL,ENTITY_ID)
	 */
	opType: STRING;

	/**
	 * Collection of possible values for Ordinal and Categorical fields
	 */
	values: INFOTABLE<GenericStringList>;


}

/**
 * Blog Entry List
 */
 declare class BlogEntry extends DataShapeBase {

	/**
	 * Number of comments
	 */
	count: INTEGER;

	/**
	 * Source of the entry
	 */
	source: STRING;

	/**
	 * Number of ratings
	 */
	ratingCount: INTEGER;

	/**
	 * Title for the entry
	 */
	title: STRING;

	/**
	 * Entry type
	 */
	type: STRING;

	/**
	 * Flag indicating a sticky entry
	 */
	isSticky: BOOLEAN;

	/**
	 * Content for the entry
	 */
	content: STRING;

	/**
	 * Parent entry id
	 */
	parentId: STRING;

	/**
	 * Containing entry id
	 */
	entryId: STRING;

	/**
	 * List of tags
	 */
	tags: TAGS;

	/**
	 * Time of last update
	 */
	lastUpdated: DATETIME;

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry id
	 */
	id: STRING;

	/**
	 * Average rating
	 */
	ratingAverage: NUMBER;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Edge Thing events that are bound
 */
 declare class EdgeThingEventNotification extends DataShapeBase {

	/**
	 * Edge event name
	 */
	edgeName: STRING;


}

/**
 * Entity counts
 */
 declare class EntityUsageCount extends DataShapeBase {

	/**
	 * Application Entity Count
	 */
	applicationCount: INTEGER;

	/**
	 * System Entity Count
	 */
	systemCount: INTEGER;

	/**
	 * Total Count
	 */
	count: INTEGER;

	/**
	 * Entity type name
	 */
	name: STRING;

	/**
	 * Maximum Entity Count
	 */
	maxCount: INTEGER;


}

/**
 * Information about a Endpoint Session
 */
 declare class CommunicationEndpointSession extends DataShapeBase {

	/**
	 * 
	 */
	numberConnections: NUMBER;

	/**
	 * Last date the Endpoint was used excluding pings
	 */
	lastUsedDate: DATETIME;

	/**
	 * 
	 */
	numberBoundThings: NUMBER;

	/**
	 * 
	 */
	endpointId: GUID;

	/**
	 * 
	 */
	appKeyName: STRING;

	/**
	 * 
	 */
	authenticationType: STRING;

	/**
	 * 
	 */
	userContext: USERNAME;

	/**
	 * 
	 */
	startDate: DATETIME;


}

/**
 * Data shape for representing array of boolean type
 */
 declare class BooleanArrayElement extends DataShapeBase {

	/**
	 * 
	 */
	element: BOOLEAN;


}

/**
 * AnomalyMonitor Status Event
 */
 declare class AnomalyMonitorStatusEvent extends DataShapeBase {

	/**
	 * state of the thingwatcher
	 */
	watcherStatus: STRING;

	/**
	 * Alert type
	 */
	alertType: STRING;

	/**
	 * Alert Name
	 */
	alertName: STRING;

	/**
	 * Any error or information message
	 */
	message: STRING;

	/**
	 * Thingwatcher state timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Solution Information
 */
 declare class SolutionInfo extends DataShapeBase {

	/**
	 * Publisher name of the Solution
	 */
	publishedBy: STRING;

	/**
	 * Solution published date
	 */
	publishedAt: DATETIME;

	/**
	 * Display name of Solution
	 */
	displayName: STRING;

	/**
	 * Group Id of Solution
	 */
	groupId: STRING;

	/**
	 * Other version count of this Solution
	 */
	otherVersionsCount: INTEGER;

	/**
	 * Artifactory download URL of this Solution
	 */
	downloadURL: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Solution version
	 */
	version: STRING;

	/**
	 * GAV of Dependent Solutions
	 */
	dependencies: INFOTABLE<any>;

	/**
	 * Minimum version of targeted platform
	 */
	targetPlatformMinVersion: STRING;

	/**
	 * Artifact Id of Solution
	 */
	artifactId: STRING;

	/**
	 * Solution Central URL for this Solution
	 */
	href: STRING;

	/**
	 * Solution Id on Solution Central
	 */
	solutionId: STRING;

	/**
	 * Target platform name for the Solution
	 */
	targetPlatform: STRING;

	/**
	 * Deploy status of the Solution on this instance
	 */
	deployStatus: BOOLEAN;


}

/**
 * policy rules used by a ConnectionMonitor to monitor an IConnectable
 */
 declare class ConnectionPolicy extends DataShapeBase {

	/**
	 * the number of reconnect attempts before issueing an ERROR; ignored if reconnect is FALSE
	 */
	reconnectAttempts: INTEGER;

	/**
	 * ENUM (ondemand|event|poll)
	 */
	lossDetection: STRING;

	/**
	 * set to TRUE to enable reconnect
	 */
	reconnect: BOOLEAN;

	/**
	 * data used by an IConnectable to determine if connection is alive
	 */
	heartbeat: STRING;

	/**
	 * policy name
	 */
	name: STRING;

	/**
	 * the number of seconds between reconnect attempts; ignored if reconnect is FALSE
	 */
	reconnectInterval: INTEGER;


}

/**
 * DataShape used to contain information when a user last accessed a licensed resource
 */
 declare class LicensedUserAccessDataShape extends DataShapeBase {

	/**
	 * Usage ID
	 */
	UsageID: INTEGER;

	/**
	 * Licensed feature that was accessed
	 */
	FeatureName: STRING;


}

/**
 * Wiki Pages
 */
 declare class WikiPage extends DataShapeBase {

	/**
	 * Number of comments
	 */
	count: INTEGER;

	/**
	 * Source of the entry
	 */
	source: STRING;

	/**
	 * Number of ratings
	 */
	ratingCount: INTEGER;

	/**
	 * Title for the entry
	 */
	title: STRING;

	/**
	 * Entry type
	 */
	type: STRING;

	/**
	 * Content for the entry
	 */
	content: STRING;

	/**
	 * Parent entry id
	 */
	parentId: STRING;

	/**
	 * Containing entry id
	 */
	entryId: STRING;

	/**
	 * List of tags
	 */
	tags: TAGS;

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry id
	 */
	id: STRING;

	/**
	 * Average rating
	 */
	ratingAverage: NUMBER;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Dashboard item configuration parameter
 */
 declare class DashboardItemParameter extends DataShapeBase {

	/**
	 * 
	 */
	name: STRING;

	/**
	 * 
	 */
	type: STRING;

	/**
	 * 
	 */
	value: STRING;


}

/**
 * Property name, value, time, quality, state
 */
 declare class NamedVTQ extends DataShapeBase {

	/**
	 * Property name
	 */
	name: STRING;

	/**
	 * time
	 */
	time: DATETIME;

	/**
	 * value
	 */
	value: VARIANT;

	/**
	 * quality
	 */
	quality: STRING;


}

/**
 * User status
 */
 declare class UserStatus extends DataShapeBase {

	/**
	 * Connection status
	 */
	isConnected: BOOLEAN;

	/**
	 * User name
	 */
	name: STRING;

	/**
	 * User description
	 */
	description: STRING;

	/**
	 * Last connectiontime
	 */
	lastConnection: DATETIME;


}

/**
 * Root Entity list with permissions
 */
 declare class RootEntityListWithPermissions extends DataShapeBase {

	/**
	 * Indicates if a system object or not
	 */
	isSystemObject: BOOLEAN;

	/**
	 * Current user has read permission
	 */
	read: BOOLEAN;

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Current user has update permission
	 */
	update: BOOLEAN;

	/**
	 * Home mashup
	 */
	homeMashup: MASHUPNAME;

	/**
	 * Avatar image
	 */
	avatar: IMAGELINK;

	/**
	 * Current user has delete permission
	 */
	delete: BOOLEAN;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * Thing relationship list
 */
 declare class ThingRelationship extends DataShapeBase {

	/**
	 * Relationship name
	 */
	name: STRING;

	/**
	 * From thing name
	 */
	from: STRING;

	/**
	 * Thing avatar
	 */
	avatar: IMAGELINK;

	/**
	 * Thing template
	 */
	thingTemplate: THINGTEMPLATENAME;

	/**
	 * To thing name
	 */
	to: STRING;


}

/**
 * Timer event structure
 */
 declare class TimerEvent extends DataShapeBase {

	/**
	 * Event timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Common facets
 */
 declare class CommonFacets extends DataShapeBase {

	/**
	 * Model tag facets
	 */
	modelTagFacets: INFOTABLE<MultilevelFacets>;

	/**
	 * Entity type facets
	 */
	typeFacets: INFOTABLE<NamedFacets>;

	/**
	 * Count
	 */
	count: INTEGER;

	/**
	 * Data tag facets
	 */
	dataTagFacets: INFOTABLE<MultilevelFacets>;


}

/**
 * Long range alert
 */
 declare class LongRangeAlert extends DataShapeBase {

	/**
	 * Calculation type
	 */
	calculationType: STRING;

	/**
	 * Calculation value for Min and Max from alert value
	 */
	calculationValue: NUMBER;

	/**
	 * Calculate Min and Max from alert value
	 */
	calculationShow: BOOLEAN;

	/**
	 * Maximum value
	 */
	maximum: LONG;

	/**
	 * property value
	 */
	propertyValue: NUMBER;

	/**
	 * Range includes minimum
	 */
	minimumInclusive: BOOLEAN;

	/**
	 * Range includes maximum
	 */
	maximumInclusive: BOOLEAN;

	/**
	 * Minimum value
	 */
	minimum: LONG;


}

/**
 * Localization table properties
 */
 declare class LanguageDescription extends DataShapeBase {

	/**
	 * Name of language in site language
	 */
	languageCommon: STRING;

	/**
	 * Localization table name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Icon for language
	 */
	avatar: IMAGELINK;

	/**
	 * Name of language in that language
	 */
	languageNative: STRING;


}

/**
 * Root Entity list
 */
 declare class RootEntityList extends DataShapeBase {

	/**
	 * Indicates if a system object or not
	 */
	isSystemObject: BOOLEAN;

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Home mashup
	 */
	homeMashup: MASHUPNAME;

	/**
	 * Avatar image
	 */
	avatar: IMAGELINK;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * DataShape used to pass route definitions to the Integration Runtime
 */
 declare class RouteDefinition extends DataShapeBase {

	/**
	 * The unique identifier for the route
	 */
	RouteID: STRING;

	/**
	 * The route descriptor document
	 */
	DSL: XML;


}

/**
 * Related mashup information
 */
 declare class RelatedMashup extends DataShapeBase {

	/**
	 * Mashup name
	 */
	name: MASHUPNAME;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Mashup type
	 */
	type: STRING;


}

/**
 * A field name and value pair 
 */
 declare class FieldValuePair extends DataShapeBase {

	/**
	 * The field name
	 */
	fieldName: STRING;

	/**
	 * The field value
	 */
	fieldValue: STRING;


}

/**
 * Group
 */
 declare class Group extends DataShapeBase {

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * Name and description of currently registered AnalyticsServerThings
 */
 declare class AnalyticsConnectedServers extends DataShapeBase {

	/**
	 * Name of the AnalyticsServerThing
	 */
	name: STRING;

	/**
	 * Description of the AnalyticsServerThing
	 */
	description: STRING;

	/**
	 * ThingTemplate of the AnalyticsServerThing
	 */
	thingTemplate: STRING;


}

/**
 * A set of calculated statistics about a field in a dataset
 */
 declare class FieldDistributionStatistics extends DataShapeBase {

	/**
	 * The standard error of the mean for the field's distribution (standard deviation / √count). Not to be confused with mean error
	 */
	standardErrorOfTheMean: STRING;

	/**
	 * The name of the analyzed field
	 */
	fieldName: STRING;

	/**
	 * The sum of all of the values
	 */
	sumOfAllObservations: STRING;

	/**
	 * The uncorrected sum of squares of the field's distribution (∑(value)^2)
	 */
	uncorrectedSumOfSquares: STRING;

	/**
	 * Number of records in the dataset
	 */
	count: LONG;

	/**
	 * The difference between the maximum and minimum values
	 */
	range: STRING;

	/**
	 * The coefficient of variation (aka: relative standard deviation) of all values in the field's distribution (standard deviation / mean)
	 */
	coefficientOfVariation: STRING;

	/**
	 * Kurtosis of the distribution. This is a measure of the "tailedness" or extremeness of outliers of the field's distribution. Gaussian (normal) distributions have a kurtosis of 3. Values below 3 have fewer outliers (example: uniform distribution). Values greater than 3 have larger tails, or more extreme outliers (example: laplace distribution)
	 */
	kurtosis: STRING;

	/**
	 * Measure of how far the field's distribution is spread from its mean
	 */
	variance: STRING;

	/**
	 * The average of the field's distribution
	 */
	mean: STRING;

	/**
	 * The maximum observed value of the field's distribution
	 */
	maximum: STRING;

	/**
	 * Skewness of the distribution. This is a measure of the asymmetry of the field's distribution, where 0 = perfectly balanced, < 0 = distribution tilts to the right, and > 0 = distribution tilts to the left
	 */
	skewness: STRING;

	/**
	 * The minimum observed value of the field's distribution
	 */
	minimum: STRING;

	/**
	 * Measure of the amount of variation in the field's distribution
	 */
	standardDeviation: STRING;

	/**
	 * The corrected sum of squares of the field's distribution (∑(value - mean)^2)
	 */
	correctedSumOfSquares: STRING;


}

/**
 * Stream Entries
 */
 declare class StreamEntry extends DataShapeBase {

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * Source of the entry
	 */
	source: STRING;

	/**
	 * Tags
	 */
	tags: TAGS;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Integer deviation alert
 */
 declare class IntegerDeviationAlert extends DataShapeBase {

	/**
	 * Calculation type
	 */
	calculationType: STRING;

	/**
	 * Calculation value for Limit from alert value
	 */
	calculationValue: NUMBER;

	/**
	 * Calculate Limit from alert value
	 */
	calculationShow: BOOLEAN;

	/**
	 * Limit includes value
	 */
	limitInclusive: BOOLEAN;

	/**
	 * Limit to deviation from reference value
	 */
	limit: NUMBER;

	/**
	 * Reference value
	 */
	value: NUMBER;


}

/**
 * Dashboard item definition
 */
 declare class DashboardItem extends DataShapeBase {

	/**
	 * Dashboard item columns
	 */
	columns: NUMBER;

	/**
	 * Dashboard item mashup name
	 */
	mashup: MASHUPNAME;

	/**
	 * Dashboard ID
	 */
	id: STRING;

	/**
	 * Dashboard item rows
	 */
	rows: NUMBER;

	/**
	 * Dashboard item title
	 */
	title: STRING;

	/**
	 * Dashboard item parameters
	 */
	parameters: INFOTABLE<any>;


}

/**
 * A row in the result from a distribution query
 */
 declare class DistributionQueryRow extends DataShapeBase {

	/**
	 * The fields and corresponding values that define a group
	 */
	groupByValues: INFOTABLE<FieldValuePair>;

	/**
	 * The total value of the goal field among the records in a group
	 */
	totalGoal: NUMBER;

	/**
	 * The average value of the goal field among the records in a group
	 */
	averageGoal: NUMBER;

	/**
	 * The number of records that fall into a group
	 */
	count: LONG;


}

/**
 * Network of semantic links to any system entity
 */
 declare class EntityNetwork extends DataShapeBase {

	/**
	 * Parent name
	 */
	parentName: STRING;

	/**
	 * Child entities
	 */
	children: INFOTABLE<EntityNetwork>;

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Entity type
	 */
	type: STRING;

	/**
	 * Parent type
	 */
	parentType: STRING;


}

/**
 * Service definition
 */
 declare class ServiceDefinition extends DataShapeBase {

	/**
	 * Parameter type definition
	 */
	parameterDefinitions: INFOTABLE<FieldDefinition>;

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Result type definition
	 */
	resultType: INFOTABLE<FieldDefinition>;


}

/**
 * Thing space
 */
 declare class ThingSpace extends DataShapeBase {

	/**
	 * ThingSpace name
	 */
	name: STRING;

	/**
	 * ThingSpace description
	 */
	description: STRING;


}

/**
 * Parameters passed to a job configuration
 */
 declare class AnalyticsJobConfigParameter extends DataShapeBase {

	/**
	 * The name of the parameter
	 */
	parameterName: STRING;

	/**
	 * The value of the parameter
	 */
	parameterValue: STRING;


}

/**
 * Entity facets
 */
 declare class MultilevelFacets extends DataShapeBase {

	/**
	 * Count
	 */
	count: INTEGER;

	/**
	 * Facet name
	 */
	name: STRING;

	/**
	 * Facet description
	 */
	description: STRING;

	/**
	 * Facet items
	 */
	items: INFOTABLE<NamedFacets>;


}

/**
 * Comparative list of provided goal values and scores predicted by the model
 */
 declare class AnalyticsPVAS extends DataShapeBase {

	/**
	 * Known value of the goal field
	 */
	actual: STRING;

	/**
	 * Name of the predicted goal
	 */
	goalField: STRING;

	/**
	 * Value predicted by the model
	 */
	predicted: STRING;


}

/**
 * Tunnel status information
 */
 declare class TunnelStatus extends DataShapeBase {

	/**
	 * Base URL that the tunnel will connect to using WS
	 */
	wsUrl: HYPERLINK;

	/**
	 * Base URL that the tunnel will connect to using JWS
	 */
	jwsUrl: HYPERLINK;

	/**
	 * Tunneling enabled
	 */
	enabled: BOOLEAN;

	/**
	 * Tunneling subsystem status
	 */
	status: BOOLEAN;


}

/**
 * Number match alert
 */
 declare class NumberMatchAlert extends DataShapeBase {

	/**
	 * value
	 */
	value: NUMBER;


}

/**
 * Property list
 */
 declare class PropertyList extends DataShapeBase {

	/**
	 * Property Name
	 */
	propertyName: STRING;


}

/**
 * DataShape used to pass route identifiers to the Integration Runtime
 */
 declare class RouteIDList extends DataShapeBase {

	/**
	 * The unique identifier for the route
	 */
	RouteID: STRING;


}

/**
 * A list of fields that can be modified for optimization
 */
 declare class AnalyticsOptimizationLever extends DataShapeBase {

	/**
	 * Acceptable values (ORDINAL and CATEGORICAL) to restrict optimizations
	 */
	allowedValues: INFOTABLE<GenericStringList>;

	/**
	 * Name of the field
	 */
	fieldName: STRING;

	/**
	 * Adjustable minimum value (CONTINUOUS fields) to restrict optimizations
	 */
	min: NUMBER;

	/**
	 * Adjustable maximum value (CONTINUOUS fields) to restrict optimizations
	 */
	max: NUMBER;


}

/**
 * Event structure
 */
 declare class Event extends DataShapeBase {

	/**
	 * Event data
	 */
	eventData: INFOTABLE<any>;

	/**
	 * Alert name
	 */
	alertName: STRING;

	/**
	 * Event timestamp
	 */
	eventTime: DATETIME;

	/**
	 * Event source property
	 */
	sourceProperty: STRING;

	/**
	 * Event name
	 */
	eventName: STRING;

	/**
	 * Event source
	 */
	source: STRING;


}

/**
 * Integer range alert
 */
 declare class IntegerRangeAlert extends DataShapeBase {

	/**
	 * Calculation type
	 */
	calculationType: STRING;

	/**
	 * Calculation value for Min and Max from alert value
	 */
	calculationValue: NUMBER;

	/**
	 * Calculate Limit from alert value
	 */
	calculationShow: BOOLEAN;

	/**
	 * Maximum value
	 */
	maximum: INTEGER;

	/**
	 * property value
	 */
	propertyValue: NUMBER;

	/**
	 * Range includes minimum
	 */
	minimumInclusive: BOOLEAN;

	/**
	 * Range includes maximum
	 */
	maximumInclusive: BOOLEAN;

	/**
	 * Minimum value
	 */
	minimum: INTEGER;


}

/**
 * Property alert summary
 */
 declare class PropertyAlertSummary extends DataShapeBase {

	/**
	 * Alert summary
	 */
	summary: INFOTABLE<PropertyAlertSummaryDetail>;

	/**
	 * Property name
	 */
	name: STRING;

	/**
	 * Property description
	 */
	description: STRING;


}

/**
 * Number deviation alert
 */
 declare class NumberDeviationAlert extends DataShapeBase {

	/**
	 * Calculation type
	 */
	calculationType: STRING;

	/**
	 * Calculation value for Limit from alert value
	 */
	calculationValue: NUMBER;

	/**
	 * Calculate Limit from alert value
	 */
	calculationShow: BOOLEAN;

	/**
	 * Limit includes value
	 */
	limitInclusive: BOOLEAN;

	/**
	 * Limit to deviation from reference value
	 */
	limit: NUMBER;

	/**
	 * Reference value
	 */
	value: NUMBER;


}

/**
 * Vocabulary
 */
 declare class Vocabulary extends DataShapeBase {

	/**
	 * Flag if vocabulary can have new terms added dynamically
	 */
	isDynamic: BOOLEAN;

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * Definition of an edge thing registered with a Microserver and its connection information
 */
 declare class TunnelEndpoint extends DataShapeBase {

	/**
	 * The number of connections required to initilaize the tunnel
	 */
	numConnects: NUMBER;

	/**
	 * Port that the tunnel will connect to
	 */
	port: NUMBER;

	/**
	 * Protocol used by the tunnel
	 */
	proto: STRING;

	/**
	 * Host that the tunnel will connect to
	 */
	host: STRING;

	/**
	 * Name of the tunnel registered with the edge thing
	 */
	name: STRING;

	/**
	 * Description of the tunnel
	 */
	description: STRING;

	/**
	 * Location of the client application that will use the tunnel
	 */
	appUri: STRING;


}

/**
 * Dashboard definition
 */
 declare class Dashboard extends DataShapeBase {

	/**
	 * Current user can edit this dashboard
	 */
	isEditable: BOOLEAN;

	/**
	 * Current user is owner of this dashboard
	 */
	isOwner: BOOLEAN;

	/**
	 * Dashboard Groups
	 */
	dashboardGroups: INFOTABLE<DashboardGroup>;

	/**
	 * Dashboard ID
	 */
	id: STRING;

	/**
	 * Dashboard title
	 */
	title: STRING;


}

/**
 * Search results
 */
 declare class SearchResults extends DataShapeBase {

	/**
	 * Collaboration results
	 */
	collaborationResults: INFOTABLE<CollaborationSearchResult>;

	/**
	 * Common results
	 */
	commonResults: INFOTABLE<EntitySearchResult>;

	/**
	 * People facets
	 */
	peopleFacets: INFOTABLE<PeopleFacets>;

	/**
	 * Thing results
	 */
	thingResults: INFOTABLE<EntitySearchResult>;

	/**
	 * Common facets
	 */
	commonFacets: INFOTABLE<CommonFacets>;

	/**
	 * People results
	 */
	peopleResults: INFOTABLE<EntitySearchResult>;

	/**
	 * Filters for this query
	 */
	filters: JSON;

	/**
	 * Mashup results
	 */
	mashupResults: INFOTABLE<EntitySearchResult>;

	/**
	 * Data results
	 */
	dataResults: INFOTABLE<EntitySearchResult>;

	/**
	 * Tag results
	 */
	tagResults: INFOTABLE<EntitySearchResult>;

	/**
	 * Thing facets
	 */
	thingFacets: INFOTABLE<ThingFacets>;

	/**
	 * Mashup facets
	 */
	mashupFacets: INFOTABLE<MashupFacets>;

	/**
	 * Collaboration facets
	 */
	collaborationFacets: INFOTABLE<CollaborationFacets>;

	/**
	 * Tag facets
	 */
	tagFacets: INFOTABLE<TagFacets>;

	/**
	 * Data facets
	 */
	dataFacets: INFOTABLE<DataFacets>;


}

/**
 * Group Provisioning Exclusion List
 */
 declare class GroupProvisioningExclusionList extends DataShapeBase {

	/**
	 * Thingworx Group Name
	 */
	thingworxGroupName: GROUPNAME;


}

/**
 * A single bin in an FFT result
 */
 declare class AnalyticsFourierTransformFrequencyBin extends DataShapeBase {

	/**
	 * The amplitude of the signal in this frequency bin
	 */
	amplitude: NUMBER;

	/**
	 * The angle in degrees (-180 to 180) indicating how much of the wave cycle has elapsed relative to its origin
	 */
	phaseAngle: NUMBER;

	/**
	 * The real bin frequency in Hertz
	 */
	realFrequency: NUMBER;

	/**
	 * The normalized bin frequency from 0 to 1
	 */
	normalizedFrequency: NUMBER;


}

/**
 * Alert status details
 */
 declare class AlertStatus extends DataShapeBase {

	/**
	 * Alert Name
	 */
	alert: STRING;

	/**
	 * Property Name
	 */
	property: STRING;

	/**
	 * Alert Status
	 */
	status: STRING;


}

/**
 * Information related to a file transfer
 */
 declare class FileTransferJob extends DataShapeBase {

	/**
	 * Metadata associated with this transfer
	 */
	metadata: JSON;

	/**
	 * MD5 checksum of the target file
	 */
	targetChecksum: STRING;

	/**
	 * Current status code of this transfer
	 */
	code: INTEGER;

	/**
	 * Is this transfer executing asynchronously
	 */
	isAsync: BOOLEAN;

	/**
	 * Max file size allowed by the participants in this transfer
	 */
	maxSize: NUMBER;

	/**
	 * Source file name
	 */
	sourceFile: STRING;

	/**
	 * The position of the first byte transferred
	 */
	startPosition: NUMBER;

	/**
	 * Duration of the transfer in milliseconds
	 */
	duration: INTEGER;

	/**
	 * Does this transfer allow for restarts
	 */
	isRestartEnabled: BOOLEAN;

	/**
	 * Id of a reserved file transfer slot for queueable transfers
	 */
	reservationId: STRING;

	/**
	 * Target file name
	 */
	targetFile: STRING;

	/**
	 * Time the transfer was initiated
	 */
	startTime: DATETIME;

	/**
	 * Current state of this transfer
	 */
	state: STRING;

	/**
	 * Path to the source file
	 */
	sourcePath: STRING;

	/**
	 * The number blocks in the transfer
	 */
	blockCount: INTEGER;

	/**
	 * Repository containing the source file
	 */
	sourceRepository: STRING;

	/**
	 * Number of bytes transferred
	 */
	bytesTransferred: NUMBER;

	/**
	 * Path to the target file
	 */
	targetPath: STRING;

	/**
	 * MD5 checksum of the source file
	 */
	sourceChecksum: STRING;

	/**
	 * Message about this transfer's current state
	 */
	message: STRING;

	/**
	 * The transfer Id
	 */
	transferId: STRING;

	/**
	 * File is transferred in blocks of this size
	 */
	blockSize: INTEGER;

	/**
	 * First time that this transfer was enqueued in offline queue
	 */
	enqueueTime: DATETIME;

	/**
	 * Size of file being transferred
	 */
	size: NUMBER;

	/**
	 * Indicates whether or not this transfer can be enqueued in the offline queue if the source or target repository is offline
	 */
	isQueueable: BOOLEAN;

	/**
	 * Time the transfer was completed
	 */
	endTime: DATETIME;

	/**
	 * Repository being transferred to
	 */
	targetRepository: STRING;

	/**
	 * Number of times this transfer was enqueued in the offline queue
	 */
	enqueueCount: NUMBER;

	/**
	 * User that initiated the transfer
	 */
	user: STRING;

	/**
	 * Has this transfer completed
	 */
	isComplete: BOOLEAN;


}

/**
 * Permissions
 */
 declare class Permissions extends DataShapeBase {

	/**
	 * Is Permitted Access
	 */
	isPermitted: BOOLEAN;

	/**
	 * Principal Name
	 */
	name: STRING;

	/**
	 * Principal Type
	 */
	type: STRING;

	/**
	 * Permission Name
	 */
	permissionName: STRING;


}

/**
 * EditedEntities
 */
 declare class EditedEntities extends DataShapeBase {

	/**
	 * Person editing it
	 */
	editUserName: USERNAME;

	/**
	 * Entity name (or id)
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Last edit date
	 */
	editTime: DATETIME;

	/**
	 * Entity type
	 */
	type: STRING;


}

/**
 * Data shape for representing array of integer type
 */
 declare class IntegerArrayElement extends DataShapeBase {

	/**
	 * 
	 */
	element: INTEGER;


}

/**
 * DataShape used for returning a list of notification definitions
 */
 declare class NotificationDefinitionNames extends DataShapeBase {

	/**
	 * The notification definition name
	 */
	definition: NOTIFICATIONDEFINITIONNAME;


}

/**
 * DateTime compare alert
 */
 declare class DateTimeCompareAlert extends DataShapeBase {

	/**
	 * Limit includes value
	 */
	limitInclusive: BOOLEAN;

	/**
	 * Limit to compare
	 */
	limit: DATETIME;


}

/**
 * DataShape used to populate list of licensed App names
 */
 declare class LicenseAppNamesDataShape extends DataShapeBase {

	/**
	 * 
	 */
	AppName: STRING;


}

/**
 * The result of a Fourier transform
 */
 declare class AnalyticsFourierTransformResult extends DataShapeBase {

	/**
	 * The frequency bins resulting from the Fourier transform
	 */
	bins: INFOTABLE<AnalyticsFourierTransformFrequencyBin>;

	/**
	 * The sampling frequency of the input signal (Hertz)
	 */
	samplingFrequency: NUMBER;


}

/**
 * Information on the job's configuration and its current status
 */
 declare class AnalyticsJobInfo extends DataShapeBase {

	/**
	 * Name of this job
	 */
	jobName: STRING;

	/**
	 * URI to the job result for reference, if applicable (Data, Training, Clusters)
	 */
	referenceUri: STRING;

	/**
	 * Date and time the job was completed
	 */
	endDateTime: STRING;

	/**
	 * Extra information for reporting issues about the job
	 */
	message: STRING;

	/**
	 * Queryable tags associated with this job
	 */
	tags: INFOTABLE<GenericStringList>;

	/**
	 * Length of time the job was in the queue
	 */
	queuedDuration: STRING;

	/**
	 * Job types with corresponding job IDs
	 */
	jobTypesWithId: INFOTABLE<FieldValuePair>;

	/**
	 * Date and time the job was started
	 */
	startDateTime: STRING;

	/**
	 * Date and time the job was submitted
	 */
	queuedStartDateTime: STRING;

	/**
	 * Additional job-specific parameters
	 */
	additionalParameters: INFOTABLE<AnalyticsJobConfigParameter>;

	/**
	 * Description of this job
	 */
	jobDescription: STRING;

	/**
	 * Length of time the job took to run
	 */
	runTime: STRING;

	/**
	 * Current state of the job (COMPLETED,RUNNING,FAILED,EXPIRED,QUEUED,UNKNOWN,TERMINATED)
	 */
	state: STRING;

	/**
	 * Reference to the dataset used for this job
	 */
	datasetRef: INFOTABLE<AnalyticsDatasetRef>;


}

/**
 * Collaboration or data entry event content
 */
 declare class EntryCommentEvent extends DataShapeBase {

	/**
	 * Comment id
	 */
	commentId: STRING;

	/**
	 * Parent comment id
	 */
	parentCommentId: STRING;

	/**
	 * Entry id
	 */
	id: STRING;

	/**
	 * Entry Type
	 */
	type: STRING;


}

/**
 * Spotlight search results
 */
 declare class SpotlightSearchWithPersistent extends DataShapeBase {

	/**
	 * Current user has read permission
	 */
	read: BOOLEAN;

	/**
	 * Last modified date
	 */
	lastModifiedDate: DATETIME;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Current user has update permission
	 */
	update: BOOLEAN;

	/**
	 * Entity type
	 */
	type: STRING;

	/**
	 * Current user has delete permission
	 */
	delete: BOOLEAN;

	/**
	 * Parent type
	 */
	parentType: STRING;

	/**
	 * Indicates if the object is from an extension
	 */
	isExtension: BOOLEAN;

	/**
	 * Indicates if a system object or not
	 */
	isSystemObject: BOOLEAN;

	/**
	 * Parent name
	 */
	parentName: STRING;

	/**
	 * Indicates if is editable or not
	 */
	isEditable: BOOLEAN;

	/**
	 * Indicates if the object is editable as an extension
	 */
	isEditableExtensionObject: BOOLEAN;

	/**
	 * Indicates if the object is persisted or not
	 */
	isPersistent: BOOLEAN;

	/**
	 * Entity name (or id)
	 */
	name: STRING;

	/**
	 * Indicates if the object is editable as a system object
	 */
	isEditableSystemObject: BOOLEAN;

	/**
	 * Entity id
	 */
	id: STRING;


}

/**
 * Wiki Page List
 */
 declare class WikiPageList extends DataShapeBase {

	/**
	 * Page id
	 */
	id: STRING;

	/**
	 * Wiki Page Title
	 */
	title: STRING;

	/**
	 * Parent wiki page id
	 */
	parentId: STRING;


}

/**
 * Options used in user CRUD operations
 */
 declare class UserOptions extends DataShapeBase {

	/**
	 * The password for the user
	 */
	password: PASSWORD;

	/**
	 * The runtime permissions for the user
	 */
	runTimePermissions: INFOTABLE<RunTimePermissions>;

	/**
	 * The visibility permissions for the user
	 */
	visibilityPermissions: INFOTABLE<Permissions>;

	/**
	 * The design time permissions for the user
	 */
	designTimePermissions: INFOTABLE<DesignTimePermissions>;

	/**
	 * Description of the user
	 */
	description: STRING;

	/**
	 * Groups that user belong to
	 */
	groups: INFOTABLE<Group>;

	/**
	 * Primary language
	 */
	language: STRING;

	/**
	 * The name of the Mobile Mashup for the user
	 */
	mobileMashupName: MASHUPNAME;

	/**
	 * The name of the home mashup for the user
	 */
	homeMashupName: MASHUPNAME;

	/**
	 * The name of user to create
	 */
	userName: USERNAME;

	/**
	 * Reason to delete the user
	 */
	deleteReason: STRING;

	/**
	 * Collection of tags applied to the user
	 */
	tags: TAGS;


}

/**
 * Parameters specific to anomaly detection training requests.
 */
 declare class AnalyticsAnomalyDetectionParams extends DataShapeBase {

	/**
	 * The number of data points that make up a single cycle in a sinusoidal wave.
	 */
	numberOfDataPointsPerCycle: INTEGER;

	/**
	 * The number of data points that are used for training the anomaly detection model.
	 */
	numberOfDataPointsForTraining: INTEGER;


}

/**
 * Application Key Expiration Information
 */
 declare class ApplicationKeyExpirationInfo extends DataShapeBase {

	/**
	 * ApplicationKey expired
	 */
	expired: BOOLEAN;

	/**
	 * ApplicationKey name
	 */
	name: STRING;

	/**
	 * ApplicationKey description
	 */
	description: STRING;

	/**
	 * ApplicationKey key
	 */
	key: STRING;

	/**
	 * ApplicationKey expiration date
	 */
	expirationDate: DATETIME;


}

/**
 * Value, time, quality, state
 */
 declare class NamedVTQL extends DataShapeBase {

	/**
	 * Property name
	 */
	name: STRING;

	/**
	 * location
	 */
	location: LOCATION;

	/**
	 * time
	 */
	time: DATETIME;

	/**
	 * value
	 */
	value: VARIANT;

	/**
	 * quality
	 */
	quality: STRING;


}

/**
 * Map of all things and their properties that have established local binding to a thing
 */
 declare class IncomingLocalPropertyBinding extends DataShapeBase {

	/**
	 * source property name
	 */
	propertyName: STRING;

	/**
	 * Thing name of incoming property binding
	 */
	incomingThingName: STRING;

	/**
	 * name of incoming property binding
	 */
	incomingPropertyName: STRING;


}

/**
 * Database command result - number of modified rows
 */
 declare class DatabaseCommandResults extends DataShapeBase {

	/**
	 * Count of modified rows
	 */
	modifiedRows: NUMBER;


}

/**
 * DateTime match alert
 */
 declare class DateTimeMatchAlert extends DataShapeBase {

	/**
	 * value
	 */
	value: DATETIME;


}

/**
 * List of bound items for an Industrial Gateway
 */
 declare class IndustrialBoundItems extends DataShapeBase {

	/**
	 * 
	 */
	industrialDataType: STRING;

	/**
	 * 
	 */
	tagAddress: STRING;

	/**
	 * 
	 */
	propertyName: STRING;

	/**
	 * 
	 */
	scanRate: INTEGER;

	/**
	 * 
	 */
	name: STRING;

	/**
	 * 
	 */
	thingName: STRING;

	/**
	 * 
	 */
	source: STRING;

	/**
	 * 
	 */
	baseType: STRING;

	/**
	 * 
	 */
	quality: STRING;


}

/**
 * User configuration data
 */
 declare class UserConfiguration extends DataShapeBase {

	/**
	 * Primary language
	 */
	language: STRING;


}

/**
 * Machine learning techniques and configurations
 */
 declare class AnalyticsTrainingLearner extends DataShapeBase {

	/**
	 * The maximum tree depth. Allowed values: 2+ (DECISION_TREE, RANDOM_FOREST, and GRADIENT_BOOST only)
	 */
	maxDepth: INTEGER;

	/**
	 * Machine learning algorithm (NEURAL_NET, LINEAR_REGRESSION, LOGISTIC_REGRESSION, DECISION_TREE, RANDOM_FOREST, GRADIENT_BOOST, and SVM)
	 */
	learningTechnique: STRING;

	/**
	 * Limit learner to use a specified number of fields (affects runtime)
	 */
	maximumAllowedFields: INTEGER;

	/**
	 * Width of each hidden layer expressed as a percentage of the number of inputs to the neural net. Allowed values are between 0 (exclusive) and 1 (inclusive). (NEURAL_NET)
	 */
	hiddenUnitPercentage: NUMBER;

	/**
	 * The number of layers. Allowed values: 2 - 4 (NEURAL_NET)
	 */
	layerCount: INTEGER;

	/**
	 * The number of trees. Allowed values: 2+ (RANDOM_FOREST, GRADIENT_BOOST)
	 */
	treeCount: INTEGER;

	/**
	 * Should identical columns be consolidated and columns with only one value be removed? (DECISION_TREE)
	 */
	removeDuplicatesAndUniformColumns: BOOLEAN;


}

/**
 * Entity Difference
 */
 declare class EntityDifference extends DataShapeBase {

	/**
	 * Entity type
	 */
	entityType: STRING;

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * The actual difference
	 */
	difference: INFOTABLE<Difference>;


}

/**
 * Name/value of performance metrics
 */
 declare class ThingworxMetric extends DataShapeBase {

	/**
	 * name
	 */
	name: STRING;

	/**
	 * description
	 */
	description: STRING;

	/**
	 * value
	 */
	value: NUMBER;


}

/**
 * Thing package definition
 */
 declare class ThingPackage extends DataShapeBase {

	/**
	 * Supports service handlers for this package
	 */
	handlers: INFOTABLE<any>;

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Class name of the thing
	 */
	className: STRING;

	/**
	 * Is creatable
	 */
	isCreatable: BOOLEAN;

	/**
	 * Dependencies for the thing
	 */
	dependencies: STRING;

	/**
	 * Tags
	 */
	tags: TAGS;


}

/**
 * Navigation menu item
 */
 declare class MenuItem extends DataShapeBase {

	/**
	 * Link destination
	 */
	linkDestination: STRING;

	/**
	 * Is a default menu item
	 */
	isDefault: BOOLEAN;

	/**
	 * Optional image URL
	 */
	imageURL: IMAGELINK;

	/**
	 * Link target (Popup, Mashup, New)
	 */
	linkTarget: STRING;

	/**
	 * Menu item description for tooltip
	 */
	description: STRING;

	/**
	 * Link type (Mashup or Hyperlink)
	 */
	linkType: STRING;

	/**
	 * Menu item title
	 */
	title: STRING;

	/**
	 * Groups associated with this menu
	 */
	groupReferences: INFOTABLE<EntityList>;


}

/**
 * Basic Statistics on Platform by DataType
 */
 declare class SystemStatisticsByDataType extends DataShapeBase {

	/**
	 * ThingWorx Software Schema Version
	 */
	thingworxSchemaVersion: STRING;

	/**
	 * Size of Event Queue
	 */
	eventQueueSize: NUMBER;

	/**
	 * ThingWorx Software Version
	 */
	thingworxSoftwareVersion: STRING;

	/**
	 * Size of ValueStream Queue
	 */
	valueStreamQueueSize: NUMBER;

	/**
	 * Date Time that the system was started
	 */
	systemStartTime: DATETIME;

	/**
	 * Memory in use by Application Server
	 */
	memoryInUse: NUMBER;

	/**
	 * Number of named users in the ThingWorx Model
	 */
	namedUserCount: NUMBER;

	/**
	 * Run hours since last restart
	 */
	systemRunTime: STRING;

	/**
	 * Size of Stream Queue
	 */
	streamQueueSize: NUMBER;

	/**
	 * Total Memory allocated to Application Server
	 */
	totalMemoryAllocated: NUMBER;


}

/**
 * Data shape for representing property write counts for each thing
 */
 declare class ThingPropertyWriteCounts extends DataShapeBase {

	/**
	 * property write count for thing
	 */
	thingPropertyWriteCount: LONG;

	/**
	 * thing name
	 */
	thingName: STRING;


}

/**
 * DateTime deviation alert
 */
 declare class DateTimeDeviationAlert extends DataShapeBase {

	/**
	 * Limit includes value
	 */
	limitInclusive: BOOLEAN;

	/**
	 * Limit to deviation from reference value
	 */
	limit: NUMBER;

	/**
	 * Units of time (S, M, H, D, N, Y)
	 */
	units: STRING;

	/**
	 * Reference value
	 */
	value: DATETIME;


}

/**
 * Localization token
 */
 declare class LocalizationToken extends DataShapeBase {

	/**
	 * Token Name
	 */
	name: STRING;

	/**
	 * Token Value
	 */
	value: STRING;


}

/**
 * Data change event content
 */
 declare class DataChangeEvent extends DataShapeBase {

	/**
	 * New value, time, quality object
	 */
	newValue: INFOTABLE<VTQ>;

	/**
	 * Previous value, time, quality object
	 */
	oldValue: INFOTABLE<VTQ>;


}

/**
 * Parameters for upsampling and downsampling a boolean goal
 */
 declare class AnalyticsSamplingParams extends DataShapeBase {

	/**
	 * The values of the boolean goal to sample (TRUE, FALSE)
	 */
	valueToSample: BOOLEAN;

	/**
	 * The type of sampling (NONE, UPSAMPLE, DOWNSAMPLE)
	 */
	samplingStrategy: STRING;

	/**
	 * The factor to sample by. (0,1) is downsampling, (1,inf] is upsampling.
	 */
	samplingFactor: NUMBER;


}

/**
 * Application Key Expiration Information Collection
 */
 declare class ApplicationKeyExpirationInfoCollection extends DataShapeBase {

	/**
	 * ApplicationKey expiration info
	 */
	expirationInfo: INFOTABLE<any>;

	/**
	 * User name
	 */
	userName: STRING;


}

/**
 * Any data change event content
 */
 declare class AnyDataChangeEvent extends DataShapeBase {

	/**
	 * New value, time, quality object
	 */
	newValue: INFOTABLE<VTQ>;

	/**
	 * Property name
	 */
	name: STRING;

	/**
	 * Previous value, time, quality object
	 */
	oldValue: INFOTABLE<VTQ>;


}

/**
 * Presence changed event content
 */
 declare class PresenceChangeEvent extends DataShapeBase {

	/**
	 * New presence status
	 */
	status: STRING;


}

/**
 * Information about an active thread pool
 */
 declare class ThreadPoolStats extends DataShapeBase {

	/**
	 * Number of threads actively processing tasks
	 */
	activeThreads: INTEGER;

	/**
	 * Number of queued tasks
	 */
	queueSize: INTEGER;

	/**
	 * Most number of threads ever present in pool
	 */
	largestPoolSize: INTEGER;

	/**
	 * Total number of tasks submited to pool
	 */
	submitedTaskCount: NUMBER;

	/**
	 * Core number of threads in the pool
	 */
	corePoolSize: INTEGER;

	/**
	 * Total number of tasks that completed execution
	 */
	completedTaskCount: NUMBER;

	/**
	 * Number of threads currently in pool
	 */
	curentPoolSize: INTEGER;

	/**
	 * Max threads allowed in pool
	 */
	maxPoolSize: INTEGER;


}

/**
 * Extension report data shape
 */
 declare class ExtensionReportDataShape extends DataShapeBase {

	/**
	 * Extension package to describe details about the report
	 */
	extensionPackage: INFOTABLE<any>;

	/**
	 * Message from the extension import exception
	 */
	extensionException: STRING;

	/**
	 * Indicates a success or failure
	 */
	extensionReportStatus: INTEGER;

	/**
	 * Generic message field
	 */
	reportMessage: STRING;

	/**
	 * Extension package's dependencies
	 */
	extensionDependencies: INFOTABLE<any>;


}

/**
 * A five number summary (min, lowerQuartile, median, upperQuartile, max
 */
 declare class AnalyticsFiveNumberSummaryResult extends DataShapeBase {

	/**
	 * The minimum value in a set of numbers
	 */
	min: NUMBER;

	/**
	 * The upper quartile (75th percentile) value in a set of numbers
	 */
	upperQuartile: NUMBER;

	/**
	 * The median (50th percentile) value in a set of numbers
	 */
	median: NUMBER;

	/**
	 * The maximum value in a set of numbers
	 */
	max: NUMBER;

	/**
	 * The lower quartile (25th percentile) value in a set of numbers
	 */
	lowerQuartile: NUMBER;


}

/**
 * Group Provisioning Default Settings
 */
 declare class GroupProvisioningDefaultSettings extends DataShapeBase {

	/**
	 * Group Provisioning Default Project Name
	 */
	groupDefaultProjectName: PROJECTNAME;

	/**
	 * Group Provisioning Default Tags
	 */
	groupDefaultTags: TAGS;

	/**
	 * Group Provisioning Default Description
	 */
	groupDefaultDescription: STRING;


}

/**
 * The generated profiles from a profiles job
 */
 declare class AnalyticsProfilingResult extends DataShapeBase {

	/**
	 * Total number of records in the dataset
	 */
	totalPopulationCount: LONG;

	/**
	 * The dataset is evaluated for profiles that affect this field
	 */
	goalName: STRING;

	/**
	 * List of profiles and their conditions
	 */
	conditions: INFOTABLE<AnalyticsProfileCondition>;


}

/**
 * Data Shape Definition
 */
 declare class ObjectAttribute extends DataShapeBase {

	/**
	 * Data type of an attribute
	 */
	dataType: STRING;

	/**
	 * Key of an attribute
	 */
	id: STRING;

	/**
	 * Localized label of an attribute
	 */
	label: STRING;


}

/**
 * Subscription listing
 */
 declare class Subscription extends DataShapeBase {

	/**
	 * Service Handler
	 */
	handler: STRING;

	/**
	 * Source property
	 */
	sourceProperty: STRING;

	/**
	 * Event name
	 */
	eventName: STRING;

	/**
	 * Source Thing
	 */
	source: STRING;

	/**
	 * Enable/disable indicator
	 */
	enabled: BOOLEAN;


}

/**
 * File information with Links
 */
 declare class FileSystemFileWithLinks extends DataShapeBase {

	/**
	 * Full path
	 */
	path: STRING;

	/**
	 * File size
	 */
	size: NUMBER;

	/**
	 * Download link to save file on client
	 */
	downloadLink: HYPERLINK;

	/**
	 * Date last modified
	 */
	lastModifiedDate: DATETIME;

	/**
	 * Directory name
	 */
	name: STRING;


}

/**
 * The metrics for a specific bin of a continuous goal
 */
 declare class AnalyticsValidationBinError extends DataShapeBase {

	/**
	 * Minimum bin value
	 */
	maxBinRange: STRING;

	/**
	 * Maximum bin value
	 */
	minBinRange: STRING;

	/**
	 * Total number of records that fall into this bin
	 */
	recordCount: INTEGER;

	/**
	 * Root Mean Squared Error is the standard deviation of the differences between actual and predicted scores
	 */
	rmse: STRING;

	/**
	 * RMSE with scores normalized between 0 and 1
	 */
	rmseNormalized: STRING;

	/**
	 * Linear correlation between actual and predicted scores (-1 to 1, where 0 = no correlation and -1 or 1 = high correlation)
	 */
	pearsonCorrelation: STRING;


}

/**
 * Security event content
 */
 declare class SecurityEvent extends DataShapeBase {

	/**
	 * Message
	 */
	message: STRING;

	/**
	 * User
	 */
	user: USERNAME;


}

/**
 * Number value stream
 */
 declare class NumberValueStream extends DataShapeBase {

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * value
	 */
	value: NUMBER;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * DateTime range alert
 */
 declare class DateTimeRangeAlert extends DataShapeBase {

	/**
	 * Maximum value
	 */
	maximum: DATETIME;

	/**
	 * Range includes minimum
	 */
	minimumInclusive: BOOLEAN;

	/**
	 * Range includes maximum
	 */
	maximumInclusive: BOOLEAN;

	/**
	 * Minimum value
	 */
	minimum: DATETIME;


}

/**
 * DataShape used for Vec4 BaseTypes.
 */
 declare class Vec4DataShape extends DataShapeBase {

	/**
	 * 
	 */
	w: NUMBER;

	/**
	 * 
	 */
	x: NUMBER;

	/**
	 * 
	 */
	y: NUMBER;

	/**
	 * 
	 */
	z: NUMBER;


}

/**
 * A value at a given moment in time
 */
 declare class AnalyticsTimedValue extends DataShapeBase {

	/**
	 * The value at the corresponding timestamp
	 */
	value: NUMBER;

	/**
	 * The timestamp represented as milliseconds from epoch
	 */
	timestamp: LONG;


}

/**
 * Extension Package
 */
 declare class ExtensionPackage extends DataShapeBase {

	/**
	 * vendor who created extension package
	 */
	vendor: STRING;

	/**
	 * extension package name
	 */
	name: STRING;

	/**
	 * extension package description
	 */
	description: STRING;

	/**
	 * minimum version of ThingWorx this extension package can be used with
	 */
	minimumThingWorxVersion: STRING;

	/**
	 * version of extension package
	 */
	packageVersion: STRING;

	/**
	 * value for vendor to use for their own build purposes
	 */
	buildNumber: STRING;


}

/**
 * Alert history
 */
 declare class AlertHistory extends DataShapeBase {

	/**
	 * Alert type
	 */
	alertType: STRING;

	/**
	 * Alert name
	 */
	name: STRING;

	/**
	 * Alert source property
	 */
	sourceProperty: STRING;

	/**
	 * Alert description
	 */
	description: STRING;

	/**
	 * Alert event name
	 */
	eventName: STRING;

	/**
	 * Alert message
	 */
	message: STRING;

	/**
	 * Alert priority
	 */
	priority: INTEGER;


}

/**
 * Number anomaly alert
 */
 declare class NumberAnomalyAlert extends DataShapeBase {

	/**
	 * Rate of Anomaly Detection (ms)
	 */
	anomalyDetectionRate: LONG;

	/**
	 * Rate of Inbound Sampling (ms)
	 */
	inboundSamplingRate: INTEGER;

	/**
	 * Self Train
	 */
	selfTrain: BOOLEAN;

	/**
	 * Time Allowed for Training (ms)
	 */
	trainingTime: INTEGER;

	/**
	 * Calibrate using device data
	 */
	calibrateWithDeviceData: BOOLEAN;

	/**
	 * Unique Identifier for the PMML Model
	 */
	modelID: STRING;

	/**
	 * Certainty Percentage
	 */
	certainty: NUMBER;

	/**
	 * Secondary Properties
	 */
	secondaryProperties: STRING;


}

/**
 * DataShape used for license status
 */
 declare class LicenseStatusShape extends DataShapeBase {

	/**
	 * 
	 */
	evaluation: BOOLEAN;

	/**
	 * 
	 */
	expiration: NUMBER;


}

/**
 * AnomalyMonitor Status Event
 */
 declare class AnyAnomalyMonitorStatusEvent extends DataShapeBase {

	/**
	 * state of the thingwatcher
	 */
	watcherStatus: STRING;

	/**
	 * Alert type
	 */
	alertType: STRING;

	/**
	 * Alert Name
	 */
	alertName: STRING;

	/**
	 * Alert source property
	 */
	propertyName: STRING;

	/**
	 * Any error or information message
	 */
	message: STRING;

	/**
	 * Thingwatcher state timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Generic data shape to hold a list of strings
 */
 declare class GenericStringList extends DataShapeBase {

	/**
	 * Item
	 */
	item: STRING;


}

/**
 * Connector status for monitoring connectors
 */
 declare class ConnectorStatus extends DataShapeBase {

	/**
	 * Connector connection status
	 */
	Status: STRING;

	/**
	 * Connector thing template name
	 */
	ConnectorTemplate: STRING;

	/**
	 * Connection validation message
	 */
	Message: STRING;


}

/**
 * Paginated list of job statuses
 */
 declare class AnalyticsJobStatusPage extends DataShapeBase {

	/**
	 * URI to the next page
	 */
	next: STRING;

	/**
	 * Count of all records
	 */
	total: LONG;

	/**
	 * URI to the previous page
	 */
	previous: STRING;

	/**
	 * List of job statuses
	 */
	values: INFOTABLE<AnalyticsJobStatus>;


}

/**
 * Locked users
 */
 declare class LockedUsers extends DataShapeBase {

	/**
	 * User name
	 */
	name: STRING;

	/**
	 * Locked status
	 */
	locked: BOOLEAN;

	/**
	 * Time user locked
	 */
	lockedTime: DATETIME;


}

/**
 * Run Time Permissions
 */
 declare class RunTimePermissions extends DataShapeBase {

	/**
	 * Is Permitted Access
	 */
	isPermitted: BOOLEAN;

	/**
	 * Principal Name
	 */
	name: STRING;

	/**
	 * Resource Name
	 */
	resourceName: STRING;

	/**
	 * Principal Type
	 */
	type: STRING;

	/**
	 * Permission Name
	 */
	permissionName: STRING;


}

/**
 * Infotable compare alert
 */
 declare class InfoTableCompareAlert extends DataShapeBase {

	/**
	 * Limit includes value
	 */
	limitInclusive: BOOLEAN;

	/**
	 * Limit to compare
	 */
	limit: INTEGER;


}

/**
 * Utilization Statistics
 */
 declare class UtilizationStatistics extends DataShapeBase {

	/**
	 * The maxium time in milliseconds for all invocations of the statistic
	 */
	maxTime: NUMBER;

	/**
	 * The name of the utilization statistic statistic
	 */
	statisticName: STRING;

	/**
	 * The mean time in milliseconds for all invocations of the statistic
	 */
	meanTime: NUMBER;

	/**
	 * The total count
	 */
	count: LONG;

	/**
	 * The 80th percentile
	 */
	_80: NUMBER;

	/**
	 * The 99.9th percentile
	 */
	_999: NUMBER;

	/**
	 * The minimum time in milliseconds for all invocations of the statistic
	 */
	minTime: NUMBER;

	/**
	 * The 90th percentile
	 */
	_90: NUMBER;

	/**
	 * The 95th percentile
	 */
	_95: NUMBER;

	/**
	 * The 50th percentile
	 */
	_50: NUMBER;

	/**
	 * The 75th percentile
	 */
	_75: NUMBER;

	/**
	 * The standard deviation
	 */
	stddev: NUMBER;

	/**
	 * The 99th percentile
	 */
	_99: NUMBER;


}

/**
 * Property alert summary detail
 */
 declare class PropertyAlertSummaryDetail extends DataShapeBase {

	/**
	 * Alert duration
	 */
	duration: NUMBER;

	/**
	 * Alert acknowledge timestamp
	 */
	ackTimestamp: DATETIME;

	/**
	 * Alert type
	 */
	alertType: STRING;

	/**
	 * Alert acknowledged by
	 */
	ackBy: STRING;

	/**
	 * Alert acknowledge state
	 */
	ack: BOOLEAN;

	/**
	 * Alert name
	 */
	name: STRING;

	/**
	 * Alert description
	 */
	description: STRING;

	/**
	 * Alert message
	 */
	message: STRING;

	/**
	 * Alert priority
	 */
	priority: INTEGER;

	/**
	 * Alert timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Federation subscriber status
 */
 declare class SubscriberStatus extends DataShapeBase {

	/**
	 * Connection status
	 */
	isConnected: BOOLEAN;

	/**
	 * Subscriber name
	 */
	name: STRING;

	/**
	 * Subscriber description
	 */
	description: STRING;

	/**
	 * Enabled
	 */
	enabled: BOOLEAN;

	/**
	 * Last connection time
	 */
	lastConnection: DATETIME;


}

/**
 * Number range alert
 */
 declare class NumberRangeAlert extends DataShapeBase {

	/**
	 * Calculation type
	 */
	calculationType: STRING;

	/**
	 * Calculation value for Min and Max from alert value
	 */
	calculationValue: NUMBER;

	/**
	 * Calculate Limit from alert value
	 */
	calculationShow: BOOLEAN;

	/**
	 * Maximum value
	 */
	maximum: NUMBER;

	/**
	 * property value
	 */
	propertyValue: NUMBER;

	/**
	 * Range includes minimum
	 */
	minimumInclusive: BOOLEAN;

	/**
	 * Range includes maximum
	 */
	maximumInclusive: BOOLEAN;

	/**
	 * Minimum value
	 */
	minimum: NUMBER;


}

/**
 * Paginated list containing AnalyticsResultDetails
 */
 declare class AnalyticsResultDetailsPage extends DataShapeBase {

	/**
	 * URI to the next page
	 */
	next: STRING;

	/**
	 * Count of all records
	 */
	total: LONG;

	/**
	 * URI to the previous page
	 */
	previous: STRING;

	/**
	 * A page of AnalyticsResultDetails
	 */
	values: INFOTABLE<AnalyticsResultDetails>;


}

/**
 * Stream entry with values
 */
 declare class StreamEntryWithValues extends DataShapeBase {

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Values
	 */
	values: INFOTABLE<any>;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Source of the entry
	 */
	source: STRING;

	/**
	 * Tags
	 */
	tags: TAGS;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Collaboration search result
 */
 declare class CollaborationSearchResult extends DataShapeBase {

	/**
	 * Parent container
	 */
	parentName: THINGNAME;

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry id
	 */
	id: STRING;

	/**
	 * Source of the entry
	 */
	source: STRING;

	/**
	 * Title for the entry
	 */
	title: STRING;

	/**
	 * Entry type
	 */
	type: STRING;

	/**
	 * Content for the entry
	 */
	content: STRING;

	/**
	 * List of tags
	 */
	tags: TAGS;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Entity facet
 */
 declare class NamedFacets extends DataShapeBase {

	/**
	 * Count
	 */
	count: INTEGER;

	/**
	 * Entity name
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;


}

/**
 * Mapping of Identity Provider group names to Thingworx Group names
 */
 declare class UserProvisioningUserGroupMappings extends DataShapeBase {

	/**
	 * Thingworx Group Name
	 */
	twxGroupName: STRING;

	/**
	 * Identity Provider Group Name
	 */
	identityProviderGroupName: STRING;


}

/**
 * Persistence Schema Metadata
 */
 declare class PersistenceSchemaMetadata extends DataShapeBase {

	/**
	 * The data schema version of the persistence provider package
	 */
	dataSchemaVersion: STRING;

	/**
	 * Name of the persistence provider package used by the persistence provider
	 */
	persistenceProviderPackage: STRING;

	/**
	 * The model schema version of the persistence provider package
	 */
	modelSchemaVersion: STRING;

	/**
	 * The property schema version of the persistence provider package
	 */
	propertySchemaVersion: STRING;


}

/**
 * Options used during user Provisioning
 */
 declare class UserProvisioningUserDefaults extends DataShapeBase {

	/**
	 * 
	 */
	userDefaultDescription: STRING;

	/**
	 * Mobile Mashup
	 */
	userDefaultMobileMashupName: MASHUPNAME;

	/**
	 * 
	 */
	userDefaultTags: TAGS;

	/**
	 * Home Mashup
	 */
	userDefaultHomeMashupName: MASHUPNAME;


}

/**
 * Integer compare alert
 */
 declare class IntegerCompareAlert extends DataShapeBase {

	/**
	 * Limit includes value
	 */
	limitInclusive: BOOLEAN;

	/**
	 * Limit to compare
	 */
	limit: INTEGER;


}

/**
 * Thing name, event values
 */
 declare class RemoteEventUpdates extends DataShapeBase {

	/**
	 * Event updates
	 */
	values: INFOTABLE<Event>;

	/**
	 * Thing name
	 */
	name: STRING;


}

/**
 * Service configuration
 */
 declare class ServiceImplementation extends DataShapeBase {

	/**
	 * Infotables containing configuration information
	 */
	configurationData: INFOTABLE<any>;

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Class name of the handler
	 */
	className: STRING;


}

/**
 * Operating/Platform/Environment Information
 */
 declare class SystemInformation extends DataShapeBase {

	/**
	 * State Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Value
	 */
	value: STRING;


}

/**
 * People facets
 */
 declare class PeopleFacets extends DataShapeBase {

	/**
	 * Extension facets
	 */
	extensionFacets: INFOTABLE<FieldDefinition>;

	/**
	 * Model tag facets
	 */
	modelTagFacets: INFOTABLE<MultilevelFacets>;

	/**
	 * Count
	 */
	count: INTEGER;


}

/**
 * Message Store list
 */
 declare class MessageStoreList extends DataShapeBase {

	/**
	 * Item Type
	 */
	Type: STRING;

	/**
	 * Item Value
	 */
	Value: INFOTABLE<any>;

	/**
	 * Unique message ID
	 */
	ID: STRING;

	/**
	 * Connected Thing name
	 */
	ConnectedThing: THINGNAME;

	/**
	 * Date and Time the item was addeded to the message store
	 */
	Timestamp: DATETIME;

	/**
	 * Item Name
	 */
	Name: STRING;


}

/**
 * Extension info data shape
 */
 declare class ExtensionInfoDataShape extends DataShapeBase {

	/**
	 * Extension name
	 */
	extensionName: STRING;

	/**
	 * Extension minor version number
	 */
	extensionMinor: INTEGER;

	/**
	 * Extension patch version number
	 */
	extensionPatch: INTEGER;

	/**
	 * Extension major version number
	 */
	extensionMajor: INTEGER;


}

/**
 * String value stream
 */
 declare class StringValueStream extends DataShapeBase {

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * value
	 */
	value: STRING;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Security principal
 */
 declare class Principal extends DataShapeBase {

	/**
	 * Principal name
	 */
	name: STRING;

	/**
	 * Principal type
	 */
	type: STRING;


}

/**
 * Time series dataset list
 */
 declare class TimeSeriesDataset extends DataShapeBase {

	/**
	 * Dataset content
	 */
	data: INFOTABLE<any>;

	/**
	 * Dataset name
	 */
	name: STRING;


}

/**
 * Long value stream
 */
 declare class LongValueStream extends DataShapeBase {

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * value
	 */
	value: LONG;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Remote property Binding
 */
 declare class RemotePropertyBinding extends DataShapeBase {

	/**
	 * Remote binding aspects
	 */
	aspects: JSON;

	/**
	 * Bound item name
	 */
	name: STRING;

	/**
	 * Push notification threshold
	 */
	pushThreshold: NUMBER;

	/**
	 * Source item name
	 */
	sourceName: STRING;

	/**
	 * Request timeout
	 */
	timeout: INTEGER;

	/**
	 * Push notification type
	 */
	pushType: STRING;


}

/**
 * The minimum, median, and maximum confidence interval values.
 */
 declare class AnalyticsConfidenceIntervalResult extends DataShapeBase {

	/**
	 * The minimum value in a percentage of given data
	 */
	min: NUMBER;

	/**
	 * The median (50th percentile) value in a percentage of given data
	 */
	median: NUMBER;

	/**
	 * The maximum value in a percentage of given data
	 */
	max: NUMBER;


}

/**
 * Field definition
 */
 declare class FieldDefinition extends DataShapeBase {

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Flag to indicate if part of the primary key
	 */
	isPrimaryKey: BOOLEAN;

	/**
	 * Base data type
	 */
	baseType: BASETYPENAME;

	/**
	 * Associated data shape if an info table
	 */
	dataShape: DATASHAPENAME;


}

/**
 * The minimum, median and maximum time interval between the given timestamps
 */
 declare class AnalyticsSamplingFrequencyResult extends DataShapeBase {

	/**
	 * The minimum time interval
	 */
	min: LONG;

	/**
	 * The median (50th percentile) time interval
	 */
	median: LONG;

	/**
	 * The maximum time interval
	 */
	max: LONG;


}

/**
 * Mashup list
 */
 declare class MashupList extends DataShapeBase {

	/**
	 * Mashup name
	 */
	name: MASHUPNAME;

	/**
	 * Mashup description
	 */
	description: STRING;


}

/**
 * Generic Result Shape
 */
 declare class GenericResult extends DataShapeBase {

	/**
	 * Error or informational message
	 */
	message: STRING;

	/**
	 * Status indicator (true = successful)
	 */
	status: BOOLEAN;


}

/**
 * DataShape used for ThingCode BaseTypes.
 */
 declare class ThingCodeDataShape extends DataShapeBase {

	/**
	 * 
	 */
	instanceId: LONG;

	/**
	 * 
	 */
	domainId: INTEGER;


}

/**
 * DataShape used for returning a list of notification handlers
 */
 declare class NotificationHandlers extends DataShapeBase {

	/**
	 * The localized name for the type of notifications handler
	 */
	localizedName: STRING;

	/**
	 * The name of the data shape representing configuration data for the handler
	 */
	configuration: DATASHAPENAME;

	/**
	 * The identifier for the type of supported notification handler
	 */
	handlerID: GUID;

	/**
	 * The name of the service for sending notifications on the handler
	 */
	serviceName: STRING;


}

/**
 * Service handler definition
 */
 declare class HandlerDefinition extends DataShapeBase {

	/**
	 * Name
	 */
	name: STRING;

	/**
	 * Description
	 */
	description: STRING;

	/**
	 * Java class name
	 */
	className: STRING;

	/**
	 * Flag to indicate if a user-created service can use this handler
	 */
	isUserDefinable: BOOLEAN;


}

/**
 * Mapping of User Extension properties to Identity Provider names
 */
 declare class UserProvisioningUserExtensionMappings extends DataShapeBase {

	/**
	 * Mapped Identity Provider Attribute
	 */
	identityProviderAttribute: STRING;

	/**
	 * Property Name
	 */
	propertyName: STRING;

	/**
	 * Default Value
	 */
	defaultValue: STRING;


}

/**
 * Geofence datapoint
 */
 declare class GeoFencePoint extends DataShapeBase {

	/**
	 * Location of a vertex in the polygon
	 */
	location: LOCATION;


}

/**
 * Thing Stream Entries
 */
 declare class ThingStreamEntry extends DataShapeBase {

	/**
	 * Stream name
	 */
	name: THINGNAME;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * Tags
	 */
	tags: TAGS;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Description of the model outputs
 */
 declare class AnalyticsModelOutputField extends DataShapeBase {

	/**
	 * Name of the field
	 */
	fieldName: STRING;

	/**
	 * Format of the data (STRING,DOUBLE,BOOLEAN,INTEGER)
	 */
	dataType: STRING;

	/**
	 * Behavior of the data (CONTINUOUS,CATEGORICAL,ORDINAL,BOOLEAN)
	 */
	opType: STRING;

	/**
	 * Error message if an exception occurs
	 */
	errorMessage: STRING;


}

/**
 * Data shape for representing array of datetime type
 */
 declare class DatetimeArrayElement extends DataShapeBase {

	/**
	 * 
	 */
	element: DATETIME;


}

/**
 * Long deviation alert
 */
 declare class LongDeviationAlert extends DataShapeBase {

	/**
	 * Calculation type
	 */
	calculationType: STRING;

	/**
	 * Calculation value for Limit from alert value
	 */
	calculationValue: NUMBER;

	/**
	 * Calculate Limit from alert value
	 */
	calculationShow: BOOLEAN;

	/**
	 * Limit includes value
	 */
	limitInclusive: BOOLEAN;

	/**
	 * Limit to deviation from reference value
	 */
	limit: NUMBER;

	/**
	 * Reference value
	 */
	value: NUMBER;


}

/**
 * Resource
 */
 declare class Resource extends DataShapeBase {

	/**
	 * Resource name
	 */
	name: STRING;

	/**
	 * Resource description
	 */
	description: STRING;


}

/**
 * Table showing the number of predictions for each classification
 */
 declare class AnalyticsConfusionMatrixRow extends DataShapeBase {

	/**
	 * Row of predictions
	 */
	values: INFOTABLE<GenericStringList>;


}

/**
 * File information
 */
 declare class FileSystemFile extends DataShapeBase {

	/**
	 * Full path
	 */
	path: STRING;

	/**
	 * File size
	 */
	size: NUMBER;

	/**
	 * Date last modified
	 */
	lastModifiedDate: DATETIME;

	/**
	 * File name
	 */
	name: STRING;

	/**
	 * File type
	 */
	fileType: STRING;


}

/**
 * DataShape used for descriptors of events
 */
 declare class EventDescriptor extends DataShapeBase {

	/**
	 * The name of the alert
	 */
	alertName: STRING;

	/**
	 * The name of the property
	 */
	propertyName: STRING;

	/**
	 * The name of the source of the event
	 */
	entityName: STRING;

	/**
	 * The type of the source entity
	 */
	entityType: STRING;

	/**
	 * The name of the event
	 */
	eventName: STRING;


}

/**
 * Description of the model inputs
 */
 declare class AnalyticsModelInputField extends DataShapeBase {

	/**
	 * Acceptable values (CATEGORICAL and ORDINAL fields)
	 */
	allowedValues: INFOTABLE<GenericStringList>;

	/**
	 * Name of the field
	 */
	fieldName: STRING;

	/**
	 * Maximum acceptable value (CONTINUOUS fields)
	 */
	maxFieldRange: NUMBER;

	/**
	 * Format of the data (STRING,DOUBLE,BOOLEAN,INTEGER)
	 */
	dataType: STRING;

	/**
	 * Behavior of the data (CONTINUOUS,CATEGORICAL,ORDINAL,BOOLEAN)
	 */
	opType: STRING;

	/**
	 * Error message if an exception occurs
	 */
	errorMessage: STRING;

	/**
	 * Minimum acceptable value (CONTINUOUS fields)
	 */
	minFieldRange: NUMBER;


}

/**
 * Description of the model inputs
 */
 declare class AnalyticsPmmlFieldsResponse extends DataShapeBase {

	/**
	 * 
	 */
	inputFields: INFOTABLE<AnalyticsModelInputField>;

	/**
	 * 
	 */
	outputFields: INFOTABLE<AnalyticsModelOutputField>;

	/**
	 * 
	 */
	timeseriesPmmlValues: INFOTABLE<AnalyticsTimeSeriesPmmlValues>;


}

/**
 * Dashboard group definition
 */
 declare class DashboardGroup extends DataShapeBase {

	/**
	 * Dashboard items
	 */
	dashboardItems: INFOTABLE<DashboardItem>;

	/**
	 * Dashboard ID
	 */
	id: STRING;

	/**
	 * Dashboard group title
	 */
	title: STRING;


}

/**
 * A single ROC pair made up of a false positive rate, true positive rate, and threshold.
 */
 declare class AnalyticsRocPair extends DataShapeBase {

	/**
	 * False positive rate for this ROC pair.
	 */
	falsePositiveRate: NUMBER;

	/**
	 * True positive rate for this ROC pair.
	 */
	truePositiveRate: NUMBER;

	/**
	 * Threshold for this ROC pair.
	 */
	threshold: NUMBER;


}

/**
 * Default groups assigned to users during provisioning
 */
 declare class UserProvisioningDefaultGroups extends DataShapeBase {

	/**
	 * Group Name
	 */
	userDefaultGroupNames: STRING;


}

/**
 * Semantic link to any system entity
 */
 declare class EntitySearchResult extends DataShapeBase {

	/**
	 * Parent name
	 */
	parentName: STRING;

	/**
	 * Entity name or id
	 */
	name: STRING;

	/**
	 * Entity description
	 */
	description: STRING;

	/**
	 * Entity type
	 */
	type: STRING;

	/**
	 * Parent type
	 */
	parentType: STRING;


}

/**
 * The result of realtime predictive scoring
 */
 declare class AnalyticsPredictionScores extends DataShapeBase {

	/**
	 * The field values of the row identifiers
	 */
	identifiers: INFOTABLE<GenericStringList>;

	/**
	 * Error message if an exception occurs
	 */
	errorMessage: STRING;

	/**
	 * A list of fields and their contributing weight on the goal score
	 */
	importantFields: INFOTABLE<FieldValuePair>;

	/**
	 * A list of model output fields and their corresponding values
	 */
	modelOutputs: INFOTABLE<FieldValuePair>;


}

/**
 * Industrial Connectivity Thing Property Notification with aspects
 */
 declare class IndustrialThingPropertyNotification extends DataShapeBase {

	/**
	 * Edge property name
	 */
	edgeName: STRING;

	/**
	 * Aspects of the binding
	 */
	aspects: JSON;

	/**
	 * Change threshold to generate event for numeric properties
	 */
	pushThreshold: NUMBER;

	/**
	 * String representing push type for event notification to subscribers
	 */
	pushType: STRING;


}

/**
 * Bound name
 */
 declare class BoundName extends DataShapeBase {

	/**
	 * Is an identifier
	 */
	isIdentifier: BOOLEAN;

	/**
	 * Thing name
	 */
	name: STRING;


}

/**
 * Data shape for representing property write report
 */
 declare class PropertyWriteReport extends DataShapeBase {

	/**
	 * month
	 */
	month: STRING;

	/**
	 * property write count
	 */
	propertyWriteCount: LONG;

	/**
	 * year
	 */
	year: INTEGER;

	/**
	 * PropertyWrite count for each thing
	 */
	thingPropertyWriteCounts: INFOTABLE<ThingPropertyWriteCounts>;

	/**
	 * last modified
	 */
	lastModified: DATETIME;


}

/**
 * Remote service Binding
 */
 declare class RemoteServiceBinding extends DataShapeBase {

	/**
	 * Bound item name
	 */
	name: STRING;

	/**
	 * Source item name
	 */
	sourceName: STRING;

	/**
	 * Request timeout
	 */
	timeout: INTEGER;


}

/**
 * Options used during SCIM Provisioning
 */
 declare class SCIMProvisioningOptions extends DataShapeBase {

	/**
	 * 
	 */
	terminateUserSessionsOnConfigChange: BOOLEAN;


}

/**
 * Blog Entry History
 */
 declare class BlogHistory extends DataShapeBase {

	/**
	 * Number of entries
	 */
	count: INTEGER;

	/**
	 * Start date of the entries
	 */
	timestamp: DATETIME;


}

/**
 * Data associated with a configuration modification
 */
 declare class ConfigurationChange extends DataShapeBase {

	/**
	 * Reason for making the change
	 */
	changeReason: STRING;

	/**
	 * User who made the change
	 */
	user: USERNAME;

	/**
	 * Type of change
	 */
	changeAction: STRING;

	/**
	 * Time of change
	 */
	timestamp: DATETIME;


}

/**
 * All Persistence Schema Metadata
 */
 declare class AllPersistenceSchemaMetadata extends DataShapeBase {

	/**
	 * Name of the persistence provider
	 */
	persistenceProvider: STRING;

	/**
	 * The data schema version of the persistence provider package
	 */
	dataSchemaVersion: STRING;

	/**
	 * Name of the persistence provider package used by the persistence provider
	 */
	persistenceProviderPackage: STRING;

	/**
	 * The model schema version of the persistence provider package
	 */
	modelSchemaVersion: STRING;

	/**
	 * The property schema version of the persistence provider package
	 */
	propertySchemaVersion: STRING;


}

/**
 * Offline CleanUp Result
 */
 declare class OfflineAuditArchiveCleanUpShape extends DataShapeBase {

	/**
	 * list of Audit Archive deleted folders
	 */
	CleanupDirectories: STRING;

	/**
	 * list of Audit Archive folders for which deletion failed
	 */
	FailedCleanupDirectories: STRING;


}

/**
 * Location value stream
 */
 declare class LocationValueStream extends DataShapeBase {

	/**
	 * Entry ID
	 */
	id: STRING;

	/**
	 * value
	 */
	value: LOCATION;

	/**
	 * Timestamp
	 */
	timestamp: DATETIME;


}

/**
 * Notification Event
 */
 declare class NotificationEvent extends DataShapeBase {

	/**
	 * Notification Trigger Event Information
	 */
	triggerEvent: INFOTABLE<Event>;

	/**
	 * Notification Content Name
	 */
	contentName: STRING;


}

/**
 * Reference to a dataset
 */
 declare class AnalyticsDatasetRef extends DataShapeBase {

	/**
	 * SQL WHERE clause to refine the dataset
	 */
	filter: STRING;

	/**
	 * Location of the data
	 */
	datasetUri: STRING;

	/**
	 * Metadata of the dataset (for providing data as part of request)
	 */
	metadata: INFOTABLE<AnalyticsDatasetMetadata>;

	/**
	 * An infotable of data (must be flat. for providing data as part of request)
	 */
	data: INFOTABLE<any>;

	/**
	 * Structure of the data (csv, parquet)
	 */
	format: STRING;

	/**
	 * Fields to remove from the dataset
	 */
	exclusions: INFOTABLE<GenericStringList>;


}

/**
 * Collaboration Entry List
 */
 declare class CollaborationEntry extends DataShapeBase {

	/**
	 * Source of the entry
	 */
	source: STRING;

	/**
	 * Number of ratings
	 */
	ratingCount: INTEGER;

	/**
	 * Title for the entry
	 */
	title: STRING;

	/**
	 * Entry type
	 */
	type: STRING;

	/**
	 * Content for the entry
	 */
	content: STRING;

	/**
	 * Parent entry id
	 */
	parentId: STRING;

	/**
	 * Containing entry id
	 */
	entryId: STRING;

	/**
	 * List of tags
	 */
	tags: TAGS;

	/**
	 * Source type
	 */
	sourceType: STRING;

	/**
	 * Location of the entry
	 */
	location: LOCATION;

	/**
	 * Entry id
	 */
	id: STRING;

	/**
	 * Average rating
	 */
	ratingAverage: NUMBER;

	/**
	 * Time of entry
	 */
	timestamp: DATETIME;


}

/**
 * Aspect name/type
 */
 declare class Aspects extends DataShapeBase {

	/**
	 * Aspect name
	 */
	name: STRING;

	/**
	 * Base data type
	 */
	baseType: BASETYPENAME;


}

/**
 * Definition of an edge thing registered with a Microserver and its connection information
 */
 declare class EdgeThingEndpoint extends DataShapeBase {

	/**
	 * Path to the edge thing's API
	 */
	path: STRING;

	/**
	 * Port that the edge thing is accessed at
	 */
	port: NUMBER;

	/**
	 * How long the edge thing will remain registered at the Microserver
	 */
	keepalive: NUMBER;

	/**
	 * Protocol used to communicate with the edge thing
	 */
	proto: STRING;

	/**
	 * Host that the edge thing is running on
	 */
	host: STRING;

	/**
	 * Name of the edge thing registered with the Microserver
	 */
	name: STRING;

	/**
	 * Username used for authentication
	 */
	user: STRING;

	/**
	 * Content type accepted by the endpoint
	 */
	accept: STRING;


}