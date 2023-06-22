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

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  const obj= {}
  let count =0;

  for (let element of allItems ){
    count =0;
    if(itemsToCount.hasOwnProperty(element) && itemsToCount[element] === true){
      obj[element] = count +1; 
    }
  }
  return obj;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
console.log(result1);
assertEqual(result1["Karima"], undefined);
console.log(result1);
assertEqual(result1["Fang"], 2);
console.log(result1);
assertEqual(result1["Agouhanna"], undefined);