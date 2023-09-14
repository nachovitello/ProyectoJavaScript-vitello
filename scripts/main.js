
//voy a hacer un simulador para ver que service le tenes que hacer a tu auto

const nombreUsuario = prompt("¿Como es tu nombre?");

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

compararPrecios();
