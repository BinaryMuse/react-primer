/** @jsx React.DOM */

var React = require("react"),
    Store = require("./store.jsx"),
    Item = require("./item.jsx");

// This demo introduces the idea of a top-level data store
// that the main application uses to get state from;
// any time the store updates, it triggers a "change"
// event and the `Application` component re-renders itself
// due to a call to `setState`.
//
// Because React uses a fast virtual DOM under the hood, the
// actual DOM doesn't get changed unless the output of the `render`
// function for a component actually results in different output.

// Take a look at `store.jsx` for details on the Store class;
// then, continue reading.
var store = new Store();

// Here are a few utility functions which help us abstract away
// the store API from the `Application` component.
function addItem(color, width) {
  store.addItem(color, width);
}

function removeItem(itemId) {
  store.removeItem(itemId);
}

function changeItem(itemId, color, width) {
  store.changeItem(itemId, color, width);
}

function randomColor() {
  var hex = Math.floor(Math.random() * 16777215).toString(16);
  while (hex.length < 6) {
    hex = "0" + hex;
  }
  return "#" + hex;
}

var Application = React.createClass({
  // When the application first mounts...
  getInitialState: function() {
    return this.getStateFromStore();
  },

  // ... and whenever the store emits a "change" event...
  componentDidMount: function() {
    store.on("change", function() {
      this.setState(this.getStateFromStore());
    }.bind(this))
  },

  // ... we set the component's state to this object. Note
  // we don't do any intelligent diffing to figure out
  // which items in the `store.items` array actually changed;
  // React does this for us.
  getStateFromStore: function() {
    return {
      items: store.items
    };
  },

  handleItemChange: function(itemId, color, width) {
    changeItem(itemId, color, width);
  },

  handleRemoveItem: function(itemId) {
    removeItem(itemId);
  },

  addItem: function() {
    addItem(randomColor(), Math.floor(Math.random() * 800 + 200));
  },

  addManyItems: function() {
    for (var i = 0; i < 1000; i++) {
      this.addItem();
    }
  },

  render: function() {
    // For each item in the `items` state property, we render
    // an `Item` component. Notice each one has a `key` of the item's
    // ID, since the items can be removed from inside the middle
    // of the array.
    //
    // Take a look at `item.jsx` to see the rest of the application.
    return (
      <div>
        <div>
          <button onClick={this.addItem}>Add New Item</button>
          <button onClick={this.addManyItems}>Add Many Items</button>
        </div>
        {this.state.items.map(function(item) {
          return <Item color={item.color} width={item.width}
                       id={item.id} key={item.id}
                       onChange={this.handleItemChange}
                       onRemove={this.handleRemoveItem} />
        }.bind(this))}
      </div>
    );
  }
});

React.renderComponent(
  <Application />,
  document.getElementById("container")
);
