// Mashup files need an additional import for UI definitions.
import "bm-thing-transformer/ui"
// A second import may be used for any non-standard widgets to be used.
// These are imported from a Thingworx server via the "install-widgets" command.
import "../ui-static/widgets"

/**
 * All services that are referenced by the mashup must be declared in advance as global constants.
 * Their value must be the result of invoking `defineService`, passing in the service to use as the argument.
 */
const QueryImplementingThings = defineService(ThingTemplates.GenericThing.QueryImplementingThings);

/**
 * Dynamic services can be defined with a different `defineDynamicService` function. Specifically for thing templates
 * and thing shapes, their dynamic services can be obtained through a `dyanmicEntity` service
 */
const ExampleProperty = defineDynamicService(dynamicEntity(ThingTemplates.ExampleThingTemplate).GetExampleProperty);

/**
 * All widgets that act as binding sources for service inputs or other widget properties must also
 * be declared in advance as global constants. Their value must be the result of invoking `defineWidget`, passing
 * in the name of the widget to use as the argument.
 */
const MaxItemsInput = defineWidget(Numericentry);

/**
 * For navigations that need to output data, specify the mashup name as a generic argument to have access to its parameters.
 * Same for contained mashup and similar widgets.
 */
const Reload = defineWidget<'MyMashup'>(Navigation);

/** 
 * Mashup parameters, if needed, are similarly defined as global constants, this time using the `defineMashup`
 * function. This takes a class definition as an argument, similar to configuration tables, that describes
 * the parameters defined on this mashup. All parameters are always both binding sources and targets.
 */
const MashupParameters = defineMashup(class {
    thingName!: STRING;
    selectedThing!: INFOTABLE<GenericStringList>;
});

/**
 * The mashup content itself is defined in a class that extends from `MashupBase` and
 * contains a single method `renderMashup` that returns the mashup structure.
 */
export class MyMashup extends MashupBase {

    renderMashup() {
        return <Mashup
            // The parameters are associated to the mashup via the ref property
            ref={MashupParameters}
            // Events can be used by specifying an array of services or widget services that they invoke
            Loaded={[QueryImplementingThings, MaxItemsInput.ResetToDefaultValue]}
            // Custom CSS can be specified for the mashup via the CustomCSS property
            // This isn't written inline, but takes a path to a CSS file that contains the actual styles
            CustomCSS="./MyMashupStyles.css"
            thingName={QueryImplementingThings.AllData.name}
            // Bindings to specific fields in an infotable mashup parameter use the infotable parameter
            // name as a namespace before the field name
            selectedThing:item={QueryImplementingThings.SelectedRows.name}
        >
            {/*
                Services must always be specified as children of the Mashup element; this is where parameters are bound or specified.
                They must be associated with their output sources via the "ref" property.
            */}
            <Service
                ref={QueryImplementingThings}
                // Note that any JSON values you specify must be written as a JSON string
                query={{"filters": {"type": "LIKE", "fieldName": "name", "value": "%i%"}}} 
                maxItems={MaxItemsInput.Value}
                SelectedRowsChanged={[ExampleProperty]}
            />
            {/* All JSX expressions, such as this one, cause a compilation error if they contain more than comments. */}
            <Service ref={ExampleProperty} EntityName={QueryImplementingThings.SelectedRows.name} />

            {/* 
                Widgets are specified as a tree structure under the mashup. Unlike typical thingworx mashups you are not actually required 
                to use a flex container as the root widget. For simpler mashups (e.g. to use in a collection view cell) it can be any other
                widget, like a chart.
            */}
            <Flexcontainer flex-direction="column">
                <Flexcontainer
                    flex-min-height="72px"
                    flex-max-height="72px"
                    flex-size="fixed"
                    align-items="center"
                    justify-content="space-between"
                    CustomClass="app-header"
                >
                    <Ptcslabel LabelType="large-header" LabelText="My Typescript Mashup" CustomClass="MyLabel" />
                    <Navigation MashupName="MyMashup" TargetWindow="replace" ref={Reload} Visible={false} />
                    <Ptcsbutton ButtonType="secondary" Label="Reload" Clicked={[Reload.Navigate]} />
                    <Ptcsbutton ButtonType="primary" Label="Refresh" Clicked={[QueryImplementingThings]} />
                </Flexcontainer>
                <Flexcontainer
                    // Some widgets can create dynamic properties depending on various conditions which
                    // can't be properly expressed in a static type system. For these properties, type checking
                    // can be opted out by prefixing the property name with the Dynamic namespace. These
                    // can take any value or be the target of any binding and can have any name
                    Dynamic:DynamicProperty={10}
                >
                    <Flexcontainer flex-direction="column" align-items="stretch">
                        {/*
                            A widget output source that was previously defined must be associated with a widget instance via the "ref" property,
                            similar to how services are associated to their output sources.
                        */}
                        <Numericentry
                            ref={MaxItemsInput}
                            Value={ExampleProperty.AllData.result}
                            Maximum={10}
                            Label="Items to return"
                            Changed={[QueryImplementingThings]}
                        />
                        <Ptcsgrid
                            // Because of how awkward it is to type large JSON content into mashup properties, they can also be defined
                            // in separate files and loaded using the "importJSON" function.
                            Configuration={importJSON("./MyMashupGridConfiguration.json")}
                            Data={QueryImplementingThings.AllData}
                            ColumnsMenuOptions="both"
                            ShowColumnFeature
                            RowSelection="single"
                            IsEditable={false}
                        />
                        <D3RangeGraph
                            // Non-standard widgets can be used by importing their types and defaults
                            // via the "twc install-widgets <file>" command. The file is obtained by downloading
                            // from a thingworx composer instance using the widget exporter extension
                            Data={QueryImplementingThings.AllData}
                        />
                    </Flexcontainer>
                    <Flexcontainer flex-size="fixed" flex-min-width="256px" flex-max-width="256px" CustomClass="app-details" flex-direction="column">
                        <Ptcslabel LabelText={QueryImplementingThings.SelectedRows.name} LabelType="header" />
                    </Flexcontainer>
                </Flexcontainer>
            </Flexcontainer>
        </Mashup>;
    }
};