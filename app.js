let numeroSecreto = 0;
let intentos = 1;
// Arreglo para que no se repitan los numeros aleatorios
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto)
{
    let label = document.querySelector(elemento);
    label.innerHTML = texto;
    return;
}

function verificarIntento()
{
    // Funcion para obtener elementos del html mediante el id, no la etiqueta
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if (numeroDeUsuario === numeroSecreto)
    {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        // Remover un atributo de una etiqueta del html. Solo ingreso el atributo que quiero eliminar
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto)
        {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        else
        {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        
        // Incrementar los intentos
        intentos++;
        // Limpiar valor de la caja de texto
        limpiarCaja();
    }
    //console.log(numeroDeUsuario);
    //alert('Click desde el boton');

    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Ingresa un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja de texto
    limpiarCaja();

    // Indicar el mensaje del intervalo de numeros
    // Generar el numero aleatorio
    // Reiniciar el contador de intentos
    condicionesIniciales();

    // Deshabiliatr el boton de nuevo juego
    // Cuendo quiero agregar atributos, deben ser dos parametros, el atributo y true o flase
    // Colocar el atributo con tal valor
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    // del 1 al 10
    let aleatorio =  Math.floor(Math.random() * numeroMaximo) + 1;
    //console.log(aleatorio);
    //console.log(listaNumerosSorteados);
    
    // ya sorteamos todos los numeros
    // esto evita que al llegar al final de los numeros el programa caiga en el bucle infinito de la recursividad
    if (listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }
    else
    {
        // Si el numero esta en la lista
        if (listaNumerosSorteados.includes(aleatorio))
        {
            aleatorio = generarNumeroSecreto();
        }
        else
        {
            listaNumerosSorteados.push(aleatorio);
        }
        return aleatorio;
    }

}

// Generar el numero aleatorio
condicionesIniciales();