function solution(food) {
  let arr = food.map((element, idx) => {
    if (idx !== 0) {
      if (parseInt(element / 2) > 0) {
        return idx.toString().repeat(parseInt(element / 2));
      }
    }
  });
  answer = arr.join("") + "0" + arr.reverse().join("");
  return answer;
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
