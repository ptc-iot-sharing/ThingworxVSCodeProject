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
     * @param table         The name of the table from which to get products.
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

    
}