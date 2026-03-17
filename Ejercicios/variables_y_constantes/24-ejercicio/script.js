'use strict'

/**
 * Crea un bloque anidado:
 */

{
    let nivel1 = "fuera";
    {
        let nivel2 = "dentro";
        console.log(nivel1); // ¿Funciona? - Si
        console.log(nivel2); // ¿Funciona? - Si
    }
    console.log(nivel2); // ¿Funciona? - No
}
