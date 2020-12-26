// Pure

const incrementTotal = (obj, value) => {
  return {
    ...obj,
    total: obj.total + value,
  }
}

const bill = { total: 3 };
