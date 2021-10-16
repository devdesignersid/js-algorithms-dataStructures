const LinkedListNode = require("./LinkedListNode");

/* LinkedList implementation in Javascript */
module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /* Adding a node to the beginning of a Linked-List.*/
  prepend = (value) => {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    // When tail node isn't present.
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
    return this;
  };

  /* Adding a node to the end of the Linked-List.
   */
  append = (value) => {
    const newNode = new LinkedListNode(value);

    // if no head is present.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  };

  /* Insert a node to a particular index of Linked-List. */
  insert = (value, index) => {
    if (index > this.length || index < 0) {
      throw new Error("index out of bound!");
    }
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    if (index === this.length) {
      this.append(value);
      return this;
    }
    const previousNode = this.lookup(index - 1);
    const currentNode = previousNode.next;
    const newNode = new LinkedListNode(value, currentNode);
    previousNode.next = newNode;
    this.length++;
    return this;
  };

  /* Delete head node from the Linked-List.*/
  deleteHead = () => {
    if (!this.head) {
      return null;
    }
    const deletedHead = this.head;
    if (deletedHead.next) {
      // When Linked-List is empty.
      this.head = deletedHead.next;
    } else {
      // When only a single node is present in the Linked-List.
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return deletedHead;
  };

  /* Delete tail node from the Linked-List.*/
  deleteTail = () => {
    if (!this.tail) {
      // When Linked-List is empty.
      return null;
    }
    const deletedTail = this.tail;

    if (this.head === deletedTail) {
      // When only a single node is present in the Linked-List.
      this.head = null;
      this.tail = null;
      this.length--;
      return deletedTail;
    }

    const previousNode = this.lookup(this.length - 2);
    const currentNode = previousNode.next;
    previousNode.next = null;
    this.tail = previousNode;
    this.length--;
    return currentNode;
  };

  /*Delete a node from the Linked-List.*/
  delete = (index) => {
    if (index === undefined) {
      throw new Error("index cannot be undefined!");
    }
    if (index > this.length || index < 0) {
      throw new Error("index out of bound!");
    }
    if (index === 0) {
      return this.deleteHead();
    }
    if (index === this.length - 1) {
      return this.deleteTail();
    }

    const previousNode = this.lookup(index - 1);
    const currentNode = previousNode.next;
    const nextNode = currentNode.next;
    previousNode.next = nextNode;
    this.length--;
    return currentNode;
  };

  /* Trverse to a particular node in Linked-List.*/
  lookup = (index) => {
    let counter = 0;
    let currentNode = this.head;

    if (index < 0 || index > this.length) {
      throw Error("index is out of bound!");
    }

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  };

  /* Find a value if present in a LinkedList*/
  find = (value = undefined) => {
    let currentNode = this.head;
    while (currentNode) {
      if (value && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  };

  reverse = () => {
    if (!this.head.next || this.length === 1) {
      return this;
    }
    let firstNode = this.head;
    let secondNode = firstNode.next;
    while (secondNode) {
      let tempNode = secondNode.next;
      secondNode.next = firstNode;
      // next pair of nodes that needs to be reveresd (second & second.next).
      firstNode = secondNode;
      secondNode = tempNode;
    }
    // pointing the current head nodes next value to be null.
    this.head.next = null;
    // setting the current head node to be the tail node.
    this.tail = this.head;
    // last processed node will be the head node.
    this.head = firstNode;
    return this;
  };

  /* Converts Linked-List nodes into an array.*/
  toArray = () => {
    const nodes = new Array();
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  };

  /* Printing all nodes in the Linked-List.*/
  prettyPrint = () => {
    this.toArray().forEach((node, index) => {
      console.log(`node at index - ${index} :`, node.toString());
      if (index === this.length - 1) {
        console.log("\n");
      }
    });
  };
};
