const solution = (number, k) => {
  const stack = [];
  let count = k;
  for (const num of number) {
    while (count > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      count--;
    }
    stack.push(num);
  }
  return stack.slice(0, number.length - k).join("");
};

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
