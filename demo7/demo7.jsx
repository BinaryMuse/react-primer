var React = require("react");

// Sometimes it's useful have a component that can
// wrap other arbitrary ReactElements. React provides
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

  getDefaultProps() {
    return {
      filename: "unnamed file"
    };
  },

  render() {
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
  render() {
      var code = [
        'React.render(',
        '  // We pass `"Minerva"` as the `name` property, which is',
        '  // used in `HelloComponent`\'s `render` function.',
        '  HelloElementFactory({name: "Minerva"}),',
        '  document.getElementById("container")',
        ');'
      ].join("\n");

    // We simply wrap whatever we want to show up in the code listing
    // in a `<CodeListing>` element, and it's provided as
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
