const isSubsequence = (a, b) => {
  if (a.length === 0) return true;
  if (b.length === 0) return false;

  if (a[0] === b[0]) return isSubsequence(a.slice(1), b.slice(1));

  return isSubsequence(a, b.slice(1));
};
console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
