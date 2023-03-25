const solution = (park, routes) => {
  const height = park.length,
    width = park[0].length;
  const dx = [-1, 1, -1, 1];
  let S;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (park[i][j] === "S") S = [i, j];
      if (S) break;
    }
    if (S) break;
  }
  const obj = { N: 0, S: 1, W: 2, E: 3 };
  routes.forEach((element) => {
    let [forward, move] = element.split(" ");
    move = +move;
    if (obj[forward] <= 1) {
      x = S[0];
      if (!isIn([S[0] + dx[obj[forward]] * move, S[1]], height, width)) {
      } else {
        for (let i = 0; i < move; i++) {
          x += dx[obj[forward]];
          if (park[x][S[1]] === "X") {
            x = S[0];
            break;
          }
        }
        S[0] = x;
      }
    } else {
      y = S[1];
      if (!isIn([S[0], S[1] + dx[obj[forward]] * move], height, width)) {
      } else {
        for (let i = 0; i < move; i++) {
          y += dx[obj[forward]];
          if (park[S[0]][y] === "X") {
            y = S[1];
            break;
          }
        }
        S[1] = y;
      }
    }
  });

  return S;
};
const isIn = (current, height, width) => {
  return (
    current[0] >= 0 &&
    current[1] >= 0 &&
    current[0] < height &&
    current[1] < width
  );
};

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
