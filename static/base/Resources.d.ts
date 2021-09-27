declare class ResourceEntity {

}

declare class DeviceFunctions extends ResourceEntity {

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
	 * Get bound remote things
	 * @param maxItems Maximum number of items to return
	 * @return Bound remote things
	 */
	GetBoundRemoteThings(args?:{maxItems?: NUMBER}): INFOTABLE<DeviceStatus>;

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
	 * Get bound federated things
	 * @param maxItems Maximum number of items to return
	 * @param name Federated server name
	 * @return Bound federated things
	 */
	GetBoundThingsForFederatedServer(args?:{maxItems?: NUMBER, name?: THINGNAME<"ThingworxServer">}): INFOTABLE<DeviceStatus>;

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
	 * Get unbound identifiers
	 * @param maxItems Maximum number of items to return
	 * @return Unbound remote things with identifiers
	 */
	GetUnboundIdentifiers(args?:{maxItems?: NUMBER}): INFOTABLE<EntityList>;

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
	 * Get unbound federated things
	 * @param maxItems Maximum number of items to return
	 * @param name Federated server name
	 * @return Unbound federated things
	 */
	GetUnboundThingsForFederatedServer(args?:{maxItems?: NUMBER, name?: THINGNAME<"ThingworxServer">}): INFOTABLE<EntityList>;

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
	 * Retrieve a list of Devices that match the options specified.
	 * @param thingShape Filter only for devices that implement this shape
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Name pattern
	 * @param query Query definition
	 * @param thingTemplate Filter only for devices that are derived from this template
	 * @return Matching Devices
	 */
	SearchDevices(args?:{thingShape?: THINGSHAPENAME, maxItems?: NUMBER, nameMask?: STRING, query?: QUERY, thingTemplate?: THINGTEMPLATENAME}): INFOTABLE<DeviceStatus>;

	/**
	 * Get unbound remote things
	 * @param maxItems Maximum number of items to return
	 * @return Unbound remote things
	 */
	GetUnboundRemoteThings(args?:{maxItems?: NUMBER}): INFOTABLE<BoundName>;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}

declare class SecurityServices extends ResourceEntity {

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
	 * Evaluates the specified design-time permission
	 * @param name 
	 * @param permission 
	 * @param type 
	 * @return 
	 */
	EvaluateDesignTimePermission(args?:{name?: STRING, permission?: STRING, type?: STRING}): BOOLEAN;

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
	 * Checks if the specified entity is visible and/or exists
	 * @param name 
	 * @param type 
	 * @return 
	 */
	EvaluateVisibilityPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Evaluates the specified runtime permission
	 * @param resource 
	 * @param name 
	 * @param permission 
	 * @param type 
	 * @return 
	 */
	EvaluateRuntimePermission(args?:{resource?: STRING, name?: STRING, permission?: STRING, type?: STRING}): BOOLEAN;

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
	 * Sanitizes the specified HTML string using the rules defined by the specified Policy. Valid Policy names are: "default", "blog", "wiki", "none"
	 * @param html The HTML string to be sanitized
	 * @param policy The name of the Policy defining the rules by which the specified HTML string is to be sanitized.
	 * @return 
	 */
	SanitizeHtml(args?:{html?: STRING, policy?: STRING}): INFOTABLE<HtmlSanitizationResult>;

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

declare class RuntimeLocalizationFunctions extends ResourceEntity {

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
	 * Return a table of tokens and values, given an ordered list of language preferences
	 * @param language Language code
	 * @return Localization tokens and values
	 */
	GetEffectiveTokensForLanguage(args?:{language?: STRING}): INFOTABLE<LocalizationToken>;

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
	 * Return a list of languages defined on this system
	 * @return Table of localization tables with properties
	 */
	GetLanguages(args?:{}): INFOTABLE<LanguageDescription>;

	/**
	 * Return a token for a specific language
	 * @param language Language code
	 * @param token Token
	 * @return Localization tokens
	 */
	GetEffectiveTokenForLanguage(args?:{language?: STRING, token?: STRING}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Return a list of Default tokens matching search expression
	 * @param searchExpression search pattern
	 * @return Localization tokens
	 */
	SearchDefaultLocalizationTokens(args?:{searchExpression?: STRING}): INFOTABLE<LocalizationToken>;

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
	 * Return a token based on language setting for current user
	 * @param token Token
	 * @return Localization tokens
	 */
	GetEffectiveToken(args?:{token?: STRING}): STRING;

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
	 * Return a list of effective tokens based on language setting for current user
	 * @return Localization tokens
	 */
	GetEffectiveTokens(args?:{}): INFOTABLE<LocalizationToken>;

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
	 * Export localization tables, optionally with a token name filter
	 * @param prefix Token prefix
	 * @return Localization tokens
	 */
	ExportLocalizationTables(args?:{prefix?: STRING}): XML;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}

declare class EntityServices extends ResourceEntity {

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
	 * Delete a thing
	 * @param name Thing name
	 * @return result
	 */
	DeleteThing(args?:{name?: THINGNAME}): NOTHING;

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
	 * Update or create a localization table with native and common name
	 * @param nativeName Localization table native name or native language
	 * @param commonName Localization table common name or common language
	 * @param description Localization table description
	 * @param locale Localization table name or language
	 * @param tags Tags
	 * @return result
	 */
	SetLocalizationTableNames(args?:{nativeName?: STRING, commonName?: STRING, description?: STRING, locale?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Creates a user
	 * @param userOptions Create a user according to the given user options. The userName in the UserOptions is required.
	 * @return result
	 */
	CreateUserWithOptions(args?:{userOptions?: INFOTABLE<UserOptions>}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Set visibility on a set of entities
	 * @param organizationName Name of the Organization to use for visibility permissions
	 * @param includeDependents Include dependent projects
	 * @param projectName Project name
	 * @param tags Tags
	 * @return result
	 */
	SetEntityVisibility(args?:{organizationName?: STRING, includeDependents?: BOOLEAN, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Create a new network
	 * @param name New network name
	 * @param description New network description
	 * @param projectName Name of the Project to add this entity to
	 * @param connections Connections
	 * @param tags Tags
	 * @return result
	 */
	CreateNetwork(args?:{name?: STRING, description?: STRING, projectName?: PROJECTNAME, connections?: INFOTABLE<NetworkConnection>, tags?: TAGS}): NOTHING;

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
	 * Add a thing shape to an existing thing
	 * @param name Thing name
	 * @param thingShapeName Thing shape name
	 * @return result
	 */
	AddShapeToThing(args?:{name?: THINGNAME, thingShapeName?: THINGSHAPENAME}): NOTHING;

	/**
	 * Add run time permissions to a set of Things
	 * @param entityName Thing shape or template name
	 * @param entityType ThingShape or ThingTemplate
	 * @param permissions Resource permissions
	 * @param query Query definition
	 * @return result
	 */
	AddThingPermission(args?:{entityName?: STRING, entityType?: STRING, permissions?: INFOTABLE<RunTimePermissions>, query?: QUERY}): NOTHING;

	/**
	 * Delete run time permissions on a set of entities
	 * @param name Name of the User or Group for run time permissions
	 * @param includeDependents Include dependent projects
	 * @param type User or Group
	 * @param projectName Project name
	 * @param tags Tags
	 * @return result
	 */
	DeleteEntityPermission(args?:{name?: STRING, includeDependents?: BOOLEAN, type?: STRING, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Delete run time permissions for a resource on a set of entities
	 * @param permissions Resource permissions
	 * @param includeDependents Include dependent projects
	 * @param projectName Project name
	 * @param tags Tags
	 * @return result
	 */
	DeleteResourceEntityPermission(args?:{permissions?: INFOTABLE<RunTimePermissions>, includeDependents?: BOOLEAN, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Create a new style definition
	 * @param name New style definition name
	 * @param description New style definition description
	 * @param projectName Name of the Project to add this entity to
	 * @param content Style definition content in JSON format: { "content": {} }
	 * @param tags Tags
	 * @return result
	 */
	CreateStyleDefinition(args?:{name?: STRING, description?: STRING, projectName?: PROJECTNAME, content?: JSON, tags?: TAGS}): NOTHING;

	/**
	 * Delete a style definition
	 * @param name Style definition name
	 * @return result
	 */
	DeleteStyleDefinition(args?:{name?: STYLEDEFINITIONNAME}): NOTHING;

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
	 * Create a new thing template from a base template
	 * @param name New thing template name
	 * @param description New thing template description
	 * @param thingTemplateName Base thing template name
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateThingTemplate(args?:{name?: STRING, description?: STRING, thingTemplateName?: THINGTEMPLATENAME, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Create a new thing template from a base template
	 * @param name New thing template name
	 * @param description New thing template description
	 * @param ownerUserName The User Name to set as owner of this ThingTemplate
	 * @param thingTemplateName Base thing template name
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateThingTemplateWithOwner(args?:{name?: STRING, description?: STRING, ownerUserName?: USERNAME, thingTemplateName?: THINGTEMPLATENAME, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Set run time permissions on a set of Things. This replaces all existing permissions for the Things.
	 * @param entityName Thing shape or template name
	 * @param entityType ThingShape or ThingTemplate
	 * @param permissions Resource permissions
	 * @param query Query definition
	 * @return result
	 */
	SetThingPermission(args?:{entityName?: STRING, entityType?: STRING, permissions?: INFOTABLE<RunTimePermissions>, query?: QUERY}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Delete a user
	 * @param userOptions Delete the user for the given user options. The userName in the UserOptions is required.
	 * @return result
	 */
	DeleteUserWithOptions(args?:{userOptions?: INFOTABLE<UserOptions>}): NOTHING;

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
	 * Delete visibility on a set of entities
	 * @param organizationName Name of the Organization to use for visibility permissions
	 * @param includeDependents Include dependent projects
	 * @param projectName Project name
	 * @param tags Tags
	 * @return result
	 */
	DeleteEntityVisibility(args?:{organizationName?: STRING, includeDependents?: BOOLEAN, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Delete a Project
	 * @param name Project name
	 * @return result
	 */
	DeleteProject(args?:{name?: PROJECTNAME}): NOTHING;

	/**
	 * Remove a thing shape from an existing thing
	 * @param name Thing name
	 * @param thingShapeName Thing shape name
	 * @return result
	 */
	RemoveShapeFromThing(args?:{name?: THINGNAME, thingShapeName?: THINGSHAPENAME}): NOTHING;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Delete a notification definition
	 * @param name New notification definition name
	 * @return result
	 */
	DeleteNotificationDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Clone an existing thing template with a new name
	 * @param sourceThingTemplateName Existing thing template name
	 * @param name New thing name
	 * @param description New thing description
	 * @param tags Tags
	 * @return result
	 */
	CloneThingTemplate(args?:{sourceThingTemplateName?: THINGTEMPLATENAME, name?: STRING, description?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Clone an existing thing template with a new name and ownerName.
	 * @param sourceThingTemplateName Thing template name
	 * @param name - New thing name
	 * @param description - New thing description
	 * @param tags - Tags
	 * @param ownerUserName - the user name to set as owner of newly thing
	 * @return result
	 */
	CloneThingTemplateWithOwner(args?:{sourceThingTemplateName?: THINGTEMPLATENAME, name?: STRING, description?: STRING, tags?: TAGS, ownerUserName?: USERNAME}): NOTHING;

	/**
	 * Updates a user
	 * @param userOptions Update the user for the given user options. The userName in the UserOptions is required.
	 * @return result
	 */
	UpdateUserWithOptions(args?:{userOptions?: INFOTABLE<UserOptions>}): NOTHING;

	/**
	 * Create a new project
	 * @param dependsOn New extension description
	 * @param name New project name
	 * @param description New project description
	 * @param type New project Type
	 * @param tags Tags
	 * @return result
	 */
	CreateProject(args?:{dependsOn?: STRING, name?: STRING, description?: STRING, type?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Delete visibility on a set of entities for multiple Organizations/OrganizationalUnits
	 * @param organizationReferences List of Organizations/OrganizationalUnits to use for visibility permissions
	 * @param includeDependents Include dependent projects
	 * @param projectName Project name
	 * @param tags Tags
	 * @return result
	 */
	DeleteEntityVisibilities(args?:{organizationReferences?: INFOTABLE<EntityReference>, includeDependents?: BOOLEAN, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Delete a group
	 * @param name Group name
	 * @return result
	 */
	DeleteGroup(args?:{name?: GROUPNAME}): NOTHING;

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
	 * Delete a media entity
	 * @param name Media entity name
	 * @return result
	 */
	DeleteMediaEntity(args?:{name?: MEDIAENTITYNAME}): NOTHING;

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
	 * Set run time permissions on a set of entities
	 * @param allow Is the User or Group allowed run time permission
	 * @param name Name of the User or Group for run time permissions
	 * @param includeDependents Include dependent projects
	 * @param type User or Group
	 * @param projectName Project name
	 * @param tags Tags
	 * @return result
	 */
	SetEntityPermission(args?:{allow?: BOOLEAN, name?: STRING, includeDependents?: BOOLEAN, type?: STRING, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Clone an existing thing with a new name
	 * @param name New thing name
	 * @param description New thing description
	 * @param sourceThingName Existing thing name
	 * @param tags Tags
	 * @return result
	 */
	CloneThing(args?:{name?: STRING, description?: STRING, sourceThingName?: THINGNAME, tags?: TAGS}): NOTHING;

	/**
	 * Clone thing and set owner if provided.
	 * @param sourceThingName - Existing thing name
	 * @param name - New thing name
	 * @param description - New thing description
	 * @param tags - Tags
	 * @param ownerUserName - the user name to set as owner of newly thing
	 * @return result
	 */
	CloneThingWithOwner(args?:{sourceThingName?: THINGNAME, name?: STRING, description?: STRING, tags?: TAGS, ownerUserName?: USERNAME}): NOTHING;

	/**
	 * Clone an existing thing shape with a new name
	 * @param name New thing name
	 * @param description New thing description
	 * @param sourceThingShapeName Existing thing shape name
	 * @param tags Tags
	 * @return result
	 */
	CloneThingShape(args?:{name?: STRING, description?: STRING, sourceThingShapeName?: THINGSHAPENAME, tags?: TAGS}): NOTHING;

	/**
	 * Clone an existing thing shape with a new name and set owner if provided.
	 * @param sourceThingShapeName Existing thing shape name
	 * @param name New thing name
	 * @param description New thing description
	 * @param tags Tags
	 * @param ownerUserName the user name to set as owner of newly cloned thingShape
	 * @return result
	 */
	CloneThingShapeWithOwner(args?:{sourceThingShapeName?: THINGSHAPENAME, name?: STRING, description?: STRING, tags?: TAGS, ownerUserName?: USERNAME}): NOTHING;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Restart dependencies for an existing thing template
	 * @param name Thing template name
	 * @return result
	 */
	RestartDependenciesForThingTemplate(args?:{name?: THINGTEMPLATENAME}): NOTHING;

	/**
	 * Create a new notification content
	 * @param handlerEntity New notification content handler name
	 * @param handlerID New notification content handler ID
	 * @param name New notification content name
	 * @param description New notification content description
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateNotificationContent(args?:{handlerEntity?: STRING, handlerID?: STRING, name?: STRING, description?: STRING, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Delete an application key
	 * @param name ApplicationKey name
	 * @return result
	 */
	DeleteApplicationKey(args?:{name?: APPLICATIONKEYNAME}): NOTHING;

	/**
	 * Create a new group
	 * @param name New group name
	 * @param description New group description
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateGroup(args?:{name?: STRING, description?: STRING, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Delete a model tag vocabulary
	 * @param name New vocabulary name
	 * @return result
	 */
	DeleteModelTagVocabulary(args?:{name?: STRING}): NOTHING;

	/**
	 * Create a new user
	 * @param password New user password
	 * @param name New user name
	 * @param description New user description
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateUser(args?:{password?: STRING, name?: STRING, description?: STRING, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Return list of locked users
	 * @return List of locked users
	 */
	GetLockedUsers(args?:{}): INFOTABLE<LockedUsers>;

	/**
	 * Delete a thing template
	 * @param name Thing template name
	 * @return result
	 */
	DeleteThingTemplate(args?:{name?: THINGTEMPLATENAME}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Create a new thing and set owner if provided
	 * @param name New thing name
	 * @param description New thing description
	 * @param ownerUserName The user name to set as owner of new thing
	 * @param thingTemplateName Thing template name
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateThing(args?:{name?: STRING, description?: STRING, ownerUserName?: USERNAME, thingTemplateName?: THINGTEMPLATENAME, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Create a new thing
	 * @param name New thing name
	 * @param description New thing description
	 * @param thingTemplateName Thing template name
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateThingWithOwner(args?:{name?: STRING, description?: STRING, thingTemplateName?: THINGTEMPLATENAME, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

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
	 * Create a new data tag vocabulary
	 * @param name New vocabulary name
	 * @param description New vocabulary description
	 * @param dynamic Make the vocabulary dynamic
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateDataTagVocabulary(args?:{name?: STRING, description?: STRING, dynamic?: BOOLEAN, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Check to see if a remote thing is bound
	 * @param name Thing Name or Identifier
	 * @return Binding status
	 */
	IsRemoteThingBound(args?:{name?: STRING}): BOOLEAN;

	/**
	 * Delete visibility on a set of entities
	 * @param organizationReferences List of Organizations/OrganizationalUnits to use for visibility permissions
	 * @param entityName Thing shape or template name
	 * @param entityType ThingShape or ThingTemplate
	 * @param query Query definition
	 * @return result
	 */
	DeleteThingVisibility(args?:{organizationReferences?: INFOTABLE<EntityReference>, entityName?: STRING, entityType?: STRING, query?: QUERY}): NOTHING;

	/**
	 * Create a new application key
	 * @param clientName clientName
	 * @param name Application key name
	 * @param description Application key description
	 * @param whitelist IP whitelist
	 * @param projectName Name of the Project to add this entity to
	 * @param user Associated user name
	 * @param tags Tags
	 * @param expirationDate Expiration date
	 * @return result
	 */
	CreateApplicationKey(args?:{clientName?: STRING, name?: STRING, description?: STRING, whitelist?: STRING, projectName?: PROJECTNAME, user?: USERNAME, tags?: TAGS, expirationDate?: DATETIME}): NOTHING;

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
	 * Add visibility to a set of entities
	 * @param organizationName Name of the Organization to use for visibility permissions
	 * @param includeDependents Include dependent projects
	 * @param projectName Project name
	 * @param tags Tags
	 * @return result
	 */
	AddEntityVisibility(args?:{organizationName?: STRING, includeDependents?: BOOLEAN, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Create a new notification definition
	 * @param name New notification definition name
	 * @param description New notification definition description
	 * @param notificationContents List of NotificationContents for the new notification definition
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateNotificationDefinition(args?:{name?: STRING, description?: STRING, notificationContents?: INFOTABLE<EntityReference>, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Set visibility on a set of entities for multiple Organizations/OrganizationalUnits. This replaces all existing visibility for the Entities.
	 * @param organizationReferences List of Organizations/OrganizationalUnits to use for visibility permissions
	 * @param includeDependents Include dependent projects
	 * @param projectName Project name
	 * @param tags Tags
	 * @return result
	 */
	SetEntityVisibilities(args?:{organizationReferences?: INFOTABLE<EntityReference>, includeDependents?: BOOLEAN, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Read the definition for an entity as JSON
	 * @param name Entity Name
	 * @param type Entity Collection Type (Things, Mashups, Users, etc)
	 * @return Entity definition
	 */
	ReadEntityDefinitionAsJSON(args?:{name?: STRING, type?: STRING}): JSON;

	/**
	 * Delete a thing shape
	 * @param name Thing shape name
	 * @return result
	 */
	DeleteThingShape(args?:{name?: THINGSHAPENAME}): NOTHING;

	/**
	 * Clone an existing user
	 * @param password New user password
	 * @param sourceUserName Existing user name
	 * @param name New user name
	 * @param description New user description
	 * @param tags Tags
	 * @return result
	 */
	CloneUser(args?:{password?: STRING, sourceUserName?: USERNAME, name?: STRING, description?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve a list of all model entities
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Entity name pattern to match
	 * @param type Entity Type (Thing, Mashup, User, etc)
	 * @param tags Tags
	 * @return Matching entries
	 */
	GetEntityList(args?:{maxItems?: NUMBER, nameMask?: STRING, type?: STRING, tags?: TAGS}): INFOTABLE<RootEntityList>;

	/**
	 * Retrieve a list of all model entities
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Entity name pattern to match
	 * @param type Entity Type (Thing, Mashup, User, etc)
	 * @param tags Tags
	 * @return Matching entries
	 */
	GetEntityListByRegEx(args?:{maxItems?: NUMBER, nameMask?: STRING, type?: STRING, tags?: TAGS}): INFOTABLE<RootEntityList>;

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
	 * Delete run time permissions on a set of entities
	 * @param entityName Thing shape or template name
	 * @param entityType ThingShape or ThingTemplate
	 * @param permissions Resource permissions
	 * @param query Query definition
	 * @return result
	 */
	DeleteThingPermission(args?:{entityName?: STRING, entityType?: STRING, permissions?: INFOTABLE<RunTimePermissions>, query?: QUERY}): NOTHING;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Read an entity as JSON
	 * @param name Entity Name
	 * @param type Entity Collection Type (Things, Mashups, Users, etc)
	 * @param key Encryption-Decryption key name
	 * @return Entity definition
	 */
	ReadEntityAsJSON(args?:{name?: STRING, type?: STRING, key?: STRING}): JSON;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Restart dependencies for an existing thing template
	 * @param name Thing shape name
	 * @return result
	 */
	RestartDependenciesForThingShape(args?:{name?: THINGSHAPENAME}): NOTHING;

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
	 * Add run time permissions for a resource to a set of entities
	 * @param permissions Resource permissions
	 * @param includeDependents Include dependent projects
	 * @param projectName Project name
	 * @param tags Tags
	 * @return result
	 */
	AddResourceEntityPermission(args?:{permissions?: INFOTABLE<RunTimePermissions>, includeDependents?: BOOLEAN, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

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
	 * Remove a thing shape from an existing thing template
	 * @param name Thing template name
	 * @param thingShapeName Thing shape name
	 * @return result
	 */
	RemoveShapeFromThingTemplate(args?:{name?: THINGTEMPLATENAME, thingShapeName?: THINGSHAPENAME}): NOTHING;

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
	 * Clone a notification definition
	 * @param name New notification definition name
	 * @param description New notification definition description
	 * @param sourceNotificationDefinitionName Existing notification definition name
	 * @param tags Tags
	 * @return result
	 */
	CloneNotificationDefinition(args?:{name?: STRING, description?: STRING, sourceNotificationDefinitionName?: STRING, tags?: TAGS}): NOTHING;

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
	 * Delete a network
	 * @param name Network name
	 * @return result
	 */
	DeleteNetwork(args?:{name?: NETWORKNAME}): NOTHING;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Create a new organization
	 * @param topOUName Top level organizational unit in the Organization
	 * @param name New organization name
	 * @param description New organization description
	 * @param projectName Name of the Project to add this entity to
	 * @param topOUDescription Description for the top level organizational unit
	 * @param tags Tags
	 * @return result
	 */
	CreateOrganization(args?:{topOUName?: STRING, name?: STRING, description?: STRING, projectName?: PROJECTNAME, topOUDescription?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Set run time permissions for a resource on a set of entities. This replaces all existing permissions for the entities.
	 * @param permissions Resource permissions
	 * @param includeDependents Include dependent projects
	 * @param projectName Project name
	 * @param tags Tags
	 * @return result
	 */
	SetResourceEntityPermission(args?:{permissions?: INFOTABLE<RunTimePermissions>, includeDependents?: BOOLEAN, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

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
	 * Clone an existing user and clone group memberships
	 * @param password New user password
	 * @param sourceUserName Existing user name
	 * @param name New user name
	 * @param description New user description
	 * @param tags Tags
	 * @return result
	 */
	CloneUserWithGroups(args?:{password?: STRING, sourceUserName?: USERNAME, name?: STRING, description?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Update a style definition entity
	 * @param name Existing style definition name
	 * @param content Style definition content in JSON format
	 * @return result
	 */
	UpdateStyleDefinition(args?:{name?: STYLEDEFINITIONNAME, content?: JSON}): NOTHING;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Add a thing shape to an existing thing template
	 * @param name Thing template name
	 * @param thingShapeName Thing shape name
	 * @return result
	 */
	AddShapeToThingTemplate(args?:{name?: THINGTEMPLATENAME, thingShapeName?: THINGSHAPENAME}): NOTHING;

	/**
	 * Create a new media entity
	 * @param name New media name
	 * @param description New media description
	 * @param projectName Name of the Project to add this entity to
	 * @param content Media content
	 * @param tags Tags
	 * @return result
	 */
	CreateMediaEntity(args?:{name?: STRING, description?: STRING, projectName?: PROJECTNAME, content?: IMAGE, tags?: TAGS}): NOTHING;

	/**
	 * Has incoming dependencies
	 * @return Has dependencies
	 */
	HasIncomingDependencies(args?:{}): BOOLEAN;

	/**
	 * Update a media entity
	 * @param name Existing media name
	 * @param content Media content
	 * @return result
	 */
	UpdateMediaEntity(args?:{name?: STRING, content?: IMAGE}): NOTHING;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Create a new data shape
	 * @param name New data shape name
	 * @param description New data shape description
	 * @param projectName Name of the Project to add this entity to
	 * @param fields Info table with field definitions
	 * @param tags Tags
	 * @return result
	 */
	CreateDataShape(args?:{name?: STRING, description?: STRING, projectName?: PROJECTNAME, fields?: INFOTABLE, tags?: TAGS}): NOTHING;

	/**
	 * Delete an organization
	 * @param name Organization name
	 * @return result
	 */
	DeleteOrganization(args?:{name?: ORGANIZATIONNAME}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Retrieve a list of all model entities for which the current user has a specific permission
	 * @param permissionType Permission Type (ServiceInvoke, PropertyRead, PropertyWrite, etc.)
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Entity name pattern to match
	 * @param permissionTarget Permission target
	 * @param type Entity Type (Thing, Mashup, User, etc)
	 * @param tags Tags
	 * @return Matching entries
	 */
	GetEntityListWithPermissionMask(args?:{permissionType?: STRING, maxItems?: NUMBER, nameMask?: STRING, permissionTarget?: STRING, type?: STRING, tags?: TAGS}): INFOTABLE<RootEntityList>;

	/**
	 * Retrieve a list of all model entities for which the current user has a specific permission
	 * @param permissionType Permission Type (ServiceInvoke, PropertyRead, PropertyWrite, etc.)
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Entity name pattern to match
	 * @param permissionTarget Permission target
	 * @param type Entity Type (Thing, Mashup, User, etc)
	 * @param tags Tags
	 * @return Matching entries
	 */
	GetEntityListWithPermissionMaskByRegEx(args?:{permissionType?: STRING, maxItems?: NUMBER, nameMask?: STRING, permissionTarget?: STRING, type?: STRING, tags?: TAGS}): INFOTABLE<RootEntityList>;

	/**
	 * Get the thing name associated with an identifier
	 * @param identifier Identifier
	 * @return Thing name
	 */
	GetThingNameForIdentifier(args?:{identifier?: STRING}): THINGNAME;

	/**
	 * Add visibility on a set of entities
	 * @param organizationReferences List of Organizations/OrganizationalUnits to use for visibility permissions
	 * @param entityName Thing shape or template name
	 * @param entityType ThingShape or ThingTemplate
	 * @param query Query definition
	 * @return result
	 */
	AddThingVisibility(args?:{organizationReferences?: INFOTABLE<EntityReference>, entityName?: STRING, entityType?: STRING, query?: QUERY}): NOTHING;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Delete a user
	 * @param name User name
	 * @return result
	 */
	DeleteUser(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Clone a notification content
	 * @param sourceNotificationContentName Existing notification content name
	 * @param name New notification content name
	 * @param description New notification content description
	 * @param tags Tags
	 * @return result
	 */
	CloneNotificationContent(args?:{sourceNotificationContentName?: STRING, name?: STRING, description?: STRING, tags?: TAGS}): NOTHING;

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
	 * Delete a data tag vocabulary
	 * @param name New vocabulary name
	 * @return result
	 */
	DeleteDataTagVocabulary(args?:{name?: STRING}): NOTHING;

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
	 * Create a new localization table
	 * @param name New localization table name, i.e. language
	 * @param description New localization table description
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateLocalizationTable(args?:{name?: STRING, description?: STRING, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

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
	 * Set visibility on a set of entities. This replaces all existing visibility for the Things.
	 * @param organizationReferences List of Organizations/OrganizationalUnits to use for visibility permissions
	 * @param entityName Thing shape or template name
	 * @param entityType ThingShape or ThingTemplate
	 * @param query Query definition
	 * @return result
	 */
	SetThingVisibility(args?:{organizationReferences?: INFOTABLE<EntityReference>, entityName?: STRING, entityType?: STRING, query?: QUERY}): NOTHING;

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
	 * Add visibility on a set of entities for multiple Organizations/OrganizationalUnits
	 * @param organizationReferences List of Organizations/OrganizationalUnits to use for visibility permissions
	 * @param includeDependents Include dependent projects
	 * @param projectName Project name
	 * @param tags Tags
	 * @return result
	 */
	AddEntityVisibilities(args?:{organizationReferences?: INFOTABLE<EntityReference>, includeDependents?: BOOLEAN, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Create a new model tag vocabulary
	 * @param name New vocabulary name
	 * @param description New vocabulary description
	 * @param dynamic Make the vocabulary dynamic
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateModelTagVocabulary(args?:{name?: STRING, description?: STRING, dynamic?: BOOLEAN, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

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
	 * Create a new thing shape
	 * @param name New thing shape name
	 * @param description New thing shape description
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @return result
	 */
	CreateThingShape(args?:{name?: STRING, description?: STRING, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;
	
	/**
	 * Create a new thingShape and set owner if provided
	 * @param name New thing shape name
	 * @param description New thing shape description
	 * @param projectName Name of the Project to add this entity to
	 * @param tags Tags
	 * @param ownerUserName The user name to set as owner of newly thingShape
	 * @return result
	 */
	CreateThingShapeWithOwner(args?:{name?: STRING, description?: STRING, projectName?: PROJECTNAME, tags?: TAGS, ownerUserName?: USERNAME}): NOTHING;

	/**
	 * Delete a notification content
	 * @param name Notification content name
	 * @return result
	 */
	DeleteNotificationContent(args?:{name?: STRING}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}

declare class SearchFunctions extends ResourceEntity {

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
	 * Retrieve a list of all model entities filtered by keyword query
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param types Entity types
	 * @param aspects Aspects to match
	 * @param excludedAspects Aspects to exclude
	 * @param maxSearchItems Maximum number of items to search
	 * @param tags Tags
	 * @return Matching entries
	 */
	SearchModelEntities(args?:{maxItems?: NUMBER, searchExpression?: STRING, types?: JSON, aspects?: JSON, excludedAspects?: JSON, maxSearchItems?: NUMBER, tags?: TAGS}): INFOTABLE<EntityDescriptor>;

	/**
	 * Check to see if an entity has a specific run time permission for a specific user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param user User name
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermissionForUser(args?:{name?: STRING, type?: STRING, user?: USERNAME}): BOOLEAN;

	/**
	 * Search data tag index for matches based on a term
	 * @param maxItems Maximum search results
	 * @param types Entity types
	 * @param names Vocabulary names
	 * @param term Term to search
	 * @return Search Results
	 */
	SearchDataTagTerm(args?:{maxItems?: NUMBER, types?: JSON, names?: JSON, term?: STRING}): INFOTABLE<EntityDescriptor>;

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
	 * Spotlight search
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param types Entity types
	 * @param withPermissions Include user permissions
	 * @param endDate Only return entities modified before this date
	 * @param aspects Aspects to match
	 * @param excludedAspects Aspects to exclude
	 * @param tags Tags
	 * @param thingTemplates Thing templates
	 * @param searchDescriptions Search descriptions in addition to names
	 * @param thingShapes Thing shapes
	 * @param sortBy Sort mode
	 * @param isAscending Ascending search
	 * @param projectName Project Name
	 * @param maxSearchItems Maximum number of items to search
	 * @param startDate Only return entities modified since this date
	 * @return Matching entries
	 */
	SpotlightSearch(args?:{maxItems?: NUMBER, searchExpression?: STRING, types?: JSON, withPermissions?: BOOLEAN, endDate?: DATETIME, aspects?: JSON, excludedAspects?: JSON, tags?: TAGS, thingTemplates?: JSON, searchDescriptions?: BOOLEAN, thingShapes?: JSON, sortBy?: STRING, isAscending?: BOOLEAN, projectName?: PROJECTNAME, maxSearchItems?: NUMBER, startDate?: DATETIME}): INFOTABLE<SpotlightSearch>;

	/**
	 * Retrieve a list of all collaboration entries filtered by keyword query and optional date range
	 * @param dataTags Tags
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param types Entity types
	 * @param names Entity names
	 * @param sourceTags Source Tags
	 * @param sources Sources
	 * @param modelTags Model Tags
	 * @param endDate End time
	 * @param maxSearchItems Maximum number of items to search
	 * @param startDate Start time
	 * @return Matching entries
	 */
	SearchCollaboration(args?:{dataTags?: TAGS, maxItems?: NUMBER, searchExpression?: STRING, types?: JSON, names?: JSON, sourceTags?: TAGS, sources?: JSON, modelTags?: TAGS, endDate?: DATETIME, maxSearchItems?: NUMBER, startDate?: DATETIME}): INFOTABLE<SearchResults>;

	/**
	 * Search data tag index for matches
	 * @param maxItems Maximum search results
	 * @param types Entity types
	 * @param tags Tags to search
	 * @return Search Results
	 */
	SearchDataTags(args?:{maxItems?: NUMBER, types?: JSON, tags?: TAGS}): INFOTABLE<EntityDescriptor>;

	/**
	 * Return a list of all the things that implement this template, including transient Things
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Name pattern
	 * @param thingTemplate Thing template
	 * @return Implementing Things including isPersistent flag
	 */
	SearchThingsByTemplateWithPersistent(args?:{maxItems?: NUMBER, nameMask?: STRING, thingTemplate?: THINGTEMPLATENAME}): INFOTABLE<SpotlightSearchWithPersistent>;

	/**
	 * Search vocabulary terms
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param names Vocabulary names
	 * @param type Entity type (DataTags, ModelTags)
	 * @param maxSearchItems Maximum number of items to search
	 * @return Search Results
	 */
	SearchVocabularyTerms(args?:{maxItems?: NUMBER, searchExpression?: STRING, names?: JSON, type?: STRING, maxSearchItems?: NUMBER}): INFOTABLE<SearchResults>;

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
	 * Search model tag index for matches
	 * @param maxItems Maximum search results
	 * @param types Entity types
	 * @param aspects Aspects to match
	 * @param excludedAspects Aspects to exclude
	 * @param tags Tags to search
	 * @return Search Results
	 */
	SearchModelTags(args?:{maxItems?: NUMBER, types?: JSON, aspects?: JSON, excludedAspects?: JSON, tags?: TAGS}): INFOTABLE<EntityDescriptor>;

	/**
	 * Search model tag index for matches based on a term
	 * @param maxItems Maximum search results
	 * @param term Term to search
	 * @return Search Results
	 */
	FindModelTagTerm(args?:{maxItems?: NUMBER, term?: STRING}): INFOTABLE<VocabularyTermList>;

	/**
	 * Retrieve a list of all model entities that are SQUEAL friendly
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param types Entity types
	 * @param aspects Aspects to match
	 * @param excludedAspects Aspects to exclude
	 * @param maxSearchItems Maximum number of items to search
	 * @param tags Tags
	 * @return Matching entries
	 */
	SearchModelEntitiesWithRestrictions(args?:{maxItems?: NUMBER, searchExpression?: STRING, types?: JSON, aspects?: JSON, excludedAspects?: JSON, maxSearchItems?: NUMBER, tags?: TAGS}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Return a list of all the things that implement this shape and their data
	 * @param thingShape Thing shape
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Name pattern
	 * @param query Query definition
	 * @param tags Tags to search on
	 * @return Implementing Things With Data
	 */
	SearchThingsByShape(args?:{thingShape?: THINGSHAPENAME, maxItems?: NUMBER, nameMask?: STRING, query?: QUERY, tags?: TAGS}): INFOTABLE<RootEntityList>;

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
	 * Search thing matches based on a term
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param types Entity types
	 * @param thingTemplates Thing templates
	 * @param identifierSearchExpression Identifier search expression
	 * @param modelTags Model Tags
	 * @param thingShapes Thing shapes
	 * @param query Value-based query expression
	 * @param aspects Aspects to match
	 * @param excludedAspects Aspects to exclude
	 * @param networks Networks
	 * @param maxSearchItems Maximum number of items to search
	 * @return Search Results
	 */
	SearchThings(args?:{maxItems?: NUMBER, searchExpression?: STRING, types?: JSON, thingTemplates?: JSON, identifierSearchExpression?: STRING, modelTags?: TAGS, thingShapes?: JSON, query?: QUERY, aspects?: JSON, excludedAspects?: JSON, networks?: JSON, maxSearchItems?: NUMBER}): INFOTABLE<SearchResults>;

	/**
	 * Search model tag index for matches based on a term
	 * @param maxItems Maximum search results
	 * @param types Entity types
	 * @param names Vocabulary names
	 * @param term Term to search
	 * @return Search Results
	 */
	SearchModelTagTerm(args?:{maxItems?: NUMBER, types?: JSON, names?: JSON, term?: STRING}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the current event definitions for this thing
	 * @param category Category to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Event definitions
	 */
	GetEventDefinitions(args?:{category?: STRING, dataShape?: DATASHAPENAME}): INFOTABLE<EventDefinition>;

	/**
	 * Search everything matches based on a term
	 * @param dataTags Tags
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param types Entity types
	 * @param modelTags Source Tags
	 * @param maxSearchItems Maximum number of items to search
	 * @return Search Results
	 */
	SearchAll(args?:{dataTags?: TAGS, maxItems?: NUMBER, searchExpression?: STRING, types?: JSON, modelTags?: TAGS, maxSearchItems?: NUMBER}): INFOTABLE<SearchResults>;

	/**
	 * Return a list of all the things that implement this template and their data
	 * @param maxItems Maximum number of items to return
	 * @param nameMask Name pattern
	 * @param query Query definition
	 * @param thingTemplate Thing template
	 * @param tags Tags to search on
	 * @return Implementing Things With Data
	 */
	SearchThingsByTemplate(args?:{maxItems?: NUMBER, nameMask?: STRING, query?: QUERY, thingTemplate?: THINGTEMPLATENAME, tags?: TAGS}): INFOTABLE<RootEntityList>;

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
	 * Search everything matches based on a term
	 * @param dataShapes Data shapes
	 * @param dataTags Tags
	 * @param dataTypes Data types
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param names Container names
	 * @param sources Sources
	 * @param sourceTags Source Tags
	 * @param modelTags Model Tags
	 * @param endDate End time
	 * @param maxSearchItems Maximum number of items to search
	 * @param startDate Start time
	 * @return Search Results
	 */
	SearchData(args?:{dataShapes?: JSON, dataTags?: TAGS, dataTypes?: JSON, maxItems?: NUMBER, searchExpression?: STRING, names?: JSON, sources?: JSON, sourceTags?: TAGS, modelTags?: TAGS, endDate?: DATETIME, maxSearchItems?: NUMBER, startDate?: DATETIME}): INFOTABLE<SearchResults>;

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
	 * Search mashup matches based on a term
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param thingTemplates Thing templates
	 * @param modelTags Tags
	 * @param thingShapes Thing shapes
	 * @param aspects Aspects to match
	 * @param excludedAspects Aspects to exclude
	 * @param maxSearchItems Maximum number of items to search
	 * @return Search Results
	 */
	SearchMashups(args?:{maxItems?: NUMBER, searchExpression?: STRING, thingTemplates?: JSON, modelTags?: TAGS, thingShapes?: JSON, aspects?: JSON, excludedAspects?: JSON, maxSearchItems?: NUMBER}): INFOTABLE<SearchResults>;

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
	 * Search people matches based on a term
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param modelTags Tags
	 * @param query Query expression
	 * @param aspects Aspects to match
	 * @param excludedAspects Aspects to exclude
	 * @param maxSearchItems Maximum number of items to search
	 * @return Search Results
	 */
	SearchPeople(args?:{maxItems?: NUMBER, searchExpression?: STRING, modelTags?: TAGS, query?: QUERY, aspects?: JSON, excludedAspects?: JSON, maxSearchItems?: NUMBER}): INFOTABLE<SearchResults>;

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
	 * Search data tag index for matches based on a term
	 * @param maxItems Maximum search results
	 * @param term Term to search
	 * @return Search Results
	 */
	FindDataTagTerm(args?:{maxItems?: NUMBER, term?: STRING}): INFOTABLE<VocabularyTermList>;

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
	 * Search vocabularies matches based on a term
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param types Entity types (DataTags, ModelTags)
	 * @param names Vocabulary names
	 * @param maxSearchItems Maximum number of items to search
	 * @return Search Results
	 */
	SearchTags(args?:{maxItems?: NUMBER, searchExpression?: STRING, types?: JSON, names?: JSON, maxSearchItems?: NUMBER}): INFOTABLE<SearchResults>;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}

declare class NotificationServices extends ResourceEntity {

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
	 * Get notification definitions mapping to an entity event. The type of entity is Thing, ThingTemplate or ThingShape as a string
	 * @param propertyName A property name
	 * @param alertName An alert name
	 * @param entityType A entity type
	 * @param entityName A entity name
	 * @param eventName A event name
	 * @return List of notification definition names
	 */
	GetDefinitionsForEvent(args?:{propertyName?: STRING, alertName?: STRING, entityType?: STRING, entityName?: STRING, eventName?: STRING}): INFOTABLE<NotificationDefinitionNames>;

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

declare class InfoTableFunctions extends ResourceEntity {

	/**
	 * Create an empty InfoTable
	 * @param infoTableName Name for the infotable
	 * @return Resultant data
	 */
	CreateInfoTable(args?:{infoTableName?: STRING}): INFOTABLE;

	/**
	 * Generic query
	 * @param t Info table to query
	 * @param query Query expression
	 * @return Resultant data
	 */
	Query<T = any>(args?:{t?: INFOTABLE<T>, query?: QUERY<T>}): INFOTABLE<T>;

	/**
	 * Less than or equal filter
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @param value Value to compare
	 * @return Resultant data
	 */
	LEFilter<T = any>(args?:{fieldName?: keyof T, t?: INFOTABLE<T>, value?: STRING}): INFOTABLE<T>;

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
	 * Extract a set of distinct values for a specified field
	 * @param t Info table to reduce to distinct rows
	 * @param columns Comma separated list of columns to determine distinct rows
	 * @return Resultant data
	 */
	Distinct<T = any>(args?:{t?: INFOTABLE<T>, columns?: STRING}): INFOTABLE<T>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Convert JSON into an info table
	 * @param json JSON content
	 * @return Resultant data
	 */
	FromJSON<T = any>(args?:{json?: JSONInfoTable<T>}): INFOTABLE<T>;

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
	 * Not equal filter
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @param value Value to compare
	 * @return Resultant data
	 */
	NEFilter<T = any>(args?:{fieldName?: keyof T, t?: INFOTABLE<T>, value?: STRING}): INFOTABLE<T>;

	/**
	 * Greater than or equal filter
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @param value Value to compare
	 * @return Resultant data
	 */
	GEFilter<T = any>(args?:{fieldName?: keyof T, t?: INFOTABLE<T>, value?: STRING}): INFOTABLE<T>;

	/**
	 * Create an InfoTable from a specified data shape
	 * @param infoTableName Name for the infotable
	 * @param dataShapeName Name of the data shape from which to create the infotable
	 * @return Resultant data
	 */
	CreateInfoTableFromDataShape<T extends DATASHAPENAME>(args?:{infoTableName?: STRING, dataShapeName?: T}): INFOTABLE<DataShapes[T]['__dataShapeType']>;

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
	 * Convert XML into an info table
	 * @param xml XML content
	 * @return Resultant data
	 */
	FromXML(args?:{xml?: XML}): INFOTABLE;

	/**
	 * Update rows that match a query with a provided set of values
	 * @param t Info table to query
	 * @param query Query expression
	 * @param values Fields/values to update
	 * @return Resultant data
	 */
	UpdateQuery<T = any>(args?:{t?: INFOTABLE<T>, query?: QUERY<T>, values?: INFOTABLE<T>}): INFOTABLE<T>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Pattern matching filter
	 * @param inclusive Include or exclude matching rows
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @param pattern Pattern to match
	 * @return Resultant data
	 */
	LikeFilter<T = any>(args?:{inclusive?: BOOLEAN, fieldName?: keyof T, t?: INFOTABLE<T>, pattern?: STRING}): INFOTABLE<T>;

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
	 * Filter by missing value(s)
	 * @param inclusive Include or exclude matching rows
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @return Resultant data
	 */
	MissingValueFilter<T = any>(args?:{inclusive?: BOOLEAN, fieldName?: keyof T, t?: INFOTABLE<T>}): INFOTABLE<T>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Location filter (nearness)
	 * @param inclusive Include or exclude matching rows
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @param location Center point of search
	 * @param units Search radius units (K = km, M = miles, N = nautical miles)
	 * @param searchRadius Search radius
	 * @return Resultant data
	 */
	NearFilter<T = any>(args?:{inclusive?: BOOLEAN, fieldName?: keyof T, t?: INFOTABLE<T>, location?: LOCATION, units?: STRING, searchRadius?: NUMBER}): INFOTABLE<T>;

	/**
	 * Filter by tag value(s)
	 * @param inclusive Include or exclude matching rows
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @param tags Tags to filter on
	 * @return Resultant data
	 */
	TagFilter<T = any>(args?:{inclusive?: BOOLEAN, fieldName?: keyof T, t?: INFOTABLE<T>, tags?: TAGS}): INFOTABLE<T>;

	/**
	 * Returns a single infotable with values from two tables.  The tables must have the same DataShape.
	 * @param t1 First table to join
	 * @param t2 Second table to join
	 * @return Resultant data
	 */
	Union<T = any>(args?:{t1?: INFOTABLE<T>, t2?: INFOTABLE<T>}): INFOTABLE<T>;

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
	 * Range filter
	 * @param inclusive Include or exclude matching rows
	 * @param minValue Minimum value for range
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @param maxValue Maximum value for range
	 * @return Resultant data
	 */
	BetweenFilter<T = any>(args?:{inclusive?: BOOLEAN, minValue?: STRING, fieldName?: keyof T, t?: INFOTABLE<T>, maxValue?: STRING}): INFOTABLE<T>;

	/**
	 * Return an infotable with a column renamed
	 * @param t Info table to rename
	 * @param from Old field name
	 * @param to New field name
	 * @return Resultant data
	 */
	RenameField<T = any>(args?:{t?: INFOTABLE<T>, from?: keyof T, to?: STRING}): INFOTABLE;

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
	 * Shift the time values for an infotable by a given amount
	 * @param t Info table to truncate
	 * @param shift Number of seconds to shift the values
	 * @param timestampField Name of the timestamp field
	 * @return Resultant data
	 */
	TimeShift<T = any, S extends KeysOfType<T, NUMBER | DATETIME> = any>(args?:{t?: INFOTABLE<T>, shift?: NUMBER, timestampField?: S}): INFOTABLE<T>;

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
	 * Perform time-based interpolation on an InfoTable
	 * @param mode Interpolation Mode (ROWCOUNT or INTERVAL)
	 * @param timeColumn Time column name
	 * @param t Info table to sort
	 * @param ignoreMissingData Ignore missing data in calculations
	 * @param stats Statistic type for interpolation (LAST, SMOOTH, AVG, TAVG, MIN, MAX)
	 * @param endDate End date of range
	 * @param columns Semicolon separated list of field names
	 * @param count Number of rows to return
	 * @param startDate Start date of range
	 * @return Resultant data
	 */
	Interpolate<T = any, S extends KeysOfType<T, NUMBER | DATETIME> = any>(args?:{
        mode?: 'ROWCOUNT' | 'INTERVAL', 
        timeColumn?: S, t?: INFOTABLE<T>, ignoreMissingData?: BOOLEAN, 
        stats?: 'LAST' | 'SMOOTH' | 'AVG' | 'TAVG' | 'MIN' | 'MAX', 
        endDate?: DATETIME, columns?: STRING, count?: NUMBER, startDate?: DATETIME}): INFOTABLE<T>;

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
	 * Delete rows that match a query
	 * @param t Info table to query
	 * @param query Query expression
	 * @return Resultant data
	 */
	DeleteQuery<T = any>(args?:{t?: INFOTABLE<T>, query?: QUERY<T>}): INFOTABLE<T>;

	/**
	 * 
	 * @param t Info table to aggregate
	 * @param columns Comma separated list of columns to aggregate
	 * @param aggregates Comma separated list of aggregate types (MIN, MAX, AVERAGE, SUM, COUNT)
	 * @param groupByColumns Comma separated list of columns to group on
	 * @return Resultant data
	 */
	Aggregate<T = any>(args?:{t?: INFOTABLE<T>, columns?: STRING, aggregates?: STRING, groupByColumns?: STRING}): INFOTABLE<T>;

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
	 * Pattern matching filter
	 * @param inclusive Include or exclude matching rows
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @param pattern Pattern to match
	 * @return Resultant data
	 */
	RegexFilter<T = any>(args?:{inclusive?: BOOLEAN, fieldName?: keyof T, t?: INFOTABLE<T>, pattern?: STRING}): INFOTABLE<T>;

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
	 * Returns an inner join of the two infotables
	 * @param columns2 Comma separated list of columns to include from table 2
	 * @param columns1 Comma separated list of columns to include from table 1
	 * @param joinType Join type (INNER, LEFT, RIGHT, FULL)
	 * @param t1 First table to join
	 * @param t2 Second table to join
	 * @param joinColumns1 Comma separated list of columns from table 1 on which to join
	 * @param joinColumns2 Comma separated list of columns from table 2 on which to join
	 * @return Resultant data
	 */
	Intersect<T1 = any, T2 = any>(args?:{columns2?: STRING, columns1?: STRING, joinType?: STRING, t1?: INFOTABLE<T1>, t2?: INFOTABLE<T2>, joinColumns1?: STRING, joinColumns2?: STRING}): INFOTABLE<Partial<T1> & Partial<T2>>;

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
	 * Convert an info table into JSON
	 * @param table Info table
	 * @return Resultant data
	 */
	ToJSON<T = any>(args?:{table?: INFOTABLE<T>}): JSONInfoTable<T>;

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
	 * Sort InfoTable on a specified field
	 * @param sortColumn Column on which to sort
	 * @param t Info table to sort
	 * @param ascending Ascending or descending sort (ascending = true)
	 * @return Resultant data
	 */
	Sort<T = any>(args?:{sortColumn?: keyof T, t?: INFOTABLE<T>, ascending?: BOOLEAN}): INFOTABLE<T>;

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
	 * Set of values filter
	 * @param inclusive Include or exclude matching rows
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @param matchValues Semicolon separated list of values to match
	 * @return Resultant data
	 */
	SetFilter<T = any>(args?:{inclusive?: BOOLEAN, fieldName?: keyof T, t?: INFOTABLE<T>, matchValues?: STRING}): INFOTABLE;

	/**
	 * Returns the top n rows
	 * @param maxItems Number of rows to return
	 * @param t Info table to truncate
	 * @return Resultant data
	 */
	TopN<T = any>(args?:{maxItems?: NUMBER, t?: INFOTABLE<T>}): INFOTABLE<T>;

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
	 * Greater than filter
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @param value Value to compare
	 * @return Resultant data
	 */
	GTFilter<T = any>(args?:{fieldName?: keyof T, t?: INFOTABLE<T>, value?: STRING}): INFOTABLE<T>;

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
	 * Equality filter with case sensitivity flag
	 * @param fieldName Field name on which to filter
	 * @param isCaseSensitive Flag to turn case sensitivity on/off
	 * @param t Info table to filter
	 * @param value Value to compare
	 * @return Resultant data
	 */
	EQFilter<T = any>(args?:{fieldName?: keyof T, isCaseSensitive?: BOOLEAN, t?: INFOTABLE<T>, value?: STRING}): INFOTABLE<T>;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Returns a transformation of a dataset with timestamp, name and value columns
	 * @param t Source data
	 * @param nameColumn Name column
	 * @param valueColumn Value column
	 * @param timestampColumn Timestamp column
	 * @return Resultant data
	 */
	Pivot<T = any, S extends KeysOfType<T, DATETIME | NUMBER> = any>(args?:{t?: INFOTABLE<T>, nameColumn?: keyof T, valueColumn?: keyof T, timestampColumn?: S}): INFOTABLE;

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
	 * Combine multiple time series data sets to an InfoTable
	 * @param tables Info tables to combine
	 * @return Resultant data
	 */
	Combine(args?:{tables?: INFOTABLE<TimeSeriesDataset>}): INFOTABLE;

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
	 * Add additional columns based on expressions to existing infotable
	 * @param types Comma separated list of base types for new fields
	 * @param t Info table to calculate on
	 * @param columns Comma separated list of new field names
	 * @param expressions Comma separated list of expressions
	 * @return Resultant data
	 */
	DeriveFields(args?:{types?: STRING, t?: INFOTABLE, columns?: STRING, expressions?: STRING}): INFOTABLE;

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
	 * Clone an info table
	 * @param t1 First table to join
	 * @return Resultant data
	 */
	Clone<T = any>(args?:{t1?: INFOTABLE<T>}): INFOTABLE<T>;

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
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Less than filter
	 * @param fieldName Field name on which to filter
	 * @param t Info table to filter
	 * @param value Value to compare
	 * @return Resultant data
	 */
	LTFilter<T = any>(args?:{fieldName?: keyof T, t?: INFOTABLE<T>, value?: STRING}): INFOTABLE<T>;

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

declare class EncryptionServices extends ResourceEntity {

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
	 * Returns decrypted data using the Base64 encoded key with valid sizes; 128, 192 or 256 bits
	 * @param encryptedData Data encrypted using Thingworx EncryptWithCustomKey service
	 * @param key Based64 encoded key with sizes of 128, 192 or 256 bits
	 * @return Decrypted data
	 */
	DecryptWithCustomKey(args?:{encryptedData?: STRING, key?: STRING}): STRING;

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
	 * Returns an encrypted password
	 * @param data Data to encrypt
	 * @return Encrypted data
	 */
	Encrypt(args?:{data?: STRING}): STRING;

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
	 * Returns a Base64 encoded AES encryption key. Supports AES key sizes, i.e. 128, 192 or 256 bits
	 * @param size Size of the key to be generated in bits. Supported key sizes are 128, 192 and 256 bits
	 * @return Base64 encoded key
	 */
	GenerateKey(args?:{size?: INTEGER}): STRING;

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
	 * Returns an decrypted string using a specified key
	 * @param data Data to decrypt
	 * @param key Encryption key to use (56 hex characters)
	 * @return Decrypted data
	 */
	DecryptWithKey(args?:{data?: STRING, key?: STRING}): STRING;

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
	 * Returns an encrypted string using a Base64 encoded key with AES 128 supported key lengths; 128, 192 or 256 bits
	 * @param data Plain text data to encrypt
	 * @param key Based64 encoded key with key size of 128, 192 or 256 bits
	 * @return Encrypted data
	 */
	EncryptWithCustomKey(args?:{data?: STRING, key?: STRING}): STRING;

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
	 * Returns an encrypted string using a specified key
	 * @param data Data to encrypt
	 * @param key Encryption key to use (56 hex characters)
	 * @return Encrypted data
	 */
	EncryptWithKey(args?:{data?: STRING, key?: STRING}): STRING;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Returns an encrypted property value
	 * @param data Data to encrypt
	 * @return Encrypted data
	 */
	EncryptPropertyValue(args?:{data?: STRING}): STRING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}

declare class SourceControlFunctions extends ResourceEntity {

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
	 * Import entities from source control
	 * @param entityFilter Import only these entities
	 * @param path Path from which to read the content
	 * @param useDefaultDataProvider Use the default data provider
	 * @param withSubsystems Include subsystems in the import
	 * @param repositoryName File repository from which to import the content
	 * @return result
	 */
	ImportSourceControlledEntities(args?:{entityFilter?: INFOTABLE<EntityDifference>, path?: STRING, useDefaultDataProvider?: BOOLEAN, withSubsystems?: BOOLEAN, repositoryName?: THINGNAME<"FileRepository">}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Export a list of entities for source control
	 * @param path Path to which to write the content
	 * @param endDate Date and time to which to export entities by their last modified date (optional)
	 * @param name File name to which to write the content
	 * @param includeDependents Include dependent projects
	 * @param collection Collection name you wish to export (optional)
	 * @param repositoryName File repository to which to export the content
	 * @param projectName Project name
	 * @param startDate Date and time from which to export entities by their last modified date (optional)
	 * @param tags Tags (optional)
	 * @return Path to exported entities
	 */
	ExportSourceControlledEntitiesToZipFile(args?:{path?: STRING, endDate?: DATETIME, name?: STRING, includeDependents?: BOOLEAN, collection?: STRING, repositoryName?: THINGNAME<"FileRepository">, projectName?: PROJECTNAME, startDate?: DATETIME, tags?: TAGS}): HYPERLINK;

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
	 * Export a list of entities for source control
	 * @param path Path to which to write the content
	 * @param endDate Date and time to which to export entities by their last modified date (optional)
	 * @param includeDependents Include dependent projects (optional)
	 * @param collection Collection name you wish to export (optional)
	 * @param repositoryName File repository to which to export the content
	 * @param projectName Project name (optional)
	 * @param startDate Date and time from which to export entities by their last modified date (optional)
	 * @param tags Tags (optional)
	 * @return result
	 */
	ExportSourceControlledEntities(args?:{path?: STRING, endDate?: DATETIME, includeDependents?: BOOLEAN, collection?: STRING, repositoryName?: THINGNAME<"FileRepository">, projectName?: PROJECTNAME, startDate?: DATETIME, tags?: TAGS}): NOTHING;

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
	 * Get the differences of entities from source control
	 * @param path Path from which to read the content
	 * @param withSubsystems Include subsystems in the import
	 * @param repositoryName File repository from which to import the content
	 * @return Entity differences
	 */
	GetSourceControlledEntitiesDiff(args?:{path?: STRING, withSubsystems?: BOOLEAN, repositoryName?: THINGNAME<"FileRepository">}): INFOTABLE<EntityReferenceWithDescription>;

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
	 * Get the differences of entities from source control
	 * @param path Path from which to read the content
	 * @param withSubsystems Include subsystems in the import
	 * @param repositoryName File repository from which to import the content
	 * @return Entity differences
	 */
	DiffSourceControlledEntities(args?:{path?: STRING, withSubsystems?: BOOLEAN, repositoryName?: THINGNAME<"FileRepository">}): INFOTABLE<EntityDifference>;

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

declare class ScriptServices extends ResourceEntity {

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
	 * Validate script syntax
	 * @param script Script content
	 * @return Result of compilation
	 */
	CheckScript(args?:{script?: STRING}): INFOTABLE<GenericResult>;

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
	 * Validate script syntax, returns with the line and column number
	 * @param script Script content
	 * @return Result of compilation
	 */
	CheckScriptWithLinesAndColumns(args?:{script?: STRING}): INFOTABLE<ScriptServiceResult>;

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

declare class CollectionFunctions extends ResourceEntity {

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
	 * Delete a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @param collectionName Collection name (Things, Users, ThingShapes, etc.)
	 * @return result
	 */
	DeleteCollectionRunTimePermission(args?:{principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING, collectionName?: STRING}): NOTHING;

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
	 * Export permissions for entities and collections
	 * @param path Path to which to write the permissions
	 * @param fileName Name of the file in which to write the permissions
	 * @param includeCollectionPermissions Export the collection permissions
	 * @param includeDependents Include dependent projects
	 * @param includeEntityPermissions Export the entity permissions
	 * @param repositoryName File repository to which to export the permissions
	 * @param projectName Project Name (optional)
	 * @param tags Tags (optional)
	 * @return result
	 */
	ExportUserPermissions(args?:{path?: STRING, fileName?: STRING, includeCollectionPermissions?: BOOLEAN, includeDependents?: BOOLEAN, includeEntityPermissions?: BOOLEAN, repositoryName?: THINGNAME<"FileRepository">, projectName?: PROJECTNAME, tags?: TAGS}): NOTHING;

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
	 * Get a list of assigned visibility permissions
	 * @param collectionName Collection name (Things, Users, ThingShapes, etc.)
	 * @return Permission list
	 */
	GetCollectionVisibilityPermissions(args?:{collectionName?: STRING}): INFOTABLE<Permissions>;

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
	 * @param collectionName Collection name (Things, Users, ThingShapes, etc.)
	 * @return Permission list
	 */
	GetCollectionRunTimePermissions(args?:{collectionName?: STRING}): INFOTABLE<Permissions>;

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
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @param collectionName Collection name (Things, Users, ThingShapes, etc.)
	 * @return result
	 */
	AddCollectionVisibilityPermission(args?:{principal?: STRING, principalType?: STRING, collectionName?: STRING}): NOTHING;

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
	 * Add a run time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param resource Resource name (* = all or enter a specific resource to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @param collectionName Collection name (Things, Users, ThingShapes, etc.)
	 * @return result
	 */
	AddCollectionRunTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, resource?: STRING, type?: STRING, principalType?: STRING, collectionName?: STRING}): NOTHING;

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
	 * Add a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param allow Permission (true = allow, false = deny)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @param collectionName Collection name (Things, Users, ThingShapes, etc.)
	 * @return result
	 */
	AddCollectionDesignTimePermission(args?:{principal?: STRING, allow?: BOOLEAN, type?: STRING, principalType?: STRING, collectionName?: STRING}): NOTHING;

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
	 * Import permissions for entities and collections
	 * @param path Path from which to read the permissions
	 * @param fileName Name of the file from which to read the permissions
	 * @param repositoryName File repository from which to import the permissions
	 * @return result
	 */
	ImportUserPermissions(args?:{path?: STRING, fileName?: STRING, repositoryName?: THINGNAME<"FileRepository">}): NOTHING;

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
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @param collectionName Collection name (Things, Users, ThingShapes, etc.)
	 * @return result
	 */
	DeleteCollectionDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING, collectionName?: STRING}): NOTHING;

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
	 * Get a list of assigned design time permissions
	 * @param collectionName Collection name (Things, Users, ThingShapes, etc.)
	 * @return Permission list
	 */
	GetCollectionDesignTimePermissions(args?:{collectionName?: STRING}): INFOTABLE<Permissions>;

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
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @param collectionName Collection name (Things, Users, ThingShapes, etc.)
	 * @return result
	 */
	DeleteCollectionVisibilityPermission(args?:{principal?: STRING, principalType?: STRING, collectionName?: STRING}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}

declare class CurrentSessionInfo extends ResourceEntity {

	/**
	 * Set value for specified location global session property
	 * @param name Parameter name
	 * @param value Parameter value
	 * @return result
	 */
	SetGlobalSessionLocationValue(args?:{name?: STRING, value?: LOCATION}): NOTHING;

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
	 * Get the currently logged in user's home mashup
	 * @return Home mashup for the currently logged in user
	 */
	GetCurrentUserHomeMashup(args?:{}): MASHUPNAME;

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
	 * Terminate all active sessions for a user
	 * @param userName User name
	 * @return result
	 */
	TerminateUserSessions(args?:{userName?: USERNAME}): NOTHING;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Set value for specified XML global session property
	 * @param name Parameter name
	 * @param value Parameter value
	 * @return result
	 */
	SetGlobalSessionXMLValue(args?:{name?: STRING, value?: XML}): NOTHING;

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
	 * Get the license text
	 * @return License text
	 */
	GetLicenseText(args?:{}): TEXT;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get global session values
	 * @return Parameter value
	 */
	GetGlobalSessionValues(args?:{}): INFOTABLE;

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
	 * Set value for specified string global session property
	 * @param name Parameter name
	 * @param value Parameter value
	 * @return result
	 */
	SetGlobalSessionStringValue(args?:{name?: STRING, value?: STRING}): NOTHING;

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
	 * Set value for specified boolean global session property
	 * @param name Parameter name
	 * @param value Parameter value
	 * @return result
	 */
	SetGlobalSessionBooleanValue(args?:{name?: STRING, value?: BOOLEAN}): NOTHING;

	/**
	 * Set value for specified InfoTable global session property
	 * @param name Parameter name
	 * @param value Parameter value
	 * @return result
	 */
	SetGlobalSessionInfoTableValue(args?:{name?: STRING, value?: INFOTABLE}): NOTHING;

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
	 * Get the currently logged in user
	 * @return Currently logged in user
	 */
	GetCurrentUser(args?:{}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Set value for specified JSON global session property
	 * @param name Parameter name
	 * @param value Parameter value
	 * @return result
	 */
	SetGlobalSessionJSONValue(args?:{name?: STRING, value?: JSON}): NOTHING;

	/**
	 * Get the license declined text
	 * @return License declined text
	 */
	GetLicenseDeclinedText(args?:{}): TEXT;

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
	 * Get the design time permissions for the current user
	 * @return Design time permissions for the current user
	 */
	GetDesignTimeCollectionPermissions(args?:{}): INFOTABLE<DesignTimePermissions>;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Get the organizations for the currently logged in user
	 * @return Organizations for the currently logged in user
	 */
	GetCurrentUserOrganizations(args?:{}): INFOTABLE<EntityList>;

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
	 * Get the groups for the currently logged in user
	 * @return Groups for the currently logged in user
	 */
	GetCurrentUserGroups(args?:{}): INFOTABLE<EntityList>;

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
	 * Get the currently logged in user's IP address
	 * @return IP Address
	 */
	GetCurrentIPAddress(args?:{}): STRING;

	/**
	 * Get the organizational units for the currently logged in user
	 * @return Organizations for the currently logged in user
	 */
	GetCurrentUserOrganizationalUnits(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the currently logged in users
	 * @param maxItems Maximum number of items to return
	 * @return The currently logged in users
	 */
	GetActiveUsers(args?:{maxItems?: NUMBER}): INFOTABLE<UserStatus>;

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
	 * Get the properties for the currently logged in user
	 * @return Currently logged in user properties
	 */
	GetCurrentUserExtensionProperties(args?:{}): INFOTABLE;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Get the currently logged in user's preferred language
	 * @return Preferred language
	 */
	GetCurrentUserLanguage(args?:{}): STRING;

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
	 * Set value for specified number global session property
	 * @param name Parameter name
	 * @param value Parameter value
	 * @return result
	 */
	SetGlobalSessionNumberValue(args?:{name?: STRING, value?: NUMBER}): NOTHING;

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
	 * Set value for specified datetime global session property
	 * @param name Parameter name
	 * @param value Parameter value
	 * @return result
	 */
	SetGlobalSessionDateTimeValue(args?:{name?: STRING, value?: DATETIME}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}

declare class DashboardFunctions extends ResourceEntity {

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
	 * Create a new dashboard
	 * @param title Dashboard title
	 * @param tags Dashboard tags
	 * @return Dashboard id
	 */
	CreateDashboard(args?:{title?: STRING, tags?: TAGS}): STRING;

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
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Return a list of the organization units that are sharing a dashboard
	 * @param dashboardID Dashboard ID
	 * @return List of organization units that are shared to the dashboard.  If the user is a member of the organization it will contain a membership field value set to true.
	 */
	GetSharedOrganizationUnits(args?:{dashboardID?: DASHBOARDNAME}): INFOTABLE;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Replace all existing config parameters for a dashboard item with new parameters
	 * @param itemID Dashboard item ID
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @param parameters Dashboard parameters
	 * @return result
	 */
	EditDashboardItemConfig(args?:{itemID?: STRING, dashboardID?: STRING, groupID?: STRING, parameters?: INFOTABLE<DashboardItemParameter>}): NOTHING;

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
	 * Rename a dashboard item
	 * @param itemID Dashboard group ID
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @param title Dashboard group title
	 * @return result
	 */
	RenameDashboardItem(args?:{itemID?: STRING, dashboardID?: STRING, groupID?: STRING, title?: STRING}): NOTHING;

	/**
	 * Rename a dashboard group
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @param title Dashboard group title
	 * @return result
	 */
	RenameDashboardGroup(args?:{dashboardID?: STRING, groupID?: STRING, title?: STRING}): NOTHING;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Load a dashboard
	 * @param dashboardID Dashboard id
	 * @return Dashboard definition
	 */
	GetDashboard(args?:{dashboardID?: STRING}): INFOTABLE<Dashboard>;

	/**
	 * Load a dashboard item
	 * @param itemID Dashboard item ID
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @return Dashboard item definition
	 */
	GetDashboardItem(args?:{itemID?: STRING, dashboardID?: STRING, groupID?: STRING}): INFOTABLE<DashboardItem>;

	/**
	 * Remove a dashboard group
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @return result
	 */
	RemoveDashboardGroup(args?:{dashboardID?: STRING, groupID?: STRING}): NOTHING;

	/**
	 * Load a dashboard items configuration parameters
	 * @param itemID Dashboard item ID
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @return Dashboard item definition
	 */
	GetDashboardItemConfig(args?:{itemID?: STRING, dashboardID?: STRING, groupID?: STRING}): INFOTABLE;

	/**
	 * Return a list of gadgets
	 * @param tags Tags
	 * @return List of compatible mashups
	 */
	SearchGadgets(args?:{tags?: TAGS}): INFOTABLE<RootEntityList>;

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
	 * Return a list of dashboards for the current user
	 * @return List of dashboards
	 */
	GetDashboardsForCurrentUser(args?:{}): INFOTABLE<DashboardList>;

	/**
	 * Add a dashboard group
	 * @param sequence Dashboard group sequence
	 * @param dashboardID Dashboard ID
	 * @param title Dashboard group title
	 * @return Dashboard group id
	 */
	AddDashboardGroup(args?:{sequence?: INTEGER, dashboardID?: STRING, title?: STRING}): STRING;

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
	 * Move a dashboard group
	 * @param sequence Dashboard item sequence
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @return result
	 */
	MoveDashboardGroup(args?:{sequence?: INTEGER, dashboardID?: STRING, groupID?: STRING}): NOTHING;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Rename a dashboard
	 * @param dashboardID Dashboard ID
	 * @param title Dashboard title
	 * @return result
	 */
	RenameDashboard(args?:{dashboardID?: STRING, title?: STRING}): NOTHING;

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
	 * Load a list of dashboard groups
	 * @param dashboardID Dashboard ID
	 * @return Dashboard group list
	 */
	GetDashboardGroupList(args?:{dashboardID?: STRING}): INFOTABLE<DashboardGroup>;

	/**
	 * Add a dashboard item
	 * @param sequence Dashboard item sequence
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @param mashupName Dashboard item mashup name
	 * @param title Dashboard item title
	 * @param parameters Dashboard item mashup parameters
	 * @return Dashboard item id
	 */
	AddDashboardItem(args?:{sequence?: INTEGER, dashboardID?: STRING, groupID?: STRING, mashupName?: MASHUPNAME, title?: STRING, parameters?: INFOTABLE}): STRING;

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
	 * Load a dashboard group
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @return Dashboard group definition
	 */
	GetDashboardGroup(args?:{dashboardID?: STRING, groupID?: STRING}): INFOTABLE<DashboardGroup>;

	/**
	 * Return a list of dashboards
	 * @param tags Dashboard tags
	 * @return List of dashboards
	 */
	SearchAllDashboards(args?:{tags?: TAGS}): INFOTABLE<Dashboard>;

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
	 * Remove the organization unit shared to the dashboard
	 * @param dashboardID Dashboard ID
	 * @param name Name of entity to organization to remove
	 * @param type Type of entity to organization to remove
	 * @return result
	 */
	RemoveSharedOrganizationUnit(args?:{dashboardID?: DASHBOARDNAME, name?: STRING, type?: STRING}): NOTHING;

	/**
	 * Check to see if an entity has a specific run time permission for the current user
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @return True/false based on if the user has the specified permission
	 */
	CheckPermission(args?:{name?: STRING, type?: STRING}): BOOLEAN;

	/**
	 * Delete an dashboard
	 * @param dashboardID Dashboard ID
	 * @return result
	 */
	DeleteDashboard(args?:{dashboardID?: DASHBOARDNAME}): NOTHING;

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
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Remove a dashboard item
	 * @param itemID Dashboard item ID
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @return result
	 */
	RemoveDashboardItem(args?:{itemID?: STRING, dashboardID?: STRING, groupID?: STRING}): NOTHING;

	/**
	 * Move dashboard items
	 * @param dashboardID Dashboard ID
	 * @param changes Dashboard item changes
	 * @return result
	 */
	MoveDashboardItems(args?:{dashboardID?: STRING, changes?: INFOTABLE<DashboardChange>}): NOTHING;

	/**
	 * Updates or adds provided config parameters for a dashboard item
	 * @param itemID Dashboard item ID
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @param parameters Dashboard parameters
	 * @return result
	 */
	EditDashboardItemParameters(args?:{itemID?: STRING, dashboardID?: STRING, groupID?: STRING, parameters?: INFOTABLE}): NOTHING;

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
	 * Shares an existing Dashboard with another organizational unit within that Organization
	 * @param dashboardID Dashboard ID
	 * @param name Name of entity to share with
	 * @param type Type of entity to share with
	 * @return result
	 */
	ShareDashboard(args?:{dashboardID?: DASHBOARDNAME, name?: STRING, type?: STRING}): NOTHING;

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
	 * Load a dashboard items configuration parameters
	 * @param itemID Dashboard item ID
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @return Dashboard item definition
	 */
	GetDashboardItemParameters(args?:{itemID?: STRING, dashboardID?: STRING, groupID?: STRING}): INFOTABLE<DashboardItemParameter>;

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
	 * Load a dashboard by title
	 * @param title Dashboard title
	 * @return Dashboard definition
	 */
	GetDashboardByTitle(args?:{title?: STRING}): INFOTABLE<Dashboard>;

	/**
	 * Load a dashboard group by title
	 * @param dashboardID Dashboard id
	 * @param title Dashboard title
	 * @return Dashboard group
	 */
	GetDashboardGroupByTitle(args?:{dashboardID?: STRING, title?: STRING}): INFOTABLE<DashboardGroup>;

	/**
	 * Load a list of dashboard items for a specific group
	 * @param dashboardID Dashboard ID
	 * @param groupID Dashboard group ID
	 * @return Dashboard item list
	 */
	GetDashboardItemList(args?:{dashboardID?: STRING, groupID?: STRING}): INFOTABLE<DashboardItem>;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}

declare class AlertFunctions extends ResourceEntity {

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
	 * Get the all the appropriate alert information for all the property definition base types
	 * @return Alert Configureation Summary
	 */
	GetAlertConfigurationInfo(args?:{}): INFOTABLE;

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
	 * Get the appropriate alert configuration DataShape for a given base type
	 * @param alertType Alert type
	 * @param baseType Base type
	 * @return Alert Summary
	 */
	GetAlertConfigurationForBaseType(args?:{alertType?: STRING, baseType?: BASETYPENAME}): INFOTABLE;

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
	 * Acknowledge an active alert
	 * @param sourceProperty Source property
	 * @param source Source thing
	 * @param message Alert message (optional)
	 * @return result
	 */
	AcknowledgeAlert(args?:{sourceProperty?: STRING, source?: STRING, message?: STRING}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Purge the alert history
	 * @param endDate End time
	 * @param startDate Start time
	 * @return result
	 */
	PurgeAlertHistory(args?:{endDate?: DATETIME, startDate?: DATETIME}): NOTHING;

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
	 * Acknowledge an active alert via a summary record
	 * @param alerts Alerts to acknowledge
	 * @param message Alert message (optional)
	 * @return result
	 */
	AcknowledgeAlertFromSummary(args?:{alerts?: INFOTABLE<AlertSummary>, message?: STRING}): NOTHING;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Query the alert summary for a specific thing
	 * @param maxItems Maximum number of items to return
	 * @param onlyUnacknowledged Show only unacknowledged alerts
	 * @param query Query definition
	 * @param name Thing name
	 * @param property Property name
	 * @param onlyAcknowledged Show only acknowledged alerts
	 * @return Alert Summary
	 */
	QueryAlertSummaryForThing(args?:{maxItems?: NUMBER, onlyUnacknowledged?: BOOLEAN, query?: QUERY, name?: THINGNAME, property?: STRING, onlyAcknowledged?: BOOLEAN}): INFOTABLE<AlertSummary>;

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
	 * Deletes an alert(s) from the summary record
	 * @param alerts Alerts to delete
	 * @return result
	 */
	DeleteAlertFromSummary(args?:{alerts?: INFOTABLE<AlertSummary>}): NOTHING;

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
	 * Get the appropriate alert types given base type
	 * @param baseType Base type
	 * @return Alert Summary
	 */
	GetAlertTypesForBaseType(args?:{baseType?: BASETYPENAME}): INFOTABLE<EntityList>;

	/**
	 * Query the alert summary
	 * @param maxItems Maximum number of items to return
	 * @param query Query definition
	 * @param onlyUnacknowledged Show only unacknowledged alerts
	 * @param onlyAcknowledged Show only acknowledged alerts
	 * @return Alert Summary
	 */
	QueryAlertSummary(args?:{maxItems?: NUMBER, query?: QUERY, onlyUnacknowledged?: BOOLEAN, onlyAcknowledged?: BOOLEAN}): INFOTABLE<AlertSummary>;

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
	 * Query the alert history
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Thing name
	 * @param startDate Start time
	 * @return Alert History
	 */
	QueryAlertHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: THINGNAME, startDate?: DATETIME}): INFOTABLE<AlertHistory>;

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

declare class ContentLoaderFunctions extends ResourceEntity {

	/**
	 * Invoke an HTTP delete request on a URL
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return result
	 */
	Delete(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Load XML content from a URL via HTTP PUT
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param content Posted content as XML document
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as XML document
	 */
	PutXML(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, content?: XML, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): XML;

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
	 * Load text content from a URL
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param timeout Optional timeout in seconds
	 * @param appendHeader Append header in response; optional: default value is true
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as text content
	 */
	LoadText(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, appendHeader?: BOOLEAN, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): STRING;

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
	 * Issue a URL call and get the returned cookies back
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Cookies
	 */
	GetCookies(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): STRING;

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
	 * Load text content from a URL via HTTP PUT
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param content Posted content as string
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param contentType Posted content type as string
	 * @param username Optional user name credential
	 * @return Loaded content as a string
	 */
	PutText(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, content?: STRING, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, contentType?: STRING, username?: STRING}): STRING;

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
	 * Get json content from a URL
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as text content
	 */
	GetJSON(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): JSON;

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
	 * Load JSON content from a URL
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as a JSON Object
	 */
	LoadJSON(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): JSON;

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
	 * Get text content from a URL
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param timeout Optional timeout in seconds
	 * @param appendHeader Append header in response; optional: default value is true
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as text content
	 */
	GetText(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, appendHeader?: BOOLEAN, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): STRING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Multipart data upload from Thingworx to and external target via HTTP POST
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param partsToSend Infotable where each field is a part to send
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param repository Repository to get file from to upload
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param pathOnRepository Path on repository to file
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Response as JSON Object
	 */
	PostMultipart(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, partsToSend?: INFOTABLE, workstation?: STRING, useProxy?: BOOLEAN, repository?: STRING, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, pathOnRepository?: STRING, domain?: STRING, username?: STRING}): JSON;

	/**
	 * Load JSON content from a URL via HTTP PUT
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param content Posted content as JSON object
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as JSON Object
	 */
	PutJSON(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, content?: JSON, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): JSON;

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
	 * Load XML content from a URL via HTTP POST
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param content Posted content as XML document. The xml content must start with an xml declaration, ie &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as XML document
	 */
	PostXML(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, content?: XML, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): XML;

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
	 * Load binary content from a URL via HTTP POST
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param content Posted content as image
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as BLOB Object
	 */
	PostBinary(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, proxyHost?: STRING, url?: STRING, content?: BLOB, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): BLOB;

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
	 * Load JSON content from a URL via HTTP POST
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param content Posted content as JSON object
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as JSON Object
	 */
	PostJSON(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, content?: JSON, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): JSON;

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
	 * Load Image content from a URL via HTTP POST
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param mimeType Mime Type
	 * @param useProxy Use Proxy server
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param content Posted content as image
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as BLOB Object
	 */
	PostImage(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, mimeType?: STRING, useProxy?: BOOLEAN, proxyHost?: STRING, url?: STRING, content?: IMAGE, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): BLOB;

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
	 * Load binary content from a URL via HTTP PUT
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param content Posted content as image
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as BLOB Object
	 */
	PutBinary(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, proxyHost?: STRING, url?: STRING, content?: BLOB, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): BLOB;

	/**
	 * Delete a design time permission
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	DeleteDesignTimePermission(args?:{principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get XML content from a URL
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as text content
	 */
	GetXML(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): XML;

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
	 * Load an image via URL and create/update a media entity
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param description Description for the media entity to save
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param proxyHost Proxy host
	 * @param url URL to load an image
	 * @param timeout Optional timeout in seconds
	 * @param tags Tags for the media entity to save
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param name Name of the media entity to save or update
	 * @param username Optional user name credential
	 * @return Loaded content as image
	 */
	LoadMediaEntity(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, description?: STRING, workstation?: STRING, useProxy?: BOOLEAN, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, tags?: TAGS, proxyPort?: INTEGER, password?: STRING, domain?: STRING, name?: STRING, username?: STRING}): IMAGELINK;

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
	 * Load binary content from a URL
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as an blob/binary primitive
	 */
	LoadBinary(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): BLOB;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Load text content from a URL via HTTP POST
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param content Posted content as string
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param contentType Posted content type as string
	 * @param username Optional user name credential
	 * @return Loaded content as string
	 */
	PostText(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, content?: STRING, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, contentType?: STRING, username?: STRING}): STRING;

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
	 * Load XML Content from a URL
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param withCookies Include cookies in response
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as XML document
	 */
	LoadXML(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, withCookies?: BOOLEAN, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): XML;

	/**
	 * Append additional tags to an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	AddTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Load image content from a URL
	 * @param proxyScheme Proxy scheme
	 * @param headers Optional HTTP headers
	 * @param ignoreSSLErrors Ignore SSL Certificate Errors
	 * @param useNTLM Use NTLM Authentication
	 * @param workstation Auth workstation
	 * @param useProxy Use Proxy server
	 * @param proxyHost Proxy host
	 * @param url URL to load
	 * @param timeout Optional timeout in seconds
	 * @param proxyPort Proxy port
	 * @param password Optional password credential
	 * @param domain Auth domain
	 * @param username Optional user name credential
	 * @return Loaded content as an image primitive
	 */
	LoadImage(args?:{proxyScheme?: STRING, headers?: JSON, ignoreSSLErrors?: BOOLEAN, useNTLM?: BOOLEAN, workstation?: STRING, useProxy?: BOOLEAN, proxyHost?: STRING, url?: STRING, timeout?: NUMBER, proxyPort?: INTEGER, password?: STRING, domain?: STRING, username?: STRING}): IMAGE;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}

declare class MetricServices extends ResourceEntity {

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
	 * Returns the Gauge metric value for the given key
	 * @param key The key of the Gauge
	 * @return Result
	 */
	GetGaugeMetric(args:{key: STRING}): VARIANT;

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
	 * get the current value of the Counter
	 * @param key The key of the Counter
	 * @return Result
	 */
	GetCounterMetric(args:{key: STRING}): VARIANT;

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
	 * increments a Counter by the given value
	 * @param basetype the BaseType associated with the values of the Counter
	 * @param value the value to increment the Counter by
	 * @param key the key of the Counter to increment
	 * @return result
	 */
	IncrementCounterMetric(args:{basetype: BASETYPENAME, value?: VARIANT, key: STRING}): NOTHING;

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
	 * Returns the current value of Statistic metric
	 * @param statisticType the StatisticType of the Statistic Metric
	 * @param key The key of the Statistic metric
	 * @param n the 'n' associated with the lastN Statistic Type
	 * @return Result
	 */
	GetStatisticMetricSnapshot(args:{statisticType: STRING, key: STRING, n?: INTEGER}): INFOTABLE;

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
	 * sets a Gauge metric to the given value
	 * @param basetype the BaseType associated with the values of the Gauge
	 * @param value the value to set the Gauge to - must be of same type as the basetype parameter
	 * @param key the key of the Gauge to set
	 * @return result
	 */
	SetGaugeMetric(args:{basetype: BASETYPENAME, value?: VARIANT, key: STRING}): NOTHING;

	/**
	 * removes the given value from a Set metric
	 * @param basetype the BaseType associated with the value being removed
	 * @param value the value to remove from the Set - values must be of same type as the basetype parameter
	 * @param key the key of the Set metric to remove a value from
	 * @return result
	 */
	RemoveFromSetMetric(args:{basetype: BASETYPENAME, value?: VARIANT, key: STRING}): NOTHING;

	/**
	 * decrements a Counter by the given value
	 * @param basetype the BaseType associated with the values of the Counter
	 * @param value the value to decrement the Counter by
	 * @param key the key of the Counter to decrement
	 * @return result
	 */
	DecrementCounterMetric(args:{basetype: BASETYPENAME, value?: VARIANT, key: STRING}): NOTHING;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * sets a Statistic metric to the given value
	 * @param statisticType the StatisticType of the Statistic Metric
	 * @param basetype the BaseType associated with the values of the Statistic
	 * @param value the value to assign to the Statistic - must be of same type as the basetype parameter
	 * @param key the key of the Statistic to update
	 * @param n the 'n' associated with the lastN Statistic Type
	 * @return result
	 */
	UpdateStatisticMetric(args:{statisticType: STRING, basetype: BASETYPENAME, value?: VARIANT, key: STRING, n?: INTEGER}): NOTHING;

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
	 * sets a List metric to the given value
	 * @param basetype the BaseType associated with the values of the List
	 * @param value the values in a single row InfoTable to set the List to - values must be of same type as the basetype parameter
	 * @param key the key of the List to set
	 * @return result
	 */
	SetListMetric(args:{basetype: BASETYPENAME, value?: INFOTABLE, key: STRING}): NOTHING;

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
	 * Returns values from List metric for the given key
	 * @param key the key of the List to set
	 * @return Result
	 */
	GetFromListMetric(args:{key: STRING}): INFOTABLE;

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
	 * Returns the current value of the Set metric for the given key
	 * @param key The key of the Set metric
	 * @return Result
	 */
	GetFromSetMetric(args:{key: STRING}): INFOTABLE;

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
	 * adds the given value to a Set metric
	 * @param basetype the BaseType associated with the value being added
	 * @param value the value to add to the Set - values must be of same type as the basetype parameter
	 * @param key the key of the Set metric to add to
	 * @return result
	 */
	AddToSetMetric(args:{basetype: BASETYPENAME, value?: VARIANT, key: STRING}): NOTHING;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}

declare class SubsystemMonitoring extends ResourceEntity {

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
	 * Get subsystem status
	 * @return Subsystem status
	 */
	GetSubsystemStatus(args?:{}): INFOTABLE<SubsystemStatus>;

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

declare class DataManagementServices extends ResourceEntity {

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
	 * Backup the ThingWorx Database
	 * @param mode Backup mode
	 * @return result
	 */
	Backup(args?:{mode?: STRING}): NOTHING;

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


declare interface Resources {

	/**
	 * Device function library
	 */
	DeviceFunctions: DeviceFunctions;
	/**
	 * Security-related services
	 */
	SecurityServices: SecurityServices;
	/**
	 * Runtime localization services
	 */
	RuntimeLocalizationFunctions: RuntimeLocalizationFunctions;
	/**
	 * Entity creation services
	 */
	EntityServices: EntityServices;
	/**
	 * Search function library
	 */
	SearchFunctions: SearchFunctions;
	/**
	 * Entity source control services
	 */
	NotificationServices: NotificationServices;
	/**
	 * Info table function library
	 */
	InfoTableFunctions: InfoTableFunctions;
	/**
	 * Encryption-related system services
	 */
	EncryptionServices: EncryptionServices;
	/**
	 * Entity source control services
	 */
	SourceControlFunctions: SourceControlFunctions;
	/**
	 * Script-related system services
	 */
	ScriptServices: ScriptServices;
	/**
	 * Collection library
	 */
	CollectionFunctions: CollectionFunctions;
	/**
	 * User session info
	 */
	CurrentSessionInfo: CurrentSessionInfo;
	/**
	 * Dashboard function library
	 */
	DashboardFunctions: DashboardFunctions;
	/**
	 * Alert function library
	 */
	AlertFunctions: AlertFunctions;
	/**
	 * Content loader function library
	 */
	ContentLoaderFunctions: ContentLoaderFunctions;
	/**
	 * Services for managing Metrics
	 */
	MetricServices: MetricServices;
	/**
	 * Subsystem monitoring library
	 */
	SubsystemMonitoring: SubsystemMonitoring;
	/**
	 * Data-related system services
	 */
	DataManagementServices: DataManagementServices;

}


declare const Resources: Resources;