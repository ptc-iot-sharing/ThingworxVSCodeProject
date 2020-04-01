/**
 * Data table shape
 */
declare class DataTableShape extends ThingShapeBase {

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
	 * @param values Data values to search for
	 * @param query Query definition
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param updateValues Data values to be updated
	 * @param tags Tags
	 * @return result
	 */
	UpdateDataTableEntriesWithQuery(args?:{sourceType?: STRING, values?: INFOTABLE, query?: QUERY, location?: LOCATION, source?: STRING, updateValues?: INFOTABLE, tags?: TAGS}): NOTHING;

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
	 * @param values Data values
	 * @param query Query definition
	 * @param source Source (optional)
	 * @param tags Tags (optional)
	 * @return Table entries
	 */
	QueryDataTableEntries(args?:{maxItems?: NUMBER, values?: INFOTABLE, query?: QUERY, source?: STRING, tags?: TAGS}): INFOTABLE;

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
	 * @param values Data values
	 * @param query Query definition
	 * @param location Location of the entry (optional)
	 * @param source Source of the entry (optional)
	 * @param tags Tags
	 * @return result
	 */
	DeleteDataTableEntriesWithQuery(args?:{sourceType?: STRING, values?: INFOTABLE, query?: QUERY, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

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

/**
 * Connected device
 */
declare class Connectable extends ThingShapeBase {


	/**
	 * Flag indicating if connected or not
	 */
	isConnected: BOOLEAN;

	/**
	 * Last connection time
	 */
	lastConnection: DATETIME;

}

/**
 * Remote tunneling
 */
declare class Tunneling extends ThingShapeBase {

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
	 * Get the status and proxy URL for accessing tunneling
	 * @return A tunnel url
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
	 * Get a list of Tunnel names registered at the edge
	 * @return Tunnel names
	 */
	GetTunnelNames(args?:{}): INFOTABLE<EntityList>;


}

/**
 * Provides a set of statistical monitoring services. To use these services, create a Thing and attach this ThingShape. This component is installed with ThingWorx but is not active until the DescriptiveAnalytics microservice is installed.
 */
declare class StatisticalMonitoringThingShape extends ThingShapeBase {

	/**
	 * Monitor for the number of points in a series that remain inside or outside of a defined range.
	 * @param min The minimum value of the range.
	 * @param propertyName Property Name.
	 * @param max The maximum value of the range.
	 * @param regionOfInterest Calculate the number of points from INSIDE or OUTSIDE the range (inclusive).
	 * @param numberOfPoints Number of data points to inspect.
	 * @param includeMin The range min is inclusive (Default is True)
	 * @param includeMax The range max is inclusive (Default is True)
	 * @return Maximum number of points in a series that remain inside or outside of a defined range.
	 */
	GetNumberOfPointsBasedOnARange(args?:{min?: NUMBER, propertyName?: STRING, max?: NUMBER, regionOfInterest?: STRING, numberOfPoints?: INTEGER, includeMin?: BOOLEAN, includeMax?: BOOLEAN}): INTEGER;

	/**
	 * Monitor for the number of consecutive points in a series that are above or below a defined threshold.
	 * @param propertyName Property Name.
	 * @param numberOfPoints Number of data points to inspect.
	 * @param includeThreshold The threshold is inclusive (Default is True)
	 * @param threshold The threshold to use for comparing points.
	 * @param direction Either ABOVE or BELOW the threshold (inclusive).
	 * @return The number of consecutive points in a series that are below or above a threshold, inclusive.
	 */
	GetNumberOfConsecutivePointsBeyondAThreshold(args?:{propertyName?: STRING, numberOfPoints?: INTEGER, includeThreshold?: BOOLEAN, threshold?: NUMBER, direction?: STRING}): INTEGER;

	/**
	 * Monitor for the number of consecutive points in a series that are increasing, decreasing, or alternating direction.
	 * @param propertyName Property Name.
	 * @param trend Data trend to inspect.
	 * @param numberOfPoints Number of data points to inspect.
	 * @return Maximum number of consecutive points in a series that are increasing, decreasing or alternating direction.
	 */
	GetNumberOfConsecutivePointsFollowingATrend(args?:{propertyName?: STRING, trend?: STRING, numberOfPoints?: INTEGER}): INTEGER;

	/**
	 * Monitor for the number of consecutive points in a series that remain inside or outside of a defined range.
	 * @param min The minimum value of the range.
	 * @param propertyName Property Name.
	 * @param max The maximum value of the range.
	 * @param regionOfInterest Calculate the number of points from INSIDE or OUTSIDE the range (inclusive).
	 * @param numberOfPoints Number of data points to inspect.
	 * @param includeMin The range min is inclusive (Default is True)
	 * @param includeMax The range max is inclusive (Default is True)
	 * @return Maximum number of consecutive points in a series that remain inside or outside of a defined range.
	 */
	GetNumberOfConsecutivePointsBasedOnARange(args?:{min?: NUMBER, propertyName?: STRING, max?: NUMBER, regionOfInterest?: STRING, numberOfPoints?: INTEGER, includeMin?: BOOLEAN, includeMax?: BOOLEAN}): INTEGER;

	/**
	 * Monitor how many pairs of points in a series have a change rate outside the defined range.
	 * @param propertyName Property name
	 * @param numberOfPoints The number of consecutive points in a series, counting back from the current point.
	 * @param thresholdPercentage The rate of change threshold, expressed as a percentage. Cannot be a negative value
	 * @param includeThresholdPercentage The threshold percentage is inclusive (Default is True)
	 * @return The number of pairs of consecutive points that have a change rate outside the defined range.
	 */
	GetNumberOfPointsWithChangeRateOutOfRange(args?:{propertyName?: STRING, numberOfPoints?: INTEGER, thresholdPercentage?: NUMBER, includeThresholdPercentage?: BOOLEAN}): INTEGER;

	/**
	 * Monitor for the number of points in a series that are above or below a defined threshold.
	 * @param propertyName Property Name.
	 * @param numberOfPoints Number of data points to inspect.
	 * @param includeThreshold The threshold is inclusive (Default is True)
	 * @param threshold The threshold to use for comparing points.
	 * @param direction Either BELOW or ABOVE.
	 * @return The number of points in a series that are below or above a threshold, inclusive.
	 */
	GetNumberOfPointsBeyondAThreshold(args?:{propertyName?: STRING, numberOfPoints?: INTEGER, includeThreshold?: BOOLEAN, threshold?: NUMBER, direction?: STRING}): INTEGER;


}

/**
 * Stream shape
 */
declare class StreamShape extends ThingShapeBase {

	/**
	 * Retrieve a specific stream entry given a stream entry ID
	 * @param streamEntryId Stream entry ID
	 * @return Stream entry
	 */
	GetStreamEntry(args?:{streamEntryId?: STRING}): INFOTABLE;

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
	QueryStreamEntriesWithData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, query?: QUERY, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE;

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
	UpdateStreamEntry(args?:{values?: INFOTABLE, streamEntryId?: STRING, location?: LOCATION, source?: STRING, tags?: TAGS}): NOTHING;

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
	GetStreamEntriesWithData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER}): INFOTABLE;

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
	CreateValuesWithData(args?:{values?: TWJSON}): INFOTABLE;

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
	GetStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER}): INFOTABLE;

	/**
	 * Add a new stream entry
	 * @param sourceType Source type (User,Thing)
	 * @param values Data values
	 * @param location Location of the entry (optional)
	 * @param source Source of the event
	 * @param timestamp Event time (optional)
	 * @param tags Tags (optional)
	 * @return result
	 */
	AddStreamEntry(args?:{sourceType?: STRING, values?: INFOTABLE, location?: LOCATION, source?: STRING, timestamp?: DATETIME, tags?: TAGS}): NOTHING;

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
	QueryStreamData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, query?: QUERY, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE;

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
	GetStreamData(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER}): INFOTABLE;

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
	QueryStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, sourceTags?: TAGS, endDate?: DATETIME, query?: QUERY, source?: STRING, startDate?: DATETIME, tags?: TAGS}): INFOTABLE;


}

/**
 * Indicates this RemoteThing will accept egress on behalf of another RemoteThing
 */
declare class EgressGateway extends ThingShapeBase {


}

/**
 * Industrial Connectivity Thing Shape
 */
declare class IndustrialThingShape extends ThingShapeBase {


	/**
	 * Name of the agent with the tags
	 */
	IndustrialThing: THINGNAME;
	/**
	 * Notify the edge of an industrial thing
	 * @param eventData Event data
	 * @param eventTime Event time
	 * @param sourceProperty Event source property
	 * @param eventName Event name
	 * @param source Event source
	 * @return result
	 */
	gatewayChanged(args?:{eventData?: INFOTABLE, eventTime?: DATETIME, sourceProperty?: STRING, eventName?: STRING, source?: STRING}): NOTHING;

	/**
	 * Get the diagnostics for a property on an Industrial Thing
	 * @param propertyName Name of the property for the diagnostics
	 * @return The diagnostics for the property
	 */
	GetPropertyDiagnostics(args?:{propertyName?: STRING}): INFOTABLE<IndustrialDiagnosticDigest>;


}

/**
 * File transfer
 */
declare class FileTransfer extends ThingShapeBase {

	/**
	 * Get file listing for a specific remote directory
	 * @param path Directory path
	 * @param nameMask Name mask
	 * @return 
	 */
	GetFileListing(args?:{path?: STRING, nameMask?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Tell a file transfer recipient to validate a transferred file using the provided md5 hash
	 * @param toUri File uri
	 * @param md5 Checksum signature used for validation
	 * @param sid File transfer Job ID
	 * @return result
	 */
	ValidateFileTransfer(args?:{toUri?: STRING, md5?: STRING, sid?: STRING}): NOTHING;

	/**
	 * Get remote directory structure
	 * @return 
	 */
	GetDirectoryStructure(args?:{}): INFOTABLE<FileSystemDirectory>;

	/**
	 * Get a list of files and/or directories on the Edge Thing
	 * @param path Directory path
	 * @return 
	 */
	BrowseFileSystem(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;


}

/**
 * An edge device that controls when the platform sends messages to it.
 */
declare class EdgeControlled extends ThingShapeBase {

	/**
	 * Allow a maximum number of egress messages to be sent to the edge device.  Only one outstanding call to DequeueEgress can exist per Thing.
	 * @param maxCount The maximum number of messages desired by the edge device.
	 * @return The number of dequeued egress messages to expect.
	 */
	DequeueEgress(args?:{maxCount?: INTEGER}): INTEGER;


}

/**
 * Remote metadata browsing
 */
declare class RemoteMetadataBrowsing extends ThingShapeBase {

	/**
	 * Get the metadata for a thing
	 * @return The thing's metadata
	 */
	GetRemoteMetadata(args?:{}): JSON;


}

/**
 * A device that delegates its outbound remote communication to an EgressGateway
 */
declare class RoutedEgress extends ThingShapeBase {


	/**
	 * RemoteThing to which outbound APIRequests will be sent
	 */
	gatewayThing: THINGNAME;
	/**
	 * Private service to handle connectivity state changes
	 * @param eventData Event data
	 * @param eventTime Event time
	 * @param sourceProperty Event source property
	 * @param eventName Event name
	 * @param source Event source
	 * @return 
	 */
	GatewayIsConnectedUpdated(args?:{eventData?: INFOTABLE, eventTime?: DATETIME, sourceProperty?: STRING, eventName?: STRING, source?: STRING}): NOTHING;

	/**
	 * 
	 * @param eventData Event data
	 * @param eventTime Event time
	 * @param sourceProperty Event source property
	 * @param eventName Event name
	 * @param source Event source
	 * @return 
	 */
	GatewayThingUpdated(args?:{eventData?: INFOTABLE, eventTime?: DATETIME, sourceProperty?: STRING, eventName?: STRING, source?: STRING}): NOTHING;


}

/**
 * User extension properties
 */
declare class UserExtensions extends ThingShapeBase {


	/**
	 * Alternate email addresses
	 */
	altEmailAddresses: STRING;

	/**
	 * Last name
	 */
	lastName: STRING;

	/**
	 * Zip code
	 */
	zipCode: STRING;

	/**
	 * SMS address
	 */
	smsAddress: STRING;

	/**
	 * City
	 */
	city: STRING;

	/**
	 * Home phone
	 */
	homePhone: STRING;

	/**
	 * Full name
	 */
	fullName: STRING;

	/**
	 * Title
	 */
	title: STRING;

	/**
	 * First name
	 */
	firstName: STRING;

	/**
	 * E-mail address
	 */
	emailAddress: STRING;

	/**
	 * Mobile phone
	 */
	mobilePhone: STRING;

	/**
	 * Mailing address
	 */
	mailingAddress: STRING;

	/**
	 * Middle name
	 */
	middleName: STRING;

	/**
	 * Work phone
	 */
	workPhone: STRING;

	/**
	 * State
	 */
	state: STRING;

}

/**
 * Value Stream shape
 */
declare class ValueStreamShape extends ThingShapeBase {

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryLongStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<LongValueStream>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryThingCodeStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<ThingCodeDataShape>;

	/**
	 * Delete a specific stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return result
	 */
	DeleteStreamEntry(args?:{id?: STRING}): NOTHING;

	/**
	 * Retrieve a specific integer stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetIntegerStreamEntry(args?:{id?: STRING}): INFOTABLE<IntegerValueStream>;

	/**
	 * Retrieve a specific integer stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetImageStreamEntry(args?:{id?: STRING}): INFOTABLE<ImageValueStream>;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddVec4StreamEntry(args?:{name?: STRING, source?: STRING, value?: VEC4, timestamp?: DATETIME}): NOTHING;

	/**
	 * Query value stream history as one collection of properties along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param propertyDefinitionCollection Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryMultiPropertyStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, propertyDefinitionCollection?: TWJSON, source?: STRING, startDate?: DATETIME}): INFOTABLE;

	/**
	 * Retrieve a specific Vec2 stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetVec2StreamEntry(args?:{id?: STRING}): INFOTABLE<Vec2DataShape>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryInfoTableStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<InfoTableValueStream>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryDateTimeStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<DateTimeValueStream>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryVec4StreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<Vec4DataShape>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryIntegerStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<IntegerValueStream>;

	/**
	 * Purge stream entries for a specified date range
	 * @param endDate End time
	 * @param immediate Delete immediately
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return result
	 */
	PurgeStreamEntries(args?:{endDate?: DATETIME, immediate?: BOOLEAN, name?: STRING, source?: STRING, startDate?: DATETIME}): NOTHING;

	/**
	 * Retrieve a specific integer stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetLocationStreamEntry(args?:{id?: STRING}): INFOTABLE<LocationValueStream>;

	/**
	 * Purge all entries for a given entity
	 * @return result
	 */
	purgeAll(args?:{}): NOTHING;

	/**
	 * Retrieve a specific Vec4 stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetVec4StreamEntry(args?:{id?: STRING}): INFOTABLE<Vec4DataShape>;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddVec2StreamEntry(args?:{name?: STRING, source?: STRING, value?: VEC2, timestamp?: DATETIME}): NOTHING;

	/**
	 * Retrieve a specific integer stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetLongStreamEntry(args?:{id?: STRING}): INFOTABLE<LongValueStream>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryVec2StreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<Vec2DataShape>;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddDateTimeStreamEntry(args?:{name?: STRING, source?: STRING, value?: DATETIME, timestamp?: DATETIME}): NOTHING;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryStringStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<StringValueStream>;

	/**
	 * Retrieve a specific ThingCode stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetThingCodeStreamEntry(args?:{id?: STRING}): INFOTABLE<ThingCodeDataShape>;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddNumberStreamEntry(args?:{name?: STRING, source?: STRING, value?: NUMBER, timestamp?: DATETIME}): NOTHING;

	/**
	 * Retrieve a specific integer stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetBooleanStreamEntry(args?:{id?: STRING}): INFOTABLE<BooleanValueStream>;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddImageStreamEntry(args?:{name?: STRING, source?: STRING, value?: IMAGE, timestamp?: DATETIME}): NOTHING;

	/**
	 * Retrieve a specific integer stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetInfoTableStreamEntry(args?:{id?: STRING}): INFOTABLE<InfoTableValueStream>;

	/**
	 * Retrieve a specific integer stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetDateTimeStreamEntry(args?:{id?: STRING}): INFOTABLE<DateTimeValueStream>;

	/**
	 * Retrieve a specific integer stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetNumberStreamEntry(args?:{id?: STRING}): INFOTABLE<NumberValueStream>;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddLongStreamEntry(args?:{name?: STRING, source?: STRING, value?: LONG, timestamp?: DATETIME}): NOTHING;

	/**
	 * Retrieve a specific integer stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetStringStreamEntry(args?:{id?: STRING}): INFOTABLE<StringValueStream>;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddLocationStreamEntry(args?:{name?: STRING, source?: STRING, value?: LOCATION, timestamp?: DATETIME}): NOTHING;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryImageStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<ImageValueStream>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryBooleanStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<BooleanValueStream>;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddThingCodeStreamEntry(args?:{name?: STRING, source?: STRING, value?: THINGCODE, timestamp?: DATETIME}): NOTHING;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddStringStreamEntry(args?:{name?: STRING, source?: STRING, value?: STRING, timestamp?: DATETIME}): NOTHING;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryVec3StreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<Vec3DataShape>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryNumberStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<NumberValueStream>;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddBooleanStreamEntry(args?:{name?: STRING, source?: STRING, value?: BOOLEAN, timestamp?: DATETIME}): NOTHING;

	/**
	 * Retrieve a specific Vec3 stream entry given a stream entry ID
	 * @param id Stream entry ID
	 * @return Stream entry
	 */
	GetVec3StreamEntry(args?:{id?: STRING}): INFOTABLE<Vec3DataShape>;

	/**
	 * Query stream entries (without data), along with filter and sort criteria
	 * @param oldestFirst Search/sort from oldest to newest
	 * @param maxItems Maximum number of items to return
	 * @param endDate End time
	 * @param query Query definition
	 * @param name Name of this entry
	 * @param source Source of this entry
	 * @param startDate Start time
	 * @return Table entries
	 */
	QueryLocationStreamEntries(args?:{oldestFirst?: BOOLEAN, maxItems?: NUMBER, endDate?: DATETIME, query?: QUERY, name?: STRING, source?: STRING, startDate?: DATETIME}): INFOTABLE<LocationValueStream>;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddInfoTableStreamEntry(args?:{name?: STRING, source?: STRING, value?: INFOTABLE, timestamp?: DATETIME}): NOTHING;

	/**
	 * Add a new stream entry
	 * @param name Name of the value
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddVec3StreamEntry(args?:{name?: STRING, source?: STRING, value?: VEC3, timestamp?: DATETIME}): NOTHING;

	/**
	 * Add a new stream entry
	 * @param name Name of the property
	 * @param source Source of the data
	 * @param value Data value
	 * @param timestamp Event time (optional)
	 * @return result
	 */
	AddIntegerStreamEntry(args?:{name?: STRING, source?: STRING, value?: INTEGER, timestamp?: DATETIME}): NOTHING;


}

/**
 * Provides a set of statistical calculation services. To use these services, create a Thing and attach this ThingShape. This component is installed with ThingWorx but is not active until the DescriptiveAnalytics microservice is installed.
 */
declare class StatisticalCalculationThingShape extends ThingShapeBase {

	/**
	 * Calculate the mode values from the provided infotable.
	 * @param timedValues The list of timed values
	 * @return The mode values for the given infotable.
	 */
	CalculateModeValue(args?:{timedValues?: INFOTABLE<AnalyticsTimedValue>}): INFOTABLE<NumberArrayElement>;

	/**
	 * Calculate the standard deviation value from the provided infotable.
	 * @param timedValues The list of timed values
	 * @return The standard deviation value for the given infotable.
	 */
	CalculateStandardDeviationValue(args?:{timedValues?: INFOTABLE<AnalyticsTimedValue>}): NUMBER;

	/**
	 * Based on the specified confidence interval percentage, calculate the minimum, median, and maximum interval values.
	 * @param percentage The confidence interval percentage
	 * @param timedValues The list of timed values
	 * @return The confidence interval values for the given infotable.
	 */
	CalculateConfidenceIntervalValues(args?:{percentage?: NUMBER, timedValues?: INFOTABLE<AnalyticsTimedValue>}): INFOTABLE<AnalyticsConfidenceIntervalResult>;

	/**
	 * Calculate the five number values (min, lower quartile, median, upper quartile, max).
	 * @param timedValues The list of timed values
	 * @return The five number summary for the given infotable.
	 */
	CalculateFiveNumberPropertyValues(args?:{timedValues?: INFOTABLE<AnalyticsTimedValue>}): INFOTABLE<AnalyticsFiveNumberSummaryResult>;

	/**
	 * Calculate the sampling frequency values (min, median and max)
	 * @param timedValues The list of timed values
	 * @return The sampling frequency for the given infotable.
	 */
	CalculateSamplingFrequencyValues(args?:{timedValues?: INFOTABLE<AnalyticsTimedValue>}): INFOTABLE<AnalyticsSamplingFrequencyResult>;

	/**
	 * Calculate the results of running the fast Fourier transform on the specified values.
	 * @param timedValues The list of timed values
	 * @return The result of running an FFT on the values from the provided infotable.
	 */
	CalculateFourierTransform(args?:{timedValues?: INFOTABLE<AnalyticsTimedValue>}): INFOTABLE<AnalyticsFourierTransformResult>;

	/**
	 * Calculate the mean property value in the provided infotable.
	 * @param timedValues The list of timed values
	 * @return The mean property value in the given infotable.
	 */
	CalculateMeanValue(args?:{timedValues?: INFOTABLE<AnalyticsTimedValue>}): NUMBER;

	/**
	 * Calculate the median property value in the provided infotable.
	 * @param timedValues The list of timed values
	 * @return The median property value in the given infotable.
	 */
	CalculateMedianValue(args?:{timedValues?: INFOTABLE<AnalyticsTimedValue>}): NUMBER;

	/**
	 * Calculate the maximum property value in the provided infotable.
	 * @param timedValues The list of timed values
	 * @return The largest property value in the given infotable.
	 */
	CalculateMaximumValue(args?:{timedValues?: INFOTABLE<AnalyticsTimedValue>}): NUMBER;

	/**
	 * Calculate the binned distribution of data points based on the desired bin size, the minimum value (optional), and maximum value (optional).
	 * @param min (Optional) The minimum value that should be included in the distribution
	 * @param max (Optional) The maximum value that should be included in the distribution
	 * @param binSize The width of the bin. Must be a positive number.
	 * @param timedValues The list of timed values
	 * @return List of bins, each containing the lower and upper boundaries and the count of data points within that range.
	 */
	CalculateBinnedDataDistributionForBinSize(args?:{min?: NUMBER, max?: NUMBER, binSize?: NUMBER, timedValues?: INFOTABLE<AnalyticsTimedValue>}): INFOTABLE<AnalyticsDataDistributionBin>;

	/**
	 * Calculate the range of values in the provided infotable.
	 * @param timedValues The list of timed values
	 * @return The range of values in the given infotable.
	 */
	CalculateRangeValue(args?:{timedValues?: INFOTABLE<AnalyticsTimedValue>}): NUMBER;

	/**
	 * Calculate the minimum property value from the provided infotable.
	 * @param timedValues The list of timed values
	 * @return The smallest property value in the given infotable.
	 */
	CalculateMinimumValue(args?:{timedValues?: INFOTABLE<AnalyticsTimedValue>}): NUMBER;

	/**
	 * Calculate the binned distribution of data points based on the desired number of bins, the minimum value (optional), and maximum value (optional).
	 * @param min (Optional) The minimum value that should be included in the distribution
	 * @param max (Optional) The maximum value that should be included in the distribution
	 * @param numBins The number of bins. Must be a positive number.
	 * @param timedValues The list of timed values
	 * @return List of bins, each containing the lower and upper boundaries and the count of data points within that range.
	 */
	CalculateBinnedDataDistributionForNumberOfBins(args?:{min?: NUMBER, max?: NUMBER, numBins?: INTEGER, timedValues?: INFOTABLE<AnalyticsTimedValue>}): INFOTABLE<AnalyticsDataDistributionBin>;

	/**
	 * Get an infotable of TimedValues based on the provided property.
	 * @param maxItems Maximum number of items to return
	 * @param propertyName Property name
	 * @param startTime Start time
	 * @param endTime End time
	 * @return An infotable containing TimedValues for a given property.
	 */
	QueryTimedValuesForProperty(args?:{maxItems?: NUMBER, propertyName?: STRING, startTime?: DATETIME, endTime?: DATETIME}): INFOTABLE<AnalyticsTimedValue>;

	/**
	 * Calculate the percentage of difference between two specified values
	 * @param previousValue previous property value
	 * @param currentValue current property value
	 * @return The rate of change between the previous value and the current value, expressed as a percentage.
	 */
	CalculateRateOfChange(args?:{previousValue?: NUMBER, currentValue?: NUMBER}): NUMBER;


}

/**
 * Gateway Services
 */
declare class Gateway extends ThingShapeBase {


}

/**
 * A device which can define its connection status
 */
declare class Reportable extends ThingShapeBase {


	/**
	 * Last time evaluated for Reporting
	 */
	reportingLastEvaluation: DATETIME;

	/**
	 * Health of this device's connection
	 */
	isReporting: BOOLEAN;

	/**
	 * Last time isReporting value changed
	 */
	reportingLastChange: DATETIME;
	/**
	 * Evaluates this Thing's Reporting status based on its strategy
	 * @param eventData Data used to evaluate presence
	 * @param eventTime Time event is triggered
	 * @param sourceProperty Soure property
	 * @param eventName Name of the event
	 * @param source Name of Thing that triggered event
	 * @return result
	 */
	EvaluateReporting(args?:{eventData?: INFOTABLE, eventTime?: DATETIME, sourceProperty?: STRING, eventName?: STRING, source?: STRING}): NOTHING;

	/**
	 * Retrieves this Thing's reporting strategy
	 * @return Name of the Strategy Thing
	 */
	GetReportingStrategy(args?:{}): STRING;

	/**
	 * Set this Thing's reporting strategy
	 * @param strategyThing Name of the Strategy Thing
	 * @return result
	 */
	SetReportingStrategy(args:{strategyThing: THINGNAME}): NOTHING;


}

/**
 * Blog shape
 */
declare class BlogShape extends ThingShapeBase {

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
	 * @param timestamp Date and time for comment entry
	 * @param tags Tags for the entry
	 * @return result
	 */
	UpdateComment(args?:{sourceType?: STRING, location?: LOCATION, source?: STRING, blogCommentId?: STRING, content?: STRING, timestamp?: DATETIME, tags?: TAGS}): NOTHING;

	/**
	 * Update a blog entry
	 * @param blogEntryId Blog entry id
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param title Blog entry title
	 * @param content Content of the entry
	 * @param timestamp Date and time for blog entry
	 * @param tags Tags for the entry
	 * @return result
	 */
	UpdateBlogEntry(args?:{blogEntryId?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, timestamp?: DATETIME, tags?: TAGS}): NOTHING;

	/**
	 * Add a new blog entry
	 * @param sourceType Source type (optional)
	 * @param location Location
	 * @param source Source of the blog entry
	 * @param title Blog entry title
	 * @param content Blog entry content
	 * @param timestamp Time of the blog entry
	 * @param tags Tags for the entry
	 * @return New blog entry ID
	 */
	AddBlogEntry(args?:{sourceType?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, timestamp?: DATETIME, tags?: TAGS}): STRING;

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
	 * @param timestamp Date and time for blog entry
	 * @param tags Tags for the entry
	 * @return Created blog comment ID
	 */
	AddComment(args?:{blogEntryId?: STRING, sourceType?: STRING, location?: LOCATION, source?: STRING, blogCommentId?: STRING, content?: STRING, timestamp?: DATETIME, tags?: TAGS}): STRING;

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

/**
 * Requires a shared connection
 */
declare class RequiresSharedConnection extends ThingShapeBase {


}

/**
 * Default shape for session properties
 */
declare class GlobalSessionProperties extends ThingShapeBase {


}

/**
 * This shape allows a RemoteThing to support multiple bind requests using a routing group.
 */
declare class MultiBindRemoteThing extends ThingShapeBase {


}

/**
 * Logging Services
 */
declare class LogProvider extends ThingShapeBase {

	/**
	 * Get support log types
	 * @return 
	 */
	GetLogTypes(args?:{}): INFOTABLE<EntityList>;

	/**
	 * Get log entries in the specified log
	 * @param logType Log type
	 * @param oldestFirst return oldest log entries first
	 * @param maxItems maximum log entries to return
	 * @param start (optional) start datetime
	 * @param end (optional) end datetime
	 * @return 
	 */
	GetLogEntries(args?:{logType?: STRING, oldestFirst?: BOOLEAN, maxItems?: INTEGER, start?: DATETIME, end?: DATETIME}): INFOTABLE<LogEntry>;

	/**
	 * Get current logging level in specified log
	 * @param logType Log type
	 * @param subLogger Sublogger to set log level on
	 * @return 
	 */
	GetLogLevel(args?:{logType?: STRING, subLogger?: STRING}): STRING;

	/**
	 * Set logging level in specified log
	 * @param logType Log type
	 * @param level Log level
	 * @param subLogger Sublogger to set log level on
	 * @return 
	 */
	SetLogLevel(args?:{logType?: STRING, level?: STRING, subLogger?: STRING}): NOTHING;


}

/**
 * File system interaction
 */
declare class FileSystemServices extends ThingShapeBase {

	/**
	 * Delete a file local to the thing
	 * @param path The file to delete
	 * @return result
	 */
	DeleteFile(args?:{path?: STRING}): NOTHING;

	/**
	 * Move a file local to the thing
	 * @param targetPath Destination path
	 * @param overwrite Overwrite the destination file if it already exists
	 * @param sourcePath Path to the file to move
	 * @return result
	 */
	MoveFile(args?:{targetPath?: STRING, overwrite?: BOOLEAN, sourcePath?: STRING}): NOTHING;

	/**
	 * Get file info
	 * @param path File path
	 * @return 
	 */
	GetFileInfo(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Get directory listing for a specific directory
	 * @param path Directory path
	 * @return 
	 */
	ListDirectories(args?:{path?: STRING}): INFOTABLE<FileSystemDirectory>;

	/**
	 * Get file listing for a specific directory
	 * @param path Directory path
	 * @param nameMask Name mask
	 * @return 
	 */
	ListFiles(args?:{path?: STRING, nameMask?: STRING}): INFOTABLE<FileSystemFile>;

	/**
	 * Get a list of files and/or directories on the Edge Thing
	 * @param path Directory path
	 * @return 
	 */
	BrowseDirectory(args?:{path?: STRING}): INFOTABLE<FileSystemFile>;


}

/**
 * Wiki shape
 */
declare class WikiShape extends ThingShapeBase {

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
	 * @param wikiCommentId Existing wiki comment ID (optional)
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param content Content of the entry
	 * @param timestamp Date and time for wiki comment
	 * @param tags Tags for the entry
	 * @return result
	 */
	UpdateComment(args?:{sourceType?: STRING, wikiCommentId?: STRING, location?: LOCATION, source?: STRING, content?: STRING, timestamp?: DATETIME, tags?: TAGS}): NOTHING;

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
	 * @param timestamp Date and time for wiki entry
	 * @param tags Tags for the entry
	 * @return Wiki Page ID
	 */
	UpdateWikiPage(args?:{sourceType?: STRING, wikiPageId?: STRING, parentWikiPageId?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, timestamp?: DATETIME, tags?: TAGS}): STRING;

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
	 * @param wikiCommentId Existing wiki comment ID (optional)
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param content Content of the entry
	 * @param timestamp Date and time for wiki comment
	 * @param tags Tags for the entry
	 * @return Created wiki comment ID
	 */
	AddComment(args?:{sourceType?: STRING, wikiPageId?: STRING, wikiCommentId?: STRING, location?: LOCATION, source?: STRING, content?: STRING, timestamp?: DATETIME, tags?: TAGS}): STRING;

	/**
	 * Add or update a wiki page
	 * @param sourceType Source type (optional)
	 * @param parentWikiPageId Parent Wiki Page ID
	 * @param location Location of the entry
	 * @param source Source of the entry (person/thing)
	 * @param title Wiki page title
	 * @param content Content of the entry
	 * @param timestamp Date and time for wiki entry
	 * @param tags Tags for the entry
	 * @return Created wiki page ID
	 */
	AddOrUpdateWikiPage(args?:{sourceType?: STRING, parentWikiPageId?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, timestamp?: DATETIME, tags?: TAGS}): STRING;

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
	 * @param timestamp Date and time for wiki entry
	 * @param tags Tags for the entry
	 * @return Created wiki page ID
	 */
	AddWikiPage(args?:{sourceType?: STRING, parentWikiPageId?: STRING, location?: LOCATION, source?: STRING, title?: STRING, content?: STRING, timestamp?: DATETIME, tags?: TAGS}): STRING;


}

/**
 * Remote thing core functionality
 */
declare class Remotable extends ThingShapeBase {


}

/**
 * Capability of API mapping
 */
declare class APIMappable extends ThingShapeBase {


}

