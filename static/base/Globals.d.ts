declare const logger: {
    trace(message: string, ...args: any[]): void;
    info(message: string, ...args: any[]): void;
    warn(message: string, ...args: any[]): void;
    debug(message: string, ...args: any[]): void;
    error(message: string, ...args: any[]): void;
};

declare const parameters: undefined;


/**
 * Add (or subtract) a specified number of hours to a date value
 * @param dateValue Date value
 * @param amount Amount to add
 * @return Calculated date value
 */
declare function dateAddHours(dateValue?: DATETIME, amount?: NUMBER): STRING;


/**
 * Get the day of the year (0-365) for a given date
 * @param dateValue Date value
 * @return Day of year
 */
declare function dateDayOfYear(dateValue?: DATETIME): NUMBER;


/**
 * Calculate the minimum of two dates
 * @param date1 First date value
 * @param date2 Second date value
 * @return Minimum value of the two dates
 */
declare function dateMin(date1?: DATETIME, date2?: DATETIME): NUMBER;


/**
 * Add (or subtract) a specified number of milliseconds to a date value
 * @param dateValue Date value
 * @param amount Amount to add
 * @return Calculated date value
 */
declare function dateAddMilliseconds(dateValue?: DATETIME, amount?: NUMBER): STRING;


/**
 * Add (or subtract) a specified number of minutes to a date value
 * @param dateValue Date value
 * @param amount Amount to add
 * @return Calculated date value
 */
declare function dateAddMinutes(dateValue?: DATETIME, amount?: NUMBER): STRING;


/**
 * Format a date using a specific format
 * @param dateValue Date value to format
 * @param dateFormat Date format
 * @return Formatted date
 */
declare function dateFormat(dateValue?: DATETIME, dateFormat?: STRING): STRING;


/**
 * Format a date using the ISO format
 * @param dateValue Date value to format
 * @return Formatted date
 */
declare function dateFormatISO(dateValue?: DATETIME): STRING;


/**
 * Get the day of week for a given date (Monday = 1, Sunday = 7)
 * @param dateValue Date value
 * @return Day of week
 */
declare function dateDayOfWeek(dateValue?: DATETIME): NUMBER;


/**
 * Add (or subtract) a specified number of years to a date value
 * @param dateValue Date value
 * @param amount Amount to add
 * @return Calculated date value
 */
declare function dateAddYears(dateValue?: DATETIME, amount?: NUMBER): STRING;


/**
 * Parse a date using the ISO format
 * @param stringDate String value to parse
 * @return Parsed date value
 */
declare function parseDateISO(stringDate?: STRING): DATETIME;


/**
 * Calculate the maximum of two dates
 * @param date1 First date value
 * @param date2 Second date value
 * @return Maximum value of the two dates
 */
declare function dateMax(date1?: DATETIME, date2?: DATETIME): NUMBER;


/**
 * Add (or subtract) a specified number of seconds to a date value
 * @param dateValue Date value
 * @param amount Amount to add
 * @return Calculated date value
 */
declare function dateAddSeconds(dateValue?: DATETIME, amount?: NUMBER): STRING;


/**
 * Calculate the difference between two dates
 * @param date1 First date value
 * @param date2 Second date value
 * @return Difference in milliseconds (date1 - date2)
 */
declare function dateDifference(date1?: DATETIME, date2?: DATETIME): NUMBER;


/**
 * Add (or subtract) a specified number of months to a date value
 * @param dateValue Date value
 * @param amount Amount to add
 * @return Calculated date value
 */
declare function dateAddMonths(dateValue?: DATETIME, amount?: NUMBER): STRING;


/**
 * Parse a date using a specific format
 * @param stringDate String value to parse
 * @param dateFormat Date format
 * @return Parsed date value
 */
declare function parseDate(stringDate?: STRING, dateFormat?: STRING): DATETIME;


/**
 * Add (or subtract) a specified number of days to a date value
 * @param dateValue Date value
 * @param amount Amount to add
 * @return Calculated date value
 */
declare function dateAddDays(dateValue?: DATETIME, amount?: NUMBER): STRING;


/**
 * Calculate the offset in milliseconds from UTC time
 * @param dateValue Date value to offset
 * @return Offset in milliseconds
 */
declare function dateOffset(dateValue?: DATETIME): NUMBER;


/**
 * Disable verbose diagnostic tracing of script execution
 * @return Previous trace state
 */
declare function disableDiagnosticTrace(): BOOLEAN;


/**
 * Enable verbose diagnostic tracing of script execution
 * @return Previous trace state
 */
declare function enableDiagnosticTrace(): BOOLEAN;


/**
 * Base 64 decode a string into a byte array
 * @param value String value
 * @return Decoded value as JSON array
 */
declare function base64DecodeBytes(value?: STRING): JSON;


/**
 * Base 64 encode bytes
 * @param value Array value
 * @return Encoded value
 */
declare function base64EncodeBytes(value?: JSON): STRING;


/**
 * Encrypt a string
 * @param value String value
 * @return Encrypted value
 */
declare function encryptString(value?: STRING): STRING;


/**
 * Decrypt a string with a user provided key
 * @param key Encryption key (56 hex chars)
 * @param value String value
 * @return Encrypted value
 */
declare function decryptStringWithkey(key?: STRING, value?: STRING): STRING;


/**
 * Encrypt a property value
 * @param value String value
 * @return Encrypted value
 */
declare function encryptPropertyValue(value?: STRING): STRING;


/**
 * Base 64 encode a string
 * @param value String value
 * @return Encoded value
 */
declare function base64EncodeString(value?: STRING): STRING;


/**
 * Base 64 decode a string
 * @param value String value
 * @return Decoded value
 */
declare function base64DecodeString(value?: STRING): STRING;


/**
 * Encrypt a string with a user provided key
 * @param key Encryption key (56 hex chars)
 * @param value String value
 * @return Encrypted value
 */
declare function encryptStringWithKey(key?: STRING, value?: STRING): STRING;


/**
 * Calculate a circular geofence around a given point
 * @param location Center location value
 * @param radius Radius of circle
 * @param units Units (M = miles, K = km, N = nautical miles)
 * @param resolution Number of points
 * @return Infotable containing locations
 */
declare function createCircularGeoFence(location?: LOCATION, radius?: NUMBER, units?: STRING, resolution?: INTEGER): INFOTABLE<GeoFencePoint>;


/**
 * Calculate the distance between two locations
 * @param loc1 First location value
 * @param loc2 Second location value
 * @param units Units of distance (M, K, N)
 * @return Difference in specified units
 */
declare function distanceBetween(loc1?: LOCATION, loc2?: LOCATION, units?: STRING): NUMBER;


/**
 * Check if a given point is within a geofence (polygon) boundary
 * @param location Location value to check
 * @param geoFence InfoTable containing a list of location values for the geofence
 * @param locationField Name of the location field in the geofence point list InfoTable
 * @return Indicator if within location
 */
declare function containsLocation(location?: LOCATION, geoFence?: INFOTABLE, locationField?: STRING): BOOLEAN;


/**
 * Generate a globally unique identifier
 * @return Unique identifier
 */
declare function generateGUID(): STRING;


/**
 * Get the IP address bound to a specific host name
 * @param name Host name
 * @return IP Address
 */
declare function getHostIPAddress(name?: STRING): STRING;


/**
 * Get the IP address bound to a specific adapter
 * @param name Adapter name
 * @return IP Address
 */
declare function getAdapterIPAddress(name?: STRING): STRING;


/**
 * Format a number
 * @param value Value to format
 * @param format Format string
 * @return Formatted number
 */
declare function formatNumber(value?: NUMBER, format?: STRING): STRING;


/**
 * Pause for a specified number of milliseconds
 * @param value Number of milliseconds
 * @return Number of milliseconds
 */
declare function pause(value: INTEGER): INTEGER;

