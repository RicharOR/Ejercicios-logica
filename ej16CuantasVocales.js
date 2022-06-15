/* Dada una cadena de texto devolver cuantas vocales (a,e,i,o,u) tiene

Ejemplo:
vocales("murcielago")   Devuelve 5

TODO: Cómo hacerlo
-Crear una función que reciba una cadena de texto
-Metodo match con expresión regular
-Devolver el resultado 
*/
function coincidencias(texto) {
  let coincidencias = texto.match(/[aeiou]/gi);
  return coincidencias ? coincidencias.length : 0;
}
console.log(coincidencias('murcielago'));

// función de 1 parámetro
// variable contador
// revisar si las vocales están y sumar 1 al contador

function vocales(txt) {
  let contador = 0;
  for (letra of txt) {
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
      contador++;
    }
  }
  return contador;
}

console.log(vocales('murcielago'));
