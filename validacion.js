const paises = document.getElementById('paises');
const disableds = Array.from(document.querySelectorAll('.disabled'));
const selectDptos = document.getElementById('departamentos');
const selectMun = document.getElementById('municipios');

paises.addEventListener('change', (e) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.datos.gov.co/resource/xdk5-pm3f.json');

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);
        let dptos = [];

        for (i in dataJSON) {
            dptos.push(dataJSON[i]['departamento']);
        }

        let unique = [...new Set(dptos)].sort();

        for (i of unique) {
            const option = document.createElement('OPTION');
            option.textContent = i;
            option.value = `${i.toLowerCase()}`; 
            selectDptos.appendChild(option);
        }

        for (let i = 0; i < disableds.length / 2; i++) {
            disableds[i].classList.remove('disabled');
        }

        selectDptos.addEventListener('change', (e) => {
            const dptoselected = selectDptos.value;

            selectMun.length = 1;
            console.log(selectMun);
            let muni = [];

            for (i in dataJSON) {
                if (dataJSON[i].departamento.toLowerCase() == dptoselected) {
                    muni.push(dataJSON[i].municipio);
                }
            }
            muni.sort();
            for (i of muni) {
                const option = document.createElement('OPTION');
                option.textContent = i;
                selectMun.appendChild(option);
            }

            for (let i = 2; i < disableds.length; i++) {
                disableds[i].classList.remove('disabled');
            }

            $(document).ready(function () {
                $('select').formSelect();
            });
        })
        $(document).ready(function () {
            $('select').formSelect();
        });
    });
    xhr.send();
})

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
