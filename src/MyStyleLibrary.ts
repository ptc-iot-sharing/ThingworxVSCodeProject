/**
 * Styles and state definitions can be created via a class that extends from `StyleLibrary`. A single style library can contain
 * multiple styles and/or state definitions.
 */
@visible(Organizations.Development)
@allow(Users.JohnDoe, Permission.EventInvoke)
class MyStyleLibrary extends StyleLibrary {

    /**
     * A style is declared as a property on the style library. It should be assigned a default value containing
     * the values of the fields to use for the style definition, but all fields are optional.
     * 
     * An optional `StyleDefinition` type annotation can be used to provide autocomplete suggestions.
     */
    DefaultButtonStyle: StyleDefinition = {
        backgroundColor: 'rgba(0, 128, 255, 1)',
        foregroundColor: '#FFFFFF',
        textSize: '14px'
    }

    /**
     * A state definition is also declared as a property on the style library. It must be assigned a default value
     * that is an object describing the kind of state definition it is and what state definitions it contains.
     * 
     * An optional `StyleDefinition` type annotation can be used to provide autocomplete suggestions.
     */
    TextStates: StateDefinition = {
        stateType: 'numeric',
        stateDefinitions: [
            { comparator: '<', defaultValue: 10, defaultStyleDefinition: 'StatusError', name: 'error' },
            { comparator: '<=', defaultValue: 50, defaultStyleDefinition: 'StatusBusy', name: 'warning' },
            {
                comparator: '<',
                defaultValue: 200,
                defaultStyleDefinition: {
                    backgroundColor: 'transparent',
                    foregroundColor: '#000000',
                    textSize: '14px'
                },
                name: 'ok'
            },
            // All states require a "default" state that has no comparator or default value properties
            { defaultStyleDefinition: 'StatusUnknown', name: 'unknown' }
        ]
    }

    MenuItems: StateDefinition = {
        stateType: 'string',
        stateDefinitions: [
            { name: 'Get Info', defaultValue: '', defaultStyleDefinition: {} },
            { name: 'Copy', defaultValue: '', defaultStyleDefinition: {} },
            { name: 'Duplicate', defaultValue: '', defaultStyleDefinition: {} },
            { name: '--', defaultValue: '', defaultStyleDefinition: {} },
            { name: 'Edit', defaultValue: '', defaultStyleDefinition: {} },
            { name: 'Delete', defaultStyleDefinition: {} },
        ]
    }

}