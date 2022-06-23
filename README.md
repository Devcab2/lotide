# Lotide

A mini clone of the [Lodash](https:lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production code

This projecgt was created and published by me as part of my lernings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const_= require('@christian_bowyer/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- assertArraysEqual(actual, expected): Function that takes 2 arrays, actual and expected and asserts whether they equal or not.

- assertEqual(actual, expected): Function that takes 2 parameters, actual and expected &asserts whether they are = or not.

- assertObjectsEqual(actual, expected): Function that takes 2 objects, actual and expected and asserts whether they are = or not

- countLetters(string): Function that takes string and returns object with the letters as keys and the amount of times that letter appears in the string as the value

- countOnly(allItems, itemsToCount): Function that takes an array and an object which specifies which items to count in the array by assigning t or f as value to the key. Returns an object with the items that have been counted as keys and the amount of times they appear as the corresponding value.

-eqArrays(actual, expected): Function that takes 2 arrays and returns true if they are equal and false if they are not.

- eqObjects(actual, expected): Function that takes 2objects and returns true if they are = and false if they are not.

- findKey(object, callback): Function that takes an object and a callback where the callback takes in the object keys as parameters. When the callback function returns t, the function will return the key that yieled the true result.

- findKeysByValue(object, value): Function that takes an object and value, it will iterate through the object's keys and when the key value = the value passed in, it will return the key that contains that value.

- flatten(nestedarray): Function that takes a single layer nested array and returns a single array with all the same items but without the nest

-head(array): Function that takes an array and returns the item at index 0.

-tail(array): Function that takes in an array and returns all items after index 0.

- middle(array): Function that takes in an array and returns the item at the mid index or mid indexes.

- letterPositions(string): Function that takes in a string and returns an object with the letters as keys and and array of index numbers at which that letter appears in the string as values.

- map(array, callback): Function that takes in an array and callback function and passes each item of that array through the callback function and returns a new array with the results.

- takeUntil(array, callback): Function that takes in an array and callback function and returns everything in the array up until the item that when passed into the callback function returns true.

- without(array1, array2): Function that takes in two arrays and removes items from the first that also exist in the second.