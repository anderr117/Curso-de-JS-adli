/**
 * Ejercicio 98 (Juego de adivinanza)
 * Genera un número aleatorio del 1 al 10: const secreto = Math.floor(Math.random() * 10) + 1.
 * Declara intento = 7 (puedes cambiarlo). Usa operadores de comparación para mostrar si el
 * intento es mayor, menor o igual al secreto.
 */

function juegoAdivinanza(){

    let intento = 9;

    const secreto = Math.floor(Math.random() * 10) + 1;

    if (typeof intento !== 'number') {
        return 'Error: Debe ser numerico';
    }

    if (intento > secreto) {
        return `Tu intento (${intento}) es mayor que el secreto (${secreto})`;
    }

    if (intento < secreto) {
        return `Tu intento (${intento}) es menor que el secreto (${secreto})`;
    }

    if (intento === secreto) {
        return `Tu intento (${intento}) es igual al secreto (${secreto})`;
    }

    return 'No se pudo determinar la comparación';
}

let resultado = juegoAdivinanza();
console.log(resultado);
