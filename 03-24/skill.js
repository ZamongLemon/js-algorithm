const solution = (skill, skill_trees) => {
  skill_trees = excludeChars(skill, skill_trees);
  skill = skill.split("");
  let impossible = 0;
  for (const i of skill_trees) {
    let copyed_skill = [...skill];
    for (let j = 0; j < i.length; j++) {
      if (copyed_skill[0] === i[j]) copyed_skill.shift();
      else {
        impossible++;
        break;
      }
    }
  }

  return skill_trees.length - impossible;
};
const excludeChars = (firstString, inputStrings) => {
  return inputStrings.map((str) => {
    return str
      .split("")
      .filter((char) => firstString.includes(char))
      .join("");
  });
};

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
