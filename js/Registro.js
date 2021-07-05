//Traigo de localStorage los datos si los hay
let biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
let mangasTop = {}; 
let ultimo = biblioteca

//Capturo cada elemento del formulario de registro
titulo = document.querySelector("#titleText")
descripcion = document.querySelector("#descripText")
categoria = document.querySelector("#categText")
autor = document.querySelector("#authorText")
año = document.querySelector("#añoText")
editorial = document.querySelector("#ediText")
imagen = document.querySelector("#imgText")
demografia = document.querySelector('#demogText')
tomo = document.querySelector("#urlTomo")
visitas = 0

//capturo el tbody de la tabla
let cuerpoLib = document.querySelector("#IMGtotal") || ""
let cuerpoLib2 = document.querySelector("#IMGtotal2") || ""

//Creo la clase para crear las instancias del manga
class Libreria {
    constructor(titulo, descripcion, categoria, autor, año, editorial, imagen,tomo,demografia,visitas) {
        this.titulo = titulo
        this.autor = autor
        this.categoria = categoria
        this.año = año
        this.demografia = demografia
        this.editorial = editorial
        this.imagen = imagen
        this.tomo = tomo
        this.descripcion = descripcion
        this.visitas = visitas
    }
}
//Agregar manga
const agregarLib = function () {
    if (titulo.value && descripcion.value && autor.value && año.value && editorial.value && imagen.value && tomo.value && demografia.value) {
        if (!imagen.value) {
            imagen.value = "https://static.wikia.nocookie.net/la-bitacora-del-capitan/images/6/67/Not_found.png/revision/latest?cb=20190509042801&path-prefix=es"
        }

        biblioteca.push(new Libreria(
          titulo.value.charAt(0).toUpperCase() + titulo.value.slice(1),
           descripcion.value, 
           categoria.value, 
           autor.value, 
           año.value, 
           editorial.value, 
           imagen.value, 
           tomo.value, 
           demografia.value,
           visitas))
        localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
        
    } else {
        swal({
          title: "Oops!",
          text: "Faltan datos, ingreselos de nuevo",
          icon: "error",
          button: "ok",
        });
    }

}


//Tabla mangas
function cargarManga(Mangas){
    IMGtotal.innerHTML = "";
    moverVisto()
  biblioteca = JSON.parse(localStorage.getItem("biblioteca"));
  mangasTop = biblioteca
   //traigo de nuevo la biblioteca para sacar el indice
   let vuelta = 0
   Mangas.forEach(function (libro, index)  {
    //variable indice donde obtengo la posicion del libro seleccionado
   
    if (vuelta < 5){
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
    IMGtotal.appendChild(fila);
    vuelta++
  };
  
})
}
  

function cargarManga2(){
    IMGtotal2.innerHTML = "";
    biblioteca = JSON.parse(localStorage.getItem("biblioteca")) || [];
    let vuelta = 0
    ultimo.reverse().forEach(function (libro, index) {
      let indice = biblioteca.findIndex(function (item) {
        return item.titulo === libro.titulo;
      });

      if(vuelta < 8){
        let fila = document.createElement("div");
        fila.classList = "col-6 col-md-3 col-xl-3  mt-4 mb-5 img-topm"
        let datos = `    
        <img
          src="${libro.imagen}"
          alt=""
          class="img-fluid"
      />
      <div class="verMangaModal text-center">
      <button class="btn font-weight-bold pr-4 pl-4" onclick='verManga(${indice})'>Leer</button>
      </div>
      <div class="capa text-white text-center">
        <h5>${libro.titulo}</h5>
      </div>
        `;
        fila.innerHTML = datos;
        IMGtotal2.appendChild(fila);
        vuelta++}
    });
}

function verManga(id){
    
    mangasTop = biblioteca[id]
    document.querySelector('#TituloModal').innerText = mangasTop.titulo
    document.querySelector('#tomo_Manga').src = mangasTop.imagen
    document.querySelector('#text_autor').innerText = mangasTop.autor
    document.querySelector('#text_categoti').innerText = mangasTop.categoria
    document.querySelector('#text_Año').innerText = mangasTop.año
    document.querySelector('#text_Editorial').innerText = mangasTop.editorial
    document.querySelector('#text_Sinopsis').innerText=mangasTop.descripcion
    document.querySelector('#urlDeTomo').href=mangasTop.tomo
    document.querySelector('#urlDeTomo').innerText=mangasTop.tomo
    document.querySelector('#demogText').innerText = mangasTop.demografia
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
        let colum = document.createElement("div")
        colum.classList = "row"
        let info = `
        <div class="text-white text-center col-2">
        <h5>${i + 1}º</h5>
        </div>
        <div class="text-white col-8">
        <h5>${mangasTop[i].titulo}</h5>
        </div>
        <div class="text-white col-2">
        <h5> ${mangasTop[i].visitas}</h5>
        </div>
        
         
        `
        colum.innerHTML = info
        topTabla.appendChild(colum) 
    }
}
//Posicion del top
function positionTop(){
    mangasTop.visitas = mangasTop.visitas + 1
    localStorage.setItem('biblioteca',JSON.stringify(biblioteca))
    mangaTop.visitas
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
    mangasTop
}
if (cuerpoLib) {
    cargarManga(biblioteca)
    moverVisto()
    masVistos()
}
if (cuerpoLib2) {
    cargarManga2()
}




