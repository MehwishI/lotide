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

const countLetters = function(str) {
 let obj ={}
  let count= 0;
  console.log(str);

  for(let letter of str){
    
    if (letter !== ' '){
      if(!obj.hasOwnProperty(letter)){
        obj[letter] = 1;
      }
      else {
        obj[letter]= obj[letter] + 1 ;
      }
    }
  
  }
  return obj;
}
const result1= countLetters("Lighthouse Labs house pqrstrr");

console.log(result1);