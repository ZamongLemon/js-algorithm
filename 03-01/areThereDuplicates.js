const areThereDuplicates = (...args) => {
  const arr = [...args];
  const la = args.length;
  for (let i = 0; i < la - 1; i++) {
    for (let j = i + 1; j < la; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
};
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
