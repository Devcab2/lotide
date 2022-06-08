/* countLetters function that will take a string and return an object that displays each character in the array and how many times it is read
*/
// can use for of loops w strings.

const countLetters = function(str) {
  const result = {};
 
  // set result to equal an object

  if (typeof str !== "string") {
    return "input is not a string";
  }
  // confirm input is a string

  let lowerCaseStr = str.toLowerCase();
  /* take string and make all characters lowercase
  */
  
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


/* loop through str and count each character and add by 1 for each time that character is seen.
*/

let result1 = countLetters("Pink Panther Pie");
let result2 = countLetters("?!?!?!");
let result3 = countLetters("ALl CaPS TESt");
let result4 = countLetters(" 1, 2, 3");

console.log(result1); // expected > ( p: 3, i: 2, n: 2, k: 1, a: 1, t: 1, h: 1, e: 2, r: 1 }
console.log(result2); // expected > { '?' : 3, '!' : 3 }
console.log(result3); // expected > { a: 2, l: 2, c: 1, p: 1, s: 2, t: 2, e: 1 }
console.log(result4); // expected > { '1': 1, '2': 1, '3': 1, ',': 2 }}