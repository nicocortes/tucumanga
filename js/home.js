//Traigo de localStorage los datos si los hay
let biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
let mangasTop = {}; 
let manga = {}

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

//Tabla mangas
function cargarManga(){
    mangasTop = biblioteca
    moverVisto()
    IMGtotal.innerHTML = "";
    biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
    for (let i = 0; i < 5; i++){
        let fila = document.createElement("div");
        fila.classList = "col-6 col-md-2 mt-4 mb-4 img-topm"
        let datos = `    
        <img
        src="${mangasTop[i].imagen}"
        alt=""
        class="img-fluid"
    />
    <div class="verMangaModal text-center">
    <button class="btn font-weight-bold" onclick='verManga(${i})' >--Leer--</button>
    </div>
    <div class="capa text-white text-center">
      <h5>${mangasTop[i].titulo}</h5>
    </div>
        `;
        fila.innerHTML = datos;
        IMGtotal.appendChild(fila);
    }

    
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
  
    manga.visitas = manga.visitas + 1
    localStorage.setItem('biblioteca',JSON.stringify(biblioteca))
    console.log(manga.visitas)
}

// Mover la posicion del top
function moverVisto(){
    manga = biblioteca
    manga.sort(function(b,a){
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
function verManga(id){
    console.log(id)
    manga=mangasTop[id]
    document.querySelector('#TituloModal').innerText = manga.titulo
    document.querySelector('#tomo_Manga').src = manga.imagen
    document.querySelector('#text_autor').innerText = manga.autor
    document.querySelector('#text_categoti').innerText = manga.categoria
    document.querySelector('#text_Año').innerText = manga.año
    document.querySelector('#text_Editorial').innerText = manga.editorial
    document.querySelector('#text_Sinopsis').innerText=manga.descripcion
    

    $('#verManga').modal("show")
    positionTop()
    moverVisto()
    masVistos()
}
moverVisto()
masVistos()
