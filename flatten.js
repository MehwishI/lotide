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

const flatten = function (myarr){
 let newarr= [];
  for(let element of myarr){
    if(Array.isArray(element)){
      for(let nesarr of element){
        newarr.push(nesarr);
      }
    }
    else {
      newarr.push(element);
    }
  }
  return newarr;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));// => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [3, 4], 5, [6],"hello",["j","k",65]]));// => [1, 2, 3, 4, 5, 6]
