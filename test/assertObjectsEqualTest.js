const assertObjectsEqual = require('../assertObjectsEqual');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

const thirdShirtObject = { color: "orange", size: "large" };
const fourthShirtObject= { size: "XL", color: "grey" };

assertObjectsEqual(shirtObject,anotherShirtObject);
assertObjectsEqual(thirdShirtObject,fourthShirtObject);