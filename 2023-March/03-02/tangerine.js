function solution(k, tangerine) {
  var answer = 0;
  const obj = {};
  const mand = [];
  tangerine.forEach((element) => {
    if (!obj[element]) obj[element] = [element, 1];
    else {
      obj[element] = [element, (obj[element][1] += 1)];
    }
  });
  for (const key in obj) {
    mand.push(obj[key]);
  }
  mand.sort((a, b) => b[1] - a[1]);
  let sum = 0;
  for (let i = 0; i < mand.length; i++) {
    sum += mand[i][1];
    answer++;
    if (sum >= k) break;
  }
  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [3, 1, 1, 1, 2, 1, 2, 2]));
