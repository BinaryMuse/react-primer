webpackJsonp([3],{

/***/ 5:
/*!*************************!*\
  !*** ./demo3/demo3.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	var Timer = React.createClass({displayName: 'Timer',
	  // In addition to properties passed from parents, React
	  // components can also contain an internal state, referenced
	  // by `this.state`. `getInitialState` defines the value of
	  // `this.state` when the component is first mounted.
	  getInitialState:function() {
	    return {
	      time: 0
	    };
	  },
	
	  // React provides lifecycle hooks to set up and tear
	  // down components and third-party APIs if necessary.
	  // Here, we start a timer when the component mounts...
	  componentDidMount:function() {
	    this.timer = setInterval(this.tick, 1000);
	  },
	
	  // ... and remove the timer when the component unmounts.
	  // If we don't do this, we'll leak memory (and the timer
	  // will continue to fire).
	  componentWillUnmount:function() {
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
	  tick:function() {
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
	  render:function() {
	    return React.createElement("div", null, "Time: ", this.state.time);
	  }
	});
	
	React.render(
	  React.createElement(Timer, null),
	  document.getElementById("container")
	);


/***/ },

/***/ 12:
/*!****************************************!*\
  !*** ./~/raw-loader!./demo3/demo3.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React = require(\"react\");\n\nvar Timer = React.createClass({\n  // In addition to properties passed from parents, React\n  // components can also contain an internal state, referenced\n  // by `this.state`. `getInitialState` defines the value of\n  // `this.state` when the component is first mounted.\n  getInitialState() {\n    return {\n      time: 0\n    };\n  },\n\n  // React provides lifecycle hooks to set up and tear\n  // down components and third-party APIs if necessary.\n  // Here, we start a timer when the component mounts...\n  componentDidMount() {\n    this.timer = setInterval(this.tick, 1000);\n  },\n\n  // ... and remove the timer when the component unmounts.\n  // If we don't do this, we'll leak memory (and the timer\n  // will continue to fire).\n  componentWillUnmount() {\n    this.timer && clearInterval(this.timer);\n  },\n\n  // Unlike properties, state is owned by the component, and\n  // can be changed using a few methods. Note that you should\n  // *never* modify `this.state` directly--always use an API\n  // method to mutate the state.\n  //\n  // Our timer calls `setState`, which allows us to update one or\n  // more keys in our state. The object passed to `setState` is\n  // merged with the current state; we can use `replaceState` instead\n  // if we don't want to merge.\n  tick() {\n    // Note that React auto-binds all top-level methods in the\n    // object passed to `createClass` to the component instance.\n    // Because of this, `this` inside the `tick` method is\n    // automatically the component instance, and we didn't have\n    // to use `this.tick.bind(this)` inside the `setInterval` call.\n    this.setState({time: this.state.time + 1});\n  },\n\n  // Render is called automatically when a component's state is\n  // updated with `setState`, `replaceState`, or when `forceUpdate`\n  // is called. Composed components are automatically re-rendered.\n  render() {\n    return <div>Time: {this.state.time}</div>;\n  }\n});\n\nReact.render(\n  <Timer />,\n  document.getElementById(\"container\")\n);\n"

/***/ }

});
//# sourceMappingURL=3.bundle.js.map