/* Dados dos número indicar cuál es mayor y cuál es menor

Ejemplo:
mayorMenor(8,6)
El numero Mayor es: 8
El numero Menor es: 6

TODO: Cómo hacerlo;
-Crear una función
-Condiciones para ver cuál es mayor
-Devolver el resultado
*/

const mayorMenor = (num1, num2) => {
  let resultado = '';
  if (num1 === num2) {
    resultado = 'Ambos números son iguales';
  } else if (num1 > num2) {
    resultado = `El número Mayor es: ${num1} \nEl número Menor es: ${num2}`;
  } else if (num1 < num2) {
    resultado = `El número Mayor es: ${num2} \nEl número Menor es: ${num1}`;
  } else resultado = 'Introduce valores correctos';
  return resultado;
};

console.log(mayorMenor(6, 8));
