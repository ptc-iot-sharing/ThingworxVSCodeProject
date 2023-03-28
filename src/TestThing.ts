/**
 * Entire entities can also be excluded from the build based on environment variables.
 * For example, a development environment might include additional entities containing various
 * utility and debug services.s
 */
@ifenv(process.env.TESTS_INCLUDED)
@ThingDefinition class TestThing extends GenericThing {
    
    testVersion() {
        const extensions = Subsystems.PlatformSubsystem.GetExtensionPackageList();
        if (extensions.rows.toArray().find(r => r.name == 'bm-thingworx-vscode')?.packageVersion != '2.7.0') {
            throw new Error('Incorrect version installed!');
        }
    }

}