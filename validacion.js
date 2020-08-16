var ccpaswd = document.getElementById('ccpaswd');
var ccpaswdValidate = document.getElementById('ccpaswdValidate');
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var usuario = document.getElementById('usuario');

function enviarFormulario(){

    if(nombre.value === null || nombre.value === ''){
        alert('Ingrese el nombre');
    }
    
    if(nombre.value.length > 25){
        alert('El nombre no debe exceder los 25 caracteres');
    }

    if(apellido.value === null || apellido.value === ''){
        alert('Ingrese el apellido');
    }

    if(apellido.value.length > 25){
        alert('El apellido no debe exceder los 25 caracteres');
    }

    if(email.value === null || email.value === ''){
        alert('Ingrese el email');
    }

    if(email.value.length > 120){
        alert('El email no debe exceder los 120 caracteres');
    }

    if(telefono.value === null || telefono.value === ''){
        alert('Ingrese el teléfono');
    }
    
    if(telefono.value.length > 9){
        alert('El teléfono no debe exceder los 9 caracteres');
    }

    if(usuario.value === null || usuario.value === ''){
        alert('Ingrese el usuario');
    }
    
    if(usuario.value.length > 10){
        alert('El usuario no debe exceder los 10 caracteres');
    }
    if(ccpaswd.value === null || ccpaswd.value === ''){
        alert('Ingrese la contraseña');
    }
        if(ccpaswdValidate.value === null || ccpaswdValidate.value === ''){
        alert('Ingrese nuevamente la contraseña');
    }
    if(ccpaswd.value != ccpaswdValidate.value){
        alert('Las contraseñas no coinciden')
    }

    return false;   
}
