var React = require("react");

// Sometimes it's useful have a component that can
// wrap other arbitrary components. React provides
// `this.props.children` for this purpose.
//
// For example, given the following JSX:
//
//   <Component>Inner <strong>text</strong></Component>
//
// Inside `Component`, `this.props.children` provides:
//
//   Inner <strong>text</strong>
//
// In this example, we'll create a component that provides
// a code listing with preformatted text and a label for
// the filename.

var CodeListing = React.createClass({
  propTypes: {
    filename: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      filename: "unnamed file"
    };
  },

  render: function() {
    var filenameStyle = {
      backgroundColor: "black",
      color: "white",
      padding: 5,
      fontFamily: "monospace"
    };

    return (
      <div style={{border: "1px solid black"}}>
        <div style={filenameStyle}>{this.props.filename}</div>
        <pre style={{margin: 5}}>{this.props.children}</pre>
      </div>
    );
  }
});

var Application = React.createClass({
  render: function() {
      var code = [
        'React.render(',
        '  // We pass `"Minerva"` as the `name` property, which is',
        '  // used in `Hello`\'s `render` function.',
        '  Hello({name: "Minerva"}),',
        '  document.getElementById("container")',
        ');'
      ].join("\n");

    // We simply wrap whatever we want to show up in the code listing
    // in a `<CodeListing>` component, and it's provided as
    // `this.props.children` in the `CodeListing` component.
    return (
      <div>
        <p>Here is some code:</p>
        <CodeListing filename="simple.jsx">{code}</CodeListing>
        <p>And some more:</p>
        <CodeListing>CodeListing with no "filename" property</CodeListing>
      </div>
    );
  }
});

React.render(
  <Application />,
  document.getElementById("container")
);
