const solution = (sequence, k) => {
  let left = 0,
    right = 0;
  let sum = sequence[0],
    seqlen = sequence.length;
  let minLength = Infinity,
    result = [-1, -1];

  while (right < seqlen) {
    if (sum < k) {
      right++;
      if (right < seqlen) sum += sequence[right];
    } else {
      if (sum === k && right - left < minLength) {
        minLength = right - left;
        result = [left, right];
      }
      sum -= sequence[left];
      left++;
    }
  }
  return result;
};
console.log(solution([1, 2, 3, 4, 5], 7));
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
console.log(solution([2, 2, 2, 2, 2], 6));
