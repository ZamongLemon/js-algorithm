const countUniqueValues = (arr) => {
  let idx = 0,
    value = 0;

  arr.forEach((element) => {
    if (value !== element) {
      value = element;
      idx++;
    }
  });
  return idx;
};
