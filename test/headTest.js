const head = require('../head.js');
const assertEqual = require('../assertEqual.js');


console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([]), undefined));
console.log(assertEqual(head([10]), 10));
