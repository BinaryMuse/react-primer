webpackJsonp([1],{

/***/ 3:
/*!*************************!*\
  !*** ./demo1/demo1.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	
	// Create a ReactComponent class with `React.createClass`. Pass the
	// class to `React.createFactory` to create a function that, when
	// called, creates a `ReactElement` object with that type.
	// React uses ReactElements to create a virtual DOM that determines
	// how the realm DOM should look and behave.
	var HelloComponent = React.createClass({displayName: 'HelloComponent',
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


/***/ },

/***/ 10:
/*!****************************************!*\
  !*** ./~/raw-loader!./demo1/demo1.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "var React = require(\"react\");\n\n// Create a ReactComponent class with `React.createClass`. Pass the\n// class to `React.createFactory` to create a function that, when\n// called, creates a `ReactElement` object with that type.\n// React uses ReactElements to create a virtual DOM that determines\n// how the realm DOM should look and behave.\nvar HelloComponent = React.createClass({\n  // Every component needs a `render` function that returns a\n  // ReactNode. A ReactNode is either:\n  //\n  //  * a ReactElement\n  //  * a string (aka ReactText)\n  //  * a number (aka ReactText)\n  //  * an array of ReactNodes (aka ReactFragment)\n  //\n  // ReactElement factories that produce ReactElements that represent\n  // native HTML elements can be found on `React.DOM`.\n  render: function() {\n    // ReactElement factories take a hash of properties as their\n    // first argument and their children as remaining arguments.\n    // Here, we utilize `this.props`, which is an object\n    // containing the properties passed to this component.\n    //\n    // Properties should be treated as immutable--you should\n    // not try to change them from inside a component; they\n    // belong to whoever passed them to you!\n    return React.DOM.div(null, \"Hello \", this.props.name,\n      React.DOM.strong(null, \"!\")\n    );\n  }\n});\n\nvar HelloElementFactory = React.createFactory(HelloComponent);\n// ReactElement factories are just a convenience for creating new\n// ReactElements.\n//\n//     var element = HelloElementFactory(properties, children...)\n//\n// is the same as\n//\n//     var element = React.createElement(HelloComponent, properties, children...)\n\n// We can render a component into a DOM node with `React.render`,\n// which takes a ReactElement and a DOM node to render into.\nReact.render(\n  // We pass `\"Minerva\"` as the `name` property, which is\n  // used in `HelloComponent`'s `render` function.\n  HelloElementFactory({name: \"Minerva\"}),\n  document.getElementById(\"container\")\n);\n"

/***/ }

});
//# sourceMappingURL=1.bundle.js.map