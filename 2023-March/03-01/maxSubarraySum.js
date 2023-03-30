const maxSubarraySum = (arr, sublength) => {
  if (arr.length < sublength) return null;

  let sum = 0;
  for (let i = 0; i < sublength; i++) {
    sum += arr[i];
  }
  let sumMax = sum;
  for (let i = sublength; i < arr.length - sublength + 2; i++) {
    sum += arr[i] - arr[i - sublength];
    if (sum > sumMax) sumMax = sum;
  }
  return sumMax;
};
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
