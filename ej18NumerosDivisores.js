/* Dado un número, mostrar todos su números divisores

Ejemplo:
mostrarDivisores(5)  Devuelve 1,5

TODO: Cómo hacerlo:
-Crear una función que comprueba si un número es divisor de otro
-Crear una función para recorrer y mostrar
*/

// function que reciba un número
// iterar desde el 1 al número
// revisar que el % sea 0 para saber que es divisor
// devolver los números divisores

const showDivisores = num => {
  let divisores = '';
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisores += ` ${i}`;
    }
  }
  return divisores;
};
// ----- ----- ----- -----
function divisor(numero, posible_divisor) {
  if (numero % posible_divisor === 0) {
    return posible_divisor;
  }
  return 0;
}

function mostrarDivisores(number) {
  for (let i = 1; i <= number; i++) {
    let esDivisor = divisor(numero, i);
    if (esDivisor) console.log(esDivisor);
  }
}
