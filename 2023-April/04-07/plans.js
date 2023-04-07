const solution = (plans) => {
  plans = plans
    .map((el) => {
      let [subject, start, time] = el;
      const [hour, min] = start.split(":");
      start = +hour * 60 + +min;
      time = +time;
      return [subject, start, time];
    })
    .sort((a, b) => {
      return -a[1] + b[1];
    });

  let queue = [];
  let current;
  let answer = [];
  while (plans.length) {
    current = plans.pop();
    if (plans.length) {
      next = plans[plans.length - 1];
      if (current[1] + current[2] <= next[1]) {
        answer.push(current[0]);
        let remainingTime = next[1] - (current[1] + current[2]);
        // 처리해야 할 과목이 queue에 남아 있을 때
        while (queue.length > 0 && remainingTime > 0) {
          let [subject, lastTime, leftTime] = queue.pop();
          if (remainingTime >= leftTime) {
            answer.push(subject);
            remainingTime -= leftTime;
          } else {
            leftTime -= remainingTime;
            remainingTime = 0;
            queue.push([subject, lastTime, leftTime]);
          }
        }
      } else {
        let queueObj = [current[0], next[1], current[1] + current[2] - next[1]];
        queue.push(queueObj);
      }
    } else answer.push(current[0]);
  }
  for (let i = queue.length - 1; i >= 0; i--) answer.push(queue.pop()[0]);
  return answer;
};

/* console.log(
  solution([
    ["korean", "11:40", "30"],
    ["english", "12:10", "20"],
    ["math", "12:30", "40"],
  ])
); */
/* console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ])
); */
console.log(
  solution([
    ["aaa", "12:00", "20"],
    ["bbb", "12:10", "30"],
    ["ccc", "12:40", "10"],
  ])
);
