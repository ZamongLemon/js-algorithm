const solution = (k, score) => {
  let list = [];
  let last = [];
  score.forEach((element) => {
    list.push(element);
    list.sort((a, b) => a - b);
    if (list.length > k) list.shift();
    last.push(list[0]);
  });
  return last;
};
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
