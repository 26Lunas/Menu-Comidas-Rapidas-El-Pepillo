document.addEventListener("DOMContentLoaded", function () {
    let contenedor_main = document.getElementById("cont-main");
    let cont_inicio = document.getElementById("cont-inicio");

    setTimeout(() => {
        // Agregar una clase
    contenedor_main.classList.remove("ocultar");

    // Quitar una clase
    cont_inicio.classList.add("ocultar");
    }, 2200);

    
});

