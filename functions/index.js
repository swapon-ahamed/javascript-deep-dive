// function handleLike(){
//     let likeCount = 0;
//     return function addLike(){
//         likeCount+=1;
//         return likeCount; 
//     }
//     addLike();
// }

// let like = handleLike();
// console.log(like());
// console.log(like());
// console.log(like());


// const username = "John";
// const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`
// // console.log(capitalize(username));

// function getUser(name, callback){
//     return callback(capitalize(name));
// }

// const res = getUser(username, name => `Hi, ${name}`);
// console.log(res);


// function mul(val){
//     let amount = 50;
//     return  cons  =>  amount * val * cons;
// }

// const res = mul(5);
// console.log(res(10));



// function getData(baseUrl) {
//     return function(route){
//         return function(callback){
//             fetch(`${baseUrl}${route}`)
//                 .then(response => response.json())
//                 .then(data => callback(data));  
//         }

//     }

//   }
  
//   const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');
//   const getPosts = getSocialMediaData("/posts");
//   getPosts( posts => {
//     posts.forEach(data => console.log(data.title));
//   })

// short format 

   const getData = baseUrl => route => callback =>
    fetch(`${baseUrl}${route}`)
        .then(response => response.json())
        .then(data => callback(data));  

  const getSocialMediaData = getData('https://jsonplaceholder.typicode.com');
  const getPosts = getSocialMediaData("/posts");
  getPosts( posts => {
    posts.forEach(data => console.log(data.title));
  })