const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result[3], undefined);
