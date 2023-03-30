function solution(numbers, hand) {
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2]
  };

  let left = "*",
    right = "#",
    answer = "";
  let isLeft = false;

  const getDist = (num, last) => {
    return (
      Math.abs(keyPad[num][0] - keyPad[last][0]) +
      Math.abs(keyPad[num][1] - keyPad[last][1])
    );
  };
  numbers.forEach((element) => {
    const leftDistance = getDist(element, left);
    const righttDistance = getDist(element, right);
    if (element % 3 === 2 || element === 0) {
      if (leftDistance === righttDistance) {
        if (hand === "right") isLeft = false;
        else isLeft = true;
      } else if (leftDistance < righttDistance) isLeft = true;
      else isLeft = false;
    } else if (element % 3 === 0) isLeft = false;
    else isLeft = true;

    if (isLeft) {
      left = element;
      answer += "L";
    } else {
      right = element;
      answer += "R";
    }
  });

  return answer;
}

//console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
//console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); */
