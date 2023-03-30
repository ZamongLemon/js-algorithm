const fib = (a) => {
  if (a == 1 || a == 2) return 1;
  return fib(a - 1) + fib(a - 2);
};

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
