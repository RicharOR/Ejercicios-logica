/* Dados dos números, devolver cuántos números impares hay entre ellos

Ejemplos:
impares(1,100) Devuelve:50

TODO: Como hacerlo:
-Función que reciba los dos números
-Bucle del "número1" al "número2"
-Condición, si el resto es distinto a cero, es impar
-Aumentar en uno el contado
-Devolver contador
*/

function impares(num1, num2) {
	let contador = 0;

	while (num1 < num2) {
		if (num1 % 2 != 0) contador++;

		num1++;
	}
	return contador;
}

console.log(impares(7, 700));
