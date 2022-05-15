/**
 * It is possible to extend **locally defined** data shapes by using the base
 * `DataShapeBase` class as a function, which takes the data shapes to be extended
 * as arguments.
 */
class LinkedPortInfo extends DataShapeBase(LinkedList, PortInfo) {

    /**
     * Additional fields can be added to the new data shape.
     */
    description!: string;

    /**
     * Fields declared on the parent types may be overriden on the new
     * data shape, but only if they have compatible types.
     * The overriden field will be used on the final data shape.
     * 
     * This can be used to clear out modifiers declared on the parent, such as
     * `@primaryKey` or `@ordinal`.
     */
    override name!: string;
}