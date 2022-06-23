const map = (array, callback) => {
  
  let newArray = [];

  //initialize new empty array

  for (let item of array) {

    newArray.push(callback(item));

    // loop through array get result of callback on array and push it too newArr

  }

  return newArray;

};

module.exports = map;

/* const words = ["Lilly", "Stephanie", "Baby"];


const results1 = map(words, word => word[0]);
const results2 = map(words, word => word);
const results3 = map(words, word => word.length);

// map can be used different ways shown above


console.log(results1); // [ "L", "S", "B"]
console.log(results2); // ["Lilly", "Stephanie", "Baby"]
console.log(results3); // [5, 9, 4]

// note that the callback is only defined when calling map not inside the function (anonymous)
*/