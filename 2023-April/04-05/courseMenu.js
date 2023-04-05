const solution = (orders, course) => {
  const obj = {};
  const counter = (string, length) => {
    function combine(prefix, remainingString, remainingLength) {
      if (remainingLength === 0) {
        if (obj[prefix]) obj[prefix]++;
        else obj[prefix] = 1;
        return;
      }
      for (let i = 0; i < remainingString.length; i++) {
        combine(
          prefix + remainingString[i],
          remainingString.slice(i + 1),
          remainingLength - 1
        );
      }
    }
    combine("", string, length);
  };
  orders.forEach((element) => {
    for (const number of course) {
      if (number <= element.length) {
        element = element.split("").sort().join("");
        counter(element, number);
      }
    }
  });
  for (const key in obj) if (obj[key] === 1) delete obj[key];
  return maxKeys(obj);
};

const maxKeys = (obj) => {
  const maxValue = {};
  const maxKey = {};
  for (const [key, value] of Object.entries(obj)) {
    const keyLength = key.length;
    if (!maxValue[keyLength] || maxValue[keyLength] < value) {
      maxValue[keyLength] = value;
      maxKey[keyLength] = [key];
    } else if (maxValue[keyLength] === value) maxKey[keyLength].push(key);
  }
  const sortedKeys = [];
  for (const keyArray of Object.values(maxKey)) sortedKeys.push(...keyArray);

  return sortedKeys.sort();
};

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
