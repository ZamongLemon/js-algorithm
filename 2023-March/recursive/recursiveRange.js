const recursiveRange = (a) => {
  if (a == 0) return 0;
  return a + recursiveRange(a - 1);
};

console.log(recursiveRange(6));
console.log(recursiveRange(10));
