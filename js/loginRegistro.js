//Traigo de localStorage los datos si es que hay
let usuarios = JSON.parse(localStorage.getItem('usuariosKey')) || [];

//Capturo cada elemento del formulario de registro
let nombre = document.querySelector('#nombreRegistro');
let apellido = document.querySelector('#apellidoRegistro');
let email = document.querySelector('#mailRegistro');
let contraseña = document.querySelector('#passwordRegistro');

//Creo la clase para crear las instancias de usuario
class Usuario {
  constructor(nombre, apellido, email, contraseña) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.email = email),
      (this.contraseña = contraseña),
      (this.verificado = false);
  }
}

//Agregar usuarios

const agregarUsuarios = function (e) {
  e.preventDefault();
  if (nombre.value && apellido.value && email.value && contraseña.value.length >= 8) {
    usuarios.push(
      new Usuario(
        nombre.value.toLowerCase(),
        apellido.value.toLowerCase(),
        email.value,
        contraseña.value
      )
    );
    localStorage.setItem('usuariosKey', JSON.stringify(usuarios));

    // Email JS
    let templateParams = {
      user_name: nombre.value.toUpperCase(),
      destinatario: email.value,
      email: email.value,
      password: contraseña.value,
    };

    emailjs.send('service_yn2yxuy', 'template_zakgkub', templateParams).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );

    updateDatos();
    swal({
      title: 'Genial!',
      text: 'Te registraste con éxito',
      icon: 'success',
    });
    setTimeout(() => {
      location.replace('/login.html');
    }, 1500);
  } else {
    document.querySelector('#error').className = 'text-center small';
  }
};

function updateDatos() {
  nombre.value = '';
  apellido.value = '';
  email.value = '';
  contraseña.value = '';
  nombre.className = 'form-control';
  apellido.className = 'form-control';
  email.className = 'form-control';
  contraseña.className = 'form-control';
}

function validarContraseña(element) {
  if (element.value.length === 0) {
    element.className = 'form-control';
  } else {
    if (element.value.length < 8) {
      element.className = 'form-control is-invalid';
      return false;
    } else {
      element.className = 'form-control is-valid';
      return true;
    }
  }
}

function validarGeneral(element) {
  if (!element.value) {
    element.className = 'form-control is-invalid';
  } else {
    element.className = 'form-control is-valid';
  }
}
//codigo.value = codigo.value.slice(0,10);
function limiteLetras(element){
  if(element.value.length > 30){
    element.value= element.value.slice(0, 30)
  }
}
function limiteMail(element){
  if(element.value.length > 50){
    element.value= element.value.slice(0, 50)
  }
}
