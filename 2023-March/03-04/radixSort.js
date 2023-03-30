const radixSort = (arr) => {
  const most = mostDigits(arr);
  for (let i = 0; i < most; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    arr.forEach((element) => {
      buckets[getDigit(element, i)].push(element);
    });
    arr = [].concat(...buckets);
  }
  return arr;
};

const getDigit = (num, digit) => {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
};
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};
const mostDigits = (arr) => {
  let most = 0;
  arr.forEach((element) => {
    most = Math.max(most, digitCount(element));
  });
  return most;
};

console.log(radixSort([12, 1362, 15325, 166, 172]));
