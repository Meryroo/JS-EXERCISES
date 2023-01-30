import './style.css'


const color_palette = {
  '#993955': 'Magenta',
  '#AE76A6': 'Pearly Purple',
  '#A3C3D9': 'Pale Cerulean',
  '#CCD6EB': 'Crayola',
  '#E9ECF5': 'Ghost White'
}


const addOptionsToColorPicker = () =>{
  const colorPicker = document.querySelector("#color-picker")
  for (const color in color_palette){
    const option = document.createElement("option")
    option.value = color;
    option.innerText = color_palette[color]
    console.log(option)
    colorPicker.appendChild(option)
  }
}

const addEventListenerToColorPicker = () =>{
const colorPicker = document.querySelector("#color-picker")
const textColor = document.querySelector("#color-name")
colorPicker.addEventListener("change", (ev) =>{
const newColor = ev.target.value;
document.body.style.background = newColor;
textColor.innerText = `${color_palette[newColor]}|${newColor}`
})


}
addOptionsToColorPicker()
addEventListenerToColorPicker()
