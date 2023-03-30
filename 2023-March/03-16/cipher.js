const solution = (string, skip, index) => {
  skip = skip.split("");
  let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  alphabets = alphabets.filter((alphabet) => !skip.includes(alphabet));
  let obj = {};
  let len = alphabets.length;
  alphabets.forEach((el, idx) => {
    obj[el] = (idx + index) % len;
  });
  let answer = "";
  for (let i = 0; i < string.length; i++) {
    answer += alphabets[obj[string.charAt(i)]];
  }
  return answer;
};

console.log(solution("aukks", "wbqd", 5));
