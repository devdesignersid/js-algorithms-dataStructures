/*
 * Implementation of stack using Array.
 */

module.exports = class ArrayStack {
  constructor() {
    this.array = new Array();
    this.top = this.array[this.array.length - 1];
    this.bottom = this.array[0];
    this.length = this.array.length;
  }

  isEmpty = () => {
    if (this.length === 0) return true;
    return false;
  };
  peek = () => {
    if (this.isEmpty()) return null;
    return this.top;
  };
  push = (value) => {
    this.array.push(value);
    this.bottom = this.array[0];
    this.length = this.array.length;
    this.top = this.array[this.array.length - 1];
  };
  pop = () => {
    if (this.length === 0) {
      return null;
    }
    const deletedValue = this.array.pop();
    this.bottom = this.array[0];
    this.length = this.array.length;
    this.top = this.array[this.array.length - 1];
    return deletedValue;
  };
};
