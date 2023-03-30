const solution = (dirs) => {
  let routes = [];
  let last = [0, 0];
  const isIn = (newPosition) => {
    const [x, y] = [...newPosition];
    return x > 5 || x < -5 || y > 5 || y < -5 ? false : true;
  };
  for (let i = 0; i < dirs.length; i++) {
    let newPosition = [...last];
    const dx = [0, 1, 0, -1],
      dy = [1, 0, -1, 0];
    let moveTo = 0;
    switch (dirs[i]) {
      case "U":
        moveTo = 0;
        break;
      case "R":
        moveTo = 1;
        break;
      case "D":
        moveTo = 2;
        break;
      case "L":
        moveTo = 3;
        break;
    }
    newPosition = [newPosition[0] + dx[moveTo], newPosition[1] + dy[moveTo]];
    if (isIn(newPosition)) routes.push([[last], [newPosition]]);
    else newPosition = last;

    last = [...newPosition];
  }
  let visited = [];
  const isVisited = (currentRoute) => {
    for (let i = 0; i < visited.length; i++) {
      let el = visited[i];
      let [x, y] = [...el[0][0]];
      let [x2, y2] = [...el[1][0]];
      let [cx, cy] = [...currentRoute[0][0]];
      let [cx2, cy2] = [...currentRoute[1][0]];
      if (
        (x === cx && y === cy && x2 === cx2 && y2 === cy2) ||
        (x2 === cx && y2 === cy && x === cx2 && y === cy2)
      )
        return true;
    }
    return false;
  };

  routes.forEach((el) => {
    if (!isVisited(el)) visited.push(el);
  });

  return visited.length;
};

console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
