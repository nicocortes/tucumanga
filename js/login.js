//Crear un objeto que guarde los datos del usuario
let usuario = {
    mail: '',
    contraseña: '',
}

let usuarios = JSON.parse(localStorage.getItem('usuariosKey')) || [];

const handleChange = function (e){
    console.log(e.target.value);
    usuario = {
        ...usuario,
        [e.target.name]:e.target.value,
    }
};

const handleSubmit = function(e){
    e.preventDefault();

    let usuarioVerificado = usuarios.find(function(user){
        return user.email=== usuario.email
    })
    if(usuarioVerificado){
        if(usuario.password===usuarioVerificado.password){
            alert('Usuario verificado')

            localStorage.setItem('usuario', JSON.stringify(usuarioVerificado))

            location.replace('/home.html')
        }else{
            alert('Usuario o contraseña incorrectos')
        }
    }else{
        alert('Usuario o contraseña incorrectos')
    }
    }