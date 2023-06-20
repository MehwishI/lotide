const assertEqual = function (actual,expected){

  if(actual===expected)
  {
    //console.log(`Assertion Passed!, ${actual} === ${expected}`); 
    return true;
  }
  else 
  {
    //console.log(`Assertion Failed!, ${actual} !== ${expected}`); 
    return false;
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

const assertArraysEqual = function (arr1,arr2){

  if(eqArrays(arr1,arr2)){
    console.log(`The arrays, ${arr1} and ${arr2} are equal!`);
  }
  else {
    console.log(`The arrays, ${arr1} and ${arr2} are not equal!`);
  }

}
const without = function (array,itemsToRemove){
  let newarr=[];

  for( let element of array){
    if(!itemsToRemove.includes(element)){   //includes uses === (matches type and value both)
      newarr.push(element);
    }
    
   }
   return newarr;
}
console.log(without([1, 2, 3], [1]));// => [2, 3]
console.log(without(["1", "2", "3",2], [1, "3"]));// => ["1", "2",2] // its removing matched values from first array
console.log(without([4,6,8],[3]));