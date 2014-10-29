// JSX is an XML-like syntax that simplifies composing React components.

var React = require("react");

// When using JSX, you don't have to worry about creating
// ReactElements or factories to generate them. JSX handles
// all these details for you. This demo is functionally
// identical to Demo 1.
var HelloComponent = React.createClass({
  // The JSX transpiler also supports (optional) ES6 features,
  // such as concise method syntax, which we're using here.
  render() {
    // Children are composed just like child XML/HTML nodes.
    // `{...}` can be used to interpolate raw JavaScript.
    return <div>Hello {this.props.name}<strong>!</strong></div>;
  }
});

React.render(
  // Properties look like HTML attributes.
  <HelloComponent name="Minerva" />,
  document.getElementById("container")
);

// It's worth noting that JSX assumes all calls with a
// <lowercaseInitialLetter> refers to an actual HTML element,
// and all custom components must have an <UppercaseInitialLetter>.
