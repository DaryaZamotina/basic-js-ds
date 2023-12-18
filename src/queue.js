const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = {};
    this.head = 0; 
    this.length = 0;
    this.first = null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
   this.queue[this.length] = value;
   this.length++;
  }

  dequeue() {
    let elemRem = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return elemRem;
  }
}

module.exports = {
  Queue
};
