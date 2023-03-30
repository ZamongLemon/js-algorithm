function solution(s, n) {
  const len = s.length;
  const str = [];
  for (let i = 0; i < len; i++) {
    const ch = s.charCodeAt(i);
    if (ch >= 65 && ch <= 90) {
      str.push(String.fromCharCode(((ch - 65 + n) % 26) + 65));
    } else if (ch >= 97 && ch <= 122) {
      str.push(String.fromCharCode(((ch - 97 + n) % 26) + 97));
    } else {
      str.push(s.charAt(i));
    }
  }
  return str.join("");
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
