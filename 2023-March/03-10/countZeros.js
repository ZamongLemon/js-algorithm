const countZeroes = (arr) => {
  let left = 0,
    right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return arr.length - Math.max(left, mid, right);
};
console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
