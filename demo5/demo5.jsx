var React = require("react");

// While composition is the best technique for using components
// together, sometimes it's desirable to have cross-cutting concerns
// that are shared between multiple components. React uses mixins
// to solve this problem.

// A mixin is simply an object that defines certain component
// lifecycle hooks and properties. Here's a mixin we'll use
// to reimplement the Timer demo.
var SetIntervalMixin = {
  // Many lifecycle hooks are automatically merged with the
  // same hook defined in other mixins or the component itself.
  componentWillMount() {
    this.intervals = [];
  },

  // Mixins can also define other methods to make available
  // to the component.
  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  },

  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  }
};

var Timer = React.createClass({
  // Use a mixin by adding it to the `mixins` array for a component.
  mixins: [SetIntervalMixin],

  getInitialState() {
    return {
      time: 0
    };
  },

  // Now we can use the mixin to set the interval without worrying
  // about setting our own `componentWillUnmount` hook.
  componentDidMount() {
    this.setInterval(this.tick, 1000);
  },

  tick() {
    this.setState({time: this.state.time + 1});
  },

  render() {
    return <div>Time: {this.state.time}</div>;
  }
});

React.render(
  <Timer />,
  document.getElementById("container")
);
