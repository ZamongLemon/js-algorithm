const solution = (numbers, target) => {
  return dfs(numbers, target, 0, 0);
};

const dfs = (numbers, target, idx, sum) => {
  if (idx === numbers.length) return sum === target ? 1 : 0;
  return (
    dfs(numbers, target, idx + 1, sum + numbers[idx]) +
    dfs(numbers, target, idx + 1, sum - numbers[idx])
  );
};

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
