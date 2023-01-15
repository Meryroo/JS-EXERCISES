/*Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/
const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = (list) =>{  
let result = 0;
for (const number of numbers){
result += number / numbers.length;
}
return result
}
console.log(sumAll(numbers))

/* Usando reduce*/

const totalSum = (list) =>{
 const finalSumNumbers = numbers.reduce(
(acumulador,number) => acumulador + number,0) / list.length;
 return finalSumNumbers
    }
console.log(totalSum(numbers))



    
    