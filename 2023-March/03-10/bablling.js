const solution = (babbling) => {
  const count = babbling
    .filter(
      (el) => ![/ayaaya/g, /yeye/g, /woowoo/g, /mama/g].some((r) => r.test(el))
    )
    .map((el) => el.replaceAll(/aya|ye|woo|ma/g, ""))
    .filter((el) => el.length === 0).length;
  return count;
};

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
