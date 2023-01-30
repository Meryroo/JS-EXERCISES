import './style.css'




const paleta = document.querySelector("#paleta")

paleta.addEventListener("input", (ev) =>{
let background = document.querySelector("body")
background.style.background = ev.target.value
})
