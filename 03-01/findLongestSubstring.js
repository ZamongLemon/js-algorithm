const findLongestSubstring = (str) => {
  if (str.length == 0) return 0;
  const sl = str.length;
  let sublength = 0;
  let start = 0;
  let obj = {};
  for (let i = 0; i < sl; i++) {
    let char = str[i];
    if (obj[char]) {
      start = Math.max(start, obj[char]);
    }
    sublength = Math.max(sublength, i - start + 1);
    obj[char] = i + 1;
  }
  return sublength;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
