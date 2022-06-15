/* Dada una cadena de texto y un número, recortar el string mostrando los primeros X caracteres

Ejemplo:
recortar("Cursos de desarrollo web", 6) Devuelve "Cursos"

TODO: Cómo hacerlo:
-Crear una función con parámetros de texto y hasta
-Comprobar los datos son correctos
-Recortar string con substring
-Devolver resultado
*/
const slice = (txt, num) => {
  let txtInArr = txt.split('').slice(0, num).join('');
  return txtInArr;
};

slice('Cursos de desarrollo web', 6);

function recortar(texto, hasta) {
  let resultado = '';
  if (typeof texto === 'string' && typeof hasta === 'number') {
    resultado = texto.substring(0, hasta);
  } else {
    resultado = 'Introduce bien los datos';
  }
  return resultado;
}

console.log(recortar('Cursos de desarrollo web', 6));
