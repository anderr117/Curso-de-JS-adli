'use strict'

/**
 * Ejercicio 60
 * Crea un ejemplo donde uses nombres de variables tan descriptivos que el código se explique
 * solo (self-documenting code).
 */

const inventarioHogar = ['Plato azul', 'Tinaja grande', 'Vasos de porcelana'];
const CATEGORIA_VALIDA = 'Hogar';

function imprimirCatalogoPorCategoria(categoriaSolicitada) {
    // Usamos === para igualdad estricta y && para el "Y" lógico
    if (typeof categoriaSolicitada === 'string' && categoriaSolicitada === CATEGORIA_VALIDA) {
        console.log("Catálogo de productos disponibles:");
        console.table(inventarioHogar); // console.table para presentarlo en una tabla (se ve muy bine con arrays)
    } else {
        console.error(`Error: La categoría "${categoriaSolicitada}" no existe en nuestro sistema.`);
    }
}

imprimirCatalogoPorCategoria('Hogar');