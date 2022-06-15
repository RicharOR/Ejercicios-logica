/* Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si.

*Una cadena es un anagrama de otra si usa los mismos caracteres en la misma cantidad

?Para este ejercicio no se tienen en cuenta espacios, símbolos raros, puntos, etc

Ejemplos:
anagramas("Riesgo", "Sergio")  Devuelve true
anagramas("Victor", "Robles")  Devuelve false

TODO: Cómo hacerlo:
-Crear una función para limpiar los textos
-Quitar todo lo que no sea texto
-Poner en minusculas
-Crear array de Letras
-Ordenarlo
-Unirlo
-Funcion para comparar Las dos palabras
*/

// Función que reciba dos parámetros
// dividir las palabras en caracteres
// para cada letra de una palabra revisar si hay una en la otra palabra
// si todo es true devolver que si es anagrama si hay algún false, que no lo es

function clearTxt(txt) {
  return txt.replace(/[^\w]/, '').toLowerCase().split('').sort().join('');
}

function anagramas(txt1, txt2) {
  if (clearTxt(txt1) == clearTxt(txt2)) {
    return 'Son anagramas';
  }
  return 'No son anagramas';
}

console.log(anagramas('Riesgo', 'Sergio'));
