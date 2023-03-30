function solution(numbers) {
  return numbers.map((element) => {
    const value = element.toString(2);
    const reverse = value.split("").reverse().indexOf("0");
    const plus =
      reverse === -1
        ? Math.pow(2, value.length - 1)
        : Math.ceil(Math.pow(2, reverse - 1));
    return element + plus;
  });
}
console.log(solution([2, 7]));
