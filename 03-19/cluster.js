const solution = (str1, str2) => {
  const tester = (val) => {
    return /^[a-z|A-Z]{2}$/.test(val);
  };
  const createSet = (str) => {
    const set = {};
    let size = 0;
    for (let i = 0; i < str.length - 1; i++) {
      let word = str.slice(i, i + 2).toLowerCase();
      if (tester(word)) {
        set[word] = (set[word] || 0) + 1;
        size++;
      }
    }
    return [set, size];
  };

  const [str1Set, size1] = createSet(str1);
  const [str2Set, size2] = createSet(str2);

  if (size1 === 0 && size2 === 0) return 65536;

  let union = { ...str1Set },
    intersection = {};
  for (const key in str2Set) {
    if (!union[key]) union[key] = str2Set[key];
    else if (union[key] < str2Set[key]) union[key] = str2Set[key];
    if (str1Set[key]) intersection[key] = Math.min(str1Set[key], str2Set[key]);
  }
  const unionlen = Object.values(union).reduce((acc, val) => acc + val, 0);
  const interlen = Object.values(intersection).reduce(
    (acc, val) => acc + val,
    0
  );
  return parseInt(65536 * (interlen / unionlen));
};
console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));
