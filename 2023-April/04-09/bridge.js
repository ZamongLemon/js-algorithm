/* const find = (parent, x) => {
  if (parent[x] !== x) parent[x] = find(parent, parent[x]);
  return parent[x];
};

const union = (parent, a, b) => {
  const rootA = find(parent, a);
  const rootB = find(parent, b);
  parent[rootB] = rootA;
};

const solution = (n, costs) => {
  const parent = Array(n)
    .fill(0)
    .map((_, index) => index);

  costs.sort((a, b) => a[2] - b[2]);
  costs.forEach((element) => {
    console.log(element);
  });x 
  let totalCost = 0;
  for (const [a, b, cost] of costs) {
    if (find(parent, a) !== find(parent, b)) {
      union(parent, a, b);
      totalCost += cost;
    }
  }

  return totalCost;
}; */

const solution = (n, costs) => {
  const adj = Array.from(Array(n), () => Array(n).fill(0));
  costs.forEach(([from, to, cost]) => {
    adj[from][to] = cost;
    adj[to][from] = cost;
  });

  const visited = Array(n).fill(false);
  const dist = Array(n).fill(Infinity);

  dist[0] = 0;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    let minCost = Infinity;
    let minVertex;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && dist[j] < minCost) {
        minCost = dist[j];
        minVertex = j;
      }
    }
    visited[minVertex] = true;
    answer += minCost;
    for (let j = 0; j < n; j++)
      if (!visited[j] && adj[minVertex][j] && adj[minVertex][j] < dist[j])
        dist[j] = adj[minVertex][j];
  }

  return answer;
};
console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8]
  ])
);
