const item1=document.createElement('div')
item1.classList.add('red')
const item2=document.createElement('div')
item2.classList.add('green')
const item3=document.createElement('div')
item3.classList.add('blue')
item3.textContent=('я вложен')
item1.append(item2, item3)
console.log(item1);