/* Dada una cadena de texto, devolver el caracter más usado

Ejemplo:
masUsado("victorrobles.web")

Devuelve: 
Lo que más se repite es e

TODO: Cómo hacerlo:
-Crear una función que reciba el texto
-Mapear las letras en un JSON
-Recorrer el mapeo
-Hacemos condición para ver que contador es mayor
*/

function masUsado(txt) {
  const mapeoDeLetras = {};
  let maxReps = 0;
  let letraMasRep = '';
  for (let letra of txt) {
    if (!mapeoDeLetras[letra]) {
      mapeoDeLetras[letra] = 1;
    } else {
      mapeoDeLetras[letra]++;
    }
  }
  for (let letra in mapeoDeLetras) {
    if (mapeoDeLetras[letra].toString().trim().length === 1 && mapeoDeLetras[letra] > maxReps) {
      maxReps = mapeoDeLetras[letra];
      letraMasRep = letra;
    }
  }
  return letraMasRep;
}

function mostUsed(text) {
  let result = '';
  let max = 0;
  const map = {};
  text.split('').forEach(el => {
    map[el] = map[el] + 1 || 1;
    if (max < map[el] && !el.includes(' ')) {
      result = el;
      max = map[el];
    }
  });
  return `${result}: ${max}`;
}

console.log(mostUsed('exterminio'));
