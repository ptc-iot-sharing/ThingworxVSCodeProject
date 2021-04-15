/**
 * We can define and use interfaces throughout the project.
 */
interface StatusResponse {

    pressure: number;

    humidity: number;

}

/**
 * This example class demonstrates how Thing Shapes are created.
 * 
 * Thing shapes are classes that extend from the `ThingShapeBase` class; they follow
 * the same general rules as things.
 */
class ExampleThingShape extends ThingShapeBase {

    /**
     * For most types, the standard TypeScript types such as `string` and `number` can be used.
     */
    @logged @persistent pressure: number = 10;

    /**
     * Thingworx type names are also supported and can be used interchangeably. Note that some Thingworx
     * types such as `INTEGER` map to primitive types like `number` on the compiler side but may have additional
     * semantics or behaviours at runtime.
     */
    @remote('humidity') humidity!: NUMBER;

    GetPressure(): number {
        return this.pressure;
    }

    SetPressure({pressure}: {pressure: number}): void {
        this.pressure = pressure;
    }

    @remoteService('SetHumidity') SetHumidity({humidity}: {humidity: number}): void {}

    /**
     * There are no interface types in Thingworx, but in a similar manner to string and number types,
     * we can constrain the JSON (renamed to TWJSON to avoid conflicts with the standard JSON global) type
     * to another interface via generics.
     * 
     * Any JSDoc tags used will be converted into thingworx descriptions.
     * @param factor    A factor by which to multiply the values.
     * @return          An object containing the requested values.
     */
    GetValuesWithFactor({factor = 1}: {factor?: number}): TWJSON<StatusResponse> {
        return {
            pressure: factor * this.pressure,
            humidity: factor * this.humidity
        }
    }

    /**
     * With TypeScript, it is possible to user certain newer javascript features through transpilation.
     */
    PrintValuesWithFactor({factor = 1}: {factor?: NUMBER}): NOTHING {
        // An example is destructuring objects into variables
        const {pressure, humidity} = this.GetValuesWithFactor({factor});

        // Template literals are another feature that is very useful
        logger.info(`The pressure is ${pressure} and the humidity is ${humidity}`);

        // We can also the new for...of syntax for easier looping
        for (const row of ThingTemplates.GenericThing.GetImplementingThings()) {
            logger.info(`Thing is ${row.name}`);
        }

        // We can also easily convert infotables to arrays via the spread syntax
        const things: GenericThing[] = [...ThingTemplates.GenericThing.GetImplementingThings()].map(row => Things[row.name]).filter(thing => thing.IsEnabled());
        things.forEach(thing => logger.info(`Thing ${thing.name}'s template is ${thing.GetThingTemplate()}`));

        // And easily combine object literals
        const allValues = {...this.GetValuesWithFactor({factor}), altitude: 0};
    }

}
