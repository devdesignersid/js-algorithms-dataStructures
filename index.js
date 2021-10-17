const Queue = require("./Queue/Queue");

const queue = new Queue();
console.log("is queue empty: ", queue.isEmpty());
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.linkedList.prettyPrint();
console.log("first element: ", queue.peek());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.linkedList.prettyPrint();
console.log("first element: ", queue.peek());
console.log("is queue empty: ", queue.isEmpty());
