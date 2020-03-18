/**
 * This example file shows how to define a Thing using TypeScript.
 * NOTE: I am in the process of providing a nicer example.
 */
@ThingDefinition @published class MyThing extends ThingTemplateWithShapes(RemoteThing, Connectable) {

    @persistent @logged test: STRING = "this is one default value";

    @local('AuditArchiveCleanupScheduler', 'Enabled') readonly u!: STRING;

    @remote('test', {cacheTime: 0, foldType: 'NONE', pushType: "Value"}) 
    t!: NUMBER;

    @dataChangeType('ALWAYS') v!: THINGNAME<'Stream'>;

    /**
     * Test
     */
    @final async s({v = "wow", it}: {v: STRING, it?: INFOTABLE<GenericStringList>}) {
        var x = Things[this.v];

        this.v = 'AnomalyMonitorStateStream';

        var data = x.QueryStreamEntriesWithData();

        var y = Things.DownloadedSolutions;
        y.AnyAlertAck();

        this.s({v: 'test'});
    }

    @remoteService('tesst', {enableQueue: true}) remoteService(): NOTHING {}

    @localSubscription('DataChange', 'v') networs() {

    }

    @subscription('AuditDataTable', 'DataChange', "thingTemplate") test32() {

    }

    @remoteEvent('tesst') z!: EVENT<GenericStringList>;

}