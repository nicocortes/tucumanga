let biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
// let bibliot={}

let usuarioLog = JSON.parse(localStorage.getItem("usuario")) || "";

let administrador = {
    email: "admin@gmail.com",
    contraseña: "admin",
  };

function redirigirHome() {
  if (usuarioLog === "") {
    location.replace("/home.html");
  } else {
    if (
        usuarioLog.email != administrador.email &&
        usuarioLog.contraseña != administrador.contraseña
    ) {
      location.replace("/home.html");
    }
  }
}
redirigirHome();

//elemento capturado en el formulario de registro
let titulo = document.querySelector("#titleText");
let descripcion = document.querySelector("#descripText");
let categoria = document.querySelector("#categText");
let autor = document.querySelector("#authorText");
let año = document.querySelector("#añoText");
let editorial = document.querySelector("#ediText");
let imagen = document.querySelector("#imgText");
// let visitas = 0

//capturo los datos y se dirigen a la tabla
let cuerpoLib = document.querySelector("#cuerpoLib") || "";

//funcion constructora
class Libreria {
  constructor(titulo, descripcion, categoria, autor, año, editorial, imagen) {
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
    this.año = año;
    this.editorial = editorial;
    this.imagen = imagen;
    this.descripcion = descripcion;
    // this.visitas = visitas
  }
}

//funcion agregar Libros
const agregarLib = function () {
  if (
    titulo.value &&
    descripcion.value &&
    categoria.value &&
    autor.value &&
    año.value &&
    editorial.value &&
    imagen.value
  ) {
    if (!imagen.value) {
      imagen.value =
        "https://static.wikia.nocookie.net/la-bitacora-del-capitan/images/6/67/Not_found.png/revision/latest?cb=20190509042801&path-prefix=es";
    }

    biblioteca.push(
      new Libreria(
        titulo.value,
        descripcion.value,
        categoria.value,
        autor.value,
        año.value,
        editorial.value,
        imagen.value
      )
    );
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
    updateLib();
  } else {
    alert("faltan datos");
  }
};

//actualizar la pagina
function updateLib() {
  titulo.value = "";
  descripcion.value = "";
  categoria.value = "";
  autor.value = "";
  año.value = "";
  editorial.value = "";
  imagen.value = "";
}

//funcion cargarLib

function cargarLib() {
  cuerpoLib.innerHTML = "";
  biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
  biblioteca.forEach(function (libro, index) {
    let fila = document.createElement("tr");
    fila.classList = "text-center";
    let info = `
        <th scope="row">${libro.titulo}</th>
        <td>${libro.categoria}</td>
        <td>${libro.autor}</td>
        <td>${libro.año}</td>
        <td>${libro.editorial}</td>
        <td><button class="btn btn-danger" onclick="borrarLib(${index})">X</button></td>
        `;
    fila.innerHTML = info;
    cuerpoLib.appendChild(fila);
  });
}
//borrar libro
function borrarLib(id) {
  libro = biblioteca[id];
  let validar = confirm(`Esta seguro de que quiere eliminar a ${libro.titulo}`);

  if (validar) {
    biblioteca.splice(id, 1);
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
    alert(`Se borro correctamente a ${libro.titulo}`);
    cargarLib();
  }
}

//cantidad de contactos

// //Posicion del top
// function positionTop(){
//     bibliot.visitas=bibliot.visitas + 1
//     localStorage.setItem('biblioteca',JSON.stringify(biblioteca))
// }

// // Mover la posicion del top
// function moverVisto(){
//     bibliot = biblioteca
//     bibliot.sort(function(b,a){
//         if(a.visitas > b.visitas){
//             return 1
//         }
//         if(a.visitas < b.visitas){
//             return -1
//         }
//         return 0
//     })
// }

// //Imprimir los datos del top
// function masVistos(){
//     topTabla.innerHTML = ""
//     bibliot = biblioteca
//     biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || []
//     bibliot.forEach(function(libro,index){
//         let colum = document.createElement("tr")
//         let info = `
//         <th scope="row ">${index + 1}</th>
//         <td>${libro.alias}</td>
//         <td>${libro.visitas}</td>
//         `
//         colum.innerHTML = info
//         topTabla.appendChild(colum)
//     })
// }

//verificacion de tabla
if (cuerpoLib) {
  cargarLib(biblioteca);
}
// moverVisto()
// masVistos()
