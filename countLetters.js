const countLetters = function(str) {
  const result = {};

  if (typeof str !== "string") {
    return "input is not a string";
  }
  let lowerCaseStr = str.toLowerCase();
 
  for (let letter of lowerCaseStr) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  
  return result;
};

module.exports = countLetters;
