const LinkedList = require("../LinkedList/LinkedList");

module.exports = class Queue {
  constructor() {
    this.linkedList = new LinkedList();
    this.first = this.linkedList.head;
    this.last = this.linkedList.tail;
    this.length = this.linkedList.length;
  }

  peek = () => {
    return this.first ? this.first.value : null;
  };
  enqueue = (value) => {
    this.linkedList.append(value);
    this.first = this.linkedList.head;
    this.last = this.linkedList.tail;
    this.length = this.linkedList.length;
  };
  dequeue = () => {
    if (!this.first) {
      return null;
    }
    this.linkedList.deleteHead();
    this.first = this.linkedList.head;
    this.last = this.linkedList.tail;
    this.length = this.linkedList.length;
  };

  isEmpty = () => {
    return this.linkedList.head ? false : true;
  };
};
