/* countOnly function takes 2 arguments an array of strings(allItems)
 & itemsToCount an object that tells us what to count
*/

const countOnly = function(allItems, itemsToCount) {
  
  const results = {}; //object to store elements + their count
  
  for (const item of allItems) {  // loop through allItems
    
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1; // if item exists in array add/count add to results object
      } else {
        
        results[item] = 1; // else add to array and set count to 1
      }
    }
  }
  
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Salima"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": true });
const result2 = countOnly(firstNames, { "Fang": true, "Joe": false, "Salima": true, "Jack": true });



console.log(result1); // expected: agou: 1 Fang: 2 Jason: 1
console.log(result2); // expected: Fang: 2 Salima: 3

// if key-value pair is false than the object is not counted, same when element doesnt occur in firstNames to begin with.
