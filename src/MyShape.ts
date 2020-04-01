/**
 * We can define and use interfaces throughout the project.
 */
interface StatusReponse {

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

    @logged @persistent pressure: NUMBER = 10;

    @remote('humidity') humidity!: NUMBER;

    GetPressure(): NUMBER {
        return this.pressure;
    }

    SetPressure({pressure}: {pressure: NUMBER}): NOTHING {
        this.pressure = pressure;
    }

    @remoteService('SetHumidity') SetHumidity({humidity}: {humidity: NUMBER}): NOTHING {}

    /**
     * There are no interface types in Thingworx, but in a similar manner to string and number types,
     * we can constrain the JSON (renamed to TWJSON to avoid conflicts with the standard JSON global) type
     * to another interface via generics.
     */
    GetValues(): TWJSON<StatusReponse> {
        return {
            pressure: this.pressure,
            humidity: this.humidity
        }
    }

}
