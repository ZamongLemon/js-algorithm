const solution = (x, y) => {
  let dupA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let dupB = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let xlen = x.length;
  let ylen = y.length;
  for (let i = 0; i < xlen; i++) dupA[x.charAt(i)]++;
  for (let j = 0; j < ylen; j++) dupB[y.charAt(j)]++;
  let answer = "";
  for (let k = 9; k >= 0; k--) {
    const times = dupA[k] > 0 ? Math.min(dupA[k], dupB[k]) : 0;
    answer += k.toString().repeat(times);
  }
  if (answer.length === 0) answer = "-1";
  if (+answer === 0) answer = "0";
  return answer;
};
console.log(solution("100", "2345"));
console.log(solution("100", "203045"));
console.log(solution("100", "123450"));
console.log(solution("12321", "42531"));
console.log(solution("5525", "1255"));
