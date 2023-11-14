const ul = document.createElement("ul");
ul.classList.add("List");

const li = document.createElement("li");
li.textContent=("Hello words!");

document.body.appendChild(ul);

ul.appendChild(li);

console.log(ul);
console.log(li);
