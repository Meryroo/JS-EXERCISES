/*2.1 Inserta dinamicamente en un html un div vacio con javascript.
2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDiv = document.body.innerHTML = "<div><p></p></div>"

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript

const myDiv = document.createElement("div")

for (let i = 0; i < 6; i++){
    const newP = document.createElement ("p")
    myDiv.appendChild(newP)
}

document.body.appendChild(myDiv)


2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const mydiv = document.body.innerHTML = "<p>Soy dinámico</p>"
         
2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const createText = document.querySelector("h2")
console.log(createText)

const Text = document.createTextNode('Wubba Lubba dub dub')

createText.appendChild(Text)

2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const NewUl = document.createElement("ul")

for (const item of apps){
    const li = document.createElement("li")
    NewUl.appendChild(li)
    const newLi = document.createTextNode([item])
    li.appendChild(newLi)
}

document.body.appendChild(NewUl)


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const items = document.querySelectorAll(".fn-remove-me")

for (const item of items){
    item.remove()
}

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

    

    const myDiv = document.querySelector("div")
    console.log(myDiv)
    
    myDiv.insertAdjacentHTML ("afterend", '<p>Voy en medio</p>')

    2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here*/

    const myDivs = document.querySelectorAll(" div.fn-insert-here")
  
    for (const item of myDivs){
        console.log(item)
        const myPs = document.createElement("p")
        item.insertAdjacentElement("afterbegin", myPs)
        const text = document.createTextNode("Voy dentro!")
        myPs.appendChild(text)
    }
