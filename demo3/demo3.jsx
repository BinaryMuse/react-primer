import React from "react"
import ReactDOM from "react-dom"

class Timer extends React.Component {
  // In addition to properties ("props") passed from parents, React components
  // can also contain internal state, referenced by `this.state`. To set the
  // initial value for the state, set `this.state` inside the constructor. Don't
  // forget to call the parent's constructor with `super`!
  constructor(...args) {
    super(...args)
    this.state = {
      time: 0,
    }
  }

  // React provides lifecycle hooks to set up and tear down components and
  // third-party APIs if necessary. Here, we start a timer when the component
  // mounts...
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  // ... and remove the timer when the component unmounts. If we don't do this,
  // we'll leak memory (and the timer will continue to fire even though our
  // component is gone).
  componentWillUnmount() {
    this.timer && clearInterval(this.timer)
  }

  // Unlike properties, state is owned by the component, and can be changed
  // using `this.setState`. Note that you should *never* modify `this.state`
  // directly -- always use `this.setState` so that React knows the state has
  // changed.
  //
  // Our timer function calls `setState`, which allows us to update one or more
  // keys in our state. It has two versions:
  //
  // If we want to set specific state no matter what, we can pass an object:
  //
  //    this.setState({ time: 100 })
  //
  // But if we want to set some new state based on the current state (like we do
  // here — we want to add one to the timer value), pass a function to setState
  // instead. The function gets the current state as its first argument, and
  // whatever you return is the new state.
  //
  //    this.setState(oldState => ({ time: oldState.time + 1 }))
  //
  // This is important to remember because React doesn't set the state
  // *immediately*; it just queues a change for the next update. If you use data
  // from `this.state` to determine your new state, you might be using the wrong
  // values!
  //
  // Note that the state doesn't get totally replace by this object; instead,
  // React merges this object with the current state.
  tick() {
    this.setState((oldState) => ({ time: oldState.time + 1 }))
  }

  // Render is called automatically when a component's state is updated with
  // `setState`, `replaceState`, or when `forceUpdate` is called. Composed
  // components are automatically re-rendered.
  render() {
    return <div>Time: {this.state.time}</div>
  }
}

ReactDOM.render(<Timer />, document.getElementById("container"))
