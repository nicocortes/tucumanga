
let mangas = {};
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
        fila.innerHTML = datos ;
        IMGtotal3.appendChild(fila);
    });
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