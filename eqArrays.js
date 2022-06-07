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
eqArrays(eqArrays([1, 2, 3], [1, 2, 3]),true);
eqArrays(eqArrays([4, 5, 6], [4, 5, 7]), true);

//console.log(assertEqual);

// assertEqual is a function that will confirm if our output matches our ecpected output
// create a function (eqArrays) that will take 2 arrays,
// make the function return true for perfect match
// else return false.
//use assertEqual to write test cases
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


// loop through array 1
// loop through array 2
// compare each element
//
/*
const eqArrays = function(arr1,arr2) {
  console.log("arrays", arr1,arr2);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      return true;
    }
  }
  return false;
};
//eqArrays();


// we want to check if our elements are equal / but sometime we want to know if they dont match */

