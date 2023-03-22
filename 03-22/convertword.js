const solution = (begin, target, words) => {
  if (!words.includes(target)) return 0;

  const queue = [{ current: begin, num: 0 }];
  while (queue.length > 0) {
    const { current, num } = queue.shift();
    if (current === target) return num;

    for (let i = 0; i < words.length; i++) {
      if (getCounter(current, words[i])) {
        queue.push({ current: words[i], num: num + 1 });
        words.splice(i, 1);
        i--;
      }
    }
  }
  return 0;
};

const getCounter = (str1, str2) => {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) count++;
  }
  return count === 1 ? true : false;
};

console.log(solution("hit", "cog", ["hot", "lop", "dot", "dog", "lot", "cog"]));
//console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
