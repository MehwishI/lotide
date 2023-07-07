const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1,2,3],[1,2,3]);//returns true
assertArraysEqual([1,2,"h"],[1,2,3]);//returns false
assertArraysEqual([1,3],[1,"o",3]);//returns false