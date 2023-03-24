const solution = (board) => {
  let objO = { pos: [], size: 0 },
    objX = { pos: [], size: 0 };
  board.forEach((element, idx) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i] === "O") {
        objO.pos.push([idx, i]);
        objO.size++;
      }
      if (element[i] === "X") {
        objX.pos.push([idx, i]);
        objX.size++;
      }
    }
  });
  if (objO.size === 0 && objX.size === 0) return 1;
  if (objO.size < objX.size) return 0;
  if (objO.size - 1 > objX.size) return 0;
  if (finished(objO.pos) && objO.size === objX.size) return 0;
  if (finished(objX.pos) && objO.size > objX.size) return 0;

  return 1;
};
const finished = (pos) => {
  for (let i = 0; i < 3; i++) {
    if (
      pos.some((e) => e[0] === i && e[1] === 0) &&
      pos.some((e) => e[0] === i && e[1] === 1) &&
      pos.some((e) => e[0] === i && e[1] === 2)
    )
      return true;
    if (
      pos.some((e) => e[0] === 0 && e[1] === i) &&
      pos.some((e) => e[0] === 1 && e[1] === i) &&
      pos.some((e) => e[0] === 2 && e[1] === i)
    )
      return true;
  }
  if (
    pos.some((e) => e[0] === 0 && e[1] === 0) &&
    pos.some((e) => e[0] === 1 && e[1] === 1) &&
    pos.some((e) => e[0] === 2 && e[1] === 2)
  )
    return true;
  if (
    pos.some((e) => e[0] === 2 && e[1] === 0) &&
    pos.some((e) => e[0] === 1 && e[1] === 1) &&
    pos.some((e) => e[0] === 0 && e[1] === 2)
  )
    return true;

  return false;
};
//console.log(solution(["O.X", ".O.", "..X"]));
console.log(solution(["OOO", "...", "XXX"]));
//console.log(solution(["...", ".X.", "..."]));
//console.log(solution(["...", "...", "..."]));
