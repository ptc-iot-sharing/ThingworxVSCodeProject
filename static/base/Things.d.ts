declare class AuditArchiveCleanupNotificationScheduler extends Scheduler {


	/**
	 * 
	 */
	AuditCleanupNotification: EVENT<Event>;

}

declare class AuditArchiveCleanupScheduler extends Scheduler {


	/**
	 * Number of days to keep archived audit data. Data older than this will be deleted from the file repository.
	 */
	DaysToArchive: INTEGER;

}
declare class AuditArchiveScheduler extends Scheduler {


	/**
	 * The timestamp when audit data was last archived.
	 */
	LastArchivedTime: LONG;

}



declare interface Things {

	/**
	 * Respository for files for upload to Analytics Server
	 */
	AnalyticsUploadStorage: FileRepository;
	/**
	 * Security Monitor
	 */
	SecurityMonitor: SecurityMonitor;
	/**
	 * Respository for storing results files
	 */
	AnalyticsResultStorage: FileRepository;
	/**
	 * Reporting Algorithm for AlwaysOn Things, which reflects IsConnected
	 */
	AlwaysOnReporting: ReportingByConnection;
	/**
	 * Scheduler-based Thing that backs up the ThingWorx database on a regular basis
	 */
	ScheduledSystemBackup: Scheduler;
	/**
	 * Repository for Downloaded Solutions for this Instance
	 */
	DownloadedSolutions: FileRepository;
	/**
	 * Notify subscribers about upcoming cleanup of offline audit data files
	 */
	AuditArchiveCleanupNotificationScheduler: AuditArchiveCleanupNotificationScheduler;
	/**
	 * Stores the AuditEntry data
	 */
	AuditDataTable: AuditDataTableThing;
	/**
	 * Repository for Packaged Solutions on this Instance
	 */
	PackagedSolutions: FileRepository;
	/**
	 * This entity contains the data for all workflows defined in the stand-alone workflow editor. WARNING: Modifying this entity directly may result in corrupted workflows.
	 */
	Workflows: GenericThing;
	/**
	 * Default file repository for audit archives
	 */
	AuditArchiveFileRepository: FileRepository;
	/**
	 * Resets the daily AuditSubsystem performance metrics once daily at midnight.
	 */
	ResetAuditPerformanceMetricsScheduler: Scheduler;
	/**
	 * Value stream for IndustrialGateway Thing diagnostic properties
	 */
	IndustrialGatewayDiagnosticStream: ValueStream;
	/**
	 * Anomaly Monitor State Stream
	 */
	AnomalyMonitorStateStream: Stream<AnomalyMonitorState>;
	/**
	 * Default reporting algorithm that always returns false
	 */
	NotReporting: ReportingStrategy;
	/**
	 * SchedulerThing for initiating the audit purge
	 */
	AuditPurgeScheduler: Scheduler;
	/**
	 * Scheduler for cleaning the audit archive
	 */
	AuditArchiveCleanupScheduler: AuditArchiveCleanupScheduler;
	/**
	 * SchedulerThing for initiating the audit archive
	 */
	AuditArchiveScheduler: AuditArchiveScheduler;
	/**
	 * Alert History Stream
	 */
	AlertHistoryStream: Stream<AlertHistory>;
	/**
	 * default System file repository
	 */
	SystemRepository: FileRepository;

}

declare const Things: Things;