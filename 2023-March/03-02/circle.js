const solution = (elements) => {
  const len = elements.length;
  const setAnswer = new Set();
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < len; j++) {
      let sum = 0;
      for (let k = j; k < j + i; k++) {
        sum += elements[k % len];
      }
      setAnswer.add(sum);
    }
  }

  return setAnswer.size;
};

console.log(solution([7, 9, 1, 1, 4]));
