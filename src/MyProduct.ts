/**
 * A datashape that is used as a SQL query service result.
 */
class MyProduct extends DataShapeBase {
    /**
     * The name of the product.
     */
    product_name!: string;

    /**
     * The price of the product.
     */
    price!: number;

    /**
     * The product's id.
     */
    id!: string;
}