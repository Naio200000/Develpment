'use strict';

/*
 * Alsinet, Nicolas
 */

// Ejemplo de la estructura de un disco:
let disco = {
    Nombre: '',
    Autor: '',
    Codigo: '',
    Pistas: [],
};
let nombre = '';
let autor = '';
let codigo = 0;
let pista = {
        Nombre: '',
        Duracion: '',
    };
// Discos:
let discos = [];

// Función Cargar:
const Cargar = () => {
    nombre = validaTexto('Ingrese el Nombre del Disco');
    autor = validaTexto('Ingrese el Nombre del Autor');
    pedirCodigo();
    pedirPista();
    armarDisco(nombre, autor, codigo, pista);
    agregarDisco();
    console.log(discos);
};

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';

    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:
function validaTexto (mensaje) {
    let textoValido;
    do {
        textoValido = prompt(mensaje);
        if (textoValido == '')
            mensaje = 'Este campo no puede quedar Vacío'
    } while (textoValido == '')
    return textoValido
}
// function pedirNombre () {
//     nombre = prompt('Ingrese el Nombre del Disco');
//     return nombre
// }
// function pedirAutor () {
//     autor = prompt('Ingrese el Nombre del Autor');
//     return autor
// }
function pedirCodigo () {
    codigo = parseInt(prompt('Ingrese el codigo de ingreso'));
    return codigo
}
function pedirPista () {
    let nombrePista = prompt('Ingrese Nombre de la pista');
    let duracionPista = parseInt(prompt('Ingrese Duracion de la pista'));
    pista = {
        Nombre: nombrePista,
        Duracion: duracionPista,
    };
    return pista
}
function armarDisco (nombre, autor, codigo, pistas) {
    disco = {
        Nombre: nombre,
        Autor: autor,
        Codigo: codigo,
        Pistas: pistas
    };
    return disco;
}
function agregarDisco () {
    discos.push(disco)
    return discos;
}