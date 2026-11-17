// variable que controla si el programa debe continuar
let continuar = true;

// ciclo que se repite mientras el usuario quiera continuar
while (continuar) {

    // pide al usuario números separados por comas
    let input = prompt("Ingresa 3 números separados por una coma:");

    // si el usuario cancela, termina el ciclo
    if (input === null) {
        break;
    }

    // separa los números y convierte cada dato a Number
    let numeros = input.split(",").map(Number);

    // comprueba si hay datos que no sean números
    if (numeros.some(isNaN)) {
        alert("Error: Escribe solo números por favor");
    } else {
        // ordena los números de mayor a menor
        numeros.sort((a, b) => b - a);

        // imprime el array ordenado
        console.log(numeros);
    }

    // pregunta si el usuario quiere repetir
    let respuesta = prompt("¿De nuevo? si/no");

    // si cancela o responde no, termina el ciclo
    if (respuesta === null || respuesta.trim().toLowerCase() === "no") {
        continuar = false;
    }
}

// se ejecuta cuando termina el ciclo
console.log("Programa finalizado");
