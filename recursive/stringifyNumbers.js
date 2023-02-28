const stringifyNumbers = (obj) => {
  var answer = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "object" && !Array.isArray(value)) {
      answer[key] = stringifyNumbers(value);
    } else if (Number.isInteger(value)) {
      answer[key] = value.toString();
    } else {
      answer[key] = obj[key];
    }
  }
  return answer;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

let obj2 = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66",
    },
  },
};

console.log(stringifyNumbers(obj));
console.log(stringifyNumbers(obj2));
