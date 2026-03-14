'use strict'

/** * GUÍA DE MANIPULACIÓN DE TEXTO (STRINGS)
 * Notas: Los strings en JS son inmutables (no cambian el original, 
 * devuelven uno nuevo).
 */

var texto1 = '   bienvenido al curso javascript curso genial   ';
var texto2 = 'ES MUY BUEN CURSO';
var numero = 25;

// --- 1. TRANSFORMACIÓN ---
var dato;
dato = numero.toString();        // "25" (Convierte número a texto)
dato = texto1.toUpperCase();     // Pone TODO en MAYÚSCULAS
dato = texto2.toLowerCase();     // Pone todo en minúsculas

// --- 2. LONGITUD ---
var nombre2 = ['Alexa', 'Angel'];
console.log(texto1.length);      // Cuenta caracteres (incluyendo espacios)
console.log(nombre2.length);     // En arrays cuenta elementos

// --- 3. CONCATENACIÓN ---
// Opción A: .concat()
var textoTotal = texto1.concat(texto2 + ' que bueno');

// Opción B: Template Strings (La más moderna y recomendada)
var moderno = `El texto unido es: ${texto1} y además ${texto2}`;
console.log(moderno);

// --- 4. BÚSQUEDA ---
var busqueda;
busqueda = texto1.indexOf('curso');     // Primera aparición (número de índice)
busqueda = texto1.lastIndexOf('curso'); // Última aparición
busqueda = texto1.search('curso');      // Similar a indexOf (acepta RegEx)



// .match() -> Devuelve array con detalles
busqueda = texto1.match('curso');
busqueda = texto1.match(/curso/g);      // "g" es global: busca TODAS las apariciones

// --- 5. EXTRACCIÓN (Recortar trozos) ---
// .substr(inicio, cuantos) -> ESTÁ OBSOLETO (evitar en proyectos nuevos)
busqueda = texto1.substr(16, 5);

// .substring(inicio, fin) -> EL RECOMENDADO
busqueda = texto1.substring(14, 22);

// .slice(inicio, fin) -> Permite números negativos (empieza desde el final)
busqueda = texto1.slice(-6);            // Saca los últimos 6 caracteres ("enial ")

// .charAt(indice) -> Saca la letra en esa posición
busqueda = texto1.charAt(42);

// --- 6. COMPROBACIÓN (Devuelven True o False) ---
busqueda = texto1.trim().startsWith('bienvenido'); // ¿Empieza por...?
busqueda = texto1.trim().endsWith('genial');       // ¿Termina en...?
busqueda = texto1.includes('javascript');          // ¿Contiene la palabra?



// --- 7. REEMPLAZO Y LIMPIEZA ---
// .replace() -> Solo cambia la primera aparición
busqueda = texto1.replace('curso', 'taller');

// .replaceAll() -> (NUEVO) Cambia todas las apariciones sin usar RegEx
busqueda = texto1.replaceAll('curso', 'taller');




// .trim() -> Quita espacios al inicio y al final
busqueda = texto1.trim();
// .trimStart() / .trimEnd() -> Quitan solo de un lado (NUEVO)



// --- 8. CONVERSIÓN A ARRAY ---
// .split() -> Corta el texto según el separador indicado
var palabras = texto1.trim().split(' '); // Crea array: ["bienvenido", "al", "curso"...]




// --- 9. REPETICIÓN Y RELLENO (LO QUE TE FALTABA) ---
var saludo = "Hola ";
console.log(saludo.repeat(3)); // "Hola Hola Hola "



// .padStart(longitud, relleno) -> Útil para números de tarjeta o formatos
var id = "50";
console.log(id.padStart(5, "0")); // "00050"
console.log(id.padEnd(5, "!"));   // "50!!!"