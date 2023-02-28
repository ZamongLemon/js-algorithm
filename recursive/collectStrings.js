const collectStrings = (obj) => {
  var answer = [];
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "string") {
      answer.push(value);
    } else if (typeof value === "object") {
      answer = answer.concat(collectStrings(obj[key]));
    }
  }
  return answer;
};
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
