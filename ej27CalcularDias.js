/* Dado un número, mostrar a cuántos años, meses y días equivale 

Ejemplo: 
calcularFechas(920);  

Devuelve:
Equivale a 2 años, 6 meses y 10 días.

TODO: Cómo hacerlo:
-Crear una función con parámetro días
-Divisiones para sacar años, meses y días
*/

const calcularFechas = num => {
  let years = parseInt(num / 365)
  let months = parseInt((num % 365) / 30)
  let days = parseInt((num % 365) % 30)

  return `${num} equivale a ${years} años, ${months} meses y ${days} días`
}

console.log(calcularFechas(920))
