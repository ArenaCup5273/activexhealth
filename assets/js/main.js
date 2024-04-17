//Deslizar a destino
function deslizar(idDestino) { //Se declara la función para deslizar la pantalla, y se pone como parámetro un string llamado idDestino
    var destino = document.getElementById(idDestino); //Obtener el elemento destino con el id que se obtiene del parámetro
    destino.scrollIntoView({ behavior: 'smooth' }); //Deslizar con transición "smooth" al elemento de destino
}

// Deslizar al inicio
function regresarInicio() { //Se declara la función para deslizar al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' }); //Se utiliza el método scrollTo() para deslizar al inicio de la página (top:0), con una transición smooth
}

// Mostrar el botón
window.onscroll = function() { //Se declara la función para el botón de regresar (se utiliza el window.onscroll para que la función se ejecute al scrollear en la página)
    var botonRegresar = document.querySelector('.boton-regresar'); //Se obtiene el botón con la clase "boton-regresar"
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) { //Se comprueba a
        botonRegresar.style.display = "block";
    } else {
        botonRegresar.style.display = "none";
    }
};