const findRotatedIndex = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) return mid;
    if (arr[left] > arr[right]) {
      if (arr[mid] >= arr[left]) {
        if (num >= arr[left] && num < arr[mid]) right = mid - 1;
        else left = mid + 1;
      } else {
        if (num > arr[mid] && num <= arr[right]) left = mid + 1;
        else right = mid - 1;
      }
    } else {
      if (num < arr[mid]) right = mid - 1;
      else left = mid + 1;
    }
  }
  return -1;
};
console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
