const d = document
class Producto {


    constructor(id,nombre, descrip, precio, imagen, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.descrip = descrip;
        this.precio = precio;
        this.imagen = imagen;
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
            mostrarMiniCarrito()
        })
        let precioBoton = document.createElement('div');
        precioBoton.className = 'row';
        precioBoton.append(productoPrecio, productoBoton);
        return precioBoton;
    }
    creaCardBody () {
        let productoNombre = d.createElement('h5');
        productoNombre.className = 'card-title';
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
        productoImg.setAttribute('src', this.imagen);
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
};



// function cargarProductos(data) {
        
//     for (let i = 0; i < data.productos.length; i++) {
//         let producto;
//         producto = new Producto (data.productos[i].id, data.productos[i].nombre, data.productos[i].descrip, data.productos[i].imagen, data.productos[i].altIImaggen, data.productos[i].categoria)
//         productos.push(producto)
//     }
// }

// function getProductos () {
//     fetch(`productos.json`)
//     .then(toJson)
//     .then(data => cargarProductos(data));

// }

// function toJson(response) {
//     if(response.ok) {
//         return response.json();
//     }
//     else {
//         console.error("Error: ", response);
//     }
// }
