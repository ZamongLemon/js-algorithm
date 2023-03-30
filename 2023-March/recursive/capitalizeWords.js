const capitalizeWords = (arr) => {
  if (arr.length === 0) {
    return [];
  }
  const newWord = arr[0].toUpperCase();
  return [newWord, ...capitalizeWords(arr.slice(1))];
};

console.log(capitalizeWords(["apple", "cherry", "devil"]));
