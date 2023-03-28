function solution(n, lighthouse) {
  const turnedOn = new Array(n + 1).fill(false);
  let answer = 0;

  while (lighthouse.length) {
    const map = new Array(n + 1).fill().map(() => []);
    for (const el of lighthouse) {
      map[el[0]].push(el[1]);
      map[el[1]].push(el[0]);
    }

    for (const routes of map) {
      if (routes.length === 1) {
        const [next] = routes;
        if (!turnedOn[next]) {
          turnedOn[next] = true;
          answer += map[next].length > 1 ? 1 : 0.5;
        }
      }
    }

    lighthouse = lighthouse.filter((el) => {
      return !turnedOn[el[0]] && !turnedOn[el[1]];
    });
  }

  return answer;
}
console.log(
  solution(8, [
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [5, 6],
    [5, 7],
    [5, 8],
  ])
);
console.log(
  solution(10, [
    [4, 1],
    [5, 1],
    [5, 6],
    [7, 6],
    [1, 2],
    [1, 3],
    [6, 8],
    [2, 9],
    [9, 10],
  ])
);
