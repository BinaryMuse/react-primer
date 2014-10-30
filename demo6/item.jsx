var React = require("react");

var Item = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func,
    onRemove: React.PropTypes.func,
    id: React.PropTypes.number.isRequired,
    color: React.PropTypes.string.isRequired,
    width: React.PropTypes.number.isRequired
  },

  // If any properties are not required, you can specify
  // default properties for them with `getDefaultProps`.
  // Note this function is only evaluated once when the ReactComponent class
  // is defined (and is cached for future instances of that same component).
  getDefaultProps() {
    return {
      onChange: function() {},
      onRemove: function() {}
    };
  },

  // React provides a `shouldComponentUpdate` hook that allows
  // you to return `false` if you know for sure your component
  // (and its children) will not need to be updated. You can use
  // the current and incoming state and props to make this decision.
  // For example, to only re-render if the props or state have changed
  // (based on a shallow check), you could use:
  //
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return !shallowEqual(this.props, nextProps) ||
  //            !shallowEqual(this.state, nextState);
  //   },
  //
  // If a component doesn't re-render due to `shouldComponentUpdate`
  // returning false, none of its children will re-render either.

  // `PureRenderMixin` is an implementation of the `shallowEqual`
  // example above. Comment this line out to see how much slower
  // editing items in the UI is with a large number of items;
  // that's because React is calling `render` on every `Item`
  // component to figure out if it needs to update; it's much
  // faster to use `shouldComponentUpdate` (or this mixin).
  mixins: [React.addons.PureRenderMixin],

  // All changes to the item are delegated to the parent via properties.
  handleColorChange(e) {
    this.props.onChange(this.props.id, e.target.value, this.props.width);
  },

  handleWidthChange(e) {
    var width = ~~e.target.value;
    this.props.onChange(this.props.id, this.props.color, width);
  },

  handleRemoveClick() {
    this.props.onRemove(this.props.id);
  },

  render() {
    // The special `style` property on React.DOM-based ReactElements
    // allows you to specify styles as a hash. Another common property
    // is `className`, which allows you to specify a string to use
    // for the element's `class` attribute.
    var style = {
      background: this.props.color,
      width: this.props.width
    };

    // Notice all inputs are controlled inputs; that is to say,
    // their value is "locked in" to whatever `this.props.color`
    // or `this.props.width` is. It's only because the
    // `onChange` handlers delegate to functions that cause a
    // re-render with different properties that the inputs
    // are actually editable.
    return (
      <div style={style} className="item">
        <div>
          <input type="text" value={this.props.color}
                 onChange={this.handleColorChange} />
        </div>
        <div>
          <input type="range" min={200} max={1000}
                 value={this.props.width}
                 onChange={this.handleWidthChange} />
        </div>
        <div>{this.props.width}</div>
        <div>
          <button onClick={this.handleRemoveClick}>Remove</button>
        </div>
      </div>
    );
  }
});

module.exports = Item;
