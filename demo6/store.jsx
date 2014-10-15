var EventEmitter = require("events").EventEmitter,
    util = require("util");

var id = 1;

// The store simply keeps track of an array of items. Each item
// has an id, a color, and a width.
function Store() {
  EventEmitter.call(this);
  this.items = [];
  this.itemsById = {};
  this.addItem("red", 300);
}

util.inherits(Store, EventEmitter);

// Any time an item is added, removed, or changed,
// we emit a "change" event, which is used back in demo5.jsx.
Store.prototype.addItem = function(color, width) {
  var item = {id: ++id, color: color, width: width};
  this.items.push(item);
  this.itemsById[id] = item;
  this.emit("change");
};

Store.prototype.removeItem = function(itemId) {
  var item = this.itemsById[itemId],
      index = this.items.indexOf(item);
  if (index > -1) {
    this.items.splice(index, 1);
    delete this.itemsById[itemId];
    this.emit("change");
  }
};

Store.prototype.changeItem = function(itemId, color, width) {
  var item = this.itemsById[itemId];
  item.color = color;
  item.width = width;
  this.emit("change");
};

module.exports = Store;
