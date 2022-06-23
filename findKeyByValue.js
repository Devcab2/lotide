const findKeyByValue = function(obj, val) {

  const getKey = Object.keys(obj);

  for (const key of getKey) {

    if (obj[key] === val) {

      return key;

    }
  }
};

module.exports = findKeyByValue;