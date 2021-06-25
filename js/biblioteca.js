
let manga = {};

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
let cuerpoLib3 = document.querySelector("#IMGtotal3") || ""



//Tabla heroes
function cargarManga3(){
    IMGtotal3.innerHTML = "";
    biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
    biblioteca.forEach(function (libro, index) {
        let fila = document.createElement("div");
        fila.classList = "col-6 col-md-4 col-lg-3 col-xl-2 mt-4 mb-4 img-topm"
        let datos = `    
       
    <img
      src="${libro.imagen}"
      alt=""
      class="img-fluid"
  />
  <div class="verMangaModal text-center">
  <button class="btn font-weight-bold" onclick='verManga(${index})' >--Leer--</button>
  </div>
  <div class="capa text-white text-center">
    <h6>${libro.titulo}</h6>
  </div>

        `;
        fila.innerHTML = datos ;
        IMGtotal3.appendChild(fila);
    });
}
//Posicion del top
function positionTop(){
    mangasTop = manga
    mangasTop.visitas = mangasTop.visitas + 1
    localStorage.setItem('biblioteca',JSON.stringify(biblioteca))
    console.log(mangasTop.visitas)
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

function verManga(id){
    console.log(id)
    manga=biblioteca[id]
    document.querySelector('#TituloModal').innerText = manga.titulo
    document.querySelector('#tomo_Manga').src = manga.imagen
    document.querySelector('#text_autor').innerText = manga.autor
    document.querySelector('#text_categoti').innerText = manga.categoria
    document.querySelector('#text_Año').innerText = manga.año
    document.querySelector('#text_Editorial').innerText = manga.editorial
    document.querySelector('#text_Sinopsis').innerText=manga.descripcion
    positionTop()
    moverVisto()
    $('#verManga').modal("show")
}

// function verManga (index){
//     mangas = biblioteca[index];
//     document.querySelector("#title_modal").innerHTML = mangas.titulo;
//     document.querySelector(".card-title").innerHTML= mangas.titulo;
//     document.querySelector("#tomo_Manga").src = mangas.imagen;
//     document.querySelector("#text_autor").innerHTML= mangas.autor;
//     document.querySelector("#text_categoti").innerHTML = mangas.categoria;
//     document.querySelector("#text_Año").innerHTML = mangas.año;
//     document.querySelector("#text_Editorial").innerHTML = mangas.editorial;
//     document.querySelector("#text_Sinopsis").innerHTML = mangas.descripcion;
//     // document.querySelector("#text_Small").innerHTML = mangas.titulo;
//     $("verManga").modal("show");
//     positionTop()
// }










if (cuerpoLib3) {
    cargarManga3()
}