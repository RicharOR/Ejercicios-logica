/* Dado un número entero, inviertelo y devuelve de nuevo el entero.

Ejemplo:
invertirNumero(67)  Devuelve: 76

TODO: Cómo hacerlo:
-Funcion que reciba el número
-Convertir el número en string
-crear un array por cada letra
-Darle la vuelta
-Unir el array en un string
-Convertir el string en un entero
*/

const invertirNumero = (numero) => {
	let invertido = parseInt(
                    numero
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
                    ) * Math.sign(numero);
	return invertido;
};

console.log(invertirNumero(-987));
