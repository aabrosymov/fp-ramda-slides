import { pipe, path, map } from 'ramda';

const pickAuthorNames = pipe(
  path(['result', 'authors']),
  map(prop('authorName')) // = map(item => item.authorName)
);

pickAuthorNames(data); // ["Alice", "John"]

