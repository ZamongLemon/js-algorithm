const solution = (sticker) => {
  const len = sticker.length;
  if (len <= 3) return Math.max(...sticker);
  const dp1 = Array(len).fill(0);
  const dp2 = Array(len).fill(0);
  dp1[0] = sticker[0];
  dp1[1] = dp1[0];
  dp2[0] = 0;
  dp2[1] = sticker[1];
  for (let i = 2; i < sticker.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }
  dp2[len - 1] = Math.max(dp2[len - 2], dp2[len - 3] + sticker[len - 1]);

  return Math.max(dp1[sticker.length - 2], dp2[sticker.length - 1]);
};

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));
console.log(solution([1, 3, 2, 5, 4]));
