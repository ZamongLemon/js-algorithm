function solution(A) {
  var answer = 0;
  let value = 1;
  const findthree = (n) => {
    let value = false;
    while (n > 1) {
      if (n % 10 === 3) {
        value = true;
        break;
      }
      n = Math.floor(n / 10);
    }
    return value;
  };
  while (value <= A) {
    if (answer % 3 == 0) {
      answer++;
    } else if (findthree(answer)) {
      answer++;
    } else {
      value++;
      answer++;
    }
  }
  answer--;
  return answer;
}
console.log(solution(15));
console.log(solution(40));
