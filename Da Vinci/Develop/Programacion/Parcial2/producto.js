class Producto {


    constructor(id,nombre, descrip, precio, imagen, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.descrip = descrip;
        this.precio = precio;
        this.imagen = imagen;
        this.categoria = categoria;
    }

    crearHTMLproductoCard(){
        let productoCard = document.createElement('div');
        let productoText = document.createElement('div');
        let productoNombre = document.createElement('h3');
        let productoDescrip = document.createElement('p');
        let productoPrecio = document.createElement('p');
        let productoCategoria = document.createElement('p');
        let productoBoton = document.createElement('button');
        let productoImg = document.createElement('img');
        productoImg.setAttribute('src', 'producto-de-ejemplo.jpg')
        productoNombre.innerHTML = this.nombre;
        productoDescrip.innerHTML = this.descrip;
        productoPrecio.innerHTML = `Precio: $${this.precio}`;
        productoCategoria.innerHTML = this.categoria;
        productoBoton.innerText = `Agregar`;
        productoBoton.setAttribute('id', `${this.id}`)
        productoBoton.setAttribute('class', `agregar`)
        productoText.appendChild(productoNombre);
        productoText.appendChild(productoDescrip);
        productoText.appendChild(productoPrecio);
        productoText.appendChild(productoCategoria);
        productoText.appendChild(productoBoton);
        productoCard.appendChild(productoImg);
        productoCard.appendChild(productoText);
        return productoCard;
    }
};
function agregarCarrito(producto) {
    carrito.push(producto)
};

function armarminicarritoP (valor, texto) {
    let p = document.createElement('p');
    let span = document.createElement('span');
    span.innerHTML = valor;
    p.appendChild(span);
    p.innerHTML += texto;
    return p
};

function calcularTotal() {
    let total = 0;
    for (i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total
}
