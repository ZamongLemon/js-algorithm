const solution = (places) => {
  const tracking = (matrix, current) => {
    const moves = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    let [startX, startY] = current;
    const inBounds = (x, y) => {
      return x >= 0 && x < 5 && y >= 0 && y < 5;
    };
    for (let i = 0; i < moves.length; i++) {
      const [moveX1, moveY1] = moves[i];
      const newX1 = startX + moveX1;
      const newY1 = startY + moveY1;
      if (!inBounds(newX1, newY1)) continue;
      if (matrix[newX1][newY1] === "P") return false;
      for (let j = i + 3; j < i + 7; j++) {
        const [moveX2, moveY2] = moves[j % 4];
        const newX2 = newX1 + moveX2;
        const newY2 = newY1 + moveY2;
        if (!inBounds(newX2, newY2)) continue;
        if (matrix[newX2][newY2] === "P" && matrix[newX1][newY1] === "O")
          return false;
      }
    }

    return true;
  };
  answer = [];
  places.forEach((room) => {
    let distanced = true;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (room[i][j] === "P") {
          if (!tracking(room, [i, j])) {
            distanced = false;
            break;
          }
        }
      }
      if (!distanced) break;
    }
    answer.push(distanced ? 1 : 0);
  });
  return answer;
};
/* console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
); */
console.log(solution([["POOPO", "OOOOO", "OOOXP", "OPOPX", "OOOOO"]]));
