const firstNames = ["anton", "dan", "dmitriy", "nikita"];

const capitalize = R.converge(R.concat, [R.o(R.toUpper, R.head), R.tail])

const capitalizedFirstNames = firstNames.map(capitalize); // ["Anton","Dan","Dmitriy","Nikita"]