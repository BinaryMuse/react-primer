webpackJsonp([2],{

/***/ 3:
/*!*************************!*\
  !*** ./demo2/demo2.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	
	// JSX is an XML-like syntax that simplifies composing React
	// components. The @jsx pragma is required at the top of the
	// file to tell React where the default HTML components live.
	
	var React = __webpack_require__(/*! react */ 1);
	
	var Hello = React.createClass({displayName: 'Hello',
	  render: function() {
	    // Children are composed just like child XML/HTML nodes.
	    // `{...}` can be used to interpolate raw JavaScript.
	    return React.DOM.div(null, "Hello ", this.props.name, React.DOM.strong(null, "!"));
	  }
	});
	
	React.renderComponent(
	  // Properties look like HTML attributes.
	  Hello({name: "Minerva"}),
	  document.getElementById("container")
	);
	
	// JSX compiles directly to JavaScript functions.
	// That is to say,
	//
	//   <Component prop={this.props.name}>
	//     <strong>Hello</strong>
	//   </Component>
	//
	// is exactly the same as
	//
	//   Component({prop: this.props.name},
	//     React.DOM.strong(null, "Hello")
	//   )


/***/ }

});
//# sourceMappingURL=2.bundle.js.map