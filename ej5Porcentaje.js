/*Cuánto es el X por ciento de X número?

Ejemplo:
tantoPorCiento(20,100)  Devuelve 20
tantoPorCiento(43,897)  Devuelve 385.71

//TODO: Cómo hacerlo:
-Función con parámetros "porcentaje" y "número"
-Crear una variable para la operación del porcentaje
-Devolver string que responda a la pregunta del enunciado
*/

function tantoPorCiento(porcentaje, num) {
	let operacion = num * (porcentaje / 100);
	let resultado = `El ${porcentaje}% de ${num} es: ${operacion}`;
	return resultado;
}

console.log(tantoPorCiento(43, 897));
