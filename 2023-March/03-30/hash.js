const solution = (data, col, row_begin, row_end) => {
  data.sort((a, b) => {
    if (a[col - 1] - b[col - 1] !== 0) return a[col - 1] - b[col - 1];
    else return -a[0] + b[0];
  });
  let bit = null;
  for (let i = row_begin - 1; i <= row_end - 1; i++) {
    let s = 0;
    for (let j = 0; j < data[i].length; j++) s += data[i][j] % (i + 1);
    bit = !bit ? s : bit ^ s;
  }
  return bit;
};

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);
