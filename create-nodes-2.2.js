const todo = ['html' , 'css' , 'js']
const w = document.createElement('ul')
function render(todo) { 
for(let i = 0 ; i<todo.length ; i++) {
    const li = document.createElement("li")
    li.textContent(todo[i])
}
}
render(todo)
