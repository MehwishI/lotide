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

- head: This function finds the head of an array passed as an argument
- tail: This function finds the tail of an array passed as an argument
- middle: This function finds the middle of an array passed as an argument
- assertEqual: This function compares two values passed as arguments
- assertArraysEqual: This function compares two arrays passed as arguments
- eqArrays: This function compares two arrays
- assertObjectsEqual: This function compares two objects passed as arguments
- eqObjects: This function compares two objects passed as arguments
- countLetters: This function returns number of letters in a string
- countOnly : This function takes in a collection of items and return counts for a specific subset of those items.
- findKey: This function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value.
- findKeyByValue: This function searches for a key on an object where its value matches a given value.
- flatten: This function Flattens an array passed with all nested arrays inside
- letterPositions: This function returns all the indices (zero-based positions) in the string where each character is found.
- map: The map function will return a new array based on the results of the callback function.
- without: This function returns the array without a matched element(s) from a given list
- takeUntil: This function will keep collecting items from a provided array until the callback provided returns a truthy value.
