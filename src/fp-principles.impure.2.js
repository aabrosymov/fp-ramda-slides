// Impure

const incrementTotal = (obj, value) => {
  obj.total += value;

  return obj;
}

const bill = { total: 3 };

incrementTotal(bill, 4); // { total: 7 }
