const solution = (wallpaper) => {
  const dots = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        dots.push([i, j]);
      }
    }
  }
  const [minx, miny] = [
    Math.min(...dots.map(([x, y]) => x)),
    Math.min(...dots.map(([x, y]) => y)),
  ];
  const [maxx, maxy] = [
    Math.max(...dots.map(([x, y]) => x)),
    Math.max(...dots.map(([x, y]) => y)),
  ];
  return [minx, miny, maxx + 1, maxy + 1];
};

console.log(solution([".#...", "..#..", "...#."]));
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
);
console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
);
console.log(solution(["..", "#."]));
