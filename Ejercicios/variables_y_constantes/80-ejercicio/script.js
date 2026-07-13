'use strict'

/**
 * Ejercicio 80 (Saldo bancario)
 * Declara let saldo = 1000. Crea funciones depositar(cantidad) y retirar(cantidad) que validen
 * saldo suficiente.
 */


let saldo = 1000;

function depositar(cantidad) {
    if (typeof cantidad !== 'number' || cantidad <= 0) {
        return console.error('Error: La cantidad a depositar debe ser un número mayor a 0');
    }

    saldo += cantidad;
    console.log(`Se ha depositado Q${cantidad} a su cuenta.`);
    console.log(`Su saldo actual es de Q${saldo}`);
}

function retirar(cantidad) {
    if (typeof cantidad !== 'number' || cantidad <= 0) {
        return console.error('Error: La cantidad a retirar debe ser un número mayor a 0');
    }

    if (cantidad > saldo) {
        console.error(`Fondos insuficientes. Intenta retirar Q${cantidad} pero su saldo es de Q${saldo}`);
    } else {
        saldo -= cantidad;
        console.log(`Se ha retirado Q${cantidad} de su cuenta.`);
        console.log(`Su saldo actual es Q${saldo}`);
    }
}


depositar(100); 
retirar(50);    
retirar(2000); 