const sameFrequency = (a, b) => {
  const astring = a.toString();
  const bstring = b.toString();

  const l1 = astring.length;
  const l2 = bstring.length;

  const res = {};
  if (l1 !== l2) return false;

  for (let i = 0; i < l1; i++) {
    res[astring[i]] ? (res[astring[i]] += 1) : (res[astring[i]] = 1);
    res[bstring[i]] ? (res[bstring[i]] -= 1) : (res[bstring[i]] = -1);
  }

  for (const key in res) {
    if (res[key] != 0) {
      return false;
    }
  }

  return true;
};
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
