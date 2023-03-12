function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums) {
  if (nums.length === 0) return 0;
  return Math.max(...nums.map(digitCount));
}
function radixSort(nums) {
  const most = mostDigits(nums);
  for (var i = 0; i < most; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    nums.forEach((element) => {
      buckets[getDigit(element, i)].push(element);
    });
    console.log(buckets);

    nums = [].concat(...buckets);
  }
  return nums;
}
/* console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12] */
console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
/* console.log(
  radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])
); */
// [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
