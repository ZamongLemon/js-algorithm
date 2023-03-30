function pivot(arr, comp, start = 0, end = arr.length - 1) {
  if (!comp) {
    comp = function (a, b) {
      return a - b;
    };
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (comp(arr[i], pivot) < 0) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }
  [arr[0], arr[swapIdx]] = [arr[swapIdx], arr[0]];
  return swapIdx;
}

function quickSort(arr, comp, left = 0, right = arr.length + 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, comp, left, right);

    quickSort(arr, comp, left, pivotIdx - 1);
    quickSort(arr, comp, pivotIdx + 1, right);
  }

  return arr;
}
