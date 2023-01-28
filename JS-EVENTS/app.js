/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

const myButton = document.querySelector("#btnToClick")

myButton.addEventListener("click", () =>{
    console.log("Has hecho click")
})

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputFocus = document.querySelector(".focus")

inputFocus.addEventListener("focus", (event) => {
    console.log (" Has hecho focus")
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.//

const value = document.querySelector(".value")
value.addEventListener ("input", (ev) =>
console.log ((ev.target.value))    )

