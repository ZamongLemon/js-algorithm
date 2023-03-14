const solution = (arr) => {
  let count = 0;
  let stack = [];

  arr.forEach((element) => {
    stack.push(element);
    if (stack.length >= 4 && stack.slice(-4).join("") === "1231") {
      stack.splice(-4);
      count++;
    }
  });
  return count;
};
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
