/* const solution = (dartResult) => {
  let length = dartResult.length;
  let currentstar = 0,
    laststar = 0,
    sum = 0;
  for (let i = length - 1; i >= 0; i--) {
    let start = dartResult.charAt(i);
    let point = 1,
      positive = 1,
      pointChar = "";
    if (start === "*") {
      currentstar++;
      i--;
      pointChar = dartResult.charAt(i);
    } else if (start === "#") {
      positive = -1;
      i--;
      pointChar = dartResult.charAt(i);
    } else pointChar = start;
    switch (pointChar) {
      case "T":
        point *= 3;
        break;
      case "D":
        point *= 2;
        break;
      case "S":
        point *= 1;
        break;
    }
    i--;
    let num = parseInt(dartResult.charAt(i));
    if (num === 0 && dartResult.charAt(i - 1) === "1") {
      num = 10;
      i--;
    }
    num = Math.pow(num, point) * positive;
    if (laststar > 0) {
      laststar--;
      num = 2 * num;
    }
    if (currentstar > 0) {
      currentstar--;
      num = 2 * num;
      laststar++;
    }
    sum += num;
    console.log(start, point, num);
  }
  return sum;
}; */

const solution = (dartResult) => {
  let matches = dartResult.match(/\d{1,2}[SDT][*#]?/g);
  console.log(matches);
  let scores = matches.map((match) => {
    let [_, num, bonus, option] = match.match(/(\d{1,2})([SDT])([*#])?/);
    let score = Math.pow(+num, { S: 1, D: 2, T: 3 }[bonus]);
    if (option === "*") score *= 2;
    else if (option === "#") score *= -1;
    return score;
  });

  for (let i = 1; i < scores.length; i++) {
    if (matches[i].endsWith("*")) scores[i - 1] *= 2;
  }

  return scores.reduce((sum, score) => sum + score, 0);
};

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));
