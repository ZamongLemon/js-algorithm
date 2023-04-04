const solution = (n, t, m, p) => {
  let answer = "";
  let num = 0,
    currentTurn = 0;
  maxTurn = t * m;
  while (answer.length < maxTurn) {
    let nNum = num.toString(n).toUpperCase();
    for (let i = 0; i < nNum.length; i++) {
      if (currentTurn % m === p - 1) answer += nNum[i];
      currentTurn++;
    }
    num++;
  }

  return answer.slice(0, t);
};
console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
console.log(solution(16, 16, 2, 2));
