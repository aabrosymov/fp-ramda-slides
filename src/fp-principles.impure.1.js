// Impure

const incrementTotal = (obj, value) => {
  obj.total += value;

  return obj;
}

const bill = { total: 3 };