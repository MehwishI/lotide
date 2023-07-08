const flatten = require('../flatten');

console.log(flatten([1, 2, [3, 4], 5, [6]]));// => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4], 5, [6],"hello",["j","k",65]]));// => [1, 2, 3, 4, 5, 6]