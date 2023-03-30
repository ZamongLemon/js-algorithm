const solution = (input_string) => {
  obj = {};
  for (let i = 0; i < input_string.length; i++) {
    if (!obj[input_string[i]]) obj[input_string[i]] = [i];
    else obj[input_string[i]].push(i);
  }
  let answer = [];
  for (const key in obj) {
    const arr = obj[key];
    if (arr.length > 1) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] > 1) {
          answer.push(key);
          break;
        }
      }
    }
  }
  if (answer.length === 0) return "N";
  return answer.sort().join("");
};

console.log(solution("edeaaabbccd"));
console.log(solution("eeddee"));
console.log(solution("string"));
console.log(solution("zbzbz"));
