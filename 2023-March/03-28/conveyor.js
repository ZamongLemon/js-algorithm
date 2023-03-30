const solution = (order) => {
  let stack = Array.from({ length: order[0] }, (_, idx) => idx + 1);
  let result = 0;
  let current = order[0] + 1;
  for (let i = 0; i < order.length; i++) {
    element = order[i];
    while (true) {
      if (stack[stack.length - 1] === element) {
        stack.pop();
        result++;
        break;
      } else if (current === element) {
        current++;
        result++;
        break;
      } else if (element < current && stack[stack.length - 1] !== element) {
        return result;
      } else {
        stack.push(current);
        current++;
      }
    }
  }
  return result;
};
console.log(solution([4, 3, 1, 2, 5]));
console.log(solution([5, 4, 3, 2, 1]));
