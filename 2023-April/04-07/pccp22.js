/* const solution = (ability, number) => {
  if (ability.length === 2)
    return (ability[0] + ability[1]) * Math.pow(2, number);

  ability.sort((a, b) => a - b);
  let tempSum = ability[0] + ability[1];
  ability[1] = tempSum;
  ability[0] = tempSum;

  for (let i = 1; i < number; i++) {
    let minidx = 0;

    for (let j = 2; j < ability.length; j++) {
      if (ability[0] < ability[j]) break;
      else minidx = ability[minidx] < ability[j] ? minidx : j;
    }
    [ability[0], ability[minidx]] = [ability[minidx], ability[0]];
    for (let j = 2; j < ability.length; j++) {
      if (ability[1] < ability[j]) break;
      else minidx = ability[minidx] < ability[j] ? minidx : j;
    }
    [ability[1], ability[minidx]] = [ability[minidx], ability[1]];
    const tempVal = ability[0] + ability[1];
    ability[0] = tempVal;
    ability[1] = tempVal;
  }
  return ability.reduce((acc, cur) => acc + cur, 0);
};
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    return this.heap[0];
  }

  pop() {
    const item = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return item;
  }

  push(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;

    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);

      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }

      index = smallerChildIndex;
    }
  }

  size() {
    return this.heap.length;
  }

  reduce(callback, initialValue) {
    return this.heap.reduce(callback, initialValue);
  }
}

const solution = (ability, number) => {
  if (ability.length === 2) {
    return (ability[0] + ability[1]) * 2 ** number;
  }

  let minHeap = new MinHeap();
  ability.forEach((value) => minHeap.push(value));

  for (let i = 0; i < number; i++) {
    const min1 = minHeap.pop();
    const min2 = minHeap.pop();
    minHeap.push(min1 + min2);
    minHeap.push(min1 + min2);
  }

  return minHeap.reduce((acc, cur) => acc + cur, 0);
};
