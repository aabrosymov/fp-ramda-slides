// fx = (x + 1) * 2

const double = (num) => 2 * num;

const increment = (num) => num + 1;

const incrementAndDouble = (num) => double(
  increment(num),
)

console.log(incrementAndDouble(3)) // 8