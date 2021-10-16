// Find the middle node.

/*
 * Return the middle node of a linked list. if the list has av even number of elements, return the node at the end of the first half of the list.
 
 * Do not use a counter variable.
 * Do not retrive the size of the list.
 * Only iterate through the list one time.

*/

// LinkedList Node
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  toString = () => {
    return `${this.value}`;
  };
}

// LinkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add a node to the end of the LinkedList.
  append = (value) => {
    let newNode = new LinkedListNode(value, null);
    // checking if the linked list is empty
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }
    const tailNode = this.tail;
    tailNode.next = newNode;
    this.tail = newNode;
    return this;
  };
}

// when even number of elements returns the last element of the first half.
// this is the solution to the above given question.
const midpointLast = (linkedList) => {
  if (linkedList.head === linkedList.tail) {
    return linkedList.head;
  }

  /* Using turtle hare approach.*/
  let slowPointer = linkedList.head;
  // fast pointer moves twice as the slow poiner
  let fastPointer = linkedList.head;
  while (fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer;
};

// when even number of elements returns the first element of second half.
const midpointFirst = (linkedList) => {
  let slowPointer = linkedList.head;
  let fastPointer = linkedList.head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer;
};

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
const linkedListMidpoint = midpointLast(linkedList).toString();
console.log("Midpoint :", linkedListMidpoint);
