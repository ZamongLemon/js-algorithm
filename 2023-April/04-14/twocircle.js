const solution = (a, b) => {
  answer = b - a + 1;
  for (let i = 1; i < b; i++) {
    let aY = Math.sqrt(a ** 2 - i ** 2);
    aY = !aY ? 0 : Math.ceil(aY);
    let bY = Math.floor(Math.sqrt(b ** 2 - i ** 2));
    answer += aY > 0 ? bY - aY + 1 : bY;
  }
  return answer * 4;
};
console.log(solution(2, 3));
