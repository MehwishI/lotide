const eqObjects = require("./eqObjects");

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
