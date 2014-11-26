webpackJsonp([2],{

/***/ 4:
/*!*************************!*\
  !*** ./demo2/demo2.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	// JSX is an XML-like syntax that simplifies composing React components.
	
	var React = __webpack_require__(/*! react */ 1);
	
	// When using JSX, you don't have to worry about creating
	// ReactElements or factories to generate them. JSX handles
	// all these details for you. This demo is functionally
	// identical to Demo 1.
	var HelloComponent = React.createClass({displayName: 'HelloComponent',
	  // The JSX transpiler also supports (optional) ES6 features,
	  // such as concise method syntax, which we're using here.
	  render:function() {
	    // Children are composed just like child XML/HTML nodes.
	    // `{...}` can be used to interpolate raw JavaScript.
	    return React.createElement("div", null, "Hello ", this.props.name, React.createElement("strong", null, "!"));
	  }
	});
	
	React.render(
	  // Properties look like HTML attributes.
	  React.createElement(HelloComponent, {name: "Minerva"}),
	  document.getElementById("container")
	);
	
	// It's worth noting that JSX assumes all calls with a
	// <lowercaseInitialLetter> refers to an actual HTML element,
	// and all custom components must have an <UppercaseInitialLetter>.


/***/ },

/***/ 11:
/*!****************************************!*\
  !*** ./~/raw-loader!./demo2/demo2.jsx ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "// JSX is an XML-like syntax that simplifies composing React components.\n\nvar React = require(\"react\");\n\n// When using JSX, you don't have to worry about creating\n// ReactElements or factories to generate them. JSX handles\n// all these details for you. This demo is functionally\n// identical to Demo 1.\nvar HelloComponent = React.createClass({\n  // The JSX transpiler also supports (optional) ES6 features,\n  // such as concise method syntax, which we're using here.\n  render() {\n    // Children are composed just like child XML/HTML nodes.\n    // `{...}` can be used to interpolate raw JavaScript.\n    return <div>Hello {this.props.name}<strong>!</strong></div>;\n  }\n});\n\nReact.render(\n  // Properties look like HTML attributes.\n  <HelloComponent name=\"Minerva\" />,\n  document.getElementById(\"container\")\n);\n\n// It's worth noting that JSX assumes all calls with a\n// <lowercaseInitialLetter> refers to an actual HTML element,\n// and all custom components must have an <UppercaseInitialLetter>.\n"

/***/ }

});
//# sourceMappingURL=2.bundle.js.map