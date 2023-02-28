const factorial = (a) => {
  if (a <= 1) return 1;
  return a * factorial(a - 1);
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
