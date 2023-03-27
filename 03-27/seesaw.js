const solution = (weights) => {
  let obj = {};
  weights.forEach((element) => {
    if (!obj[element]) obj[element] = 1;
    else obj[element]++;
  });
  let keySet = Object.keys(obj);
  let set = 0;
  for (let i = 0; i < keySet.length - 1; i++) {
    let times = (obj[keySet[i]] * (obj[keySet[i]] - 1)) / 2;
    set += times;
    for (let j = i + 1; j < keySet.length; j++) {
      let times2 = obj[keySet[j]];
      let first = +keySet[i],
        second = +keySet[j];
      if (
        first === second ||
        first * 2 === second ||
        second * 2 === first ||
        first * 3 === second * 2 ||
        second * 3 === first * 2 ||
        first * 3 === second * 4 ||
        second * 3 === first * 4
      )
        set += obj[keySet[i]] * times2;
    }
  }
  set +=
    (obj[keySet[keySet.length - 1]] * (obj[keySet[keySet.length - 1]] - 1)) / 2;
  return set;
};
console.log(solution([100, 180, 360, 100, 270, 100, 180]));
