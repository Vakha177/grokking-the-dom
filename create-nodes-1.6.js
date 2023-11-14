const div = document.createElement('div')

const ul = document.createElement('ul')


const li = document.createElement('li')


const li2 = document.createElement('li')

const a = document.createElement('a')
a.href ='https://intocode.ru'
a.textContent=('instagramm')
li.appendChild(a)

const a2 = document.createElement('a')
a2.href='https://intocode.ru'
a2.textContent=('наш сайт')
li2.appendChild(a2)

ul.append(li,li2)
div.append(ul)
console.log(div)

