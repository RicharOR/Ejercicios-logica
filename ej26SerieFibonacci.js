/* Dado un número, mostrar su serie fibonacci.
La serie fibonacci es un orden de números donde cada número es la suma de los dos anteriores.

Ejemplos:
fib(10)[0]  Serie completa: 0,1,1,2,3,5,8,13,21,34,55
fib(10)[1]  Resultado de fibonacci: 55

TODO: Cómo hacerlo:
-Crear una función con parámetro número
-Crear variable con los dos primeros números de la serie
-Bucle desde dos al número
-Sumar los dos valores anteriores al número actual
-Devolver el resultado
*/
const fibonacci = num => {
  let fib = [0, 1];
  let res = 0;
  for (let i = 2; i <= num; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  res = Math.max(...fib);
  return `Serie completa: ${fib} \nResultado de fibonacci: ${res}`;
};

console.log(fibonacci(10));
