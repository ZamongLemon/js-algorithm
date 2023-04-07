const solution = (n, m, hole) => {
  const map = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  hole.forEach(([x, y]) => {
    map[x - 1][y - 1] = 1;
  });
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const bfs = () => {
    const queue = [[0, 0, 0, true, false]];
    const visited = Array.from({ length: n }, () =>
      Array.from({ length: m }, () => Array(2).fill(false))
    );
    while (queue.length > 0) {
      const [x, y, time, canJump, canDashedRoute] = queue.shift();
      if (x === n - 1 && y === m - 1)
        return time - (canJump && !canDashedRoute ? 1 : 0);

      for (let i = 0; i < 4; i++) {
        for (let jump = 0; jump <= (canJump ? 1 : 0); jump++) {
          const nx = x + dx[i] * (1 + jump);
          const ny = y + dy[i] * (1 + jump);
          const nextCanJump = canJump && jump === 0;
          const nextCanDashedRoute = canDashedRoute || jump === 1;

          if (
            nx >= 0 &&
            nx < n &&
            ny >= 0 &&
            ny < m &&
            !visited[nx][ny][nextCanJump ? 1 : 0] &&
            map[nx][ny] !== 1
          ) {
            visited[nx][ny][nextCanJump ? 1 : 0] = true;
            queue.push([nx, ny, time + 1, nextCanJump, nextCanDashedRoute]);
          }
        }
      }
    }

    return -1;
  };

  return bfs();
};

console.log(
  solution(4, 4, [
    [2, 3],
    [3, 3],
  ])
);
console.log(
  solution(5, 4, [
    [1, 4],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 3],
    [4, 1],
    [4, 3],
    [5, 3],
  ])
);
