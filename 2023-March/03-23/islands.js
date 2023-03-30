const solution = (board) => {
  let visited = [];
  let days = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== "X" && !isvisited(visited, [i, j])) {
        let [day, traversed] = move(board, [i, j]);
        visited.push(...traversed);
        days.push(day);
      }
    }
  }

  if (visited.length === 0) return [-1];
  return days.sort((a, b) => a - b);
};
const move = (board, current) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let queue = [[...current]];
  let visited = [[...current]];
  let boardX = board.length,
    boardY = board[0].length;
  let days = +board[current[0]][current[1]];
  while (queue.length > 0) {
    let cr = queue.shift();
    let current = [...cr];
    for (let i = 0; i < 4; i++) {
      cr = [...current];
      cr[0] += dx[i];
      cr[1] += dy[i];
      if (!isin(cr, boardX, boardY) || board[cr[0]][cr[1]] === "X") continue;
      else if (!isvisited(visited, cr)) {
        days += +board[cr[0]][cr[1]];
        visited.push(cr);
        queue.push(cr);
      }
    }
  }

  return [days, visited];
};
const isvisited = (visited, current) => {
  return visited.some((v) => v[0] === current[0] && v[1] === current[1]);
};

const isin = (current, boardX, boardY) => {
  return (
    current[0] >= 0 &&
    current[0] < boardX &&
    current[1] >= 0 &&
    current[1] < boardY
  );
};

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));
//console.log(solution(["XXX", "XXX", "XXX"]));
