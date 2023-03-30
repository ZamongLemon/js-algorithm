const capitalizeFirst = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  const [first, ...rest] = arr; // destructuring assignment

  // recursive case
  const capitalizedFirst = first.charAt(0).toUpperCase() + first.slice(1);
  return [capitalizedFirst, ...capitalizeFirst(rest)];
};

console.log(capitalizeFirst(["car", "taco", "banana"]));
