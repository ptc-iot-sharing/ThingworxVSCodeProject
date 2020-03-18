/**
 * This example class demonstrates how Thing Shapes are created.
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

}