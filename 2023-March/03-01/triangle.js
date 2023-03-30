const solution = (sides) => {
  var arr = sides.sort((a, b) => a - b);
  values = [];
  console.log(arr);
  let case1 = arr[1] - arr[0];
  for (let i = case1 + 1; i <= arr[1]; i++) {
    values.push(i);
  }
  let case2 = arr[1] + arr[0];
  for (let j = case2 - 1; j > arr[1]; j--) {
    values.push(j);
  }
  return values.length;
};

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
