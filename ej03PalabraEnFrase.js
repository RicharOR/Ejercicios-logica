/* Dada una palabra buscarla en una frase y devolver cuantas veces aparece en ella.
La frase y la palabra deben ser parámetros de una función.

Ejemplos:
coincidencias("hola soy una palabra en una frase, PALABRA.", "palabra") Esto devolvería 2
coincidencias("soy la frase", "victor") Esto devuelve 0


TODO: Como hacerlo:
-Función con dos parámetros "frase" y "busqueda"
-Poner string en minúscula y limpiarlo
-Comprobar si la "busqueda" está incluida en la "frase"
-Crear un array de palabras de la frase
-Mapear esas palabras y hacer un contador de cada una
-Devolver el contador de la "busqueda"
*/

function coincidencias(frase, busqueda) {
	let texto_limpio = frase.toLowerCase().replace(/[!¡.,-?¿]/gi, '');

	let resultado = 0;
	if (texto_limpio.includes(busqueda)) {
		let palabras = texto_limpio.split(' ');
		let mapa = {};

		for (palabra of palabras) {
			if (mapa[palabra]) {
				mapa[palabra]++;
			} else {
				mapa[palabra] = 1;
			}
		}
		return mapa[busqueda];
	} else {
		resultado = 0;
	}
	return resultado;
}

console.log(
	'Numero de coincidencias: ',
	coincidencias('Hola Carlos. que tal? soy CARLOS suarez. carlos', 'carlos')
);

/* 
    function ContadorPalabrasIguales(texto, palabra)
{
    return texto.toLowerCase().split(palabra).length - 1;
}
console.log( ``Se han encontrado " + ContadorPalabrasIguales("  Hola  soy una palabra en una fase, PALABRA", "palabra") + " palabras iguales");
*/
