const solution = (players, callings) => {
  const order = new Map(players.map((player, idx) => [player, idx]));
  callings.forEach((calling) => {
    const idx = order.get(calling);
    if (idx > 0) {
      const prevPlayer = players[idx - 1];
      players[idx - 1] = calling;
      players[idx] = prevPlayer;
      order.set(calling, idx - 1);
      order.set(prevPlayer, idx);
    }
  });

  return players;
};
console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
