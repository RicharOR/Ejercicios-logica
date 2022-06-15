/* Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar  métodos propios del lenguaje, sólo estructuras de control.

*Ejemplos:
invertir("hola"); Devuelve "aloh"
invertir("victor"); Devuelve "rotciv"

TODO: Como hacerlo:
-Función con parámetro "cadena"
-Crear una variable para guardar la cadena invertida
-Bucle que recorra el string y guarde los carácteres en la variable
*/

function invertir(cadena) {
	let invertido = '';
	for (let letra of cadena) {
		invertido = letra + invertido;
	}
	return invertido;
}
console.log('Texto invertido:', invertir('hola'));

// !Esto sería con métodos

// function invertir(cadena){
//     return cadena.split("").reverse().join("");
// }
// console.log("Texto invertido:", invertir("hola"));
