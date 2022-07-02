/* Dado un número, indicar que tipo de ángulo es

Ejemplos:
angulo(47)    Devuelve Angulo agudo
angulo(90)    Devuelve Angulo recto
angulo(145)   Devuelve Angulo obtuso
angulo(180)   Devuelve Angulo llano

*/

function angle(number) {
  let res = 'Es un ángulo cóncavo'

  if (number > 0 && number < 90) {
    res = 'Es un ángulo agudo'
  } else if (number === 90) {
    res = 'Es un ángulo recto'
  } else if (number > 90 && number < 180) {
    res = 'Es un ángulo obtuso'
  } else if (number === 180) {
    res = 'Es un ángulo llano'
  } else if (number === 360) {
    res = 'Es un ángulo completo'
  }
  return res
}

console.log(angle(360))
