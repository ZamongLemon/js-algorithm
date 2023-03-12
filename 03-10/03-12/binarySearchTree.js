class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      this.length++;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          this.length++;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          this.length++;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this.root;
    while (true) {
      if (current === null) return undefined;
      if (value === current.value) return current;
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
    }
  }

  remove(value) {
    if (!this.root) return null;

    let current = this.root;
    let last = null;
    let left = false;
    while (true) {
      if (current === null) {
        break;
      }
      if (value === current.value) {
        break;
      }
      if (value < current.value) {
        last = current;
        current = current.left;
        left = true;
      } else if (value > current.value) {
        last = current;
        current = current.right;
        left = false;
      }
    }

    if (!current) return null;

    if (!current.left && !current.right) {
      if (!last) this.root = null;
      else if (left) last.left = null;
      else last.right = null;
    } else if (!current.left && current.right) {
      if (!last) this.root = current.right;
      else if (left) last.left = current.right;
      else last.right = current.right;
    } else if (current.left && !current.right) {
      if (!last) this.root = current.left;
      else if (left) last.left = current.left;
      else last.right = current.left;
    } else {
      let minRight = current.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      let temp = minRight.value;
      this.remove(temp);
      current.value = temp;
    }
    return current;
  }

  depthFirstSearchPreOrder() {
    var data = [];
    var current = this.root;
    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return data;
  }
  depthFirstSearchInOrder() {
    var data = [];
    var current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return data;
  }
  depthFirstSearchPostOrder() {
    var data = [];
    var current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };

    traverse(current);
    return data;
  }
  breadthFirstSearch() {
    let data = [],
      queue = [];
    let current = this.root;
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      data.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return data;
  }
  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) return undefined;
    let largest = this.root;
    let second = null;
    while (largest.right) {
      second = largest;
      largest = largest.right;
    }
    if (largest.left) {
      second = largest.left;
      while (second.right) {
        second = second.right;
      }
    }
    return second;
  }
  isBalanced() {
    function checkBalanced(node) {
      if (!node) return { balanced: true, height: -1 };
      const left = checkBalanced(node.left);
      if (!left.balanced) return { balanced: false, height: 0 };
      const right = checkBalanced(node.right);
      if (!right.balanced) return { balanced: false, height: 0 };
      const height = Math.max(left.height, right.height) + 1;
      const balanced = Math.abs(left.height - right.height) <= 1;
      return { balanced, height };
    }
    return checkBalanced(this.root).balanced;
  }
}
var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(10)
  .insert(5)
  .insert(3)
  .insert(1)
  .insert(7)
  .insert(9)
  .insert(8)
  .insert(15)
  .insert(13)
  .insert(18)
  .insert(6);

console.log(binarySearchTree.isBalanced());
