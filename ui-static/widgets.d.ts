
declare interface UIInputInterfaceD3RangeGraph<A,B,C> {
    
    /** The width of the widget */
    "Width"?: NUMBER;


    /** The height of the widget */
    "Height"?: NUMBER;


    /** If enabled, the widget will show a legend above the graph. */
    "ShowLegend"?: BOOLEAN;


    /** If enabled, the legend will be aligned to the left. */
    "AlignLegendToLeft"?: BOOLEAN;


    /** The dataset for this chart. */
    "Data"?: BindingTarget<INFOTABLE>;


    /** If enabled, the chart will sort the data */
    "DataAutoSort"?: BOOLEAN;


    /** If enabled, the widget will fill in the content below each line, using a transparent color. */
    "Fill"?: BOOLEAN;


    /** If fills are enabled, this sets how transparent the fill color should be. */
    "FillOpacity"?: NUMBER;


    /** If set, controls how to display each field. Setting this value will cause the Fill, FillOpacity, ShowDataPoints and DataPointSize properties to be ignored. */
    "DisplayConfiguration"?: STRING | BindingTarget<STRING>;


    /** If enabled, the actual data points will be visible as circles on the graph. */
    "ShowDataPoints"?: BOOLEAN;


    /** Must be used with ShowsDataPoints. Controls how large the data points should be. */
    "DataPointSize"?: NUMBER;


    /** The x axis field. */
    "XField"?: FIELDNAME<A>;


    /** A stringified JSON array of the y fields to be displayed on the graph. */
    "YFields"?: STRING | BindingTarget<STRING>;


    /** A stringified JSON array of the y field colors to be displayed on the graph. */
    "YFieldColors"?: STRING | BindingTarget<STRING>;


    /** Optional. A stringified JSON array of the stroke widths to be displayed on the graph. If left blank, the default width of 2 will be used. */
    "StrokeWidths"?: STRING | BindingTarget<STRING>;


    /** Optional. A serialized JSON array string of the human readable strings to use on the legend and flyouts. If left blank, the actual field names will be used instead. */
    "Labels"?: STRING | BindingTarget<STRING>;


    /** A serialized JSON array string of the dash pattern to use on each line. The dash pattern string should be a standard SVG dash pattern. If left blank, no dash pattern will be used. */
    "Patterns"?: STRING | BindingTarget<STRING>;


    /** Requires and enables shared Y axis if used. If enabled, the Y values will be added to each other. */
    "Additive"?: BOOLEAN;


    /** A serialized JSON array string of the threshold lines to draw. Using this property requires and will automatically enable shared Y axis. */
    "Thresholds"?: STRING | BindingTarget<STRING>;


    /** If enabled, the threshold values will be displayed when hovering over the chart. */
    "ShowThresholdsOnHover"?: BOOLEAN;


    /**  */
    "MinYValue"?: NUMBER;


    /**  */
    "MaxYValue"?: NUMBER;


    /**  */
    "SharedYAxis"?: BOOLEAN;


    /** If disabled, the Y axis will not be visible on the main chart. */
    "ShowsYAxis"?: BOOLEAN;


    /** The number of ticks to show on the x axis. */
    "XTicks"?: INTEGER;


    /** The time format to use. If left blank, the chart will use D3's default time format. */
    "TimeFormat"?: STRING;


    /** The serialized locale definition to use for the time axis. If omitted, the default english locale will be used. */
    "TimeFormatLocale"?: STRING | BindingTarget<STRING>;


    /** The number format to use. If left blank, the chart will use the default format with no decimal places. */
    "YFormat"?: STRING;


    /** Optional. If specified, this is the number format to use for the Y axis labels; otherwise, the YFormat will be used instead. */
    "YAxisFormat"?: STRING;


    /** If enabled, when hovering the chart, the timestamp will be displayed as well. */
    "ShowTimeOnHover"?: BOOLEAN;


    /** The number of ticks to show on the y axis. */
    "YTicks"?: INTEGER;


    /** Controls the type of scale used for the y axis. */
    "ScaleType"?: STRING<"linear" | "log" | "pow" | "sqrt">;


    /** Only used with logarithmic or power scales. For logarithmic scales, this is the base of the logarithm and for power scales this is the exponent. This value must be either a number, "e" or "pi". */
    "ScaleFactor"?: STRING;


    /** Must be used with a non-linear scale and linear interpolation. If set to a strictly positive number, the chart will add an additional point every value milliseconds to cause the chart to follow the non-linear scale more closely. This property will have a negative impact on performance with small values and many data points. */
    "NonLinearScaleInterpolationInterval"?: NUMBER;


    /** The height of the range selector. */
    "SelectorHeight"?: INTEGER;


    /** The margin reserved for the y axis text. */
    "RightMargin"?: INTEGER;


    /** The margin reserved for the legend. */
    "TopMargin"?: INTEGER;


    /** The type of seconday chart to use. The secondary chart will appear below the main chart and above the selector and is controlled by the same selector as the main chart. */
    "SecondaryChartType"?: STRING<"none" | "timeline" | "barchart">;


    /** Must be used with a secondary chart type other than none. If enabled, the main chart will not be visible. */
    "SecondaryChartOnly"?: BOOLEAN;


    /** The dataset for the event timeline. */
    "TimelineData"?: BindingTarget<INFOTABLE>;


    /** The x field for the event timeline. */
    "TimelineXField"?: FIELDNAME<B>;


    /** The state field for the event timeline. */
    "TimelineStateField"?: FIELDNAME<B>;


    /** How tall the timeline should be. */
    "TimelineHeight"?: NUMBER;


    /** Controls the spacing between the chart, selector and secondary timeline. */
    "TimelinePadding"?: INTEGER;


    /** If enabled, the X axis will be duplicated at the bottom of the timeline. */
    "TimelineShowsXAxis"?: BOOLEAN;


    /** A serialized JSON object that matches states to the colors they should be drawn with. */
    "TimelineColorMap"?: STRING;


    /** The dataset for the bar chart. */
    "BarChartData"?: BindingTarget<INFOTABLE>;


    /** Required for bar charts; specifies the time interval, in milliseconds that each bar should occupy. */
    "BarChartIntervalSize"?: NUMBER;


    /** The minimum value to use for the bar chart. If set to -1, the chart will use the minimum value within the data set. */
    "BarChartMinYValue"?: NUMBER;


    /** The maximum value to use for the bar chart. If set to -1, the chart will use the maximum value within the data set. */
    "BarChartMaxYValue"?: NUMBER;


    /** How tall the bar chart should be. */
    "BarChartHeight"?: NUMBER;


    /** The x field for the bar chart. */
    "BarChartXField"?: FIELDNAME<C>;


    /** A serialized JSON array containing the y fields for the bar chart. The bar chart Y axis is always shared with all Y fields. */
    "BarChartYFields"?: STRING | BindingTarget<STRING>;


    /** A serialized JSON array containing the bar colors for the bar chart. */
    "BarChartColors"?: STRING | BindingTarget<STRING>;


    /** Must be used with ShowLegend. If enabled, the bar chart labels will also be shown on the legend. */
    "BarChartShowsLegend"?: BOOLEAN;


    /** A serialized JSON array containing the bar labels for the bar chart. */
    "BarChartLabels"?: STRING | BindingTarget<STRING>;


    /** The number of Y ticks to show on the bar chart axis. This number is primarily a suggestion; the actual number of ticks may differ */
    "BarChartNumberOfYTicks"?: INTEGER;


    /** If enabled, the X axis will be duplicated at the bottom of the bar chart. */
    "BarChartShowsXAxis"?: BOOLEAN;


    /** Controls how multiple bars should appear. Together makes them appear one next to another, while stacked makes them appear one over another. */
    "BarChartMultipleValuesDisplay"?: STRING<"together" | "stacked">;


    /** Controls the spacing between the chart, selector and secondary bar chart. */
    "BarChartPadding"?: INTEGER;


    /** The interpolation method to use. */
    "Interpolation"?: STRING<"linear" | "step-before" | "step-after" | "basis" | "basis-open" | "bundle" | "cardinal" | "cardinal-open" | "monotone"> | BindingTarget<STRING<"linear" | "step-before" | "step-after" | "basis" | "basis-open" | "bundle" | "cardinal" | "cardinal-open" | "monotone">>;


    /** Controls how missing values are handled. */
    "MissingValues"?: STRING<"break" | "closest" | "interpolate">;


    /** If enabled, the axes, selector and secondary charts will be hidden. */
    "Minimal"?: BOOLEAN;


    /** Controls the selected range changes when new data arrives. */
    "RangeUpdateType"?: STRING<"retain" | "extend" | "move" | "release">;


    /** The currently selected range start time. If bound, the chart will select the given range start. */
    "RangeStart"?: DATETIME | BindingTarget<DATETIME>;


    /** The currently selected range end time. If bound, the chart will select the given range end. */
    "RangeEnd"?: DATETIME | BindingTarget<DATETIME>;


    /** If enabled, the selector will be disabled and you can instead drag over the chart to zoom in or right click to zoom out. */
    "DragToZoom"?: BOOLEAN;


    /** If enabled, the user can zoom and pan the chart using the mouse wheel and two finger events on macs with trackpads. */
    "EnableTrackGesturesPadAndWheel"?: BOOLEAN;


    /** If enabled, the user can zoom and pan the chart through pinch-zoom and two-finger scroll gestures on touch device. */
    "EnableTouchGestures"?: BOOLEAN;


    /** If disabled, the range selector will be hidden. */
    "ShowsSelector"?: BOOLEAN;


    /** If enabled, when moving the mouse pointer over the graph, the arrow will snap to the closest data point. */
    "SnapsToPoints"?: BOOLEAN;


    /** Enables or disables all animations. */
    "AnimationsEnabled"?: BOOLEAN;


    /** Controls how long update animations should last. This will also affect how long the chart will wait to batch property updates together. */
    "AnimationDuration"?: NUMBER | BindingTarget<NUMBER>;


    /** The style to use for the x axis on both the main chart and the selector. */
    "XAxisStyle"?: STYLEDEFINITION;


    /** The style to use for the y axis on the main chart. If shared Y axis is not enabled, the text color attribute will be ignored. */
    "YAxisStyle"?: STYLEDEFINITION;


    /** If set, the chart will use this style's background color. */
    "BackgroundStyle"?: STYLEDEFINITION;


    /** The file name used when exporting this chart as an image. */
    "ExportFilename"?: STRING;


    /** The display name of the widget */
    "DisplayName"?: STRING;


    /** The description of the widget */
    "Description"?: STRING;


    /** Show a spinner icon when data is being loaded */
    "ShowDataLoading"?: BOOLEAN;


    /** When enabled makes the widget visible in the mashup */
    "Visible"?: BOOLEAN | BindingTarget<BOOLEAN>;


    /** Position of the widget in pixels from the top of the mashup */
    "Top"?: NUMBER;


    /** Position of the widget in pixels from the left of the mashup */
    "Left"?: NUMBER;


    /**  */
    "MinWidth"?: NUMBER;


    /** The z-index of the widget which allows you to put the widget on top or on the bottom of the view stack */
    "Z-index"?: NUMBER;


    /**  */
    "Margin"?: STYLECSSRECTSIZE;


    ref?: UIOutputInterfaceD3RangeGraph<A,B,C>
}

declare class UIOutputInterfaceD3RangeGraph<A,B,C> {
    
    /** The currently selected range start time. If bound, the chart will select the given range start. */
    RangeStart: BindingTarget<DATETIME>;


    /** The currently selected range end time. If bound, the chart will select the given range end. */
    RangeEnd: BindingTarget<DATETIME>;


    /** Downloads a PNG version of this chart as it appears when this service is invoked. */
    Export: ServiceBindingTarget
}

declare function D3RangeGraph<A,B,C>(props: UIInputInterfaceD3RangeGraph<A,B,C>): UIOutputInterfaceD3RangeGraph<A,B,C>

            