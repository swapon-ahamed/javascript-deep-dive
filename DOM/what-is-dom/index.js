// JS -> HTML, CSS (DOM - Document Object Model)

const p = document.createElement("p");
p.innerHTML = 'Hello World';
document.body.append(p);
document.body.style.background = 'palegoldenrod';
p.style.color = "05f";

p.addEventListener("click", () => console.log('Clicked!'))