const isitRight = (str) => {
  const strlen = str.length;
  if (strlen % 2 === 1) return 0;

  const value = /(\[\]|\{\}|\(\))/g;
  let answer = 0;
  for (let i = 0; i < strlen / 2; i++) {
    if (str.length == 0) {
      answer = 1;
      break;
    }
    str = str.replace(value, "");
  }
  return answer;
};

const solution = (str) => {
  let answer = 0;
  if (str.length % 2 === 1) return 0;
  const sl = str.length;
  for (let i = 0; i < sl; i++) {
    answer += isitRight(str);
    str = str.slice(-1) + str.slice(0, -1);
  }
  return answer;
};

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));
