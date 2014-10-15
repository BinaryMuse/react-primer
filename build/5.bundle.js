webpackJsonp([5],{

/***/ 7:
/*!*************************!*\
  !*** ./demo5/demo5.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	
	var React = __webpack_require__(/*! react */ 1);
	
	// While composition is the best technique for using components
	// together, sometimes it's desirable to have cross-cutting concerns
	// that are shared between multiple components. React uses mixins
	// to solve this problem.
	
	// A mixin is simply an object that defines certain component
	// lifecycle hooks and properties.
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
	
	var Timer = React.createClass({displayName: 'Timer',
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
	    return React.DOM.div(null, "Time: ", this.state.time);
	  }
	});
	
	React.renderComponent(
	  Timer(null),
	  document.getElementById("container")
	);


/***/ }

});
//# sourceMappingURL=5.bundle.js.map