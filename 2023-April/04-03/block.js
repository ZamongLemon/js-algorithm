const primeOrDivisors = (n) => {
  if (n === 1) return 0;
  const isPrime = true;
  let tempArr = [];
  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
    if (n % i === 0) {
      if (n / i > 10000000) {
        tempArr.push(i);
        continue;
      } else return n / i;
    }
  }
  while (tempArr.length > 0) {
    const popped = tempArr.pop();
    if (popped < 10000000) return popped;
  }
  return 1;
};
const solution = (begin, end) => {
  let answer = [];
  for (let i = begin; i <= end; i++) answer.push(primeOrDivisors(i));
  return answer;
};

console.log(solution(100000000, 100005000));
