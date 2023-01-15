/*Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:*/

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  let res = []
  const finalCountWords = (list) =>{
    
    for (const word of counterWords){
      if (res[word]){
          res[word] ++
      }
      else {
          res[word] = 1
      }
    }   
    return res
  }
 
  console.log(finalCountWords(counterWords))
