// JSX is an XML-like syntax that simplifies composing React components.

var React = require("react");

// When using JSX to render React components, there is no need
// to call `React.createFactory` to create a factory--JSX will
// take care of the details for you.
var Hello = React.createClass({
  render: function() {
    // Children are composed just like child XML/HTML nodes.
    // `{...}` can be used to interpolate raw JavaScript.
    return <div>Hello {this.props.name}<strong>!</strong></div>;
  }
});

React.render(
  // Properties look like HTML attributes.
  <Hello name="Minerva" />,
  document.getElementById("container")
);
