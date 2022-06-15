/* Dado un string y un número, repetir el string tantas veces como el número lo indique

Ejemplo:
repiteme("victor", 2) Devuelve victorvictor

TODO: Cómo hacerlo:
-Crear una función que reciba dos parámetros
-Bucle hasta el número
-Concatenar string
*/

function repiteme(cadena, num) {
  let concatenado = '';
  for (let i = 0; i < num; i++) {
    concatenado += ` ${cadena}`;
  }
  return concatenado;
}
console.log(repiteme('hola', 5));

// Función prototipo

String.prototype.repiteme = function (num) {
  let resultado = '';
  for (let i = 0; i < num; i++) {
    resultado += ` ${this}`;
  }
  return resultado;
};

console.log('hola'.repiteme(5));
