// 'use strict';

/*
 *  Alsinet Nicolas
 */

const htmlProductos = document.querySelector('#productos');
const htmlMiniCarrito = document.getElementById('minicarrito');
let productos = [];
let carrito = [];
let producto1 = new Producto ('1','Iaidogi', 'Keikogi para entrenamiento, 100% Algodón', 1000 , 'producto-de-ejemplo.jpg', 'Keikogi');
let producto2 = new Producto ('2','Karategi', 'Keikogi para entrenamiento, 100% Algodón', 800 , 'producto-de-ejemplo.jpg', 'Keikogi');
let producto3 = new Producto ('3','Hakama', 'Hakama para entrenamiento, 100% Algodon', 1500 , 'producto-de-ejemplo.jpg', 'Hakama');
let producto4 = new Producto ('4','Jubon', 'Pantalon para entrenamiento de Karato, 100% Algodon', 1100 , 'producto-de-ejemplo.jpg', 'Hakama');
let producto5 = new Producto ('5','Iaito', 'Katana de entenamiento, aleacion de Aluminio', 5000 , 'producto-de-ejemplo.jpg', 'Armas');
let producto6 = new Producto ('6','Bo', 'Bo para entrenamiento de Kobudo', 2000 , 'producto-de-ejemplo.jpg', 'Armas');
productos = [producto1, producto2, producto3, producto4, producto5, producto6]

function mostrarProductos (array) {
    for (let i = 0; i < array.length; i++) {
        htmlProductos.appendChild(array[i].crearHTMLproductoCard());
    }
}

mostrarProductos (productos);


const htmlBoton = document.querySelectorAll('.agregar');
htmlBoton.forEach(boton => boton.addEventListener('click', () => {
    for (i = 0; i < productos.length; i++) {
        if (boton.id == productos[i].id) {
            agregarCarrito(productos[i])
            break
        }
    }
    mostrarMiniCarrito()
}))

function mostrarMiniCarrito() {
    htmlMiniCarrito.innerHTML = '';
    htmlMiniCarrito.appendChild(armarminicarritoP(carrito.length, ' ítems agregados'));
    htmlMiniCarrito.appendChild(armarminicarritoP(calcularTotal(), '$ es el total'));
}