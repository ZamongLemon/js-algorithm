function solution(dots) {
  const Xs = dots.map((dot) => dot[0]);
  const Ys = dots.map((dot) => dot[1]);
  const X = Math.min(...Xs) - Math.max(...Xs);
  const Y = Math.min(...Ys) - Math.max(...Ys);
  return X * Y;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2]
  ])
);
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1]
  ])
);
