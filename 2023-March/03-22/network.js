const solution = (n, computers) => {
  let traversed = [];
  let visited = [];
  let answer = 0;
  for (let j = 0; j < n; j++) {
    if (!traversed.includes(j)) {
      let queue = [j];
      visited = [];
      while (queue.length !== 0) {
        let popped = queue.pop();
        visited.push(popped);
        for (let i = 0; i < computers[popped].length; i++) {
          if (
            i !== popped &&
            computers[popped][i] === 1 &&
            !visited.includes(i)
          )
            queue.push(i);
        }
      }
      traversed = [...traversed, ...visited];
      answer++;
    }
  }
  return answer;
};
console.log(
  solution(4, [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ])
);
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
