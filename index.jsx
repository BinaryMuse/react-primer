var React = require("react"),
    ReactPrism = require("react-prism").PrismCode;

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

var DemoSourceLink = React.createClass({
  render() {
    var hrefRoot = "https://github.com/BinaryMuse/react-primer",
        href = hrefRoot + "/tree/gh-pages/demo" +
               this.props.demo + "/demo" + this.props.demo + ".jsx";

    return <a {...this.props} href={href}>{this.props.children}</a>;
  }
});

var LinkComponent = React.createClass({
  render() {
    if (this.props.demo) {
      var hrefRoot = "https://github.com/BinaryMuse/react-primer",
          href = hrefRoot + "/tree/gh-pages/demo" +
                 this.props.demo + "/demo" + this.props.demo + ".jsx";
      return (
        <p>
        <a href="index.html">Back to demo list</a>
        &nbsp; &middot; &nbsp;
        <DemoSourceLink demo={this.props.demo}>View on GitHub</DemoSourceLink>
        </p>
      );
    } else {
      return (
        <p>Source code for each demo is available from the root of
        the <a href="https://github.com/BinaryMuse/react-primer">project repository</a> and
        at the bottom of each demo page.</p>
      );
    }
  }
});

var SourceCode = React.createClass({
  propTypes: {
    files: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        code: React.PropTypes.string.isRequired
      }).isRequired
    )
  },

  getInitialState() {
    return {
      selectedIndex: 0
    };
  },

  render() {
    var olStyle = {
      listStyle: "none",
      paddingLeft: 0,
      marginTop: 0
    };

    return (
      <div>
        <h2>Demo Source</h2>
        <ol style={olStyle}>{this.props.files.map(this.renderSelector)}</ol>
        <div>{this.props.files.map(this.renderFile)}</div>
      </div>
    );
  },

  renderSelector(file, idx) {
    var liStyle = {
      float: "left",
      padding: 10,
      cursor: "pointer",
      color: this.state.selectedIndex === idx ? "black" : "#999"
    };

    return (
      <li key={file.name} style={liStyle} onClick={this.handleSelectorClick.bind(null, idx)}>
        {file.name}
      </li>
    );
  },

  renderFile(file, idx) {
    var style = {
      display: this.state.selectedIndex === idx ? "block" : "none",
      clear: "both"
    };

    return (
      <pre key={file.name} className="line-numbers" style={style}>
        <ReactPrism className="language-javascript">{file.code}</ReactPrism>
      </pre>
    )
  },

  handleSelectorClick(idx) {
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
    require.ensure([], () => {
      require("./demo1/demo1.jsx");
      showDemoLink(demo, [{ name: "demo1.jsx", code: require("!!raw!./demo1/demo1.jsx")}]);
    });
    break;
  case 2:
    require.ensure([], () => {
      require("./demo2/demo2.jsx");
      showDemoLink(demo, [{name: 'demo2.jsx', code: require("!!raw!./demo2/demo2.jsx")}]);
    });
    break;
  case 3:
    require.ensure([], () => {
      require("./demo3/demo3.jsx");
      showDemoLink(demo, [{name: 'demo3.jsx', code: require("!!raw!./demo3/demo3.jsx")}]);
    });
    break;
  case 4:
    require.ensure([], () => {
      require("./demo4/demo4.jsx");
      showDemoLink(demo, [{name: 'demo4.jsx', code: require("!!raw!./demo4/demo4.jsx")}]);
    });
    break;
  case 5:
    require.ensure([], () => {
      require("./demo5/demo5.jsx");
      showDemoLink(demo, [{name: 'demo5.jsx', code: require("!!raw!./demo5/demo5.jsx")}]);
    });
    break;
  case 6:
    require.ensure([], () => {
      require("./demo6/demo6.jsx");
      var code = [
        { name: "demo6.jsx", code: require("!!raw!./demo6/demo6.jsx") },
        { name: "store.jsx", code: require("!!raw!./demo6/store.jsx") },
        { name: "item.jsx", code: require("!!raw!./demo6/item.jsx") }
      ];
      showDemoLink(demo, code);
    });
    break;
  case 7:
    require.ensure([], () => {
      require("./demo7/demo7.jsx");
      showDemoLink(demo, [{name: 'demo7.jsx', code: require("!!raw!./demo7/demo7.jsx")}]);
    });
    break;
  default:
    loadIndex();
}

function showDemoLink(num, files) {
  React.render(React.createElement("h1", null, `Demo ${num}: ${DEMOS[num - 1]}`),
               document.getElementById("demo-title"));
  React.render(<LinkComponent demo={num} />,
               document.getElementById("source-link"));

  if (files && files.length) {
    React.render(<SourceCode files={files} />,
                 document.getElementById("source-files"));
  }
}

function loadIndex() {
  var App = React.createClass({
    render: function() {
      return (
        <ul>
        {DEMOS.map((name, idx) => {
          var num = idx + 1;
          return (
            <li key={num}>
              <a href={"index.html?" + num}>Demo {num}: {name}</a>
            </li>
          );
        })}
        </ul>
      )
    }
  });

  React.render(<App />, document.getElementById("container"));
  React.render(<LinkComponent />, document.getElementById("source-link"));
}
