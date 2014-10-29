var React = require("react");

var TodoList = React.createClass({
  // `TodoList` takes a prop called `items` which is an array of
  // strings. We can make this requirement "official" using propTypes.
  // If a component doesn't get the properties listed in its
  // propTypes, it will warn you in the console (if using a development
  // build of React).
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  render() {
    // Every component in an array should have a `key` attribute
    // set so React can uniquely identify the item if it needs
    // to remove it from the middle of the array without iterating
    // over every component in the array.
    // Since our todos can't be reordered, we'll just use the index.
    //
    // Also notice the use of another ES6 feature in the call to `map`,
    // arrow functions. The bodies of arrow functions are automatically
    // bound to the value of `this` outside of them, so no more calling
    // `.bind(this)` or `var self = this` juggling.
    return (
      <ul>
      {this.props.items.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
      </ul>
    );
  }
});

var TodoForm = React.createClass({
  // React has PropTypes for most built-in JS types, as well as the
  // ability to define your own validation functions.
  //
  // `TodoForm` requires an `onSubmit` property that we'll use to notify
  // our parent component that the form has been submitted; this makes
  // the component more reusable, since the logic for what to do with
  // the submitted form isn't hardcoded into the `TodoForm` component.
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired
  },

  // `TodoForm` contains a text input with a `value` attribute, which
  // makes the input a "controlled" input. This means that the input
  // will *always* display whatever is passed to its `value` no matter
  // what the user tries to type in the box. The `text` property of
  // our state is the current string to display in the box.
  getInitialState() {
    return {
      text: ""
    };
  },

  // The text input has an `onChange` property, which calls a function
  // any time the user interacts with the box. Here, we update our
  // state so the text in the box updates.
  //
  // This is necessary because React components' `render` functions should
  // *always* describe how the component should look at *any* point and time;
  // if we didn't use a controlled input, the text might reset in certain
  // re-rendering situations.
  onTextChange(e) {
    this.setState({text: e.target.value});
  },

  // The form also has a handler for `onSubmit`...
  onSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim()) {
      // ... which we'll use to indicate to our parent that an
      // item has been submitted...
      this.props.onSubmit(this.state.text);
      // ... and then clear the text box.
      this.setState({text: ""});
    }
  },

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.text} onChange={this.onTextChange} />
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
});

// Our `Todos` component is the full application, which very simply composes
// the `TodoList` and `TodoForm` components.
var Todos = React.createClass({
  getInitialState() {
    // It owns the actual items array, so the composed `TodoList`
    // and `TodoForm` can be reused in many contexts (that is, they
    // are not application specific).
    return {
      items: []
    };
  },

  // `onSubmitTodo` is the function we pass to `TodoForm`'s
  // `onSubmit` property; so, it will be called when `TodoForm`
  // calls `this.props.onSubmit(...)`.
  onSubmitTodo(newTodo) {
    var nextItems = this.state.items.concat([newTodo]);
    this.setState({items: nextItems});
  },

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <TodoForm onSubmit={this.onSubmitTodo} />
      </div>
    );
  }
});

React.render(
  <Todos />,
  document.getElementById("container")
);
