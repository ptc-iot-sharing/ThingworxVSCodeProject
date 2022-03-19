/**
 * A datashape that is used as a SQL query service result.
 */
class MyProduct extends DataShapeBase {
    /**
     * The name of the product.
     */
    name!: string;

    /**
     * The price of the product.
     */
    price!: number;
}