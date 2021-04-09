/**
 * This is an example of a data shape. Data shapes are classes that must extend from `DataShapeBase`.
 */
class LinkedList extends DataShapeBase {

    /**
     * Data shape fields are specified as properties. The `@primaryKey` decorator
     * can be used to mark fields as primary keys.
     */
    @primaryKey name!: string;

    /**
     * The `@ordinal` decorator can be used to specify ordinal values for data shape fields.
     */
    @ordinal(4) next!: INFOTABLE<LinkedList>
}