/** @jsx React.DOM */

// JSX is an XML-like syntax that simplifies composing React
// components. The @jsx pragma is required at the top of the
// file to tell React where the default HTML components live.

var React = require("react");

var Hello = React.createClass({
  render: function() {
    // Children are composed just like child XML/HTML nodes.
    // `{...}` can be used to interpolate raw JavaScript.
    return <div>Hello {this.props.name}<strong>!</strong></div>;
  }
});

React.renderComponent(
  // Properties look like HTML attributes.
  <Hello name="Minerva" />,
  document.getElementById("container")
);

// JSX compiles directly to JavaScript functions.
// That is to say,
//
//   <Component prop={this.props.name}>
//     <strong>Hello</strong>
//   </Component>
//
// is exactly the same as
//
//   Component({prop: this.props.name},
//     React.DOM.strong(null, "Hello")
//   )
