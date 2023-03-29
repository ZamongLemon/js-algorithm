const solution = (topping) => {
  let answer = 0;
  const len = topping.length;
  let left = {};
  let right = {};
  topping.forEach((element) => {
    if (!right[element]) right[element] = 1;
    else right[element]++;
  });
  let rightCount = Object.keys(right).length;
  let leftCount = 0;
  for (let i = 0; i < len - 1; i++) {
    const element = topping[i];
    if (!left[element]) {
      left[element] = 1;
      leftCount++;
    } else left[element]++;
    right[element]--;
    if (right[element] === 0) {
      delete right[element];
      rightCount--;
    }
    if (leftCount === rightCount) answer++;
  }
  return answer;
};

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));

console.log(solution([1, 2, 3, 1, 4]));
