const without = require('../without');
const assert = require('chai').assert;

console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3",2], [1, "3"]));// => ["1", "2",2] // its removing matched values from first array
console.log(without([4,6,8],[3])); //  => [4,6,8]


describe('#without',() => {
  it("returns [2,3] for [1,2,3] and [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]),[2,3]);

  });

  it("returns ['1','2',2] for ['1', '2', '3',2] and [1, '3']", () => {
    assert.deepEqual(without(["1", "2", "3",2], [1, "3"]),["1","2",2]);

  });

});