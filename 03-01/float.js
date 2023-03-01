function solution(a, b) {
  const getarr = (n) => {
    var answer = [];

    while (true) {
      for (let i = 2; i < Infinity; i++) {
        if (n % i == 0) {
          n = n / i;
          answer.push(i);
          break;
        }
      }
      if (n == 1) break;
    }
    return answer;
  };

  const arr1 = getarr(a);
  const arr2 = getarr(b);
  const arr2len = arr2.length;
  arr1.forEach((element) => {
    for (let i = 0; i < arr2len; i++) if (element === arr2[i]) arr2[i] = 1;
  });
  let answer = 1;
  arr2.forEach((element) => {
    if (element !== 2 && element !== 5 && element !== 1) {
      answer = 2;
      return;
    }
  });
  return answer;
}

console.log(solution(7, 20));
console.log(solution(11, 22));
console.log(solution(12, 21));
