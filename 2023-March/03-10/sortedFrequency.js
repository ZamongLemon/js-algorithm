const sortedFrequency = (arr, num) => {
  let left = 0,
    right = arr.length - 1;
  let leftPoint;
  while (left <= right) {
    leftPoint = parseInt((left + right) / 2);
    if (arr[leftPoint] >= num) {
      right = leftPoint - 1;
    } else {
      left = leftPoint + 1;
    }
  }
  leftPoint = Math.max(left, leftPoint, right);
  left = 0;
  right = arr.length - 1;
  let rightPoint;
  while (left <= right) {
    rightPoint = parseInt((left + right) / 2);
    if (arr[rightPoint] <= num) {
      left = rightPoint + 1;
    } else {
      right = rightPoint - 1;
    }
  }
  rightPoint = Math.max(left, rightPoint, right);
  const answer = rightPoint - leftPoint === 0 ? -1 : rightPoint - leftPoint;
  return answer;
};

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
