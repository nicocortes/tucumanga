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

//capturo los datos en la variable
let cuerpoLib4 = document.querySelector("#IMGtotal4") || "";

//Imprimo los datos
function cargarManga4(Mangas) {
  IMGtotal4.innerHTML = "";

  biblioteca = JSON.parse(localStorage.getItem("biblioteca"));
   //traigo de nuevo la biblioteca para sacar el indice
  Mangas.forEach(function (libro, index) {
    //variable indice donde obtengo la posicion del libro seleccionado
    let indice = biblioteca.findIndex(function (item) {
      return item.titulo === libro.titulo;
    });

    console.log(indice);
    let fila = document.createElement("div");
    fila.classList = "row mt-3 pt-3 pb-3 administManga";
    let datos = `    
    <div class="text-white col-12 col-md-2 col-xl-2">
        <img
        src="${libro.imagen}"
        alt=""
        class="img-fluid"
        
        />
        </div>

        <div class="text-white col-12 col-md-7 col-xl-7 pl-4">
        <h5 class="mb-3"></h5>
        <h5>Titulo: ${libro.titulo}</h5>
        <h5>Autor: ${libro.autor}</h5>
        <h5>Año: ${libro.año}</h5>
        <h5>Demografia: ${libro.demografia}</h5>
        <h5>Categoria: ${libro.categoria}</h5>
        <h5>Editorial: ${libro.editorial}</h5>
        </div>

        <div class="text-white col-12 col-md-3 col-xl-3 text-center ">
        <div class="mt-4"></div>

        <button type="button" class="btn btn-dark" onclick="verMangaAdm(${indice})"><i
        class="fa fa-eye fa text-white mx-2" aria-hidden="true"></i></button>

        <button type="button" class="btn btn-info" onclick="adminModif(${indice})"><i
        class="fa fa-edit fa text-white mx-2" aria-hidden="true"></i></button>
       
        <button type="button" class="btn btn-danger" onclick="adminDelete(${indice})"><i
        class="fa fa-trash fa text-white mx-2" aria-hidden="true"></i></button>
        
        `;
    fila.innerHTML = datos;
    IMGtotal4.appendChild(fila);
  });
  
}
//Fin de Imprimir datos

//modal ver manga
function verMangaAdm(id) {
  console.log(id);
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
  
  $("#verManga").modal("show");
}
//Fin modal ver manga

//Funcion eliminar manga
function adminDelete(id){
    manga = biblioteca[id]
    let validar = confirm(`Esta seguro de querer eliminar a ${manga.titulo}`)

    if(validar){
        biblioteca.splice(id,1)
        localStorage.setItem('biblioteca',JSON.stringify(biblioteca))
        alert(`Se borro ${manga.titulo}`)
        cargarManga4(biblioteca)
    }
}
//Fin funcion eliminar manga


//Modal formulario donde se edita el manga
function adminModif(id){
    console.log(id)
    biblio = biblioteca[id]
    document.querySelector("#titleModal").innerText = biblio.titulo
    document.querySelector("#authorModal").value = biblio.autor
    document.querySelector("#demogModal").value = biblio.demografia
    document.querySelector("#categModal").value = biblio.categoria
    document.querySelector("#añoModal").value = biblio.año
    document.querySelector("#ediModal").value = biblio.editorial
    document.querySelector("#tomoModal").value = biblio.tomo
    document.querySelector("#imgModal").value = biblio.imagen
    document.querySelector("#descripModal").value = biblio.descripcion
    
    $('#adminModif').modal('show')
    
}
//Fin de modal formulario


//Funcion la cual permite cambiar los datos
function handleChange(e){
  console.log(e.target.value)
  biblio={
    ...biblio,
    [e.target.name]:e.target.value,
  }
  console.log(biblio)
}
//fin funcion cambio

//funcion la cual permite actualizar los datos editados
function actualizarManga(e){
  e.preventDefault()

  let index = biblioteca.findIndex(function(item){
    return item.titulo===biblio.titulo
  })

  biblioteca.splice(index,1,biblio)

  localStorage.setItem('biblioteca',JSON.stringify(biblioteca))
  cargarManga4(biblioteca)
  $('#adminModif').modal('hide')
}
//fin de funcion edit




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
  cargarManga4(Mangas);
}

// FILTRO DEMOGRAFIAS---------------------------------------
function filterShonnen() {
  let texto = "Shonnen";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.demografia.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga4(Mangas);
  
}

function filterSeinen() {
  let texto = "Seinen";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.demografia.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga4(Mangas);
 
}

function filterShôjo() {
  let texto = "Shôjo";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.demografia.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga4(Mangas);
 
}
function filterJosei() {
  let texto = "Josei";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.demografia.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga4(Mangas);

}
function filterKodomo() {
  let texto = "Kodomo";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.demografia.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga4(Mangas);
  
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
  cargarManga4(Mangas);
  
}

function filterDeporte() {
  let texto = "Deporte";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.categoria.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga4(Mangas);
  
}

function filterRomance() {
  let texto = "Romance";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.categoria.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga4(Mangas);
  
}

function filterTerror() {
  let texto = "Terror";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.categoria.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga4(Mangas);
 
}

function filterSuspenso() {
  let texto = "Suspenso";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.categoria.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga4(Mangas);
 
}

function filterMecha() {
  let texto = "Mecha";
  Mangas = JSON.parse(localStorage.getItem("biblioteca"));

  Mangas = Mangas.filter(function (manga) {
    return manga.categoria.indexOf(texto) > -1;
  });
  contarRegistro(Mangas)
  cargarManga4(Mangas);
 

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
    console.log(mangasTop)
    contarRegistro(mangasTop)
    cargarManga4(mangasTop)
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
    console.log(mangasTop)
    contarRegistro(mangasTop)
    cargarManga4(mangasTop)
}
//Fin de fitro categorias
//---------------------------------------------------------------------------------------------------------------

function contarRegistro(array){
  let total = JSON.parse(localStorage.getItem('biblioteca'))
  document.querySelector('#contadorManga').innerText = array.length + ' de ' + total.length
  
}

contarRegistro(biblioteca)

if (cuerpoLib4) {
    cargarManga4(biblioteca);
  }