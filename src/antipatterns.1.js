import * as R from 'ramda';

const isValid = value => {
  const index = R.indexOf('-', value)
  if (index === -1) {
    if (R.length(value) > 10 || R.length(value) < 2) {
      return false
    }
    return isValidAccountPart(value)
  } else {
    if (index === 0 || index === value.length - 1) {
      return false
    }
    const numbers = R.split('-', value)
    if (R.length(numbers[0]) > 6 || isNaN(numbers[0])) {
      return false
    }
    if (R.length(numbers[1]) > 10 || R.length(numbers[1]) < 2 || isNaN(numbers[1])) {
      return false
    }
    return R.all(isValidAccountPart, numbers)
  }
}