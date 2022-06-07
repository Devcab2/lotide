const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  // (eqArrays(actual, expected)) ?
  //   console.log(`🟢Assertion Passed: "${actual}" === "${expected}"`) :
  //   console.log(`🔴Assertion Failed: "${actual}" !== "${expected}"`);
  if (eqArrays(actual, expected)) {
    console.log(`🟢Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🔴Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);

// if (condition) {
//   // do this
// } else {
//   // do that
// }

// condition ? doThis : doThat;



// problem:
// we need a new function called assertArraysEqual
// it needs to reference the eqArrays function for the array comparison instead of "==="
// our function will take 2 arrays, and log a message to the console
// the function has to assert that two arrays are equal
// -------------------->

// psuedoCode:
// let assertArraysEqual = function(arr1,arr2,true)
// access eqArrays to make a comparison
//