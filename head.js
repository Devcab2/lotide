//FUNCTION FROM ASSERTEQUAL.js

const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`🟢Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`🔴Assertion Failed: "${actual}" !== "${expected}'`);
};
console.log(assertEqual);

//CREATE A FUNCTION HEAD WHICH RETURNS THE FIRST ITEM IN THE ARRAY

//USE ASSERTEQUAL TO WRITE TEST CASES FOR VARIOUS SCENARIOS

//TESTS CAN BE WRITTEN BELOW FUNCTION DEFINTION

//AN ARRAY WITH ONE ELEMENT SHOULD STILL YIELD AS HEAD

// AN EMPTY ARRAY SHOULD YIELD UNDEFINED

const head = require("lodash");

let arr = [1, 2, 3, 4, 5];

let header = head.head(arr);

assertEqual([5,6,7]);
assertEqual(["Hello", "Lighthouse", "Labs"]);

console.log(head);