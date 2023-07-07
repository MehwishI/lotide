const assertEqual = require('./assertEqual');
const eqArrays = function (arr1, arr2){
 if(arr1.length === arr2.length){
  for( let i = 0; i < arr1.length; i++){

    if(assertEqual(arr1[i],arr2[i]) === false){
      return false;
    }
     
  }
  return true;
 }
};

module.exports = eqArrays;