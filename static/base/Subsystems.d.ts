declare class SubsystemEntity {

}

declare class ValueStreamProcessingSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
declare class WSCommunicationsSubsystem extends SubsystemEntity {

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Closes Endpoint Sessions based on the parameters (same as QueryEndpointSessions, but includes endpointId). Requires at least one parameter to be set.
	 * @param lastUsedAfter Any sessions most recently active after this date, excluding pings
	 * @param maxItems The maximum number of items to return, default 500
	 * @param endpointId The Endpoint's endpointId to query. Must be the only parameter if included.
	 * @param lastUsedBefore Any sessions most recently active before this date, excluding pings
	 * @param hasMultipleConnections If the session has multiple connections
	 * @param startedAfter Sessions started after date
	 * @param hasBoundThings If the session has Things bound
	 * @param authenticationType The AuthentictionType, as: AUTH_THINGWORX_APPKEY, AUTH_THINGWORX_BASIC, OTHER (likely a custom com.thingworx.security.authentication.SecurityClaimsAuthenticator), UNKNOWN
	 * @param appKeyName The name of the appKey being used for authentication, if there is one.
	 * @param userName The username being used for authentication, if there is one.
	 * @param startedBefore Sessions started before date
	 * @return Returns number of Sessions closed
	 */
	CloseEndpointSessions(args?:{lastUsedAfter?: DATETIME, maxItems?: NUMBER, endpointId?: GUID, lastUsedBefore?: DATETIME, hasMultipleConnections?: BOOLEAN, startedAfter?: DATETIME, hasBoundThings?: BOOLEAN, authenticationType?: STRING, appKeyName?: APPLICATIONKEYNAME, userName?: USERNAME, startedBefore?: DATETIME}): NUMBER;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * get current CommunicationLog level
	 * @return current CommunicationLogLevel
	 */
	GetCommunicationLogLevel(args?:{}): STRING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

	/**
	 * Queries all the Things associated with an Endpoint Session
	 * @param endpointId The Endpoint's endpointId to query
	 * @return Returns INFOTABLE of the Things associated with the Session
	 */
	GetBoundThingsForEndpoint(args?:{endpointId?: GUID}): INFOTABLE<EntityList>;

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
	 * set CommunicationLog level
	 * @param level Communication Level
	 * @return result
	 */
	SetCommunicationLogLevel(args?:{level?: STRING}): NOTHING;

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
	 * Queries all the current Endpoint Sessions
	 * @param lastUsedAfter Any sessions most recently active after this date, excluding pings
	 * @param maxItems The maximum number of items to return, default 500
	 * @param lastUsedBefore Any sessions most recently active before this date, excluding pings
	 * @param hasMultipleConnections If the session has multiple websocket connections
	 * @param startedAfter Sessions started after date
	 * @param hasBoundThings If the session has Things bound
	 * @param authenticationType The AuthentictionType, as: AUTH_THINGWORX_APPKEY, AUTH_THINGWORX_BASIC, OTHER (likely a custom com.thingworx.security.authentication.SecurityClaimsAuthenticator), UNKNOWN
	 * @param appKeyName The name of the appKey being used for authentication, if there is one.
	 * @param userName The username being used for authentication, if there is one.
	 * @param startedBefore Sessions started before date
	 * @return Returns INFOTABLE of the Endpoint Sessions
	 */
	QueryEndpointSessions(args?:{lastUsedAfter?: DATETIME, maxItems?: NUMBER, lastUsedBefore?: DATETIME, hasMultipleConnections?: BOOLEAN, startedAfter?: DATETIME, hasBoundThings?: BOOLEAN, authenticationType?: STRING, appKeyName?: APPLICATIONKEYNAME, userName?: USERNAME, startedBefore?: DATETIME}): INFOTABLE<CommunicationEndpointSession>;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}
declare class LoggingSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Update the settings for logging
	 * @param maxFileSizeInKB Maximum file size for each log file on disk.
	 * @param enableStackTracing Whether or not to enable stack traces in error logs
	 * @param enableScriptStackTracing Whether or not to enable script stack traces in the script error log
	 * @param maxFileHistory Maximum number of days to retain archive files on disk
	 * @return result
	 */
	UpdateLoggingSettings(args?:{maxFileSizeInKB?: INTEGER, enableStackTracing?: BOOLEAN, enableScriptStackTracing?: BOOLEAN, maxFileHistory?: INTEGER}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * Return the configuration table for Logging settings
	 * @return Result Indicator
	 */
	GetLoggingSettings(args?:{}): INFOTABLE;

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
declare class ClusteringSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Return status of the cluster.
	 * @return Cluster Status
	 */
	GetClusterStatus(args?:{}): JSON;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * Releases the single lock and a new server will get it
	 * @return 
	 */
	ToggleSingleton(args?:{}): BOOLEAN;

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
	 * It reprocesses all things.
	 * @return 
	 */
	ClusterRecovery(args?:{}): BOOLEAN;

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
declare class OrderedEventProcessingSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
declare class AlertProcessingSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Return the configuration table for Alert Processor settings
	 * @return Result Indicator
	 */
	GetAlertProcessorSettings(args?:{}): INFOTABLE;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Update the settings for alert processing
	 * @param dataPersistenceProvider The Persistence Provider that contains the active data provider.
	 * @param maximumQueueSize Maximum number of alert summary entries to queue (will be rejected after that)
	 * @param AnalyticsGateway Name of the Analytics Server gateway to use for ThingWatcher Analytics.
	 * @param isFiltered Apply visibility filters to alert queries
	 * @return result
	 */
	UpdateAlertProcessorSettings(args?:{dataPersistenceProvider?: PERSISTENCEPROVIDERNAME, maximumQueueSize?: NUMBER, AnalyticsGateway?: STRING, isFiltered?: BOOLEAN}): NOTHING;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
declare class UtilizationSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Writes the subscription statistics
	 * @param subscriptionNameRegEx A regex name pattern for the subscription
	 * @param maxItems Maximum number of items to return
	 * @param sortColumnName The name of the InfoTable result column field to sort on
	 * @param sortAscending The order to sort by; either Ascending or Descending
	 * @param entityNameRegEx A regex entity name pattern
	 * @param fileType The file type to report to [csv]
	 * @return Relative path to report file
	 */
	WriteEntitySubscriptionStatisticsReport(args?:{subscriptionNameRegEx?: STRING, maxItems?: NUMBER, sortColumnName?: STRING, sortAscending?: BOOLEAN, entityNameRegEx?: STRING, fileType?: STRING}): STRING;

	/**
	 * Reset Authentication statistics
	 * @return result
	 */
	ResetAuthenticationStatistics(args?:{}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Reset Entity Service statistics
	 * @param serviceNameRegEx A regex name pattern for the service
	 * @param entityNameRegEx A regex entity name pattern
	 * @return result
	 */
	ResetEntityServiceStatistics(args?:{serviceNameRegEx?: STRING, entityNameRegEx?: STRING}): NOTHING;

	/**
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Returns the service statistics
	 * @param maxItems Maximum number of items to return
	 * @param sortColumnName The name of the InfoTable result column field to sort on
	 * @param sortAscending The order to sort by; either Ascending or Descending
	 * @return Authentication utilization statistics
	 */
	GetAuthenticationStatistics(args?:{maxItems?: NUMBER, sortColumnName?: STRING, sortAscending?: BOOLEAN}): INFOTABLE<UtilizationStatistics>;

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
	 * Writes the service statistics
	 * @param serviceNameRegEx A regex name pattern for the service
	 * @param maxItems Maximum number of items to return
	 * @param sortColumnName The name of the InfoTable result column field to sort on
	 * @param sortAscending The order to sort by; either Ascending or Descending
	 * @param entityNameRegEx A regex entity name pattern
	 * @param fileType The file type to report to [csv]
	 * @return Relative path to report file
	 */
	WriteEntityServiceStatisticsReport(args?:{serviceNameRegEx?: STRING, maxItems?: NUMBER, sortColumnName?: STRING, sortAscending?: BOOLEAN, entityNameRegEx?: STRING, fileType?: STRING}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Writes the authentication statistics
	 * @param maxItems Maximum number of items to return
	 * @param sortColumnName The name of the InfoTable result column field to sort on
	 * @param sortAscending The order to sort by; either Ascending or Descending
	 * @param fileType The file type to report to [csv]
	 * @return Relative path to report file
	 */
	WriteAuthenticationStatisticsReport(args?:{maxItems?: NUMBER, sortColumnName?: STRING, sortAscending?: BOOLEAN, fileType?: STRING}): STRING;

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
	 * Reset Entity statistics
	 * @param characteristicNameRegEx A regex name pattern for the service, property, or subscription instance
	 * @param entityNameRegEx A regex entity name pattern
	 * @return result
	 */
	ResetEntityStatistics(args?:{characteristicNameRegEx?: STRING, entityNameRegEx?: STRING}): NOTHING;

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
	 * Reset statistics
	 * @param filterNamePrefix The prefix of the statistics to filter on and reset
	 * @return result
	 */
	ResetStatistics(args?:{filterNamePrefix?: STRING}): NOTHING;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Returns all utilization statistics
	 * @param maxItems Maximum number of items to return
	 * @param sortColumnName The name of the InfoTable result column field to sort on
	 * @param sortAscending The order to sort by; either Ascending or Descending
	 * @param filterNamePrefix The prefix of the statistics to filter on
	 * @return Utilization statistics
	 */
	GetStatistics(args?:{maxItems?: NUMBER, sortColumnName?: STRING, sortAscending?: BOOLEAN, filterNamePrefix?: STRING}): INFOTABLE<UtilizationStatistics>;

	/**
	 * Writes all utilization statistics
	 * @param maxItems Maximum number of items to return
	 * @param sortColumnName The name of the InfoTable result column field to sort on
	 * @param sortAscending The order to sort by; either Ascending or Descending
	 * @param filterNamePrefix The prefix of the statistics to filter on
	 * @param fileType The file type to report to [csv]
	 * @return Relative path to report file
	 */
	WriteStatisticsReport(args?:{maxItems?: NUMBER, sortColumnName?: STRING, sortAscending?: BOOLEAN, filterNamePrefix?: STRING, fileType?: STRING}): STRING;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Reset Entity Service statistics
	 * @param subscriptionNameRegEx A regex name pattern for the subscription
	 * @param entityNameRegEx A regex entity name pattern
	 * @return result
	 */
	ResetEntitySubscriptionStatistics(args?:{subscriptionNameRegEx?: STRING, entityNameRegEx?: STRING}): NOTHING;

	/**
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * Writes the entity statistics
	 * @param maxItems Maximum number of items to return
	 * @param sortColumnName The name of the InfoTable result column field to sort on
	 * @param sortAscending The order to sort by; either Ascending or Descending
	 * @param characteristicNameRegEx A regex name pattern for the service, property, or subscription instance
	 * @param entityNameRegEx A regex entity name pattern
	 * @param fileType The file type to report to [csv]
	 * @return Relative path to report file
	 */
	WriteEntityStatisticsReport(args?:{maxItems?: NUMBER, sortColumnName?: STRING, sortAscending?: BOOLEAN, characteristicNameRegEx?: STRING, entityNameRegEx?: STRING, fileType?: STRING}): STRING;

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
	 * Returns the entity statistics
	 * @param maxItems Maximum number of items to return
	 * @param sortColumnName The name of the InfoTable result column field to sort on
	 * @param sortAscending The order to sort by; either Ascending or Descending
	 * @param characteristicNameRegEx A regex name pattern for the service, property, or subscription instance
	 * @param entityNameRegEx A regex entity name pattern
	 * @return Entity utilization statistics
	 */
	GetEntityStatistics(args?:{maxItems?: NUMBER, sortColumnName?: STRING, sortAscending?: BOOLEAN, characteristicNameRegEx?: STRING, entityNameRegEx?: STRING}): INFOTABLE<UtilizationStatistics>;

	/**
	 * Returns the service statistics
	 * @param serviceNameRegEx A regex name pattern for the service
	 * @param maxItems Maximum number of items to return
	 * @param sortColumnName The name of the InfoTable result column field to sort on
	 * @param sortAscending The order to sort by; either Ascending or Descending
	 * @param entityNameRegEx A regex entity name pattern
	 * @return Service utilization statistics
	 */
	GetEntityServiceStatistics(args?:{serviceNameRegEx?: STRING, maxItems?: NUMBER, sortColumnName?: STRING, sortAscending?: BOOLEAN, entityNameRegEx?: STRING}): INFOTABLE<UtilizationStatistics>;

	/**
	 * Returns the subscription statistics
	 * @param subscriptionNameRegEx A regex name pattern for the subscription
	 * @param maxItems Maximum number of items to return
	 * @param sortColumnName The name of the InfoTable result column field to sort on
	 * @param sortAscending The order to sort by; either Ascending or Descending
	 * @param entityNameRegEx A regex entity name pattern
	 * @return Subscription utilization statistics
	 */
	GetEntitySubscriptionStatistics(args?:{subscriptionNameRegEx?: STRING, maxItems?: NUMBER, sortColumnName?: STRING, sortAscending?: BOOLEAN, entityNameRegEx?: STRING}): INFOTABLE<UtilizationStatistics>;

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
declare class ExportImportSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
declare class IntegrationSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * 
	 * @return 
	 */
	CollectConnectorRoutes(args?:{}): INFOTABLE;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Delete the mapping JSON corresponding to the given ID
	 * @param MappingIds The mapping rule Ids
	 * @return result
	 */
	DeleteMappings(args?:{MappingIds?: JSON}): NOTHING;

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
	 * Retrieve the mapping JSON for the given ID
	 * @param MappingId The mapping rule Id
	 * @return 
	 */
	GetMapping(args?:{MappingId?: STRING}): JSON;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Persist the mapping rule JSON with the specified ID
	 * @param MappingId The mapping rule Id
	 * @param ApiName The api/endpoint for which this mapping rule was created.
	 * @param MappingJSON The mapping rule JSON
	 * @param ConnectorName The connector on which this apiMap was generated.
	 * @return result
	 */
	StoreMapping(args?:{MappingId?: STRING, ApiName?: JSON, MappingJSON?: JSON, ConnectorName?: STRING}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

	/**
	 * 
	 * @param connectionParams 
	 * @param routeServiceCall 
	 * @param headerParams 
	 * @param paramsTable 
	 * @param endpointUri 
	 * @param resultType 
	 * @return 
	 */
	Invoke(args?:{connectionParams?: INFOTABLE, routeServiceCall?: BOOLEAN, headerParams?: INFOTABLE, paramsTable?: INFOTABLE, endpointUri?: STRING, resultType?: BASETYPENAME}): INFOTABLE;

	/**
	 * Gets a list of services that use a given APIMap
	 * @param MappingId The mapping rule Id
	 * @return 
	 */
	GetServiceListForApiMap(args?:{MappingId?: STRING}): INFOTABLE;

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
declare class EventProcessingSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * Return the configuration table for the Event Queue Processor settings
	 * @return Result Indicator
	 */
	GetEventQueueProcessorSettings(args?:{}): INFOTABLE;

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
declare class StreamProcessingSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
declare class FileTransferSubsystem extends SubsystemEntity {

	/**
	 * Get a list of queued transfer jobs
	 * @return A list of queued transfer jobs
	 */
	GetQueuedTransferJobs(args?:{}): INFOTABLE<FileTransferJob>;

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Is the file transfer job queued?
	 * @param tid Id of the transfer to find
	 * @return True=queued, False=not-queued
	 */
	IsTransferJobQueued(args?:{tid?: STRING}): BOOLEAN;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get queued transfer job for transfer job id
	 * @param tid Id of the transfer to find
	 * @return queued transfer job
	 */
	GetQueuedTransferJob(args?:{tid?: STRING}): INFOTABLE<FileTransferJob>;

	/**
	 * Get a service definition for this thing
	 * @param name Name
	 * @return Service definition
	 */
	GetServiceDefinition(args?:{name?: STRING}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get information on an active file transfer
	 * @param tid Id of the transfer to find
	 * @return Information the transfer
	 */
	GetActiveTransferJob(args?:{tid?: STRING}): INFOTABLE<FileTransferJob>;

	/**
	 * Get the configuration change history
	 * @return Configuration changes
	 */
	GetConfigurationChangeHistory(args?:{}): INFOTABLE<ConfigurationChange>;

	/**
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Cancel a file transfer
	 * @param reason Reason for cancelling
	 * @param transferId Id of the transfer to cancel
	 * @return 
	 */
	CancelTransfer(args?:{reason?: STRING, transferId?: STRING}): NOTHING;

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
	 * Copy a file between repositories
	 * @param async Should the service wait for the copy to complete
	 * @param sourceRepo Source Thing for copy
	 * @param metadata Defines metadata associated with file transfer
	 * @param targetRepo Destination Thing for copy
	 * @param targetFile Destination file for copy
	 * @param targetPath Destination path for copy
	 * @param queueable Indicates whether or not this file transfer can be enqueued if the source or target Thing is offline
	 * @param sourceFile Source file for copy
	 * @param sourcePath Source path for copy
	 * @param timeout How many seconds to wait for a result
	 * @return Transfer information
	 */
	Copy(args?:{async?: BOOLEAN, sourceRepo?: STRING, metadata?: JSON, targetRepo?: STRING, targetFile?: STRING, targetPath?: STRING, queueable?: BOOLEAN, sourceFile?: STRING, sourcePath?: STRING, timeout?: INTEGER}): INFOTABLE<FileTransferJob>;

	/**
	 * Is the file transfer job active?
	 * @param tid Id of the transfer to find
	 * @return True=active, False=inactive
	 */
	IsTransferJobActive(args?:{tid?: STRING}): BOOLEAN;

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
	 * Remove a queued file transfer
	 * @param tid Id of the transfer to remove
	 * @return 
	 */
	RemoveQueuedTransferJob(args?:{tid?: STRING}): NOTHING;

	/**
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Update the status of an active file transfer job
	 * @param transferJob TransferJob with updated values
	 * @param tid Id of the transfer to update
	 * @return 
	 */
	UpdateTransferStatus(args?:{transferJob?: INFOTABLE<FileTransferJob>, tid?: STRING}): NOTHING;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * Touch a transfer job by updating its timestamp.
	 * @param tid Id of the transfer to touch
	 * @return 
	 */
	TouchTransferJob(args?:{tid?: STRING}): NOTHING;

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
	 * Complete an active file transfer job
	 * @param tid Id of the transfer to update
	 * @return 
	 */
	CompleteTransfer(args?:{tid?: STRING}): NOTHING;

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
	 * Get a list of transfer jobs that are active
	 * @return A list of active transfer jobs
	 */
	GetActiveTransferJobs(args?:{}): INFOTABLE<FileTransferJob>;

	/**
	 * Get queued transfer job count
	 * @return queued transfer job count
	 */
	GetQueuedTransferJobCount(args?:{}): INTEGER;

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
	 * Get a list of queued transfer jobs by Thing name
	 * @param thingName Thing name
	 * @return A list of queued transfer jobs
	 */
	GetQueuedTransferJobsByThing(args?:{thingName?: STRING}): INFOTABLE<FileTransferJob>;

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
	 * Get queued transfer job count by Thing name
	 * @param thingName Thing name
	 * @return queued transfer job count
	 */
	GetQueuedTransferJobCountByThing(args?:{thingName?: STRING}): INTEGER;

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
declare class UserManagementSubsystem extends SubsystemEntity {

	/**
	 * Returns the login session timeout in minutes
	 * @return Session timeout in minutes
	 */
	GetPlatformSessionTimeout(args?:{}): NUMBER;

	/**
	 * Get the outgoing dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Sets if should restrict the number of concurrent user sessions
	 * @param restrict When true, users number of concurrent sessions will be restricted
	 * @return result
	 */
	SetRestrictConcurrentUserSessions(args?:{restrict?: BOOLEAN}): NOTHING;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

	/**
	 * Return a count of users
	 * @return Count of users
	 */
	GetUserCount(args?:{}): INTEGER;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Returns whether concurrent user sessions are restricted
	 * @return Setting state
	 */
	GetRestrictConcurrentUserSessions(args?:{}): BOOLEAN;

	/**
	 * Returns whether users bypass permissions when accessing services on their own User entity
	 * @return Setting state
	 */
	IsUserServiceSelfBypass(args?:{}): BOOLEAN;

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
	 * Sets if unauthenticated users should get redirect to Form Login instead of Basic Auth challenge
	 * @param formAuth When true, unauthenticated users will get redirected to Form Login
	 * @return result
	 */
	SetDefaultToHttpFormAuth(args?:{formAuth?: BOOLEAN}): NOTHING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Returns setting for defaulting unauthenticated users to Form Login
	 * @return Setting state
	 */
	IsDefaultToHttpFormAuth(args?:{}): BOOLEAN;

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
	 * Sets how permissions are evaluated when services are executed on User entities
	 * @param allow When true, users always can execute services on their own User entity
	 * @return result
	 */
	SetUserServiceSelfBypass(args?:{allow?: BOOLEAN}): NOTHING;

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
	 * Get application key information associated with the user specified. Must specify true to at least one parameter to return any application keys, true to both parameters if you want to return all application keys
	 * @param expiredKeys Expired keys
	 * @param userName User name
	 * @param unexpiredKeys Unexpired keys
	 * @return Result
	 */
	GetApplicationKeyExpirationInfo(args?:{expiredKeys?: BOOLEAN, userName?: USERNAME, unexpiredKeys?: BOOLEAN}): INFOTABLE;

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
	 * Delete application keys associated with the user specified. Must specify true to at least one parameter to delete any application keys, true to both parameters if you want to delete all application keys.
	 * @param deleteExpiredKeys Delete expired keys
	 * @param deleteUnexpiredKeys Delete unexpired keys
	 * @param userName User name
	 * @return result
	 */
	DeleteApplicationKeys(args?:{deleteExpiredKeys?: BOOLEAN, deleteUnexpiredKeys?: BOOLEAN, userName?: USERNAME}): NOTHING;

	/**
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * Deletes the specified thing shape from the list of those assigned as session shapes
	 * @param name Thing shape name
	 * @return result
	 */
	DeleteSessionShape(args?:{name?: THINGSHAPENAME}): NOTHING;

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
	 * Returns true if the specified key id associated with the user specified exists
	 * @param keyId The Key Id
	 * @param userName User name
	 * @return Result
	 */
	DoesApplicationKeyWithKeyIdExist(args?:{keyId?: STRING, userName?: USERNAME}): BOOLEAN;

	/**
	 * Return a list of thing shapes assigned to user sessions
	 * @return List of assigned shapes
	 */
	GetSessionShapes(args?:{}): INFOTABLE<EntityList>;

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
	 * Adds the specified thing shape to the list of those assigned as session shapes
	 * @param name Thing shape name
	 * @return result
	 */
	AddSessionShape(args?:{name?: THINGSHAPENAME}): NOTHING;

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
	 * Set the minutes for a session timeout with no activity
	 * @param sessionTimeout Session Timeout in minutes
	 * @return result
	 */
	SetPlatformSessionTimeout(args?:{sessionTimeout?: NUMBER}): NOTHING;

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
declare class TunnelSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get a list of tunnels that are active
	 * @return A list of active tunnels for a single server in single-server mode, or across a cluster of servers.
	 */
	GetActiveTunnels(args?:{}): INFOTABLE<TunnelSession>;

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
	 * Start a tunnel
	 * @param thing Name of the target Thing
	 * @param tunnel Name of the tunnel to open
	 * @param timeout How long the tunnel will remain idle (sec)
	 * @return 
	 */
	StartTunnel(args?:{thing?: THINGNAME<undefined, "Tunneling">, tunnel?: STRING, timeout?: INTEGER}): INFOTABLE<TunnelSession>;

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
	 * Get a list of transfer jobs that are pending or active
	 * @param reason Reason for cancelling
	 * @param tid Tunnel Id
	 * @return 
	 */
	CancelTunnel(args?:{reason?: STRING, tid?: STRING}): NOTHING;

	/**
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * Get a list of active tunnels
	 * @param tid Tunnel Id
	 * @return A list of active tunnels
	 */
	GetActiveTunnel(args?:{tid?: STRING}): INFOTABLE<TunnelSession>;

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
declare class MessageStoreSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Removes a queued service invocation from the message store
	 * @param thingName Name of the connected thing
	 * @param messageID ID of the service invocation to remove
	 * @return result
	 */
	DeleteServiceInvoke(args?:{thingName?: STRING, messageID?: INTEGER}): NOTHING;

	/**
	 * Set the initial delay (ms) before delivering messages to a recently connected thing.
	 * @param initialDelay Initial delay before delivering messages to a recently connected thing
	 * @return result
	 */
	SetInitialMessageDeliveryDelay(args?:{initialDelay?: NUMBER}): NOTHING;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Removes a queued property write from the message store
	 * @param propertyName Name of the property to remove
	 * @param thingName Name of the connected thing
	 * @return result
	 */
	DeletePropertyWrite(args?:{propertyName?: STRING, thingName?: STRING}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Returns all of the items waiting in the message store
	 * @return Message Store Entries
	 */
	GetAllMessageStoreEntries(args?:{}): INFOTABLE<MessageStoreList>;

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
	 * Get the maximum number of messages that can be queued per thing.
	 * @return Maximum Message Count
	 */
	GetMaxMessageCount(args?:{}): NUMBER;

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
	 * Removes all queued property writes from the message store
	 * @param thingName Name of the connected thing
	 * @return result
	 */
	ClearPropertyWrites(args?:{thingName?: STRING}): NOTHING;

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
	 * Returns all of the items waiting in the message store
	 * @param thingName Name of the connected thing
	 * @return Message Store Entries
	 */
	GetMessageStoreEntries(args?:{thingName?: STRING}): INFOTABLE<MessageStoreList>;

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
	 * Get the initial delay (ms) before delivering messages to a recently connected thing.
	 * @return Initial delay before delivering messages to a recently connected thing
	 */
	GetInitialMessageDeliveryDelay(args?:{}): NUMBER;

	/**
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

	/**
	 * Get the number of messages queued.
	 * @param thingName The name of the thing to query
	 * @return Message Count
	 */
	GetMessageCount(args?:{thingName?: STRING}): NUMBER;

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
	 * Removes all queued service invocations from the message store
	 * @param thingName Name of the connected thing
	 * @return result
	 */
	ClearServiceInvocations(args?:{thingName?: STRING}): NOTHING;

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
	 * Set the maximum number of messages that can be queued per thing.
	 * @param maxMessages Maximum number of messages
	 * @return result
	 */
	SetMaxMessageCount(args?:{maxMessages?: NUMBER}): NOTHING;

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
declare class LicensingSubsystem extends SubsystemEntity {

	/**
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

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
	 * User group usage Info
	 * @param groupType Type of user group
	 * @param appName App Name for query
	 * @param lastDays days to query
	 * @return 
	 */
	GetGroupHighWaterMarkData(args?:{groupType?: STRING, appName?: STRING, lastDays?: INTEGER}): INFOTABLE<LicenseGroupUsageDataShape>;

	/**
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Return info on one licensing feature
	 * @param featureName name of the feature to get license info for - optional
	 * @return 
	 */
	GetCurrentLicenseFeatureInfo(args?:{featureName?: STRING}): INFOTABLE<LicenseInfoTableDataShape>;

	/**
	 * List of License Usage information
	 * @return 
	 */
	GetLicenseUsageData(args?:{}): INFOTABLE<LicenseUsageDataShapeWithTimeStamp>;

	/**
	 * Infotable contains users usage information
	 * @param appName App Name for query
	 * @param lastDays days to query
	 * @return 
	 */
	GetUserGroupUsageInfo(args?:{appName?: STRING, lastDays?: INTEGER}): INFOTABLE<LicenseUserUsageDataShape>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Acquire License from License Server
	 * @return 
	 */
	AcquireLicense(args?:{}): STRING;

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
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * List of License features information
	 * @return 
	 */
	GetCurrentLicenseInfo(args?:{}): INFOTABLE<LicenseInfoTableDataShape>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

	/**
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * List of Apps
	 * @return 
	 */
	GetUniqueAppNames(args?:{}): INFOTABLE<LicenseAppNamesDataShape>;

	/**
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Checkout composer license.
	 * @return 
	 */
	CheckoutComposerLicense(args?:{}): BOOLEAN;

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
	 * Returns the instance Id
	 * @return 
	 */
	GetInstanceId(args?:{}): STRING;

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
	 * If license has an expiration date return the number of days remaining.  Returns null if there is no limit
	 * @return 
	 */
	GetDaysRemainingInLicense(args?:{}): INTEGER;

	/**
	 * Returns the Customer Id of this instance
	 * @return 
	 */
	GetCustomerId(args?:{}): STRING;

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
	 * Returns the license state
	 * @return 
	 */
	GetLicenseState(args?:{}): STRING;

	/**
	 * Returns current license model type
	 * @return 
	 */
	GetCurrentLicenseModelType(args?:{}): STRING;

	/**
	 * write license usage information in reports directory
	 * @return 
	 */
	WriteLicenseUsageData(args?:{}): STRING;

	/**
	 * Purge old License Usage information
	 * @return result
	 */
	PurgeLicenseUsageData(args?:{}): NOTHING;

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
	 * Purge App Licensed user Access information older than two years
	 * @return result
	 */
	PurgeLicensedUserAccessData(args?:{}): NOTHING;

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
declare class FederationSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

	/**
	 * Get a list of things published to a specific subscriber (based on visibility permissions)
	 * @param maxItems Maximum number of items to return
	 * @param subscriberName Subscriber name
	 * @return List of published things
	 */
	GetPublishedThings(args?:{maxItems?: NUMBER, subscriberName?: STRING}): INFOTABLE<EntityList>;

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
	 * Get a list of subscribed things for a specific subscriber
	 * @param maxItems Maximum number of items to return
	 * @param subscriberName Subscriber name
	 * @return List of subscribed things
	 */
	GetActiveSubscriptions(args?:{maxItems?: NUMBER, subscriberName?: STRING}): INFOTABLE<EntityList>;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get a list of all published things
	 * @param maxItems Maximum number of items to return
	 * @return List of all published things
	 */
	GetAllPublishedThings(args?:{maxItems?: NUMBER}): INFOTABLE<EntityList>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Get this server's name
	 * @return Server name
	 */
	GetServerName(args?:{}): STRING;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * Get the subscriber status
	 * @return Current subscriber status
	 */
	GetSubscriberStatus(args?:{}): INFOTABLE<SubscriberStatus>;

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
	 * Get a list of subscribed things for a specific subscriber
	 * @param maxItems Maximum number of items to return
	 * @return List of subscribed things
	 */
	GetAllActiveSubscriptions(args?:{maxItems?: NUMBER}): INFOTABLE<EntityList>;

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
	 * Get a list of published things
	 * @param thingShape Filter only for devices that implement this shape
	 * @param maxItems Maximum number of items to return
	 * @param query Query definition
	 * @return List of published things
	 */
	SearchPublishedThings(args?:{thingShape?: THINGSHAPENAME, maxItems?: NUMBER, query?: QUERY}): INFOTABLE<EntityList>;

	/**
	 * Get user permissions
	 * @param name Target name (or wildcard)
	 * @param user User name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForUser(args?:{name?: STRING, user?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;


}
declare class DataTableProcessingSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
declare class PlatformSubsystem extends SubsystemEntity {

	/**
	 * Return a list of entity types and a count of how many are implemented
	 * @return List of entity types
	 */
	GetEntityUsageCount(args?:{}): INFOTABLE<EntityUsageCount>;

	/**
	 * Return the configuration settings for enabling/disabling mashup features
	 * @return JSON object with mashup configuration values
	 */
	GetMashupConfiguration(args?:{}): JSON;

	/**
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

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
	 * Return a list of data exports
	 * @return List of data exports
	 */
	GetDataExportListing(args?:{}): INFOTABLE<ExportFile>;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Return the URL with API key to connect with Google
	 * @return Return the Url API Key to connect with Google
	 */
	GetGoogleMapsConnectionString(args?:{}): STRING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Return a list of entity types and a count of how many are implemented
	 * @param modelTags Model Tags
	 * @param type Entity type (*, Things, DataShapes, etc.)
	 * @return List of entity types
	 */
	GetEntityCount(args?:{modelTags?: TAGS, type?: STRING}): INFOTABLE<EntityCount>;

	/**
	 * Return a list of Extensions associated with the specified ExtensionPackage that are being used
	 * @param packageName ExtensionPackage name
	 * @return list of Extensions being used
	 */
	GetExtensionsInUse(args?:{packageName?: STRING}): INFOTABLE<NetworkConnection>;

	/**
	 * Return a list of all style themes
	 * @param minimalSerialization Indicates if content should be minimized for mashup runtime
	 * @return List of style themes
	 */
	GetAllStyleThemes(args?:{minimalSerialization?: BOOLEAN}): JSON;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): JSON;

	/**
	 * Returns the default property persistence provider name
	 * @return Default property persistence provider name
	 */
	GetDefaultPropertyPersistenceProviderName(args?:{}): STRING;

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
	 * Returns the default data persistence provider package name
	 * @return Default data persistence provider package name
	 */
	GetDefaultDataPersistenceProviderPackageName(args?:{}): STRING;

	/**
	 * Check if a configuration table is a multi-row table
	 * @param tableName Configuration table name
	 * @return Flag if table is multi-row or not
	 */
	IsMultiRowTable(args?:{tableName?: STRING}): BOOLEAN;

	/**
	 * Reports the persistence store information of the specified persistence provider
	 * @param persistenceProviderName Persistence Provider Entity Name
	 * @return An infotable containing persistence store information for the specified persistence provider
	 */
	GetPersistenceInformation(args?:{persistenceProviderName?: PERSISTENCEPROVIDERNAME}): INFOTABLE<PersistenceInformation>;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

	/**
	 * Returns the default property persistence provider package name
	 * @return Default property persistence provider package name
	 */
	GetDefaultPropertyPersistenceProviderPackageName(args?:{}): STRING;

	/**
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * Returns the one and only model persistence provider name
	 * @return The model persistence provider name
	 */
	GetModelPersistenceProviderName(args?:{}): STRING;

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
	 * Return the learning connector configuration
	 * @return Properties of the Learning Connector configuration
	 */
	GetLearningConnectorConfiguration(args?:{}): JSON;

	/**
	 * Deletes the specified ExtensionPackage and all associated Extensions if not in use
	 * @param packageName ExtensionPackage name
	 * @return result
	 */
	DeleteExtensionPackage(args?:{packageName?: STRING}): NOTHING;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Return the current software version
	 * @return Software version
	 */
	GetThingworxVersion(args?:{}): STRING;

	/**
	 * Start background metrics collection
	 * @return Status of the background metrics collection thread
	 */
	StartMetricsCollectionService(args?:{}): STRING;

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
	 * Reports the persistence store schema metadata of the specified persistence provider
	 * @param persistenceProviderName Persistence Provider Entity Name
	 * @return An infotable containing persistence store schema metadata for the specified persistence provider
	 */
	GetPersistenceSchemaMetadata(args?:{persistenceProviderName?: PERSISTENCEPROVIDERNAME}): INFOTABLE<PersistenceSchemaMetadata>;

	/**
	 * Return a count of things
	 * @return Count of things
	 */
	GetThingCount(args?:{}): INTEGER;

	/**
	 * Get summary information
	 * @return Summary information
	 */
	GetSummaryInformation(args?:{}): INFOTABLE<EntitySummary>;

	/**
	 * Return a list of valid aspects
	 * @param characteristic Usage type (PropertyDefinition, FieldDefinition, etc.)
	 * @param baseType Base type (STRING, NUMBER, BOOLEAN, etc.)
	 * @return List of aspects
	 */
	GetAspects(args?:{characteristic?: STRING, baseType?: STRING}): INFOTABLE<EntityList>;

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
	 * Is this an evaluation license
	 * @return Evaluation status
	 */
	IsInternalVersion(args?:{}): BOOLEAN;

	/**
	 * Returns the one and only model persistence provider package name
	 * @return The model persistence provider package name
	 */
	GetModelPersistenceProviderPackageName(args?:{}): STRING;

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
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

	/**
	 * Set an entire configuration table
	 * @param configurationTable Configuration table content
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	SetConfigurationTable(args?:{configurationTable?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Return a list of entity exports
	 * @return List of entity exports
	 */
	GetEntityExportListing(args?:{}): INFOTABLE<ExportFile>;

	/**
	 * Generates and writes an entity usage report to Thingworx storage
	 * @return Path of the generated report
	 */
	WriteEntityUsageReport(args?:{}): STRING;

	/**
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Return a list of Extensions associated with the specified ExtensionPackage
	 * @param packageName ExtensionPackage name
	 * @return list of ExtensionPackages
	 */
	GetExtensionPackageDetails(args?:{packageName?: STRING}): INFOTABLE<EntityDescriptor>;

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
	 * Return a list of all style definitions
	 * @param minimalSerialization Indicates if content should be minimized for mashup runtime
	 * @return List of style definitions
	 */
	GetAllStyleDefinitions(args?:{minimalSerialization?: BOOLEAN}): JSON;

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
	 * Return a list of all state definitions
	 * @param minimalSerialization Indicates if content should be minimized for mashup runtime
	 * @return List of state definitions
	 */
	GetAllStateDefinitions(args?:{minimalSerialization?: BOOLEAN}): JSON;

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
	 * Set the Google Api Url
	 * @param googleMapsConnectionString Required string to connect with Google
	 * @return result
	 */
	SetGoogleMapsConnectionString(args?:{googleMapsConnectionString?: STRING}): NOTHING;

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
	 * Is this an evaluation license
	 * @return Evaluation status
	 */
	IsEvaluationVersion(args?:{}): BOOLEAN;

	/**
	 * Stop background metrics collection
	 * @return Status of the background metrics collection thread
	 */
	StopMetricsCollectionService(args?:{}): STRING;

	/**
	 * Return a list of available statistics for the server
	 * @return List of available statistics
	 */
	GetPlatformStatsList(args?:{}): INFOTABLE<PropertyDefinition>;

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
	 * Filter content type on requests (false is insecure)
	 * @param filterContentType False if content type is not filtered (false is insecure)
	 * @return result
	 */
	SetFilterContentType(args?:{filterContentType?: BOOLEAN}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Return a list of Extension Packages
	 * @return list of ExtensionPackages
	 */
	GetExtensionPackageList(args?:{}): INFOTABLE<ExtensionPackage>;

	/**
	 * Returns the default data persistence provider name
	 * @return Default data persistence provider name
	 */
	GetDefaultDataPersistenceProviderName(args?:{}): STRING;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Return a list of valid base types
	 * @param characteristic Usage type (PropertyDefinition, FieldDefinition, etc.)
	 * @return List of base types
	 */
	GetBaseTypes(args?:{characteristic?: STRING}): INFOTABLE<EntityList>;

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
	 * Reports the persistence store information for all current persistence providers
	 * @return An infotable containing persistence store information for all persistence providers
	 */
	GetAllPersistenceInformation(args?:{}): INFOTABLE<AllPersistenceInformation>;

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
	 * Return a list of values for statistics on the server
	 * @return Statistics List
	 */
	GetPlatformStats(args?:{}): INFOTABLE<SystemStatisticsByDataType>;

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
	 * Returns entity usage report
	 * @return entity usage
	 */
	GetEntityUsageReport(args?:{}): INFOTABLE<EntityUsageReport>;

	/**
	 * Return the license state of the platform
	 * @return The platform license's state
	 */
	GetLicenseState(args?:{}): INFOTABLE<LicenseStatusShape>;

	/**
	 * Return a list of platform identifiers
	 * @return List containing platform identifiers
	 */
	GetPlatforms(args?:{}): INFOTABLE<PropertyList>;

	/**
	 * Returns property write report
	 * @return property write report
	 */
	GetPropertyWriteReport(args?:{}): INFOTABLE<PropertyWriteReport>;

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
	 * Allow method switching with request parameters (true is insecure)
	 * @param allowMethodSwitch True if method switching is allowed (true is insecure)
	 * @return result
	 */
	SetAllowMethodSwitch(args?:{allowMethodSwitch?: BOOLEAN}): NOTHING;

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
declare class AuditSubsystem extends SubsystemEntity {

	/**
	 * Put all the audit entries older than the given date in Offline storage
	 * @param olderThanDate Archive all entries older than this date
	 * @return 
	 */
	ArchiveAuditHistory(args?:{olderThanDate?: DATETIME}): NOTHING;

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Query the historical audit entries
	 * @param maxItems Maximum number of items to return
	 * @param auditCategory Limit results to the specified audit category localization token
	 * @param endDate The latest audit date to query
	 * @param query Query definition
	 * @param locale The localizationTable locale that is used to localize the results
	 * @param startDate The earliest audit date to query
	 * @return Historical Audits
	 */
	QueryAuditHistory(args?:{maxItems?: NUMBER, auditCategory?: STRING, endDate?: DATETIME, query?: QUERY, locale?: STRING, startDate?: DATETIME}): INFOTABLE<AuditHistory>;

	/**
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Creates a localized zip archive of all the provided archived audit history chunks.
	 * @param endDate The latest audit date to export archive data
	 * @param targetFileName The filename of the export. Defaults to AuditArchiveExport
	 * @param targetPath The path where the export will be stored, defaults to "/AuditArchiveExport/"
	 * @param locale The locale of the export. Defaults to the Default locale
	 * @param targetRepositoryName Which FileRepository the Export will be stored in.
	 * @param startDate The earliest audit date to export archive data
	 * @return 
	 */
	ExportAuditData(args?:{endDate?: DATETIME, targetFileName?: STRING, targetPath?: STRING, locale?: STRING, targetRepositoryName?: THINGNAME<"FileRepository">, startDate?: DATETIME}): NOTHING;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * clean up all the audit archive data older than the given date
	 * @param olderThanDate clean up all Audit Archive data older than this date
	 * @return  Offline Audit Archive Cleanup
	 */
	CleanUpOfflineAudit(args?:{olderThanDate?: DATETIME}): INFOTABLE<OfflineAuditArchiveCleanUpShape>;

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
	 * Remove all the audit entries older than the given date from database
	 * @return 
	 */
	PurgeAuditData(args?:{}): NOTHING;

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
declare class WSExecutionProcessingSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
declare class SCIMSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Return the User Provisioning Exclusion List
	 * @return List of excluded users from provisioning
	 */
	GetUserProvisioningExclusionList(args?:{}): INFOTABLE<UserProvisioningExclusionList>;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): JSON;

	/**
	 * Set the User Provisioning Defaults
	 * @param userDefaults The user provisioning user defaults
	 * @return result
	 */
	SetUserProvisioningDefaults(args?:{userDefaults?: INFOTABLE<UserProvisioningDefaultSettings>}): NOTHING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Returns Provisioning Options
	 * @return User Provisioning Options
	 */
	GetProvisioningOptions(args?:{}): INFOTABLE<SCIMProvisioningOptions>;

	/**
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Set the Group Provisioning Exclusion List
	 * @param groups The group provisioning group exclusion list to set
	 * @return result
	 */
	SetGroupProvisioningExclusionList(args?:{groups?: INFOTABLE<GroupProvisioningExclusionList>}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

	/**
	 * Set the User Provisioning Exclusion List
	 * @param users The user provisioning user exclusion list to set
	 * @return result
	 */
	SetUserProvisioningExclusionList(args?:{users?: INFOTABLE<UserProvisioningExclusionList>}): NOTHING;

	/**
	 * Return the User Provisioning User Default Settings
	 * @return User Defaults
	 */
	GetUserProvisioningDefaults(args?:{}): INFOTABLE<UserProvisioningDefaultSettings>;

	/**
	 * Delete all rows from a multi-row configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteAllConfigurationTableRows(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Return the Group Provisioning Exclusion List
	 * @return List of excluded group from provisioning
	 */
	GetGroupProvisioningExclusionList(args?:{}): INFOTABLE<GroupProvisioningExclusionList>;

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
	 * Return the Group Provisioning Group Default Settings
	 * @return Group Defaults
	 */
	GetGroupProvisioningDefaults(args?:{}): INFOTABLE<GroupProvisioningDefaultSettings>;

	/**
	 * Set the Group Provisioning Defaults
	 * @param groupDefaults The group provisioning group defaults
	 * @return result
	 */
	SetGroupProvisioningDefaults(args?:{groupDefaults?: INFOTABLE<GroupProvisioningDefaultSettings>}): NOTHING;

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
	 * Sets Provisioning Options
	 * @param provisioningOptions 
	 * @return result
	 */
	SetProvisioningOptions(args?:{provisioningOptions?: INFOTABLE<SCIMProvisioningOptions>}): NOTHING;

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
declare class WorkflowSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
declare class SolutionCentralSubsystem extends SubsystemEntity {

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
	 * Stops the sub-system
	 * @return result
	 */
	Stop(args?:{}): NOTHING;

	/**
	 * Starts the sub-system
	 * @return result
	 */
	Start(args?:{}): NOTHING;

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
	 * List the solutions from Solution Central
	 * @param topResult Return one or all results of given group/artifact pair
	 * @param returnOtherVersionsCount Return available versions count
	 * @param groupId Filter the results by Solution groupId
	 * @param limit Number of results to display
	 * @param artifactId Filter the results by Solution artifactId.
	 * @param sortBy Sort the results by "publishedAt" or "version"
	 * @return Successful solutions retrieval
	 */
	ListSolutions(args?:{topResult?: BOOLEAN, returnOtherVersionsCount?: BOOLEAN, groupId?: STRING, limit?: INTEGER, artifactId?: STRING, sortBy?: STRING}): INFOTABLE<SolutionInfo>;

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
	 * Get the subscriber state
	 * @return Current subscriber state
	 */
	GetSubsystemState(args?:{}): STRING;

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
	 * Get information on how the subsystem is performing
	 * @return Performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

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
	 * Get information on how the subsystem is performing
	 * @return 
	 */
	ResetPerformanceMetrics(args?:{}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Check the run status of this subsystem
	 * @return Run status
	 */
	IsRunning(args?:{}): BOOLEAN;

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
	 * Stops and restarts the sub-system
	 * @return result
	 */
	Restart(args?:{}): NOTHING;

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
	 * Updates new certificate to Solution Central
	 * @param verificationTimeout Number of milliseconds as timeout to verify certificate updation
	 * @param forceUpdate Update certificate forcefully
	 * @return result
	 */
	UpdateCertificate(args?:{verificationTimeout?: LONG, forceUpdate?: BOOLEAN}): NOTHING;

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
	 * Get enabled status of Solution Central
	 * @return 
	 */
	IsSCEnabled(args?:{}): BOOLEAN;

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
	 * Get the expiration date of certificate used to communicate with Solution Central
	 * @return SC certifiacte expiration date
	 */
	GetCertExpirationDate(args?:{}): DATETIME;

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


declare interface Subsystems {

	/**
	 * Handles Value Stream Storage and Retrieval
	 */
	ValueStreamProcessingSubsystem: ValueStreamProcessingSubsystem;
	/**
	 * Core WebSocket (WS) Communications
	 */
	WSCommunicationsSubsystem: WSCommunicationsSubsystem;
	/**
	 * Logging Subsystem - handles the various Logs (Application, Script, Communications, etc.)
	 */
	LoggingSubsystem: LoggingSubsystem;
	/**
	 * Subsystem to handle cluster operations and information
	 */
	ClusteringSubsystem: ClusteringSubsystem;
	/**
	 * Subsystem to handle Events with ordering requirements
	 */
	OrderedEventProcessingSubsystem: OrderedEventProcessingSubsystem;
	/**
	 * Handles Alert Summary and History
	 */
	AlertProcessingSubsystem: AlertProcessingSubsystem;
	/**
	 * Utilization Subsystem Settings
	 */
	UtilizationSubsystem: UtilizationSubsystem;
	/**
	 * Export and Import Processing Settings
	 */
	ExportImportSubsystem: ExportImportSubsystem;
	/**
	 * Integration Subsystem - handles transport of integrations to backend systems
	 */
	IntegrationSubsystem: IntegrationSubsystem;
	/**
	 * Handles Event Processing throughout the platform
	 */
	EventProcessingSubsystem: EventProcessingSubsystem;
	/**
	 * Handles Stream Storage and Retrieval
	 */
	StreamProcessingSubsystem: StreamProcessingSubsystem;
	/**
	 * Handles File Transfers between Edge Things, Connected Things, File Repositories and Federated Servers
	 */
	FileTransferSubsystem: FileTransferSubsystem;
	/**
	 * User Management
	 */
	UserManagementSubsystem: UserManagementSubsystem;
	/**
	 * Handles tunneling between Edge Things, Connected Things and Federated Servers
	 */
	TunnelSubsystem: TunnelSubsystem;
	/**
	 * Message Store Subsystem processes queued messages for various remote Things including Edge Things, Connected Things and Federated servers
	 */
	MessageStoreSubsystem: MessageStoreSubsystem;
	/**
	 * Licensing Subsystem Settings
	 */
	LicensingSubsystem: LicensingSubsystem;
	/**
	 * Handles Federation of Things between ThingWorx Servers
	 */
	FederationSubsystem: FederationSubsystem;
	/**
	 * Handles Data Table Storage and Retrieval
	 */
	DataTableProcessingSubsystem: DataTableProcessingSubsystem;
	/**
	 * Overall platform monitoring and configuration
	 */
	PlatformSubsystem: PlatformSubsystem;
	/**
	 * Handles Auditing
	 */
	AuditSubsystem: AuditSubsystem;
	/**
	 * WebSocket (WS) Execution Processing
	 */
	WSExecutionProcessingSubsystem: WSExecutionProcessingSubsystem;
	/**
	 * SCIM Identity Management Subsystem
	 */
	SCIMSubsystem: SCIMSubsystem;
	/**
	 * Workflow Subsystem handles CRUD operations of a workflow service or subscription on Workflows
	 */
	WorkflowSubsystem: WorkflowSubsystem;
	/**
	 * Subsystem for Solution Central
	 */
	SolutionCentralSubsystem: SolutionCentralSubsystem;

}


declare const Subsystems: Subsystems;