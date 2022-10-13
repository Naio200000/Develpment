let listaDiscos = document.getElementById('disc-list_tabla');
let listaPistas = document.getElementById('info_pistas-tabla')


function listarDiscos () {
    for (i = 0; i < discos.length; i++) {
        let table_row = document.createElement('tr');
        let table_nombre = document.createElement('td');
        let table_autor = document.createElement('td');
        let table_codigo = document.createElement('td');
        let table_boton = generaBoton(discos[i].Codigo)
        table_nombre.innerHTML = discos[i].Nombre;
        table_autor.innerHTML = discos[i].Autor;
        table_codigo.innerHTML = discos[i].Codigo;
        if (discos[i].Codigo = mayorDuracion())
            table_row.setAttribute('class','mayorDuracion')
        table_row.appendChild(table_codigo);
        table_row.appendChild(table_nombre);
        table_row.appendChild(table_autor);
        table_row.appendChild(table_boton);
        listaDiscos.appendChild(table_row)
    }

}
function listarPistas(array){
    let listaPistas = document.getElementById('info_pistas-tabla');
    listaPistas.innerHTML = '<tr><th>Pista</th><th>Duración</th></tr>';
    for (i = 0; i < array.length; i++) {
        let table_row = document.createElement('tr');
        let table_nombre= document.createElement('td');
        let table_duracion = document.createElement('td');
        table_nombre.innerHTML = array[i].Nombre;
        table_duracion.innerHTML = array[i].Duracion;
        if (array[i].Duracion > 180) {
            table_row.setAttribute('class','rojo')
        }
        table_row.appendChild(table_nombre);
        table_row.appendChild(table_duracion);
        listaPistas.appendChild(table_row)     
    }
}
function generaBoton(dato) {
    let td = document.createElement('td');
    let boton = document.createElement('button');
    boton.id = dato
    boton.innerHTML = `Ver disco`
    boton.setAttribute('onclick', `buscarDisco(${dato})`)
    boton.setAttribute('class', `boton`)
    td.appendChild(boton)
    return td
}
function buscarDisco(numero) {
    for (i = 0; i < discos.length; i++) {
        if (discos[i].Codigo == numero) {
            mostrarDisco(discos[i]);
            break
        }
    }
}


function calcularDuracion (array){
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += parseFloat(array[i].Duracion);
    }
    return total
}
function calcularPromedio() {
    let total = 0;
    for (i = 0; i < discos.length; i++) {
        total += calcularDuracion(discos[i].Pistas)
    }
    return total / discos.length
}
function mayorDuracion() {
    let max_duracion = 0
    let codigo;
    for (i = 0; i < discos.length; i++) {
        let duracion = calcularDuracion(discos[i].Pistas)
        if (duracion > max_duracion) {
            mayorDuración = duracion;
            codigo = i;
        }
    }
    return codigo
}

mostrarDiscos()
mostrarDisco (discos[0])