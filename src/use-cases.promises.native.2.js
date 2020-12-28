const fx = async (num) => {
  const additionResult = await addOne(num);

  const multiplicationResult = await multiplyByTen(additionResult);

  const divisionResult = await divideByTwo(multiplicationResult);

  return divisionResult;
}

fx(3)
  .then(res => console.log(res)); // => 20