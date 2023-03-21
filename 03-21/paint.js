const solution = (n, m, section) => {
  let count = 0;
  let lastpainted = 0;
  for (let i = 0; i < section.length; i++) {
    if (lastpainted < section[i]) {
      count++;
      lastpainted = section[i] + m - 1;
    }
  }
  return count;
};

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));
