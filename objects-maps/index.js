// Object is key value pair 

// variablses - boxes
// objects - file cabinets

const blue = "#00f";
const orange = "#f60";

const colors = { yellow: "#ff0", blue, orange };

console.log(colors);

const obj = {
    sayHi() {
        console.log("sayHi");
    },
    sayHello: function () {
        console.log("sayHello ");
    },
    say: () => {
        console.log("say");
    },
};

obj.sayHi();
obj.sayHello();
obj.say();
