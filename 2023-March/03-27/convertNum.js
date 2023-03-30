const solution = (x, y, n) => {
  const visited = new Set();
  const queue = [{ value: x, depth: 0 }];
  let start = 0;
  let end = 1;
  while (start < end) {
    const { value, depth } = queue[start++];
    if (value === y) return depth;
    const nextValues = [value + n, value * 2, value * 3];
    for (const nextValue of nextValues) {
      if (nextValue <= y && !visited.has(nextValue)) {
        visited.add(nextValue);
        queue[end++] = { value: nextValue, depth: depth + 1 };
      }
    }
  }
  return -1;
};
console.log(solution(10, 40, 5));
console.log(solution(10, 40, 30));
console.log(solution(2, 5, 4));
