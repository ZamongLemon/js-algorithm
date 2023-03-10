const solution = (keymap, targets) => {
  let answer = [];
  obj = {};
  keymap.forEach((element) => {
    const ellen = element.length;
    for (let i = 0; i < ellen; i++) {
      if (!obj[element.charAt(i)]) obj[element.charAt(i)] = i + 1;
      if (obj[element.charAt(i)] > i + 1) obj[element.charAt(i)] = i + 1;
    }
  });
  targets.forEach((element) => {
    sum = 0;
    for (let i = 0; i < element.length; i++) {
      if (obj[element.charAt(i)]) sum += obj[element.charAt(i)];
      else {
        sum = 0;
        break;
      }
    }
    sum = sum === 0 ? -1 : sum;
    answer.push(sum);
  });
  return answer;
};

/* const answer = keymap.map(key => {
    const obj = {};
    for (let i = 0; i < key.length; i++) {
      const char = key.charAt(i);
      if (!(char in obj)) obj[char] = i + 1;
      if (obj[char] > i + 1) obj[char] = i + 1;
    }
    return targets.reduce((sum, target) => {
      return sum + (target.split('').reduce((acc, char) => {
        return acc + (char in obj ? obj[char] : 0);
      }, 0) || -1);
    }, 0);
  });
  return answer; */
/* console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
console.log(solution(["AA"], ["B"]));
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); */
console.log(solution(["AGB", "BSSS"], ["AGZ", "BSSS"]));
