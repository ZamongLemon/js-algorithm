const solution = (m, musicinfos) => {
  let answer = [];
  const regex = /[A-Z]#?/g;
  music = m.match(regex);
  const mLen = music.length;
  const isInclude = (pattern) => {
    let found = false;
    if (mLen > pattern.length) return false;
    for (let i = 0; i < pattern.length - mLen + 1; i++) {
      let copiedI = i;
      for (let j = 0; j < mLen; j++) {
        if (music[j] === pattern[copiedI]) {
          if (j === mLen - 1) found = true;
          copiedI++;
        } else break;
      }
      if (found) break;
    }
    return found ? true : false;
  };
  musicinfos.forEach((element) => {
    const [start, end, name, sheet] = element.split(",");
    let [sH, sM] = start.split(":");
    let [eH, eM] = end.split(":");
    musicLength = (+eH - +sH) * 60 + +eM - +sM;
    let sheetLen = sheet.match(regex).length;
    let copiedM = sheet
      .repeat(Math.ceil(musicLength / sheetLen))
      .match(regex)
      .slice(0, musicLength);
    if (isInclude(copiedM)) answer.push([musicLength, +sH * 60 + sM, name]);
  });
  if (!answer.length) return "(None)";

  answer.sort(([a1, b1, c1], [a2, b2, c2]) => {
    return a2 - a1 || b1 - b2;
  });
  return answer[0][2];
};
console.log(
  solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);

console.log(
  solution("CC#BCC#BCC#BCC#B", [
    "03:00,03:30,FOO,CC#B",
    "04:00,04:08,BAR,CC#BCC#BCC#B",
  ])
);
console.log(
  solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
console.log(
  solution("ABC", ["00:00,00:06,HELLO,C#D#EF#G#A#", "00:00,00:06,WORLD,ABCDEF"])
);
