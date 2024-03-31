/**
 * A plugin used for the D3RangeGraph widget used as an example. This can be placed anywhere, including
 * in node_modules.
 */
class MyCustomUIPlugin {
    transformerDidProcessWidget(transformer, className, element, widget) {
        widget.Properties.DisplayName = "Edited by MyCustomUIPlugin"
    }
}
exports.default = MyCustomUIPlugin;