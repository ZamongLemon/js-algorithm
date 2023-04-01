const solution = (tickets) => {
  const adj = {};
  tickets.forEach(([departure, arrival]) => {
    if (!adj[departure]) adj[departure] = [arrival];
    else adj[departure].push(arrival);
  });
  for (let key in adj) adj[key].sort();
  const path = ["ICN"];
  const dfs = (curr, cnt) => {
    if (cnt === tickets.length) return true;
    if (!adj[curr] || adj[curr].length === 0) return false;
    for (let i = 0; i < adj[curr].length; i++) {
      const next = adj[curr][i];
      adj[curr].splice(i, 1);
      path.push(next);
      if (dfs(next, cnt + 1)) return true;
      adj[curr].splice(i, 0, next);
      path.pop();
    }
    return false;
  };
  dfs("ICN", 0);
  return path;
};
/* console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"]
  ])
); */
console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"]
  ])
);
