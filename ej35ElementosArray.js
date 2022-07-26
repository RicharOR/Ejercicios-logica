/* Dado un array crear uno nuevo con el primer y último elemento del original

Ejemplo:
primeroYUltimo([100,200,300,780]) Devuelve: [100,780]
*/

const primeroYUltimo = arr => {
  let newArray = []
  newArray.push(arr.at(0), arr.at(-1))

  return newArray
}

console.log(primeroYUltimo([50, 100, 200, 300, 780, 220]))
