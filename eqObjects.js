const assertEqual = function (actual,expected){

  if(actual===expected)
  {
    console.log(`Assertion Passed!, ${actual} === ${expected}`); 
  }
  else 
  {
    console.log(`Assertion Failed!, ${actual} !== ${expected}`); 
  }
  

};
const eqArrays = function (arr1, arr2){
  if(arr1.length === arr2.length){
   for( let i=0; i <arr1.length; i++){
 
     if(assertEqual(arr1[i],arr2[i]) === false){
       return false;
     }
      
   }
   return true;
  }
 };

const eqObjects = function(object1, object2) {

  if(Object.keys(object1).length === Object.keys(object2).length){
    for(let key of Object.keys(object1)){
       if(Object.keys(object2).includes(key) && Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if(!eqArrays(object1[key],object2[key])){
          return false;
        }
       }
      else {
        if(!Object.keys(object2).includes(key) && (object1[key] === object2[key])){
      return false;
      }
    }

  }
   return true
}
}


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