const pickAuthorNames = (obj) => {
  const { result: { authors } } = obj;

  return authors.map(({ authorName }) => authorName);
}

pickAuthorNames(data); // ["Alice", "John"]

