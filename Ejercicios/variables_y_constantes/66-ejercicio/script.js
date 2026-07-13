'use strict'

/**
 * Ejercicio 66 (Años a días)
 * Declara una constante ANIOS = 5. Calcula cuántos días aproximadamente (ignorando años
 * bisiestos). Guarda en dias.
 */

const ANIOS_A_CALCULAR = 5;
const DIAS_POR_ANIO = 365;

let totalDias = ANIOS_A_CALCULAR * DIAS_POR_ANIO;

console.log(`En un periodo de ${ANIOS_A_CALCULAR} años, hay aproximadamente ${totalDias} días.`);