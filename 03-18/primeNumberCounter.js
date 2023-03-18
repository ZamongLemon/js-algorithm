const solution = (n, k) => {
  let str = n.toString(k).split("0");
  let answer = [];

  str.forEach((element) => {
    let num = element !== "" ? +element : null;
    if (num && (answer.includes(num) || isPrime(num))) answer.push(num);
  });

  return answer.length;
};

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;

  const sqrtN = Math.sqrt(n);
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(solution(437674, 3));
console.log(solution(110011, 10));
