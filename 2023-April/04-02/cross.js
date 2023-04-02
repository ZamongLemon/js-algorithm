const point = (lineA, lineB) => {
  const [a, b, e] = lineA;
  const [c, d, f] = lineB;
  const div = a * d - b * c;
  if (div === 0) return null;

  const x = (b * f - e * d) / div;
  const y = (e * c - a * f) / div;
  if (Number.isInteger(x) && Number.isInteger(y))
    return [(b * f - e * d) / div, (e * c - a * f) / div];

  return null;
};
const solution = (line) => {
  let [xMin, xMax, yMin, yMax] = [Infinity, -Infinity, Infinity, -Infinity];
  let dots = [];
  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      let dot = point(line[i], line[j]);
      if (dot) {
        dots.push(dot);

        xMin = Math.min(xMin, dot[0]);
        xMax = Math.max(xMax, dot[0]);
        yMin = Math.min(yMin, dot[1]);
        yMax = Math.max(yMax, dot[1]);
      }
    }
  }

  const width = xMax - xMin + 1;
  const height = yMax - yMin + 1;
  let answer = Array.from({ length: height }, () => ".".repeat(width));

  dots.forEach((dot) => {
    const x = dot[0] - xMin;
    const y = yMax - dot[1];
    answer[y] = answer[y].substring(0, x) + "*" + answer[y].substring(x + 1);
  });

  return answer;
};

console.log(
  solution([
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
  ])
);
/* console.log(
  solution([
    [0, 1, -1],
    [1, 0, -1],
    [1, 0, 1],
  ])
);
console.log(
  solution([
    [1, -1, 0],
    [2, -1, 0],
  ])
);
console.log(
  solution([
    [1, -1, 0],
    [2, -1, 0],
    [4, -1, 0],
  ])
);
 */
