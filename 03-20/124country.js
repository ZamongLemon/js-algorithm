const solution = (n) => {
  let k = "";
  if (n <= 3) return n === 3 ? "4" : n.toString();
  while (n >= 1) {
    switch (n % 3) {
      case 1:
        k = "1" + k;
        n = parseInt(n / 3);
        break;
      case 2:
        k = "2" + k;
        n = parseInt(n / 3);
        break;
      case 0:
        k = "4" + k;
        n = parseInt(n / 3) - 1;
        break;
    }
  }
  return k;
};

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));
console.log(solution(9));
console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));
console.log(solution(14));
