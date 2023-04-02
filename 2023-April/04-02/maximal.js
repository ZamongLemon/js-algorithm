const solution = (expression) => {
  const arr = expression.split(/(\d+|[-+*])/g).filter((el) => el !== "");
  let operators = ["+", "*", "-"];
  let visited = [false, false, false];
  let max = -Infinity;

  const calc = (arr, operator) => {
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (operator === arr[i]) {
        let result;
        switch (operator) {
          case "-":
            result = Number(arr[i - 1]) - Number(arr[i + 1]);
            break;
          case "*":
            result = Number(arr[i - 1]) * Number(arr[i + 1]);
            break;
          case "+":
            result = Number(arr[i - 1]) + Number(arr[i + 1]);
            break;
        }
        [arr[i - 1], arr[i], arr[i + 1]] = [null, null, result];
      }
    }
    return arr.filter((el) => el !== null);
  };

  const dfs = (depth, order) => {
    if (depth === 3) {
      let newArr = [...arr];
      order.forEach((operator) => {
        newArr = calc(newArr, operator);
      });
      max = Math.max(max, Math.abs(newArr[0]));
      return;
    }

    for (let i = 0; i < 3; i++) {
      if (!visited[i]) {
        visited[i] = true;
        order.push(operators[i]);
        dfs(depth + 1, order);
        order.pop();
        visited[i] = false;
      }
    }
  };

  dfs(0, []);
  return max;
};
console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));
