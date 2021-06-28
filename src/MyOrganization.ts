/**
 * Organiations can be created via a class that extends from `OrganizationBase`. Each class represents a single organization.
 */
class MyOrganization extends OrganizationBase {

    /**
     * Organizations classes are only allowed to have a single 'units' property which is used to describe
     * the organizational units that are part of the organization.
     * 
     * Each organization must have a single root unit.
     */
    units: OrganizationUnit = {
        /**
         * A description can be provided for the organizational unit by adding a JSDoc tag to its name property.
         */
        name: 'MyUnit',

        // Members can be optionally added by specifying a "members" property which can contain users and/or groups
        members: [Users.JohnDoe],

        // Subunits can be optionally specified via the "units" property, that is an array in which subunits can be created
        units: [
            {
                name: 'MyUnit2',
                members: [Groups.ExampleGroup]
            },
            {
                name: 'MyUnit3'
            }
        ]
    }

}