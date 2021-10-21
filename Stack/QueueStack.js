module.exports = class QueueStack {
  constructor() {
    this.queueOne = new Queue();
    this.queueTwo = new Queue();
    this.top = this.queueOne.first;
    this.bottom = this.queueOne.last;
    this.length = this.queueOne.length;
  }

  // adding elements to the top of the stack.
  push = (value) => {
    this.queueOne.enqueue(value);
    this.top = this.queueOne.last;
    this.bottom = this.queueOne.first;
    this.length = this.queueOne.length;
    return this;
  };

  // removing elements from the top of the stack.
  pop = () => {
    if (this.queueOne.isEmpty()) return null;
    while (this.queueOne.length !== 1) {
      this.queueTwo.enqueue(this.queueOne.dequeue());
    }
    const removedNode = this.queueOne.dequeue();
    let temp = this.queueOne;
    this.queueOne = this.queueTwo;
    this.queueTwo = temp;
    this.top = this.queueOne.last;
    this.bottom = this.queueOne.first;
    this.length = this.queueOne.length;
    return removedNode;
  };

  // get the topmost element from the stack.
  seek = () => {};

  // chck if the stack is empty.
  isEmpty = () => {};
};
