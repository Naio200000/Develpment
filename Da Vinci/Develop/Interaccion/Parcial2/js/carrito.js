class Carrito {

    constructor (){
        this.producto = [];
    }
    agregar(objeto){
        
        this.producto.push(objeto);
    }
    armarMiniCarrito (id, valor) {
        d.getElementById(id).innerHTML = valor;
    }
    calcularTotal() {
        let total = 0;
        for (let i = 0; i < carrito.producto.length; i++) {
            total += this.producto[i].precio;
        }
        return total
    }

}
