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
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  deleteMinValue() {
    let parent = null;
    let currentNode = this.root;
    while (currentNode.left) {
      parent = currentNode;
      currentNode = currentNode.left;
    }
    if (parent) {
      parent.left = currentNode.right;
    } else {
      this.root = currentNode.right;
    }
    return currentNode.value;
  }
}

function solution(n, k, enemy) {
  if (k >= enemy.length) return enemy.length;

  let monsterSum = 0;
  let bst = new BinarySearchTree();
  let kSum = 0;

  for (let i = 0; i < enemy.length; i++) {
    let value = enemy[i];
    monsterSum += value;
    bst.insert(value);
    kSum += value;
    if (i >= k) kSum -= bst.deleteMinValue();
    if (monsterSum >= n) {
      if (kSum + n >= monsterSum) continue;
      else return i;
    }
  }
  return enemy.length;
}

/* 
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
    this.maxValue = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      this.maxValue = value;
      return this;
    }
    this.maxValue +=value;
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  deleteMinValue() {
    let parent = null;
    let currentNode = this.root;
    while (currentNode.left) {
      parent = currentNode;
      currentNode = currentNode.left;
    }
    if (parent) {
      parent.left = currentNode.right;
    } else {
      this.root = currentNode.right;
    }
    return currentNode.value;
  }
}

function solution(n, k, enemy) {
  if (k >= enemy.length) return enemy.length;

  let monsterSum = 0;
  let bst = new BinarySearchTree();

  for (let i = 0; i < enemy.length; i++) {
    monsterSum += enemy[i];
    bst.insert(enemy[i]);
    if (i >= k) {
      const deletedValue = bst.deleteMinValue();
      bst.maxValue -= deletedValue;
    }

    if (monsterSum >= n) {
      const kSum = bst.maxValue;
      if (kSum + n >= monsterSum) continue;
      else return i;
    }
  }
  return enemy.length;
} */
console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
//console.log(solution(2, 4, [3, 3, 3, 3]));
