let usuarioLogeado = JSON.parse(localStorage.getItem("usuario")) || {};

let admin = {
  email: "admin@gmail.com",
  contraseña: "admin",
};

function cambiarNav() {
  if (
    usuarioLogeado.email === admin.email &&
    usuarioLogeado.contraseña === admin.contraseña
  ) {
    let link = document.querySelector("#admin").className="nav-link text-white";
  }
  if(usuarioLogeado.email === admin.email &&
    usuarioLogeado.contraseña === admin.contraseña){
    let link = document.querySelector("#alta").className="nav-link text-white";
  }
}

function navLogeado(){
  if(usuarioLogeado.email && usuarioLogeado.contraseña){
    let linkIS= document.querySelector('#iniciarSesion').className='d-none'
    let linkCS= document.querySelector('#cierraSesion').className='nav-link text-white'
    console.log('Usuario log')
  }else{
    console.log('No hay un usuario log')
  }
}

function cerrarSesion(){
  localStorage.removeItem('usuario')
}



cambiarNav();
navLogeado()