const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(`🟢Assertion Passed: "${actual}" === "${expected}"`) :
    console.log(`🔴Assertion Failed: "${actual}" !== "${expected}'`);
};
console.log(assertEqual);

//Test code

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, "yes");
assertEqual("red", "blue");
assertEqual(-2, -2);
assertEqual(true, true);
assertEqual("green", "green");


module.exports = assertEqual;