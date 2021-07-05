let biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
let manga = {};

//Capturo cada elemento del formulario de registro
titulo = document.querySelector("#titleText");
descripcion = document.querySelector("#descripText");
categoria = document.querySelector("#categText");
autor = document.querySelector("#authorText");
año = document.querySelector("#añoText");
editorial = document.querySelector("#ediText");
imagen = document.querySelector("#imgText");
visitas = 0;

//capturo el tbody de la tabla
let cuerpoLib3 = document.querySelector("#IMGtotal3") || "";

//Tabla heroes
function cargarManga3(Mangas) {
  IMGtotal3.innerHTML = "";

  biblioteca = JSON.parse(localStorage.getItem("biblioteca"));
   //traigo de nuevo la biblioteca para sacar el indice
  Mangas.forEach(function (libro, index) {
    //variable indice donde obtengo la posicion del libro seleccionado
    let indice = biblioteca.findIndex(function (item) {
      return item.titulo === libro.titulo;
    });

    
    let fila = document.createElement("div");
    fila.classList = "col-6 col-md-4 col-lg-3 col-xl-2 mt-4 mb-4 img-topm";
    let datos = `    
       
    <img
      src="${libro.imagen}"
      alt=""
      class="img-fluid"
     
  />
  <div class="verMangaModal text-center">
  <button class="btn font-weight-bold pr-4 pl-4" onclick='verManga(${indice})' >Leer</button>
  </div>
  <div class="capa text-white text-center">
    <h6>${libro.titulo}</h6>
  </div>

        `;
    fila.innerHTML = datos;
    IMGtotal3.appendChild(fila);
  });
  
}
//Posicion del top
function positionTop() {
  mangasTop = manga;
  mangasTop.visitas = mangasTop.visitas + 1;
  localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
  mangasTop.visitas
}

// Mover la posicion del top
function moverVisto() {
  mangasTop = biblioteca;
  mangasTop.sort(function (b, a) {
    if (a.visitas > b.visitas) {
      return 1;
    }
    if (a.visitas < b.visitas) {
      return -1;
    }
    return 0;
  });
}

function verManga(id) {
  
  manga = biblioteca[id];
  document.querySelector("#TituloModal").innerText = manga.titulo;
  document.querySelector("#tomo_Manga").src = manga.imagen;
  document.querySelector("#text_autor").innerText = manga.autor;
  document.querySelector("#text_categoti").innerText = manga.categoria;
  document.querySelector("#text_Año").innerText = manga.año;
  document.querySelector("#text_Editorial").innerText = manga.editorial;
  document.querySelector("#text_Sinopsis").innerText = manga.descripcion;
  document.querySelector('#urlDeTomo').href=manga.tomo
  document.querySelector("#urlDeTomo").innerText = manga.tomo;
  document.querySelector("#demogText").innerText = manga.demografia;
  positionTop()
  $("#verManga").modal("show");
}


if (cuerpoLib3) {
  cargarManga3(biblioteca);
}


//---------------------------------------------------------------------------------------------------------------
//BUSCADOR
function filterBiblio() {
  let texto = document.querySelector("#textBuscar");
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.titulo.indexOf(texto.value.charAt(0).toUpperCase() + texto.value.toLowerCase().slice(1)) > -1;
  });
  texto.value=""
  texto.focus()
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  verManga(Mangas);
}

// FILTRO DEMOGRAFIAS---------------------------------------
function filterShonnen() {
  let texto = "Shonnen";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.demografia.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  verManga(Mangas);
}

function filterSeinen() {
  let texto = "Seinen";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.demografia.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  verManga(Mangas);
}

function filterShôjo() {
  let texto = "Shôjo";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.demografia.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  verManga(Mangas);
}
function filterJosei() {
  let texto = "Josei";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.demografia.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  verManga(Mangas);
}
function filterKodomo() {
  let texto = "Kodomo";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.demografia.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  verManga(Mangas);
}
// FIN DE FILTRO DEMOGRAFIAS---------------------------------------

//fitro categorias
function filterAccion() {
  let texto = "Accion";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.categoria.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  verManga(Mangas);
}

function filterDeporte() {
  let texto = "Deporte";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.categoria.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  verManga(Mangas);
}

function filterRomance() {
  let texto = "Romance";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.categoria.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  verManga(Mangas);
}

function filterTerror() {
  let texto = "Terror";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.categoria.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  verManga(Mangas);
}

function filterSuspenso() {
  let texto = "Suspenso";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.categoria.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  //   verManga(Mangas);
}

function filterMecha() {
  let texto = "Mecha";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.categoria.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga3(Mangas);
  verManga(Mangas);

}

function moverZA(){
    mangasTop = biblioteca
    mangasTop.sort(function(b,a){
        if(a.titulo > b.titulo){
            return 1
        }
        if(a.titulo < b.titulo){
            return -1
        }
        return 0
    })
    mangasTop
    contarRegistro(mangasTop)
    cargarManga3(mangasTop)
}
function moverAZ(){
    mangasTop = biblioteca
    mangasTop.sort(function(a,b){
        if(a.titulo > b.titulo){
            return 1
        }
        if(a.titulo < b.titulo){
            return -1
        }
        return 0
    })
    mangasTop
    contarRegistro(mangasTop)
    cargarManga3(mangasTop)
}
//Fin de fitro categorias
//---------------------------------------------------------------------------------------------------------------

function contarRegistro(array){
  let total = JSON.parse(localStorage.getItem('biblioteca'))
  document.querySelector('#contadorManga').innerText = array.length + ' de ' + total.length
  
}

contarRegistro(biblioteca)