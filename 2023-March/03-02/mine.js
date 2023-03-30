const solution = (arr) => {
  arr.map((a, l_idx) => {
    a.forEach((element, s_idx) => {
      if (element === 1) {
        if (l_idx > 0) {
          if (s_idx > 0 && arr[l_idx - 1][s_idx - 1] !== 1)
            arr[l_idx - 1][s_idx - 1] = 2;

          if (arr[l_idx - 1][s_idx] !== 1) arr[l_idx - 1][s_idx] = 2;

          if (s_idx + 1 <= a.length && arr[l_idx - 1][s_idx + 1] !== 1)
            arr[l_idx - 1][s_idx + 1] = 2;
        }

        if (s_idx > 0 && arr[l_idx][s_idx - 1] !== 1) arr[l_idx][s_idx - 1] = 2;

        if (s_idx + 1 <= a.length && arr[l_idx][s_idx + 1] !== 1)
          arr[l_idx][s_idx + 1] = 2;

        if (l_idx + 1 < arr.length) {
          if (s_idx > 0 && arr[l_idx + 1][s_idx - 1] !== 1)
            arr[l_idx + 1][s_idx - 1] = 2;

          if (arr[l_idx + 1][s_idx] !== 1) arr[l_idx + 1][s_idx] = 2;

          if (s_idx + 1 <= a.length && arr[l_idx + 1][s_idx + 1] !== 1)
            arr[l_idx + 1][s_idx + 1] = 2;
        }
      }
    });
  });
  let answer = 0;
  arr.forEach((element) => {
    element.forEach((selement) => {
      if (selement === 0) answer++;
    });
  });
  return answer;
};

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
);
console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);
