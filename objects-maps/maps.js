let user = new Map(
    [
        ['username', 'swapon.ahamed'],
        ['email', 'swapon.ahamed@gmail.com'],
    ]
);

console.log(user.get('username'))


let profession = new Map();
profession.set('id', 100);

console.log(profession.get('id'));

profession.set('userinfo', user);
console.log(profession.get('userinfo'));

const fname = "swapon";
const lname = "ahamed";

profession.set('fname', fname);
profession.set('lname', lname);

console.log(profession.get('userinfo').get('email'));