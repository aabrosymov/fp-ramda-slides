const validateParts = R.o(R.all(isValidAccountPart), R.split('-'));

const matchAccount = R.match(/^(\d{1,6}\-\d{2,10}|\d{2,10})$/g);
const isValidAccount = R.ifElse(R.o(R_.isNotEmpty, matchAccount), validateParts, R.F);