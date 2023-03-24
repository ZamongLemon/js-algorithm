const solution = (board) => {
  let G, R;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") R = [i, j];
      if (board[i][j] === "G") G = [i, j];
      if (R && G) break;
    }
    if (R && G) break;
  }
  let current = [...R, 0];
  return move(board, current, G);
};
const move = (board, current, goal) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  queue = [[...current]];
  let visited = [];
  visited.push([...current]);
  let boardX = board.length,
    boardY = board[0].length;
  while (queue.length > 0) {
    let cr = queue.shift();
    let current = [...cr];
    if (cr[0] === goal[0] && cr[1] === goal[1]) return cr[2];
    for (let i = 0; i < 4; i++) {
      cr = [...current];
      while (isin(cr, boardX, boardY) && board[cr[0]][cr[1]] !== "D") {
        cr[0] += dx[i];
        cr[1] += dy[i];
      }
      cr[0] -= dx[i];
      cr[1] -= dy[i];

      if (
        !isvisited(visited, cr) &&
        !(cr[0] === current[0] && cr[1] === current[1])
      ) {
        let copied = [...cr];
        copied[2]++;
        visited.push(copied);
        queue.push(copied);
      }
    }
  }
  return -1;
};
const isvisited = (visited, current) => {
  for (const visit of visited)
    if (visit[0] === current[0] && visit[1] === current[1]) return true;

  return false;
};
const isin = (current, boardX, boardY) => {
  return (
    current[0] >= 0 &&
    current[0] < boardX &&
    current[1] >= 0 &&
    current[1] < boardY
  );
};
console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
console.log(solution([".D.R", "....", ".G..", "...D"]));
