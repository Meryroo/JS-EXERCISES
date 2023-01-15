/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.*/

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colors1 = colors.splice(0,1)
const colors2 = colors.splice(1,4)

const totalColors = [...colors1,...colors2]
console.log(totalColors)