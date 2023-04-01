const solution = (k, ranges) => {
  let arr = [k];
  let area = [];
  while (k > 1) {
    if (k % 2 === 0) k = k / 2;
    else k = 3 * k + 1;
    let last = arr[arr.length - 1];
    area.push((last + k) / 2);
    arr.push(k);
  }
  let areaLen = area.length;
  let answer = [];
  for (let i = 0; i < ranges.length; i++) {
    let [a, b] = ranges[i];
    if (a - b === areaLen) {
      answer.push(0.0);
      continue;
    }
    if (a - b > areaLen) {
      answer.push(-1.0);
      continue;
    }
    let sum = 0;
    for (let j = a; j < areaLen + b; j++) sum += area[j];
    answer.push(sum);
    6;
  }

  return answer;
};
console.log(
  solution(5, [
    [0, 0],
    [0, -1],
    [2, -3],
    [3, -3]
  ])
);
