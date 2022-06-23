const middle = function(arr) {
  const middleIndex = arr[Math.floor((arr.length - 1) / 2)];

  let middleElements = [];

  if (arr.length <= 2) {
    return middleElements;
  }
  
  if (arr.length % 2 !== 0) {
    middleElements.push(middleIndex);
  
  } else {
    middleElements.push(middleIndex);
    middleElements.push(middleIndex + 1);
  }
  console.log(middleElements);
  return middleElements;
};


module.exports = middle;