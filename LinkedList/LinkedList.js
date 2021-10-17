const LinkedListNode = require("./LinkedListNode");

/* LinkedList implementation in Javascript */
module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Checks if the linked list is empty.
  isEmpty = () => {
    if (this.head) return false;
    return true;
  };

  // Adds a node to the front of the linked list.
  prepend = (value) => {
    const newNode = new LinkedListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      const currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
      this.length++;
    }
    return this;
  };

  // Add a node to the end of the linked list.
  append = (value) => {
    const newNode = new LinkedListNode(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      const currentTail = this.tail;
      currentTail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  };

  // Insert a node to the linked list.
  insert = (value, index) => {
    if (index === undefined)
      throw Error("Function requires 'index' as the second argument!");
    if (index < 0 || index > this.length) throw Error("Index is out of range!");
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    const newNode = new LinkedListNode(value);
    // getting previous node of Current Node.
    const previousNode = this.lookup(index - 1);
    const currentNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
    if (index === this.length - 1) {
      this.tail = newNode;
    }
    return newNode;
  };

  // Delete's a node from the linked list (at a specific index).
  delete = (index) => {
    if (this.isEmpty()) {
      return null;
    }
    if (index === undefined)
      throw Error("Function requires 'index' as an argument!");
    if (index < 0 || index >= this.length)
      throw Error("Index is out of range!");
    if (index === 0) {
      return this.deleteHead();
    }
    if (index === this.length - 1) {
      return this.deleteTail();
    }
    const previousNode = this.lookup(index - 1);
    const deletedNode = previousNode.next;
    const nextNode = deletedNode.next;
    previousNode.next = nextNode;
    return deletedNode;
  };

  // Delete the current head node of the linked list.
  deleteHead = () => {
    if (this.isEmpty()) {
      return null;
    }
    const deletedHead = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return deletedHead;
    }
    const nextNode = deletedHead.next;
    this.head = nextNode;
    return deletedHead;
  };

  // Delete the current tail node of the linked list.
  deleteTail = () => {
    if (this.isEmpty()) {
      return null;
    }
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return deletedTail;
    }
    const previousNode = this.lookup(this.length - 2);
    previousNode.next = null;
    this.tail = previousNode;
    this.length--;
    return deletedTail;
  };

  // Traverse to a linked list node at a spcific index.
  lookup = (index) => {
    if (index < 0 || index >= this.length)
      throw Error("Index is out of range!");
    if (index === undefined)
      throw Error("Function requries 'index' as an argument");
    let currentNode = this.head;
    let counter = 0;
    while (currentNode && counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  };

  // Converts a linked list to an array
  toArray = () => {
    let currentNode = this.head;
    const linkedListArray = [];
    while (currentNode) {
      linkedListArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return linkedListArray;
  };

  // Reverse the linked list.
  reverse = () => {
    let previousNode = this.head;
    let currentNode = previousNode.next;

    while (currentNode) {
      let nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head.next = null;
    this.head = previousNode;
    return this;
  };

  // Reverse without mutating.
  reverseNm = () => {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head === this.tail) {
      return this.head;
    }
    const reversedStack = [];
    let currentNode = this.head;
    while (currentNode) {
      reversedStack.push(currentNode.value);
      currentNode = currentNode.next;
    }

    const reversedLinkedList = new LinkedList();
    while (reversedStack.length > 0) {
      let value = reversedStack.pop();
      reversedLinkedList.append(value);
    }
    return reversedLinkedList;
  };

  // Find the middle node of the given linked list.
  middle = (head = this.head) => {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head === this.tail) {
      this.head;
    }
    let slowPointer = head;
    let fastPointer = head;
    while (fastPointer.next && fastPointer.next.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
    return slowPointer;
  };

  // Check if linked has cycles.
  hasCycles = () => {
    let slowPointer = this.head;
    let fastPointer = this.head;

    while (fastPointer && fastPointer.next && fastPointer.next.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
      if (slowPointer === fastPointer) {
        return true;
      }
    }
    return false;
  };

  // Sort the linked list.

  sort = () => {
    let mergedList = new LinkedList();
    let sortedNodes = this.sortNodes();
    mergedList.head = sortedNodes;
    let currentNode = sortedNodes;
    while (currentNode) {
      currentNode = currentNode.next;
    }
    mergedList.tail = currentNode;
    return mergedList;
  };

  sortNodes = (head = this.head) => {
    if (head.next === null) return head;
    let middle = this.middle(head);
    let middleNext = middle.next;
    middle.next = null;
    let left = this.sortNodes(head);
    let right = this.sortNodes(middleNext);
    return this.mergeNodes(left, right);
  };

  mergeNodes = (left, right) => {
    let result = null;

    if (left === null) {
      return right;
    }

    if (right === null) {
      return left;
    }

    if (left.value <= right.value) {
      result = left;
      result.next = this.mergeNodes(left.next, right);
    } else {
      result = right;
      result.next = this.mergeNodes(left, right.next);
    }
    return result;
  };

  // prints out the linked list elements.
  prettyPrint = () => {
    return this.toArray().join(" --> ");
  };
};
