const LinkedList = require("../LinkedList/LinkedList");

module.exports = class Stack {
  constructor() {
    this.linkedList = new LinkedList();
    this.top = this.linkedList.tail;
    this.bottom = this.linkedList.head;
    this.length = this.linkedList.length;
  }

  /**
   * isEmpty.
   * @returns {boolean}
   * @description Returns true if Stack is empty.
   */
  isEmpty = () => {
    return !this.top;
  };

  /**
   * peek.
   * @returns {*}
   * @description Returns the top element of the Stack.
   */
  peek = () => {
    if (this.isEmpty()) return null;
    return this.top.value;
  };

  /**
   * push.
   * @param {*} value
   * @returns {*}
   * @description Add a value to the top top of the Stack.
   */
  push = (value) => {
    this.linkedList.append(value);
    this.top = this.linkedList.tail;
    this.bottom = this.linkedList.head;
    this.length = this.linkedList.length;
  };

  /**
   * pop.
   * @returns {*}
   * @description Removes the top-most value from the Stack.
   */
  pop = () => {
    this.linkedList.deleteTail();
    const removedTop = this.top;
    this.top = this.linkedList.tail;
    this.bottom = this.linkedList.head;
    this.length = this.linkedList.length;
    return removedTop ? removedTop.value : null;
  };

  _insertAtBottom = (value, stack) => {
    if (stack.isEmpty()) {
      stack.push(value);
    } else {
      let temp = stack.pop();
      this._insertAtBottom(value, stack);
      stack.push(temp);
    }
  };

  reverse = (stack = this) => {
    if (!stack.isEmpty()) {
      let temp = stack.pop();
      this.reverse(stack);
      this._insertAtBottom(temp, stack);
    }
  };
};

/*
 * 5 -> pop
 * 4 -> pop
 * 3 -> pop */
