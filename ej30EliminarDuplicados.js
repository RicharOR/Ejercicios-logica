/* Dado un array de numeros, devolver el array sin elementos duplicados
Si hay un string eliminarlo del array

Ejemplo:
eliminarDuplicados([1,2,1,1,1,3,4]);  Devuelve: [1,2,3,4]

TODO: Cómo hacerlo:
-Crear una función con parametro array
-Recorrer el array y eliminar los strings
-Usar objeto para eliminar duplicados
*/

const eliminarDuplicados = arr => {
  arr = arr.filter(element => {
    return typeof element === 'number'
  })
  return Array.from(new Set(arr))
}

console.log(eliminarDuplicados([1, 2, 1, 2, 1, 'no', 1, 3, 4, 'si']))
