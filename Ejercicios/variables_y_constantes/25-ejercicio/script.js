'use strict'

/**
 * Ejercicio 25
 * Repite el ejercicio 24 con var. ¿Qué diferencias notas?
 */

{
    var nivel1 = "fuera";
    {
        var nivel2 = "dentro";
        console.log(nivel1); // ¿Funciona? - Si
        console.log(nivel2); // ¿Funciona? - Si
    }
    console.log(nivel2); // ¿Funciona? - Este ya funciona
}
