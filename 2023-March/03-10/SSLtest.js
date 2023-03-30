class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newtail = this.head;
    while (current.next) {
      newtail = current;
      current = current.next;
    }
    this.tail = newtail;
    this.tail.next = null;
    let val = current.value;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return val;
  }
  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    this.length--;
    this.head = current.next;
    if (this.length === 0) this.tail = null;
    return current.value;
  }
  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    }
    newHead.next = this.head;
    this.head = newHead;
    this.length++;

    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      if (current.next) current = current.next;
    }

    return current;
  }
  set(idx, value) {
    var foundNode = this.get(idx);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }
  insert(idx, value) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(value);
    if (idx === 0) return !!this.unshift(value);
    var preNode = this.get(idx - 1);
    var newNode = new Node(value);
    newNode.next = this.get(idx);
    preNode.next = newNode;
    this.length++;

    return true;
  }
  remove(idx) {
    if (idx === 0) return this.shift;
    if (idx === this.length - 1) return this.pop();
    if (idx < 0 || idx >= this.length) return undefined;

    var prevNode = this.get(idx - 1);
    var removed = prevNode.next;

    prevNode.next = removed.next;
    this.length--;

    return removed;
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
      prev = node;
      node = next;
    }
    return this;
  }

  rotate(num) {
    let push = num > 0 ? num % this.length : this.length + (num % this.length);
    if (push === 0) return this;

    let newHead, newTail;
    let fnode = this.head;
    this.tail.next = this.head;
    for (let i = 0; i < push - 1; i++) {
      fnode = fnode.next;
    }
    newTail = fnode;
    newHead = fnode.next;
    this.tail = newTail;
    this.tail.next = null;
    this.head = newHead;

    return this;
  }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(0).push(1).push(2).push(3).push(4);

singlyLinkedList.rotate(1000);
singlyLinkedList.traverse();
