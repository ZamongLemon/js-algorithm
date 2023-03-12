function findAllDuplicates(arr) {
  let obj = {};
  arr.forEach((element) => {
    if (!obj[element]) obj[element] = 1;
    else obj[element]++;
  });
  let answer = [];
  for (const key in obj) {
    if (obj[key] > 1) answer.push(parseInt(key));
  }
  return answer;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
// array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1
