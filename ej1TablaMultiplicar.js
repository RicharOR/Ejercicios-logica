/* Dado un número devolver su tabla de multiplicar completa */

/* Ejemplo:
Eejecuto esta función: tablaMultiplicar(5)

-Me devuelve est resultado:
# Tabla del 5 #

1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50

TODO: Como hacerlo:
-Función con parámetro "numero"
-Variable con texto encabezado
-Bucle del 1 al 10
-Concatenar la variable string con multiplicación y su resultado
*/

function tablaMultiplicar(num) {
	let encabezado = `# Tabla del ${num} # \n`;
	for (let i = 1; i <= 10; i++) {
		let resultado = num * i;
		encabezado += ` ${i} x ${num} = ${resultado} \n`;
	}
	return `${encabezado}`;
}

console.log(tablaMultiplicar(5));
