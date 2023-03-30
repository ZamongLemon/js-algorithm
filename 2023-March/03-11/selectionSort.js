function selectionSort(arr, comp) {
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
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (comp(arr[j], arr[min]) < 0) {
        min = j;
      }
    }
    if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}
