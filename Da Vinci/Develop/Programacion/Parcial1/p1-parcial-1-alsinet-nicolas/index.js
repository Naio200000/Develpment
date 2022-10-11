'use strict';

/*
 * Alsinet, Nicolas
 */
let disco1 = {
    Nombre: 'DIsco1',
    Autor: 'Yo',
    Codigo: 1,
    Pistas: [
        {
            Nombre: 'Pista1',
            Duracion: '123',
        },
        {
            Nombre: 'Pista2',
            Duracion: '123',
        },
        {
            Nombre: 'Pista3',
            Duracion: '123',
        }
    ]
};
let disco2 = {
    Nombre: 'DIsco2',
    Autor: 'Yo',
    Codigo: 2,
    Pistas: [
        {
            Nombre: 'Pista1',
            Duracion: '123',
        },
        {
            Nombre: 'Pista2',
            Duracion: '123',
        },
        {
            Nombre: 'Pista3',
            Duracion: '123',
        }
    ]
};
let disco3 = {
    Nombre: 'DIsco3',
    Autor: 'Yo',
    Codigo: 3,
    Pistas: [
        {
            Nombre: 'Pista1',
            Duracion: '123',
        },
        {
            Nombre: 'Pista2',
            Duracion: '123',
        },
        {
            Nombre: 'Pista3',
            Duracion: '123',
        }
    ]
};
//g
// Ejemplo de la estructura de un disco:

let codigos = [];
let pistas = [];
let discos = [disco1, disco2, disco3];

// Función Cargar:
/**
 * Hace todo el llamado a los prompts para perdir los datos y genera el disco
 * el cual se pushea en el array de discos
 * @returns Array de discos 
 * Faltaría validar si apretó por error.
 */
function Cargar() {
    let nombre = validaTexto('Ingrese el Nombre del Disco', true);
    let autor = validaTexto('Ingrese el Nombre del Autor');
    let codigo = pedirCodigo();
    let pistas = armarPistas();
    let disco = armarDisco(nombre, autor, codigo, pistas);
    agregarDisco(disco);
    mostrarDiscos();
    return discos;
}

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = generarDiscos();
    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:


