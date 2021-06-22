//Traigo de localStorage los datos si es que hay
let usuarios = JSON.parse(localStorage.getItem('usuariosKey')) || [];

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

//Agregar usuarios

const agregarUsuarios = function(e){
    e.preventDefault();
    if(nombre.value && apellido.value && mail.value && contraseña.value>8){
        usuarios.push(
            new Usuario(
                nombre.value.toLowerCase(),
                apellido.value.toLowerCase(),
                mail.value,
                contraseña.value
            )
        )
        localStorage.setItem("usuariosKey", JSON.stringify(usuarios));
        updateDatos();
    }else{
        document.querySelector('#error').className = 'text-center small'
    }
}

function updateDatos(){
    nombre.value = ""
    apellido.value = ""
    mail.value = ""
    contraseña.value = ""
}

function validarContraseña(element){
if(element.value<8){
element.className='form-control is-invalid'
}else{
    element.className = 'form-control is-valid'
}
}


