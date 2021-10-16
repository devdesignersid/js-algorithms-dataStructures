const LinkedListNode = require("../LinkedList/LinkedListNode");

module.exports = class DoublyLinkedListNode extends LinkedListNode {
  constructor(value, next = null, previous = null) {
    super(value, next);
    this.previous = previous;
  }
};
