/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];


const list = document.createElement("ul")
    for (const countrie of countries){
    const li = document.createElement("li")
    list.appendChild(li)
    const appenCountrie= document.createTextNode([countrie])
    li.appendChild(appenCountrie)
   
    }

document.body.appendChild(list)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeItem = document.querySelector(".fn-remove-me")
removeItem.remove()

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


const carsUl = document.createElement("ul")
for (const item of cars){
    const carLi = document.createElement("li")
     carsUl.appendChild(carLi)
    const carText = document.createTextNode([item])
    carLi.appendChild(carText)
}

const container = document.querySelector("[data-function='printHere']")
console.log(container)
document.body.appendChild(carsUl)

/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const movies = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];



for (const movie of movies){
const div = document.createElement("div")
const myH4 = document.createElement("h4")
const myImg = document.createElement("img")
const title = document.createTextNode([movie.title])
div.appendChild(myH4)
myH4.appendChild(title)
const img = document.createTextNode([movie.imgUrl])
myImg.appendChild(img)
div.appendChild(myImg)

document.body.appendChild(div)
}

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.*/

const myContainer = document.createElement("section")
const myDiv = document.querySelectorAll("div")
for (const item of myDiv){
    myContainer.appendChild(item)
}

document.body.appendChild(myContainer)


const myBtn = document.querySelector("button")
myBtn.addEventListener("click", () =>{
myContainer.removeChild(myContainer.lastChild)
})

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/

const removeHtml = document.querySelectorAll("h4")
const htmlBtn = document.querySelector("#htmlBtn")
console.log(removeHtml)
for (const item of removeHtml){
htmlBtn.addEventListener("click", () =>{
    item.remove()
})
}

const removeImg = document.querySelectorAll("img")
console.log(removeImg)
for (const item of removeImg){
    const imgBtn = document.querySelector("#imgBtn")
    imgBtn.addEventListener("click", () =>{
        item.remove()
    })
}
  










