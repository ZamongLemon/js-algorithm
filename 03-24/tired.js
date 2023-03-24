const solution = (k, dungeons) => {
  let max = 0;
  const go = (leftK, visitedCount, visited) => {
    max = Math.max(max, visitedCount);
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i]) {
        const [need, use] = dungeons[i];
        if (leftK >= need) {
          visited[i] = true;
          go(leftK - use, visitedCount + 1, visited);
          visited[i] = false;
        }
      }
    }
  };
  go(k, 0, Array(dungeons.length).fill(false));
  return max;
};
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
