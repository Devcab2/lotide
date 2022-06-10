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

const eqObjects = function(obj1, obj2) {

  const objOneKey = Object.keys(obj1,);

  const objTwoKey = Object.keys(obj2);

  if (objOneKey.length !== objTwoKey.length) {

    return false;

  }
  
  //initialize both objects and compare length to verify they are the same

  for (const key of objOneKey) {

    if (Array.isArray(obj1[key])) {

      if (!eqArrays(obj1[key], obj2[key])) {

        return false;


        // loop through object1 keys, if key is array and arrays arent equal return false


      }
    }

    if (!Array.isArray(obj1[key]) && typeof obj1[key] !== "object") {

      if (obj1[key] !== obj2[key]) {

        return false;


        // if key value is not an array & values dont match return false.
      }
    }

    if (typeof obj1[key] === "object" && !Array.isArray(obj1[key])) {

      if (eqObjects(obj1[key], obj2[key]) === false) {

        return false;
    
        // if key is an object and the objects are not equal return false.
    
      }
  
    }
  }

  return true;
  
};

/* create a function to look at two objects and assert they are equal or not logging an apropriate message.
*/

const assertObjEqual = function(actual, expected) {

  const result = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${result(actual)}] === [${result(expected)}]`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: [${result(actual)}] !== [${result(expected)}]`);
  }
};

assertObjEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjEqual({ a: "1", b: 2}, { b: 3, a: "1"});
