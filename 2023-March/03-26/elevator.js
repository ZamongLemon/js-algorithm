const solution = (storey) => {
  storey = storey.toString().split("").map(Number);
  let answer = 0;
  for (let i = storey.length - 1; i > 0; i--) {
    if (storey[i] === 10) {
      storey[i - 1]++;
      storey[i] = 0;
    }
    if (storey[i] > 5 || (storey[i] === 5 && storey[i - 1] >= 5)) {
      storey[i - 1]++;
      answer += 10 - storey[i];
    } else answer += storey[i];
  }
  if (storey[0] === 10) answer += 1;
  else if (storey[0] > 5) answer += 11 - storey[0];
  else answer += storey[0];

  return answer;
};
