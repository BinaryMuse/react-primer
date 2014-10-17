var React = require("react");
window.React = React; // to enable dev tools
React.initializeTouchEvents(true);

var DemoSourceLink = React.createClass({
  render: function() {
    var hrefRoot = "https://github.com/BinaryMuse/react-primer",
        href = hrefRoot + "/tree/gh-pages/demo" +
               this.props.demo + "/demo" + this.props.demo + ".jsx";

    return <a {...this.props} href={href}>{this.props.children}</a>;
  }
});

var LinkComponent = React.createClass({
  render: function() {
    if (this.props.demo) {
      var hrefRoot = "https://github.com/BinaryMuse/react-primer",
          href = hrefRoot + "/tree/gh-pages/demo" +
                 this.props.demo + "/demo" + this.props.demo + ".jsx";
      return (
        <p>Annotated source code for this demo is available
        as <DemoSourceLink demo={this.props.demo}><code>demo{this.props.demo}.jsx</code></DemoSourceLink> in
        the <code>demo{this.props.demo}</code> directory of
        the project repository.<br />
        <a href="index.html">Back to demo list</a></p>
      );
    } else {
      return (
        <p>Source code for each demo is available from the root of
        the <a href="https://github.com/BinaryMuse/react-primer">project repository</a>.</p>
      );
    }
  }
});

var demo = ~~window.location.search.replace(/\?/, "");

// webpack must be able to statically analyze these,
// so we can't generate them programmatically
switch (demo) {
  case 1:
    require.ensure([], function() {
      require("./demo1/demo1.jsx");
      showDemoLink(demo);
    });
    break;
  case 2:
    require.ensure([], function() {
      require("./demo2/demo2.jsx");
      showDemoLink(demo);
    });
    break;
  case 3:
    require.ensure([], function() {
      require("./demo3/demo3.jsx");
      showDemoLink(demo);
    });
    break;
  case 4:
    require.ensure([], function() {
      require("./demo4/demo4.jsx");
      showDemoLink(demo);
    });
    break;
  case 5:
    require.ensure([], function() {
      require("./demo5/demo5.jsx");
      showDemoLink(demo);
    });
    break;
  case 6:
    require.ensure([], function() {
      require("./demo6/demo6.jsx");
      showDemoLink(demo);
    });
    break;
  case 7:
    require.ensure([], function() {
      require("./demo7/demo7.jsx");
      showDemoLink(demo);
    });
    break;
  default:
    loadIndex();
}

function showDemoLink(num) {
  React.render(<LinkComponent demo={num} />,
               document.getElementById("source-link"));
}

function loadIndex() {
  var App = React.createClass({
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
        <ul>
        {demos.map(function(name, idx) {
          var num = idx + 1;
          return (
            <li key={num}>
              <a href={"index.html?" + num}>Demo {num}: {name}</a> -
              {" "}<DemoSourceLink demo={num}>Source</DemoSourceLink>
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
