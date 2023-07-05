// const student1 = {
//     id: 1,
//     name: "Reed",
//     subjects: [],
//     addSubject(subject) {
//       this.subjects = [...this.subjects, subject];
//     }
//   }
  
//   student1.addSubject('Math');
//   console.log(student1.subjects);

  // we can do to create constructor function
  function Student(id, name, subjects = []){
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }

  Student.prototype.addSubject = function(subject){
    this.subjects = [...this.subjects, subject];
  }
  const student1 = new Student(1, "Reed") 
  const student2 = new Student(2, "John doe") 

  student1.addSubject('Math');
  student2.addSubject('Physics');


  console.log(student1.subjects);
  console.log(student2.subjects);

/**
 * Challenge 
 */

// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:
console.log('-------------')
function Book( id, title, author, themes = []) {
	this.id = id;
	this.title = title;
	this.author = author;
    this.themes = themes;
}

Book.prototype.addTheme = function(newTheme){
    this.themes = [...this.themes, newTheme];
}

const book1 = new Book(1, "Lord of the Rings", "JRR Tolkien");
const book2 = new Book(2, "The Trial", "Franz Kafka");
book1.addTheme('Fantasy');
book2.addTheme('Corruption');
console.log(book1.themes);
console.log(book2.themes);