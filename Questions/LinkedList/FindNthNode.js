/*
 *Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on. So for the list 42 -> 13 -> 666, GetNth() with index 1 should return Node(13);
 */

const LinkedList = require("../../LinkedList/LinkedList");

const linkedList = new LinkedList();
linkedList.append(42);
linkedList.append(13);
linkedList.append(666);

const GetNth = (linkedList, index) => {
  if (index < 0 || index > linkedList.length - 1) {
    throw Error("index out of bound!");
  }
  let counter = 0;
  let currentNode = linkedList.head;
  while (counter !== index) {
    currentNode = currentNode.next;
    counter++;
  }
  return currentNode;
};

const nthNode = GetNth(linkedList, 1); // should return 3
console.log("n-th Node: ", nthNode.toString());
