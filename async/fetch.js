// API - Application Programming Interface: software to communicate with other software
// API - helpful service
// REST API

// CRUD 
// create POST
// read GET
// update PUT / PATCH
// delete DELETE

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)
// jsonplaceholder.typicode.com

/**
 * 
 * https://github.com/public-apis/public-apis
 */

// GET /posts/1 - single blog post
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // return Promise
  .then(data => console.log(data))



  // POST /posts
const blogPost = {
    title: "Cool post",
    body: "lkajsdflkjasjlfda",
    userId: 1  
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
       "Content-Type": "application/json" 
    },
    body: JSON.stringify(blogPost)
  })
    .then(response => response.json())
    .then(data => console.log(data))


    fetch('https://jsonplaceholder.typicode.com/pots/1')
  .then(response => {
      if (!response.ok) {
        throw new Error(response.status);  
      }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))


  // Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3

fetch("https://jsonplaceholder.typicode.com/users/3")
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})
.then(person => {
    console.log(`${person.name} works for ${person.company.name}`);
})
.catch(err => console.log(err));