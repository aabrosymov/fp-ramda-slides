import { pipe, path, pluck } from 'ramda';

const pickAuthorNames = pipe(
  path(['result', 'authors']),
  pluck('authorName') // = map(prop('authorName'))
);

pickAuthorNames(data); // ["Alice", "John"]

