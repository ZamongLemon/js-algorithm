const solution = (picks, minerals) => {
  let leftPicks = picks.reduce((a, c) => a + c);
  if (leftPicks * 5 > minerals.length) {
    let sub = parseInt((leftPicks * 5 - minerals.length) / 5);
    for (let i = 2; i >= 0 && sub > 0; i--) {
      let a = Math.min(sub, picks[i]);
      sub -= a;
      picks[i] -= a;
    }
  }
  let result = Infinity;
  const calculator = (picksIdx, startIdx) => {
    obj = {
      diamond: Math.pow(5, picksIdx),
      iron: Math.pow(5, picksIdx - 1 < 0 ? 0 : picksIdx - 1),
      stone: 1,
    };
    let tired = 0,
      i = startIdx,
      endIdx = Math.min(minerals.length, startIdx + 5);
    for (i; i < endIdx; i++) tired += obj[minerals[i]];
    return [tired, endIdx];
  };
  const working = (picksIdx, picks, startIdx, total = 0) => {
    let [tired, endIdx] = calculator(picksIdx, startIdx);
    total += tired;
    let leftPicks = picks.reduce((a, c) => a + c);
    for (let i = 0; i < 3; i++) {
      let currentPicks = [...picks];
      if (endIdx < minerals.length && leftPicks > 0) {
        if (currentPicks[i] > 0) {
          currentPicks[i]--;
          working(i, currentPicks, endIdx, total);
        }
      } else {
        result = Math.min(result, total);
      }
    }
  };
  for (let i = 0; i < picks.length; i++) {
    let currentPicks = [...picks];
    if (currentPicks[i] > 0) {
      currentPicks[i]--;
      working(i, currentPicks, 0, 0);
    }
  }

  return result;
};

console.log(
  solution(
    [1, 3, 2],
    [
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "diamond",
      "iron",
      "stone",
    ]
  )
);
console.log(
  solution(
    [0, 1, 1],
    [
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "diamond",
      "iron",
      "iron",
      "iron",
      "iron",
      "iron",
      "diamond",
    ]
  )
);
