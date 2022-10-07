let precio;
let impuesto;
const iva = 0.21;

function calcular() {
    do {
        precio = parseInt(prompt(`Ingrese el precio, debe ser un numero`));
    } while (isNaN(precio));
 
    impuesto = parseInt(prompt(`Ingrese el impuesto, si no ingresa nada sera tomado 21% por defecto`));
    if ( isNaN(impuesto)) {
        impuesto = iva;
    } else {
        impuesto = impuesto / 100;
    }
    console.log(`Precio: ${precio} - IVA: ${(impuesto * 100)}% - Total: precio total:${((precio * impuesto) + precio)}`);
}


// // Solución con varios botones
// function valorPrecio(){
//     precio = parseInt(prompt("Ingrese el precio (debe ser un  número): "));
//     if (isNaN(precio)){
//         alert("El valor ingresado como precio es inválido!");
//         precio = undefined;
//         return;
//     }
// }

// function valorIva(){
//     let valor = prompt("Ingrese el valor del IVA: ");
//     if (isNaN(valor)){
//         alert("El valor ingresado como impuesto es inválido!");
//         return;
//     }
//     impuesto = (valor / 100);
// }
// function calcularTotal(){
//     if (impuesto == undefined){
//         impuesto = iva;
//     }
//     if (precio == undefined){
//         alert("Debe ingresar un valor para el precio");
//         return;
//     }
//     alert("El precio total con impuesto incluído es $" + (precio * (1 + impuesto)));
// }