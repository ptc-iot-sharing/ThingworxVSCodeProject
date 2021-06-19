/**
 * The `@ConfigurationTables` decorator can be applied to thing templates or thing to cause a configuration
 * table to be created for it.
 * 
 * This decorator takes a single parameter that must be an anonymous class expression whose property names represent the configuration
 * table names and their types must be either `Table` or `MultiRowTable` with a data shape name as a type argument.
 * 
 * Entity classes can be decorated with the `@allow` and `@deny` decorators to specify permissions. When at the class level, these
 * can be used to specify permissions for all of the properties, services and events on that entity.
 * 
 * Visibility for organizations can be added via the `@visible` decorator.
 * 
 * For templates and thing shapes, instance permissions can be specified via the `@allowInstance` and `@denyInstance` decorators.
 * These have the same 
 */
@ConfigurationTables(class {
    ConnectionInfo: Table<PortInfo>;
    Fields: MultiRowTable<FieldDefinition>;
})
// These decorators can be used to change the permissions for specific services and properties that are inherited
@deny('GetImplementingThings', Permission.ServiceInvoke, Groups.Designers)
// These decorators can be used to change the permissions for Things that use this template
@denyInstance(Permission.PropertyRead, Groups.Designers, Users.System)
// These decorators can be used to change the permissions for the ThingTemplate itself
@allow(Permission.PropertyRead, Users.Administrator)
// This decorator can be used to add visibility for organizations
@visible(Organizations.Development, Organizations.Composer)
@ThingTemplateDefinition class ExampleThingTemplate extends GenericThing {

    /**
     * In thing templates and thing shapes, `@deny` and `@allow` decorators specified on memebers
     * automatically apply to instances because the template or shape entity itself does not gain
     * the properties defined on it.
     */
    @allow(Permission.PropertyRead, Groups.Designers, Users.System)
    @persistent exampleProperty!: number;

    @allow(Permission.ServiceInvoke, Users.System)
    GetExampleProperty(): number {
        return this.exampleProperty;
    }
}