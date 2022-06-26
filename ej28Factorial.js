/* Dado un número devovler su factorial

El factorial de una número es la multiplicación de todos los números hasta llegar a el

Ejemplo: 
factorial(4)  Devuelve 24 //ya que 1x2x3x4 = 24

TODO: Cómo hacerlo:
-Crear una función con un parámetro número
-Bucle del 1 hasta el número
-Multiplicar el número anterior con el actual
-Devolver el resultado
*/

const factorial = num => {
  let result = 1
  for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result
}

console.log(factorial(10))
