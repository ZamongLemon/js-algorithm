const solution = (n) => {
  let field = Array.from({ length: n }, () => Array(n).fill(0));
  const dirX = [1, 0, -1],
    dirY = [0, 1, -1];
  let direction = 0,
    moveCounter = n,
    current = 1,
    [cx, cy] = [-1, 0];
  while (moveCounter > 0) {
    for (let i = 1; i <= moveCounter; i++) {
      cx += dirX[direction];
      cy += dirY[direction];
      field[cx][cy] = current++;
    }
    moveCounter--;
    direction = ++direction % 3;
  }
  return field.flat().filter((value) => value !== 0);
};

/* console.log(solution(2));
  console.log(solution(3)); */
console.log(solution(4));
console.log(solution(5));
