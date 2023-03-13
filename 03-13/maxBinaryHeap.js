class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let compare;
    while (idx > 0) {
      compare = parseInt((idx - 1) / 2);
      if (this.values[idx] > this.values[compare])
        [this.values[idx], this.values[compare]] = [
          this.values[compare],
          this.values[idx]
        ];
      else break;
      idx = compare;
    }
  }
  extractMax() {
    let max = this.values[0];
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
          if (left > element) {
            swap = leftIdx;
          }
        }
        if (rightIdx < length) {
          right = this.values[rightIdx];
          if (
            (swap === null && right > element) ||
            (swap !== null && right > left)
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
    return max;
  }
}
let binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(3);
binaryHeap.insert(5);
binaryHeap.insert(7);
binaryHeap.insert(15);
binaryHeap.insert(22);
binaryHeap.insert(56);
binaryHeap.insert(53);
binaryHeap.extractMax();
binaryHeap.extractMax();
binaryHeap.extractMax();
binaryHeap.extractMax();
