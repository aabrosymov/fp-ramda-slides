import { pipeWith } from 'ramda';

const pipePromises = pipeWith(
  (f, res) => res.then(f)
);

const fx = pipePromises([addOne, multiplyByTen, divideByTwo]);

fx(3)
  .then(res => console.log(res)); // 20