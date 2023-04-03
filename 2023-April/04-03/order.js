const solution = (info, query) => {
  const answer = [];
  const obj = {};

  info.forEach((i) => {
    const [language, group, career, food, score] = i.split(" ");
    const key = `${language}_${group}_${career}_${food}`;
    if (!obj[key]) obj[key] = [];
    obj[key].push(parseInt(score));
  });

  for (const key in obj) obj[key].sort((a, b) => a - b);

  query.forEach((element) => {
    const [language, group, career, food, score] = element
      .split(" ")
      .filter((el) => el !== "and");
    const keys = [];
    const lan = language === "-" ? ["cpp", "java", "python"] : [language];
    const grp = group === "-" ? ["backend", "frontend"] : [group];
    const car = career === "-" ? ["junior", "senior"] : [career];
    const fd = food === "-" ? ["chicken", "pizza"] : [food];
    lan.forEach((l) => {
      grp.forEach((g) => {
        car.forEach((c) => {
          fd.forEach((f) => {
            keys.push(`${l}_${g}_${c}_${f}`);
          });
        });
      });
    });
    let count = 0;
    const targetScore = parseInt(score);
    keys.forEach((key) => {
      if (!obj[key]) return;
      const index = findIdx(obj[key], targetScore);
      count += obj[key].length - index;
    });
    answer.push(count);
  });
  return answer;
};

const findIdx = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return left;
};
console.log(
  solution(
    [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);
