webpackJsonp([3],{

/***/ 5:
/*!*************************!*\
  !*** ./demo3/demo3.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	
	var React = __webpack_require__(/*! react */ 1);
	
	var Timer = React.createClass({displayName: 'Timer',
	  // In addition to properties passed from parents, React
	  // components can also contain an internal state, referenced
	  // by `this.state`. `getInitialState` defines `this.state`
	  // when the component is first mounted.
	  getInitialState: function() {
	    return {
	      time: 0
	    };
	  },
	
	  // React provides lifecycle hooks to set up and tear
	  // down components and third-party APIs if necessary.
	  // Here, we start a timer when the component mounts...
	  componentDidMount: function() {
	    this.timer = setInterval(this.tick, 1000);
	  },
	
	  // ... and remove the timer when the component unmounts.
	  // If we don't do this, we'll leak memory.
	  componentWillUnmount: function() {
	    this.timer && clearInterval(this.timer);
	  },
	
	  // The timer calls `setState`, which allows us to update
	  // our state. The object passed to `setState` is merged
	  // with the current state; we can use `replaceState` instead
	  // if we don't want to merge.
	  tick: function() {
	    this.setState({time: this.state.time + 1});
	  },
	
	  // Render is called automatically when a component's state is
	  // updated with `setState`, `replaceState`, or when `forceUpdate`
	  // is called. Composed components are automatically re-rendered.
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
//# sourceMappingURL=3.bundle.js.map