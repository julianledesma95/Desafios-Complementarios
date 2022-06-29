let numeroEjercicio = 0;

do {
    numeroEjercicio = prompt("Ingrese 1 si quiere calcular la potencia de un número o ingrese 2 si quiere imprimir su nombre la cantidad de veces deseada")

    if (numeroEjercicio == 1) {

        /** Solicito al usuario que ingrese el número y el exponente */

        let base = prompt("Ingrese un número base")
        let exponente = prompt("Ingrese el número exponente")

        /** Defino resultado igual a 1, para que en la primer interacción la base no cambie. */
        /** Tambien podría asignar valor 1 a i, para reducir la cantidad de interacciones */

        let resultado = 1;

        for(let i = 0 ; i < exponente; i++){
            resultado = resultado * base;
        }

        console.log(resultado)

    } else if (numeroEjercicio == 2) {

        /** Solicito al usuario que ingrese su nombre y la cantidad de veces que desea imprimirlo por consola */

        let nombre = prompt("Ingrese su nombre")
        let cantidad = prompt("Ingrese la cantidad de veces que desea imprimir su nombre")
        let i = 0
        
        /** creo la variable i y le asigno valor cero */
        /** creo un while con la misma cantidad de interacciones que el usuario definió como "veces para imprimir el nombre" */

        while (i < cantidad) {
            console.log(nombre)
            i++
        }
        
    }
    
} while ((numeroEjercicio != 1) && (numeroEjercicio != 2))
