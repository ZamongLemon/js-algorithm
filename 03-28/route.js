const solution = (rectangle, characterX, characterY, itemX, itemY) => {
  // 출발점을 두기 위해 배열 정렬
  rectangle = rectangle.sort((a, b) => {
    return a[0] - b[0] || a[1] - b[1];
  });
  let lines = [];
  let xMax = 0,
    yMax = 0;
  // 루트셋팅
  rectangle.forEach((element) => {
    let [a, b, c, d] = [...element];
    [a, b, c, d] = [2 * a, 2 * b, 2 * c, 2 * d];
    xMax = Math.max(xMax, c);
    yMax = Math.max(yMax, d);
    const [dotA, dotB, dotC, dotD] = [
      [a, b],
      [c, b],
      [a, d],
      [c, d],
    ];
    lines.push([dotA, dotB], [dotA, dotC], [dotB, dotD], [dotC, dotD]);
  });

  // board에 true로 표시
  let board = Array.from({ length: xMax }, () => Array(yMax).fill(false));
  for (let i = 0; i < lines.length; i++) {
    let [[x1, y1], [x2, y2]] = [...lines[i]];
    if (x1 === x2) for (let j = y1; j <= y2; j++) board[x1 - 2][j - 2] = true;
    else for (let k = x1; k <= x2; k++) board[k - 2][y1 - 2] = true;
  }
  //방향설정 (반시계일경우) 우, 중, 좌 순서로 있으면 있는대로 이동
  let direction = [1, 0];
  let current = [lines[0][0][0] - 2, lines[0][0][1] - 2];
  count = 0;
  const setDirection = (i, direction) => {
    switch (i) {
      case 0:
        return [direction[1], -direction[0]];
      case 1:
        return direction;
      case 2:
        return [-direction[1], direction[0]];
    }
  };
  let itemIdx, characterIdx;
  // 처음에 한번 그냥돌리고 초기지점까지 while
  do {
    for (let i = 0; i < 3; i++) {
      let tempDirection = setDirection(i, direction);
      let [tempX, tempY] = [
        current[0] + tempDirection[0],
        current[1] + tempDirection[1],
      ];
      if (
        tempX >= 0 &&
        tempX < xMax &&
        tempY >= 0 &&
        tempY < yMax &&
        board[tempX][tempY]
      ) {
        if (tempX === (itemX - 1) * 2 && tempY === (itemY - 1) * 2)
          itemIdx = count;
        if (tempX === (characterX - 1) * 2 && tempY === (characterY - 1) * 2)
          characterIdx = count;
        current = [tempX, tempY];
        direction = tempDirection;
        count++;
        break;
      }
    }
  } while (
    current[0] !== lines[0][0][0] - 2 ||
    current[1] !== lines[0][0][1] - 2
  );
  let route = Math.abs(characterIdx - itemIdx) / 2;
  return Math.min(route, count / 2 - route);
};

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
);
console.log(
  solution(
    [
      [1, 1, 8, 4],
      [2, 2, 4, 9],
      [3, 6, 9, 8],
      [6, 3, 7, 7],
    ],
    9,
    7,
    6,
    1
  )
);
console.log(solution([[1, 1, 5, 7]], 1, 1, 4, 7));
console.log(
  solution(
    [
      [2, 1, 7, 5],
      [6, 4, 10, 10],
    ],
    3,
    1,
    7,
    10
  )
);
console.log(
  solution(
    [
      [2, 2, 5, 5],
      [1, 3, 6, 4],
      [3, 1, 4, 6],
    ],
    1,
    4,
    6,
    3
  )
);
