/**
 * undefined
 * null
 * boolen
 * number
 * string
 * symbol
 */

// primitive - passed by value

const num = 42;
const anotherNum = 42;
console.log(num === anotherNum);


// object - passed by reference
const obj = {};
const anotherObj = obj;
anotherObj.a = 1;

console.log('obj', obj);
console.log('another obj', anotherObj);

console.log(obj === anotherObj);