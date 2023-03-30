function solution(num, total) {
  let answer = [];
  if (Number.isInteger(total / num)) {
    //홀수인경우 가운데값 * num = total 왼쪽으로 math.floor(num/2)개, 오른쪽으로 math.floor(num/2)개
    for (
      let i = total / num - parseInt(num / 2);
      i <= total / num + parseInt(num / 2);
      i++
    ) {
      answer.push(i);
    }
  } else {
    //짝수인경우 가운데값(배열에 없음) * num = total 왼쪽으로 num개 오른쪽으로 num개 가운데는 차이 0.5씩

    for (
      let i = parseInt(total / num) - num / 2 + 1;
      i <= parseInt(total / num) + num / 2;
      i++
    ) {
      console.log(i);
      answer.push(i);
    }
  }
  return answer;
}

console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
console.log(solution(5, 5));
