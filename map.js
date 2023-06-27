
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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback){
  
  const result= []
  for (let item of array)
  {
    result.push(callback(item));


  }
 return result;
}

const result1= map(words, word => word[0]);

assertArraysEqual(map(words, word => word[0]), ['a','b','c']);
assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);


assertArraysEqual(map(words, word => word[1]), ['r','o','o','a','o']);

assertArraysEqual(map(words, word => word[2]), ['r','o','o','a','o']);



//console.log(result1);