const findKey = function(obj, func) {

  for (let [key, value] of Object.entries(obj)) {

    if (func(value)) {

      return key;

    }

  }
};

module.exports = findKey;

/* console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1),"Blue Hill"));

// passed stars 1 = Blue Hill


console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3),"Akaleri"));

// stars: 3 = Akaleri  passed

console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1),"Bob"));

// undefined key doesnt exist

/*
this function (findKey) looks at an object and a callback, returns the first key for which the callback returns a truthy value
no key returns undefined
*/
