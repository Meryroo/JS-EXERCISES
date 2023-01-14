/*Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const averageWord = (list) =>{

    let total = 0;

    for (const item of list)
    if ( typeof item == `number`){
        total += item
    }
    else {
        total += item.length
    }

    return total
}



 console.log(averageWord(mixedElements))