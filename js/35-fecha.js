'use strict'

var fecha = new Date();//con esto tengo el objeto fecha, saco la hora y la fecha

console.log(fecha);

var year = fecha.getFullYear(); //Saco el año
var mes = fecha.getMonth() + 1; //saco el mes
var dia = fecha.getDate(); //saco el día
var hora = fecha.getHours(); //saco la hora
var minutos = fecha.getMinutes(); //saco los minutos
var segundos = fecha.getSeconds(); //saco los segundos

console.log(year);

var textoHora = `
El año es: ${year}
EL mes es: ${mes}
El día es: ${dia}
La hora es: ${hora}
${minutos} minutos
${segundos} segundos
`;

console.log(textoHora);

/**
 * El objeto Math permite realizar tareas matematicas
 * PARA SACAR FUNCIONES CON FORMATO FECHA COMO getMonth ETC...https://www.w3schools.com/jsref
 */

console.log(Math.ceil(Math.random()*10000)); //Math.random() me saca un numero aleatorio
//Math.ceil le quita los decimales