const ul = document.createElement('ul')
const li = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')

li.textContent='html'
li2.textContent='css'
li3.textContent='js'

ul.append(li,li2,li3)
console.log(ul)