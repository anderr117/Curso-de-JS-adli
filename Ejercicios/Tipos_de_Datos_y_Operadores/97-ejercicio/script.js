/**
 * Ejercicio 97 (Validador de formulario simple)
 * Crea una función validarFormulario que reciba nombre, email, edad. Usa operadores lógicos
 * para verificar:
 * • nombre no vacío
 * • email contiene '@'
 * • edad >= 18
 * Devuelve true solo si todo está bien.
 */


function validarFormulario(nombre, email, edad){

    if(typeof nombre !== 'string' || nombre === null || nombre === undefined || nombre.trim().length === 0){
        return false;
    }

    if(typeof edad !== 'number' || edad === null || edad === undefined || edad < 18){
        return false;
    }

    if(typeof email !== 'string' || !email.includes('@') || email.length < 6 || email.length > 254){
        return false;
    }


    return true;


}

let resultado = validarFormulario('sssssssssgsdf', 'andsser@gmail.com', 25);
console.log(resultado);