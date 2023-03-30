class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BFSTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (current.value > value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else current = current.left;
        } else if (current.value < value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else current = current.right;
        }
      }
    }
  }
  conatins(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      if (current.value > value) current = current.left;
      else if (current.value < value) current = current.right;
    }
    return false;
  }
  BFS() {
    let data = [],
      queue = [],
      node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}
let tree = new BFSTree();
console.log(tree.insert(10));
tree.insert(12);
tree.insert(15);
tree.insert(-1);
tree.insert(5);
tree.insert(-2);
console.log(tree.insert(10));

console.log(tree.BFS());
