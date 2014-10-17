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
  componentWillMount: function() {
    this.intervals = [];
  },

  // Mixins can also define other methods to make available
  // to the component.
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },

  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

var Timer = React.createClass({
  mixins: [SetIntervalMixin],

  getInitialState: function() {
    return {
      time: 0
    };
  },

  // Now we can use the mixin to set the interval without worrying
  // about setting our own `componentWillUnmount` hook.
  componentDidMount: function() {
    this.setInterval(this.tick, 1000);
  },

  tick: function() {
    this.setState({time: this.state.time + 1});
  },

  render: function() {
    return <div>Time: {this.state.time}</div>;
  }
});

React.render(
  <Timer />,
  document.getElementById("container")
);
