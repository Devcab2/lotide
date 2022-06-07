/* create a function called without that returns a subset of an array removing unwanted items.
*/

const without = function(source, itemToRemove) {
  let result = [];
  // intialize new array
  for (let i = 0; i < source.length; i++) {
    if (!itemToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  /* loop through items to remove and push remainder to result array */
  return result;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]