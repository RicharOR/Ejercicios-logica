/* Dados dos arrays, devolver un array con sólo los elementos comunes entre ambos

Ejemplo:
elementosComunes([4,5,6,7],[7,8,9,7,5])  Devuelve 5,7


TODO: Como hacerlo:

-Crear una funcion que reciba dos arrays como parámetros 
-Filtrar array y evaluar una condición
-Devolver nuevo array
*/

const array1 = [1, 2, 3, 5, 'hola', 'luis'];
const array2 = [1, 7, 8, 2, 'hola', 'adios'];

const elementosComunes = (array1, array2) =>{
    const arrayComun = array1.filter(elemento => array2.includes(elemento));
    return arrayComun
}

console.log(elementosComunes(array1,array2));
