const power = (a, b) => {
  if (b == 0) return 1;

  if (b == 1) return a;

  return a * power(a, b - 1);
};

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
