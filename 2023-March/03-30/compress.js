const solution = (msg) => {
  const answer = [];
  const list = new Map();
  let length = 1;
  for (let i = 65; i <= 90; i++) list.set(String.fromCharCode(i), length++);
  for (let i = 0; i < msg.length; i++) {
    let word = msg[i],
      idx = i + 1;
    while (idx < msg.length && list.has(word + msg[idx])) word += msg[idx++];
    answer.push(list.get(word));
    if (idx < msg.length) list.set(word + msg[idx], length++);
    i = idx - 1;
  }

  return answer;
};
/* console.log(solution("KAKAO"));
console.log(solution("TOBEORNOTTOBEORTOBEORNOT")); */
//console.log(solution("ABABABABABABABAB"));
console.log(
  solution(
    "THATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITIS"
  )
);
//[20,8,1,20,27,29,9,19,33,31,30,28,20,35,15,39,19,14,41,35,38,9,42,46,32,47,34,19,36,55,43,45,57,42,56,48,50,37,32,53,55,52,44,60,58,61,60,47,68,54,74,65,69,40,73,65,62,76,51,78,84,64,70,89,63,83,91,75,67,78,71,71,52,83,95,60,87,56,79,59,91,49,103,94,77,90,106,103,108,101,35,109,96,112,72,93,86,116,113,105,121,118,102,124,126,98,82,81,88,117,130,97,134,92,128,136,111,80,144,114,100,143,66,148,131,139,115,150,141,125,132,108,122,129,150,138,107,147,85,160,165,145,126,99,139,110,167,156,152,164,135,149,173,151,163,171,123,161,120,170,159,142,179,162,146,182,166,177,180,191,187,178,194,190,127]
//[20,8,1,20,27,29,9,19,33,31,30,28,20,33,14,15,39,19,41,43,36,9,39,46,38,47,34,19,36,52,45,40,42,35,38,48,62,54,51,61,53,55,66,57,44,59,64,32,49,60,29,52,76,37,32,71,43,70,47,75,73,80,43,79,56,72,84,61,86,68,81,90,69,92,72,85,63,96,89,87,91,83,101,94,103,65,97,106,99,108,50,74,111,77,66,98,81,70,93,118,117,88,33,122,116,58,127,62,127,78,114,123,100,133,95,112,105,104,132,145,87,134,130,129,137,131,82,79,148,151,150,144,153,159,102,135,121,156,159,125,75,162,113,158,124,109,126,149,67,142,146,166,155,158,174,171,140,119,128,175,120,138,152,161,174,181,139,154,141,187,143,176,165,172,167,191,164,182,194,184,136,170,193,147,86]
