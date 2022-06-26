/* Dado un número, mostrar una escalera con escalones de "[-]" usando el número para los niveles de la escalera 

Ejemplo:
escalera(4) Devuelve:

[-]
[-][-]
[-][-][-]
[-][-][-][-]

TODO: Cómo hacerlo:
-Función que reciba el número
-Recorrer el número de niveles de la escalera
-En cada iteraciópn pintar los escalones de ese nivel
-Haciendo un bucle desde 1 hasta el nivel en el que estamos

*/

/* Mientras que i < Number
pintar en pantalla [-] \n 

*/
function escalera(num) {
	let escaleraCompleta = '';
	for (let nivel = 1; nivel <= num; nivel++) {
		let escalones = '';
		for (let escalon = 1; escalon <= nivel; escalon++) {
			escalones += '[-]';
		}
		escaleraCompleta += escalones + '\n';
	}
	return escaleraCompleta;
}
console.log(escalera(4));
