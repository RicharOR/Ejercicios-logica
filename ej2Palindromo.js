/* Dada una cadena de texto, comprobar si es un palíndromo o no.
Los palíndromos son palabras que se leen igual aún estando invertidas,
por ejemplo: ana, bobo, otto, allivesevilla

*No tener en cuenta espacios o carácteres especiales.

Ejemplo:
ejecula la función palíndromo() y te retorna trus si es palíndromo o false si no lo es
palindromo("otto"); //*Devolvería true
palíndromo("victorr"); //!Devolvería false

TODO: Como hacerlo
-Funcion con parámetro "texto"
-Separar el texto en un array de letras
-Darle la vuelta
-Unir el array de letras en un string y comparar con el parámetro
*/

function palindromo(texto){
    let invertido = texto.split('').reverse().join('');
    return invertido === texto;
};

console.log("Is a palindrome? " + palindromo("otto"));