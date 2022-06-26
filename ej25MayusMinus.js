/* Dado un string,ponerlo completo en mayusculas o minusculas dependiendo de si hay más mayusculas o
minusculas por defecto en el string.
Si hay más mayusculas ponerlo todo en mayus.
Si hay más minusculas ponerlo todo en minus.

Ejemplos:
mayusMinus("JOAQuin")  Devuelve:JOAQUIN
mayusMinus("Victor")  Devuelve:victor 

TODO: Cómo hacerlo:
-Crear una función con un parámetro texto
-Crear dos contadores para mayus y para minus
-Recorrer el texto y comprobar si las letras que vamos recorriendo son mayus
-Aumentar contadores
-Convertir a mayus o minus y devolver el resultado
*/

function mayusMinus(texto) {
  let mayusculas = 0;
  let minusculas = 0;
  let resultado = '';

  for (let letra of texto) {
    if (/[A-Z]/.test(letra)) {
      mayusculas++;
    } else {
      minusculas++;
    }
  }
  if (mayusculas > minusculas) {
    resultado = texto.toUpperCase();
  } else {
    resultado = texto.toLowerCase();
  }
  return resultado;
}
//-Crear una función que reciba un texto como parámetro
//-Contar el tamaño del string
//-Contar la cantidad de mayúsculas
// -Si es mayor al la mitad de la longitud del estring colocarlo en mayúscula de lo contrario en minúscula

const mayusOrMinus = txt => {
  const txtUpperCase = txt.toUpperCase();
  let matches = 0;
  for (let i = 0; i < txt.length; i++) {
    if (txtUpperCase[i] === txt[i]) {
      matches++;
    }
  }
  if (matches > txt.length / 2) {
    return txtUpperCase;
  } else {
    return txt.toLowerCase();
  }
};
