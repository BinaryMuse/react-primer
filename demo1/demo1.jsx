var React = require("react");

// Create a React component with `React.createClass`.
var Hello = React.createClass({
  // Every component needs a `render` function that returns one
  // concrete (HTML) or composite (custom) component. Components
  // representing HTML exist in the `React.DOM` object.
  render: function() {
    // React components take a hash of properties as their first
    // argument and their children as remaining arguments.
    // Here, we utilize `this.props`, which is an object
    // containing the properties passed to this component.
    //
    // Properties should be treated as immutable--you should
    // not try to change them from inside a component; they
    // belong to whoever passed them to you!
    return React.DOM.div(null, "Hello ", this.props.name,
      React.DOM.strong(null, "!")
    );
  }
});

// We can render a component into a DOM node with
// `React.renderComponent`, which takes a component
// and a DOM node to render into.
React.renderComponent(
  // We pass `"Minerva"` as the `name` property, which is
  // used in `Hello`'s `render` function.
  Hello({name: "Minerva"}),
  document.getElementById("container")
);
