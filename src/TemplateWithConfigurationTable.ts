/**
 * The `@ConfigurationTables` decorator can be applied to thing templates or thing to cause a configuration
 * table to be created for it.
 * 
 * This decorator takes a single parameter that must be an anonymous class expression whose property names represent the configuration
 * table names and their types must be either `Table` or `MultiRowTable` with a data shape name as a type argument.
 */
@ConfigurationTables(class {
    ConnectionInfo: Table<PortInfo>;
    Fields: MultiRowTable<FieldDefinition>;
})
@ThingTemplateDefinition class TemplateWithConfigurationTable extends GenericThing {

}