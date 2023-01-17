/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.*/

const bichos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
const texto = 'Ajolote'

const findArrayIndex = (bichos, texto) =>{
    for (let i = 0; i < bichos.length; i++){
        const bicho = bichos[i]
        if ( bicho === texto){
            return i
        }
    }
   
}


   
console.log(findArrayIndex(bichos, texto))