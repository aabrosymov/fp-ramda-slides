const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const addOne = async (num) => {
  await timeout(1000);

  return num + 1;
};

const multiplyByTen = async (num) => {
  await timeout(1000);

  return num * 10;
};

const divideByTwo = async (num) => {
  await timeout(1000);

  return num / 2;
};

// f(x) = (x + 1) * 10 / 2
