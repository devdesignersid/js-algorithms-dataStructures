/*
 * Reverse a given stack of integers using recursion.
 *
 * You are not allowed to use any extra space other than the internal stack space used due to recursion.
 * You are not allowed to use the loop constructs of any sort available as handy. For example: for, for-each, while, etc. 
 * The only inbuilt stack methods allowed are:
    push(x) -- Push element x onto stack.
    pop() -- Removes the element on top of the stack.
    peek() -- Get the top element.
 * */

const Stack = require("../../Stack/Stack");

const stack = new Stack();
stack.push(3);
stack.push(1);
stack.push(2);

const reverse = (stack) => {
  if (!stack.isEmpty()) {
    let temp = stack.pop();
    reverse(stack);
    insertAtBottom(temp, stack);
  }
  return stack;
};

const insertAtBottom = (value, stack) => {
  if (stack.isEmpty()) {
    stack.push(value);
  } else {
    let temp = stack.pop();
    insertAtBottom(value, stack);
    stack.push(temp);
  }
};

stack.linkedList.prettyPrint();
const reversedStack = reverse(stack);
console.log("Reversed Stack: ");
reversedStack.linkedList.prettyPrint();
