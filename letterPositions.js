const letterPosition = function(string) {
  string = string.toLowerCase();
  
  const newObj = {};

  for (const letter of string) {

    if (letter !== " ") {

      newObj[letter] = [];

    }
  }

  for (let i = 0; i < string.length; i++) {

    if (string[i] !== " " && newObj[string[i]]) {

      newObj[string[i]].push(i);
    }
  }
  return newObj;
};

console.log(letterPosition("hello"));





















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