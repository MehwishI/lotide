const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (
        Object.keys(object2).includes(key) &&
        Array.isArray(object1[key]) &&
        Array.isArray(object2[key])
      ) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (
          !(Object.keys(object2).includes(key) && object1[key] === object2[key])
        ) {
          return false;
        }
      }
    }
    return true;
  }
};
const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect;

  if (eqObjects(object1, object2)) {
    console.log(
      `Assertion Passed! The two objects, ${inspect(object1)}.${inspect(
        object2
      )} are euqal!`
    );
  } else {
    console.log(
      `Assertion failed! The two objects, ${inspect(object1)}.${inspect(
        object2
      )} are not euqal!`
    );
  }
};

module.exports = assertObjectsEqual;
