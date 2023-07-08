const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (!Object.keys(object2).includes(key)) {
      return false;
    }
    if (Object.keys(object2).includes(key) && object1[key] !== object2[key]) {
      return false;
    }
    if (
      Object.keys(object2).includes(key) &&
      Array.isArray(object1[key]) &&
      Array.isArray(object2[key])
    ) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
