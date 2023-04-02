const solution = (word) => {
  const vowel = ["A", "E", "I", "O", "U"];
  return word
    .split("")
    .reduce(
      (answer, value, index) =>
        answer + deformation(index) * vowel.indexOf(value) + 1,
      0
    );
};
const deformation = (idx) => {
  return Array.from({ length: 5 - idx }, (_, i) => 5 ** i).reduce(
    (a, b) => a + b
  );
};

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));
