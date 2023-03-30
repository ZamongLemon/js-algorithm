function solution(my_string) {
  let arr = my_string.split(" ");
  var answer = +arr[0];

  for (let i = 2; i < arr.length; i += 2) {
    answer += arr[i - 1] === "-" ? -arr[i] : +arr[i];
  }
  return answer;
}

console.log(solution("3 + 4"));
console.log(solution("3 - 4"));
