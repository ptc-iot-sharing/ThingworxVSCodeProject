declare class DataTable<T extends DataShapeBase> extends ThingTemplateWithShapes(GenericThing, DataTableShape) {


	/**
	 * Entry added
	 */
	Add: EVENT<EntryChangeEvent>;

	/**
	 * Entry deleted
	 */
	Delete: EVENT<EntryChangeEvent>;

	/**
	 * Entry added
	 */
	CommentAdd: EVENT<EntryCommentEvent>;

	/**
	 * Entry updated
	 */
	Update: EVENT<EntryChangeEvent>;
	/**
	 * Create an empty info table of the correct datashape for this data table
	 * @return Created Infotable
	 */
	CreateValues(args?:{}): INFOTABLE<T>;

	/**
	 * Reindex the custom indexes on the data table
	 * @return result
	 */
	Reindex(args?:{}): NOTHING;

	/**
	 * Add a new data table entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return Newly created id
	 */
	AddDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): STRING;

	/**
	 * Update an existing data table entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Add multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AddDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Sets the data shape
	 * @param name Data shape name
	 * @return result
	 */
	SetDataShape(args?:{name?: DATASHAPENAME}): NOTHING;

	/**
	 * Replaces existing data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AssignDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Sets the persistence provider
	 * @param name Persistence provider name
	 * @return result
	 */
	SetPersistenceProvider(args?:{name?: PERSISTENCEPROVIDERNAME}): NOTHING;

	/**
	 * Get the currently assigned persistence provider
	 * @return Persistence provider name
	 */
	GetPersistenceProvider(args?:{}): PERSISTENCEPROVIDERNAME;

	/**
	 * Create an info table of the correct datashape for this stream and include data values
	 * @param values Data values (JSON Object)
	 * @return Created Infotable
	 */
	CreateValuesWithData(args?:{values?: Partial<T>}): INFOTABLE<T>;

	/**
	 * Update multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve all table entries up to max items number
	 * @param maxItems Maximum number of items to return
	 * @return Table entries
	 */
	GetDataTableEntries(args?:{maxItems?: NUMBER}): INFOTABLE<DataTableEntry & T>;

	/**
	 * Retrieve all table entries that match the provided values
	 * @param maxItems Maximum number of items to return
	 * @param values Data values
	 * @return Table entries
	 */
	FindDataTableEntries(args?:{maxItems?: NUMBER, values?: INFOTABLE<T>}): INFOTABLE<DataTableEntry & T>;

	/**
	 * Get an count of data table entries
	 * @return Table entry count
	 */
	GetDataTableEntryCount(args?:{}): INTEGER;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream
	 * @return Field names
	 */
	GetFieldNames(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get an existing data table entry
	 * @param values Data values
	 * @return Table entries
	 */
	GetDataTableEntry(args?:{values?: INFOTABLE<T>}): INFOTABLE<DataTableEntry & T>;

	/**
	 * Delete all table entries that match the provided values
	 * @param maxItems Maximum number of items to return
	 * @param values Data values
	 * @return result
	 */
	DeleteDataTableEntries(args?:{maxItems?: NUMBER, values?: INFOTABLE<T>}): NOTHING;

	/**
	 * Add or update multiple data table entries based on a query
	 * @param sourceType Source type (optional)
	 * @param query Query definition
	 * @param values Data values to search for
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param updateValues Data values to be updated
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntriesWithQuery(args?:{sourceType?: STRING, query?: QUERY<T>, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, updateValues?: INFOTABLE<T>, tags?: TAGS}): NOTHING;

	/**
	 * Delete an existing data table entry using its key value
	 * @param key Key Value
	 * @return result
	 */
	DeleteDataTableEntryByKey(args?:{key?: STRING}): NOTHING;

	/**
	 * Add a new data table entry, or if it exists, update an existing entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return Newly created ID
	 */
	AddOrUpdateDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): STRING;

	/**
	 * Get the currently assigned data shape
	 * @return Data shape name
	 */
	GetDataShape(args?:{}): DATASHAPENAME;

	/**
	 * Get an existing data table entry using its key value
	 * @param key Key Value
	 * @return Table entries
	 */
	GetDataTableEntryByKey(args?:{key?: STRING}): INFOTABLE<DataTableEntry & T>;

	/**
	 * Retrieve all table entries that match the query parameters
	 * @param maxItems Maximum number of items to return
	 * @param query Query definition
	 * @param values Data values
	 * @param source Source (optional)
	 * @param tags Tags (optional)
	 * @return Table entries
	 */
	QueryDataTableEntries(args?:{maxItems?: NUMBER, query?: QUERY, values?: INFOTABLE<T>, source?: STRING, tags?: TAGS}): INFOTABLE<DataTableEntry & T>;

	/**
	 * Add or update multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AddOrUpdateDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream, of a specific type
	 * @param type Base type name
	 * @return Field names
	 */
	GetFieldNamesByType(args?:{type?: BASETYPENAME}): INFOTABLE<EntityList>;

	/**
	 * Remove all data table entries
	 * @return result
	 */
	PurgeDataTableEntries(args?:{}): NOTHING;

	/**
	 * Add or update multiple data table entries based on a query
	 * @param sourceType Source type (optional)
	 * @param query Query definition
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	DeleteDataTableEntriesWithQuery(args?:{sourceType?: STRING, query?: QUERY<T>, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Delete an existing data table entry
	 * @param values Data values
	 * @return result
	 */
	DeleteDataTableEntry(args?:{values?: INFOTABLE<T>}): NOTHING;

	/**
	 * Retrieve all table entries that match the search query parameters
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param query Query definition
	 * @param source Source (optional)
	 * @param tags Tags (optional)
	 * @return Table entries
	 */
	SearchDataTableEntries(args?:{maxItems?: NUMBER, searchExpression?: STRING, query?: QUERY<T>, source?: STRING, tags?: TAGS}): INFOTABLE<DataTableEntry & T>;


}
declare class StatisticalCalculationMicroserver extends RemoteThing {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class WindchillSwaggerConnector extends SwaggerConnector {


}
declare class IndustrialGateway extends RemoteThingWithFileTransfer {


	/**
	 * Status code for PullConfigFromEdge
	 */
	readonly ConfigurationPullStatus: INTEGER;

	/**
	 * File Repository for Industrial Configurations
	 */
	readonly IndustrialFileRepository: THINGNAME;

	/**
	 * Status code for PushConfigToEdge
	 */
	readonly ConfigurationPushStatus: INTEGER;

	/**
	 * Status message for PushConfigToEdge
	 */
	readonly PushStatusMessage: STRING;
	/**
	 * Browse Items
	 * @param filter Filter on the item names
	 * @param path Path to start the search
	 * @return The items
	 */
	BrowseItems(args?:{filter?: STRING, path?: STRING}): INFOTABLE<IndustrialItems>;

	/**
	 * Get a configuration from the edge
	 * @param targetFileName 
	 * @param targetPassword Password for encrypted configuration files
	 * @param targetPath 
	 * @return result
	 */
	PullConfigFromEdge(args?:{targetFileName?: STRING, targetPassword?: STRING, targetPath?: STRING}): NOTHING;

	/**
	 * Get the Industrial Things associated with this Gateway
	 * @param maxItems Maximum number of items to return
	 * @return The industrial things associated with this gateway
	 */
	GetIndustrialThings(args?:{maxItems?: NUMBER}): INFOTABLE<GenericStringList>;

	/**
	 * Send and install a configuration to the edge
	 * @param sourceFileName 
	 * @param filePassword Password for encrypted configuration files
	 * @param sourcePath 
	 * @return result
	 */
	PushConfigToEdge(args?:{sourceFileName?: STRING, filePassword?: STRING, sourcePath?: STRING}): NOTHING;

	/**
	 * Browse Groups
	 * @param filter Filter on the group names
	 * @param path Path to start the search
	 * @return The groups
	 */
	BrowseGroups(args?:{filter?: STRING, path?: STRING}): INFOTABLE<IndustrialGroups>;

	/**
	 * returns a value indicating if a project file is encrypted.
	 * @param sourceFileName 
	 * @return indicates if the project file is encrypted
	 */
	IsProjectEncrypted(args?:{sourceFileName?: STRING}): BOOLEAN;

	/**
	 * Returns a list of all items bound to properties for this Industrial Gateway's Industrial Things
	 * @param maxItems Maximum number of items to return
	 * @return The items
	 */
	GetBoundItems(args?:{maxItems?: INTEGER}): INFOTABLE<IndustrialBoundItems>;


}
declare class SecurityMonitor extends GenericThing {


	/**
	 * Application key authorization succeeded event
	 */
	ApplicationKeySucceeded: EVENT<ApplicationKeySecurityEvent>;

	/**
	 * Failed login event
	 */
	LoginFailed: EVENT<SecurityEvent>;

	/**
	 * Successful login event
	 */
	LoginSucceeded: EVENT<SecurityEvent>;

	/**
	 * Application key authorization failed event
	 */
	ApplicationKeyFailed: EVENT<ApplicationKeySecurityEvent>;

	/**
	 * Logout event
	 */
	Logout: EVENT<SecurityEvent>;

}
declare class BrowserGateway extends SDKGateway {


}
declare class AnalyticsGateway extends SDKGateway {


}
declare class Database extends GenericThing {


	/**
	 * Last connection error
	 */
	lastConnectionError: STRING;

	/**
	 * Flag indicating if connected or not
	 */
	isConnected: BOOLEAN;

	/**
	 * Last connection time
	 */
	lastConnection: DATETIME;

}
declare class LockTemplate extends GenericThing {

	/**
	 * Wakes up threads waiting on the specified condition key.
	 * @param key 
	 * @return result
	 */
	signal(args?:{key?: STRING}): NOTHING;

	/**
	 * Releases the lock, allowing other threads to acquire it.
	 * @return result
	 */
	unlock(args?:{}): NOTHING;

	/**
	 * Waits on the specified condition key.
	 * @param key 
	 * @return result
	 */
	await(args?:{key?: STRING}): NOTHING;

	/**
	 * Attempts to acquire this thing's lock. If the lock is used, this blocks until the lock is released.
	 * @return result
	 */
	lock(args?:{}): NOTHING;

	/**
	 * Wakes up one of the threads waiting on the specified condition key.
	 * @param key 
	 * @return result
	 */
	signalOne(args?:{key?: STRING}): NOTHING;


}
declare class ReportingByConnection extends ReportingStrategy {


}
declare class ConnectionServer extends RemoteThing {

	/**
	 * returns current performance metrics for the ConnectionServer
	 * @return performance metrics
	 */
	GetPerformanceMetrics(args?:{}): INFOTABLE<ThingworxMetric>;

	/**
	 * returns current system information for the ConnectionServer
	 * @return system information
	 */
	GetSystemInformation(args?:{}): INFOTABLE<SystemInformation>;

	/**
	 * Retrieve a list of all log entries
	 * @param logType log type
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param startDate Start time
	 * @return Log entries for specified Log type (Application or Communication)
	 */
	GetLogEntries(args?:{logType?: STRING, oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, startDate?: DATETIME}): INFOTABLE<LogEntry>;

	/**
	 * returns current system status information for the ConnectionServer
	 * @return system status details
	 */
	GetSystemStatus(args?:{}): INFOTABLE<SubsystemStatus>;

	/**
	 * returns currently bound entities on this ConnectionServer
	 * @return bound entities
	 */
	GetBoundEntities(args?:{}): INFOTABLE<EntityList>;

	/**
	 * get current log level
	 * @param logType log type
	 * @param subLogger (optional) sub logger name
	 * @return current log level
	 */
	GetLogLevel(args?:{logType?: STRING, subLogger?: STRING}): STRING;

	/**
	 * set specified log level
	 * @param logType log type
	 * @param level log level
	 * @param subLogger (optional) sub logger name
	 * @return result
	 */
	SetLogLevel(args?:{logType?: STRING, level?: STRING, subLogger?: STRING}): NOTHING;


}
declare class ProfilingMicroserver extends AnalyticsJobServer {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class SDKGateway extends RemoteThing {


}
declare class RemoteDataTable<T extends DataShapeBase> extends RemoteThing {

	/**
	 * Create an empty info table of the correct datashape for this data table
	 * @return Created Infotable
	 */
	CreateValues(args?:{}): INFOTABLE<T>;

	/**
	 * Reindex the custom indexes on the data table
	 * @return result
	 */
	Reindex(args?:{}): NOTHING;

	/**
	 * Add a new data table entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return Newly created id
	 */
	AddDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): STRING;

	/**
	 * Update an existing data table entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Add multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AddDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Sets the currently assigned data shape
	 * @param name Data shape name
	 * @return result
	 */
	SetDataShape(args?:{name?: DATASHAPENAME}): NOTHING;

	/**
	 * Update existing data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AssignDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Create an info table of the correct datashape for this stream and include data values
	 * @param values Data values (JSON Object)
	 * @return Created Infotable
	 */
	CreateValuesWithData(args?:{values?: TWJSON}): INFOTABLE;

	/**
	 * Update multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve all table entries up to max items number
	 * @param maxItems Maximum number of items to return
	 * @return Table entries
	 */
	GetDataTableEntries(args?:{maxItems?: NUMBER}): INFOTABLE<T>;

	/**
	 * Retrieve all table entries that match the provided values
	 * @param values Data values
	 * @return Table entries
	 */
	FindDataTableEntries(args?:{values?: INFOTABLE<T>}): INFOTABLE<T>;

	/**
	 * Get an count of data table entries
	 * @return Table entry count
	 */
	GetDataTableEntryCount(args?:{}): INTEGER;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream
	 * @return Field names
	 */
	GetFieldNames(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get an existing data table entry
	 * @param values Data values
	 * @return Table entries
	 */
	GetDataTableEntry(args?:{values?: INFOTABLE<T>}): INFOTABLE<T>;

	/**
	 * Delete all table entries that match the provided values
	 * @param values Data values
	 * @return result
	 */
	DeleteDataTableEntries(args?:{values?: INFOTABLE<T>}): NOTHING;

	/**
	 * Add or update multiple data table entries based on a query
	 * @param sourceType Source type (optional)
	 * @param query Query definition
	 * @param values Data values to search for
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param updateValues Data values to be updated
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntriesWithQuery(args?:{sourceType?: STRING, query?: QUERY<T>, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, updateValues?: INFOTABLE<T>, tags?: TAGS}): NOTHING;

	/**
	 * Delete an existing data table entry using its key value
	 * @param key Key Value
	 * @return result
	 */
	DeleteDataTableEntryByKey(args?:{key?: STRING}): NOTHING;

	/**
	 * Add a new data table entry, or if it exists, update an existing entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return Newly created ID
	 */
	AddOrUpdateDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): STRING;

	/**
	 * Get the currently assigned data shape
	 * @return Data shape name
	 */
	GetDataShape(args?:{}): DATASHAPENAME;

	/**
	 * Get an existing data table entry using its key value
	 * @param key Key Value
	 * @return Table entries
	 */
	GetDataTableEntryByKey(args?:{key?: STRING}): INFOTABLE;

	/**
	 * Retrieve all table entries that match the query parameters
	 * @param maxItems Maximum number of items to return
	 * @param query Query definition
	 * @param values Data values
	 * @param source Source (optional)
	 * @param tags Tags (optional)
	 * @return Table entries
	 */
	QueryDataTableEntries(args?:{maxItems?: NUMBER, query?: QUERY, values?: INFOTABLE<T>, source?: STRING, tags?: TAGS}): INFOTABLE<T>;

	/**
	 * Add or udpate multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AddOrUpdateDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream, of a specific type
	 * @param type Base type name
	 * @return Field names
	 */
	GetFieldNamesByType(args?:{type?: BASETYPENAME}): INFOTABLE<EntityList>;

	/**
	 * Remove all data table entries
	 * @return result
	 */
	PurgeDataTableEntries(args?:{}): NOTHING;

	/**
	 * Add or update multiple data table entries based on a query
	 * @param sourceType Source type (optional)
	 * @param query Query definition
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	DeleteDataTableEntriesWithQuery(args?:{sourceType?: STRING, query?: QUERY<T>, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Delete an existing data table entry
	 * @param values Data values
	 * @return result
	 */
	DeleteDataTableEntry(args?:{values?: INFOTABLE<T>}): NOTHING;

	/**
	 * Retrieve all table entries that match the search query parameters
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param query Query definition
	 * @param source Source (optional)
	 * @param tags Tags (optional)
	 * @return Table entries
	 */
	SearchDataTableEntries(args?:{maxItems?: NUMBER, searchExpression?: STRING, query?: QUERY<T>, source?: STRING, tags?: TAGS}): INFOTABLE<T>;


}
declare class ClusteringMicroserver extends AnalyticsJobServer {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class TrainingMicroserver extends AnalyticsJobServer {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class Scheduler extends GenericThing {


	/**
	 * Current enabled status
	 */
	Enabled: BOOLEAN;

	/**
	 * Scheduled event
	 */
	ScheduledEvent: EVENT<ScheduledEvent>;
	/**
	 * Enable this scheduler
	 * @return result
	 */
	EnableScheduler(args?:{}): NOTHING;

	/**
	 * Disable this scheduler
	 * @return result
	 */
	DisableScheduler(args?:{}): NOTHING;


}
declare class EMSGateway extends RemoteThing {

	/**
	 * Get log entries from the EMS
	 * @param maxItems Max number of entries to retreive
	 * @param endDate Newest log entry to retreive
	 * @param startDate Oldest log entry to retreive
	 * @return 
	 */
	GetLogData(args?:{maxItems?: INTEGER, endDate?: DATETIME, startDate?: DATETIME}): INFOTABLE<LogEntry>;

	/**
	 * Return a list of edge things registered with this thing's gateway
	 * @return Edge things
	 */
	GetEdgeThings(args?:{}): INFOTABLE<EdgeThingEndpoint>;

	/**
	 * Return the version of the EMS
	 * @return EMS version
	 */
	GetMicroServerVersion(args?:{}): STRING;

	/**
	 * Retrieve a list of all log entries
	 * @param logType log type
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param startDate Start time
	 * @return Log entries for specified Log type (Application or Communication)
	 */
	GetLogEntries(args?:{logType?: STRING, oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, startDate?: DATETIME}): INFOTABLE<LogEntry>;

	/**
	 * Return the version of the EMS
	 * @param port Port to connect to
	 * @param host Host to connect to
	 * @return Connection result
	 */
	TestPort(args?:{port?: INTEGER, host?: STRING}): BOOLEAN;

	/**
	 * Restart the EMS
	 * @return 
	 */
	Restart(args?:{}): NOTHING;

	/**
	 * get current log level
	 * @param logType log type
	 * @param subLogger (optional) sub logger name
	 * @return current log level
	 */
	GetLogLevel(args?:{logType?: STRING, subLogger?: STRING}): STRING;

	/**
	 * set specified log level
	 * @param logType log type
	 * @param level log level
	 * @param subLogger (optional) sub logger name
	 * @return result
	 */
	SetLogLevel(args?:{logType?: STRING, level?: STRING, subLogger?: STRING}): NOTHING;


}
declare class ValueStream extends ThingTemplateWithShapes(GenericThing, ValueStreamShape) {

	/**
	 * Sets the persistence provider
	 * @param name Persistence provider name
	 * @return result
	 */
	SetPersistenceProvider(args?:{name?: PERSISTENCEPROVIDERNAME}): NOTHING;

	/**
	 * Get the currently assigned persistence provider
	 * @return Persistence provider name
	 */
	GetPersistenceProvider(args?:{}): PERSISTENCEPROVIDERNAME;


}
declare class RemoteDatabase extends RemoteThing {


}
declare class RemoteThing extends ThingTemplateWithShapes(GenericThing, Connectable, Reportable) {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class PrescriptiveMicroserver extends AnalyticsJobServer {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class RemoteThingWithFileTransfer extends RemoteThing {


	/**
	 * File transfer notification
	 */
	FileTransfer: EVENT<FileTransferJob>;
	/**
	 * Delete a file
	 * @param path File path
	 * @return result
	 */
	DeleteFile(args?:{path?: STRING}): NOTHING;

	/**
	 * Get file system listing
	 * @param path Directory path
	 * @param nameMask Name mask
	 * @return File Results
	 */
	GetFileListing(args?:{path?: STRING, nameMask?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Move a file
	 * @param targetPath Target path
	 * @param overwrite Overwrite existing file
	 * @param sourcePath Path of file to move
	 * @return result
	 */
	MoveFile(args?:{targetPath?: STRING, overwrite?: BOOLEAN, sourcePath?: STRING}): NOTHING;

	/**
	 * Get file info
	 * @param path File path
	 * @return File Results
	 */
	GetFileInfo(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Get listing of directories
	 * @param path Directory path
	 * @return File Results
	 */
	ListDirectories(args?:{path?: STRING}): INFOTABLE<FileSystemDirectory>;

	/**
	 * validate the file transfer based on the validation signature
	 * @param fromUri File source uri
	 * @param toUri File destination uri
	 * @param md5 Checksum signature used for validation
	 * @param sid File transfer Job ID
	 * @return result
	 */
	ValidateFileTransfer(args?:{fromUri?: STRING, toUri?: STRING, md5?: STRING, sid?: STRING}): NOTHING;

	/**
	 * Get file system listing
	 * @param path Directory path
	 * @param nameMask Name mask
	 * @return File Results
	 */
	ListFiles(args?:{path?: STRING, nameMask?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Get a list of files and/or directories on the Edge Thing
	 * @param path Directory path
	 * @return Browse Results
	 */
	BrowseDirectory(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Get directory structure
	 * @return The directory structure at the edge
	 */
	GetDirectoryStructure(args?:{}): INFOTABLE<FileSystemDirectory>;

	/**
	 * Get a list of files and/or directories on the Edge Thing
	 * @param path Directory path
	 * @return Browse Results
	 */
	BrowseFileSystem(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;


}
declare class ODataConnector extends HTTPConnector {


	/**
	 * Property to allow endpoints defined in the swaggerSpec set for the SwaggerJSON property override endpoints derived from pasrsing the OData spec
	 */
	AllowEndpointOverride: BOOLEAN;

	/**
	 * Property to provide a JSON swagger specification
	 */
	SwaggerJSON: TWJSON;

}
declare class SwaggerConnector extends HTTPConnector {


	/**
	 * Property to provide a JSON swagger specification
	 */
	SwaggerJSON: TWJSON;

}
declare class DumperTemplate extends GenericThing {

	/**
	 * Gets the current context
	 * @param service 
	 * @return 
	 */
	currentContext(args?:{service?: STRING}): STRING;

	/**
	 * Gets the hoverable tokens from the last patched script. These tokens are only evaluated on demand, when hovering over them in the debugger mashup
	 * @return 
	 */
	getHoverableTokens(args?:{}): STRING;

	/**
	 * dumps a pretty source
	 * @param service 
	 * @param thing 
	 * @return 
	 */
	dumpDecoratedSource(args?:{service?: STRING, thing?: STRING}): STRING;

	/**
	 *  
	 * @return result
	 */
	hotswappCall(args?:{}): NOTHING;

	/**
	 * Dumps the configuration tables for the specified service
	 * @param service 
	 * @param thing 
	 * @return 
	 */
	dumpServiceConfiguration(args?:{service?: STRING, thing?: STRING}): STRING;

	/**
	 * Resolves a VirtualFunction into a thing name and service name.
	 * @param varName 
	 * @return A JSON object containing the thing name and service name that were resolved.
	 */
	resolveVarAsService(args?:{varName?: STRING}): TWJSON;

	/**
	 * Gets the call stack length.
	 * @return 
	 */
	callStackLength(args?:{}): INTEGER;

	/**
	 * Throws a java exception.
	 * @return result
	 */
	throwJavaException(args?:{}): NOTHING;

	/**
	 * Send a message to the specified MQ
	 * @param service 
	 * @param thing 
	 * @return 
	 */
	dumpSource(args?:{service?: STRING, thing?: STRING}): STRING;

	/**
	 * Adds the specified script to a thing
	 * @param code 
	 * @param serviceName 
	 * @param thing 
	 * @return 
	 */
	installDebugService(args?:{code?: STRING, serviceName?: STRING, thing?: STRING}): STRING;

	/**
	 * Retrieves the current stack trace
	 * @return 
	 */
	currentStackTrace(args?:{}): STRING;

	/**
	 * Loads the top call.
	 * @return result
	 */
	loadTopCall(args?:{}): NOTHING;

	/**
	 * Used for debugging the Thingworx platform.
	 * @return result
	 */
	serviceEnded(args?:{}): NOTHING;

	/**
	 * Modifies the target script in order to allow the debugger run on it.
	 * @param service 
	 * @param thing 
	 * @return 
	 */
	injectDebugger(args?:{service?: STRING, thing?: STRING}): STRING;

	/**
	 * Wraps an eval in a java try/catch, sending a signal to the debugger when an uncaught exception occurs.
	 * @param code 
	 * @return 
	 */
	tryExec(args?:{code?: STRING}): BOOLEAN;

	/**
	 * 
	 * @return result
	 */
	cleanUpServices(args?:{}): NOTHING;

	/**
	 * Dumps the top call.
	 * @return result
	 */
	serviceStarted(args?:{}): NOTHING;

	/**
	 * Resolves a VirtualFunction into a thing name and service name.
	 * @param virtualFunction The VirtualFunction object to be resolved
	 * @return A JSON object containing the thing name and service name that were resolved.
	 */
	resolveService(args?:{virtualFunction?: VARIANT}): TWJSON;

	/**
	 * Dumps the top call.
	 * @return result
	 */
	dumpTopCall(args?:{}): NOTHING;

	/**
	 * Retrieves the last error that occured.
	 * @return 
	 */
	lastError(args?:{}): STRING;

	/**
	 * Checks if the specified string identifies a Thing class.
	 * @param className 
	 * @return A JSONObject containing the results.
	 */
	resolveClass(args?:{className?: STRING}): TWJSON;

	/**
	 * Gets the tokens from the last patched script.
	 * @return 
	 */
	getTokens(args?:{}): STRING;

	/**
	 * Gets the debuggable lines for a service that has a debuggable service installed.
	 * @param service 
	 * @return 
	 */
	debuggableLines(args?:{service?: STRING}): STRING;

	/**
	 * Debugs a service that was invoked remotely by a mash-up, returning its value to the mashup.
	 * @param args 
	 * @param service 
	 * @param thing 
	 * @return The debugged's service return value.
	 */
	debugMashupService(args?:{args?: STRING, service?: STRING, thing?: STRING}): VARIANT;

	/**
	 * dumpDefinition
	 * @param entity 
	 * @return 
	 */
	dumpDefinition(args?:{entity?: STRING}): STRING;

	/**
	 * Retrieves the last error that occured.
	 * @return 
	 */
	lastLog(args?:{}): STRING;


}
declare class AuditDataTableThing extends GenericThing {


	/**
	 * Entry added
	 */
	Add: EVENT<EntryChangeEvent>;

	/**
	 * Entry deleted
	 */
	Delete: EVENT<EntryChangeEvent>;

	/**
	 * Entry added
	 */
	CommentAdd: EVENT<EntryCommentEvent>;

	/**
	 * Entry updated
	 */
	Update: EVENT<EntryChangeEvent>;
	/**
	 * Create an empty info table of the correct datashape for this data table
	 * @return Created Infotable
	 */
	CreateValues(args?:{}): INFOTABLE;

	/**
	 * Reindex the custom indexes on the data table
	 * @return result
	 */
	Reindex(args?:{}): NOTHING;

	/**
	 * Add a new data table entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return Newly created id
	 */
	AddDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): STRING;

	/**
	 * Update an existing data table entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Add multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AddDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Sets the data shape
	 * @param name Data shape name
	 * @return result
	 */
	SetDataShape(args?:{name?: DATASHAPENAME}): NOTHING;

	/**
	 * Replaces existing data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AssignDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Sets the persistence provider
	 * @param name Persistence provider name
	 * @return result
	 */
	SetPersistenceProvider(args?:{name?: PERSISTENCEPROVIDERNAME}): NOTHING;

	/**
	 * Get the currently assigned persistence provider
	 * @return Persistence provider name
	 */
	GetPersistenceProvider(args?:{}): PERSISTENCEPROVIDERNAME;

	/**
	 * Create an info table of the correct datashape for this stream and include data values
	 * @param values Data values (JSON Object)
	 * @return Created Infotable
	 */
	CreateValuesWithData(args?:{values?: TWJSON}): INFOTABLE;

	/**
	 * Update multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve all table entries up to max items number
	 * @param maxItems Maximum number of items to return
	 * @return Table entries
	 */
	GetDataTableEntries(args?:{maxItems?: NUMBER}): INFOTABLE;

	/**
	 * Retrieve all table entries that match the provided values
	 * @param maxItems Maximum number of items to return
	 * @param values Data values
	 * @return Table entries
	 */
	FindDataTableEntries(args?:{maxItems?: NUMBER, values?: INFOTABLE}): INFOTABLE;

	/**
	 * Get an count of data table entries
	 * @return Table entry count
	 */
	GetDataTableEntryCount(args?:{}): INTEGER;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream
	 * @return Field names
	 */
	GetFieldNames(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get an existing data table entry
	 * @param values Data values
	 * @return Table entries
	 */
	GetDataTableEntry(args?:{values?: INFOTABLE}): INFOTABLE;

	/**
	 * Delete all table entries that match the provided values
	 * @param maxItems Maximum number of items to return
	 * @param values Data values
	 * @return result
	 */
	DeleteDataTableEntries(args?:{maxItems?: NUMBER, values?: INFOTABLE}): NOTHING;

	/**
	 * Add or update multiple data table entries based on a query
	 * @param sourceType Source type (optional)
	 * @param query Query definition
	 * @param values Data values to search for
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param updateValues Data values to be updated
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntriesWithQuery(args?:{sourceType?: STRING, query?: QUERY, values?: INFOTABLE, location?: LOCATION, source?: STRING, updateValues?: INFOTABLE, tags?: TAGS}): NOTHING;

	/**
	 * Delete an existing data table entry using its key value
	 * @param key Key Value
	 * @return result
	 */
	DeleteDataTableEntryByKey(args?:{key?: STRING}): NOTHING;

	/**
	 * Add a new data table entry, or if it exists, update an existing entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return Newly created ID
	 */
	AddOrUpdateDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): STRING;

	/**
	 * Get the currently assigned data shape
	 * @return Data shape name
	 */
	GetDataShape(args?:{}): DATASHAPENAME;

	/**
	 * Get an existing data table entry using its key value
	 * @param key Key Value
	 * @return Table entries
	 */
	GetDataTableEntryByKey(args?:{key?: STRING}): INFOTABLE;

	/**
	 * Retrieve all table entries that match the query parameters
	 * @param maxItems Maximum number of items to return
	 * @param query Query definition
	 * @param values Data values
	 * @param source Source (optional)
	 * @param tags Tags (optional)
	 * @return Table entries
	 */
	QueryDataTableEntries(args?:{maxItems?: NUMBER, query?: QUERY, values?: INFOTABLE, source?: STRING, tags?: TAGS}): INFOTABLE;

	/**
	 * Add or update multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AddOrUpdateDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream, of a specific type
	 * @param type Base type name
	 * @return Field names
	 */
	GetFieldNamesByType(args?:{type?: BASETYPENAME}): INFOTABLE<EntityList>;

	/**
	 * Remove all data table entries
	 * @return result
	 */
	PurgeDataTableEntries(args?:{}): NOTHING;

	/**
	 * Add or update multiple data table entries based on a query
	 * @param sourceType Source type (optional)
	 * @param query Query definition
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	DeleteDataTableEntriesWithQuery(args?:{sourceType?: STRING, query?: QUERY, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Delete an existing data table entry
	 * @param values Data values
	 * @return result
	 */
	DeleteDataTableEntry(args?:{values?: INFOTABLE}): NOTHING;

	/**
	 * Retrieve all table entries that match the search query parameters
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param query Query definition
	 * @param source Source (optional)
	 * @param tags Tags (optional)
	 * @return Table entries
	 */
	SearchDataTableEntries(args?:{maxItems?: NUMBER, searchExpression?: STRING, query?: QUERY, source?: STRING, tags?: TAGS}): INFOTABLE;


}
declare class StatisticalMonitoringMicroserver extends RemoteThing {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class SourceControlRepository extends GenericThing {


}
declare class GenericConnector extends GenericThing {

	/**
	 * Get local object/data model endpoint definition for the specified endpoint
	 * @param endpointId 
	 * @return The resulting objects
	 */
	GetEndpointDefinition(args:{endpointId: STRING}): TWJSON;

	/**
	 * Get local object/data model
	 * @return The resulting objects
	 */
	GetEndpointList(args?:{}): TWJSON;

	/**
	 *  Service to refresh the endpoint cache
	 * @return A confirmation message that the endpoint was refreshed
	 */
	RefreshEndpointCache(args?:{}): INFOTABLE;

	/**
	 *  Service hook to allow addition of custom headers to what's provided OOTB. The resulting infoTable should have a single row with values for additinal fields specified in that row
	 * @return A connection parameters InfoTable
	 */
	GetCustomHeaderParameters(args?:{}): INFOTABLE;

	/**
	 * Validate your connection to the back end system
	 * @return 
	 */
	ValidateConnection(args?:{}): INFOTABLE<ConnectorStatus>;

	/**
	 *  Service hook to allow addition of custom connection properties to what's provided OOTB. The resulting infoTable should have a single row with values for additinal fields specified in that row
	 * @return A connection parameters InfoTable
	 */
	GetCustomConnectionParameters(args?:{}): INFOTABLE;


}
declare class SAPODataConnector extends ODataConnector {


}
declare class AsynchronousUpdaterTemplate extends GenericThing {

	/**
	 * Returns true if the server is running, false otherwise.
	 * @return 
	 */
	isServerRunning(args?:{}): BOOLEAN;

	/**
	 * Stops the WebSocket server, preventing updates from reaching UI clients.
	 * @return result
	 */
	stopServer(args?:{}): NOTHING;

	/**
	 * Publishes an update to the listening UI clients on the specified namespace. If the server isn't running, this update request is ignored.
	 * @param namespace The namespace of the updated component. If left blank, the message will use the global namespace
	 * @param update The name of the updated component
	 * @return result
	 */
	publishNamespaceUpdate(args?:{namespace?: STRING, update?: STRING}): NOTHING;

	/**
	 * Publishes an update to the listening UI clients on the global namespace. If the server isn't running, this update request is ignored.
	 * @param update The name of the updated component
	 * @return result
	 */
	publishUpdate(args?:{update?: STRING}): NOTHING;

	/**
	 * Starts the WebSocket server, allowing you to publish updates to UI clients.
	 * @return result
	 */
	startServer(args?:{}): NOTHING;


}
declare class IntegrationRuntime extends SDKGateway {


}
declare class RemoteThingWithTunnels extends RemoteThing {


	/**
	 * Tunnel notification
	 */
	TunnelSession: EVENT<TunnelSession>;
	/**
	 * Get information about a specific tunnel endpoint registered at the edge
	 * @param name Name of the tunnel to query
	 * @return A tunnel endpoint
	 */
	GetTunnel(args?:{name?: STRING}): INFOTABLE<TunnelEndpoint>;

	/**
	 * Get a list of Tunnel Endpoints registered at the edge
	 * @return List of registered tunnel endpoints
	 */
	GetTunnels(args?:{}): INFOTABLE<TunnelEndpoint>;

	/**
	 * Get the tunnel status and access URL
	 * @return Tunnel status
	 */
	GetTunnelStatus(args?:{}): INFOTABLE<TunnelStatus>;

	/**
	 * Remove a tunnel endpoint from the edge
	 * @param name Name of the tunnel to remove
	 * @return result
	 */
	RemoveTunnel(args?:{name?: STRING}): NOTHING;

	/**
	 * Register a new tunnel endpoint at the edge
	 * @param numConnects The number of connections required to initilaize the tunnel
	 * @param port Port that the tunnel will connect to
	 * @param proto Protocol used by the tunnel
	 * @param host Host that the tunnel will connect to
	 * @param name Name of the tunnel to add
	 * @param description Description of the tunnel
	 * @param appUri Location of the client app that will use this tunnel
	 * @return result
	 */
	AddTunnel(args?:{numConnects?: NUMBER, port?: NUMBER, proto?: STRING, host?: STRING, name?: STRING, description?: STRING, appUri?: STRING}): NOTHING;

	/**
	 * Get a list of Tunnels registered at the edge
	 * @return Tunnel names
	 */
	GetTunnelNames(args?:{}): INFOTABLE<EntityList>;


}
declare class RemoteValueStream extends GenericThing {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class MachineTemplate extends GenericThing {


	/**
	 * Thing name
	 */
	readonly name: STRING;

	/**
	 * Thing description
	 */
	readonly description: STRING;

	/**
	 * Thing Template
	 */
	readonly thingTemplate: THINGTEMPLATENAME;

	/**
	 * Thing Tags
	 */
	readonly tags: TAGS;

	/**
	 * Alert acknowledge event for any property
	 */
	AnyAlertAck: EVENT<AlertEvent>;

	/**
	 * Anomaly Monitor Status
	 */
	AnomalyMonitorStatus: EVENT<AnomalyMonitorStatusEvent>;

	/**
	 * Data change event for any property
	 */
	AnyDataChange: EVENT<AnyDataChangeEvent>;

	/**
	 * Alert reset event
	 */
	AlertReset: EVENT<AlertEvent>;

	/**
	 * Alert reset event for any property
	 */
	AnyAlertReset: EVENT<AlertEvent>;

	/**
	 * Data change event
	 */
	DataChange: EVENT<DataChangeEvent>;

	/**
	 * Alert event
	 */
	Alert: EVENT<AlertEvent>;

	/**
	 * Alert event for any property
	 */
	AnyAlert: EVENT<AlertEvent>;

	/**
	 * Anomaly Monitor Status event for any property
	 */
	AnyAnomalyMonitorStatus: EVENT<AnyAnomalyMonitorStatusEvent>;

	/**
	 * Thing start event
	 */
	ThingStart: EVENT<ThingStartEvent>;

	/**
	 * Alert acknowledge event
	 */
	AlertAck: EVENT<AlertEvent>;
	/**
	 * Set the property binding for a property
	 * @param propertyName Property name
	 * @param aspects Aspects for the local binding
	 * @param sourceThingName Thing name to bind to
	 * @param sourcePropertyName Source property name
	 * @return result
	 */
	SetLocalPropertyBinding(args?:{propertyName?: STRING, aspects?: TWJSON, sourceThingName?: STRING, sourcePropertyName?: STRING}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetBooleanPropertyValue(args?:{propertyName?: STRING}): BOOLEAN;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

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
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddNumberValueStreamEntry(args?:{propertyName?: STRING, value?: NUMBER, timestamp?: DATETIME}): NOTHING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryVec2PropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<Vec2DataShape>;

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
	 * Purge all value stream entries for a specified date range
	 * @param endDate End time
	 * @param startDate Start time
	 * @return result
	 */
	PurgeAllPropertyHistory(args?:{endDate?: DATETIME, startDate?: DATETIME}): NOTHING;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddLocationValueStreamEntry(args?:{propertyName?: STRING, value?: LOCATION, timestamp?: DATETIME}): NOTHING;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddVec3ValueStreamEntry(args?:{propertyName?: STRING, value?: VEC3, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetVec3PropertyValue(args?:{propertyName?: STRING}): VEC3;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): TWJSON;

	/**
	 * Remove the remote service binding for a service
	 * @param serviceName Service name
	 * @return result
	 */
	RemoveRemoteServiceBinding(args?:{serviceName?: STRING}): NOTHING;

	/**
	 * Get thing summary information
	 * @return Thing summary information
	 */
	GetThingSummaryInformation(args?:{}): INFOTABLE<Thing>;

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
	 * Acknowledge all active alerts
	 * @param message Message (optional)
	 * @return result
	 */
	AcknowledgeAllAlerts(args?:{message?: STRING}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetImagePropertyValue(args?:{propertyName?: STRING}): IMAGE;

	/**
	 * Set this as a published thing for federation
	 * @param publish Publish status (true/false)
	 * @return result
	 */
	SetPublished(args?:{publish?: BOOLEAN}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryStringPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<StringValueStream>;

	/**
	 * Get the Statuses of the given Alerts
	 * @return Status of all Alerts on this Thing
	 */
	GetAlertStatuses(args?:{}): INFOTABLE<AlertStatus>;

	/**
	 * Get published thing for federation
	 * @return Publishing status for this thing
	 */
	GetPublished(args?:{}): BOOLEAN;

	/**
	 * Enable all alerts for a thing
	 * @param persistent Persist this change
	 * @return result
	 */
	EnableAllAlerts(args?:{persistent?: BOOLEAN}): NOTHING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryBooleanPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<BooleanValueStream>;

	/**
	 * Add a run time permission
	 * @param allow Permission (true = allow, false = deny)
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{allow?: BOOLEAN, principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

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
	 * Get the logging status of a specific property from the effective Thing shape
	 * @param propertyName Property name to look up on the effective shape for its logging status
	 * @return Effective property logging status
	 */
	GetEffectivePropertyLogging(args?:{propertyName?: STRING}): BOOLEAN;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the implemented thing shapes for this thing
	 * @return Implemented Shapes
	 */
	GetImplementedShapes(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetThingCodePropertyValue(args?:{propertyName?: STRING}): THINGCODE;

	/**
	 * Write property values for a thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdatePropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

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
	 * @param persistent Persist this change
	 * @param priority Alert priority
	 * @param enabled Alert enabled
	 * @return result
	 */
	AddOrUpdateAlert(args?:{alertType?: STRING, alertName?: STRING, property?: STRING, description?: STRING, attributes?: INFOTABLE, persistent?: BOOLEAN, priority?: INTEGER, enabled?: BOOLEAN}): NOTHING;

	/**
	 * Query the alert history
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Alert History
	 */
	QueryAlertHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, startDate?: DATETIME}): INFOTABLE<AlertHistory>;

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
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): TWJSON;

	/**
	 * Add multiple property definitions at once
	 * @param ignoreInvalidDefinitions True will skip over any invalid definitions provided, false indicates to fail the whole transaction when at least one invalid definition is found
	 * @param values Infotable where each row defines a property, using the PropertyDefinitionWithDetails data shape
	 * @return Table of information about which properties caused errors while attempting to add
	 */
	AddPropertyDefinitions(args?:{ignoreInvalidDefinitions?: BOOLEAN, values?: INFOTABLE<PropertyDefinitionWithDetails>}): INFOTABLE<BulkProcessingReport>;

	/**
	 * Disable alert(s) for a property. Specify alertName for a specific property alert; otherwise, all alerts are disabled.
	 * @param alertName Alert name
	 * @param property Property name
	 * @param persistent Persist this change
	 * @return result
	 */
	DisableAlertsForProperty(args?:{alertName?: STRING, property?: STRING, persistent?: BOOLEAN}): NOTHING;

	/**
	 * Get Enabled Status
	 * @return Enabled status
	 */
	IsEnabled(args?:{}): BOOLEAN;

	/**
	 * Check to see if a thing implements a particular thing shape
	 * @param thingShapeName Thing shape name
	 * @return Implements Shape
	 */
	ImplementsShape(args?:{thingShapeName?: THINGSHAPENAME}): BOOLEAN;

	/**
	 * Get the current property values for this thing as VTQ
	 * @return Property values
	 */
	GetPropertyValuesVTQ(args?:{}): INFOTABLE;

	/**
	 * Set property logging status for a specific property
	 * @param propertyName Property name
	 * @param enabled Enable/disable logging
	 * @return result
	 */
	SetPropertyLogging(args?:{propertyName?: STRING, enabled?: BOOLEAN}): NOTHING;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddLongValueStreamEntry(args?:{propertyName?: STRING, value?: LONG, timestamp?: DATETIME}): NOTHING;

	/**
	 * Set the additional information for units for a specific Long, Integer, or Number property.
	 * @param propertyName Property name
	 * @param units Units (eg. lbs, F, inches, etc.) associated with input. For information only.
	 * @return result
	 */
	SetUnitsForNumericPropertyDefinition(args?:{propertyName?: STRING, units?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, isHidden?: BOOLEAN, ordinal?: INTEGER}): NOTHING;

	/**
	 * Get a list of logged properties for this thing that are of a numeric data type
	 * @return Property names
	 */
	GetNumericLoggedProperties(args?:{}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get a subset of the current property values for this thing
	 * @param propertyNames List of property names
	 * @return Property values
	 */
	GetNamedProperties(args?:{propertyNames?: TWJSON}): INFOTABLE;

	/**
	 * Set the remote property binding for a property
	 * @param propertyName Property name
	 * @param aspects Aspects for the remote binding
	 * @param pushThreshold Push threshold
	 * @param foldType How a remote property's value should be handled by the server when a connection is lost
	 * @param sourcePropertyName Source property name
	 * @param timeout Request timeout
	 * @param cacheTime Property's cache time value at the server in milliseconds
	 * @param pushType Push type
	 * @return result
	 */
	SetRemotePropertyBinding(args?:{propertyName?: STRING, aspects?: TWJSON, pushThreshold?: NUMBER, foldType?: STRING, sourcePropertyName?: STRING, timeout?: INTEGER, cacheTime?: INTEGER, pushType?: STRING}): NOTHING;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Restart this thing
	 * @return result
	 */
	RestartThing(args?:{}): NOTHING;

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
	 * @param remote Is a remote property
	 * @param type Data type
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
	AddPropertyDefinition(args?:{defaultValue?: STRING, remoteBindingAspects?: TWJSON, description?: STRING, readOnly?: BOOLEAN, remote?: BOOLEAN, type?: BASETYPENAME, remotePropertyName?: STRING, timeout?: INTEGER, pushType?: STRING, dataChangeThreshold?: NUMBER, logged?: BOOLEAN, name?: STRING, pushThreshold?: NUMBER, dataChangeType?: STRING, category?: STRING, persistent?: BOOLEAN, dataShape?: DATASHAPENAME}): NOTHING;

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
	 * Check to see if a thing is in a specific network
	 * @param network Network name
	 * @return Result
	 */
	IsInNetwork(args?:{network?: STRING}): BOOLEAN;

	/**
	 * Remove a dynamic subscription
	 * @param propertyName Property name
	 * @param eventName Event name
	 * @param thingName Thing name
	 * @param serviceName Local service name
	 * @return result
	 */
	RemoveDynamicSubscription(args?:{propertyName?: STRING, eventName?: STRING, thingName?: THINGNAME, serviceName?: STRING}): NOTHING;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetNumberPropertyValue(args?:{propertyName?: STRING}): NUMBER;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of logged properties for this thing
	 * @param type Type to filter on
	 * @return Property names
	 */
	GetLoggedProperties(args?:{type?: BASETYPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Enable this thing
	 * @return result
	 */
	EnableThing(args?:{}): NOTHING;

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
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetStringPropertyValue(args?:{propertyName?: STRING}): STRING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): TWJSON;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Acknowledge an active alert
	 * @param property Property name
	 * @param message Message (optional)
	 * @return result
	 */
	AcknowledgeAlert(args?:{property?: STRING, message?: STRING}): NOTHING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryLocationPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<LocationValueStream>;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryVec4PropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<Vec4DataShape>;

	/**
	 * Set the remote service binding for a service
	 * @param sourceServiceName Source service name
	 * @param serviceName Service name
	 * @param timeout Request timeout
	 * @return result
	 */
	SetRemoteServiceBinding(args?:{sourceServiceName?: STRING, serviceName?: STRING, timeout?: INTEGER}): NOTHING;

	/**
	 * Check to see if a thing is derived from a particular thing template
	 * @param thingTemplateName Thing template name
	 * @return Is Derived From Template
	 */
	IsDerivedFromTemplate(args?:{thingTemplateName?: THINGTEMPLATENAME}): BOOLEAN;

	/**
	 * Store properties of this thing to a stream
	 * @param name Stream name
	 * @param tags Tags
	 * @return result
	 */
	WritePropertiesToStream(args?:{name?: THINGNAME, tags?: TAGS}): NOTHING;

	/**
	 * Return a list of all the things referenced by this thing
	 * @param maxDepth Maximum depth to search
	 * @return Thing connections
	 */
	GetThingRelationships(args?:{maxDepth?: INTEGER}): INFOTABLE<ThingRelationship>;

	/**
	 * Returns true if given dynamic subscription is present
	 * @param propertyName Property name
	 * @param eventName Event name
	 * @param thingName Thing name
	 * @param serviceName Local service name
	 * @return True/false based on if given dynamic subscription exist or not
	 */
	IsDynamicSubscriptionCreated(args?:{propertyName?: STRING, eventName?: STRING, thingName?: THINGNAME, serviceName?: STRING}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddVec4ValueStreamEntry(args?:{propertyName?: STRING, value?: VEC4, timestamp?: DATETIME}): NOTHING;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddDateTimeValueStreamEntry(args?:{propertyName?: STRING, value?: DATETIME, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Purge all value stream entries for a specified date range for a given list of properties
	 * @param propertiesToPurge Properties to purge
	 * @param endDate End time
	 * @param startDate Start time
	 * @return result
	 */
	PurgeSelectedPropertyHistory(args?:{propertiesToPurge?: INFOTABLE<PropertyList>, endDate?: DATETIME, startDate?: DATETIME}): NOTHING;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryNumberPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<NumberValueStream>;

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
	 * Get the Status of the given Alert
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Status of Alert
	 */
	GetAlertStatus(args?:{alertName?: STRING, property?: STRING}): STRING;

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
	 * Get the networks associated with a thing
	 * @return Networks
	 */
	GetNetworks(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

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
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, startDate?: DATETIME}): INFOTABLE;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetVec2PropertyValue(args?:{propertyName?: STRING}): VEC2;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryLongPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<LongValueStream>;

	/**
	 * Remove the local property binding for a property
	 * @param propertyName Property name
	 * @return result
	 */
	RemoveLocalPropertyBinding(args?:{propertyName?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: TWJSON}): NOTHING;

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
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddIntegerValueStreamEntry(args?:{propertyName?: STRING, value?: INTEGER, timestamp?: DATETIME}): NOTHING;

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
	GetMetadataWithPermissionsAsJSON(args?:{}): TWJSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the locally implemented thing shapes for this thing
	 * @return Implemented Shapes
	 */
	GetLocallyImplementedShapes(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Promote an overridden alert to the nearest parent in its heirarchy that defines it.  Currently only Anomaly type Alerts are supported.
	 * @param alertName Alert name
	 * @param propertyName Property name
	 * @return result
	 */
	PromoteAlert(args?:{alertName?: STRING, propertyName?: STRING}): NOTHING;

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
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddBooleanValueStreamEntry(args?:{propertyName?: STRING, value?: BOOLEAN, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get a subset of the current property values for this thing
	 * @param propertyNames Property names
	 * @return Property values
	 */
	GetNamedPropertyValues(args?:{propertyNames?: INFOTABLE<EntityList>}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): TWJSON;

	/**
	 * Set the identifier for a thing
	 * @param identifier Thing identifier for remote things
	 * @return result
	 */
	SetIdentifier(args?:{identifier?: STRING}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetDateTimePropertyValue(args?:{propertyName?: STRING}): DATETIME;

	/**
	 * Disable Subscription
	 * @param propertyName Property name
	 * @param eventName Event name
	 * @param thingName Thing name
	 * @return result
	 */
	DisableSubscription(args?:{propertyName?: STRING, eventName?: STRING, thingName?: THINGNAME}): NOTHING;

	/**
	 * Get Training Statistics for given Alert
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Anomaly Alert Training Statistics for given Alert
	 */
	GetAnomalyAlertTrainingStatisticsForAlert(args?:{alertName?: STRING, property?: STRING}): INFOTABLE<AnomalyAlertTrainingStatistics>;

	/**
	 * Has any property changed since a given time
	 * @param timestamp Timestamp to compare
	 * @return Result
	 */
	HavePropertiesChangedSince(args?:{timestamp?: DATETIME}): BOOLEAN;

	/**
	 * Get the identifier for a thing
	 * @return Identifier
	 */
	GetIdentifier(args?:{}): STRING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryImagePropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<ImageValueStream>;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: TWJSON}): NOTHING;

	/**
	 * Get alert definition for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Alert definition
	 */
	GetAlertDefinition(args?:{alertName?: STRING, property?: STRING}): INFOTABLE<AlertDefinition>;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Remove an alert for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @param persistent Persist this change
	 * @return result
	 */
	RemoveAlert(args?:{alertName?: STRING, property?: STRING, persistent?: BOOLEAN}): NOTHING;

	/**
	 * Get a location alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetLocationAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): LOCATION;

	/**
	 * Get the mashups related to this thing
	 * @return Mashups
	 */
	GetMashups(args?:{}): INFOTABLE<MashupList>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): TWJSON;

	/**
	 * Add a dynamic subscription
	 * @param propertyName Property name
	 * @param eventName Event name
	 * @param thingName Thing name
	 * @param serviceName Local service name
	 * @return result
	 */
	AddDynamicSubscription(args?:{propertyName?: STRING, eventName?: STRING, thingName?: THINGNAME, serviceName?: STRING}): NOTHING;

	/**
	 * Get a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetIntegerAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): INTEGER;

	/**
	 * Get incoming local bindings to this thing for the given property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetIncomingLocalPropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<IncomingLocalPropertyBinding>;

	/**
	 * Set the value stream for a thing
	 * @param name Value stream name
	 * @return result
	 */
	SetValueStream(args?:{name?: THINGNAME}): NOTHING;

	/**
	 * Remove a service definition
	 * @param name Service name
	 * @return result
	 */
	RemoveServiceDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Get a long alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetLongAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): LONG;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddStringValueStreamEntry(args?:{propertyName?: STRING, value?: STRING, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get the current property values for this thing
	 * @return Property values
	 */
	GetPropertyValues(args?:{}): INFOTABLE;

	/**
	 * Get the property binding for a property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetLocalPropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get alert summary status
	 * @param maxItems Maximum number of items to return
	 * @param onlyUnacknowledged Show only unacknowledged alerts
	 * @param onlyAcknowledged Show only acknowledged alerts
	 * @return Alert status
	 */
	GetAlertSummary(args?:{maxItems?: NUMBER, onlyUnacknowledged?: BOOLEAN, onlyAcknowledged?: BOOLEAN}): INFOTABLE<AlertSummary>;

	/**
	 * Query the alert summary
	 * @param maxItems Maximum number of items to return
	 * @param onlyUnacknowledged Show only unacknowledged alerts
	 * @param query Query definition
	 * @param onlyAcknowledged Show only acknowledged alerts
	 * @return Alert Summary
	 */
	QueryAlertSummary(args?:{maxItems?: NUMBER, onlyUnacknowledged?: BOOLEAN, query?: QUERY, onlyAcknowledged?: BOOLEAN}): INFOTABLE<AlertSummary>;

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
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetLongPropertyValue(args?:{propertyName?: STRING}): LONG;

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
	 * Get the thing template for this thing
	 * @return Thing Template
	 */
	GetThingTemplate(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyNames Property names
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryNamedPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyNames?: INFOTABLE<EntityList>, query?: QUERY, startDate?: DATETIME}): INFOTABLE;

	/**
	 * Get a subset of the current property values for this thing
	 * @param values Property values
	 * @return result
	 */
	SetPropertyValues(args?:{values?: INFOTABLE}): NOTHING;

	/**
	 * Get AnomalyAlert Training Statistics for given Property
	 * @param property Property name
	 * @return Training Statistics of all AnomalyAlerts on the Property
	 */
	GetAnomalyAlertTrainingStatisticsForProperty(args?:{property?: STRING}): INFOTABLE<AnomalyAlertTrainingStatistics>;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryIntegerPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<IntegerValueStream>;

	/**
	 * Disable this thing
	 * @return result
	 */
	DisableThing(args?:{}): NOTHING;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddThingCodeValueStreamEntry(args?:{propertyName?: STRING, value?: THINGCODE, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get alert summary for a property
	 * @param maxItems Maximum number of items to return
	 * @param onlyUnacknowledged Show only unacknowledged alerts
	 * @param property Property name
	 * @param onlyAcknowledged Show only acknowledged alerts
	 * @return Alert summary
	 */
	GetAlertSummaryForProperty(args?:{maxItems?: NUMBER, onlyUnacknowledged?: BOOLEAN, property?: STRING, onlyAcknowledged?: BOOLEAN}): INFOTABLE<PropertyAlertSummary>;

	/**
	 * Get the timestamp for a specific property
	 * @param propertyName Property name
	 * @return Time value
	 */
	GetPropertyTime(args?:{propertyName?: STRING}): DATETIME;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddVec2ValueStreamEntry(args?:{propertyName?: STRING, value?: VEC2, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get all things and their properties that have local bindings on this thing
	 * @return Property binding
	 */
	GetIncomingLocalPropertyBindings(args?:{}): INFOTABLE<IncomingLocalPropertyBinding>;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddImageValueStreamEntry(args?:{propertyName?: STRING, value?: IMAGE, timestamp?: DATETIME}): NOTHING;

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
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryThingCodePropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<ThingCodeDataShape>;

	/**
	 * Remove the remote event binding for a event
	 * @param eventName Event name
	 * @return result
	 */
	RemoveRemoteEventBinding(args?:{eventName?: STRING}): NOTHING;

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
	 * Get the Statuses of the given Alerts
	 * @param property Property name
	 * @return Status of all Alerts on the Property
	 */
	GetAlertStatusesForProperty(args?:{property?: STRING}): INFOTABLE;

	/**
	 * Get a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetNumberAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): NUMBER;

	/**
	 * Get All AnomalyAlert Training Statistics on this Thing
	 * @return AnomalyAlert Training Statistics on this Thing
	 */
	GetAllAnomalyAlertTrainingStatistics(args?:{}): INFOTABLE<AnomalyAlertTrainingStatistics>;

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
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): TWJSON;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): TWJSON;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Check to see if an alert is defined for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Has alert definition
	 */
	HasAlert(args?:{alertName?: STRING, property?: STRING}): BOOLEAN;

	/**
	 * Remove a event definition
	 * @param name Event name
	 * @return result
	 */
	RemoveEventDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: TWJSON}): NOTHING;

	/**
	 * Enable Subscription
	 * @param propertyName Property name
	 * @param eventName Event name
	 * @param thingName Thing name
	 * @return result
	 */
	EnableSubscription(args?:{propertyName?: STRING, eventName?: STRING, thingName?: THINGNAME}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryDateTimePropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<DateTimeValueStream>;

	/**
	 * Set the remote event binding for a event
	 * @param sourceEventName Source event name
	 * @param eventName Event name
	 * @return result
	 */
	SetRemoteEventBinding(args?:{sourceEventName?: STRING, eventName?: STRING}): NOTHING;

	/**
	 * Enable alert(s) for a property. Specify alertName for a specific property alert; otherwise, all alerts are enabled.
	 * @param alertName Alert name
	 * @param property Property name
	 * @param persistent Persist this change
	 * @return result
	 */
	EnableAlertsForProperty(args?:{alertName?: STRING, property?: STRING, persistent?: BOOLEAN}): NOTHING;

	/**
	 * Get a string alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetStringAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): STRING;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Remove a property definition
	 * @param name Property name
	 * @return result
	 */
	RemovePropertyDefinition(args?:{name?: STRING}): NOTHING;

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
	 * Add a design time permission
	 * @param allow Permission (true = allow, false = deny)
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{allow?: BOOLEAN, principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

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
	 * Get a boolean alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetBooleanAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): BOOLEAN;

	/**
	 * Get the effective local property bindings
	 * @return Property binding
	 */
	GetEffectiveLocalPropertyBindings(args?:{}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Disable all alerts for a thing
	 * @param persistent Persist this change
	 * @return result
	 */
	DisableAllAlerts(args?:{persistent?: BOOLEAN}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetLocationPropertyValue(args?:{propertyName?: STRING}): LOCATION;

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
	 * Get a subset of the current property values (VTQ) and the highest alert for this thing
	 * @param propertyNames Property names
	 * @return Property values VTQA
	 */
	GetNamedPropertyValuesVTQA(args?:{propertyNames?: INFOTABLE<EntityList>}): INFOTABLE;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddInfoTableValueStreamEntry(args?:{propertyName?: STRING, value?: INFOTABLE, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetVec4PropertyValue(args?:{propertyName?: STRING}): VEC4;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param flatten Flatten the result
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryInfoTablePropertyHistory(args?:{flatten?: BOOLEAN, oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<InfoTableValueStream>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Retrain an Anomaly Alert
	 * @param alertName Alert name
	 * @param propertyName Property name
	 * @return result
	 */
	RetrainAlert(args?:{alertName?: STRING, propertyName?: STRING}): NOTHING;

	/**
	 * Get property logging status for a specific property
	 * @param propertyName Property name
	 * @return Property logging status
	 */
	GetPropertyLogging(args?:{propertyName?: STRING}): BOOLEAN;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryVec3PropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<Vec3DataShape>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

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
	 * Purge stream entries for a specified date range
	 * @param endDate End time
	 * @param immediate Delete immediately
	 * @param propertyName Property name
	 * @param startDate Start time
	 * @return result
	 */
	PurgePropertyHistory(args?:{endDate?: DATETIME, immediate?: BOOLEAN, propertyName?: STRING, startDate?: DATETIME}): NOTHING;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the current property values (VTQ) and the highest alert for this thing
	 * @return Property values VTQA
	 */
	GetPropertyValuesVTQA(args?:{}): INFOTABLE;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetIntegerPropertyValue(args?:{propertyName?: STRING}): INTEGER;

	/**
	 * Get the effective local property binding for a property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetEffectiveLocalPropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get the current property values for this thing
	 * @return Property values
	 */
	GetPropertyValuesAsMultiRowTable(args?:{}): INFOTABLE;


}
declare class ResultsMicroserver extends AnalyticsServer {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class Stream<T extends DataShapeBase> extends ThingTemplateWithShapes(GenericThing, StreamShape) {

	/**
	 * Retrieve a specific stream entry given a stream entry ID
	 * @param streamEntryId Stream entry ID
	 * @return Stream entry
	 */
	GetStreamEntry(args?:{streamEntryId?: STRING}): INFOTABLE<StreamEntry & T>;

	/**
	 * Query stream entries (with data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param query Query definition
	 * @param source Source of this entry (optional)
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Table entries
	 */
	QueryStreamEntriesWithData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, query?: QUERY<T>, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<StreamEntry & T>;

	/**
	 * Delete a specific stream entry given a stream entry ID
	 * @param streamEntryId Stream entry ID
	 * @return result
	 */
	DeleteStreamEntry(args?:{streamEntryId?: STRING}): NOTHING;

	/**
	 * Create an empty info table of the correct datashape for this stream
	 * @return Created Infotable
	 */
	CreateValues(args?:{}): INFOTABLE;

	/**
	 * Update an existing stream entry
	 * @param values Data values
	 * @param streamEntryId Stream entry ID
	 * @param location Location of the entry (optional)
	 * @param source Source of the event
	 * @param tags Tags (optional)
	 * @return result
	 */
	UpdateStreamEntry(args?:{values?: INFOTABLE<T>, streamEntryId?: STRING, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve a count of stream entries
	 * @return Stream entry count
	 */
	GetStreamEntryCount(args?:{}): NUMBER;

	/**
	 * Get all stream entries (with data)
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @return Table entries
	 */
	GetStreamEntriesWithData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER}): INFOTABLE<StreamEntry & T>;

	/**
	 * Add multiple stream entries
	 * @param values Stream entry values
	 * @return result
	 */
	AddStreamEntries(args?:{values?: INFOTABLE<StreamEntryWithValues>}): NOTHING;

	/**
	 * Sets the currently assigned data shape
	 * @param name Data shape name
	 * @return result
	 */
	SetDataShape(args?:{name?: DATASHAPENAME}): NOTHING;

	/**
	 * Sets the persistence provider
	 * @param name Persistence provider name
	 * @return result
	 */
	SetPersistenceProvider(args?:{name?: PERSISTENCEPROVIDERNAME}): NOTHING;

	/**
	 * Purge stream entries for a specified date range
	 * @param endDate End time
	 * @param immediate Delete immediately
	 * @param startDate Start time
	 * @return result
	 */
	PurgeStreamEntries(args?:{endDate?: DATETIME, immediate?: BOOLEAN, startDate?: DATETIME}): NOTHING;

	/**
	 * Get the currently assigned persistence provider
	 * @return Persistence provider name
	 */
	GetPersistenceProvider(args?:{}): PERSISTENCEPROVIDERNAME;

	/**
	 * Create an info table of the correct datashape for this stream and include data values
	 * @param values Data values (JSON Object)
	 * @return Created Infotable
	 */
	CreateValuesWithData(args?:{values?: Partial<T>}): INFOTABLE<T>;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream
	 * @return Field names
	 */
	GetFieldNames(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get all stream entries (without data)
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @return Table entries
	 */
	GetStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER}): INFOTABLE<StreamEntry>;

	/**
	 * Add a new stream entry
	 * @param sourceType Source type (User,Thing)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the event
	 * @param tags Tags (optional)
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddStreamEntry(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS, timestamp?: DATETIME}): NOTHING;

	/**
	 * Query stream data (no stream entry details), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param query Query definition
	 * @param source Source of this entry (optional)
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Table entries
	 */
	QueryStreamData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, query?: QUERY<T>, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<T>;

	/**
	 * Get the currently assigned data shape
	 * @return Data shape name
	 */
	GetDataShape(args?:{}): DATASHAPENAME;

	/**
	 * Get all stream data (no entry detail)
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @return Table entries
	 */
	GetStreamData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER}): INFOTABLE<T>;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream, of a specific type
	 * @param type Base type name
	 * @return Field names
	 */
	GetFieldNamesByType(args?:{type?: BASETYPENAME}): INFOTABLE<EntityList>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param query Query definition
	 * @param source Source of this entry (optional)
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Table entries
	 */
	QueryStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, query?: QUERY<StreamEntry>, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<StreamEntry>;


}
declare class DataMicroserver extends AnalyticsJobServer {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class FileRepository extends GenericThing {


	/**
	 * File transfer notification
	 */
	FileTransfer: EVENT<FileTransferJob>;
	/**
	 * Delete a folder
	 * @param path Folder path
	 * @return result
	 */
	DeleteFolder(args?:{path?: STRING}): NOTHING;

	/**
	 * Delete a file
	 * @param path File path
	 * @return result
	 */
	DeleteFile(args?:{path?: STRING}): NOTHING;

	/**
	 * Get file system listing with download links
	 * @param path Directory path
	 * @param nameMask Name mask
	 * @return File Results
	 */
	GetFileListingWithLinks(args?:{path?: STRING, nameMask?: STRING}): INFOTABLE<FileSystemFileWithLinks>;

	/**
	 * Save text to a file
	 * @param path File path
	 * @param content Text content
	 * @return result
	 */
	SaveText(args?:{path?: STRING, content?: STRING}): NOTHING;

	/**
	 * Extract all contents of an archive into the specified path within this File Repository. If the specified path does not exist, it will be created.
	 * @param path Path within the File Repository to extract the archive file contents to
	 * @param compressionType Compression type of archive file (valid types are zip and targz). If not provided, it will be derived from newFileName if possible
	 * @param archiveFileName Full path of archive file within the File Repository
	 * @return success or failure of the extraction
	 */
	FlatExtractArchive(args?:{path?: STRING, compressionType?: STRING, archiveFileName?: STRING}): BOOLEAN;

	/**
	 * Save JSON to a file
	 * @param path File path
	 * @param content JSON content
	 * @return result
	 */
	SaveJSON(args?:{path?: STRING, content?: TWJSON}): NOTHING;

	/**
	 * Create a zip file archive within this File Repository.  If specified path does not exist, it will be created inside the File Repository.
	 * @param path Path within the File Repository to create the zip file
	 * @param files Comma separated list of full path names for files in the repository to add to the archive
	 * @param newFileName Name of zip file to be created
	 * @return success or failure of the archive creation
	 */
	CreateZipArchive(args?:{path?: STRING, files?: STRING, newFileName?: STRING}): BOOLEAN;

	/**
	 * Extract the contents of an archive within this File Repository.  If specified path does not exist, it will be created.
	 * @param path Path within the File Repository to extract the archive file contents to
	 * @param compressionType Compression type of archive file (valid types are zip and targz). If not provided, it will be derived from newFileName if possible
	 * @param archiveFileName Full path of archive file within the File Repository
	 * @return success or failure of the extraction
	 */
	ExtractArchive(args?:{path?: STRING, compressionType?: STRING, archiveFileName?: STRING}): BOOLEAN;

	/**
	 * Get file system listing
	 * @param path Directory path
	 * @param nameMask Name mask
	 * @return File Results
	 */
	GetFileListing(args?:{path?: STRING, nameMask?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Create a folder
	 * @param path Folder path
	 * @return result
	 */
	CreateFolder(args?:{path?: STRING}): NOTHING;

	/**
	 * Load XML from a file
	 * @param path File path
	 * @return Content
	 */
	LoadXML(args?:{path?: STRING}): XML;

	/**
	 * Load Text from a file
	 * @param path File path
	 * @return Content
	 */
	LoadText(args?:{path?: STRING}): STRING;

	/**
	 * Save image data to a file
	 * @param path File path
	 * @param content Binary content
	 * @return result
	 */
	SaveImage(args?:{path?: STRING, content?: IMAGE}): NOTHING;

	/**
	 * Append to a text file
	 * @param path File path
	 * @param data Initial data
	 * @return result
	 */
	AppendToTextFile(args?:{path?: STRING, data?: STRING}): NOTHING;

	/**
	 * Move a file
	 * @param targetPath Path of target file
	 * @param overwrite Overwrite existing file
	 * @param sourcePath Path of file to move
	 * @return result
	 */
	MoveFile(args?:{targetPath?: STRING, overwrite?: BOOLEAN, sourcePath?: STRING}): NOTHING;

	/**
	 * Get file info
	 * @param path File path
	 * @return File Results
	 */
	GetFileInfo(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Create a folder in a specific location
	 * @param parentFolderPath Parent folder full path
	 * @param folderName New Folder to be created
	 * @return result
	 */
	CreateFolderInParent(args?:{parentFolderPath?: STRING, folderName?: STRING}): NOTHING;

	/**
	 * Get list of directories
	 * @param path Directory path
	 * @param nameMask Name mask
	 * @return Directory Results
	 */
	ListDirectories(args?:{path?: STRING, nameMask?: STRING}): INFOTABLE<FileSystemDirectory>;

	/**
	 * Create an archive/compressed file within this File Repository. If specified path does not exist, it will be created inside the File Repository.
	 * @param path Path within the File Repository to create the file
	 * @param files Comma separated list of full path names for files in the repository to add to the archive
	 * @param newFileName Name of file to be created
	 * @param compressionType Compression type of archive file (valid types are zip and targz). If not provided, it will default to 'zip'
	 * @return success or failure of the archive creation
	 */
	CreateArchive(args?:{path?: STRING, files?: STRING, newFileName?: STRING, compressionType?: STRING}): BOOLEAN;

	/**
	 * Create a text file
	 * @param path File path
	 * @param data Initial data
	 * @param overwrite Overwrite existing file
	 * @return result
	 */
	CreateTextFile(args?:{path?: STRING, data?: STRING, overwrite?: BOOLEAN}): NOTHING;

	/**
	 * Load binary content from a file
	 * @param path File path
	 * @return Content
	 */
	LoadBinary(args?:{path?: STRING}): BLOB;

	/**
	 * Load image content from a file
	 * @param path File path
	 * @return Content
	 */
	LoadImage(args?:{path?: STRING}): IMAGE;

	/**
	 * Save binary data to a file
	 * @param path File path
	 * @param content Binary content
	 * @return result
	 */
	SaveBinary(args?:{path?: STRING, content?: BLOB}): NOTHING;

	/**
	 * Lists exported data directories on the given path
	 * @param path File Repository Relative Path
	 * @return Returns lists of exported data directories on the given path
	 */
	GetDataExportListing(args?:{path?: STRING}): INFOTABLE<ExportFile>;

	/**
	 * Load JSON from a file
	 * @param path File path
	 * @return Content
	 */
	LoadJSON(args?:{path?: STRING}): TWJSON;

	/**
	 * Get file system listing
	 * @param path Directory path
	 * @param nameMask Name mask
	 * @return File Results
	 */
	ListFiles(args?:{path?: STRING, nameMask?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Get a list of files and/or directories on the Edge Thing
	 * @param path Directory path
	 * @return Browse Results
	 */
	BrowseDirectory(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Get directory structure
	 * @return Directory Results
	 */
	GetDirectoryStructure(args?:{}): INFOTABLE<FileSystemDirectory>;

	/**
	 * Lists exported entity files on the given path
	 * @param path File Repository Relative Path
	 * @return Returns list of exported entity files on the given path
	 */
	GetEntityExportListing(args?:{path?: STRING}): INFOTABLE<ExportFile>;

	/**
	 * Write to a text file
	 * @param path File path
	 * @param data Initial data
	 * @param offset File offset in bytes
	 * @return result
	 */
	WriteToTextFile(args?:{path?: STRING, data?: STRING, offset?: NUMBER}): NOTHING;

	/**
	 * Rename a file
	 * @param path File path
	 * @param name New file name
	 * @param overwrite Overwrite existing file
	 * @return result
	 */
	RenameFile(args?:{path?: STRING, name?: STRING, overwrite?: BOOLEAN}): NOTHING;

	/**
	 * Save XML to a file
	 * @param path File path
	 * @param content XML content
	 * @return result
	 */
	SaveXML(args?:{path?: STRING, content?: XML}): NOTHING;

	/**
	 * Browse file system for directories and files
	 * @param path Directory path
	 * @return File Results
	 */
	BrowseFileSystem(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Extract the contents of a zip file archive within this File Repository.  If specified path does not exist, it will be created.
	 * @param path Path within the File Repository to extract the zip file contents to
	 * @param zipFileName Full path of zip file within the File Repository
	 * @return success or failure of the extraction
	 */
	ExtractZipArchive(args?:{path?: STRING, zipFileName?: STRING}): BOOLEAN;


}
declare class PropertyTransformMicroserver extends RemoteThing {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class HTTPConnector extends GenericConnector {


}
declare class RemoteStream<T extends DataShapeBase> extends RemoteThing {

	/**
	 * Retrieve a specific stream entry given a stream entry ID
	 * @param streamEntryId Stream entry ID
	 * @return Stream entry
	 */
	GetStreamEntry(args?:{streamEntryId?: STRING}): INFOTABLE<T>;

	/**
	 * Query stream entries (with data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param query Query definition
	 * @param source Source of this entry (optional)
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Table entries
	 */
	QueryStreamEntriesWithData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, query?: QUERY<T>, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<T>;

	/**
	 * Delete a specific stream entry given a stream entry ID
	 * @param streamEntryId Stream entry ID
	 * @return result
	 */
	DeleteStreamEntry(args?:{streamEntryId?: STRING}): NOTHING;

	/**
	 * Create an empty info table of the correct datashape for this stream
	 * @return Created Infotable
	 */
	CreateValues(args?:{}): INFOTABLE<T>;

	/**
	 * Update an existing stream entry
	 * @param values Data values
	 * @param streamEntryId Stream entry ID
	 * @param location Location of the entry (optional)
	 * @param source Source of the event
	 * @param tags Tags (optional)
	 * @return result
	 */
	UpdateStreamEntry(args?:{values?: INFOTABLE<T>, streamEntryId?: STRING, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve a count of stream entries
	 * @return Stream entry count
	 */
	GetStreamEntryCount(args?:{}): NUMBER;

	/**
	 * Get all stream entries (with data)
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @return Table entries
	 */
	GetStreamEntriesWithData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER}): INFOTABLE<T>;

	/**
	 * Add multiple stream entries
	 * @param values Stream entry values
	 * @return result
	 */
	AddStreamEntries(args?:{values?: INFOTABLE<StreamEntryWithValues>}): NOTHING;

	/**
	 * Sets the currently assigned data shape
	 * @param name Data shape name
	 * @return result
	 */
	SetDataShape(args?:{name?: DATASHAPENAME}): NOTHING;

	/**
	 * Purge stream entries for a specified date range
	 * @param endDate End time
	 * @param immediate Delete immediately
	 * @param startDate Start time
	 * @return result
	 */
	PurgeStreamEntries(args?:{endDate?: DATETIME, immediate?: BOOLEAN, startDate?: DATETIME}): NOTHING;

	/**
	 * Create an info table of the correct datashape for this stream and include data values
	 * @param values Data values (JSON Object)
	 * @return Created Infotable
	 */
	CreateValuesWithData(args?:{values?: TWJSON}): INFOTABLE<T>;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream
	 * @return Field names
	 */
	GetFieldNames(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get all stream entries (without data)
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @return Table entries
	 */
	GetStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER}): INFOTABLE<T>;

	/**
	 * Add a new stream entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source (thing name, person name)
	 * @param tags Tags (optional)
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddStreamEntry(args?:{sourceType?: STRING, values?: INFOTABLE<T>, location?: LOCATION, source?: STRING, tags?: TAGS, timestamp?: DATETIME}): NOTHING;

	/**
	 * Query stream data (no stream entry details), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param query Query definition
	 * @param source Source of this entry (optional)
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Table entries
	 */
	QueryStreamData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, query?: QUERY<T>, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<T & StreamData>;

	/**
	 * Get the currently assigned data shape
	 * @return Data shape name
	 */
	GetDataShape(args?:{}): DATASHAPENAME;

	/**
	 * Get all stream data (no entry detail)
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @return Table entries
	 */
	GetStreamData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER}): INFOTABLE<T & StreamData>;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream, of a specific type
	 * @param type Base type name
	 * @return Field names
	 */
	GetFieldNamesByType(args?:{type?: BASETYPENAME}): INFOTABLE<EntityList>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param query Query definition
	 * @param source Source of this entry (optional)
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Table entries
	 */
	QueryStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, query?: QUERY<T>, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<T>;


}
declare class NotificationHandler extends GenericThing {

	/**
	 * Returns a list of notification handlers provided by this Thing
	 * @return 
	 */
	GetNotificationHandlers(args?:{}): INFOTABLE<NotificationHandlers>;


}
declare class AnalyticsServer extends RemoteThing {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class ValidationMicroserver extends AnalyticsJobServer {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class ExtensionGateway extends SDKGateway {


}
declare class AnalyticsJobServer extends AnalyticsServer {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class RemoteWiki extends RemoteThing {


	/**
	 * Entry added
	 */
	Add: EVENT<EntryChangeEvent>;

	/**
	 * Entry deleted
	 */
	Delete: EVENT<EntryChangeEvent>;

	/**
	 * Entry added
	 */
	CommentAdd: EVENT<EntryCommentEvent>;

	/**
	 * Entry updated
	 */
	Update: EVENT<EntryChangeEvent>;
	/**
	 * Delete a comment from an existing page with a specific comment ID
	 * @param wikiCommentId Existing wiki comment ID (optional)
	 * @return result
	 */
	DeleteComment(args?:{wikiCommentId?: STRING}): NOTHING;

	/**
	 * Get a list of comments for a specific wiki page
	 * @param wikiPageId Wiki page ID
	 * @return Wiki comments
	 */
	GetComments(args?:{wikiPageId?: STRING}): INFOTABLE<Comment>;

	/**
	 * Retrieve a specific wiki page with comments
	 * @param wikiPageId Wiki page ID
	 * @return Wiki page with comments
	 */
	GetWikiPageWithComments(args?:{wikiPageId?: STRING}): INFOTABLE<WikiPageWithComments>;

	/**
	 * Retrieve all wiki pages based on a keyword/search expression and optional date range
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param withContent With content
	 * @param source Source
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Matching entries
	 */
	SearchWikiPagesWithComments(args?:{maxItems?: NUMBER, searchExpression?: STRING, sourceTags?: TAGS, endDate?: DATETIME, withContent?: BOOLEAN, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<WikiPage>;

	/**
	 * Update a comment with a specific comment ID
	 * @param sourceType Source type (optional)
	 * @param location Location of the entry
	 * @param wikiCommentId Existing wiki comment ID (optional)
	 * @param source Source of the entry (person/thing)
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for wiki comment
	 * @return result
	 */
	UpdateComment(args?:{sourceType?: STRING, location?: LOCATION, wikiCommentId?: STRING, source?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): NOTHING;

	/**
	 * Purge all wiki pages
	 * @return result
	 */
	PurgeWikiPages(args?:{}): NOTHING;

	/**
	 * Retrieve all wiki pages with comments
	 * @param maxItems Maximum number of items to return
	 * @param parentWikiPageId Parent Wiki Page ID
	 * @return Wiki pages with comments
	 */
	GetChildWikiPagesWithComments(args?:{maxItems?: NUMBER, parentWikiPageId?: STRING}): INFOTABLE<WikiPageWithComments>;

	/**
	 * Retrieve a specific wiki page
	 * @param wikiPageId Wiki page ID
	 * @return Wiki page
	 */
	GetWikiPage(args?:{wikiPageId?: STRING}): INFOTABLE<WikiPage>;

	/**
	 * Retrieve all wiki pages that were modified within an optional date/time range and/or contain a specific set of tags
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param withContent With content
	 * @param source Original source/author of the page
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Wiki pages
	 */
	QueryWikiPagesWithComments(args?:{maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, withContent?: BOOLEAN, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<WikiPageWithComments>;

	/**
	 * Rate an entry given a specific entry ID
	 * @param rating Rating
	 * @param entryId Entry id
	 * @return Rating
	 */
	RateContent(args?:{rating?: NUMBER, entryId?: STRING}): NUMBER;

	/**
	 * Update the wiki page (by name)
	 * @param sourceType Source type (optional)
	 * @param wikiPageId Wiki page ID
	 * @param parentWikiPageId Parent Wiki Page ID
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param title Wiki entry title
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for wiki entry
	 * @return Wiki Page ID
	 */
	UpdateWikiPage(args?:{sourceType?: STRING, wikiPageId?: STRING, parentWikiPageId?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;

	/**
	 * Retrieve a specific wiki comment (by id)
	 * @param wikiCommentId Wiki comment id
	 * @return Wiki comment
	 */
	GetComment(args?:{wikiCommentId?: STRING}): INFOTABLE<Comment>;

	/**
	 * Retrieve all wiki page titles that were modified within an optional date/time range and/or contain a specific set of tags
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Wiki pages
	 */
	QueryWikiPageTitles(args?:{maxItems?: NUMBER, endDate?: DATETIME, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<WikiPageList>;

	/**
	 * Retrieve all wiki pages
	 * @param maxItems Maximum number of items to return
	 * @return Wiki pages
	 */
	GetWikiPages(args?:{maxItems?: NUMBER}): INFOTABLE<WikiPage>;

	/**
	 * Retrieve all wiki pages based on a keyword/search expression and optional date range
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param withContent With content
	 * @param source Source
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Matching entries
	 */
	SearchWikiPages(args?:{maxItems?: NUMBER, searchExpression?: STRING, sourceTags?: TAGS, endDate?: DATETIME, withContent?: BOOLEAN, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<WikiPage>;

	/**
	 * Retrieve wiki history (all pages)
	 * @param maxItems Maximum number of items to return
	 * @return Wiki history
	 */
	GetWikiHistory(args?:{maxItems?: NUMBER}): INFOTABLE<WikiHistory>;

	/**
	 * Retrieve all wiki pages that were modified within an optional date/time range and/or contain a specific set of tags
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param withContent With content
	 * @param source Original source/author of the page
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Wiki pages
	 */
	QueryWikiPages(args?:{maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, withContent?: BOOLEAN, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<WikiPage>;

	/**
	 * Retrieve all wiki pages with comments
	 * @param maxItems Maximum number of items to return
	 * @return Wiki pages with comments
	 */
	GetWikiPagesWithComments(args?:{maxItems?: NUMBER}): INFOTABLE<WikiPageWithComments>;

	/**
	 * Retrieve the parent wiki page ID
	 * @param wikiPageId Wiki page ID
	 * @return Parent wiki page id
	 */
	GetParentWikiPage(args?:{wikiPageId?: STRING}): STRING;

	/**
	 * Add a comment to an existing page or comment
	 * @param sourceType Source type (optional)
	 * @param wikiPageId Wiki page ID
	 * @param location Location of the entry
	 * @param wikiCommentId Existing wiki comment ID (optional)
	 * @param source Source of the entry (person/thing)
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for wiki comment
	 * @return Created wiki comment ID
	 */
	AddComment(args?:{sourceType?: STRING, wikiPageId?: STRING, location?: LOCATION, wikiCommentId?: STRING, source?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;

	/**
	 * Add or update a wiki page
	 * @param sourceType Source type (optional)
	 * @param parentWikiPageId Parent Wiki Page ID
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param title Wiki page title
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for wiki entry
	 * @return Created wiki page ID
	 */
	AddOrUpdateWikiPage(args?:{sourceType?: STRING, parentWikiPageId?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;

	/**
	 * Retrieve wiki history for a specific wiki page
	 * @param maxItems Maximum number of items to return
	 * @param wikiPageId Wiki page ID
	 * @return Wiki history
	 */
	GetWikiPageHistory(args?:{maxItems?: NUMBER, wikiPageId?: STRING}): INFOTABLE<WikiHistory>;

	/**
	 * Delete a wiki page (by name)
	 * @param wikiPageId Wiki page ID
	 * @return result
	 */
	DeleteWikiPage(args?:{wikiPageId?: STRING}): NOTHING;

	/**
	 * Retrieve all wiki page titles
	 * @param maxItems Maximum number of items to return
	 * @return Wiki page titles
	 */
	GetWikiPageTitles(args?:{maxItems?: NUMBER}): INFOTABLE<WikiPageList>;

	/**
	 * Retrieve all wiki pages
	 * @param maxItems Maximum number of items to return
	 * @param parentWikiPageId Parent Wiki Page ID
	 * @return Wiki pages
	 */
	GetChildWikiPages(args?:{maxItems?: NUMBER, parentWikiPageId?: STRING}): INFOTABLE<WikiPage>;

	/**
	 * Add a new wiki page
	 * @param sourceType Source type (optional)
	 * @param parentWikiPageId Parent Wiki Page ID
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param title Wiki page title
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for wiki entry
	 * @return Created wiki page ID
	 */
	AddWikiPage(args?:{sourceType?: STRING, parentWikiPageId?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;


}
declare class SignalsMicroserver extends AnalyticsJobServer {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class ThingworxServer extends RemoteThing {

	/**
	 * Retrieve a list of all log entries
	 * @param logType log type
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param startDate Start time
	 * @return Log entries for specified Log type (Application or Communication)
	 */
	GetLogEntries(args?:{logType?: STRING, oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, startDate?: DATETIME}): INFOTABLE<LogEntry>;

	/**
	 * Get unbound federated things
	 * @param maxItems Maximum number of items to return
	 * @return Unbound federated things
	 */
	GetUnboundThings(args?:{maxItems?: NUMBER}): INFOTABLE<EntityList>;

	/**
	 * Return a list of published things from this publisher
	 * @return Published things
	 */
	GetPublishedThings(args?:{}): INFOTABLE<EntityList>;

	/**
	 * get current log level
	 * @param logType log type
	 * @param subLogger (optional) sub logger name
	 * @return current log level
	 */
	GetLogLevel(args?:{logType?: STRING, subLogger?: STRING}): STRING;

	/**
	 * set specified log level
	 * @param logType log type
	 * @param level log level
	 * @param subLogger (optional) sub logger name
	 * @return result
	 */
	SetLogLevel(args?:{logType?: STRING, level?: STRING, subLogger?: STRING}): NOTHING;

	/**
	 * Get bound federated things
	 * @param maxItems Maximum number of items to return
	 * @return Bound federated things
	 */
	GetBoundThings(args?:{maxItems?: NUMBER}): INFOTABLE<DeviceStatus>;


}
declare class Blog extends ThingTemplateWithShapes(GenericThing, BlogShape) {


	/**
	 * Entry added
	 */
	Add: EVENT<EntryChangeEvent>;

	/**
	 * Entry deleted
	 */
	Delete: EVENT<EntryChangeEvent>;

	/**
	 * Entry added
	 */
	CommentAdd: EVENT<EntryCommentEvent>;

	/**
	 * Entry updated
	 */
	Update: EVENT<EntryChangeEvent>;
	/**
	 * Purge blog entries for a specified date range
	 * @param endDate End time
	 * @param startDate Start time
	 * @return result
	 */
	PurgeBlogEntries(args?:{endDate?: DATETIME, startDate?: DATETIME}): NOTHING;

	/**
	 * Delete a blog comment given a specific blog comment ID
	 * @param blogCommentId Blog comment id
	 * @return result
	 */
	DeleteComment(args?:{blogCommentId?: STRING}): NOTHING;

	/**
	 * Retrieve a list of blog comments given a specific blog entry ID
	 * @param blogEntryId Blog entry id
	 * @return Blog comments
	 */
	GetComments(args?:{blogEntryId?: STRING}): INFOTABLE<Comment>;

	/**
	 * Retrieve a list of all blog entries filtered tags, source, and optional an date range - with all comments
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @param source Source of this entry (optional)
	 * @param startDate Start time
	 * @param tags Tags
	 * @return All blog entries
	 */
	QueryBlogEntriesWithComments(args?:{maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, sortOrder?: STRING, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<BlogEntryWithComments>;

	/**
	 * Update a comment for a specific blog comment id
	 * @param sourceType Source type (optional)
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param blogCommentId Existing blog comment ID
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for comment entry
	 * @return result
	 */
	UpdateComment(args?:{sourceType?: STRING, location?: LOCATION, source?: STRING, blogCommentId?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): NOTHING;

	/**
	 * Update a blog entry
	 * @param blogEntryId Blog entry id
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param title Blog entry title
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for blog entry
	 * @return result
	 */
	UpdateBlogEntry(args?:{blogEntryId?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): NOTHING;

	/**
	 * Add a new blog entry
	 * @param sourceType Source type (optional)
	 * @param location Location
	 * @param source Source of the blog entry
	 * @param title Blog entry title
	 * @param content Blog entry content
	 * @param tags Tags for the entry
	 * @param timestamp Time of the blog entry
	 * @return New blog entry ID
	 */
	AddBlogEntry(args?:{sourceType?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;

	/**
	 * Update the sticky status for a blog entry
	 * @param blogEntryId Blog entry id
	 * @param isSticky Sticky status
	 * @return result
	 */
	SetStickyStatus(args?:{blogEntryId?: STRING, isSticky?: BOOLEAN}): NOTHING;

	/**
	 * Rate an entry given a specific entry ID
	 * @param rating Rating
	 * @param entryId Entry id
	 * @return Rating
	 */
	RateContent(args?:{rating?: NUMBER, entryId?: STRING}): NUMBER;

	/**
	 * Retrieve a list of all blog entries with comments
	 * @param maxItems Maximum number of items to return
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @return All blog entries with comments
	 */
	GetBlogEntriesWithComments(args?:{maxItems?: NUMBER, sortOrder?: STRING}): INFOTABLE<BlogEntryWithComments>;

	/**
	 * Sets the persistence provider
	 * @param name Persistence provider name
	 * @return result
	 */
	SetPersistenceProvider(args?:{name?: PERSISTENCEPROVIDERNAME}): NOTHING;

	/**
	 * Get the currently assigned persistence provider
	 * @return Persistence provider name
	 */
	GetPersistenceProvider(args?:{}): PERSISTENCEPROVIDERNAME;

	/**
	 * Retrieve a blog comment given a specific blog comment ID
	 * @param blogCommentId Blog comment id
	 * @return Blog comments
	 */
	GetComment(args?:{blogCommentId?: STRING}): INFOTABLE<Comment>;

	/**
	 * Retrieve a list of all blog entries filtered tags, source, and optional an date range
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @param source Source of this entry (optional)
	 * @param startDate Start time
	 * @param tags Tags
	 * @return All blog entries
	 */
	QueryBlogEntries(args?:{maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, sortOrder?: STRING, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<BlogEntry>;

	/**
	 * Retrieve a list of all blog entries
	 * @param maxItems Maximum number of items to return
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @return All blog entries
	 */
	GetBlogEntries(args?:{maxItems?: NUMBER, sortOrder?: STRING}): INFOTABLE<BlogEntry>;

	/**
	 * Retrieve a list of all blog entries filtered by keyword query and optional date range
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @param source Source
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Matching entries
	 */
	SearchBlogEntriesWithComments(args?:{maxItems?: NUMBER, searchExpression?: STRING, sourceTags?: TAGS, endDate?: DATETIME, sortOrder?: STRING, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<BlogEntryWithComments>;

	/**
	 * Retrieve a list of all blog entries filtered by keyword query and optional date range
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @param source Source
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Matching entries
	 */
	SearchBlogEntries(args?:{maxItems?: NUMBER, searchExpression?: STRING, sourceTags?: TAGS, endDate?: DATETIME, sortOrder?: STRING, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<BlogEntry>;

	/**
	 * Retrieve a blog entry given a specific blog entry ID
	 * @param blogEntryId Blog entry id
	 * @return Blog entry
	 */
	GetBlogEntry(args?:{blogEntryId?: STRING}): INFOTABLE<BlogEntry>;

	/**
	 * Delete a blog entry given a specific blog entry ID
	 * @param blogEntryId Blog entry id
	 * @return result
	 */
	DeleteBlogEntry(args?:{blogEntryId?: STRING}): NOTHING;

	/**
	 * Add a comment to a specific blog entry or blog comment
	 * @param blogEntryId Blog entry ID
	 * @param sourceType Source type (optional)
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param blogCommentId Existing blog comment ID
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for blog entry
	 * @return Created blog comment ID
	 */
	AddComment(args?:{blogEntryId?: STRING, sourceType?: STRING, location?: LOCATION, source?: STRING, blogCommentId?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;

	/**
	 * Retrieve a list of all blog entries by month
	 * @return Count of blog entries by month
	 */
	GetBlogActivityHistory(args?:{}): INFOTABLE<BlogHistory>;

	/**
	 * Retrieve a blog entry given a specific blog entry ID, with comments
	 * @param blogEntryId Blog entry id
	 * @return Blog entry
	 */
	GetBlogEntryWithComments(args?:{blogEntryId?: STRING}): INFOTABLE<BlogEntryWithComments>;


}
declare class ReportingStrategy extends GenericThing {

	/**
	 * Evaluates a Thing to determine if it is Present
	 * @param eventData Parameters necessary for the algorithm to determine if a Thing is reporting
	 * @param eventTime Time event is triggered
	 * @param sourceProperty Soure property
	 * @param eventName Name of the event
	 * @param source Name of Thing that triggered event
	 * @return Whether the parameters describe a Device that is Reporting normally
	 */
	ReportingAlgorithm(args?:{eventData?: INFOTABLE, eventTime?: DATETIME, sourceProperty?: STRING, eventName?: STRING, source?: STRING}): BOOLEAN;


}
declare class ContentCrawler extends GenericThing {


	/**
	 * Entry added
	 */
	Add: EVENT<EntryChangeEvent>;

	/**
	 * Entry deleted
	 */
	Delete: EVENT<EntryChangeEvent>;

	/**
	 * Entry added
	 */
	CommentAdd: EVENT<EntryCommentEvent>;

	/**
	 * Entry updated
	 */
	Update: EVENT<EntryChangeEvent>;
	/**
	 * Create an empty info table of the correct datashape for this data table
	 * @return Created Infotable
	 */
	CreateValues(args?:{}): INFOTABLE;

	/**
	 * Reindex the custom indexes on the data table
	 * @return result
	 */
	Reindex(args?:{}): NOTHING;

	/**
	 * Add a new data table entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return Newly created id
	 */
	AddDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): STRING;

	/**
	 * Update an existing data table entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve all external content
	 * @return Table entries
	 */
	GetExternalContent(args?:{}): INFOTABLE<Undefined>;

	/**
	 * Add multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AddDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve a specific external content item by key
	 * @param key Content key
	 * @return Table entries
	 */
	GetExternalContentDetail(args?:{key?: STRING}): INFOTABLE<Undefined>;

	/**
	 * Sets the data shape
	 * @param name Data shape name
	 * @return result
	 */
	SetDataShape(args?:{name?: DATASHAPENAME}): NOTHING;

	/**
	 * Replaces existing data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AssignDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Sets the persistence provider
	 * @param name Persistence provider name
	 * @return result
	 */
	SetPersistenceProvider(args?:{name?: PERSISTENCEPROVIDERNAME}): NOTHING;

	/**
	 * Crawl and update the entries
	 * @return result
	 */
	CrawlEntries(args?:{}): NOTHING;

	/**
	 * Get the currently assigned persistence provider
	 * @return Persistence provider name
	 */
	GetPersistenceProvider(args?:{}): PERSISTENCEPROVIDERNAME;

	/**
	 * Create an info table of the correct datashape for this stream and include data values
	 * @param values Data values (JSON Object)
	 * @return Created Infotable
	 */
	CreateValuesWithData(args?:{values?: TWJSON}): INFOTABLE;

	/**
	 * Update multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve all table entries up to max items number
	 * @param maxItems Maximum number of items to return
	 * @return Table entries
	 */
	GetDataTableEntries(args?:{maxItems?: NUMBER}): INFOTABLE;

	/**
	 * Retrieve all table entries that match the provided values
	 * @param maxItems Maximum number of items to return
	 * @param values Data values
	 * @return Table entries
	 */
	FindDataTableEntries(args?:{maxItems?: NUMBER, values?: INFOTABLE}): INFOTABLE;

	/**
	 * Get an count of data table entries
	 * @return Table entry count
	 */
	GetDataTableEntryCount(args?:{}): INTEGER;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream
	 * @return Field names
	 */
	GetFieldNames(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get an existing data table entry
	 * @param values Data values
	 * @return Table entries
	 */
	GetDataTableEntry(args?:{values?: INFOTABLE}): INFOTABLE;

	/**
	 * Delete all table entries that match the provided values
	 * @param maxItems Maximum number of items to return
	 * @param values Data values
	 * @return result
	 */
	DeleteDataTableEntries(args?:{maxItems?: NUMBER, values?: INFOTABLE}): NOTHING;

	/**
	 * Add or update multiple data table entries based on a query
	 * @param sourceType Source type (optional)
	 * @param query Query definition
	 * @param values Data values to search for
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param updateValues Data values to be updated
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntriesWithQuery(args?:{sourceType?: STRING, query?: QUERY, values?: INFOTABLE, location?: LOCATION, source?: STRING, updateValues?: INFOTABLE, tags?: TAGS}): NOTHING;

	/**
	 * Delete an existing data table entry using its key value
	 * @param key Key Value
	 * @return result
	 */
	DeleteDataTableEntryByKey(args?:{key?: STRING}): NOTHING;

	/**
	 * Add a new data table entry, or if it exists, update an existing entry
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return Newly created ID
	 */
	AddOrUpdateDataTableEntry(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): STRING;

	/**
	 * Get the currently assigned data shape
	 * @return Data shape name
	 */
	GetDataShape(args?:{}): DATASHAPENAME;

	/**
	 * Get an existing data table entry using its key value
	 * @param key Key Value
	 * @return Table entries
	 */
	GetDataTableEntryByKey(args?:{key?: STRING}): INFOTABLE;

	/**
	 * Retrieve all table entries that match the query parameters
	 * @param maxItems Maximum number of items to return
	 * @param query Query definition
	 * @param values Data values
	 * @param source Source (optional)
	 * @param tags Tags (optional)
	 * @return Table entries
	 */
	QueryDataTableEntries(args?:{maxItems?: NUMBER, query?: QUERY, values?: INFOTABLE, source?: STRING, tags?: TAGS}): INFOTABLE;

	/**
	 * Add or update multiple data table entries
	 * @param sourceType Source type (optional)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	AddOrUpdateDataTableEntries(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Retrieve a list of field names for the data shape associated with this stream, of a specific type
	 * @param type Base type name
	 * @return Field names
	 */
	GetFieldNamesByType(args?:{type?: BASETYPENAME}): INFOTABLE<EntityList>;

	/**
	 * Remove all data table entries
	 * @return result
	 */
	PurgeDataTableEntries(args?:{}): NOTHING;

	/**
	 * Add or update multiple data table entries based on a query
	 * @param sourceType Source type (optional)
	 * @param query Query definition
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	DeleteDataTableEntriesWithQuery(args?:{sourceType?: STRING, query?: QUERY, values?: INFOTABLE, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

	/**
	 * Delete an existing data table entry
	 * @param values Data values
	 * @return result
	 */
	DeleteDataTableEntry(args?:{values?: INFOTABLE}): NOTHING;

	/**
	 * Retrieve all table entries that match the search query parameters
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param query Query definition
	 * @param source Source (optional)
	 * @param tags Tags (optional)
	 * @return Table entries
	 */
	SearchDataTableEntries(args?:{maxItems?: NUMBER, searchExpression?: STRING, query?: QUERY, source?: STRING, tags?: TAGS}): INFOTABLE;


}
declare class RemoteBlog extends RemoteThing {


	/**
	 * Entry added
	 */
	Add: EVENT<EntryChangeEvent>;

	/**
	 * Entry deleted
	 */
	Delete: EVENT<EntryChangeEvent>;

	/**
	 * Entry added
	 */
	CommentAdd: EVENT<EntryCommentEvent>;

	/**
	 * Entry updated
	 */
	Update: EVENT<EntryChangeEvent>;
	/**
	 * Purge blog entries for a specified date range
	 * @param endDate End time
	 * @param startDate Start time
	 * @return result
	 */
	PurgeBlogEntries(args?:{endDate?: DATETIME, startDate?: DATETIME}): NOTHING;

	/**
	 * Delete a blog comment given a specific blog comment ID
	 * @param blogCommentId Blog comment id
	 * @return result
	 */
	DeleteComment(args?:{blogCommentId?: STRING}): NOTHING;

	/**
	 * Retrieve a list of blog comments given a specific blog entry ID
	 * @param blogEntryId Blog entry id
	 * @return Blog comments
	 */
	GetComments(args?:{blogEntryId?: STRING}): INFOTABLE<Comment>;

	/**
	 * Retrieve a list of all blog entries filtered tags, source, and optional an date range - with all comments
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @param source Source of this entry (optional)
	 * @param startDate Start time
	 * @param tags Tags
	 * @return All blog entries
	 */
	QueryBlogEntriesWithComments(args?:{maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, sortOrder?: STRING, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<BlogEntryWithComments>;

	/**
	 * Update a comment for a specific blog comment id
	 * @param sourceType Source type (optional)
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param blogCommentId Existing blog comment ID
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for comment entry
	 * @return result
	 */
	UpdateComment(args?:{sourceType?: STRING, location?: LOCATION, source?: STRING, blogCommentId?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): NOTHING;

	/**
	 * Update a blog entry
	 * @param blogEntryId Blog entry id
	 * @param sourceType Source type (optional)
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param title Blog entry title
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for blog entry
	 * @return result
	 */
	UpdateBlogEntry(args?:{blogEntryId?: STRING, sourceType?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): NOTHING;

	/**
	 * Add a new blog entry
	 * @param sourceType Source type (optional)
	 * @param location Location
	 * @param source Source of the blog entry
	 * @param title Blog entry title
	 * @param content Blog entry content
	 * @param tags Tags for the entry
	 * @param timestamp Time of the blog entry
	 * @return New blog entry ID
	 */
	AddBlogEntry(args?:{sourceType?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;

	/**
	 * Update the sticky status for a blog entry
	 * @param blogEntryId Blog entry id
	 * @param isSticky Sticky status
	 * @return result
	 */
	SetStickyStatus(args?:{blogEntryId?: STRING, isSticky?: BOOLEAN}): NOTHING;

	/**
	 * Rate an entry given a specific entry ID
	 * @param rating Rating
	 * @param entryId Entry id
	 * @return Rating
	 */
	RateContent(args?:{rating?: NUMBER, entryId?: STRING}): NUMBER;

	/**
	 * Retrieve a list of all blog entries with comments
	 * @param maxItems Maximum number of items to return
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @return All blog entries with comments
	 */
	GetBlogEntriesWithComments(args?:{maxItems?: NUMBER, sortOrder?: STRING}): INFOTABLE<BlogEntryWithComments>;

	/**
	 * Retrieve a blog comment given a specific blog comment ID
	 * @param blogCommentId Blog comment id
	 * @return Blog comments
	 */
	GetComment(args?:{blogCommentId?: STRING}): INFOTABLE<Comment>;

	/**
	 * Retrieve a list of all blog entries filtered tags, source, and optional an date range
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @param source Source of this entry (optional)
	 * @param startDate Start time
	 * @param tags Tags
	 * @return All blog entries
	 */
	QueryBlogEntries(args?:{maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, sortOrder?: STRING, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<BlogEntry>;

	/**
	 * Retrieve a list of all blog entries
	 * @param maxItems Maximum number of items to return
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @return All blog entries
	 */
	GetBlogEntries(args?:{maxItems?: NUMBER, sortOrder?: STRING}): INFOTABLE<BlogEntry>;

	/**
	 * Retrieve a list of all blog entries filtered by keyword query and optional date range
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @param source Source
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Matching entries
	 */
	SearchBlogEntriesWithComments(args?:{maxItems?: NUMBER, searchExpression?: STRING, sourceTags?: TAGS, endDate?: DATETIME, sortOrder?: STRING, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<BlogEntryWithComments>;

	/**
	 * Retrieve a list of all blog entries filtered by keyword query and optional date range
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param sortOrder Sort Order (Newest, HighestRated, MostActive)
	 * @param source Source
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Matching entries
	 */
	SearchBlogEntries(args?:{maxItems?: NUMBER, searchExpression?: STRING, sourceTags?: TAGS, endDate?: DATETIME, sortOrder?: STRING, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<BlogEntry>;

	/**
	 * Retrieve a blog entry given a specific blog entry ID
	 * @param blogEntryId Blog entry id
	 * @return Blog entry
	 */
	GetBlogEntry(args?:{blogEntryId?: STRING}): INFOTABLE<BlogEntry>;

	/**
	 * Delete a blog entry given a specific blog entry ID
	 * @param blogEntryId Blog entry id
	 * @return result
	 */
	DeleteBlogEntry(args?:{blogEntryId?: STRING}): NOTHING;

	/**
	 * Add a comment to a specific blog entry or blog comment
	 * @param blogEntryId Blog entry ID
	 * @param sourceType Source type (optional)
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param blogCommentId Existing blog comment ID
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for blog entry
	 * @return Created blog comment ID
	 */
	AddComment(args?:{blogEntryId?: STRING, sourceType?: STRING, location?: LOCATION, source?: STRING, blogCommentId?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;

	/**
	 * Retrieve a list of all blog entries by month
	 * @return Count of blog entries by month
	 */
	GetBlogActivityHistory(args?:{}): INFOTABLE<BlogHistory>;

	/**
	 * Retrieve a blog entry given a specific blog entry ID, with comments
	 * @param blogEntryId Blog entry id
	 * @return Blog entry
	 */
	GetBlogEntryWithComments(args?:{blogEntryId?: STRING}): INFOTABLE<BlogEntryWithComments>;


}
declare class Timer extends GenericThing {


	/**
	 * Current enabled status
	 */
	Enabled: BOOLEAN;

	/**
	 * Timer event
	 */
	Timer: EVENT<TimerEvent>;
	/**
	 * Enable this timer
	 * @return result
	 */
	EnableTimer(args?:{}): NOTHING;

	/**
	 * Disable this timer
	 * @return result
	 */
	DisableTimer(args?:{}): NOTHING;


}
declare class PredictionMicroserver extends AnalyticsJobServer {

	/**
	 * Sends any queued tasks to the connected thing.
	 * @return result
	 */
	SendQueuedTasks(args?:{}): NOTHING;

	/**
	 * Return the metadata for the connected thing
	 * @return Connected Thing metadata
	 */
	GetRemoteMetadata(args?:{}): TWJSON;

	/**
	 * Retrieve any tasks for this connected thing.
	 * @return Edge things
	 */
	GetQueuedTasks(args?:{}): INFOTABLE<MessageStoreList>;

	/**
	 * Get the events that are bound to the remote Thing
	 * @return The subscribed events for the Remote Thing
	 */
	GetEventSubscriptions(args?:{}): INFOTABLE<EdgeThingEventNotification>;

	/**
	 * Process remote events
	 * @param values Collection of events to be dispatched
	 * @return result
	 */
	ProcessRemoteEvents(args?:{values?: INFOTABLE<RemoteEvent>}): NOTHING;

	/**
	 * Write subscribed property values for a connected thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdateSubscribedPropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

	/**
	 * Sends up to a specific maximum number of queued tasks to the connected thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of queued tasks sent, up to maxCount.
	 */
	SendMaxQueuedTasks(args?:{maxCount?: INTEGER}): INTEGER;

	/**
	 * Get the properties plus data change type and data change threshold for the edge Thing
	 * @param options Binding options supported by the calling SDK
	 * @return The subscribed properties for the Remote Thing
	 */
	GetPropertySubscriptions(args?:{options?: TWJSON}): INFOTABLE<EdgeThingPropertyNotification>;


}
declare class GenericThing {


	/**
	 * Thing name
	 */
	readonly name: STRING;

	/**
	 * Thing description
	 */
	description: STRING;

	/**
	 * Thing Template
	 */
	readonly thingTemplate: THINGTEMPLATENAME;

	/**
	 * Thing Tags
	 */
	tags: TAGS;

	/**
	 * Alert acknowledge event for any property
	 */
	AnyAlertAck: EVENT<AlertEvent>;

	/**
	 * Anomaly Monitor Status
	 */
	AnomalyMonitorStatus: EVENT<AnomalyMonitorStatusEvent>;

	/**
	 * Data change event for any property
	 */
	AnyDataChange: EVENT<AnyDataChangeEvent>;

	/**
	 * Alert reset event
	 */
	AlertReset: EVENT<AlertEvent>;

	/**
	 * Alert reset event for any property
	 */
	AnyAlertReset: EVENT<AlertEvent>;

	/**
	 * Data change event
	 */
	DataChange: EVENT<DataChangeEvent>;

	/**
	 * Alert event
	 */
	Alert: EVENT<AlertEvent>;

	/**
	 * Alert event for any property
	 */
	AnyAlert: EVENT<AlertEvent>;

	/**
	 * Anomaly Monitor Status event for any property
	 */
	AnyAnomalyMonitorStatus: EVENT<AnyAnomalyMonitorStatusEvent>;

	/**
	 * Thing start event
	 */
	ThingStart: EVENT<ThingStartEvent>;

	/**
	 * Alert acknowledge event
	 */
	AlertAck: EVENT<AlertEvent>;
	/**
	 * Set the property binding for a property
	 * @param propertyName Property name
	 * @param aspects Aspects for the local binding
	 * @param sourceThingName Thing name to bind to
	 * @param sourcePropertyName Source property name
	 * @return result
	 */
	SetLocalPropertyBinding(args?:{propertyName?: STRING, aspects?: TWJSON, sourceThingName?: STRING, sourcePropertyName?: STRING}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetBooleanPropertyValue(args?:{propertyName?: STRING}): BOOLEAN;

	/**
	 * Get a list of assigned design time permissions
	 * @return Permission list
	 */
	GetDesignTimePermissions(args?:{}): INFOTABLE<Permissions>;

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
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddNumberValueStreamEntry(args?:{propertyName?: STRING, value?: NUMBER, timestamp?: DATETIME}): NOTHING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryVec2PropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<Vec2DataShape>;

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
	 * Purge all value stream entries for a specified date range
	 * @param endDate End time
	 * @param startDate Start time
	 * @return result
	 */
	PurgeAllPropertyHistory(args?:{endDate?: DATETIME, startDate?: DATETIME}): NOTHING;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddLocationValueStreamEntry(args?:{propertyName?: STRING, value?: LOCATION, timestamp?: DATETIME}): NOTHING;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddVec3ValueStreamEntry(args?:{propertyName?: STRING, value?: VEC3, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissions(args?:{}): INFOTABLE<Permissions>;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetVec3PropertyValue(args?:{propertyName?: STRING}): VEC3;

	/**
	 * Get the metadata in JSON format
	 * @return  metadata
	 */
	GetMetadataAsJSON(args?:{}): TWJSON;

	/**
	 * Remove the remote service binding for a service
	 * @param serviceName Service name
	 * @return result
	 */
	RemoveRemoteServiceBinding(args?:{serviceName?: STRING}): NOTHING;

	/**
	 * Get thing summary information
	 * @return Thing summary information
	 */
	GetThingSummaryInformation(args?:{}): INFOTABLE<Thing>;

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
	 * Acknowledge all active alerts
	 * @param message Message (optional)
	 * @return result
	 */
	AcknowledgeAllAlerts(args?:{message?: STRING}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetImagePropertyValue(args?:{propertyName?: STRING}): IMAGE;

	/**
	 * Set this as a published thing for federation
	 * @param publish Publish status (true/false)
	 * @return result
	 */
	SetPublished(args?:{publish?: BOOLEAN}): NOTHING;

	/**
	 * Get the outgoing dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetOutgoingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryStringPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<StringValueStream>;

	/**
	 * Get the Statuses of the given Alerts
	 * @return Status of all Alerts on this Thing
	 */
	GetAlertStatuses(args?:{}): INFOTABLE<AlertStatus>;

	/**
	 * Get published thing for federation
	 * @return Publishing status for this thing
	 */
	GetPublished(args?:{}): BOOLEAN;

	/**
	 * Enable all alerts for a thing
	 * @param persistent Persist this change
	 * @return result
	 */
	EnableAllAlerts(args?:{persistent?: BOOLEAN}): NOTHING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryBooleanPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<BooleanValueStream>;

	/**
	 * Add a run time permission
	 * @param allow Permission (true = allow, false = deny)
	 * @param principal Principal name (name of user or group)
	 * @param resource Resource name (* = all or enter a specific resource (i.e. Service, Property, Event) to override)
	 * @param type Permission type (PropertyRead PropertyWrite ServiceInvoke EventInvoke EventSubscribe)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddRunTimePermission(args?:{allow?: BOOLEAN, principal?: STRING, resource?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

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
	 * Get the logging status of a specific property from the effective Thing shape
	 * @param propertyName Property name to look up on the effective shape for its logging status
	 * @return Effective property logging status
	 */
	GetEffectivePropertyLogging(args?:{propertyName?: STRING}): BOOLEAN;

	/**
	 * Get the project name of this entity
	 * @return The project name of this entity
	 */
	GetProjectName(args?:{}): STRING;

	/**
	 * Get the implemented thing shapes for this thing
	 * @return Implemented Shapes
	 */
	GetImplementedShapes(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetThingCodePropertyValue(args?:{propertyName?: STRING}): THINGCODE;

	/**
	 * Write property values for a thing
	 * @param values Collection of properties to be updated
	 * @return result
	 */
	UpdatePropertyValues(args?:{values?: INFOTABLE<NamedVTQ>}): NOTHING;

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
	 * @param persistent Persist this change
	 * @param priority Alert priority
	 * @param enabled Alert enabled
	 * @return result
	 */
	AddOrUpdateAlert(args?:{alertType?: STRING, alertName?: STRING, property?: STRING, description?: STRING, attributes?: INFOTABLE, persistent?: BOOLEAN, priority?: INTEGER, enabled?: BOOLEAN}): NOTHING;

	/**
	 * Query the alert history
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Alert History
	 */
	QueryAlertHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, startDate?: DATETIME}): INFOTABLE<AlertHistory>;

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
	GetDifferencesAsJSON(args?:{otherEntity?: STRING}): TWJSON;

	/**
	 * Add multiple property definitions at once
	 * @param ignoreInvalidDefinitions True will skip over any invalid definitions provided, false indicates to fail the whole transaction when at least one invalid definition is found
	 * @param values Infotable where each row defines a property, using the PropertyDefinitionWithDetails data shape
	 * @return Table of information about which properties caused errors while attempting to add
	 */
	AddPropertyDefinitions(args?:{ignoreInvalidDefinitions?: BOOLEAN, values?: INFOTABLE<PropertyDefinitionWithDetails>}): INFOTABLE<BulkProcessingReport>;

	/**
	 * Disable alert(s) for a property. Specify alertName for a specific property alert; otherwise, all alerts are disabled.
	 * @param alertName Alert name
	 * @param property Property name
	 * @param persistent Persist this change
	 * @return result
	 */
	DisableAlertsForProperty(args?:{alertName?: STRING, property?: STRING, persistent?: BOOLEAN}): NOTHING;

	/**
	 * Get Enabled Status
	 * @return Enabled status
	 */
	IsEnabled(args?:{}): BOOLEAN;

	/**
	 * Check to see if a thing implements a particular thing shape
	 * @param thingShapeName Thing shape name
	 * @return Implements Shape
	 */
	ImplementsShape(args?:{thingShapeName?: THINGSHAPENAME}): BOOLEAN;

	/**
	 * Get the current property values for this thing as VTQ
	 * @return Property values
	 */
	GetPropertyValuesVTQ(args?:{}): INFOTABLE;

	/**
	 * Set property logging status for a specific property
	 * @param propertyName Property name
	 * @param enabled Enable/disable logging
	 * @return result
	 */
	SetPropertyLogging(args?:{propertyName?: STRING, enabled?: BOOLEAN}): NOTHING;

	/**
	 * Get the difference between this entity and another
	 * @param otherEntity Entity to compare
	 * @return Created Infotable
	 */
	GetDifferences(args?:{otherEntity?: STRING}): INFOTABLE<Difference>;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddLongValueStreamEntry(args?:{propertyName?: STRING, value?: LONG, timestamp?: DATETIME}): NOTHING;

	/**
	 * Set the additional information for units for a specific Long, Integer, or Number property.
	 * @param propertyName Property name
	 * @param units Units (eg. lbs, F, inches, etc.) associated with input. For information only.
	 * @return result
	 */
	SetUnitsForNumericPropertyDefinition(args?:{propertyName?: STRING, units?: STRING}): NOTHING;

	/**
	 * Adds a ConfigurationTableDefinition and creates and ConfigurationTable from the definition
	 * @param isMultiRow Controls whether the configuration table should accept tabular entry of data or key/value entry. When set to true, the fields in the data shape provided will be interpreted as column descriptors. When set to false or omitted, the fields are interpreted as row descriptors
	 * @param name The name of the configuration table. This name should be used when retrieving values from the configuration table during execution. Configuration tables must have unique names that obey standard ThingWorx entity naming conventions. It is strongly recommended that you always specify a non-empty configuration table name
	 * @param description A short description of the configuration table and its purpose
	 * @param category A category that conceptually groups together related configuration tables.
	 * @param dataShapeName This datashape will be used as the data shape for the Configuration table. Any changes to the datashape like adding or deleting fields will reflect on the configuration table.
	 * @param isHidden Controls whether the configuration table should be hidden by Composer (e.g. if the configuration is for internal purposes only) 
	 * @param ordinal Controls the order in which the configuration tables should be rendered. Any non-negative integer is permitted, where lower values take higher precedence over larger values. If several tables share the same ordinal, then the order is non-deterministic
	 * @return result
	 */
	AddConfigurationTableDefinition(args:{isMultiRow?: BOOLEAN, name: STRING, description?: STRING, category?: STRING, dataShapeName: DATASHAPENAME, isHidden?: BOOLEAN, ordinal?: INTEGER}): NOTHING;

	/**
	 * Get a list of logged properties for this thing that are of a numeric data type
	 * @return Property names
	 */
	GetNumericLoggedProperties(args?:{}): INFOTABLE<PropertyDefinition>;

	/**
	 * Get a subset of the current property values for this thing
	 * @param propertyNames List of property names
	 * @return Property values
	 */
	GetNamedProperties(args?:{propertyNames?: TWJSON}): INFOTABLE;

	/**
	 * Set the remote property binding for a property
	 * @param propertyName Property name
	 * @param aspects Aspects for the remote binding
	 * @param pushThreshold Push threshold
	 * @param foldType How a remote property's value should be handled by the server when a connection is lost
	 * @param sourcePropertyName Source property name
	 * @param timeout Request timeout
	 * @param cacheTime Property's cache time value at the server in milliseconds
	 * @param pushType Push type
	 * @return result
	 */
	SetRemotePropertyBinding(args?:{propertyName?: STRING, aspects?: TWJSON, pushThreshold?: NUMBER, foldType?: STRING, sourcePropertyName?: STRING, timeout?: INTEGER, cacheTime?: INTEGER, pushType?: STRING}): NOTHING;

	/**
	 * Get ann event definitions for this thing
	 * @param name Name
	 * @return Event definition
	 */
	GetEventDefinition(args?:{name?: STRING}): INFOTABLE<EventDefinition>;

	/**
	 * Restart this thing
	 * @return result
	 */
	RestartThing(args?:{}): NOTHING;

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
	 * @param remote Is a remote property
	 * @param type Data type
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
	AddPropertyDefinition(args?:{defaultValue?: STRING, remoteBindingAspects?: TWJSON, description?: STRING, readOnly?: BOOLEAN, remote?: BOOLEAN, type?: BASETYPENAME, remotePropertyName?: STRING, timeout?: INTEGER, pushType?: STRING, dataChangeThreshold?: NUMBER, logged?: BOOLEAN, name?: STRING, pushThreshold?: NUMBER, dataChangeType?: STRING, category?: STRING, persistent?: BOOLEAN, dataShape?: DATASHAPENAME}): NOTHING;

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
	 * Check to see if a thing is in a specific network
	 * @param network Network name
	 * @return Result
	 */
	IsInNetwork(args?:{network?: STRING}): BOOLEAN;

	/**
	 * Remove a dynamic subscription
	 * @param propertyName Property name
	 * @param eventName Event name
	 * @param thingName Thing name
	 * @param serviceName Local service name
	 * @return result
	 */
	RemoveDynamicSubscription(args?:{propertyName?: STRING, eventName?: STRING, thingName?: THINGNAME, serviceName?: STRING}): NOTHING;

	/**
	 * Remove tags from an entity
	 * @param tags Tags to remove from the entity
	 * @return result
	 */
	RemoveTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetNumberPropertyValue(args?:{propertyName?: STRING}): NUMBER;

	/**
	 * Get avatar image
	 * @return Entity avatar
	 */
	GetAvatar(args?:{}): IMAGE;

	/**
	 * Get a list of logged properties for this thing
	 * @param type Type to filter on
	 * @return Property names
	 */
	GetLoggedProperties(args?:{type?: BASETYPENAME}): INFOTABLE<PropertyDefinition>;

	/**
	 * Enable this thing
	 * @return result
	 */
	EnableThing(args?:{}): NOTHING;

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
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetStringPropertyValue(args?:{propertyName?: STRING}): STRING;

	/**
	 * Get the instance metadata in JSON format
	 * @return Instance metadata
	 */
	GetInstanceMetadataAsJSON(args?:{}): TWJSON;

	/**
	 * Save any changes to configuration tables
	 * @return result
	 */
	SaveConfigurationTables(args?:{}): NOTHING;

	/**
	 * Acknowledge an active alert
	 * @param property Property name
	 * @param message Message (optional)
	 * @return result
	 */
	AcknowledgeAlert(args?:{property?: STRING, message?: STRING}): NOTHING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryLocationPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<LocationValueStream>;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryVec4PropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<Vec4DataShape>;

	/**
	 * Set the remote service binding for a service
	 * @param sourceServiceName Source service name
	 * @param serviceName Service name
	 * @param timeout Request timeout
	 * @return result
	 */
	SetRemoteServiceBinding(args?:{sourceServiceName?: STRING, serviceName?: STRING, timeout?: INTEGER}): NOTHING;

	/**
	 * Check to see if a thing is derived from a particular thing template
	 * @param thingTemplateName Thing template name
	 * @return Is Derived From Template
	 */
	IsDerivedFromTemplate(args?:{thingTemplateName?: THINGTEMPLATENAME}): BOOLEAN;

	/**
	 * Store properties of this thing to a stream
	 * @param name Stream name
	 * @param tags Tags
	 * @return result
	 */
	WritePropertiesToStream(args?:{name?: THINGNAME, tags?: TAGS}): NOTHING;

	/**
	 * Return a list of all the things referenced by this thing
	 * @param maxDepth Maximum depth to search
	 * @return Thing connections
	 */
	GetThingRelationships(args?:{maxDepth?: INTEGER}): INFOTABLE<ThingRelationship>;

	/**
	 * Returns true if given dynamic subscription is present
	 * @param propertyName Property name
	 * @param eventName Event name
	 * @param thingName Thing name
	 * @param serviceName Local service name
	 * @return True/false based on if given dynamic subscription exist or not
	 */
	IsDynamicSubscriptionCreated(args?:{propertyName?: STRING, eventName?: STRING, thingName?: THINGNAME, serviceName?: STRING}): BOOLEAN;

	/**
	 * Get a list of configuration tables
	 * @return Configuration Tables
	 */
	GetConfigurationTables(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddVec4ValueStreamEntry(args?:{propertyName?: STRING, value?: VEC4, timestamp?: DATETIME}): NOTHING;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddDateTimeValueStreamEntry(args?:{propertyName?: STRING, value?: DATETIME, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get the current service definitions for this thing
	 * @param category Category to filter on
	 * @param type Type to filter on
	 * @param dataShape Data shape to filter on if InfoTable base type
	 * @return Service definitions
	 */
	GetServiceDefinitions(args?:{category?: STRING, type?: BASETYPENAME, dataShape?: DATASHAPENAME}): INFOTABLE<ServiceDefinition>;

	/**
	 * Purge all value stream entries for a specified date range for a given list of properties
	 * @param propertiesToPurge Properties to purge
	 * @param endDate End time
	 * @param startDate Start time
	 * @return result
	 */
	PurgeSelectedPropertyHistory(args?:{propertiesToPurge?: INFOTABLE<PropertyList>, endDate?: DATETIME, startDate?: DATETIME}): NOTHING;

	/**
	 * Set home mashup
	 * @param name Home mashup name
	 * @return result
	 */
	SetHomeMashup(args?:{name?: MASHUPNAME}): NOTHING;

	/**
	 * Assign an owner to this entity
	 * @param name User name
	 * @return result
	 */
	SetOwner(args?:{name?: USERNAME}): NOTHING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryNumberPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<NumberValueStream>;

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
	 * Get the Status of the given Alert
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Status of Alert
	 */
	GetAlertStatus(args?:{alertName?: STRING, property?: STRING}): STRING;

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
	 * Get the networks associated with a thing
	 * @return Networks
	 */
	GetNetworks(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Delete an entire configuration table
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTable(args?:{persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Get current user permissions
	 * @param name Target name (or wildcard)
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForCurrentUser(args?:{name?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Get the tags for an entity as an InfoTable
	 * @return tags
	 */
	GetTagsAsInfoTable(args?:{}): INFOTABLE<VocabularyTermList>;

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
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, startDate?: DATETIME}): INFOTABLE;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetVec2PropertyValue(args?:{propertyName?: STRING}): VEC2;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryLongPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<LongValueStream>;

	/**
	 * Remove the local property binding for a property
	 * @param propertyName Property name
	 * @return result
	 */
	RemoveLocalPropertyBinding(args?:{propertyName?: STRING}): NOTHING;

	/**
	 * Set a list of assigned design time permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetDesignTimePermissionsAsJSON(args?:{permissions?: TWJSON}): NOTHING;

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
	 * Get group permissions
	 * @param name Target name (or wildcard)
	 * @param group Group name
	 * @param permissionName Permission name
	 * @return Permissions
	 */
	GetPermissionsForGroup(args?:{name?: STRING, group?: STRING, permissionName?: STRING}): INFOTABLE<UserPermissions>;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddIntegerValueStreamEntry(args?:{propertyName?: STRING, value?: INTEGER, timestamp?: DATETIME}): NOTHING;

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
	GetMetadataWithPermissionsAsJSON(args?:{}): TWJSON;

	/**
	 * Overwrite/set the tags for an entity
	 * @param tags Tags for an entity
	 * @return result
	 */
	SetTags(args?:{tags?: TAGS}): NOTHING;

	/**
	 * Get the incoming dependencies
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependencies(args?:{maxItems?: NUMBER}): INFOTABLE<EntityDescriptor>;

	/**
	 * Get the metadata in InfoTable format
	 * @return  metadata
	 */
	GetMetadata(args?:{}): INFOTABLE;

	/**
	 * Get the locally implemented thing shapes for this thing
	 * @return Implemented Shapes
	 */
	GetLocallyImplementedShapes(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Promote an overridden alert to the nearest parent in its heirarchy that defines it.  Currently only Anomaly type Alerts are supported.
	 * @param alertName Alert name
	 * @param propertyName Property name
	 * @return result
	 */
	PromoteAlert(args?:{alertName?: STRING, propertyName?: STRING}): NOTHING;

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
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddBooleanValueStreamEntry(args?:{propertyName?: STRING, value?: BOOLEAN, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get a subset of the current property values for this thing
	 * @param propertyNames Property names
	 * @return Property values
	 */
	GetNamedPropertyValues(args?:{propertyNames?: INFOTABLE<EntityList>}): INFOTABLE;

	/**
	 * Check to see if an entity has a specific run time permission for a specific group
	 * @param name Name of the resource (i.e. property, service, event) to check
	 * @param type Permission type
	 * @param group Group name
	 * @return True/false based on if the group has the specified permission
	 */
	CheckPermissionForGroup(args?:{name?: STRING, type?: STRING, group?: GROUPNAME}): BOOLEAN;

	/**
	 * Get a list of assigned designtime permissions
	 * @return Permission list
	 */
	GetDesignTimePermissionsAsJSON(args?:{}): TWJSON;

	/**
	 * Set the identifier for a thing
	 * @param identifier Thing identifier for remote things
	 * @return result
	 */
	SetIdentifier(args?:{identifier?: STRING}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetDateTimePropertyValue(args?:{propertyName?: STRING}): DATETIME;

	/**
	 * Disable Subscription
	 * @param propertyName Property name
	 * @param eventName Event name
	 * @param thingName Thing name
	 * @return result
	 */
	DisableSubscription(args?:{propertyName?: STRING, eventName?: STRING, thingName?: THINGNAME}): NOTHING;

	/**
	 * Get Training Statistics for given Alert
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Anomaly Alert Training Statistics for given Alert
	 */
	GetAnomalyAlertTrainingStatisticsForAlert(args?:{alertName?: STRING, property?: STRING}): INFOTABLE<AnomalyAlertTrainingStatistics>;

	/**
	 * Has any property changed since a given time
	 * @param timestamp Timestamp to compare
	 * @return Result
	 */
	HavePropertiesChangedSince(args?:{timestamp?: DATETIME}): BOOLEAN;

	/**
	 * Get the identifier for a thing
	 * @return Identifier
	 */
	GetIdentifier(args?:{}): STRING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryImagePropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<ImageValueStream>;

	/**
	 * Set a list of assigned visibility permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetVisibilityPermissionsAsJSON(args?:{permissions?: TWJSON}): NOTHING;

	/**
	 * Get alert definition for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Alert definition
	 */
	GetAlertDefinition(args?:{alertName?: STRING, property?: STRING}): INFOTABLE<AlertDefinition>;

	/**
	 * Add a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	AddVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Remove an alert for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @param persistent Persist this change
	 * @return result
	 */
	RemoveAlert(args?:{alertName?: STRING, property?: STRING, persistent?: BOOLEAN}): NOTHING;

	/**
	 * Get a location alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetLocationAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): LOCATION;

	/**
	 * Get the mashups related to this thing
	 * @return Mashups
	 */
	GetMashups(args?:{}): INFOTABLE<MashupList>;

	/**
	 * Get a list of assigned runtime permissions
	 * @return Permission list
	 */
	GetRunTimePermissionsAsJSON(args?:{}): TWJSON;

	/**
	 * Add a dynamic subscription
	 * @param propertyName Property name
	 * @param eventName Event name
	 * @param thingName Thing name
	 * @param serviceName Local service name
	 * @return result
	 */
	AddDynamicSubscription(args?:{propertyName?: STRING, eventName?: STRING, thingName?: THINGNAME, serviceName?: STRING}): NOTHING;

	/**
	 * Get a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetIntegerAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): INTEGER;

	/**
	 * Get incoming local bindings to this thing for the given property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetIncomingLocalPropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<IncomingLocalPropertyBinding>;

	/**
	 * Set the value stream for a thing
	 * @param name Value stream name
	 * @return result
	 */
	SetValueStream(args?:{name?: THINGNAME}): NOTHING;

	/**
	 * Remove a service definition
	 * @param name Service name
	 * @return result
	 */
	RemoveServiceDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Get a long alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetLongAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): LONG;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddStringValueStreamEntry(args?:{propertyName?: STRING, value?: STRING, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get the current property values for this thing
	 * @return Property values
	 */
	GetPropertyValues(args?:{}): INFOTABLE;

	/**
	 * Get the property binding for a property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetLocalPropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get alert summary status
	 * @param maxItems Maximum number of items to return
	 * @param onlyUnacknowledged Show only unacknowledged alerts
	 * @param onlyAcknowledged Show only acknowledged alerts
	 * @return Alert status
	 */
	GetAlertSummary(args?:{maxItems?: NUMBER, onlyUnacknowledged?: BOOLEAN, onlyAcknowledged?: BOOLEAN}): INFOTABLE<AlertSummary>;

	/**
	 * Query the alert summary
	 * @param maxItems Maximum number of items to return
	 * @param onlyUnacknowledged Show only unacknowledged alerts
	 * @param query Query definition
	 * @param onlyAcknowledged Show only acknowledged alerts
	 * @return Alert Summary
	 */
	QueryAlertSummary(args?:{maxItems?: NUMBER, onlyUnacknowledged?: BOOLEAN, query?: QUERY, onlyAcknowledged?: BOOLEAN}): INFOTABLE<AlertSummary>;

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
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetLongPropertyValue(args?:{propertyName?: STRING}): LONG;

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
	 * Get the thing template for this thing
	 * @return Thing Template
	 */
	GetThingTemplate(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyNames Property names
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryNamedPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyNames?: INFOTABLE<EntityList>, query?: QUERY, startDate?: DATETIME}): INFOTABLE;

	/**
	 * Get a subset of the current property values for this thing
	 * @param values Property values
	 * @return result
	 */
	SetPropertyValues(args?:{values?: INFOTABLE}): NOTHING;

	/**
	 * Get AnomalyAlert Training Statistics for given Property
	 * @param property Property name
	 * @return Training Statistics of all AnomalyAlerts on the Property
	 */
	GetAnomalyAlertTrainingStatisticsForProperty(args?:{property?: STRING}): INFOTABLE<AnomalyAlertTrainingStatistics>;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryIntegerPropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<IntegerValueStream>;

	/**
	 * Disable this thing
	 * @return result
	 */
	DisableThing(args?:{}): NOTHING;

	/**
	 * Get the current property definitions for this thing
	 * @param name Name
	 * @return Property definition
	 */
	GetPropertyDefinition(args?:{name?: STRING}): INFOTABLE<PropertyDefinition>;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddThingCodeValueStreamEntry(args?:{propertyName?: STRING, value?: THINGCODE, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get alert summary for a property
	 * @param maxItems Maximum number of items to return
	 * @param onlyUnacknowledged Show only unacknowledged alerts
	 * @param property Property name
	 * @param onlyAcknowledged Show only acknowledged alerts
	 * @return Alert summary
	 */
	GetAlertSummaryForProperty(args?:{maxItems?: NUMBER, onlyUnacknowledged?: BOOLEAN, property?: STRING, onlyAcknowledged?: BOOLEAN}): INFOTABLE<PropertyAlertSummary>;

	/**
	 * Get the timestamp for a specific property
	 * @param propertyName Property name
	 * @return Time value
	 */
	GetPropertyTime(args?:{propertyName?: STRING}): DATETIME;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddVec2ValueStreamEntry(args?:{propertyName?: STRING, value?: VEC2, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get all things and their properties that have local bindings on this thing
	 * @return Property binding
	 */
	GetIncomingLocalPropertyBindings(args?:{}): INFOTABLE<IncomingLocalPropertyBinding>;

	/**
	 * Get avatar image url
	 * @return Entity avatar URL
	 */
	GetAvatarURL(args?:{}): IMAGELINK;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddImageValueStreamEntry(args?:{propertyName?: STRING, value?: IMAGE, timestamp?: DATETIME}): NOTHING;

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
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryThingCodePropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<ThingCodeDataShape>;

	/**
	 * Remove the remote event binding for a event
	 * @param eventName Event name
	 * @return result
	 */
	RemoveRemoteEventBinding(args?:{eventName?: STRING}): NOTHING;

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
	 * Get the Statuses of the given Alerts
	 * @param property Property name
	 * @return Status of all Alerts on the Property
	 */
	GetAlertStatusesForProperty(args?:{property?: STRING}): INFOTABLE;

	/**
	 * Get a numeric alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetNumberAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): NUMBER;

	/**
	 * Get All AnomalyAlert Training Statistics on this Thing
	 * @return AnomalyAlert Training Statistics on this Thing
	 */
	GetAllAnomalyAlertTrainingStatistics(args?:{}): INFOTABLE<AnomalyAlertTrainingStatistics>;

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
	GetInstanceMetadataWithPermissionsAsJSON(args?:{}): TWJSON;

	/**
	 * Get a list of assigned visibility permissions
	 * @return Permission list
	 */
	GetVisibilityPermissionsAsJSON(args?:{}): TWJSON;

	/**
	 * Get the incoming dependencies as a network
	 * @param maxDepth Maximum depth to traverse
	 * @param maxItems Maximum number of items to return
	 * @return Related entities
	 */
	GetIncomingDependenciesAsNetwork(args?:{maxDepth?: NUMBER, maxItems?: NUMBER}): INFOTABLE<EntityNetwork>;

	/**
	 * Check to see if an alert is defined for a property
	 * @param alertName Alert name
	 * @param property Property name
	 * @return Has alert definition
	 */
	HasAlert(args?:{alertName?: STRING, property?: STRING}): BOOLEAN;

	/**
	 * Remove a event definition
	 * @param name Event name
	 * @return result
	 */
	RemoveEventDefinition(args?:{name?: STRING}): NOTHING;

	/**
	 * Set a list of assigned runtime permissions
	 * @param permissions Permissions in JSON format
	 * @return result
	 */
	SetRunTimePermissionsAsJSON(args?:{permissions?: TWJSON}): NOTHING;

	/**
	 * Enable Subscription
	 * @param propertyName Property name
	 * @param eventName Event name
	 * @param thingName Thing name
	 * @return result
	 */
	EnableSubscription(args?:{propertyName?: STRING, eventName?: STRING, thingName?: THINGNAME}): NOTHING;

	/**
	 * Get the date edit was last modified
	 * @return Last modified date
	 */
	GetLastModifiedDate(args?:{}): DATETIME;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryDateTimePropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<DateTimeValueStream>;

	/**
	 * Set the remote event binding for a event
	 * @param sourceEventName Source event name
	 * @param eventName Event name
	 * @return result
	 */
	SetRemoteEventBinding(args?:{sourceEventName?: STRING, eventName?: STRING}): NOTHING;

	/**
	 * Enable alert(s) for a property. Specify alertName for a specific property alert; otherwise, all alerts are enabled.
	 * @param alertName Alert name
	 * @param property Property name
	 * @param persistent Persist this change
	 * @return result
	 */
	EnableAlertsForProperty(args?:{alertName?: STRING, property?: STRING, persistent?: BOOLEAN}): NOTHING;

	/**
	 * Get a string alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetStringAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): STRING;

	/**
	 * Delete one or more rows from a multi-row configuration table
	 * @param values Configuration table rows to modify
	 * @param persistent Persist these changes
	 * @param tableName Configuration table name
	 * @return result
	 */
	DeleteConfigurationTableRows(args?:{values?: INFOTABLE, persistent?: BOOLEAN, tableName?: STRING}): NOTHING;

	/**
	 * Remove a property definition
	 * @param name Property name
	 * @return result
	 */
	RemovePropertyDefinition(args?:{name?: STRING}): NOTHING;

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
	 * Add a design time permission
	 * @param allow Permission (true = allow, false = deny)
	 * @param principal Principal name (name of user or group)
	 * @param type Permission type (Create, Read, Update, Delete)
	 * @param principalType Principal type (User or Group)
	 * @return result
	 */
	AddDesignTimePermission(args?:{allow?: BOOLEAN, principal?: STRING, type?: STRING, principalType?: STRING}): NOTHING;

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
	 * Get a boolean alert parameter
	 * @param alertName Alert name
	 * @param property Property name
	 * @param parameterName Parameter name
	 * @return Alert parameter value
	 */
	GetBooleanAlertParameter(args?:{alertName?: STRING, property?: STRING, parameterName?: STRING}): BOOLEAN;

	/**
	 * Get the effective local property bindings
	 * @return Property binding
	 */
	GetEffectiveLocalPropertyBindings(args?:{}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get the description for an entity
	 * @return description
	 */
	GetDescription(args?:{}): STRING;

	/**
	 * Disable all alerts for a thing
	 * @param persistent Persist this change
	 * @return result
	 */
	DisableAllAlerts(args?:{persistent?: BOOLEAN}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetLocationPropertyValue(args?:{propertyName?: STRING}): LOCATION;

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
	 * Get a subset of the current property values (VTQ) and the highest alert for this thing
	 * @param propertyNames Property names
	 * @return Property values VTQA
	 */
	GetNamedPropertyValuesVTQA(args?:{propertyNames?: INFOTABLE<EntityList>}): INFOTABLE;

	/**
	 * Add a new stream entry
	 * @param propertyName Property name
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddInfoTableValueStreamEntry(args?:{propertyName?: STRING, value?: INFOTABLE, timestamp?: DATETIME}): NOTHING;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetVec4PropertyValue(args?:{propertyName?: STRING}): VEC4;

	/**
	 * Set the avatar icon for the entity
	 * @param content Base 64 Encoded Content
	 * @return result
	 */
	SetAvatar(args?:{content?: IMAGE}): NOTHING;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param flatten Flatten the result
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryInfoTablePropertyHistory(args?:{flatten?: BOOLEAN, oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<InfoTableValueStream>;

	/**
	 * Set the project name of this entity
	 * @param projectName Project name
	 * @return result
	 */
	SetProjectName(args?:{projectName?: PROJECTNAME}): NOTHING;

	/**
	 * Retrain an Anomaly Alert
	 * @param alertName Alert name
	 * @param propertyName Property name
	 * @return result
	 */
	RetrainAlert(args?:{alertName?: STRING, propertyName?: STRING}): NOTHING;

	/**
	 * Get property logging status for a specific property
	 * @param propertyName Property name
	 * @return Property logging status
	 */
	GetPropertyLogging(args?:{propertyName?: STRING}): BOOLEAN;

	/**
	 * Query stream entries, along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param propertyName Property name
	 * @param query Query definition
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryVec3PropertyHistory(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, propertyName?: STRING, query?: QUERY, startDate?: DATETIME}): INFOTABLE<Vec3DataShape>;

	/**
	 * Overwrite/set the description for an entity
	 * @param description Description for an entity
	 * @return result
	 */
	SetDescription(args?:{description?: STRING}): NOTHING;

	/**
	 * Get a specific configuration table as an InfoTable
	 * @param tableName Configuration table name
	 * @return table
	 */
	GetConfigurationTable(args?:{tableName?: STRING}): INFOTABLE;

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
	 * Purge stream entries for a specified date range
	 * @param endDate End time
	 * @param immediate Delete immediately
	 * @param propertyName Property name
	 * @param startDate Start time
	 * @return result
	 */
	PurgePropertyHistory(args?:{endDate?: DATETIME, immediate?: BOOLEAN, propertyName?: STRING, startDate?: DATETIME}): NOTHING;

	/**
	 * Delete a visibility permission
	 * @param principal Principal name (name of organization or organization unit)
	 * @param principalType Principal type (Organization or Organization Unit)
	 * @return result
	 */
	DeleteVisibilityPermission(args?:{principal?: STRING, principalType?: STRING}): NOTHING;

	/**
	 * Get the current property values (VTQ) and the highest alert for this thing
	 * @return Property values VTQA
	 */
	GetPropertyValuesVTQA(args?:{}): INFOTABLE;

	/**
	 * Get the current property value
	 * @param propertyName Property name
	 * @return Property value
	 */
	GetIntegerPropertyValue(args?:{propertyName?: STRING}): INTEGER;

	/**
	 * Get the effective local property binding for a property
	 * @param propertyName Property name
	 * @return Property binding
	 */
	GetEffectiveLocalPropertyBinding(args?:{propertyName?: STRING}): INFOTABLE<LocalPropertyBinding>;

	/**
	 * Get the current property values for this thing
	 * @return Property values
	 */
	GetPropertyValuesAsMultiRowTable(args?:{}): INFOTABLE;


}
declare class RemoteThingWithTunnelsAndFileTransfer extends RemoteThing {


	/**
	 * Tunnel notification
	 */
	TunnelSession: EVENT<TunnelSession>;

	/**
	 * File transfer notification
	 */
	FileTransfer: EVENT<FileTransferJob>;
	/**
	 * Delete a file
	 * @param path File path
	 * @return result
	 */
	DeleteFile(args?:{path?: STRING}): NOTHING;

	/**
	 * Get information about a specific tunnel endpoint registered at the edge
	 * @param name Name of the tunnel to query
	 * @return A tunnel endpoint
	 */
	GetTunnel(args?:{name?: STRING}): INFOTABLE<TunnelEndpoint>;

	/**
	 * Get a list of Tunnel Endpoints registered at the edge
	 * @return List of registered tunnel endpoints
	 */
	GetTunnels(args?:{}): INFOTABLE<TunnelEndpoint>;

	/**
	 * Get file system listing
	 * @param path Directory path
	 * @param nameMask Name mask
	 * @return File Results
	 */
	GetFileListing(args?:{path?: STRING, nameMask?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Get the tunnel status and access URL
	 * @return Tunnel status
	 */
	GetTunnelStatus(args?:{}): INFOTABLE<TunnelStatus>;

	/**
	 * Remove a tunnel endpoint from the edge
	 * @param name Name of the tunnel to remove
	 * @return result
	 */
	RemoveTunnel(args?:{name?: STRING}): NOTHING;

	/**
	 * Move a file
	 * @param targetPath Target path
	 * @param overwrite Overwrite existing file
	 * @param sourcePath Path of file to move
	 * @return result
	 */
	MoveFile(args?:{targetPath?: STRING, overwrite?: BOOLEAN, sourcePath?: STRING}): NOTHING;

	/**
	 * Get file info
	 * @param path File path
	 * @return File Results
	 */
	GetFileInfo(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Get listing of directories
	 * @param path Directory path
	 * @return File Results
	 */
	ListDirectories(args?:{path?: STRING}): INFOTABLE<FileSystemDirectory>;

	/**
	 * validate the file transfer based on the validation signature
	 * @param fromUri File source uri
	 * @param toUri File destination uri
	 * @param md5 Checksum signature used for validation
	 * @param sid File transfer Job ID
	 * @return result
	 */
	ValidateFileTransfer(args?:{fromUri?: STRING, toUri?: STRING, md5?: STRING, sid?: STRING}): NOTHING;

	/**
	 * Register a new tunnel endpoint at the edge
	 * @param numConnects The number of connections required to initilaize the tunnel
	 * @param port Port that the tunnel will connect to
	 * @param proto Protocol used by the tunnel
	 * @param host Host that the tunnel will connect to
	 * @param name Name of the tunnel to add
	 * @param description Description of the tunnel
	 * @param appUri Location of the client app that will use this tunnel
	 * @return result
	 */
	AddTunnel(args?:{numConnects?: NUMBER, port?: NUMBER, proto?: STRING, host?: STRING, name?: STRING, description?: STRING, appUri?: STRING}): NOTHING;

	/**
	 * Get file system listing
	 * @param path Directory path
	 * @param nameMask Name mask
	 * @return File Results
	 */
	ListFiles(args?:{path?: STRING, nameMask?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Get a list of files and/or directories on the Edge Thing
	 * @param path Directory path
	 * @return Browse Results
	 */
	BrowseDirectory(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Get directory structure
	 * @return The directory structure at the edge
	 */
	GetDirectoryStructure(args?:{}): INFOTABLE<FileSystemDirectory>;

	/**
	 * Get a list of Tunnels registered at the edge
	 * @return Tunnel names
	 */
	GetTunnelNames(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get a list of files and/or directories on the Edge Thing
	 * @param path Directory path
	 * @return Browse Results
	 */
	BrowseFileSystem(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;


}
declare class Wiki extends ThingTemplateWithShapes(GenericThing, WikiShape) {


	/**
	 * Entry added
	 */
	Add: EVENT<EntryChangeEvent>;

	/**
	 * Entry deleted
	 */
	Delete: EVENT<EntryChangeEvent>;

	/**
	 * Entry added
	 */
	CommentAdd: EVENT<EntryCommentEvent>;

	/**
	 * Entry updated
	 */
	Update: EVENT<EntryChangeEvent>;
	/**
	 * Delete a comment from an existing page with a specific comment ID
	 * @param wikiCommentId Existing wiki comment ID (optional)
	 * @return result
	 */
	DeleteComment(args?:{wikiCommentId?: STRING}): NOTHING;

	/**
	 * Get a list of comments for a specific wiki page
	 * @param wikiPageId Wiki page ID
	 * @return Wiki comments
	 */
	GetComments(args?:{wikiPageId?: STRING}): INFOTABLE<Comment>;

	/**
	 * Retrieve a specific wiki page with comments
	 * @param wikiPageId Wiki page ID
	 * @return Wiki page with comments
	 */
	GetWikiPageWithComments(args?:{wikiPageId?: STRING}): INFOTABLE<WikiPageWithComments>;

	/**
	 * Retrieve all wiki pages based on a keyword/search expression and optional date range
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param withContent With content
	 * @param source Source
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Matching entries
	 */
	SearchWikiPagesWithComments(args?:{maxItems?: NUMBER, searchExpression?: STRING, sourceTags?: TAGS, endDate?: DATETIME, withContent?: BOOLEAN, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<WikiPageWithComments>;

	/**
	 * Update a comment with a specific comment ID
	 * @param sourceType Source type (optional)
	 * @param location Location of the entry
	 * @param wikiCommentId Existing wiki comment ID (optional)
	 * @param source Source of the entry (person/thing)
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for wiki comment
	 * @return result
	 */
	UpdateComment(args?:{sourceType?: STRING, location?: LOCATION, wikiCommentId?: STRING, source?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): NOTHING;

	/**
	 * Purge all wiki pages
	 * @return result
	 */
	PurgeWikiPages(args?:{}): NOTHING;

	/**
	 * Retrieve all wiki pages with comments
	 * @param maxItems Maximum number of items to return
	 * @param parentWikiPageId Parent Wiki Page ID
	 * @return Wiki pages with comments
	 */
	GetChildWikiPagesWithComments(args?:{maxItems?: NUMBER, parentWikiPageId?: STRING}): INFOTABLE<WikiPageWithComments>;

	/**
	 * Retrieve a specific wiki page
	 * @param wikiPageId Wiki page ID
	 * @return Wiki page
	 */
	GetWikiPage(args?:{wikiPageId?: STRING}): INFOTABLE<WikiPage>;

	/**
	 * Retrieve all wiki pages that were modified within an optional date/time range and/or contain a specific set of tags
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param withContent With content
	 * @param source Original source/author of the page
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Wiki pages
	 */
	QueryWikiPagesWithComments(args?:{maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, withContent?: BOOLEAN, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<WikiPageWithComments>;

	/**
	 * Rate an entry given a specific entry ID
	 * @param rating Rating
	 * @param entryId Entry id
	 * @return Rating
	 */
	RateContent(args?:{rating?: NUMBER, entryId?: STRING}): NUMBER;

	/**
	 * Update the wiki page (by name)
	 * @param sourceType Source type (optional)
	 * @param wikiPageId Wiki page ID
	 * @param parentWikiPageId Parent Wiki Page ID
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param title Wiki entry title
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for wiki entry
	 * @return Wiki Page ID
	 */
	UpdateWikiPage(args?:{sourceType?: STRING, wikiPageId?: STRING, parentWikiPageId?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;

	/**
	 * Sets the persistence provider
	 * @param name Persistence provider name
	 * @return result
	 */
	SetPersistenceProvider(args?:{name?: PERSISTENCEPROVIDERNAME}): NOTHING;

	/**
	 * Get the currently assigned persistence provider
	 * @return Persistence provider name
	 */
	GetPersistenceProvider(args?:{}): PERSISTENCEPROVIDERNAME;

	/**
	 * Retrieve a specific wiki comment (by id)
	 * @param wikiCommentId Wiki comment id
	 * @return Wiki comment
	 */
	GetComment(args?:{wikiCommentId?: STRING}): INFOTABLE<Comment>;

	/**
	 * Retrieve all wiki page titles that were modified within an optional date/time range and/or contain a specific set of tags
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Wiki pages
	 */
	QueryWikiPageTitles(args?:{maxItems?: NUMBER, endDate?: DATETIME, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<WikiPageList>;

	/**
	 * Retrieve all wiki pages
	 * @param maxItems Maximum number of items to return
	 * @return Wiki pages
	 */
	GetWikiPages(args?:{maxItems?: NUMBER}): INFOTABLE<WikiPage>;

	/**
	 * Retrieve all wiki pages based on a keyword/search expression and optional date range
	 * @param maxItems Maximum number of items to return
	 * @param searchExpression Search expression
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param withContent With content
	 * @param source Source
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Matching entries
	 */
	SearchWikiPages(args?:{maxItems?: NUMBER, searchExpression?: STRING, sourceTags?: TAGS, endDate?: DATETIME, withContent?: BOOLEAN, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<WikiPage>;

	/**
	 * Retrieve wiki history (all pages)
	 * @param maxItems Maximum number of items to return
	 * @return Wiki history
	 */
	GetWikiHistory(args?:{maxItems?: NUMBER}): INFOTABLE<WikiHistory>;

	/**
	 * Retrieve all wiki pages that were modified within an optional date/time range and/or contain a specific set of tags
	 * @param maxItems Maximum number of items to return
	 * @param sourceTags Source Tags
	 * @param endDate End time
	 * @param withContent With content
	 * @param source Original source/author of the page
	 * @param startDate Start time
	 * @param tags Tags
	 * @return Wiki pages
	 */
	QueryWikiPages(args?:{maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, withContent?: BOOLEAN, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE<WikiPage>;

	/**
	 * Retrieve all wiki pages with comments
	 * @param maxItems Maximum number of items to return
	 * @return Wiki pages with comments
	 */
	GetWikiPagesWithComments(args?:{maxItems?: NUMBER}): INFOTABLE<WikiPageWithComments>;

	/**
	 * Retrieve the parent wiki page ID
	 * @param wikiPageId Wiki page ID
	 * @return Parent wiki page id
	 */
	GetParentWikiPage(args?:{wikiPageId?: STRING}): STRING;

	/**
	 * Add a comment to an existing page or comment
	 * @param sourceType Source type (optional)
	 * @param wikiPageId Wiki page ID
	 * @param location Location of the entry
	 * @param wikiCommentId Existing wiki comment ID (optional)
	 * @param source Source of the entry (person/thing)
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for wiki comment
	 * @return Created wiki comment ID
	 */
	AddComment(args?:{sourceType?: STRING, wikiPageId?: STRING, location?: LOCATION, wikiCommentId?: STRING, source?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;

	/**
	 * Add or update a wiki page
	 * @param sourceType Source type (optional)
	 * @param parentWikiPageId Parent Wiki Page ID
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param title Wiki page title
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for wiki entry
	 * @return Created wiki page ID
	 */
	AddOrUpdateWikiPage(args?:{sourceType?: STRING, parentWikiPageId?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;

	/**
	 * Retrieve wiki history (all pages)
	 * @param maxItems Maximum number of items to return
	 * @param wikiPageId Wiki page ID
	 * @return Wiki history
	 */
	GetWikiPageHistory(args?:{maxItems?: NUMBER, wikiPageId?: STRING}): INFOTABLE<WikiHistory>;

	/**
	 * Delete a wiki page (by name)
	 * @param wikiPageId Wiki page ID
	 * @return result
	 */
	DeleteWikiPage(args?:{wikiPageId?: STRING}): NOTHING;

	/**
	 * Retrieve all wiki page titles
	 * @param maxItems Maximum number of items to return
	 * @return Wiki page titles
	 */
	GetWikiPageTitles(args?:{maxItems?: NUMBER}): INFOTABLE<WikiPageList>;

	/**
	 * Retrieve all wiki pages
	 * @param maxItems Maximum number of items to return
	 * @param parentWikiPageId Parent Wiki Page ID
	 * @return Wiki pages
	 */
	GetChildWikiPages(args?:{maxItems?: NUMBER, parentWikiPageId?: STRING}): INFOTABLE<WikiPage>;

	/**
	 * Add a new wiki page
	 * @param sourceType Source type (optional)
	 * @param parentWikiPageId Parent Wiki Page ID
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param title Wiki page title
	 * @param content Content of the entry
	 * @param tags Tags for the entry
	 * @param timestamp Date and time for wiki entry
	 * @return Created wiki page ID
	 */
	AddWikiPage(args?:{sourceType?: STRING, parentWikiPageId?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, tags?: TAGS, timestamp?: DATETIME}): STRING;


}
