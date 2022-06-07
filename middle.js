const middle = function(arr) {
  const middleIndex = arr[Math.floor((arr.length - 1) / 2)];

  //initialize empty middleElements array

  let middleElements = [];


  /*if arr length is < 3 return empty middleElements array*/

  if (arr.length <= 2) {
    return middleElements;
  }
  /*if arr length = odd push middle index of arr*/

  if (arr.length % 2 !== 0) {
    middleElements.push(middleIndex);
  
    /*if arr length % 2 = 0 push middleIndex and middleIndex + 1 */

  } else {
    middleElements.push(middleIndex);
    middleElements.push(middleIndex + 1);
  }
  // return middleElements
  return middleElements;
};

/*
For arrays w 1 or 2 elements,  Return an empty array.
*/

middle([1]); // => []
middle([1, 2]); // => []


/*
For arrays with odd number of elements, an array containing a single middle element should be returned.
*/

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]


/*
For arrays with an even number of elements, an array containing the two elements in the middle should be returned
*/

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
middle([1, 2, 3, 4, 5, 6, 7, 8]); // 4, 5