const solution = (cards) => {
  visited = [];
  group = [];

  for (let i = 0; i < cards.length; i++) {
    queue = [cards[i]];
    littleGroup = [cards[i]];
    if (visited.includes(queue[0])) continue;
    while (queue.length > 0) {
      let current = queue.pop();
      visited.push(current);
      if (!visited.includes(cards[current - 1])) {
        queue.push(cards[current - 1]);
        littleGroup.push(cards[current - 1]);
      }
    }
    if (visited.includes(cards[i])) group.push(littleGroup);
  }
  group = group.sort((a, b) => {
    return b.length - a.length;
  });
  return group.length >= 2 ? group[0].length * group[1].length : 0;
};

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
