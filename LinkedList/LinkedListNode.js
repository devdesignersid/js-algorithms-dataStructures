module.exports = class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString = (callback) => (callback ? callback(this.value) : `${this.value}`);
};
