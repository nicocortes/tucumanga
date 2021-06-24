//Traigo de localStorage los datos si es que hay
let usuarios = JSON.parse(localStorage.getItem('usuariosKey')) || [];
let usuario = {}

//Capturo cada elemento del formulario de registro
let nombre = document.querySelector('#nombreRegistro');
let apellido = document.querySelector('#apellidoRegistro');
let mail = document.querySelector('#mailRegistro');
let contraseña = document.querySelector('#passwordRegistro');

//Creo la clase para crear las instancias de usuario
class Usuario{
    constructor(nombre, apellido, mail, contraseña){
        this.nombre = nombre,
        this.apellido = apellido,
        this.mail = mail,
        this.contraseña = contraseña
    }
}

