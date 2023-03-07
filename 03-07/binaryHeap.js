class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
    console.log(this.values);
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx !== 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent < element) {
        [this.values[parentIdx], this.values[idx]] = [element, parent];
        idx = parentIdx;
      } else break;
    }
  }
  sinkDown() {}

  extractMax() {
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
    console.log(this.values);
    return k;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(999);
heap.insert(3);
heap.insert(44);
heap.insert(15);
console.log(heap.extractMax());
