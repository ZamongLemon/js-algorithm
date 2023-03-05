class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = poppedNode.prev;
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;

    let shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = shiftedNode.next;
      newHead.prev = null;
      this.head = newHead;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  trave() {
    let node = this.head;
    while (node) {
      console.log(node);
      console.log("prev");
      console.log(node.prev);
      console.log("next");
      console.log(node.next);
      node = node.next;
    }
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (this.length === 0) return false;

    let leftOrRight = this.length / 2 <= idx ? false : true;
    if (leftOrRight) {
      let node = this.head;
      for (let i = 1; i <= idx; i++) {
        node = node.next;
      }
      return node;
    } else {
      let node = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        node = node.prev;
      }
      return node;
    }
  }
  set(idx, value) {
    var node = this.get(idx);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }
  insert(idx, value) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(value);
    if (idx === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let prevNode, nextNode;

    prevNode = this.get(idx - 1);
    nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let node;
    let leftOrRight = this.length / 2 <= idx ? false : true;
    if (leftOrRight) {
      node = this.head;
      for (let i = 1; i <= idx; i++) {
        node = node.next;
      }
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        node = node.prev;
      }
    }

    let prevNode = node.prev;
    let nextNode = node.next;
    node.next = null;
    node.prev = null;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return node;
  }
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      node.prev = next;
      prev = node;
      node = next;
    }
    return this;
  }
}

var doublyLinkedList = new DoublyLinkedList();

console.log(doublyLinkedList.push(5));
console.log(doublyLinkedList.push(10));
console.log(doublyLinkedList.push(15));
console.log(doublyLinkedList.push(20));

console.log(doublyLinkedList.reverse());
console.log(doublyLinkedList.trave());
