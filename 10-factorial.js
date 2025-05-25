function factorial(n) {
  if (isNaN(n) || n < 0) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const input = parseInt(process.argv[2]);
console.log(factorial(input));