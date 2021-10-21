/*Implementation of queue using stacks*/

module.exports = class StackQueue {
  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }
  enqueue = (value) => {
    for (let i = 0; i < this.stackTwo.length; i++) {
      this.stackOne.push(this.stackTwo.pop());
    }
    this.stackOne.push(value);
    return this.stackOne;
  };
  dequeue = () => {
    while (this.stackOne.length > 0) {
      this.stackTwo.push(this.stackOne.pop());
    }
    return this.stackTwo.pop();
  };
  peek = () => (this.stackOne.length > 0 ? this.stackOne[0] : this.stackTwo[0]);

  isEmpty = () => (this.stackOne.length ? false : true);
};
