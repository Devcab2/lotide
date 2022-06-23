const flatten = function(arr) {
  // initialize empty array
  let flattenedArray = [];
  //iterate over input array
  for (let i = 0; i < arr.length; i++) {
    // if array[i] is array
    if (Array.isArray(arr[i])) {
      //iterate array[i] & push all elements within > flattenedArray
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArray.push(arr[i][j]);
      }
    // if array[i] isn't array, push arr[i] > flattenedArray
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  // return the  flattenedArray
  return flattenedArray;
};

module.exports = flatten;

//flatten([1, 2, [3, 4], 5, [6]]);

// => [1, 2, 3, 4, 5, 6]





























