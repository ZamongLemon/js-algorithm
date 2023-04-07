const solution = (ability) => {
  const dfs = (idx, selected) => {
    if (idx === ability[0].length) {
      let cur_sum = selected.reduce(
        (acc, val, idx) => acc + ability[val][idx],
        0
      );
      max_sum = Math.max(max_sum, cur_sum);
      return;
    }
    for (let i = 0; i < ability.length; i++) {
      if (!selected.includes(i)) {
        selected[idx] = i;
        dfs(idx + 1, selected);
        selected[idx] = -1;
      }
    }
  };
  let max_sum = 0;
  dfs(0, Array(ability[0].length).fill(-1));
  return max_sum;
};
console.log(
  solution([
    [40, 10, 10],
    [20, 5, 0],
    [30, 30, 30],
    [70, 0, 70],
    [100, 100, 100],
  ])
);
console.log(
  solution([
    [20, 30],
    [30, 20],
    [20, 30],
  ])
);
