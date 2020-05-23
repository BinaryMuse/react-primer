import React from "react"
import ReactDOM from "react-dom"
import ReactPrism from "react-prism"
import Prism from "prismjs"
global.Prism = Prism

var DEMOS = [
  "Components & Properties",
  "JSX",
  "State",
  "Composition, PropTypes, & Event Handlers",
  "Mixins",
  "Top-Down Data Flow & shouldComponentUpdate",
  "Wrapping Children with this.props.children",
]

function DemoSourceLink({ demo, children, ...props }) {
  const root = "https://github.com/BinaryMuse/react-primer"
  const href = `${root}/tree/gh-pages/demo${demo}/demo${demo}.jsx`
  return (
    <a {...props} href={href}>
      {children}
    </a>
  )
}

function LinkComponent({ demo }) {
  if (demo) {
    return (
      <>
        <a href="index.html">Back to demo list</a>
        &nbsp; &middot; &nbsp;
        <DemoSourceLink demo={demo}>View on GitHub</DemoSourceLink>
      </>
    )
  } else {
    return (
      <>
        Source code for each demo is available from the root of the{" "}
        <a href="https://github.com/BinaryMuse/react-primer">
          project repository
        </a>{" "}
        and at the bottom of each demo page.
      </>
    )
  }
}

function SourceCode({ files }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const olStyle = {
    listStyle: "none",
    paddingLeft: 0,
    marginTop: 0,
  }

  const liStyle = (idx) => ({
    float: "left",
    padding: 10,
    cursor: "pointer",
    color: selectedIndex === idx ? "black" : "#999",
  })

  const fileStyle = (idx) => ({
    display: selectedIndex === idx ? "block" : "none",
    clear: "both",
  })

  return (
    <div>
      <h2>Demo Source</h2>
      <ol style={olStyle}>
        {files.map((file, idx) => (
          <li
            key={file.name}
            style={liStyle(idx)}
            onClick={() => {
              setSelectedIndex(idx)
            }}
          >
            {file.name}
          </li>
        ))}
      </ol>
      <div>
        {files.map((file, idx) => (
          <pre key={file.name} className="line-numbers" style={fileStyle(idx)}>
            <ReactPrism className="language-javascript">
              {file.code.default}
            </ReactPrism>
          </pre>
        ))}
      </div>
    </div>
  )
}

var demo = ~~window.location.search.replace(/\?/, "")

// webpack must be able to statically analyze these,
// so we can't generate them programmatically
switch (demo) {
  case 1:
    require.ensure([], () => {
      require("./demo1/demo1.jsx")
      showDemoLink(demo, [
        { name: "demo1.jsx", code: require("!!raw-loader!./demo1/demo1.jsx") },
      ])
    })
    break
  case 2:
    require.ensure([], () => {
      require("./demo2/demo2.jsx")
      showDemoLink(demo, [
        { name: "demo2.jsx", code: require("!!raw-loader!./demo2/demo2.jsx") },
      ])
    })
    break
  case 3:
    require.ensure([], () => {
      require("./demo3/demo3.jsx")
      showDemoLink(demo, [
        { name: "demo3.jsx", code: require("!!raw-loader!./demo3/demo3.jsx") },
      ])
    })
    break
  case 4:
    require.ensure([], () => {
      require("./demo4/demo4.jsx")
      showDemoLink(demo, [
        { name: "demo4.jsx", code: require("!!raw-loader!./demo4/demo4.jsx") },
      ])
    })
    break
  case 5:
    require.ensure([], () => {
      require("./demo5/demo5.jsx")
      showDemoLink(demo, [
        { name: "demo5.jsx", code: require("!!raw-loader!./demo5/demo5.jsx") },
      ])
    })
    break
  case 6:
    require.ensure([], () => {
      require("./demo6/demo6.jsx")
      var code = [
        { name: "demo6.jsx", code: require("!!raw-loader!./demo6/demo6.jsx") },
        { name: "store.jsx", code: require("!!raw-loader!./demo6/store.jsx") },
        { name: "item.jsx", code: require("!!raw-loader!./demo6/item.jsx") },
      ]
      showDemoLink(demo, code)
    })
    break
  case 7:
    require.ensure([], () => {
      require("./demo7/demo7.jsx")
      showDemoLink(demo, [
        { name: "demo7.jsx", code: require("!!raw-loader!./demo7/demo7.jsx") },
      ])
    })
    break
  default:
    loadIndex()
}

function showDemoLink(num, files) {
  ReactDOM.render(
    <h1>
      Demo {num}: {DEMOS[num - 1]}
    </h1>,
    document.getElementById("demo-title")
  )
  ReactDOM.render(
    <LinkComponent demo={num} />,
    document.getElementById("source-link")
  )

  if (files && files.length) {
    ReactDOM.render(
      <SourceCode files={files} />,
      document.getElementById("source-files")
    )
  }
}

function loadIndex() {
  function App() {
    return (
      <ul>
        {DEMOS.map((name, idx) => {
          var num = idx + 1
          return (
            <li key={num}>
              <a href={"index.html?" + num}>
                Demo {num}: {name}
              </a>
            </li>
          )
        })}
      </ul>
    )
  }

  ReactDOM.render(<App />, document.getElementById("container"))
  ReactDOM.render(<LinkComponent />, document.getElementById("source-link"))
}
