/* const solution = (book_time) => {
  let bookedSchedule = [];
  book_time.forEach((element) => {
    if (bookedSchedule.length === 0) {
      bookedSchedule[0] = [element];
    } else {
      let i = 0;
      for (i; i < bookedSchedule.length; i++) {
        if (canbook(bookedSchedule[i], element)) {
          bookedSchedule[i].push = element;
          break;
        }
      }
      if (i === bookedSchedule.length) {
        bookedSchedule.push([element]);
      }
    }
  });
  return bookedSchedule.length;
};
const canbook = (room, time) => {
  let bookStart = calcTime(time[0]),
    bookEnd = calcTime(time[1]);
  for (let i = 0; i < room.length; i++) {
    let roomStart = calcTime(room[i][0]),
      roomEnd = calcTime(room[i][1]);
    if (!(bookEnd <= roomStart - 10 || bookStart - 10 >= roomEnd)) return false;
  }
  return true;
};
 */

function calcTime(time) {
  const [hour, min] = time.split(":");
  return +hour * 60 + +min;
}

function solution(book_time) {
  const sortedBookTime = book_time
    .map(([a, b]) => [calcTime(a), calcTime(b)])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let rooms = [];
  for (const [start, end] of sortedBookTime) {
    let assigned = false;
    for (let i = 0; i < rooms.length; i++) {
      if (start >= rooms[i] + 10) {
        rooms[i] = end;
        assigned = true;
        break;
      }
    }
    if (!assigned) rooms.push(end);
  }
  return rooms.length;
}
console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
console.log(
  solution([
    ["09:10", "10:10"],
    ["10:20", "12:20"],
  ])
);
console.log(
  solution([
    ["10:20", "12:30"],
    ["10:20", "12:30"],
    ["10:20", "12:30"],
  ])
);
