const takeUntil = function(array, callback) {
  
  const result = [];

  for (let item of array) {

    if (!callback(item)) {

      // loop and check for falsey

      result.push(item);

    } else {

      return result;
    
    }

  }
  return result;
};

module.exports = takeUntil;

/*const array1 = [1, 2, 3, -4, -5];
const callback1 = takeUntil(array1, x => x < 0);

console.log(callback1); // [1, 2, 3]
*/