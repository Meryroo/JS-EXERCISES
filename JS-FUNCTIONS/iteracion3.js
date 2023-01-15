/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.*/
const numbers = [1, 2, 3, 5, 45, 37, 58];

let result = 0
const sumAll = (list) =>{    
    for (const number of numbers){
        result += number 
    }
    return result
}
  

console.log (sumAll(numbers))

/*Usando reduce*/

const totalSum = (list) =>{
const finalSumNumbers = numbers.reduce(
        (acumulador,number) => acumulador + number,0)
        return finalSumNumbers
}


console.log(totalSum(numbers))


