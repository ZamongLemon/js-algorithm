const solution = (maps) => {
  let S, E, L;
  maps.forEach((element, idx) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === "S") S = [idx, i];
      if (element[i] === "E") E = [idx, i];
      if (element[i] === "L") L = [idx, i];
      if (S && E && L) break;
    }
  });
  let toLev = move(maps, [...S, 0], L);
  if (toLev === -1) return -1;
  let levToEnd = move(maps, [...L, 0], E);
  return levToEnd !== -1 ? toLev + levToEnd : -1;
};

const move = (board, start, goal) => {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const boardX = board.length;
  const boardY = board[0].length;
  let queue = [[...start]];
  let visited = [[...start]];
  while (queue.length > 0) {
    let cr = queue.shift();
    let current = [...cr];
    if (cr[0] === goal[0] && cr[1] === goal[1]) return cr[2];
    for (let i = 0; i < 4; i++) {
      cr = [...current];
      cr[0] += dx[i];
      cr[1] += dy[i];
      if (!isin(cr, boardX, boardY) || board[cr[0]][cr[1]] === "X") continue;
      else if (!isvisited(visited, cr)) {
        cr[2]++;
        visited.push(cr);
        queue.push(cr);
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
console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
console.log(solution(["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"]));
