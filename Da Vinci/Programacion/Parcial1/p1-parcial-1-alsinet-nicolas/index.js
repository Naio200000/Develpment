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
// Ejemplo de la estructura de un disco:

let codigos = [1,2,3];
let pistas = [];
let discos = [disco1, disco2, disco3];

// Función Cargar:
const Cargar = () => {
    let nombre = validaTexto('Ingrese el Nombre del Disco');
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
    let html = ``;
    generarDiscos();
    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:

function generarDiscos() {
    let html;
    for (let i = 0; i < discos.length; i++) {
        
        html = html + `<div class="info">
                            <div>
                                <h3>${discos[i].Nombre}</h3>
                                <p><b>Autor:</b>${discos[i].Autor}</p>
                                <p><b>Código:</b>${discos[i].Codigo}</p>
                            </div>
                            <div>
                                <p><b>Pista:</b>${discos[i].Pistas[0].Nombre}</p>
                                <p><b>DUración</b>${discos[i].Pistas[0].Duracion}</p>
                                <p><b>Pista:</b>${discos[i].Pistas[1].Nombre}</p>
                                <p><b>DUración</b>${discos[i].Pistas[1].Duracion}</p>
                                <p><b>Pista:</b>${discos[i].Pistas[2].Nombre}</p>
                                <p><b>DUración</b>${discos[i].Pistas[2].Duracion}</p>
                            </div>
                        </div>`
        
    }
    return html
}

