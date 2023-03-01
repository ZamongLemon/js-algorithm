function solution(keyinput, board) {
  var answer = [0, 0];
  const maxX = (board[0] - 1) / 2;
  const maxY = (board[1] - 1) / 2;
  const values = { left: [-1, 0], right: [1, 0], up: [0, 1], down: [0, -1] };
  for (const keys of keyinput) {
    const moveTo = values[keys];
    answer[0] += moveTo[0];
    answer[1] += moveTo[1];
    if (Math.abs(answer[0]) > maxX) answer[0] -= moveTo[0];
    if (Math.abs(answer[1]) > maxY) answer[1] -= moveTo[1];
  }

  return answer;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));

console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
