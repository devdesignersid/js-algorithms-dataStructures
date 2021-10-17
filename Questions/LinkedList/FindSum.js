/*
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

const LinkedList = require("../../LinkedList/LinkedList");

const numOneList = new LinkedList();
// number 243
numOneList.append(3);
numOneList.append(4);
numOneList.append(2);
const numTwoList = new LinkedList();
// number 562
numTwoList.append(2);
numTwoList.append(6);

/**
 * Add two linked list representing two non-negative integers in reverse order.
 * @param {LinkedList} numOneList
 * @param {LinkedList} numTwoList
 * @returns {LinkedList}
 */
const add = (numOneList, numTwoList) => {
  if (numOneList.length === 0 && numTwoList.length === 0) {
    throw Error("got empty linked list as arguments!");
  }
  if (numOneList.length > numTwoList.length) {
    const numOfZeros = numOneList.length - numTwoList.length;
    let counter = 0;
    while (counter !== numOfZeros) {
      numTwoList.append(0);
      counter++;
    }
  }
  if (numTwoList.length > numOneList.length) {
    const numOfZeros = numTwoList.length - numOneList.length;
    let counter = 0;
    while (counter !== numOfZeros) {
      numOneList.prepend(0);
      counter++;
    }
  }

  const sumList = new LinkedList();
  let carry = 0;
  let currentNodeOne = numOneList.head;
  let currentNodeTwo = numTwoList.head;
  while (currentNodeOne && currentNodeTwo) {
    let sum = currentNodeOne.value + currentNodeTwo.value;
    if (carry) {
      sum += carry;
      carry = 0;
    }
    if (sum > 9) {
      sum = sum - 10;
      carry = 1;
    }
    sumList.append(sum);
    currentNodeOne = currentNodeOne.next;
    currentNodeTwo = currentNodeTwo.next;
  }
  carry ? sumList.append(carry) : null;
  return sumList;
};

const sumList = add(numOneList, numTwoList);
console.log(
  `sum of ${numOneList
    .reverse()
    .toArray()
    .join("")} && ${numTwoList
    .reverse()
    .toArray()
    .join("")} is : ${sumList.reverse().toArray().join("")}  `
);
