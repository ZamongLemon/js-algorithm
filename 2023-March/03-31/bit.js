const solution = (n, l, r) => {
  let startArr = transform(l - 1, n);
  let endArr = transform(r, n);
  let points = [0, 1, 2, 2, 3];
  let sum = 0;

  for (let i = n; i >= 0; i--) {
    sum += points[endArr[i]] * Math.pow(4, i);
    if (endArr[i] === 2) break;
  }
  for (let i = n; i >= 0; i--) {
    sum -= points[startArr[i]] * Math.pow(4, i);
    if (startArr[i] === 2) break;
  }
  return sum;
};
const transform = (k, n) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(k % 5);
    k = parseInt(k / 5);
  }
  return arr;
};

console.log(solution(3, 1, 51));
