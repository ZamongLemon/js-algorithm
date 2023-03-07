class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enQueue(element, priority) {
    let newNode = new Node(element, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx !== 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent.priority >= element.priority) {
        [this.values[parentIdx], this.values[idx]] = [element, parent];
        idx = parentIdx;
      } else break;
    }
  }
  dequeue() {
    let k = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      const length = this.values.length;
      const element = this.values[0];
      let i = 0;
      while (true) {
        let leftIdx = 2 * i + 1;
        let rightIdx = 2 * i + 2;
        let left, right;
        let swap = null;
        if (leftIdx < length) {
          left = this.values[leftIdx];
          if (left.priority > element.priority) {
            swap = leftIdx;
          }
        }
        if (rightIdx < length) {
          right = this.values[rightIdx];
          if (
            (swap === null && right.priority < element.priority) ||
            (swap !== null && right.priority < left.priority)
          ) {
            swap = rightIdx;
          }
        }
        if (swap) {
          this.values[i] = this.values[swap];
          this.values[swap] = element;
          i = swap;
        } else {
          break;
        }
      }
    }
    console.log(this.values);
    return k;
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enQueue(3, 1);
priorityQueue.enQueue(2, 2);
priorityQueue.enQueue(15, 0);
priorityQueue.enQueue(17, 0);
priorityQueue.enQueue(19, 1);
priorityQueue.enQueue(22, 0);
console.log(priorityQueue.dequeue());

console.log(priorityQueue.dequeue());

console.log(priorityQueue.dequeue());

console.log(priorityQueue.dequeue());

console.log(priorityQueue.dequeue());

console.log(priorityQueue.dequeue());
