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
 
 const assertArraysEqual = function (arr1,arr2){
 
   if(eqArrays(arr1,arr2)){
     console.log(`The arrays, ${arr1} and ${arr2} are equal!`);
   }
   else {
     console.log(`The arrays, ${arr1} and ${arr2} are not equal!`);
   }
 
 }
 
 const letterPositions=  function (sentence)
 {
  const result = {}
  
   for (let i= 0; i<sentence.length; i++){
    if(sentence[i] !== ' '){
      if(!result[sentence[i]]){
        
        result[sentence[i]]= [i]
      }
      else {
        
        result[sentence[i]].push(i)
      }
    } 

   }



  return result;

 }

 console.log(letterPositions("Lighthouse labs example example"))


 assertArraysEqual(letterPositions("hello").e, [1]);
 //assertArraysEqual(letterPositions("Inayah").e, [1]);
 //assertArraysEqual(letterPositions("Banana").n, [4]);