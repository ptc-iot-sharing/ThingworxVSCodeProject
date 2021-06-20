/**
 * Users and groups can be created via a class that extends from `UserList`. A single user list can contain
 * multiple users and/or groups.
 */
class MyUserList extends UserList {

    /**
     * A user is declared as a property on the user list. It can be assigned a default value containing
     * the values of the fields to use for the user extensions.
     * 
     * An optional `UserExtensionLiteral` type annotation can be used to provide autocomplete suggestions.
     * All other type annotations are invalid in a user list.
     */
    JohnDoe: UserExtensionLiteral = {
        firstName: 'John',
        lastName: 'Doe'
    }

    /**
     * A user group is also declared as a property on the user list. It must be assigned a default value
     * that is an array containing the members that should be included in the group.
     * 
     * If the group should be empty, the default value should be an empty array.
     */
    ExampleGroup = [Users.System]

}