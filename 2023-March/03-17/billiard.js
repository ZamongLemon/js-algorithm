const solution = (m, n, startX, startY, balls) => {
  const [x1, y1] = [startX, startY];
  let answer = [];

  balls.forEach((element) => {
    let [x2, y2] = [element[0], element[1]];
    let min1 = Infinity,
      min2 = Infinity;
    //가로벽
    if (x1 !== x2)
      min1 =
        n < y1 + y2
          ? Math.pow(2 * n - y1 - y2, 2) + Math.pow(x2 - x1, 2)
          : Math.pow(y1 + y2, 2) + Math.pow(x2 - x1, 2);
    else if (y1 > y2) min1 = Math.pow(2 * n - y1 - y2, 2);
    else min1 = Math.pow(y1 + y2, 2);

    //세로벽
    if (y1 !== y2)
      min2 =
        m < x1 + x2
          ? Math.pow(2 * m - x1 - x2, 2) + Math.pow(y2 - y1, 2)
          : Math.pow(x1 + x2, 2) + Math.pow(y2 - y1, 2);
    else if (x1 > x2) min2 = Math.pow(2 * m - x1 - x2, 2);
    else min2 = Math.pow(x1 + x2, 2);
    answer.push(Math.min(min1, min2));
  });
  return answer;
};

console.log(
  solution(10, 10, 3, 7, [
    [7, 7],
    [2, 7],
    [7, 3]
  ])
);
