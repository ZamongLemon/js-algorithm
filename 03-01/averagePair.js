const averagePair = (arr, avg) => {
  const al = arr.length;
  if (al <= 1) return false;

  for (let i = 0; i < al - 1; i++) {
    for (let j = i + 1; j < al; j++) {
      if (arr[i] + arr[j] === avg * 2) {
        return true;
      }
    }
  }
  return false;
};
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
