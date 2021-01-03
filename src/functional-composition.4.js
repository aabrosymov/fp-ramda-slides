// fx = (x + 1) * 2

const R = require('ramda');

const double = R.multiply(2);

const increment = R.add(1);

const incrementAndDouble = R.o(double, increment);

console.log(incrementAndDouble(3)) // 8