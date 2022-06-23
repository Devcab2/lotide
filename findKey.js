const findKey = function(obj, func) {

  for (let [key, value] of Object.entries(obj)) {

    if (func(value)) {

      return key;

    }

  }
};

module.exports = findKey;