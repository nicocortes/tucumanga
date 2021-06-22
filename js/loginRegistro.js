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
        this.contraseña = contraseña,
        this.verificado = false
    }
}

//Agregar usuarios

const agregarUsuarios = function(e){
    e.preventDefault();
    if(nombre.value && apellido.value && mail.value && contraseña.value.length>8){
        usuarios.push(
            new Usuario(
                nombre.value.toLowerCase(),
                apellido.value.toLowerCase(),
                mail.value,
                contraseña.value,
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
    nombre.className = 'form-control'
    apellido.className = 'form-control'
    mail.className = 'form-control'
    contraseña.className = 'form-control'
}

function validarContraseña(element){
if(element.value.length===0){
element.className='form-control'
}else{
    if(element.value.length<8){
        element.className= 'form-control is-invalid'
        return false
    }else{
        element.className = 'form-control is-valid'
        return true
    }
}
}


function validarGeneral(element){
if(!element.value){
element.className='form-control is-invalid'
}else{
    element.className = 'form-control is-valid'
}
}


