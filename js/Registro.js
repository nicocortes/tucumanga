//Traigo de localStorage los datos si los hay
let biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
let mangasTop = {}; 

//Capturo cada elemento del formulario de registro
titulo = document.querySelector("#titleText")
descripcion = document.querySelector("#descripText")
categoria = document.querySelector("#categText")
autor = document.querySelector("#authorText")
año = document.querySelector("#añoText")
editorial = document.querySelector("#ediText")
imagen = document.querySelector("#imgText")
visitas = 0

//capturo el tbody de la tabla
let cuerpoLib = document.querySelector("#IMGtotal") || ""
let cuerpoLib2 = document.querySelector("#IMGtotal2") || ""

//Creo la clase para crear las instancias de heroe
class Libreria {
    constructor(titulo, descripcion, categoria, autor, año, editorial, imagen, visitas) {
        this.titulo = titulo
        this.autor = autor
        this.categoria = categoria
        this.año = año
        this.editorial = editorial
        this.imagen = imagen
        this.descripcion = descripcion
        this.visitas = visitas
    }
}
//Agregar heroes
const agregarLib = function () {
    if (titulo.value && descripcion.value && categoria.value && autor.value && año.value && editorial.value && imagen.value) {
        if (!imagen.value) {
            imagen.value = "https://static.wikia.nocookie.net/la-bitacora-del-capitan/images/6/67/Not_found.png/revision/latest?cb=20190509042801&path-prefix=es"
        }

        biblioteca.push(new Libreria(titulo.value, descripcion.value, categoria.value, autor.value, año.value, editorial.value, imagen.value, visitas))
        localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
        updateLib()
    } else {
        alert("faltan datos")
    }

}
function updateLib(){
    titulo.value = ""
    descripcion.value = ""
    categoria.value = ""
    autor.value = ""
    año.value = ""
    editorial.value = ""
    imagen.value = ""
}

//Tabla heroes
function cargarManga(){
    mangasTop = biblioteca
    IMGtotal.innerHTML = "";
    biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
    biblioteca.forEach(function (libro, index) {
        let fila = document.createElement("div");
        fila.classList = "col-6 col-md-2 mt-4 mb-4 img-topm"
        let datos = `    
        <button  onclick='verManga(${index})'>
    <img
      src="${libro.imagen}"
      alt=""
      class="img-fluid"
  /> 
</button>
  <div class="capa text-white text-center">
    <h5></h5>
  </div>

        `;
        fila.innerHTML = datos;
        IMGtotal.appendChild(fila);
    });
    
}
function cargarManga2(){
    IMGtotal2.innerHTML = "";
    biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
    biblioteca.forEach(function (libro, index) {
        let fila = document.createElement("div");
        fila.classList = "col-6 col-md-3 mt-4 mb-4 img-topm"
        let datos = `    
        <a href="./error404.html" 
        ><img
          src="${libro.imagen}"
          alt=""
          class="img-fluid"
      /></a>
      <div class="capa text-white text-center">
        <h5></h5>
      </div>

        `;
        fila.innerHTML = datos;
        IMGtotal2.appendChild(fila);
    });
}

//Posicion del top
function positionTop(){
    biblioteca.visitas = biblioteca.visitas + 1
    localStorage.setItem('biblioteca',JSON.stringify(biblioteca))
}

// Mover la posicion del top
function moverVisto(){
    mangasTop = biblioteca
    mangasTop.sort(function(b,a){
        if(a.visitas > b.visitas){
            return 1
        }
        if(a.visitas < b.visitas){
            return -1
        }
        return 0
    })
}


//Imprimir los datos del top
function masVistos(){
    mangasTop = biblioteca;
    topTabla.innerHTML = "";
    biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || []
    for (let i = 0; i < 5; i++) {

        let colum = document.createElement("tr")
        let info = `
        <th scope="row ">${i + 1}</th>
        <td>${mangasTop[i].titulo}</td>
        <td>${mangasTop[i].visitas}</td> 
        `
        colum.innerHTML = info
        topTabla.appendChild(colum) 
    }
}

if (cuerpoLib) {
    cargarManga()
    cargarManga2()
}
if (cuerpoLib2) {
    cargarManga2()
    masVistos()
}

function masVistos2(){
    mangasTop = biblioteca;
    topTabla.innerHTML = "";
    biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || []
    for (let i = 0; index < 6; index++) {

        
    }
}
for (let i = 0; index < 6; index++) {

    marcar(mangasTop)
}
