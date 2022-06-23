const eqArrays = require('./eqArrays');
const eqObjects = function(obj1, obj2) {

  const objOneKey = Object.keys(obj1,);

  const objTwoKey = Object.keys(obj2);

  if (objOneKey.length !== objTwoKey.length) {

    return false;

  }

  for (const key of objOneKey) {

    if (Array.isArray(obj1[key])) {

      if (!eqArrays(obj1[key], obj2[key])) {

        return false;
      }
    }

    if (!Array.isArray(obj1[key]) && typeof obj1[key] !== "object") {

      if (obj1[key] !== obj2[key]) {

        return false;
      }
    }

    if (typeof obj1[key] === "object" && !Array.isArray(obj1[key])) {

      if (eqObjects(obj1[key], obj2[key]) === false) {

        return false;
      }
  
    }
  }

  return true;
  
};

module.exports = eqObjects;