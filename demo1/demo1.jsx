import React from "react"
import ReactDOM from "react-dom"

// There are a couple different ways to define React components in modern
// versions of React. To start, we'll look at class components, which were
// supported earliest.
//
// Create a React component class by extending React.Component
class HelloComponent extends React.Component {
  // Every component needs a `render` method that returns some content.
  render() {
    // Most often, you'll want to render HTML to the page. React allows you to
    // do this using React elements, which you can create using
    // `React.createElement()`
    //
    // React.createElement takes three arguments:
    return React.createElement(
      "div", // the first is the type of element
      null, // the second is an object for the properties — more later
      `Hi, ${this.props.name}!` // and the third is the content to place inside it
      // Note that this string uses a value from `this.props`.
      // We'll see where that comes from soon.
    )
  }
}

// We can render a component into a DOM node with `ReactDOM.render`,
// exported from the 'react-dom' package. It takes a React element
// to render and a DOM node to render into as arguments.
ReactDOM.render(
  // Here we'll create another React element, but instead of
  // rendering an HTML element, we'll pass in a reference to the
  // component we created above. We'll pass in an object with
  // `name` set to "GitHub" as the properties; this is what
  // `this.props` refers to in the example above.
  React.createElement(HelloComponent, { name: "GitHub" }),
  document.getElementById("container")
)
