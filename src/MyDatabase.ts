/**
 * SQL commands and queries can be added as services to things and templates
 * that extends from the `Database` template.
 * 
 * These services are marked with either the `@SQLCommand` or `@SQLQuery` decorators and must have a specific syntax:
 * * For commands, these must only contain a single tagged template literal using the `SQLCommand` function.
 * * For queries, these must only contain a single return statement that returns the result of a tagged
 *   template literal using the `SQLQuery` function.
 * 
 * Prepared statement parameters are specified via template literal expressions, while literal SQL code is specified
 * via template literals enclosed using `<<` and `>>` (e.g. `<<${mySQLCode}>>`)
 */
@config({
    ConnectionInfo: {
        connectionValidationString: 'SELECT NOW()',
        jDBCConnectionURL: process.env.DATABASE_JDBC_STRING,
        jDBCDriverClass: 'com.yourdatabase.yourDriver',
        maxConnections: 5,
        password: process.env.DATABASE_PASSWORD,
        userName: process.env.DATABASE_USERNAME
    }
})
@ThingDefinition class MyDatabase extends Database {

    /**
     * SQL commands are created using the `@SQLCommand` decorator. The command itself
     * is specified as a template literal string using the `SQLCommand` function and it
     * must be the only statement in this service.
     * @param name          The name of the product to add.
     * @param price         The price for the product. 
     */
    @SQLCommand addProduct({name, price}: {name: string, price: number}): void {
        // Prepared statement parameters are specified as template literal expressions.
        // These may only contain argument names.
        // Consider using a vscode extension such as es6-string-html to get syntax coloring for these strings.
        // Note that all javascript comments within a SQLCommand service will be removed at compile time.
        /*sql*/
        SQLCommand`INSERT INTO products VALUES (${name}, ${price})`;
    }

    /**
     * The timeout of a SQL command can be optionally specified as an argument to the `@SQLCommand` decorator.
     * If omitted, it will use the default value of 60 seconds.
     */
    @SQLCommand(600) clearProducts(): void {
        /*sql*/
        SQLCommand`DELETE FROM products`;
    }

    /**
     * SQL queries are created using the `@SQLQuery` decorator. The query itself
     * is specified as a template literal string using the `SQLCommand` function and it
     * must be the only statement in this service.
     * @param condition             The condition with which to filter products.
     */
    @SQLQuery getProducts({condition}: {condition: string}): INFOTABLE<MyProduct> {
        // SQL literal replacements can also be specified using template literal expressions, by
        // enclosing them in the standard thingworx SQl literal `<<`, `>>` delimiters.
        /*sql*/
        return SQLQuery`
        SELECT
            product_name,
            price
        FROM
            products
        WHERE
            <<${condition}>>
        `;
    }

    /**
     * Similar to commands, the timeout and max rows can be configured on queries as arguments to the `@SQLQuery` decorator.
     * If omitted, they will use the default values of 60 seconds for the timeout and 500 max rows.
     */
    @SQLQuery(600, 5000) getAllProducts(): INFOTABLE<MyProduct> {
        /*sql*/
        return SQLQuery`
        SELECT
            product_name,
            price
        FROM
            products
        `;
    }

    /**
     * Gets the increased price of the given product after applying the given percent increase.
     * @param product           The product whose increased price should be determined.
     * @param percent           The percent by which to increase the price.
     * @returns                 The increased price.
     */
    getIncreasedProductPrice({product, percent}: {product: INFOTABLE<MyProduct>, percent: number}): number {
        return product.price + product.price * percent;
    }

    /**
     * When inline SQL is enabled, it is possible to write SQL commands and queries directly within javascript services.
     * The transformer will extract the sql statements and convert them into service.
     * @param name          The name of the product whose info should be retrieved. A value of "*" will update the prices of all products.
     * @param percent       A percentage by which to increase the product's price.
     * @returns             An infotable containing the products that were updated.
     */
    increaseProductPrice({name, percent}: {name: string, percent: number}): INFOTABLE<MyProduct> {
        // If the name is "*" update all prices
        if (name == '*') {
            /*sql*/
            SQLCommand`UPDATE products SET price = price * ${1 + percent}`;

            /*sql*/
            return SQLQuery<MyProduct>`SELECT * from products`;
        }

        // Find the product to update
        let productToUpdate: INFOTABLE<MyProduct> | undefined;

        // Inefficiently loop through a query of all products to find the one whose
        // price should be updated
        // Inline SQL statements can be used anywhere within a database service, for example
        // within a for-loop
        // For SQLQuery it is required to specify the type of the return value as a generic argument
        for (const product of SQLQuery<MyProduct>/*sql*/`SELECT * FROM products`) {
            if (product.product_name == name) {
                productToUpdate = product.toInfoTable();
                break;
            }
        }

        // If the product wasn't found, throw an error
        if (!productToUpdate) {
            throw new Error(`${LOG_PREFIX} The product "${name}" does not exist.`);
        }

        // Update the database; when using inline commands it is possible to use javascript expressions in substitutions
        // but note that these must have a valid inferred type (e.g. cannot be any, unknown, or a non-thingworx type)
        /*sql*/
        SQLCommand`UPDATE products SET price = ${this.getIncreasedProductPrice({product: productToUpdate, percent})} WHERE id = ${productToUpdate.id}`;

        // Return the updated product
        // For queries and commands, it is possible to specify the timeout and max rows properties as additional generic arguments
        /*sql*/
        return SQLQuery<MyProduct, 600, 5000>`SELECT * FROM products WHERE id = ${productToUpdate.id}`;
    }

    
}