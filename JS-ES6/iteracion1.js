/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros*/

const numbers = ( a = 10, b = 5) =>{
    return a + b
}

let noParamFunction = numbers()
console.log(noParamFunction)

let firstParam = numbers(8)
console.log(firstParam)

let secondParam = numbers(6,9)
console.log(secondParam)

/* Otra forma de declarar la funcion sería*/

const sumNumbers = (a = 10, b = 5) => a + b
let finalSum = sumNumbers ()
console.log(finalSum)