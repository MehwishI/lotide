const eqObjects = require('../eqObjects');

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
// console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };

// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject),true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false