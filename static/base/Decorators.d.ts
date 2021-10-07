/**
 * Represents a configuration table. This type takes the data shape name as a type argument.
 */
declare type Table<T extends DataShapeBase> = undefined;

/**
 * Represents a configuration table. This type takes the data shape name as a type argument.
 */
declare type MultiRowTable<T extends DataShapeBase> = undefined;

/**
 * A decorator that can be applied to any entity to create a configuration table for it. This decorator
 * takes a single argument that represents the configuration table definition as a class expression.
 * @param tables        The configuration tables definition.
 */
declare function ConfigurationTables(tables: new (...args) => any): <T extends new (...args) => GenericThing>(target: T) => void;

/**
 * Causes this class to be compiled into a Thing Template. The base class must be a class
 * that extends from `GenericThing` at some point.
 */
declare function ThingTemplateDefinition<K extends new (...args) => GenericThing>(target: K);

/**
 * Causes this class to be compiled into a Thing. The base class must be a class
 * that extends from `GenericThing` at some point.
 */
declare function ThingDefinition<K extends new (...args) => GenericThing>(target: K);

/**
 * Applies the given stream to a Thing or Thing Template.
 * This decorator is not valid when applied to Thing Shapes.
 * @param stream        The name of the stream.
 */
declare function valueStream(stream: KeysOfType<Things, ValueStream>): <T extends new (...args) => GenericThing>(target: T) => void;

/**
 * Specifies that the name of the entity should be different from the name of the class.
 * @param identifier    The identigier to use.
 */
declare function exportName(identifier: string): <T extends new (...args) => any>(target: T) => void;

/**
 * Applies the given identifier to this Thing class.
 * @param identifier    The identigier to use.
 */
declare function identifier(identifier: string): <T extends new (...args) => GenericThing>(target: T) => void;

/**
 * Marks this Thing published for federation.
 */
declare function published<K extends new (...args) => GenericThing>(target: K);

/**
 * When applied to any Thingworx model class, this allows users of this project to modify
 * the entity in composer. Note that upgrading this project will cause those modifications
 * to be lost.
 */
declare function editable<K extends new (...args) => any>(target: K);

/**
 * Within services, this is the name of the current user.
 */
declare const principal: keyof Users;

type NonMethod<Source> = { [K in keyof Source]: Source[K] extends Function ? never : K }[keyof Source];
type Events<Source> = { [K in keyof Source]: Source[K] extends EVENT<any> ? K : never}[keyof Source];

/**
 * When applied to a property, this makes the property persistent.
 */
declare function persistent<T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>): void;

/**
 * When applied to a property, this makes the property logged.
 */
declare function logged<T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>): void;

/**
 * When applied to a numeric property or data shape field, this sets the property's minimum value aspect.
 * @param minimumValue      The minimum value to set. This must be a numeric literal.
 */
declare function minimumValue(minimumValue: number): <T extends GenericThing | DataShapeBase, P extends number>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P>) => void;

/**
 * When applied to a numeric property or data shape field, this sets the property's maximum value aspect.
 * @param maximumValue      The maximum value to set. This must be a numeric literal.
 */
declare function maximumValue(maximumValue: number): <T extends GenericThing | DataShapeBase, P extends number>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P>) => void;

/**
 * When applied to a numeric property or data shape field, this sets the property's unit aspect.
 * @param unit      The unit to use. This must be a string literal.
 */
declare function unit(unit: string): <T extends GenericThing | DataShapeBase, P extends number>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P>) => void;

/**
 * When applied to a data shape field, this makes the property a primary key.
 */
declare function primaryKey<T extends DataShapeBase, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>): void;

/**
 * When applied to a data shape field, this controls the ordinal value of that field.
 */
declare function ordinal(ordinal: number): <T extends DataShapeBase, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>) => void;

declare interface _remoteArgsLiteral {
    /**
     * How long the property should be cached on the server.
     *  - 0 (Default):  Cached until pushed
     *  - -1:           Never cached
     *  - \>0:           Cached for the specified seconds
     */
    cacheTime?: number; 

    /**
     * Controls when this property is pushed.
     */
    pushType?: 'Value' | 'Always' | 'Never';

    /**
     * When pushType is set to `"Value"`, for certain property types
     * such as `NUMBER`, this controls the push threshold.
     */
    pushThreshold?: any;

    /**
     * Controls the initial value of this remote property before a value first being
     * push.
     */
    startType?: 'DefaultValue' | 'EdgeValue';

    /**
     * Controls the folding behaviour when the remote device goes offline.
     */
    foldType?: 'NONE' | 'FOLD';

    /**
     * The timeout before an attempted read fails. A value of 0 (default) will
     * never time out.
     */
    timeout?: number;
}

/**
 * When applied to a property, this creates a remote binding for that property.
 * @param identifier    The name of the remote property.
 * @param args          Additional, optional arguments.
 */
declare function remote(identifier: string, args?: _remoteArgsLiteral): <T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends ((...args: any[]) => void) ? never : P>) => any;

/**
 * Controls when `DataChange` events are fired for this property.
 * @param kind      The kind of data change frquenecy to use.
 */
declare function dataChangeType(kind: 'ALWAYS' | 'NEVER' | 'ON' | 'OFF'): <T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>) => void;


/**
 * Controls when `DataChange` events are fired for this property.
 * @param kind          The kind of data change frquenecy to use.
 * @param threshold     For certain property types such as `NUMBER`, this controls the value threshold
 *                      that must be exceeded in order to fire a `DataChange` event.
 */
declare function dataChangeType(kind: 'VALUE', threshold?: any): <T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>) => void;

/**
 * Creates a local binding between this property and the property of another Thing.
 * @param thing         The source thing name.
 * @param property      The source property name.
 */
declare function local< S extends keyof Things, P extends NonMethod<Things[S]>>(thing: S, property: P): <T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends ((...args: any[]) => void) ? never : P>) => any;

/**
 * When applied to a service method, this disables overriding the service on implementing entities.
 * Note that this isn't enforced by the compiler, but attempting to override a final service will
 * cause an error to occur when importing the project in Thingworx.
 */
declare function final<T extends GenericThing>(target: T, key: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>): void;

/**
 * This decorator must be applied to services that are overriden from a base template or thing shape.
 */
declare function override<T extends GenericThing>(target: T, key: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>): void;

/**
 * When applied to service on a thing, this service will be invoked after installation when using the `deploy` gulp task.
 */
declare function deploy<T extends GenericThing>(target: T, key: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>): void;

/**
 * When applied to an entity, this causes a configuration table to be emitted for it.
 * @param config        A map of configuration tables.
 */
declare function config(config: Record<string, any>): (target: new (...args) => any) => void;

declare interface _remoteServiceArgsLiteral {
    /**
     * Enables queueing for this remote service.
     */
    enableQueue?: boolean;

    /**
     * Defaults to 0. The amount of time to wait for a result before timing out.
     */
    timeout?: number;
}

/**
 * When applied to a service, this causes a remote binding to be created for the service.
 * When this decorator is applied, the body of the service will be ignored.
 * @param identifier    The name of the remote service.
 * @param args          Additional, optional arguments.
 */
declare function remoteService(identifier: string, args?: _remoteServiceArgsLiteral): <T extends GenericThing>(target: T, key: any, descriptor?: TypedPropertyDescriptor<(...args: any[]) => any>) => void;

/**
 * When applied to an event, this causes a remote binding to be created for the event.
 * @param identifier    The name of the remote event.
 */
declare function remoteEvent(identifier: string): <T extends GenericThing>(target: T, key: any, descriptor?: TypedPropertyDescriptor<EVENT<any>>) => void;

/**
 * Causes this method to be treated as a subscription implementation.
 * The subscription will be created for the event of another entity.
 * The method should have the following signature:
 * ```ts
 * (alertName: string, eventData: INFOTABLE, eventName: string, eventTime: DATETIME, source: string, sourceProperty: string) => void
 * ```
 * @param source        The name of the entity.
 * @param event         The name of the event.
 * @param property      If the event is `"DataChange"`, this is the name of the property.
 */
declare function subscription<S extends keyof Things, E extends Events<Things[S]>, P extends NonMethod<Things[S]>>(source: S, event: E, property?: P): 
        <T extends GenericThing, P extends (alertName: string, eventData: INFOTABLE<any>, eventName: string, eventTime: DATETIME, source: string, sourceProperty: string) => void>(target: T, key: string, descriptor: TypedPropertyDescriptor<P>) => void;


/**
 * Causes this method to be treated as a subscription implementation.
 * The subscription will be created for the event of this entity.
 * The method should have the following signature:
 * ```ts
 * (alertName: string, eventData: INFOTABLE, eventName: string, eventTime: DATETIME, source: string, sourceProperty: string) => void
 * ```
 * @param event         The name of the event.
 */
declare function localSubscription(event: string): <T extends GenericThing, P extends Function>(target: T, key: string, descriptor: TypedPropertyDescriptor<P>) => void;


/**
 * Causes this method to be treated as a subscription implementation.
 * The subscription will be created for the event of this entity.
 * The method should have the following signature:
 * ```ts
 * (alertName: string, eventData: INFOTABLE, eventName: string, eventTime: DATETIME, source: string, sourceProperty: string) => void
 * ```
 * @param event         The name of the event.
 * @param property      If the event is `"DataChange"`, this is the name of the property.
 */
declare function localSubscription(event: 'DataChange', property: string): <T extends GenericThing, P extends Function>(target: T, key: string, descriptor: TypedPropertyDescriptor<P>) => void;

/**
 * An enum that contains the available runtime permission kinds.
 */
declare enum Permission {

    /**
     * A permission that allows users to read property values at runtime.
     */
    PropertyRead,

    /**
     * A permission that allows users to write property values at runtime.
     */
    PropertyWrite,

    /**
     * A permission that allows users to invoke services at runtime.
     */
    ServiceInvoke,

    /**
     * A permission that allows users to trigger events at runtime.
     */
    EventInvoke,

    /**
     * A permission that allows users to listen for events at runtime.
     */
    EventSubscribe
}

/**
 * A decorator that can be used to deny specific permissions on an entity or entity member for a list of users or user groups
 * that is applied to a built-in method, property or event.
 * @param name      The name of the member to which the permission applies.
 * @param args      A comma separated list of users, user groups and permissions, in any order.
 */
declare function deny<T extends new (...args) => unknown>(name: string, ...args: (UserEntity | GroupEntity | Permission)[]): (target: T) => void;

/**
 * A decorator that can be used to deny specific permissions on an entity or entity member for a list of users or user groups
 * that is applied to a built-in method, property or event.
 * @param name      The name of the member to which the permission applies.
 * @param args      A comma separated list of users, user groups and permissions, in any order.
 */
declare function allow<T extends new (...args) => unknown>(name: string, ...args: (UserEntity | GroupEntity | Permission)[]): (target: T) => void;
 

/**
 * A decorator that can be used to deny specific permissions on an entity or entity member for a list of users or user groups.
 * @param args      A comma separated list of users, user groups and permissions, in any order.
 */
declare function deny(...args: (UserEntity | GroupEntity | Permission)[]): <T extends {}>(target: T, key?: string, descriptor?: PropertyDescriptor) => void;

/**
 * A decorator that can be used to allow specific permissions on an entity or entity member for a list of users or user groups.
 * @param args      A comma separated list of users, user groups and permissions, in any order.
 */
declare function allow(...args: (UserEntity | GroupEntity | Permission)[]): <T extends {}>(target: T, key?: string, descriptor?: PropertyDescriptor) => void;


/**
 * A decorator that can be used to deny specific permissions on an instance of an entity.
 * @param args      A comma separated list of users, user groups and permissions, in any order.
 */
declare function denyInstance(...args: (UserEntity | GroupEntity | Permission)[]): <T extends new (...args) => unknown>(target: T) => void;

/**
 * A decorator that can be used to allow specific permissions on an instance of an entity.
 * @param args      A comma separated list of users, user groups and permissions, in any order.
 */
declare function allowInstance(...args: (UserEntity | GroupEntity | Permission)[]): <T extends new (...args) => unknown>(target: T) => void;

/**
 * A decorator that can be used to make an entity visible for a set of given organizations.
 * @param args      A comma separated list of organizations.
 */
 declare function visible(...args: (OrganizationEntity)[]): <T extends new (...args) => unknown>(target: T) => void;

 /**
  * A decorator that can be used to make an entity visible for a set of given organizations.
  * @param args      A comma separated list of organizations.
  */
  declare function visibleInstance(...args: (OrganizationEntity)[]): <T extends new (...args) => unknown>(target: T) => void;
