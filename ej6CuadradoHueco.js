/*
Dibujar un cuadrado hueco con asteriscos con el tamaño de lado que le sea indicado.

*Ejemplo:
cuadrado(4); Esto devuelve:
*                    ****
*                    *  *
*                    *  *
*                    ****

TODO: Como hacerlo:
-Función para crear el ladod e arriba y abajo del cuadrado
-Función que haga los lados y el hueco del cuadrado
-Bucle de 0 hasta el tamaño del lado, menos 2 para equilibrar con el lado de arriba y abajo
Bucle para pintar los espacios, menos 2 para equilibrar con el asterisco de izquierda y derecha
Mostrar el cuadrado en la función principal
*/

function lados(numero) {
	let lado = '';

	for (let i = 0; i < numero; i++) {
		lado += '*';
	}
	return lado;
}

function cuadrado(numero) {
	// lado de arriba
	let dibujo = lados(numero) + '\n';
	// "\n" es un salto de línea
	let contenido = '';

	// filas del cuadrado
	for (let i = 0; i < numero - 2; i++) {
		contenido = '*';

		// contenido hueco
		for (let x = 0; x < numero - 2; x++) {
			contenido += ' ';
		}
		contenido += '*';

		// añadir fila al dibujo
		dibujo += contenido + '\n';
	}
	// lado de abajo
	dibujo += lados(numero);

	return dibujo;
}

console.log(cuadrado(8));
