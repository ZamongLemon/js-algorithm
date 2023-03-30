const insertionSort = (arr, comp) => {
  if (!comp) {
    comp = function (a, b) {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      }
      return 0;
    };
  }
  for (let i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && comp(arr[j], currentVal) > 0; j--)
      arr[j + 1] = arr[j];
    arr[j + 1] = currentVal;
  }

  return arr;
};
function oldestToYoungest(a, b) {
  return b - a;
}

console.log(insertionSort([2, 1, 9, 76, 4], oldestToYoungest));
