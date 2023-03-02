const solution = (t, p) => {
  let answer = 0;
  const tlen = t.length;
  const plen = p.length;
  const pInt = parseInt(p);
  for (let i = 0; i <= tlen - plen; i++) {
    if (parseInt(t.slice(i, i + plen)) <= pInt) {
      answer++;
    }
  }
  return answer;
};

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));
