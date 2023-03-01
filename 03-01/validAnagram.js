const validAnagram = (str1, str2) => {
  const l1 = str1.length;
  const l2 = str2.length;
  if (l1 !== l2) {
    return false;
  }
  if (l1 === 0 && l2 === 0) return true;

  const res = {};
  for (let i = 0; i < l1; i++) {
    var a = str1[i];
    var b = str2[i];
    res[a] ? (res[a] += 1) : (res[a] = 1);
    res[b] ? (res[b] -= 1) : (res[b] = -1);
  }
  const k = res.length;
  for (const key in res) {
    if (res[key] != 0) {
      return false;
    }
  }
  return true;
};
