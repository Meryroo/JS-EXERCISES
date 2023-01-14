/*Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/
const numbers = [1, 2, 3, 5, 45, 37, 58];


const sumAll = (promedio) =>{
let promedio = 0;
for (const number of numbers){
(promedio += number)/7
}
return promedio
}
 
console.log(sumAll(numbers));