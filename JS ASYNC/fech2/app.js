/*1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/
const baseUrl = 'https://api.nationalize.io';

fetch("https://api.nationalize.io")
.then((res) => res.json())
.then((res) => console.log(res))

const myBtn = document.querySelector("button")
console.log(myBtn)

myBtn.addEventListener("click", (input) =>{
    fetch("https://api.nationalize.io")
    .then((res) => res.json())
    .then((res.json()) == data)
    
    if (data == input.target.value){
        console.log(data)
    }
    
   
    
})