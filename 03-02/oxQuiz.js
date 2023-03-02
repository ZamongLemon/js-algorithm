function calculate(left) {
  const leftArr = left.split(" ");
  let result = +leftArr[0];
  const operator = leftArr[1];
  const num = +leftArr[2];
  switch (operator) {
    case "+":
      result += +num;
      break;
    case "-":
      result -= +num;
      break;
  }
  return result;
}

function solution(quiz) {
  const answer = [];
  quiz.forEach((element) => {
    const [left, right] = element.split("=");
    if (calculate(left) == +right.trim()) answer.push("O");
    else answer.push("X");
  });
  return answer;
}

console.log(solution(["0 - -5 = 5", "5 + 6 = 11"]));
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
);
