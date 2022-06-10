// Returns true if both objects have identical keys with identical values.

// Otherwise you get back a big fat false!

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

// eqarrays to evaluate 2arrays msking sure they are the same

// eqObjects compares 2 objeects and determines if they are equivalent.

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


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));

const cdb = {c: "1", d: ["2", 3, "4", 5], b: "3" };
const cdb2 = {c: "1", d: ["2", 3, "4", 5], b: "3" };
console.log(eqObjects(cdb, cdb2));
console.log(eqObjects(cdb2, cdb2));

/* this function looks at two objects and compares the elements of both objects at the same key to see if they are the same returns true of false
*/