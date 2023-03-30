const solution = (want, number, discount) => {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    let obj = {};
    want.forEach((element, idx) => {
      obj[element] = number[idx];
    });
    for (let j = 0; j < 10; j++) {
      if (obj[discount[i + j]] && obj[discount[i + j]] > 0)
        obj[discount[i + j]]--;
      else break;
      if (j === 9) count++;
    }
  }
  return count;
};

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);
