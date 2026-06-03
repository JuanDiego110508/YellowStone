let yellowstoneData = null;

const generalButton = document.getElementById("general-btn");
const castButton = document.getElementById("cast-btn");
const productionButton = document.getElementById("production-btn");
const ratingsButton = document.getElementById("ratings-btn");
const awardsButton = document.getElementById("awards-btn");
const plotButton = document.getElementById("plot-btn");
const clearButton = document.getElementById("clear-btn");

document.addEventListener("DOMContentLoaded", cargarAplicacion);

async function cargarAplicacion() {
    yellowstoneData = await obtenerYellowstone();
    console.log(yellowstoneData);
    limpiarResultado();

    generalButton.addEventListener("click",() => mostrarInformacionGeneral(yellowstoneData));
    castButton.addEventListener("click",() => mostrarReparto(yellowstoneData));
    productionButton.addEventListener("click",() => mostrarProduccion(yellowstoneData));
    ratingsButton.addEventListener("click",() => mostrarCalificaciones(yellowstoneData));
    awardsButton.addEventListener("click",() => mostrarPremios(yellowstoneData));
    plotButton.addEventListener("click",() => mostrarSinopsis(yellowstoneData));
    clearButton.addEventListener("click", limpiarResultado);
}