import { pipeWith, andThen } from 'ramda';

const pipePromises = pipeWith(andThen); // (f, res) => res.then(f)

const fx = pipePromises([addOne, multiplyByTen, divideByTwo]);

fx(3)
  .then(res => console.log(res)); // 20