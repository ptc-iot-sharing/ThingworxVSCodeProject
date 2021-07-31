declare const _isThingShape: unique symbol;
declare const _isDataShape: unique symbol;
declare const _isOrganization: unique symbol;

declare class ThingShapeBase extends GenericThing {
    private [_isThingShape]: true;
}

declare class DataShapeBase {
    private [_isDataShape]: true;
}

declare class OrganizationBase {
    private [_isOrganization]: true;

    units: OrganizationUnit;
}

declare interface OrganizationUnit {

    /**
     * The organization unit's name.
     */
    name: string;

    /**
     * The members that are part of the organization unit.
     */
    members?: (UserEntity | GroupEntity)[];

    /**
     * Organization units contained by this organization.
     */
    units?: OrganizationUnit[];
}

/**
 * A utility function that can be used to specify a type checked organization unit in a `@visible` or `@visibleInstance` decorator.
 * You should not invoke this function at runtime.
 * @param org       The organization to which the unit belongs.
 * @param unit      The name of the organization unit.
 */
declare function Unit<T extends OrganizationEntity>(org: T, unit: T['__units']): OrganizationEntity;

declare interface FieldDefinitionCore {
    name: string;
    baseType: BASETYPENAME;
}

declare interface FieldDefinitionBase<T = any> extends FieldDefinitionCore {
    description: string;
    ordinal: number;
    aspects?: {
        isPrimaryKey?: boolean;
        defaultValue: T;
    }
}

declare class FieldDefinitionClass<T = any> implements FieldDefinitionBase<T> {
    name: string;
    description: string;
    baseType: BASETYPENAME;
    ordinal: number;
    aspects?: {
        isPrimaryKey?: boolean;
        defaultValue: T;
    }

    getName(): string;
    setName(name: string): void;

    getDescription(): string;
    setDescription(description: string);

    getBaseType(): BASETYPENAME;
    setBaseType(baseType: BASETYPENAME): void;

    getOrdinal(): number;
    setOrdinal(ordinal: number);

    defaultValue: T;
    hasDefaultValue(): boolean;

    isStreamEntry(): boolean;
    isDataTableEntry(): boolean;
    isContentCrawlerEntry(): boolean;

    isNullable(): boolean;

    clone(): FieldDefinition;
    toJSON(): any;
}

declare interface JSONInfoTable<T> {
    rows: T[];
    dataShape: {
        fieldDefinitions: {[key: string]: FieldDefinitionBase<T>}
    }
}

type INFOTABLE<T = any> = T & InfoTable<T>;
type InfoTableReference<T extends keyof DataShapes> = DataShapes[T]['__dataShapeType'] & InfoTable<DataShapes[T]['__dataShapeType']>;
type ValueCollectionConvertible<T> = Partial<T> | ValueCollection<T>;

declare class InfoTable<T = any> {
    private constructor();

    length: number;
    rows: ValueCollectionList<T>;
    
    [i: number]: ValueCollection<T>;

    [Symbol.iterator]: (...args: any[]) => Iterator<ValueCollection<T>>;

    clone(): INFOTABLE<T>;
    getLength(): number;
    isEmpty(): boolean;

    AddField(field: FieldDefinitionCore & Partial<FieldDefinition>): void;
    getField<K extends keyof T>(field: K): FieldDefinitionClass<T[K]>;
    getFieldCount(): number;

    getLastRow(): ValueCollection<T> | undefined;
    getFirstRow(): ValueCollection<T> | undefined;

    CopyValues(index: number): INFOTABLE<T>;

    RemoveRow(index: number): void;
    RemoveAllRows(): void;

    AddRow(row: ValueCollectionConvertible<T>): void;

    Find(query: QUERY<T> | Partial<T>): ValueCollection<T> | undefined;
    Filter(query: Partial<T>);
    Delete(query: QUERY<T> | Partial<T>): number;
    Sort(args?: {name: string, ascending?: boolean}): void;

    RowCount(): number;
    ToJSON(): JSONInfoTable<T>;
    
    getDataShape(): DataShapeDefinition<T>;
}

declare class ValueCollectionList<T = any> {
    private constructor();

    length: number;
    [i: number]: ValueCollection<T>;

    [Symbol.iterator]: (...args: any[]) => Iterator<ValueCollection<T>>;

    getLength(): number;
    getLastRow(): ValueCollection<T> | undefined;
    getFirstRow(): ValueCollection<T> | undefined;
    getRow(index: number): ValueCollection<T> | undefined;

    toArray(): T[];

    // TODO: Maybe add base ArrayList<T> methods?
}

declare class ValueCollectionBase<T = any> {
    private constructor();

    clone(): ValueCollection<T>;

    getValue(name: keyof T): T[keyof T] | undefined;
    setValue(name: keyof T, value: T[keyof T]);
    toInfoTable(name?: string): INFOTABLE<T>;

    toJSON(): T;

    has(name: string): boolean;
}

type ValueCollection<T = any> = T & ValueCollectionBase<T>;

declare class DataShapeDefinition<T> {
    private constructor();

    clone(): DataShapeDefinition<T>;

    getFields(): {[K in keyof T]: FieldDefinitionClass<T[K]>}; // NOTE that this technically a FieldDefinitionCollection object, but its methods don't seem to be particularly relevant.
    getFieldDefinition<K extends keyof T>(name: K): FieldDefinitionClass<T[K]>;

    hasPrimaryKey(): boolean;
    hasField(name: string): boolean;

    toJSON(): {
        fieldDefinitions: {[K in keyof T]: FieldDefinitionBase<T[K]>}
    }
}

// #region Base Type Declaration


type XML = Object;

declare interface QUERY<T = any> {
    sort?: 'ascending' | 'descending';
    filters: QueryFilter<T>;
}

declare interface AndOrQueryFilter<T> {
    type: 'AND' | 'OR';
    filters: QueryFilter<T>[];
}

declare interface SingleValueFilter<T, K extends keyof T> {
    type: 'EQ' | 'NEQ' | 'LIKE' | 'GT' | 'LT' | 'LE' | 'GE'
    fieldName: K;
    value: T[K];
}

declare interface BetweenFilter<T, K extends keyof T> {
    type: 'BETWEEN' | 'NOTBETWEEN'
    fieldName: K;
    from: T[K];
    to: T[K];
}

type QueryFilter<T> = AndOrQueryFilter<T> | SingleValueFilter<T, keyof T> | BetweenFilter<T, keyof T>;

declare const _event: unique symbol;

type NOTHING = void;
type STRING<T extends string = string> = T;
type NUMBER<T extends number = number> = T;
type BOOLEAN = boolean;

type DATETIME = Date;
type datetime = Date;

type TIMESPAN = number;
type timespan = number;

type TWJSON<T = any> = T extends (...args: any[]) => any ? never : (T extends Object ? Struct<T> : T);
type json<T = any> = TWJSON<T>;

// This is technically a Location object, but it doesn't contain any relevant methods
type LOCATION = {latitude: number, longitude: number, altitude?: number};
type location = LOCATION;

type IMAGE = string;
type HYPERLINK = string;
type IMAGELINK = string;
type PASSWORD = string;
type HTML = string;
type TEXT = string;
type TAGS = string;
type SCHEDULE = string;
type VARIANT = any;
type GUID = string;
type BLOB = any;
type INTEGER<T extends number = number> = T;
type LONG<T extends number = number> = T;
type PROPERTYNAME = string;
type SERVICENAME = string;
type EVENTNAME = string;
type THINGSHAPENAME = keyof ThingShapes;
type THINGTEMPLATENAME = keyof ThingTemplates;
type DATASHAPENAME = keyof DataShapes;
type MASHUPNAME = keyof Mashups;
type MENUNAME = keyof Menus;
type BASETYPENAME = string;
type USERNAME = keyof Users;
type GROUPNAME = string;
type CATEGORYNAME = string;
type STATEDEFINITIONNAME = keyof StateDefinitions;
type STYLEDEFINITIONNAME = keyof StyleDefinitions;
type MODELTAGVOCABULARYNAME = string;
type DATATAGVOCABULARYNAME = string;
type NETWORKNAME = string;
type MEDIAENTITYNAME = keyof MediaEntities;
type APPLICATIONKEYNAME = keyof ApplicationKeys;
type LOCALIZATIONTABLENAME = keyof LocalizationTables;
type ORGANIZATIONNAME = keyof Organizations;
type DASHBOARDNAME = string;
type PERSISTENCEPROVIDERPACKAGENAME = string;
type PERSISTENCEPROVIDERNAME = keyof PersistenceProviders;
type PROJECTNAME = keyof Projects;
type VEC2 = string;
type VEC3 = string;
type VEC4 = string;
type THINGCODE = string;
type NOTIFICATIONCONTENTNAME = string;
type NOTIFICATIONDEFINITIONNAME = string;
type EVENT<T> = T extends keyof DataShapes ? ({[_event]: true}) & ((eventData?: Partial<DataShapes[T]['__dataShapeType']>) => void) : ({[_event]: true}) & ((eventData?: Partial<T>) => void);
type THINGNAME<Template extends keyof ThingTemplates | undefined = undefined, Shape extends keyof ThingShapes | undefined = undefined> = 
    Template extends keyof ThingTemplates ? 
        (Shape extends keyof ThingShapes ? 
            // Shape & Template
            KeysOfType<Things, ThingTemplates[Template]['__thingTemplateType'] & ThingShapes[Shape]['__thingShapeType']> :
            //Extract<Things, ThingShapes[Shape] & ThingTemplates[Template]> : 
            // Template
            KeysOfType<Things, ThingTemplates[Template]['__thingTemplateType']>) : 
        (Shape extends keyof ThingShapes ? 
            // Shape
            KeysOfType<Things, ThingShapes[Shape]['__thingShapeType']> : 
            // None
            keyof Things);

/**
 * The union of all keys of the specified type from the given type.
 */
type KeysOfType<Source, Type> = { [K in keyof Source]: Source[K] extends Type ? K : never }[keyof Source];

/**
 * An object type containing all non-method properties of the specified type.
 */
type Struct<Source> = { [K in NonMethod<Source>] : Source[K] };

// #endregion

// #region Base Type Union

type ThingShapeProperty = 
NOTHING |
STRING |
NUMBER |
BOOLEAN |
DATETIME |
TIMESPAN |
INFOTABLE |
LOCATION |
XML |
Object |
QUERY |
IMAGE |
HYPERLINK |
IMAGELINK |
PASSWORD |
HTML |
TEXT |
TAGS |
SCHEDULE |
VARIANT |
GUID |
BLOB |
INTEGER |
LONG |
PROPERTYNAME |
SERVICENAME |
EVENTNAME |
THINGNAME |
THINGSHAPENAME |
THINGTEMPLATENAME |
DATASHAPENAME |
MASHUPNAME |
MENUNAME |
BASETYPENAME |
USERNAME |
GROUPNAME |
CATEGORYNAME |
STATEDEFINITIONNAME |
STYLEDEFINITIONNAME |
MODELTAGVOCABULARYNAME |
DATATAGVOCABULARYNAME |
NETWORKNAME |
MEDIAENTITYNAME |
APPLICATIONKEYNAME |
LOCALIZATIONTABLENAME |
ORGANIZATIONNAME |
DASHBOARDNAME |
PERSISTENCEPROVIDERPACKAGENAME |
PERSISTENCEPROVIDERNAME |
PROJECTNAME |
VEC2 |
VEC3 |
VEC4 |
THINGCODE;

// #endregion

declare type UserExtensionLiteral = Partial<Omit<UserExtensions, keyof ThingShapeBase>>;

declare type GroupLiteral = (UserEntity | GroupEntity)[];

/**
 * A base class that can be extended to specify a list of users.
 */
declare class UserList {
    [key: string]: UserExtensionLiteral | GroupLiteral;
}

declare function ThingTemplate<T extends new(...args: {}[]) => GenericThing>(object: T): void;

interface Constructor<T = {}> {
    new (...args: any[]): T;    
}

type Statics<T> = {
    [P in keyof T]: T[P];
}

declare function DataThing<D extends DataShapeBase>(type: Constructor<Stream<DataShapeBase>>, shape: Constructor<D>): Constructor<Stream<D>>;
declare function DataThing<D extends DataShapeBase>(type: Constructor<RemoteStream<DataShapeBase>>, shape: Constructor<D>): Constructor<RemoteStream<D>>;
declare function DataThing<D extends DataShapeBase>(type: Constructor<DataTable<DataShapeBase>>, shape: Constructor<D>): Constructor<DataTable<D>>;
declare function DataThing<D extends DataShapeBase>(type: Constructor<RemoteDataTable<DataShapeBase>>, shape: Constructor<D>): Constructor<RemoteDataTable<D>>;

/**
 * Allows referencing thing templates with non-standard names in extends clauses.
 * @param name  The name of the ThingTemplate
 */
declare function ThingTemplateReference<K extends keyof ThingTemplates>(name: K): new (...args: any[]) => ThingTemplates[K]["__thingTemplateType"];

// #region TS mixin

declare function ThingTemplateWithShapes<
    T1 extends Constructor<GenericThing>, 
    T2 extends Constructor<ThingShapeBase>,
    T3 extends Constructor<ThingShapeBase> | {} = {},
    T4 extends Constructor<ThingShapeBase> | {} = {},
    T5 extends Constructor<ThingShapeBase> | {} = {},
    T6 extends Constructor<ThingShapeBase> | {} = {},
    T7 extends Constructor<ThingShapeBase> | {} = {},
    T8 extends Constructor<ThingShapeBase> | {} = {},
    T9 extends Constructor<ThingShapeBase> | {} = {},
    T10 extends Constructor<ThingShapeBase> | {} = {},
    > (
        mix1: T1,
        mix2: T2,
        mix3?: T3,
        mix4?: T4,
        mix5?: T5,
        mix6?: T6,
        mix7?: T7,
        mix8?: T8,
        mix9?: T9,
        mix10?: T10,
    ): 
    (T1 extends Constructor<GenericThing> ? Statics<T1> : {}) & 
    (T2 extends Constructor<ThingShapeBase> ? Statics<T2> : {}) &
    (T3 extends Constructor<ThingShapeBase> ? Statics<T3> : {}) &
    (T4 extends Constructor<ThingShapeBase> ? Statics<T4> : {}) &
    (T5 extends Constructor<ThingShapeBase> ? Statics<T5> : {}) &
    (T6 extends Constructor<ThingShapeBase> ? Statics<T6> : {}) &
    (T7 extends Constructor<ThingShapeBase> ? Statics<T7> : {}) &
    (T8 extends Constructor<ThingShapeBase> ? Statics<T8> : {}) &
    (T9 extends Constructor<ThingShapeBase> ? Statics<T9> : {}) &
    (T10 extends Constructor<ThingShapeBase> ? Statics<T10> : {}) &
    (new (...args: T1 extends Constructor<GenericThing> ? ConstructorParameters<T1> : never[]) => (
        (T1 extends Constructor<GenericThing> ? InstanceType<T1> : T1) &
        (T2 extends Constructor<ThingShapeBase> ? InstanceType<T2> : T2) &
        (T3 extends Constructor<ThingShapeBase> ? InstanceType<T3> : T3) &
        (T4 extends Constructor<ThingShapeBase> ? InstanceType<T4> : T4) &
        (T5 extends Constructor<ThingShapeBase> ? InstanceType<T5> : T5) &
        (T6 extends Constructor<ThingShapeBase> ? InstanceType<T6> : T6) &
        (T7 extends Constructor<ThingShapeBase> ? InstanceType<T7> : T7) &
        (T8 extends Constructor<ThingShapeBase> ? InstanceType<T8> : T8) &
        (T9 extends Constructor<ThingShapeBase> ? InstanceType<T9> : T9) &
        (T10 extends Constructor<ThingShapeBase> ? InstanceType<T10> : T10)
    ));

type ThingTemplateInstance<T extends keyof ThingTemplates> = ThingTemplates[T]["__thingTemplateType"];
type ThingShapeInstance<T extends keyof ThingShapes> = ThingShapes[T]["__thingShapeType"];

/**
 * A variant of the `ThingTemplateWithShapes` mixin that uses key names, making it possible to use templates
 * and shapes whose names aren't valid typescript identifiers.
 */
declare function ThingTemplateWithShapesReference<
    T1 extends keyof ThingTemplates, 
    T2 extends keyof ThingShapes,
    T3 extends keyof ThingShapes | {} = {},
    T4 extends keyof ThingShapes | {} = {},
    T5 extends keyof ThingShapes | {} = {},
    T6 extends keyof ThingShapes | {} = {},
    T7 extends keyof ThingShapes | {} = {},
    T8 extends keyof ThingShapes | {} = {},
    T9 extends keyof ThingShapes | {} = {},
    T10 extends keyof ThingShapes | {} = {},
    > (
        mix1: T1,
        mix2: T2,
        mix3?: T3,
        mix4?: T4,
        mix5?: T5,
        mix6?: T6,
        mix7?: T7,
        mix8?: T8,
        mix9?: T9,
        mix10?: T10,
    ): 
    (new (...args: any[]) =>
        (ThingTemplateInstance<T1>) &
        (ThingShapeInstance<T2>) &
        (T3 extends keyof ThingShapes ? ThingShapeInstance<T3> : T3) &
        (T4 extends keyof ThingShapes ? ThingShapeInstance<T4> : T4) &
        (T5 extends keyof ThingShapes ? ThingShapeInstance<T5> : T5) &
        (T6 extends keyof ThingShapes ? ThingShapeInstance<T6> : T6) &
        (T7 extends keyof ThingShapes ? ThingShapeInstance<T7> : T7) &
        (T8 extends keyof ThingShapes ? ThingShapeInstance<T8> : T8) &
        (T9 extends keyof ThingShapes ? ThingShapeInstance<T9> : T9) &
        (T10 extends keyof ThingShapes ? ThingShapeInstance<T10> : T10)
    );

// #endregion