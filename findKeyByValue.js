// func takes obj, val

const findKeyByValue = function(obj, val) {

  // get key from obj

  const getKey = Object.keys(obj);

  // loop through obj keys

  for (const key of getKey) {

    // if obj key = val return key

    if (obj[key] === val) {

      return key;

    }
  }
};

module.exports = findKeyByValue;

/* const bestTVShowsByGenre = {

  sciFi: "The Expanse",

  comedy: "Brooklyn Nine-Nine",

  drama:  "The Wire"
};


console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"),);

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse") ,);

console.log(findKeyByValue(bestTVShowsByGenre, "SpongeBob"),);

/*
this function takes an object and looks at the value and returns the corresponding key
*/