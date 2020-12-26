// Pure

const incrementTotal = (obj, value) => {
  return {
    ...obj,
    total: obj.total + value,
  }
}

const bill = { total: 3 };

incrementTotal(bill, 4);  // { total: 7 }

incrementTotal(bill, 5); // { total: 8 }

console.log(bill); // { total: 3 }