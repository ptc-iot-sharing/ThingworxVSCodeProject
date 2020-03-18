/**
 * This is an example of a data shape.
 */
class LinkedList extends DataShapeBase {
    name!: STRING;

    next!: INFOTABLE<LinkedList>
}