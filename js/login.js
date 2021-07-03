//Crear un objeto que guarde los datos del usuario
let usuario = {
    email: '',
    contraseña: '',
}
let admin={
    email: 'admin@gmail.com',
    contraseña:'admin'
}

let usuarios = JSON.parse(localStorage.getItem('usuariosKey')) || [];

let usuarioLogeado= JSON.parse(localStorage.getItem('usuario'))|| {};
console.log(usuarioLogeado)

if(JSON.parse(localStorage.getItem('usuario'))){
    location.replace('/index.html')
}
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
    if(usuario.contraseña===admin.contraseña && usuario.email===admin.email){
        swal({
            title: "Genial!",
            text: "Ingresaste como administrador",
            icon: "success",
            button: "ok",
          });

        localStorage.setItem('usuario', JSON.stringify(admin))
        setTimeout(()=>{
            location.replace('/index.html')
        },1500)
    }else{
        
        if(usuarioVerificado){
            if(usuario.contraseña===usuarioVerificado.contraseña){
                swal({
                    title: "Genial!",
                    text: "Ingresaste correctamente",
                    icon: "success",
                    button: "ok",
                  });
    
                localStorage.setItem('usuario', JSON.stringify(usuarioVerificado))
                setTimeout(()=>{
                    location.replace('/index.html')
                },1500)
            }else{
                swal({
                    title: "Oops!",
                    text: "Usuario o contraseña incorrectos",
                    icon: "error",
                    button: "ok",
                  });
            }
        }else{
            swal({
                title: "Oops!",
                text: "Usuario o contraseña incorrectos",
                icon: "error",
                button: "ok",
              });
        }
    }
    }