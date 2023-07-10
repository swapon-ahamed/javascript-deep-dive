"use-strict";
const response = "Jack";
const isValid = true;

let username;
// if (response) {
//     username = response;
// } else {
//     username = "Guest";
// }

// ternaray form
// let username = response ? response: "guest";

// short-circuiting form
// let username = response || "guest";
// console.log(username)


/**
 * for multiple condition
 */

// if(response){
//     if(isValid){
//         username = response;
//     }
// } else {
//     username = "guest";
// }

username = response && username || "guest";


console.log(username);


