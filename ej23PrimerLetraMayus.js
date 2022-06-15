/* Dada una cadena de texto, poner en mayúscula la primera letra de cada palabra y luego devolver la cadena.

Ejemplo:
enMayuscula("hola soy carlos")  Devuelve "Hola Soy Carlos"

TODO: Cómo hacerlo:
-Crear una función que reciba un parámetro texto
-Poner la primera letra del string en mayúscula
-Recorrer el string completo
-Si el caracter anterior a la letra actual es un espacio ponerla en mayúscula
-Si el caracter no es un espacio añadirlo al resultado
*/

const enMayuscula = txt => {
  let txtCapitalized = '';

  for (let letter in txt) {
    if (txt[letter - 1] === ' ' || parseInt(letter) === 0) {
      txtCapitalized += txt[letter].toUpperCase();
    } else {
      txtCapitalized += txt[letter];
    }
  }

  return txtCapitalized;
};

function capitalized(text) {
  let wordsToCapitalize = [];
  for (let word of text.split(' ')) {
    wordsToCapitalize.push(word[0].toUpperCase() + word.substring(1));
  }
  return wordsToCapitalize.join(' ');
}

console.log(capitalized('hola soy carlos'));
