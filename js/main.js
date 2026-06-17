const keywordSelect = document.getElementById("keyword-select");

const movieSelect = document.getElementById("movie-select");

const searchButton = document.getElementById("search-btn");

const detailsButton = document.getElementById("details-btn");

let resultados = [];

document.addEventListener(
    "DOMContentLoaded",
    iniciarAplicacion
);

function iniciarAplicacion() {

    cargarKeywords();
    mostrarBienvenida();

    searchButton.addEventListener("click",realizarBusqueda);
    detailsButton.addEventListener("click",mostrarInformacion);
}

function cargarKeywords() {

    const keywords = [
        "Yellowstone",
        "Marvel",
        "Batman",
        "Star",
        "Fast",
        "Avengers",
        "Harry",
        "Spider",
        "Mission",
        "Transformers"
    ];

    keywordSelect.innerHTML = "";
    keywords.forEach(keyword => {
        keywordSelect.innerHTML += `<option value="${keyword}">
                ${keyword}
                </option>`;
    });
}

async function realizarBusqueda() {
    const palabra = keywordSelect.value;
    const respuesta = await buscarPeliculas(palabra);

        if (!respuesta || !respuesta.Search) {
            alert("No se encontraron resultados");
            return;
        }

    resultados = respuesta.Search;
    cargarResultados();
}

function cargarResultados() {
    movieSelect.innerHTML = "";

    resultados.forEach(item => {
        movieSelect.innerHTML += `<option value="${item.imdbID}">
            ${item.Title} (${item.Year})
            </option>`;
    });
}

async function mostrarInformacion() {

    const imdbID = movieSelect.value;
        if (!imdbID) {
        alert("Seleccione un resultado");
        return;
    }

    const detalle = await obtenerDetalle(imdbID);
    mostrarDetalle(detalle);

}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {navigator.serviceWorker.register("./service-worker.js");});
}