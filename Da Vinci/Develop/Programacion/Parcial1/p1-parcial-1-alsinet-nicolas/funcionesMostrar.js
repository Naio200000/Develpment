
//  function generarDiscos() {
//     let html = ``;
//     let divDisco = ``;
//     let divPistas = ``;
//     let discoPista = ``;
//     for (let i = 0; i < discos.length; i++) {
//         divDisco = `<h3>${discos[i].Nombre}</h3>
//                 <p><b>Autor: </b>${discos[i].Autor}</p>
//                 <p><b>Código: </b>${discos[i].Codigo}</p>`;
//         for (let j = 0; j < discos[i].Pistas.length; j++) {
//             if (discos[i].Pistas[j].Duracion < 181 ) {

            
//             divDisco += `<p><b>Pista: </b>${discos[i].Pistas[j].Nombre}</p>
//                     <p><b>Duración: </b>${discos[i].Pistas[j].Duracion}</p>`
//             } else {
//             divDisco += `<p><b>Pista: </b>${discos[i].Pistas[j].Nombre}</p>
//                     <p class="rojo"><b>Duración: </b>${discos[i].Pistas[j].Duracion}</p>`

//             }
//         }
//         discoPista += '<div>' + divDisco + '</div><div>'+ divPistas + '</div>';
//     }
//     html = '<div class="info">' + discoPista + '</div>';
//     return html
// }
let listaDiscos = document.getElementById('disc-list_tabla');
let discosTotal = document.getElementById('total-disc');

function mostrarDiscos () {
    listaDiscos.innerHTML = '<tr><th>Codigo</th><th>Disco</th><th>Artista</th></tr>';
    if (discos.length == 0) {
        discosTotal.innerHTML = 0;

    } else {
        discosTotal.innerHTML = discos.length;
        listarDiscos();
    }
}

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
        table_row.appendChild(table_codigo);
        table_row.appendChild(table_nombre);
        table_row.appendChild(table_autor);
        table_row.appendChild(table_boton);
        listaDiscos.appendChild(table_row)
    }
}
function generaBoton(dato) {
    let td = document.createElement('td');
    let boton = document.createElement('button');
    boton.id = dato
    boton.innerHTML = `Ver disco`
    td.appendChild(boton)
    return td
}
mostrarDiscos()

// let boton = document.getElementsByTagName('td')
// boton.addEventListener('click', )