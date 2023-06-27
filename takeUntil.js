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
const takeUntil = function(array, callback){
 const result =[];
  for (let item of array ){
    if(!callback(item)){ 
      result.push(item);
    }
    else return result;
  }
  return result;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2]);
assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5]);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data2, x => x === ','),[''])