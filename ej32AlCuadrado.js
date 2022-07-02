/* Dado un array de número, devolver el array con sus números elevados al cuadrado (número multiplicado por si mismo)

El array debe eliminar cualquier contenido que no sea número

Ejemplo:
alCuadrado([5,6,7,"texto"]) Devuelve [25,36,49]

*/

const alCuadrado = arr => {
  const filtered = arr
    .filter(element => {
      return typeof element !== 'string'
    })
    .map(element => element ** 2)
  return filtered
}

console.log(alCuadrado([5, 'otro texto', 6, 7, 'texto', 8]))
