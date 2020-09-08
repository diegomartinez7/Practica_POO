const tabla = document.getElementById('tabla');
const inputPregunta = document.getElementById('inputP');

//Objeto de tipo pregunta
const pregunta = new Pregunta();

//Alerta para mostrar los votos a favor
const alertaF = document.createElement('div');
alertaF.classList = 'alert alert-success';

//Alerta para mostrar los votos en contra
const alertaC = document.createElement('div');
alertaC.classList = 'alert alert-danger';

//Alerta para mostrar los votos de abstención
const alertaA = document.createElement('div');
alertaA.classList = 'alert alert-secondary';

const votos = [0,0,0];

function EventListener(){
    document.getElementById('preguntar').addEventListener('click',mostrarPregunta);
    tabla.addEventListener('click',propietario);
    tabla.addEventListener('click',terminarEncuesta);
}
EventListener();

function mostrarPregunta(){
    if(inputPregunta.value != '' && (inputPregunta.value.length > 10 && inputPregunta.value.length <= 115)){
        let tr = pregunta.crearPregunta(inputPregunta.value);
        tabla.appendChild(tr);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Pregunta generada!',
            showConfirmButton: false,
            timer: 1000
        });
        event.target.classList = 'btn btn-warning d-none';
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'La pregunta debe ser de 10 a 115 caracteres',
            showConfirmButton: false,
            timer: 1600
        });
    }
}

function propietario(){
    let contenedorAlert = document.getElementById('contenedorAlert');
    if(votos[0]==0){
        contenedorAlert.appendChild(alertaF);
        contenedorAlert.appendChild(alertaC);
        contenedorAlert.appendChild(alertaA);
    }
    if(event.target.id == 'favor'){
        alertaF.innerHTML = `<span>${++votos[0]}</span>`;
    }
    else if(event.target.id == 'contra'){
        alertaC.innerHTML = `<span>${++votos[1]}</span>`;
    }
    else if(event.target.id == 'abstener'){
        alertaA.innerHTML = `<span>${++votos[2]}</span>`;
    }
    tabla.appendChild(contenedorAlert);
}

function terminarEncuesta(){
    if(event.target.id == 'terminar'){
        let res = document.createElement('span');
        res.innerHTML = `A favor: <b>${votos[0]}</b> | En contra: <b>${votos[1]}</b> | Abstenciones: <b>${votos[2]}</b>`;
        document.getElementById('favor').parentElement.replaceWith(res);
        event.target.remove();
        document.getElementById('contenedorAlert').remove();
        alertaF.innerText = alertaC.innerText = alertaA.innerText = '';
        votos[0] = votos[1] = votos[2] = 0;
        document.getElementById('preguntar').classList.replace('d-none','d-inline');
    }
}