const solution = (s) => {
  let slen = s.length;
  let firstword = undefined,
    counta = 1,
    countb = 0,
    count = 0;
  for (let i = 0; i < slen; i++) {
    if (!firstword) firstword = s.charAt(i);
    else {
      if (s.charAt(i) === firstword) counta++;
      else countb++;

      if (counta === countb) {
        count++;
        counta = 1;
        countb = 0;
        firstword = undefined;
      }
    }
  }
  if (firstword) count++;
  return count;
};

console.log(solution("banana"));
console.log(solution("abracadabra"));
console.log(solution("aaabbaccccabba"));
