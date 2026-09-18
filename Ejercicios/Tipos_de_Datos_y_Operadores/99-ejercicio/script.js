/**
 * Ejercicio 99 (Descuento por membresía)
 * Declara precio = 200, esMiembro = true, añosMembresia = 3. Aplica:
 * • 10% descuento si es miembro
 * • 5% extra si lleva más de 2 años
 * • 20% descuento si el precio original > 150 Y es miembro
 * Usa operadores lógicos para combinar condiciones y calcular precioFinal.
 */

function descuentoPorMembresia(precio, esMiembro, añosMembresia) {

    const descuento = {
        siEsMiembro: 0.10,
        membresia: 0.05,
        mayorPrecioOriginal: 0.20,
    };

    let descuentoTotal = 0;


    if (esMiembro) {
        descuentoTotal += descuento.siEsMiembro;
        console.log(`Es miembro: aplica 10%`);
    }


    if (añosMembresia > 2) {
        descuentoTotal += descuento.membresia;
        console.log(`Más de 2 años: aplica 5% extra`);
    }

    if (precio > 150 && esMiembro) {
        descuentoTotal += descuento.mayorPrecioOriginal;
        console.log(`Precio > 150 y es miembro: aplica 20%`);
    }

    const precioFinal = precio - (precio * descuentoTotal);

    return {
        precioOriginal: precio,
        descuentoTotal: descuentoTotal,
        precioFinal: precioFinal
    };
}

let resultado = descuentoPorMembresia(200, true, 3);
console.log(resultado);
