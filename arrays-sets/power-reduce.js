const numbers = [1,2,3,4,5,6,7]; // out put [2,4,6,8,10,12,14]

const doubleNumbers = numbers.reduce( (acc, num ) => {
    acc.push(num * 2)
    return acc;
}, [])
console.log(doubleNumbers);



const greaterNumbers = numbers.reduce((acc, num) => {
    if (num > 3) {
      acc.push(num);
    }  
    
    return acc;
  }, []);
  console.log(greaterNumbers);

//   const greaterNumbers = numbers.filter(num => num > 3);
// console.log(greaterNumbers);

// const greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);
// console.log(greaterNumbers);