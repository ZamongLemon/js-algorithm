const solution = (maps) => {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const x = maps.length,
    y = maps[0].length;

  let visited = Array.from({ length: x }, () => Array(y).fill(false));
  visited[0][0] = true;

  const queue = [[0, 0, 1]];
  let idx = 0;

  while (idx < queue.length) {
    const [cx, cy, depth] = queue[idx++];
    if (cx === x - 1 && cy === y - 1) return depth;
    for (const [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < x &&
        ny < y &&
        maps[nx][ny] === 1 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, depth + 1]);
      }
    }
  }
  return -1;
};
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
