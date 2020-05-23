// JSX is an XML-like syntax that simplifies composing React components.

import React from "react"
import ReactDOM from "react-dom"

// When using JSX, you don't have to worry about creating elemnts with
// React.createElement. JSX handles all these details for you.
//
// This demo is functionally identical to Demo 1.
class HelloComponent extends React.Component {
  render() {
    // Children are composed just like child XML/HTML nodes.
    // `{...}` can be used to interpolate raw JavaScript.
    return (
      <div>
        Hello {this.props.name}
        <strong>!</strong>
      </div>
    )
  }
}

ReactDOM.render(
  // Properties look like HTML attributes in JSX.
  <HelloComponent name="GitHub" />,
  document.getElementById("container")
)

// It's worth noting that JSX assumes all calls with a <lowercaseInitialLetter>
// refers to an actual HTML element, and all custom components must have an
// <UppercaseInitialLetter>.
