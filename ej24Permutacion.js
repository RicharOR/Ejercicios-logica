/* Dado un array de enteros y número, detectar si esa lista de número es una permutación del 1 al número aportado

?En este caso una permutación es una secuencia de números en orden sin que falte ninguno entre ellos

Ejemplos:
permutacion([1,2,3,4,5], 5)  Devuelve true
permutacion([1,2,3,5],5)     Devuelve false

TODO: Cómo hacerlo:
-Crear una con parámetro secuencia y número
-Bucle del 0 al número
-Return false si el número actual +1, no se encuentra
-Si salimos del bucle, devolver true
*/

// -Función que reciba dos parámetros, array y entero
// -contar desde el 1 hasta el número
// -volver esa cuenta un array
// -comparar los arrays

const permutation = (array, num) => {
  let count = [];
  for (let i = 1; i <= num; i++) {
    count.push(i);
  }
  return count.length == array.length;
};

function permutacion(secuencia, numero) {
  for (let i = 0; i < numero; i++) {
    if (secuencia.indexOf(i + 1) < 0) {
      return false;
    }
  }
  return true;
}
