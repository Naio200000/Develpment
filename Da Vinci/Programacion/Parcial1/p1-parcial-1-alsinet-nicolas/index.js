'use strict';

/*
 * Alsinet, Nicolas
 */
// let disco1 = {
//     Nombre: 'DIsco1',
//     Autor: 'Yo',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Pista1',
//             Duracion: '123',
//         },
//         {
//             Nombre: 'Pista2',
//             Duracion: '123',
//         },
//         {
//             Nombre: 'Pista3',
//             Duracion: '123',
//         }
//     ]
// };
// let disco2 = {
//     Nombre: 'DIsco2',
//     Autor: 'Yo',
//     Codigo: 2,
//     Pistas: [
//         {
//             Nombre: 'Pista1',
//             Duracion: '123',
//         },
//         {
//             Nombre: 'Pista2',
//             Duracion: '123',
//         },
//         {
//             Nombre: 'Pista3',
//             Duracion: '123',
//         }
//     ]
// };
// let disco3 = {
//     Nombre: 'DIsco3',
//     Autor: 'Yo',
//     Codigo: 3,
//     Pistas: [
//         {
//             Nombre: 'Pista1',
//             Duracion: '123',
//         },
//         {
//             Nombre: 'Pista2',
//             Duracion: '123',
//         },
//         {
//             Nombre: 'Pista3',
//             Duracion: '123',
//         }
//     ]
// };
// Ejemplo de la estructura de un disco:

let codigos = [];
let pistas = [];
let discos = [];

// Función Cargar:
/**
 * Hace todo el llamado a los prompts para perdir los datos y genera el disco
 * el cual se pushea en el array de discos
 * @returns Array de discos 
 * Faltaría validar si apretó por error
 */
const Cargar = () => {
    let nombre = validaTexto('Ingrese el Nombre del Disco', true);
    let autor = validaTexto('Ingrese el Nombre del Autor');
    let codigo = pedirCodigo();
    let pistas = armarPistas();
    let disco = armarDisco(nombre, autor, codigo, pistas);
    agregarDisco(disco);
    return discos;
};

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = generarDiscos();
    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:

function generarDiscos() {
    let html = ``;
    let divDisco = ``;
    let divPistas = ``;
    let discopista = ``;
    for (let i = 0; i < discos.length; i++) {
        divDisco = `<h3>${discos[i].Nombre}</h3>
                <p><b>Autor: </b>${discos[i].Autor}</p>
                <p><b>Código: </b>${discos[i].Codigo}</p>`;
        for (let j = 0; j < discos[i].Pistas.length; j++) {
            if (discos[i].Pistas[j].Duracion < 181 ) {

            
            divDisco += `<p><b>Pista: </b>${discos[i].Pistas[j].Nombre}</p>
                    <p><b>Duración: </b>${discos[i].Pistas[j].Duracion}</p>`
            } else {
            divDisco += `<p><b>Pista: </b>${discos[i].Pistas[j].Nombre}</p>
                    <p class="rojo"><b>Duración: </b>${discos[i].Pistas[j].Duracion}</p>`

            }
        }
        discopista += '<div>' + divDisco + '</div><div>'+ divPistas + '</div>';
    }
    html = '<div class="info">' + discopista + '</div>';
    return html
}

