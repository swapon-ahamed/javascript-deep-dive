// const el = document.getElementById('home')
// console.log(el)

// const links = document.querySelectorAll('a');
// // console.log(link);

// links.forEach(link => {
//   if (link.matches('a[href="/login"]')) {
//     const loginLink = link;
//     console.log(loginLink);  
//   }
// })

const divs = document.getElementsByTagName('div')
console.log(divs);

const newPost = document.createElement('div');
newPost.className = 'top-post';
newPost.innerHTML = "<strong>This is a new post</strong>"

// document.body.append(newPost);

const post = document.querySelector('.post');

post.prepend(newPost);


// Challenge: 
// 1. Update text in the Scrimba mini-browser to match the title of this cast
// 2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
// Add it right under the modified text.

const title = document.querySelector('h1');
title.innerHTML = "Creating and modifying HTML elements";

const tagline = document.createElement('h2');
tagline.className = 'tagline';
tagline.innerHTML = 'I can create HTML elements!';

title.append(tagline);


// Dynamically add css 
const post = document.querySelector(".post");
// post.style.margin = '30px';
post.classList.remove('post');