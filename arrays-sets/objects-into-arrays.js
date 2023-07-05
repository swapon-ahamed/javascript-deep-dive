/* 
Essentials to learn the following methods for javascript objects and array operation
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- array spread operator
*/



const Obj = {
  one: 1,
  two: 2,
};

// for-in loop
// for(key in Obj){
//     console.log("keys", key)
//     console.log("values", Obj[key])
// }˜

// const user = {
//   name: "John",
//   age: 25,
// };

//console.log(Object.keys(user)) // return array
// console.log(Object.keys(user).includes('age')); // return true

// Object.keys(), Object.values(), Object.entries()
// const values = Object.keys(user).map((key) => user[key]);
// console.log(values)
// same as
// console.log(Object.values(user));

/**
 * Example: Calculate total monthly expense from the following objects
 */
const monthlyExpenses = {
  food: 400,
  rent: 1700,
  insurance: 550,
  internet: 49,
  phone: 95,
};

const monthlyTotal = Object.values(monthlyExpenses).reduce(
  (accumulator, expense) => accumulator + expense,
  0
);
console.log(monthlyTotal);

// output: [{name: "John", age: 29, id: "2345234"}, {name: "Jane", age: 42, id: "8798129"}]

const users = {
  2345234: {
    name: "John",
    age: 29,
  },
  8798129: {
    name: "Jane",
    age: 42,
  },
  1092384: {
    name: "Fred",
    age: 17,
  },
};

const userOver20 = Object.entries(users).reduce((acc, [id, user]) => {
  if (user.age > 20) {
    acc.push({ ...user, id });
  }
  return acc;
}, []);

console.log(Object.entries(users))
console.log(userOver20);