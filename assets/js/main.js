//Mostrar y ocultar contraseña
var togglee = false;

function mostrar (id) {
    const fieldContraseña = document.getElementById(id);
    togglee = !togglee;
    if (togglee){
        fieldContraseña.setAttribute("type","text");
    } else {
        fieldContraseña.setAttribute("type", "password");
    }
}

//Cambiar de tema
var toggleModo = false;

const btnOscuro = document.querySelector(".btnTemaOscuro");
const parrafo = document.getElementById("hola");
const modoOscuro = () => {
    toggleModo = !toggleModo;
    if (toggleModo){
        //Modo oscuro
    } else {
        //Modo claro
    }
}

//Deslizar a destino
function deslizar(idDestino) {
    var destino = document.getElementById(idDestino);
    destino.scrollIntoView({ behavior: 'smooth' });
}

// Deslizar al inicio
function regresarInicio() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar el botón cuando el usuario haya bajado cierta cantidad de píxeles
window.onscroll = function() {
    var botonRegresar = document.querySelector('.boton-regresar');
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        botonRegresar.style.display = "block";
    } else {
        botonRegresar.style.display = "none";
    }
};