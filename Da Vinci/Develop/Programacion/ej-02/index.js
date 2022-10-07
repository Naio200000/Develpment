"use strict";

/* TODO */
// ingreso de datos

let categoria = parseInt(prompt('Ingrese si uds es Categoría 1, 2 ó 3'));
let subcategoria = prompt('Ingrese la subcategoría A, B, o C');
let sueldoBasico;
let multiplicador;
let sueldo;
let mensaje = '';

// algoritmo
switch (categoria) {
    case 1:
        sueldoBasico = 1000;
        break; 
    case 2:
        sueldoBasico = 1500;
        break; 
    case 3:
        sueldoBasico = 2000;
        break;
    default:
        mensaje = 'No ingreso una categoría o subcategoría valida';
}

switch (subcategoria.toLowerCase()) {
    case 'a':
        multiplicador = 1.5;
        break; 
    case 'b':
        multiplicador = 2;
        break; 
    case 'c':
        multiplicador = 2.5;
        break;
    default:
        mensaje = 'No ingreso una categoría o subcategoría valida';
}

if ( mensaje != '') {
    document.write(mensaje);
} else {
        sueldo = sueldoBasico * multiplicador;
    if ( sueldo <= 3000) 
        mensaje = `El sueldo es de ${sueldo} y esta en el rango "Inicial".`
    else if ( sueldo <= 4000)
        mensaje = `El sueldo es de ${sueldo} y esta en el rango "Intermedio".`
    else
        mensaje = `El sueldo es de ${sueldo} y esta en el rango "Avanzado".` 
    document.write(mensaje);
    }
    
