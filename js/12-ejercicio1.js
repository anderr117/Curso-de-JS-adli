'use strict'

/**Programa que pida dos numeros y que nos diga cual es mayor, cual es menor y si son iguales
 * plus si los numeros no son numero o son menores o igual a 0 volver a pedir los numero
 * 
 */

// 1. Definimos las variables fuera
let numero1, numero2;

// 2. Bucle de validación (Se ejecuta mientras los datos sean inválidos)
// Usamos isNaN para verificar que realmente sean números
while (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
    numero1 = parseInt(prompt('Ingrese el primer número (mayor a 0):'));
    numero2 = parseInt(prompt('Ingrese el segundo número (mayor a 0):'));
    
    if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
        alert("Por favor, introduce números válidos y mayores a cero.");
    }
}

// 3. Lógica de comparación (Solo ocurre cuando los datos ya son válidos)
if (numero1 > numero2) {
    console.log(`El número ${numero1} es mayor que ${numero2}`);
} else if (numero2 > numero1) {
    console.log(`El número ${numero2} es mayor que ${numero1}`);
} else {
    console.log(`Ambos números son iguales: ${numero1}`);
}
