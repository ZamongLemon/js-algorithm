const precomputeDivisors = (k, e) => {
  let divisors = new Array(e + 1).fill(0);
  let currentMax = 0,
    currentIdx;
  for (let i = 1; i <= e; i++) for (let j = i; j <= e; j += i) divisors[j] += 1;
  for (let i = e; i >= k; i--) {
    let value = divisors[i];
    if (currentMax <= value) {
      divisors[i] = i;
      currentIdx = i;
      currentMax = value;
    } else divisors[i] = currentIdx;
  }
  return divisors;
};

const solution = (e, starts) => {
  let divisors = precomputeDivisors(Math.min(...starts), e);
  return starts.map((e) => divisors[e]);
};

console.log(solution(8, [1, 3, 7]));
