const head = function(arr) {
  return arr[0];
};

const assertEqual = require('./assertEqual');




assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([10]), 10);





//CREATE A FUNCTION HEAD WHICH RETURNS THE FIRST ITEM IN THE ARRAY

//USE ASSERTEQUAL TO WRITE TEST CASES FOR VARIOUS SCENARIOS

//TESTS CAN BE WRITTEN BELOW FUNCTION DEFINTION

//AN ARRAY WITH ONE ELEMENT SHOULD STILL YIELD AS HEAD

// AN EMPTY ARRAY SHOULD YIELD UNDEFINED

