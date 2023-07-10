const user = {
    name: "",
    username: "",
    email:"",
    password: "",
    phoneNumber:""
}

const newUser = {
    username: "swapon.ahamed",
    password: "123456",
    email: "swapon.ahamed"
}

// Object.assign(user, newUser);
// here is a problem. user object will be muted or modified. 
// because object passed reference not passed values
console.log(user);

// Solutions: 
console.log(Object.assign({},user, newUser));
// const createdUser = { ...user, ...newUser, verified: false };

console.log(user); // not muted