/* Dados dos números devolver el resultado de las operaciones básicas entre ellos (suma, resta, multiplicación, división) 

Ejemplo:
calculadora(5,5)  

Devuelve:
La suma es: 10
La resta es: 0
La multiplicación es: 25
La división es: 1
*/

const calculadora = (num1, num2) => {
  let suma = num1 + num2
  let resta = num1 - num2
  let multi = num1 * num2
  let divi = num1 / num2

  const resultado = `La suma es: ${suma} \nLa resta es: ${resta}\nLa multiplicación es: ${multi}\nLa división es: ${divi}`

  return resultado
}

console.log(calculadora(5, 5))
