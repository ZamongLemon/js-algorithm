const solution = (A, B) => {
  A.sort((a, b) => {
    return a - b;
  });
  B.sort((a, b) => {
    return a - b;
  });
  let Bidx = 0;
  let counter = 0;
  A.forEach((element) => {
    while (Bidx < B.length && element >= B[Bidx]) Bidx++;
    if (Bidx < B.length) {
      counter++;
      Bidx++;
    }
  });
  return counter;
};

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
//console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));
