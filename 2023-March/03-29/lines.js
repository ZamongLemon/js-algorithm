const solution = (n, k) => {
  let factorialArr = [1];
  let digit = [];
  let answer = [];
  let numArr = Array.from({ length: n }, (_, idx) => idx + 1);
  k = k - 1;
  for (let i = 2; i <= n; i++) factorialArr.push(factorialArr[i - 2] * i);
  for (let j = factorialArr.length - 1; j >= 0; j--) {
    if (factorialArr[j] <= k) {
      digit.push(parseInt(k / factorialArr[j]));
      k = k % factorialArr[j];
    } else digit.push(0);
  }
  if (k !== 0) digit[digit.length - 1] = k;
  for (let i = 1; i < digit.length; i++) {
    answer.push(numArr[digit[i]]);
    numArr.splice(digit[i], 1);
  }
  answer.push(numArr[0]);
  return answer;
};

console.log(solution(3, 5));
console.log(solution(4, 2));
