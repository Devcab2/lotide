const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true));
console.log(assertEqual(eqArrays([4, 5, 6], [4, 5, 7]), true));