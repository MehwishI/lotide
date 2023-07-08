# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @mehwiqb/lotide`

**Require it:**

`const _ = require('@mehwiqb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- head: Finds the head of an array passed as an argument
- tail: Finds the tail of an array passed as an argument
- middle: Finds the middle of an array passed as an argument
- assertEqual: It compares two values passed as arguments
- assertArraysEqual: It compares two arrays passed as arguments
- eqArrays: It compares two arrays
- assertObjectsEqual: It compares two objects passed as arguments
- eqObjects: It compares two objects passed as arguments
- countLetters: It returns number of letters in a string
- countOnly : It takes in a collection of items and return counts for a specific subset of those items.
- findKey: It takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.
- findKeyByValue: It searches for a key on an object where its value matches a given value.
- flatten: Flattens an array passed
- letterPositions: return all the indices (zero-based positions) in the string where each character is found.
- map: The map function will return a new array based on the results of the callback function.
- without: returns array without a given element
- takeUntil: this function will keep collecting items from a provided array until the callback provided returns a truthy value.
