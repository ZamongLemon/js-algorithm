const solution = (fees, records) => {
  let obj = {},
    feeTime = {};
  records.forEach((element) => {
    const record = element.split(" ");
    let [hour, min] = record[0].split(":");
    let time = +hour * 60 + +min;
    if (record[2] === "IN") obj[record[1]] = time;
    else {
      feeTime[record[1]] = feeTime[record[1]]
        ? feeTime[record[1]] + time - obj[record[1]]
        : time - obj[record[1]];
      delete obj[record[1]];
    }
  });
  for (const key in obj) {
    feeTime[key] = feeTime[key]
      ? feeTime[key] + 1439 - obj[key]
      : 1439 - obj[key];
  }
  let answer = [];
  const keySet = Object.keys(feeTime).sort((a, b) => +a - +b);
  keySet.forEach((element) => {
    const time = feeTime[element];
    let fee = 0;
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    fee = basicFee;
    if (time > basicTime) {
      const overedTime = Math.ceil((time - basicTime) / unitTime);
      fee += unitFee * overedTime;
    }
    answer.push(fee);
  });
  return answer;
};

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT"
    ]
  )
);

console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN"
    ]
  )
);
console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
