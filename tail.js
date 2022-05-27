//imported function

const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`🟢Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`🔴Assertion Failed: "${actual}" !== "${expected}'`);
};

const tail = function(arr) {
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);

console.log(result);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"





/* > create a function tail that returns the tail of an array.
   > function should not modify the array , instead return a new array.
   > an array with one element should return an empty array.
   > an empty array should yield an empty array. */