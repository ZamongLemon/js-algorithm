const oneWord = (s) => {
  var answer = [];
  const len = s.length;
  const arr = {};
  for (let i = 0; i < len; i++) {
    if (arr[s.charAt(i)]) {
      arr[s.charAt(i)]++;
    } else {
      arr[s.charAt(i)] = 1;
    }
  }
  for (const key in arr) {
    if (arr[key] == 1) {
      answer.push(key);
    }
  }
  answer = answer.sort();
  return answer.join("");
};
console.log(oneWord("abcabcadc"));
console.log(oneWord("abdc"));
console.log(oneWord("hello"));
