/*Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:*/


const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  const findName = (list, item) =>{
    for (const name of list){

        if(list.includes(item)){
            return [true, list.indexOf(item)]
           }
          else {
            return false;
          } 
        }   
        
    }       


console.log(findName(nameFinder,'paco'))
console.log(findName(nameFinder,'Tony'))

  
  
/*Usando filter*/ 

const namefiltered = (list, name) =>{
  const characterName = list.filter ((name) =>  name.includes(name))
  if (list.includes(name)){
    return [true, list.indexOf(name)]
  }
  else {
    return false
  }
   
}
  
console.log(namefiltered(nameFinder, 'Andres'))



  
  

  

   