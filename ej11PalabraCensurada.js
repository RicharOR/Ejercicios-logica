/* Dado un texto y una búsqueda, censurar todas las coincidencias de la búsqueda en el texto con [-CENSURADO-]

Si texto o búsqueda están vacios mostrar "No puedes leer el texto y la búsqueda" en el caso de que ambos parámetros no lleguen, en el caso de que que llegue sólo 1 parámetro hacer el caso correspondiente

Ejemplo:
censurado("hola hola", "hola") Devuelve: [-CENSURADO-] [-CENSURADO-]
censurado()  Devuelve: "No puedes leer el texto y la búsqueda"
censurado("hola")   Devuelve: "No puedes hacer la búsqueda"

TODO: Cómo hacerlo:
-Función que reciba un texto y una búsqueda
-Condiciones en el caso de que algún parámetro falte
-Reemplazar la búsqueda por [-CENSURADO-] en el texto

*/

function cesurado(texto=false, busqueda=false){
    const censurado = `[-CENSURADO-]`;
    if(!texto && !busqueda) resultado = `No puedes leer el texto ni la búsqueda`;
    if (!texto && busqueda) resultado = `No se encuentra texto para realizar la búsqueda`;
    if (!busqueda && texto) resultado = `No hay un valor para realizar la búsqueda`;
    if (texto && busqueda) {
        resultado = texto.replace(new RegExp(busqueda,"gi"), ("[-CENSURADO-]"));
    }

    return censurado;

}