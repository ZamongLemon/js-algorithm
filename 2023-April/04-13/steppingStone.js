const solution = (distance, rocks, n) => {
  rocks.sort((a, b) => {
    return a - b;
  });
  let k = [];
  k.push(rocks[0]);
  for (let i = 0; i < rocks.length - 1; i++) {
    k.push(rocks[i + 1] - rocks[i]);
  }
  k.push(distance - rocks[rocks.length - 1]);
};

console.log(solution(25, [2, 14, 11, 21, 17], 2));

const minDistances = (sortedRocks) => {};
