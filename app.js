let biblioteca=JSON.parse(localStorage.getItem('biblioteca')) || []

//elemento capturado en el formulario de registro
let titulo = document.querySelector("#titleText")
let descripcion = document.querySelector("#descripText")
let categoria = document.querySelector("#categText")
let autor = document.querySelector("#authorText")
let año = document.querySelector("#añoText")
let editorial= document.querySelector("#ediText")
let imagen = document.querySelector("#imgText")

//capturo los datos y se dirigen a la tabla
let cuerpoLib = document.querySelector("#cuerpoLib") || ""

//funcion constructora
class Libreria{
    constructor(titulo,descripcion,categoria,autor,año,editorial,imagen){
        this.titulo = titulo
        this.autor = autor
        this.categoria = categoria
        this.año = año
        this.editorial = editorial
        this.imagen = imagen
        this.descripcion = descripcion
    }
}


//funcion agregar Libros
const agregarLib = function(){
    if(titulo.value && descripcion.value && categoria.value && autor.value && año.value && editorial.value && imagen.value){
        if(!imagen.value){
            imagen.value = "https://static.wikia.nocookie.net/la-bitacora-del-capitan/images/6/67/Not_found.png/revision/latest?cb=20190509042801&path-prefix=es"
        }

        biblioteca.push(new Libreria(titulo.value,descripcion.value,categoria.value,autor.value,año.value,editorial.value,imagen.value))
        localStorage.setItem("biblioteca",JSON.stringify(biblioteca))
        updateLib()
    }else{
        alert("faltan datos")
    }

}

//actualizar la pagina
function updateLib(){
    titulo.value = ""
    descripcion.value = ""
    categoria.value = ""
    autor.value = ""
    año.value = ""
    editorial.value = ""
    imagen.value = ""
}


//funcion cargarLib

function cargarLib(){
    cuerpoLib.innerHTML = ""
    biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || []
    biblioteca.forEach(function(libro,index){
        let fila = document.createElement("tr")
        fila.classList = "text-center"
        let info = `
        <th scope="row">${libro.titulo}</th>
        <td>${libro.categoria}</td>
        <td>${libro.autor}</td>
        <td>${libro.año}</td>
        <td>${libro.editorial}</td>
        <td><button class="btn btn-danger" onclick="borrarLib(${index})">X</button></td>
        `
        fila.innerHTML = info
        cuerpoLib.appendChild(fila)
        
    });

}
//borrar libro
function borrarLib(id){
    libro = biblioteca[id]
    let validar = confirm(`Esta seguro de que quiere eliminar a ${libro.titulo}`)

    if(validar){
        biblioteca.splice(id,1)
        localStorage.setItem("biblioteca",JSON.stringify(biblioteca))
        alert(`Se borro correctamente a ${libro.titulo}`)
        cargarLib()
    }


}

//cantidad de contactos



//verificacion de tabla
if(cuerpoLib){
    cargarLib(biblioteca)
}
