const solution = (k, d) => {
  let a = k * Math.sqrt((d * d) / (2 * k * k));
  let count = 0;
  let half = 0;
  for (let i = k; i <= d; i += k) {
    if (i <= a) half += parseInt(i / k);
    else half += parseInt(Math.sqrt(d * d - i * i) / k) + 1;
  }
  count += 2 * half;
  count += parseInt(a / k) + 1;

  return count;
};
//console.log(solution(2, 4));
console.log(solution(1, 5));
