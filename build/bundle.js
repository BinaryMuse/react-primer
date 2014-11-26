webpackJsonp([0],{

/***/ 0:
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1),
	    ReactPrism = __webpack_require__(/*! react-prism */ 30).PrismCode;
	
	React.initializeTouchEvents(true);
	
	var DEMOS = [
	  "Components & Properties",
	  "JSX",
	  "State",
	  "Composition, PropTypes, & Event Handlers",
	  "Mixins",
	  "Top-Down Data Flow & shouldComponentUpdate",
	  "Wrapping Children with this.props.children"
	];
	
	var DemoSourceLink = React.createClass({displayName: 'DemoSourceLink',
	  render:function() {
	    var hrefRoot = "https://github.com/BinaryMuse/react-primer",
	        href = hrefRoot + "/tree/gh-pages/demo" +
	               this.props.demo + "/demo" + this.props.demo + ".jsx";
	
	    return React.createElement("a", React.__spread({},  this.props, {href: href}), this.props.children);
	  }
	});
	
	var LinkComponent = React.createClass({displayName: 'LinkComponent',
	  render:function() {
	    if (this.props.demo) {
	      var hrefRoot = "https://github.com/BinaryMuse/react-primer",
	          href = hrefRoot + "/tree/gh-pages/demo" +
	                 this.props.demo + "/demo" + this.props.demo + ".jsx";
	      return (
	        React.createElement("p", null, 
	        React.createElement("a", {href: "index.html"}, "Back to demo list"), 
	        "  ·  ", 
	        React.createElement(DemoSourceLink, {demo: this.props.demo}, "View on GitHub")
	        )
	      );
	    } else {
	      return (
	        React.createElement("p", null, "Source code for each demo is available from the root of" + ' ' +
	        "the ", React.createElement("a", {href: "https://github.com/BinaryMuse/react-primer"}, "project repository"), " and" + ' ' +
	        "at the bottom of each demo page.")
	      );
	    }
	  }
	});
	
	var SourceCode = React.createClass({displayName: 'SourceCode',
	  propTypes: {
	    files: React.PropTypes.arrayOf(
	      React.PropTypes.shape({
	        name: React.PropTypes.string.isRequired,
	        code: React.PropTypes.string.isRequired
	      }).isRequired
	    )
	  },
	
	  getInitialState:function() {
	    return {
	      selectedIndex: 0
	    };
	  },
	
	  render:function() {
	    var olStyle = {
	      listStyle: "none",
	      paddingLeft: 0,
	      marginTop: 0
	    };
	
	    return (
	      React.createElement("div", null, 
	        React.createElement("h2", null, "Demo Source"), 
	        React.createElement("ol", {style: olStyle}, this.props.files.map(this.renderSelector)), 
	        React.createElement("div", null, this.props.files.map(this.renderFile))
	      )
	    );
	  },
	
	  renderSelector:function(file, idx) {
	    var liStyle = {
	      float: "left",
	      padding: 10,
	      cursor: "pointer",
	      color: this.state.selectedIndex === idx ? "black" : "#999"
	    };
	
	    return (
	      React.createElement("li", {key: file.name, style: liStyle, onClick: this.handleSelectorClick.bind(null, idx)}, 
	        file.name
	      )
	    );
	  },
	
	  renderFile:function(file, idx) {
	    var style = {
	      display: this.state.selectedIndex === idx ? "block" : "none",
	      clear: "both"
	    };
	
	    return (
	      React.createElement("pre", {key: file.name, className: "line-numbers", style: style}, 
	        React.createElement(ReactPrism, {className: "language-javascript"}, file.code)
	      )
	    )
	  },
	
	  handleSelectorClick:function(idx) {
	    this.setState({
	      selectedIndex: idx
	    });
	  }
	});
	
	var demo = ~~window.location.search.replace(/\?/, "");
	
	// webpack must be able to statically analyze these,
	// so we can't generate them programmatically
	switch (demo) {
	  case 1:
	    __webpack_require__.e/*nsure*/(1, function()  {
	      __webpack_require__(/*! ./demo1/demo1.jsx */ 3);
	      showDemoLink(demo, [{ name: "demo1.jsx", code: __webpack_require__(/*! !raw!./demo1/demo1.jsx */ 10)}]);
	    });
	    break;
	  case 2:
	    __webpack_require__.e/*nsure*/(2, function()  {
	      __webpack_require__(/*! ./demo2/demo2.jsx */ 4);
	      showDemoLink(demo, [{name: 'demo2.jsx', code: __webpack_require__(/*! !raw!./demo2/demo2.jsx */ 11)}]);
	    });
	    break;
	  case 3:
	    __webpack_require__.e/*nsure*/(3, function()  {
	      __webpack_require__(/*! ./demo3/demo3.jsx */ 5);
	      showDemoLink(demo, [{name: 'demo3.jsx', code: __webpack_require__(/*! !raw!./demo3/demo3.jsx */ 12)}]);
	    });
	    break;
	  case 4:
	    __webpack_require__.e/*nsure*/(4, function()  {
	      __webpack_require__(/*! ./demo4/demo4.jsx */ 6);
	      showDemoLink(demo, [{name: 'demo4.jsx', code: __webpack_require__(/*! !raw!./demo4/demo4.jsx */ 13)}]);
	    });
	    break;
	  case 5:
	    __webpack_require__.e/*nsure*/(5, function()  {
	      __webpack_require__(/*! ./demo5/demo5.jsx */ 7);
	      showDemoLink(demo, [{name: 'demo5.jsx', code: __webpack_require__(/*! !raw!./demo5/demo5.jsx */ 14)}]);
	    });
	    break;
	  case 6:
	    __webpack_require__.e/*nsure*/(6, function()  {
	      __webpack_require__(/*! ./demo6/demo6.jsx */ 8);
	      var code = [
	        { name: "demo6.jsx", code: __webpack_require__(/*! !raw!./demo6/demo6.jsx */ 15) },
	        { name: "store.jsx", code: __webpack_require__(/*! !raw!./demo6/store.jsx */ 16) },
	        { name: "item.jsx", code: __webpack_require__(/*! !raw!./demo6/item.jsx */ 17) }
	      ];
	      showDemoLink(demo, code);
	    });
	    break;
	  case 7:
	    __webpack_require__.e/*nsure*/(7, function()  {
	      __webpack_require__(/*! ./demo7/demo7.jsx */ 9);
	      showDemoLink(demo, [{name: 'demo7.jsx', code: __webpack_require__(/*! !raw!./demo7/demo7.jsx */ 18)}]);
	    });
	    break;
	  default:
	    loadIndex();
	}
	
	function showDemoLink(num, files) {
	  React.render(React.createElement("h1", null, ("Demo " + num + ": " + DEMOS[num - 1])),
	               document.getElementById("demo-title"));
	  React.render(React.createElement(LinkComponent, {demo: num}),
	               document.getElementById("source-link"));
	
	  if (files && files.length) {
	    React.render(React.createElement(SourceCode, {files: files}),
	                 document.getElementById("source-files"));
	  }
	}
	
	function loadIndex() {
	  var App = React.createClass({displayName: 'App',
	    render: function() {
	      return (
	        React.createElement("ul", null, 
	        DEMOS.map(function(name, idx)  {
	          var num = idx + 1;
	          return (
	            React.createElement("li", {key: num}, 
	              React.createElement("a", {href: "index.html?" + num}, "Demo ", num, ": ", name)
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


/***/ },

/***/ 30:
/*!************************************!*\
  !*** ./~/react-prism/lib/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	exports.PrismCode = __webpack_require__(/*! ./PrismCode */ 79);


/***/ },

/***/ 79:
/*!****************************************!*\
  !*** ./~/react-prism/lib/PrismCode.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(/*! react/addons */ 1),
	    $__0=  React.addons,update=$__0.update;
	
	module.exports = React.createClass({
	  displayName: "PrismCode",
	
	  mixins: [React.addons.PureRenderMixin],
	
	  propTypes: {
	    async: React.PropTypes.bool
	  },
	
	  getDefaultProps:function () {
	    return {
	      async: true
	    };
	  },
	
	  componentDidMount:function () {
	    this._hightlight();
	  },
	
	  componentDidUpdate:function () {
	    this._hightlight();
	  },
	
	  _hightlight:function () {
	    Prism.highlightElement(this.refs.code.getDOMNode(), this.props.async);
	  },
	
	  render:function () {
	    return this._render(this.props, this.state);
	  },
	
	  _render:function (props, state) {
	    return React.createElement("code", {ref: "code", className: props.className}, props.children);
	  }
	});


/***/ }

});
//# sourceMappingURL=bundle.js.map