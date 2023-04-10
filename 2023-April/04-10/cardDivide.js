const solution = (arrayA, arrayB) => {
  const alen = arrayA.length,
    blen = arrayB.length;
  arrayA.sort((a, b) => {
    return a - b;
  });
  arrayB.sort((a, b) => {
    return a - b;
  });
  const calcMax = (side) => {
    const first = side ? arrayA : arrayB;
    const second = side ? arrayB : arrayA;
    let divisors = getDivisors(side ? arrayA[0] : arrayB[0]);
    const firstlen = side ? alen : blen;
    const secondlen = side ? blen : alen;
    while (divisors.length > 1) {
      let checkF = false,
        checkS = false;
      const div = divisors.pop();
      for (let i = 0; i < firstlen; i++) {
        if (first[i] % div !== 0) {
          checkF = true;
          break;
        }
      }
      if (checkF) continue;
      for (let i = 0; i < secondlen; i++) {
        if (second[i] % div === 0) {
          checkS = true;
          break;
        }
      }
      if (checkS) continue;
      return div;
    }
    return 0;
  };
  return Math.max(calcMax(true), calcMax(false));
};
const getDivisors = (n) => {
  let a = Math.sqrt(n);
  let divisors = [];
  for (let i = 1; i <= a; i++) {
    if (n % i === 0) {
      divisors.push(i);
      divisors.push(n / i);
    }
  }
  return divisors.sort((a, b) => a - b);
}; /* 
console.log(solution([10, 17], [5, 20])); */
//console.log(solution([10, 20], [5, 17]));
console.log(solution([14, 35, 119], [18, 30, 102]));
