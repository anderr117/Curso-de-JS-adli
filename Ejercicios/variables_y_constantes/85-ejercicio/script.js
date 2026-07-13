'use strict'

/**
 * Ejercicio 85 (Calculadora de IMC)
 * Declara let peso, let altura. Calcula IMC y
 * guárdalo en imc. Clasifícalo en clasificacion.
 */



let imc;
const clasificaciones = ['Bajo Peso', 'Peso normal', 'Sobrepeso', 'Obesidad'];

function calcularIMC(peso, altura) {
    if (typeof peso !== 'number' || typeof altura !== 'number' || peso <= 0 || altura <= 0) {
        return console.error('Error: El peso y la altura deben ser números mayores a 0.');
    }

    imc = peso / (altura ** 2);

    let respuesta = `Tu IMC es de ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        console.log(`${respuesta} y se clasifica como: ${clasificaciones[0]}`);
    } 
    else if (imc >= 18.5 && imc <= 24.9) {
        console.log(`${respuesta} y se clasifica como: ${clasificaciones[1]}`);
    } 
    else if (imc >= 25.0 && imc <= 29.9) {
        console.log(`${respuesta} y se clasifica como: ${clasificaciones[2]}`);
    } 
    else {
        console.log(`${respuesta} y se clasifica como: ${clasificaciones[3]}`);
    }
}


calcularIMC(70, 1.75);
calcularIMC(50, 1.75);
calcularIMC(95, 1.75);