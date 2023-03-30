function solution(s) {
  let arr = s.split(" ");
  let len = arr.length;
  let sum = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (arr[i] == "Z") {
      i--;
    } else {
      sum += +arr[i];
    }
  }
  return sum;
}

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
console.log(solution("10 Z 20 Z"));
console.log(solution("-1 -2 -3 Z"));
