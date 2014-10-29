var React = require("react");

var Timer = React.createClass({
  // In addition to properties passed from parents, React
  // components can also contain an internal state, referenced
  // by `this.state`. `getInitialState` defines the value of
  // `this.state` when the component is first mounted.
  getInitialState() {
    return {
      time: 0
    };
  },

  // React provides lifecycle hooks to set up and tear
  // down components and third-party APIs if necessary.
  // Here, we start a timer when the component mounts...
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  },

  // ... and remove the timer when the component unmounts.
  // If we don't do this, we'll leak memory (and the timer
  // will continue to fire).
  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  },

  // Unlike properties, state is owned by the component, and
  // can be changed using a few methods. Note that you should
  // *never* modify `this.state` directly--always use an API
  // method to mutate the state.
  //
  // Our timer calls `setState`, which allows us to update one or
  // more keys in our state. The object passed to `setState` is
  // merged with the current state; we can use `replaceState` instead
  // if we don't want to merge.
  tick() {
    // Note that React auto-binds all top-level methods in the
    // object passed to `createClass` to the component instance.
    // Because of this, `this` inside the `tick` method is
    // automatically the component instance, and we didn't have
    // to use `this.tick.bind(this)` inside the `setInterval` call.
    this.setState({time: this.state.time + 1});
  },

  // Render is called automatically when a component's state is
  // updated with `setState`, `replaceState`, or when `forceUpdate`
  // is called. Composed components are automatically re-rendered.
  render() {
    return <div>Time: {this.state.time}</div>;
  }
});

React.render(
  <Timer />,
  document.getElementById("container")
);
