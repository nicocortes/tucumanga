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

//Tabla mangas
function cargarManga(){

    IMGtotal.innerHTML = "";
    mangasTop =  biblioteca.sort(function(b,a){
        if(a.visitas > b.visitas){
            return 1
        }
        if(a.visitas < b.visitas){
            return -1
        }
        return 0
    })
 
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
function verManga(id){
    console.log(id)
    mangasTop = biblioteca[id]
    
    document.querySelector('#TituloModal').innerText = mangasTop.titulo
    document.querySelector('#tomo_Manga').src = mangasTop.imagen
    document.querySelector('#text_autor').innerText = mangasTop.autor
    document.querySelector('#text_categoti').innerText = mangasTop.categoria
    document.querySelector('#text_Año').innerText = mangasTop.año
    document.querySelector('#text_Editorial').innerText = mangasTop.editorial
    document.querySelector('#text_Sinopsis').innerText=mangasTop.descripcion
    

    $('#verManga').modal("show")
    positionTop()
    masVistos()
    
    
    

}

//Imprimir los datos del top
function masVistos(){
    // moverVisto()
    topTabla.innerHTML = "";
    mangasTop = biblioteca
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
//Posicion del top
function positionTop(){
    
    mangasTop.visitas = mangasTop.visitas + 1
    localStorage.setItem('biblioteca',JSON.stringify(biblioteca))
    console.log(mangaTop.visitas)
}
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



if (cuerpoLib) {
    cargarManga()
    moverVisto()
    masVistos()
    
}
if (cuerpoLib2) {
    cargarManga2()
    
}

