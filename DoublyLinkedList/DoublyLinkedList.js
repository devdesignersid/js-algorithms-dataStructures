const LinkedList = require("../LinkedList/LinkedList");
const DoublyLinkedListNode = require("./DoublyLinkedListNode");

module.exports = class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
  }

  // add a node to the beginning of the Doubly-Linked-List.
  prepend = (value) => {
    const newNode = new DoublyLinkedListNode(value, this.head);
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;
    // Condition in which no node is present in the Doubly-Linked-List.
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
    return this;
  };

  // add a node to the end of the Doubly-Linked-List.
  append = (value) => {
    const newNode = new DoublyLinkedListNode(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    // Condition in which no node is present in the Doubly-Linked-List.
    if (!this.head) {
      this.head = newNode;
    }
    this.length++;
    return this;
  };

  // traverse to a particular index in the Doubly-Linked-List.
  lookup = (index) => {
    let currentNode = null;
    if (index < 0 || index > this.length) {
      throw Error("index is out of bound!");
    }
    if (index > this.length / 2) {
      let counter = this.length - 1;
      currentNode = this.tail;
      while (counter !== index) {
        currentNode = currentNode.previous;
        counter--;
      }
    } else {
      currentNode = this.head;
      let counter = 0;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    }
    return currentNode;
  };

  // Insert a node at a particular index in the Doubly-Linked-List.
  insert = (value, index) => {
    if (index < 0 || index > this.length) {
      throw Error("index is out of bound!");
    }
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    if (index === this.length) {
      this.append(value);
      return this;
    }
    const newNode = new DoublyLinkedListNode(value, null, null);
    const currentNode = this.lookup(index);
    const previousNode = currentNode.previous;
    currentNode.previous = newNode;
    previousNode.next = newNode;
    newNode.next = currentNode;
    newNode.previous = previousNode;
    this.length++;
    return this;
  };

  // Delete's the Head node the Doubly-Linked-List.
  deleteHead = () => {
    if (!this.head) {
      throw Error("no head node to be deleted!");
    }
    const currentNode = this.head;
    const nextNode = currentNode.next;
    nextNode.previous = null;
    this.head = nextNode;
    this.length--;
    return currentNode;
  };

  deleteTail = () => {
    if (!this.tail) {
      throw Error("no head node to be deleted!");
    }
    const currentNode = this.tail;
    const previousNode = currentNode.previous;
    previousNode.next = null;
    this.tail = previousNode;
    this.length--;
    return currentNode;
  };

  // Delete's a node at a particular index in the Doubly-Linked-List.
  delete = (index) => {
    if (index < 0 || index > this.length - 1) {
      throw Error("index is out of bound!");
    }
    if (index === 0) {
      return this.deleteHead();
    }
    if (index === this.length - 1) {
      return this.deleteTail();
    }
    const currentNode = this.lookup(index);
    const nextNode = currentNode.next;
    const previousNode = currentNode.previous;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    this.length--;
    return this;
  };
};
