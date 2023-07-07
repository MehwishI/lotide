// const assertEqual = function (actual,expected){

//   if(actual===expected)
//   {
//     //console.log(`Assertion Passed!, ${actual} === ${expected}`); 
//     return true;
//   }
//   else 
//   {
//     //console.log(`Assertion Failed!, ${actual} !== ${expected}`); 
//     return false;
//   }
  
// };
// const eqArrays = function (arr1, arr2){
//  if(arr1.length === arr2.length){
//   for( let i=0; i <arr1.length; i++){

//     if(assertEqual(arr1[i],arr2[i]) === false){
//       return false;
//     }
     
//   }
//   return true;
//  }
// };

// const assertArraysEqual = function (arr1,arr2){

//   if(eqArrays(arr1,arr2)){
//     console.log(`The arrays, ${arr1} and ${arr2} are equal!`);
//   }
//   else {
//     console.log(`The arrays, ${arr1} and ${arr2} are not equal!`);
//   }

// }

const middle = function (myarr){

  let newarr =[];
  if(myarr.length<=2){
    return [];
  }
  if((myarr.length) % 2 === 0){
    newarr.push(myarr[((myarr.length)/2)-1]);
    newarr.push(myarr[(myarr.length/2)]);

  }
  else {
    newarr.push(myarr[((myarr.length)/2)-0.5]);
  }
  return newarr;
}
module.exports = middle;

