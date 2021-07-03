let visitantes = JSON.parse(localStorage.getItem('visitantes')) || [];

let nombre = document.querySelector('#contact-nombre');
let telefono = document.querySelector('#contact-telefono');
let email = document.querySelector('#contact-email');
let asunto = document.querySelector('#contact-asunto');
let mensaje = document.querySelector('#contact-mensaje');

class Visitante {
  constructor(nombre, telefono, email, asunto, mensaje) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.asunto = asunto;
    this.mensaje = mensaje;
  }
}

const enviandoMensaje = function (e) {
  e.preventDefault();
  if (nombre.value && email.value && mensaje.value) {
    if (!telefono.value) {
      telefono.value = 'null';
    }
    if (!asunto.value) {
      asunto.value = 'null';
    }

    visitantes.push(
      new Visitante(
        nombre.value.toLowerCase(),
        telefono.value,
        email.value.toLowerCase(),
        asunto.value.toLowerCase(),
        mensaje.value.toLowerCase()
      )
    );

    localStorage.setItem('visitantes', JSON.stringify(visitantes));
    updateContactForm();
    swal({
      title: 'Muchas gracias!',
      text: 'Consulta enviada correctamente.',
      icon: 'success',
      button: 'ok',
    });
  } else {
    swal({
      title: 'Ooops!',
      text: 'Faltan ingresar datos.',
      icon: 'error',
      button: 'ok',
    });
  }
};

function updateContactForm() {
  nombre.value = '';
  telefono.value = '';
  email.value = '';
  asunto.value = '';
  mensaje.value = '';
}
