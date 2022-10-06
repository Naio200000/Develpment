"use strict";

// declaración de variables
let ciudad = "";
let sexo = "";
let edad = 0;
let contHombres = 0;
let contMujeres = 0;
let contEdadHombresMayores = 0;
let contEdadMujeresMenores = 0;
let sumEdadGeneral = 0;
let sumEdadHombres = 0;
let sumEdadMujeres = 0;
let minEdad;
let maxEdad;
do {
    do {} while(!isNaN(prompt("Ingrese nombre de la Ciudad")));
    do { 
        sexo = prompt("Ingrese H o M dependiendo del sexo").toLocaleLowerCase();
    } while(!(sexo ==="m" || sexo === "h"));
    do { 
        edad = parseInt(prompt("Ingrese la edad (solo numero), mayor a 0 y menor a 110 años"));
    } while(!(edad > 0 && edad < 110));
    
    sumEdadGeneral += edad;
    
    if (sexo == 'h') {
        contHombres++;
        sumEdadHombres += edad;
        if (edad > 21) {
            contEdadHombresMayores++;
        }
        if (minEdad === undefined || edad < minEdad) {
            minEdad = edad;
        }
    } else {
        contMujeres++;
        sumEdadMujeres += edad;
        if (edad < 21 ) {
            contEdadMujeresMenores++;
        }
        if (maxEdad === undefined || edad > maxEdad) {
            maxEdad = edad;
        }
    }
} while (confirm('Ingresar una nueva persona?'));

// Esto es un choclo que armé para probar lo de armar todo en un solo mensaje
document.write(`El promedio general de edades es ${sumEdadGeneral / (contHombres + contMujeres)} <br> de los cuales el promedio de edad de Hombre es ${sumEdadHombres / contHombres} y de Mujeres es ${sumEdadMujeres / contMujeres}.<br> El porsentaje de Hombres Mayores a 21 es ${((contEdadHombresMayores * 100) / contHombres )}% y el Porsentade Mujeres menores es ${((contEdadMujeresMenores * 100) / contMujeres)}%. <br> La menor edad de Hombres es ${minEdad} y la mayor edad de Mujeres es ${maxEdad}`)