const dfs = (node, map, visited) => {
  visited[node] = true;
  let count = 1;
  if (map[node]) {
    for (const next of map[node]) {
      if (!visited[next]) {
        count += dfs(next, map, visited);
      }
    }
  }
  return count;
};
const solution = (n, wires) => {
  let subLen = Infinity;

  for (let i = 0; i < wires.length; i++) {
    let map = Array.from({ length: n + 1 }, () => []);

    for (let j = 0; j < wires.length; j++) {
      if (i !== j) {
        map[wires[j][0]].push(wires[j][1]);
        map[wires[j][1]].push(wires[j][0]);
      }
    }
    let visited = Array(n + 1).fill(false);
    let k = 1;
    for (k; i < map.length; k++) if (map[k][0]) break;
    let count = dfs(map[k][0], map, visited);
    subLen = Math.min(Math.abs(2 * count - n), subLen);
  }
  return subLen;
};
console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
