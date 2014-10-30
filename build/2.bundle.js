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


/***/ }

});
//# sourceMappingURL=2.bundle.js.map