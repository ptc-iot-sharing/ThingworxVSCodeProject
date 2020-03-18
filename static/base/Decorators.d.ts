declare function ThingTemplateDefinition<K extends new (...args) => GenericThing>(target: K);
declare function ThingDefinition<K extends new (...args) => GenericThing>(target: K);
declare function valueStream(stream: KeysOfType<Things, ValueStream>): <T extends new (...args) => GenericThing>(target: T) => void;
declare function identifier(identifier: string): <T extends new (...args) => GenericThing>(target: T) => void;
declare function published<K extends new (...args) => GenericThing>(target: K);
declare function editable<K extends new (...args) => any>(target: K);

declare const principal: keyof Users;

type NonMethod<Source> = { [K in keyof Source]: Source[K] extends Function ? never : K }[keyof Source];
type Events<Source> = { [K in keyof Source]: Source[K] extends EVENT<any> ? K : never}[keyof Source];

//declare type ThingPropertyDecorator = <T extends GenericThing, P>(target: T, key: string, descriptor: TypedPropertyDescriptor<P extends ((...args: any[]) => void) ? never : P>) => any;

declare function persistent<T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>): void;
declare function logged<T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>): void;
declare function primaryKey<T extends DataShapeBase, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>): void;

declare interface _remoteArgsLiteral {
    cacheTime?: number; 
    pushType?: 'Value' | 'Always' | 'Never';
    pushThreshold?: any;
    startType?: 'DefaultValue' | 'EdgeValue';
    foldType?: 'NONE' | 'FOLD';
    timeout?: number;
}

declare function remote(identifier: string, args?: _remoteArgsLiteral): <T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends ((...args: any[]) => void) ? never : P>) => any;
declare function dataChangeType(kind: 'ALWAYS' | 'NEVER' | 'ON' | 'OFF'): <T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>) => void;
declare function dataChangeType(kind: 'VALUE', threshold?: any): <T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends Function ? never : P>) => void;

declare function local< S extends keyof Things, P extends NonMethod<Things[S]>>(thing: S, property: P): <T extends GenericThing, P>(target: T, key: string, descriptor?: TypedPropertyDescriptor<P extends ((...args: any[]) => void) ? never : P>) => any;

declare function final<T extends GenericThing>(target: T, key: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>): void;

declare interface _remoteServiceArgsLiteral {
    enableQueue?: boolean;
    timeout?: number;
}
declare function remoteService(identifier: string, args?: _remoteServiceArgsLiteral): <T extends GenericThing>(target: T, key: any, descriptor?: TypedPropertyDescriptor<(...args: any[]) => any>) => void;

declare function remoteEvent(identifier: string): <T extends GenericThing>(target: T, key: any, descriptor?: TypedPropertyDescriptor<EVENT<any>>) => void;

declare function subscription<S extends keyof Things, E extends Events<Things[S]>, P extends NonMethod<Things[S]>>(source: S, event: E, property?: P): 
        <T extends GenericThing, P extends (alertName: string, eventData: INFOTABLE, eventName: string, eventTime: DATETIME, source: string, sourceProperty: string) => void>(target: T, key: string, descriptor: TypedPropertyDescriptor<P>) => void;

declare function localSubscription(event: string): <T extends GenericThing, P extends Function>(target: T, key: string, descriptor: TypedPropertyDescriptor<P>) => void;

declare function localSubscription(event: 'DataChange', property: string): <T extends GenericThing, P extends Function>(target: T, key: string, descriptor: TypedPropertyDescriptor<P>) => void;

