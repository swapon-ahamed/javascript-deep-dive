const colors = {
    white: '#fff',
    black: '#000',
    'blue color': 'ff0'
}

// access by key 
console.log('white hex:', colors.white);
// but we can not access 'blue color' as a key . So we have to use []
console.log("Blue Hex: ", colors['blue color']);


function getColor( key ) {
    return colors[key]; // result #ff0
    // return colors.key; /* result undefined */
}
console.log(getColor('white'));  // result #ff0


// destructuring 
const user = {
    name: "Swapon",
    email: "swapon.ahamed@gmail.com",
    details: {
        title: "Software Engineer"
    }
}

function getUserInfoStepOne(){
    return `name: ${user.name}, email: ${user.email}`;
}

console.log(getUserInfoStepOne());

const { name, email, details: { title } } = user;

function getUserInfoStepTwo(){
    return `Name: ${name}, E-mail: ${email}, Designation: ${title}`;
}

console.log(getUserInfoStepTwo());


function getUserInfoStepThree({ name, email, details: { title } }){
    return `Name: ${name}, E-mail: ${email}, Designation: ${title}`;
}

console.log(getUserInfoStepThree({ name, email, details: { title } }));








