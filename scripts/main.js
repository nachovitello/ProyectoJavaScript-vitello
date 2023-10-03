
//voy a hacer un simulador para ver que service le tenes que hacer a tu auto

/*const nombreUsuario = prompt("¿Como es tu nombre?");

function saludar(aQuienSaludar) {
    alert ("Bienvenido " + aQuienSaludar + " vamos a ver que seguro te conviene");
}

saludar(nombreUsuario);


function compararPrecios() {
    const seguros = [];
    
    // Obtener precios de 5 productos
    for (let i = 1; i <= 5; i++) {
        const precio = parseFloat(prompt(`Ingrese el precio del Seguro ${i}:`));
        
        if (isNaN(precio)) {
            console.log(`Por favor, ingrese un precio válido para el Seguro ${i}.`);
            return;
        }

        seguros.push({ nombre: `Seguro ${i}`, precio });
    }

    // Encontrar el producto más barato
    let seguroMasBarato = seguros[0];
    for (let i = 1; i < seguros.length; i++) {
        if (seguros[i].precio < seguroMasBarato.precio) {
            seguroMasBarato = seguros[i];
        }
    }

    alert (`El producto más barato es: ${seguroMasBarato.nombre} con un precio de $${seguroMasBarato.precio}`);
}

compararPrecios();*/

const nombreUsuario = prompt("¿Cómo es tu nombre?");

function saludar(aQuienSaludar) {
    alert("Bienvenido " + aQuienSaludar + ", vamos a ver qué seguro te conviene");
}

saludar(nombreUsuario);

function compararPrecios() {
    const seguros = [];
    
    // Solicitar la cantidad de seguros a comparar
    const cantidadSeguros = parseInt(prompt("¿Cuántos seguros deseas comparar?"));

    if (isNaN(cantidadSeguros) || cantidadSeguros <= 0) {
        alert("Por favor, ingrese una cantidad válida de seguros.");
        return;
    }

    // Obtener precios de los seguros y crear objetos de seguro
    for (let i = 1; i <= cantidadSeguros; i++) {
        const nombreSeguro = prompt(`Ingrese el nombre del Seguro ${i}:`);
        const precio = parseFloat(prompt(`Ingrese el precio del Seguro ${i}:`));

        if (isNaN(precio)) {
            console.log(`Por favor, ingrese un precio válido para el Seguro ${i}.`);
            return;
        }

        // Crear un objeto de seguro y agregarlo al array de seguros
        const seguro = { nombre: nombreSeguro, precio };
        seguros.push(seguro);
    }

    // Encontrar el seguro más barato
    let seguroMasBarato = seguros[0];
    for (let i = 1; i < seguros.length; i++) {
        if (seguros[i].precio < seguroMasBarato.precio) {
            seguroMasBarato = seguros[i];
        }
    }

    alert(`El seguro más barato es: ${seguroMasBarato.nombre} con un precio de $${seguroMasBarato.precio}`);
}

compararPrecios();

