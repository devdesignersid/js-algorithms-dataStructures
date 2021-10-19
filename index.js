const Queue = require("./Queue/StackQueue");

const queue = new Queue();
console.log("is queue empty: ", queue.isEmpty());
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log("first element: ", queue.peek());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log("first element: ", queue.peek());
console.log("is queue empty: ", queue.isEmpty());
