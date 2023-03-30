class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.last = newNode;
      this.first = newNode;
    } else {
      let lastFirst = this.first;
      newNode.next = lastFirst;
      this.first = newNode;
    }

    return ++this.size;
  }
  pop() {
    let poppedNode = this.first;
    this.head = poppedNode.next;
    this.size--;
    return poppedNode;
  }
}

var stack = new Stack();

console.log(stack.push(10)); // 1
console.log(stack.first.value); // 10
console.log(stack.last.value); // 10
console.log(stack.push(100));
console.log(stack.first.value); // 100
console.log(stack.last.value); // 10
console.log(stack.push(1000));
console.log(stack.first.value); // 1000
console.log(stack.last.value); // 10
var stack = new Stack();
console.log(stack.push(10)); // 1
console.log(stack.size); // 1
console.log(stack.push(100)); // 2
console.log(stack.size); // 2
console.log(stack.push(1000)); // 3
console.log(stack.size); // 3
console.log(stack.pop());
