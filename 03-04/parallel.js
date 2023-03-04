const getVector = (a, b) => {
  const [a1, a2] = a;
  const [b1, b2] = b;
  return [Math.abs(b1 - a1), Math.abs(b2 - a2)];
};

const solution = (dots) => {
  /*   const result = arr.some(([x, y]) => x === 0 || y === 0);
    if(result) return 0;
  for (let i = 0; i < 2; i++) {
    for (let j = i + 1; j < 4; j++) {
      if (arr[i][0] * arr[j][1] === arr[i][1] * arr[j][0]) return 1;
      if(i ==1 && j ==3) break;
    }
  } */

  for (let i = 0; i < 3; i++) {
    vA = getVector(dots[i % 4], dots[(i + 1) % 4]);
    vB = getVector(dots[(i + 2) % 4], dots[(i + 3) % 4]);
    console.log(vA, vB);
  }

  return 0;
};
console.log(
  solution(
    [
      [1, 4],
      [9, 2],
      [3, 8],
      [11, 6]
    ],
    1
  )
);
console.log(
  solution(
    [
      [3, 5],
      [4, 1],
      [2, 4],
      [5, 10]
    ],
    0
  )
);
