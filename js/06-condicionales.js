'use strict'

//OPERADORES LOGICOS
/**
 * a == b - Igual
 * a === b - Es estrictamente igual
 * 
 * a != b - Es distinto
 * a !==b - Es estrictamente distinto
 * 
 * <, <=, >, >= - Menor, menor o igual, mayor, mayor o igual
 * 
 * a <= b
 * 
 * a && b - Operador and (y)
 * 
 * a || b - Operador or (o)
 * 
 * !a - Operador not
 */

//CONDICIONAL IF

var edad = 11;
var nombre = 'Ander';
var year = 2024;

if (edad >= 18){
    console.log(nombre+'Es mayor de edad');
}else{
    console.log(nombre+' Es menor de edad')
}

// && (and - y) - Se tienen que cumplir las dos condiciones
if(edad>=18 && edad<=54){
    console.log(nombre+' Es mayor de edad');
} else if(edad>=55){
    console.log(nombre+' Es viejo')
} else{
    console.log(nombre+' Eres menor')
}


// || (or - o) - Se tiene que cumplir una condición
// if (year == 1981 || (year >= 1981 && year <= 1993)){
if (year == 1994 || (year >= 1994 && year <= 2000)){
    console.log('generación Z');
}else{
    console.log('No perteneces a generación Z');
}