function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]])
      answer[stack.pop()] = numbers[i];
    stack.push(i);
  }

  return answer;
}
console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
