function solution(numlist, n) {
  const mapped = numlist.map((element) => ({
    element,
    dis: Math.abs(n - element)
  }));
  const answer = mapped
    .sort((a, b) => {
      if (a.dis !== b.dis) return a.dis - b.dis;

      return b.element - a.element;
    })
    .map((element) => element.element);
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6], 4));
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30));
