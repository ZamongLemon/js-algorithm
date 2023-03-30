const flatten = (arr) => {
  let answer = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      answer.push(...flatten(element));
    } else {
      answer.push(element);
    }
  });
  return answer;
};
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
