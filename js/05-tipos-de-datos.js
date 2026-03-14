//Tipos de datos
/**
 * Booleano: Representa un valor lógico verdadero o falso. Ejemplo: true o false.
 * NUll: Representa un valor nulo o "sin valor". Ejemplo: null.
 * Undefined (UIndefinido): Representa una variable que no ha sido asignada o que no tiene un valor asignado. Ejemplo: undefined
 * Number: Representa un  valor numerico. Ejmplo: 42.
 * BigInt: Representa enteros mayores que el limite superior que puede representar el tipo dato Number. Ejemplo: 900709925440991n.
 * String (Cadena): Representa una secuencia de caracteres. Ejemplo: "Hola mundo".
 * 
 * Objeto: Representa una colección de datos y/o funcionalidades. Ejemplo: {nombre: 'juan', edad: '30'}
*/

var numero_entero=44;

var cadena_de_texto = 'Hola que tal';
/*Siempre tomar en cuenta las comilas que se pusieron al principio, las del medio las lee tal como estan, se pondría en la pantalla
'que' */
var cadena_de_texto2 = "Hola 'que' tal"

//BOOLEANO
var verdadero=true;
var falso=false;
var nulo = null;
var indefinida=undefined;
var indefinida;

console.log(cadena_de_texto, cadena_de_texto2, indefinida);

//Me dice el tipo de dato si es string o entero etc...
console.log(typeof(indefinida));

var numero_falso = "25";
/*convierto el string a entero */
console.log(Number(numero_falso)+5);
console.log(parseInt(numero_falso)+5);
console.log(parseFloat(numero_falso)+5);
console.log(String(numero_falso)+5);
console.log(typeof(numero_falso));