function constructNote(a, b) {
  let words = {};
  for (let i = 0; i < b.length; i++) {
    if (!words[b.charAt(i)]) words[b.charAt(i)] = 1;
    else words[b.charAt(i)]++;
  }
  for (let j = 0; j < a.length; j++) {
    if (!words[a.charAt(j)] || words[a.charAt(j)] === 0) return false;
    else words[a.charAt(j)]--;
  }
  return true;
}
console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
