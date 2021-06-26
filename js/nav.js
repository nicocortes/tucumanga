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
    let link = document.querySelector("#admin").className="nav-link";
    console.log("El usuario es el administrador");
  } else {
    console.log("El usuario no es el administrador");
  }
}

cambiarNav();
