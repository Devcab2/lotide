const without = function(source, itemToRemove) {
  let result = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

module.exports = without;

