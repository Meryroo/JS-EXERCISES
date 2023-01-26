const characters = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']


const swap = (array, i, j) =>{
        let res = array[i]
        array[i] = array[j]
        array[j] = res
    return array
    } 
    console.log(swap(characters,0,2))




