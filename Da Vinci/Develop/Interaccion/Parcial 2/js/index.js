import misProductos from '../productos.json' assert {type: 'json'};
console.log(misProductos)
// 'use strict';

/*
 *  Alsinet Nicolas
 */
/*Declaracion de Constantes */
const d = document
const htmlProductos = document.querySelector('#productos');
const exampleModal = document.getElementById('exampleModal');
// Declaracion de Clases
class Producto {


    constructor(id,nombre, descrip, descrip_larga, precio, imagen,altImagen, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.descrip = descrip;
        this.descrip_larga = descrip_larga;
        this.precio = precio;
        this.imagen = imagen;
        this.altImagen = altImagen
        this.categoria = categoria;
        this.card = this.crearHTMLproductoCard()
    };
    creaPrecioBoton () {
        let productoPrecio = d.createElement('span');
        productoPrecio.className = 'col';
        productoPrecio.innerHTML = `$${this.precio}`;
        let productoBoton = d.createElement('button');
        productoBoton.className = 'btn btn-primary col';
        productoBoton.id = this.id;
        productoBoton.innerHTML = `Agregar <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16"><path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>`;
        productoBoton.addEventListener('click', (e) => {
            let boton = e.target;
            for (let i = 0; i < productos.length; i++) {
                if (boton.id == productos[i].id) {
                    carrito.agregar(productos[i])
                    break
                }
            }
            mostrarMiniCarrito();
        })
        let precioBoton = document.createElement('div');
        precioBoton.className = 'row';
        precioBoton.append(productoPrecio, productoBoton);
        return precioBoton;
    }
    creaCardBody () {
        //type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
        let productoNombre = d.createElement('h3');
        productoNombre.setAttribute('type', 'button');
        productoNombre.setAttribute('class', 'btn btn-primary card-title');
        productoNombre.setAttribute('data-bs-toggle', 'modal');
        productoNombre.setAttribute('data-bs-target', '#staticBackdrop')
        productoNombre.addEventListener('click', (e) => {
            let boton = e.target;
            for (let i = 0; i < productos.length; i++) {
                if (boton.id == productos[i].id) {
                    productos[i].agregarDatosModal();
                    break
                }
            }
        })
        // productoNombre.className = 'card-title';
        productoNombre.innerHTML = this.nombre;
        let productoDescrip = d.createElement('p');
        productoDescrip.className = 'card-text';
        productoDescrip.innerHTML = this.descrip;
        let precioBoton = this.creaPrecioBoton()
        let productoText = d.createElement('div');
        productoText.className = 'card-body';
        productoText.append(productoNombre, productoDescrip, precioBoton);
        return productoText;
    }
    crearHTMLproductoCard(){
        let productoImg = d.createElement('img');
        productoImg.className = 'card-img-top';
        productoImg.setAttribute('src', this.imagen[0]);
        productoImg.setAttribute('alt', this.altImagen[0]);
        let productoCategoria = d.createElement('span');
        productoCategoria.className = 'mx-2 ms-auto';
        productoCategoria.innerHTML = this.categoria;
        let productoText = this.creaCardBody ();
        let productoCard = d.createElement('div');
        productoCard.className = 'card'
        productoCard.append(productoImg, productoCategoria, productoText);
        let col = d.createElement('div');
        col.className = 'col';
        col.append(productoCard);
        return col;
    }
    agregarDatosModal() {
        d.getElementById('tituloProducto').innerHTML = this.nombre
        let carrousel = d.getElementById('carrusel-producto').children;
        for (let i = 0; i < carrousel.length; i++) {
            let img = d.createElement('img');
            img.setAttribute('src', this.imagen[i]);
            img.setAttribute('alt', this.altImagen[i]);
            img.setAttribute('class', 'd-block w-100');
            carrousel[i].appendChild(img);
        }
        d.getElementById('categoriaProducto').innerHTML = this.categoria;
        d.getElementById('descripProducto').innerHTML = this.descrip_larga;
        d.getElementById('precioProducto').innerHTML = this.precio;
    }
};

class Carrito {

    constructor (){
        this.producto = [];
    }
    agregar(objeto){
        
        this.producto.push(objeto);
    }
    armarMiniCarrito (clase, valor) {
        let span = d.getElementsByClassName(clase);
        for (let i = 0; i < span.length; i++){
            span[i].innerHTML = valor
        }
    }
    calcularTotal() {
        let total = 0;
        for (let i = 0; i < carrito.producto.length; i++) {
            total += parseInt(this.producto[i].precio);
        }
        return total
    }
};
/* Armado de Objetos */
let productos = [];
cargarProductos(misProductos);
let carrito = new Carrito;


/**
 * Muestra las tarjetas de productos
 * @param {Array contendor de todos los productos} array 
 */
function mostrarProductos (array) {
    
    for (let i = 0; i < array.length; i++) {
        htmlProductos.appendChild(array[i].card);
    }
}
function mostrarMiniCarrito () {
    carrito.armarMiniCarrito('minicarrito-cantidad', carrito.producto.length);
    carrito.armarMiniCarrito('minicarrito-precio', carrito.calcularTotal());

}

mostrarProductos (productos);
mostrarMiniCarrito();

/**
 * Funciones de Bootstrap
 */
exampleModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const recipient = button.getAttribute('data-bs-whatever');
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = exampleModal.querySelector('.modal-title');
  const modalBodyInput = exampleModal.querySelector('.modal-body input');

  modalTitle.textContent = `Mensaje Nuevo ${recipient}`;
  modalBodyInput.value = recipient;
})

function cargarProductos(data) {
        // let producto1 = new Producto ('1','Iaidogi', 'Keikogi para entrenamiento, 100% Algodón', 1000 , './img/productos/keikogi-01.jpg', 'Keikogi');
    for (let i = 0; i < data.productos.length; i++) {
        let producto = new Producto (data.productos[i].id, data.productos[i].nombre, data.productos[i].descrip, data.productos[i].descrip_larga, data.productos[i].precio, data.productos[i].imagen, data.productos[i].altImagen, data.productos[i].categoria)
        productos.push(producto)
    }
}