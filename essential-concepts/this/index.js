/*
this: reference to an object
4 Rules to 'this'. How is it called?

1) in the global context (global object, undefined in strict mode)
2) as a method on an object (object on left side of dot)
3) as a constructor function or class constructor (the instance itself with new)
4) as a DOM event handler (the element itself)

*/

/**
 * 1) in the global context
 */

// console.log(this);
// function whatIsThis(){
//     // console.log(this);
//      this.something = 2;
//     console.log(something);
// }
// whatIsThis();
// console.log(window.something)

/**
 * 2) as a method on an object
 */

// const userInfo = {
//   title: "Programmer",
//   user: {
//      first: 'Reed',
//      last: 'Barger',
//      greetUser() {
//       console.log(`Hi, ${this.first} ${this.last} ${this.title}`);  
//      }   
//   }  
// }

// userInfo.user.greetUser()



/**
 * 3) as class constructor
 */
// class User {
//   constructor(first, age) {
//     this.first = first;
//     this.age = age;  
//   }  
  
//   getAge() {
//     console.log(`${this.first}'s age is ${this.age}`);  
//   }
// }

// const user = new User('Bob', 24);
// user.getAge()

/**
 * as a constructor function
 */

// function User( first, age) {
//     this.first = first;
//     this.age = age;
// }



// User.prototype.getAge = function(){
//     console.log(`${this.first}'s age is ${this.age}`);  
// }
// const user = new User('Bob', 23 );

// user.getAge();

/**
 * DOM
 */


// const button = document.createElement('button');
// button.textContent = "Click";
// document.body.appendChild(button);

// button.addEventListener('click', function() {
//   console.log(this);
// })


// call(), apply(), bind()

/**
* With the call() method, you can write a method that can be used on different objects.

* In JavaScript all functions are object methods.
* If a function is not a method of a JavaScript object, it is a function of the global object 

*/

const user = {
    name: "Reed",
    title: "Programmer"  
  }
  
  function printUser() {
    console.log(`${this.name} is a ${this.title}`);
  }

  printUser.call(user);


  function printBio(city, country) {
    console.log(`${this.name} is a ${this.title} in ${city}, ${country}`);
  }

  /**
   * The Difference Between call() and apply()
    The difference is:

    * The call() method takes arguments separately.

    * The apply() method takes arguments as an array.
   */
  
  printBio.call(user, 'London', 'England')
  printBio.apply(user, ['London', 'England'])


  const userDescription = printUser.bind(user);
  const user2 = {
    name: "Doug",
    title: "Entrepreneur"  
  }
  
  printUser.bind(user2);
  
  userDescription();


  const user4 = {
    first: 'Bob',
    fn() {
       console.log(this.first); 
    },
    arrowFn: () => {
      console.log(this.first);  
    }
  }
  
  user4.fn();
  user4.arrowFn();


  