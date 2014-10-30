webpackJsonp([0],[
/* 0 */
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	React.initializeTouchEvents(true);
	
	var DemoSourceLink = React.createClass({displayName: 'DemoSourceLink',
	  render: function() {
	    var hrefRoot = "https://github.com/BinaryMuse/react-primer",
	        href = hrefRoot + "/tree/gh-pages/demo" +
	               this.props.demo + "/demo" + this.props.demo + ".jsx";
	
	    return React.createElement("a", React.__spread({},  this.props, {href: href}), this.props.children);
	  }
	});
	
	var LinkComponent = React.createClass({displayName: 'LinkComponent',
	  render: function() {
	    if (this.props.demo) {
	      var hrefRoot = "https://github.com/BinaryMuse/react-primer",
	          href = hrefRoot + "/tree/gh-pages/demo" +
	                 this.props.demo + "/demo" + this.props.demo + ".jsx";
	      return (
	        React.createElement("p", null, "Annotated source code for this demo is available" + ' ' +
	        "as ", React.createElement(DemoSourceLink, {demo: this.props.demo}, React.createElement("code", null, "demo", this.props.demo, ".jsx")), " in" + ' ' +
	        "the ", React.createElement("code", null, "demo", this.props.demo), " directory of" + ' ' +
	        "the project repository.", React.createElement("br", null), 
	        React.createElement("a", {href: "index.html"}, "Back to demo list"))
	      );
	    } else {
	      return (
	        React.createElement("p", null, "Source code for each demo is available from the root of" + ' ' +
	        "the ", React.createElement("a", {href: "https://github.com/BinaryMuse/react-primer"}, "project repository"), ".")
	      );
	    }
	  }
	});
	
	var demo = ~~window.location.search.replace(/\?/, "");
	
	// webpack must be able to statically analyze these,
	// so we can't generate them programmatically
	switch (demo) {
	  case 1:
	    __webpack_require__.e/*nsure*/(1, function() {
	      __webpack_require__(/*! ./demo1/demo1.jsx */ 3);
	      showDemoLink(demo);
	    });
	    break;
	  case 2:
	    __webpack_require__.e/*nsure*/(2, function() {
	      __webpack_require__(/*! ./demo2/demo2.jsx */ 4);
	      showDemoLink(demo);
	    });
	    break;
	  case 3:
	    __webpack_require__.e/*nsure*/(3, function() {
	      __webpack_require__(/*! ./demo3/demo3.jsx */ 5);
	      showDemoLink(demo);
	    });
	    break;
	  case 4:
	    __webpack_require__.e/*nsure*/(4, function() {
	      __webpack_require__(/*! ./demo4/demo4.jsx */ 6);
	      showDemoLink(demo);
	    });
	    break;
	  case 5:
	    __webpack_require__.e/*nsure*/(5, function() {
	      __webpack_require__(/*! ./demo5/demo5.jsx */ 7);
	      showDemoLink(demo);
	    });
	    break;
	  case 6:
	    __webpack_require__.e/*nsure*/(6, function() {
	      __webpack_require__(/*! ./demo6/demo6.jsx */ 8);
	      showDemoLink(demo);
	    });
	    break;
	  case 7:
	    __webpack_require__.e/*nsure*/(7, function() {
	      __webpack_require__(/*! ./demo7/demo7.jsx */ 9);
	      showDemoLink(demo);
	    });
	    break;
	  default:
	    loadIndex();
	}
	
	function showDemoLink(num) {
	  React.render(React.createElement(LinkComponent, {demo: num}),
	               document.getElementById("source-link"));
	}
	
	function loadIndex() {
	  var App = React.createClass({displayName: 'App',
	    render: function() {
	      var demos = [
	        "Components & Properties",
	        "JSX",
	        "State",
	        "Composition, PropTypes, & Event Handlers",
	        "Mixins",
	        "Top-Down Data Flow & shouldComponentUpdate",
	        "Wrapping Children with this.props.children"
	      ];
	      return (
	        React.createElement("ul", null, 
	        demos.map(function(name, idx) {
	          var num = idx + 1;
	          return (
	            React.createElement("li", {key: num}, 
	              React.createElement("a", {href: "index.html?" + num}, "Demo ", num, ": ", name), " -", 
	              " ", React.createElement(DemoSourceLink, {demo: num}, "Source")
	            )
	          );
	        })
	        )
	      )
	    }
	  });
	
	  React.render(React.createElement(App, null), document.getElementById("container"));
	  React.render(React.createElement(LinkComponent, null), document.getElementById("source-link"));
	}


/***/ }
]);
//# sourceMappingURL=bundle.js.map