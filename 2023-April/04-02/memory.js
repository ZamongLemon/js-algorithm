const solution = (name, yearing, photo) => {
  const obj = {};
  name.forEach((element, idx) => {
    obj[element] = yearing[idx];
  });
  let answer = [];
  photo.forEach((element) => {
    let sum = 0;
    element.forEach((el) => {
      if (obj[el]) sum += obj[el];
    });
    answer.push(sum);
  });
  return answer;
};
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
console.log(
  solution(
    ["kali", "mari", "don"],
    [11, 1, 55],
    [
      ["kali", "mari", "don"],
      ["pony", "tom", "teddy"],
      ["con", "mona", "don"],
    ]
  )
);
console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
  )
);
