// Pure

const incrementTotal = (obj, value) => {
  return {
    ...obj,
    total: obj.total + value,
  }
}

const bill = { total: 3 };

incrementTotal(bill, 4);  // { total: 7 }
