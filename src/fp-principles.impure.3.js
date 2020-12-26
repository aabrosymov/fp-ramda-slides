// Impure

const incrementTotal = (obj, value) => {
  obj.total += value;

  return obj;
}

const bill = { total: 3 };

incrementTotal(bill, 4); // { total: 7 }

incrementTotal(bill, 5); // { total: 12 }

console.log(bill) // { total: 12 }
