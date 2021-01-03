const firstNames = ["anton", "dan", "dmitriy", "nikita"];

const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const capitalizedFirstNames = firstNames.map(capitalize); // ["Anton","Dan","Dmitriy","Nikita"]