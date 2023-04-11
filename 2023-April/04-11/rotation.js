const solution = (rows, columns, queries) => {
  if (queries.length === 1) return [(queries[0][0] - 1) * rows + queries[0][1]];
  let count = 1;
  const arr = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => count++)
  );
  const dirX = [0, 1, 0, -1];
  const dirY = [1, 0, -1, 0];
  const rotation = (x1, y1, x2, y2) => {
    let xlen = x2 - x1,
      ylen = y2 - y1;
    let cx = x1 - 1,
      cy = y1 - 1;
    let box = arr[cx][cy];
    let currentMin = box;
    for (let i = 0; i < 4; i++) {
      let limit = i % 2 == 0 ? ylen : xlen;
      for (let j = 0; j < limit; j++) {
        cx += dirX[i];
        cy += dirY[i];
        let temp = arr[cx][cy];
        arr[cx][cy] = box;
        box = temp;
        currentMin = Math.min(currentMin, box);
      }
    }
    return currentMin;
  };
  let answer = [];
  queries.forEach((element) => {
    answer.push(rotation(...element));
  });
  return answer;
};

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);

console.log(
  solution(3, 3, [
    [1, 1, 2, 2],
    [1, 2, 2, 3],
    [2, 1, 3, 2],
    [2, 2, 3, 3],
  ])
);
console.log(solution(100, 97, [[1, 1, 100, 97]]));
