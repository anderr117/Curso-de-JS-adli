'use strict'

// function saludo(){
//     return 'Hola soy Leonardo'
// }

// console.log(saludo)


// function calculadora(numero1, numero2){
//     console.log('suma: '+ (numero1+numero2));
// }

// calculadora(5,2);


// function calculadora(numero1, numero2){
//     return numero1 + numero2;
// }

// console.log(calculadora(5,2))

function calculadora(numero1, numero2, mostrar=false){
    if(mostrar == false){
        console.log('la suma es: '+(numero1+numero2));
    }else{
        document.write('la suma es: '+(numero1+numero2));
    }
}

var x = confirm('Elige si muestro en pantalla o en consola');
console.log(x)

if(x){
    calculadora(2,2,true);
}else{
    calculadora(2,2);
}