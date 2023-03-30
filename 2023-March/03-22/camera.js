const solution = (routes) => {
  routes = routes.sort((a, b) => a[0] - b[0]);
  let answer = 0;
  let tempMin = -Infinity,
    tempMax = Infinity;
  routes.forEach((element) => {
    if (element[0] > tempMin) tempMin = element[0];
    if (element[1] < tempMax) tempMax = element[1];
    if (tempMax < tempMin) {
      tempMax = element[1];
      tempMin = element[0];
      answer++;
    }
  });
  return answer;
};

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
