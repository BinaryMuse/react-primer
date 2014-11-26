var React = require("react"),
    Store = require("./store.jsx"),
    Item = require("./item.jsx");

require("./demo6.less");

// This demo introduces the idea of a top-level data store
// that the main application uses to get data from;
// any time the store updates, it triggers a "change"
// event and the `Application` component gets re-rendered.
//
// Because React uses a fast virtual DOM under the hood, the
// actual DOM doesn't get changed unless the output of the `render`
// function for a component actually results in different output.

// Take a look at `store.jsx` for details on the Store class;
// then, continue reading.
var store = new Store();

// Here are a few utility functions which help us abstract away
// the store API from the `Application` component.
var addItem    = (color, width)         => store.addItem(color, width);
var removeItem = (itemId)               => store.removeItem(itemId);
var changeItem = (itemId, color, width) => store.changeItem(itemId, color, width);
var clearItems = ()                     => store.clearItems();

function randomColor() {
  var hex = Math.floor(Math.random() * 16777215).toString(16);
  while (hex.length < 6) {
    hex = "0" + hex;
  }
  return "#" + hex;
}

var Application = React.createClass({
  handleItemChange(itemId, color, width) {
    changeItem(itemId, color, width);
  },

  handleRemoveItem(itemId) {
    removeItem(itemId);
  },

  addItem() {
    addItem(randomColor(), Math.floor(Math.random() * 800 + 200));
  },

  addManyItems() {
    for (var i = 0; i < 1000; i++) {
      this.addItem();
    }
  },

  clearItems() {
    clearItems();
  },

  render() {
    // For each item in the `items` property, we render
    // an `Item` component. Notice each one has a `key` of the item's
    // ID, since the items can be removed from inside the middle
    // of the array.
    //
    // Take a look at `item.jsx` to see how the Item component
    // is implemented, including the ability to do fast updates
    // via `shouldComponentUpdate`.
    return (
      <div>
        <div>
          <button onClick={this.addItem}>Add New Item</button>
          <button onClick={this.addManyItems}>Add Many Items</button>
          <button onClick={this.clearItems}>Remove All Items</button>
        </div>
        {this.props.items.map((item) => {
          return <Item color={item.color} width={item.width}
                       id={item.id} key={item.id}
                       onChange={this.handleItemChange}
                       onRemove={this.handleRemoveItem} />
        })}
      </div>
    );
  }
});

var renderApp = () => {
  // When we render the application, we pass the store's
  // data via the `items` property.
  React.render(
    <Application items={store.items} />,
    document.getElementById("container")
  );
}

// Any time the store emits a change event, we re-render
// the application; React is smart enough to reuse the existing
// component and simply pass it the new properties.
store.on("change", renderApp);
renderApp();
