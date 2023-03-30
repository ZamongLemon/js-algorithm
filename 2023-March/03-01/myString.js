function solution(my_string) {
  var answer = 0;
  let len = my_string.length;
  let tempNumber = "";
  let int_before = false;
  for (let i = 0; i < len; i++) {
    const word = my_string.charCodeAt(i);

    if (word >= 48 && word <= 57) {
      tempNumber += my_string.charAt(i);
      int_before = true;
    } else if (int_before) {
      answer += +tempNumber;
      tempNumber = "";
      int_before = false;
    }
    if (i === len - 1) {
      answer += +tempNumber;
    }
  }
  return answer;
}

console.log("answer" + solution("aAb1B2cC34oOp"));
console.log("answer" + solution("1a2b3c4d123Z5"));
console.log("answer" + solution("ab1000cde222fgh12"));
