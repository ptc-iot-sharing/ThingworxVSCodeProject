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
 * When applied to a data shape field, this makes the property a primary key.
 */
declare function primaryKey<T extends DataShapeBase, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>): void;

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
        <T extends GenericThing, P extends (alertName: string, eventData: INFOTABLE, eventName: string, eventTime: DATETIME, source: string, sourceProperty: string) => void>(target: T, key: string, descriptor: TypedPropertyDescriptor<P>) => void;


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
