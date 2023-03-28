@database('MyDatabase')
@ThingDefinition class MyInstance extends ExampleThingTemplate {

    /**
     * When overriding a service on a template or shape that is part of the projects,
     * it is possible to invoke the base implementation in any subclass.
     */
    override GetExampleProperty(): number {
        const baseExampleProperty = super.GetExampleProperty();

        if (baseExampleProperty < 0) {
            return 0;
        }
        else if (baseExampleProperty > 100) {
            return 100;
        }

        return baseExampleProperty;
    }

    /**
     * The superclass implementation of any service may be invoked from any service, not just
     * the ones that override the base implementation.
     * 
     * Additionally, in most cases it is not required to directly specify the return type of a service.
     * The compiler can infer the type. However, the type must be annotated if the inferred type
     * does not match to a thingworx base type.
     */
    GetAllProperties() {
        const exampleProperty = super.GetExampleProperty();

        const properties = DataShapes.NumberArrayElement.CreateValues();
        properties.AddRow({ element: exampleProperty });

        return properties;
    }

    /**
     * By specifying a target database via the `@database` decorator, any service can include inline
     * SQL commands and queries. These will be transformed into services on the target database thing.
     */
    SaveProperties() {
        const exampleProperty = this.GetExampleProperty();
        const name = this.name;
        const time = new Date();

        SQLCommand/*SQL*/`
            INSERT INTO properties (name, value, time)
            VALUES (${name}, ${exampleProperty}, ${time})
        `;
    }
}