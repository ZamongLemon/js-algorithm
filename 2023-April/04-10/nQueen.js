const solution = (n) => {
  let answer = 0;
  const isAvailable = (board, row, col) => {
    for (let i = 0; i < row; i++) if (board[i][col]) return false;
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
      if (board[i][j]) return false;
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
      if (board[i][j]) return false;

    return true;
  };

  const solve = (board, row) => {
    if (row === n) {
      answer++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isAvailable(board, row, i)) {
        board[row][i] = 1;
        solve(board, row + 1);
        board[row][i] = 0;
      }
    }
  };

  const board = Array.from({ length: n }, () => Array(n).fill(0));
  solve(board, 0);

  return answer;
};
console.log(solution(4));
console.log(solution(5));
