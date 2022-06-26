/* Dado un número indicar si es un número capicúa o no.

Los número capicúa se leen igual de izquierda a derecha y viceversa

Ejemplos:

capicua(2002)  Devuelve true
capicua(2014)  Devuelve false

TODO: Cómo hacerlo:
-Crear una función con parámetro número
-Convertir a String
-Convertir número en array de números
-Darle la vuelva
-Unirlo y convertirlo a entero
-Comparar si los valores son iguales
*/
/* let capicua = 2002
let toText = capicua.toString()
let reversed = toText.split('').reverse().join('')
let compare = reversed === toText */

const capicua = num => {
  const toText = num.toString()
  const reversed = toText.split('').reverse().join('')
  if (toText === reversed) {
    return `El número ${num} es capicúa.`
  } else {
    return `El número ${num} no es capicúa.`
  }
}

console.log(capicua(2002))
