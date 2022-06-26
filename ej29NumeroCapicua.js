/* Dado un número indicar si es un número capicúa o no.

Los número capicúa se leen igual de izquierda a derecha y viceversa

Ejemplos:

capicua(2002)  Devuelve true
capicua(2014)  Devuelve false

TODO: Cómo hacerlo:
-Crear una función con parámetro número
-Convertir a string
-Convertir numero en array de números
-Darle la vuelta
-Unirlo y convertirlo a entero
*/
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

function capi(num) {
  let invertido = parseInt(num.toString().split('').reverse().join('')) * Math.sign(num)
  if (invertido === num) {
    return `El número ${num} es capicúa.`
  } else {
    return `El número ${num} no es capicúa.`
  }
}

console.log(capi(2012))
