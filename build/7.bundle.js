webpackJsonp([7],{

/***/ 9:
/*!*************************!*\
  !*** ./demo7/demo7.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	
	var React = __webpack_require__(/*! react */ 1);
	
	// Sometimes it's useful have a component that can
	// wrap other arbitrary components. React provides
	// `this.props.children` for this purpose.
	//
	// For example, given the following JSX:
	//
	//   <Component>Inner <strong>text</strong></Component>
	//
	// Inside `Component`, `this.props.children` provides:
	//
	//   Inner <strong>text</strong>
	//
	// In this example, we'll create a component that provides
	// a code listing with preformatted text and a label for
	// the filename.
	
	var CodeListing = React.createClass({displayName: 'CodeListing',
	  propTypes: {
	    filename: React.PropTypes.string
	  },
	
	  getDefaultProps: function() {
	    return {
	      filename: "unnamed file"
	    };
	  },
	
	  render: function() {
	    var filenameStyle = {
	      backgroundColor: "black",
	      color: "white",
	      padding: 5,
	      fontFamily: "monospace"
	    };
	
	    return (
	      React.DOM.div({style: {border: "1px solid black"}}, 
	        React.DOM.div({style: filenameStyle}, this.props.filename), 
	        React.DOM.pre({style: {margin: 5}}, this.props.children)
	      )
	    );
	  }
	});
	
	var Application = React.createClass({displayName: 'Application',
	  render: function() {
	      var code = [
	        'React.renderComponent(',
	        '  // We pass `"Minerva"` as the `name` property, which is',
	        '  // used in `Hello`\'s `render` function.',
	        '  Hello({name: "Minerva"}),',
	        '  document.getElementById("container")',
	        ');'
	      ].join("\n");
	
	    // We simply wrap whatever we want to show up in the code listing
	    // in a `<CodeListing>` component, and it's provided as
	    // `this.props.children` in the `CodeListing` component.
	    return (
	      React.DOM.div(null, 
	        React.DOM.p(null, "Here is some code:"), 
	        CodeListing({filename: "simple.jsx"}, code), 
	        React.DOM.p(null, "And some more:"), 
	        CodeListing(null, "CodeListing with no \"filename\" property")
	      )
	    );
	  }
	});
	
	React.renderComponent(
	  Application(null),
	  document.getElementById("container")
	);


/***/ }

});
//# sourceMappingURL=7.bundle.js.map