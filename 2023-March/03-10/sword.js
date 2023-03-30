const counterDiv = (n) => {
  const sqrtN = Math.sqrt(n);
  return [...Array(parseInt(sqrtN + 1)).keys()] // 0부터 sqrtN까지의 모든 수
    .filter((i) => n % i === 0) // n의 약수만 남김
    .reduce((count, i) => count + (n / i === i ? 1 : 2), 0); // 약수의 갯수 계산
};

const solution = (number, limit, power) => {
  /*   let sum = 0;
  for (let i = 1; i <= number; i++) {
    let num = counterDiv(i);
    if (num > limit) num = power;
    sum += num;
  }
  return sum; */
  return Array.from({ length: number }, (_, i) => counterDiv(i + 1))
    .map((num) => (num > limit ? power : num))
    .reduce((sum, num) => sum + num, 0);
};

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
