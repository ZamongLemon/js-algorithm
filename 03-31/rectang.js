const solution = (board) => {
  let maxLen = 0;
  const xlen = board.length;
  const ylen = board[0].length;
  if (xlen < 2 || ylen < 2) {
    for (const row of board) {
      for (const cell of row) {
        if (cell === 1) return 1;
      }
    }
    return 0;
  }
  for (let i = 1; i < xlen; i++) {
    for (let j = 1; j < ylen; j++) {
      if (board[i][j] === 1) {
        let minSize = Math.min(
          board[i - 1][j],
          board[i][j - 1],
          board[i - 1][j - 1]
        );
        board[i][j] = minSize + 1;
        maxLen = Math.max(maxLen, board[i][j]);
      }
    }
  }
  return maxLen * maxLen;
};
console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);
console.log(
  solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
);
