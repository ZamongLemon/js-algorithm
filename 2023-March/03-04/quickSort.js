const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);

    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
};

function pivot(arr, start = 0, end = arr.length + 1) {
  var pivot = arr[start];
  var swapIdx = start;
  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];

  return swapIdx;
}
console.log(quickSort([26, 23, 27, 44, 17, 47, 39, 42, 43, 1]));
