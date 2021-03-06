/* Dado un número mostrar todos los número desde ese hacía el 0 de 8 en 8 en una lista con guiones y cada número debe empezar por "n°"


Ejemplos:
hastaCero(100)  Devuelve:

--- Del 100 al 0 ---
- n° 100
- n° 92
- n° 84
- n° 76
- n° 68
- n° 60
- n° 52
- n° 44
- n° 36
- n° 28
- n° 20
- n° 12
- n° 4
--- FIN ---

TODO: Cómo hacerlo:
-Función que reciba un número
-Inicializar variable con encabezado
-bucle del número al cero
-Concatenar guión, n°, número y salto de línea
-restar 8
-concatenar fin
*/

function hastaCero(num) {
  let resultado = `--- Del ${num} al 0 --- \n`;

  while (num > 0) {
    resultado += `-n° ${num} \n`;
    num -= 8;
  }
  resultado += `--- FIN --- \n`;
  return resultado;
}

console.log(hastaCero(100));
