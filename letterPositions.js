const letterPositions = function(string) {
  string = string.toLowerCase();
  
  const newObj = {};

  for (const letter of string) {

    if (letter !== " ") {

      newObj[letter] = [];

    }
  }

  for (let i = 0; i < string.length; i++) {

    if (string[i] !== " " && newObj[string[i]]) {

      newObj[string[i]].push(i);
    }
  }
  return newObj;
};

console.log(letterPositions("hello"));

module.exports = letterPositions;