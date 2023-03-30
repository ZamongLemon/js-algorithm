const solution = (record) => {
  obj = {};
  record.forEach((element) => {
    let row = element.split(" ");
    if (row.length === 3) {
      obj[row[1]] = row[2];
    }
  });
  answer = [];
  record.forEach((element) => {
    let row = element.split(" ");
    switch (row[0]) {
      case "Enter":
        answer.push(obj[row[1]] + "님이 들어왔습니다.");
        break;
      case "Leave":
        answer.push(obj[row[1]] + "님이 나갔습니다.");
        break;
      default:
        break;
    }
  });
  return answer;
};

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
