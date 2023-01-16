/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const newAges = ages.filter((age => age % 2 == 0))
console.log(newAges)

//y para devoler los impares

const imparAges = ages.filter((age => age % 2 == 1))
console.log(imparAges)