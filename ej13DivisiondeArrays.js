/* Dado un array; dividirlo en tantos sub-arrays como sea necesario basándonos en un número que indique su tamaño.

Dividirlo en arrays de X elementos.

Ejemplo:
divideArray([7,8,9,10,5], 2);

Devuelve: [[7,8],[9,10],[5]];

TODO: Cómo hacerlo:
-Crear una función que reciba los dos parámetros
-Crear un array
-Recorrer el array e ir añadiendo sub-arrays
*/

function divideArray(arr, num) {
  let newArrays = [];

  for (elemento of arr) {
    let last = newArrays[newArrays.length - 1];
    if (!last || last.length === num) {
      newArrays.push([elemento]);
    } else {
      last.push(elemento);
    }
  }
  return newArrays;
}

console.log(divideArray([7, 8, 9, 10, 5], 2));
