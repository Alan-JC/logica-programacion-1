// variable que controla si el programa debe continuar 
let continuar = true;

//ciclo que se repite mientras usuario quiera continuar

while (continuar) {

    // pide al usuario números separados por comas
    let input = prompt("Ingresa 3 números separados por una coma:");

    // if que indica si el usuario cancela se rompe o termina el ciclo
    if (input === null) {
        break;
    }

    // indica al programa que separe los numeros por comas
    let datos = input.split(",").map(Number);
    

    // este if comprueba si hay cdatos que no sean numeros
    if (numeros.some(isNaN)) {
        alert("Error: Escribe solo numeros por favor");
    } else {
        // el sort ordenalos numeros de mayor a menor
        numeros.sort((a, b) => b - a);

        // imprime el array de numeros pero ya ordenado
        console.log(numeros);

    }

    // pregunta si el usuario quiere repetir 
    let respuesta = prompt("¿De nuevo? si/no");

    // si cancela o responde no termina el ciclo
    if (respuesta === null || respuesta.trim().toLowerCase() === "no") {
        continuar = false;
    }
}

// Se ejecuta cuando termina el ciclo
console.log("Programa finalizado");
