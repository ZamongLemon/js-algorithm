function solution(str) {
  let [x, y] = [0, 0];
  const array = str.split(" ").filter((element) => element != "+");
  array.forEach((element) => {
    if (element.slice(-1) === "x") {
      if (element.length === 1) x++;
      else {
        x += +element.slice(0, -1);
      }
    } else {
      y += +element;
    }
  });
  let res = "";
  if (!x && !y) res = 0;
  else if (!x) res = y.toString();
  else {
    res = (x != 1 ? x : "") + "x";
    res += y != 0 ? " + " + y : "";
  }
  return res.toString();
}

console.log(solution("3x + 7 + x"));
console.log(solution("x + x + x"));
