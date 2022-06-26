/* Dado un número,mostrar Los números del 1 hasta el número.
Pero para múltiplos de tres imprimir "buzz" en lugar del número
y para los múltiplos de cinco imprimir "lightyear".
Para múltiplos de tres y cinco imprimir "Buzz Lightyear". 

Ejemplo: buzz(5)

Devuelve:
1, 2, buzz, 4, lighyear

TODO: Cómo hacerlo:
-Crear una función que reciba el número
-Condiciones número actual múltiplo de 3 y 5
-Crear función para recorrer y mostrar
-Bucle del 1 al número
*/

function buzz(num) {
  let text = '';
  if (num % 3 === 0 && num % 5 === 0) {
    text = "'BuzzLightyear'";
  } else if (num % 3 === 0) {
    text = "'Buzz'";
  } else if (num % 5 === 0) {
    text = "'Lightyear'";
  } else {
    return num;
  }
  return text;
}

function print(number) {
  let txt = '';
  for (let i = 1; i <= number; i++) {
    txt += ` ${buzz(i)}`;
  }
  return txt;
}

console.log(print(15));
