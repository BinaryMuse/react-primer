var React = require("react");

// Create a ReactComponent class with `React.createClass`. Pass the
// class to `React.createFactory` to create a function that, when
// called, creates a `ReactElement` object with that type.
// React uses ReactElements to create a virtual DOM that determines
// how the real DOM should look and behave.
var HelloComponent = React.createClass({
  // Every component needs a `render` function that returns a
  // ReactNode. A ReactNode is either:
  //
  //  * a ReactElement
  //  * a string (aka ReactText)
  //  * a number (aka ReactText)
  //  * an array of ReactNodes (aka ReactFragment)
  //
  // ReactElement factories that produce ReactElements that represent
  // native HTML elements can be found on `React.DOM`.
  render: function() {
    // ReactElement factories take a hash of properties as their
    // first argument and their children as remaining arguments.
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

var HelloElementFactory = React.createFactory(HelloComponent);
// ReactElement factories are just a convenience for creating new
// ReactElements.
//
//     var element = HelloElementFactory(properties, children...)
//
// is the same as
//
//     var element = React.createElement(HelloComponent, properties, children...)

// We can render a component into a DOM node with `React.render`,
// which takes a ReactElement and a DOM node to render into.
React.render(
  // We pass `"Minerva"` as the `name` property, which is
  // used in `HelloComponent`'s `render` function.
  HelloElementFactory({name: "Minerva"}),
  document.getElementById("container")
);
