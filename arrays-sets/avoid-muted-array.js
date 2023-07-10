const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIndex = lunchMenuIdeas;
allMenuIndex.push('New item');
console.log(lunchMenuIdeas) // this is muted

// avoid muted to using concate method 

const arr1 = ["Cecilie", "Lone"];
const arr2 = arr1.concat(['Linus']);
console.log(arr1);


// To avoid muted, we can use spreed operator 

const temperature = [30, 33, 35];

const newTemp = [...temperature];
newTemp.push(40)

console.log(temperature, newTemp);