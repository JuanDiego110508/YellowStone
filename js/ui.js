function mostrarInformacionGeneral(data) {
    const resultContainer = document.getElementById("result-container");

    resultContainer.innerHTML = `
        <div class="info-card">
            <img class="poster"
                src="${obtenerPosterSeguro(data.Poster)}"
                alt="${data.Title}"
            >
            <div class="info-content">
                <h3>${data.Title}</h3>

                <p>
                    <strong>Año:</strong>
                    ${data.Year}
                </p>

                <p>
                    <strong>Género:</strong>
                    ${data.Genre}
                </p>

                <p>
                    <strong>Duración:</strong>
                    ${data.Runtime}
                </p>

                <p>
                    <strong>País:</strong>
                    ${data.Country}
                </p>

                <p>
                    <strong>Idioma:</strong>
                    ${data.Language}
                </p>

                <p>
                    <strong>Temporadas:</strong>
                    ${data.totalSeasons}
                </p>
            </div>
        </div>
    `;
}

function mostrarReparto(data) {

    const resultContainer = document.getElementById("result-container");

    resultContainer.innerHTML = `
        <div class="info-card">
            <img class="poster"
                src="${obtenerPosterSeguro(data.Poster)}"
                alt="${data.Title}"
            >

            <h3>Reparto Principal</h3>
            <p>${data.Actors}</p>
        </div>
    `;
}

function mostrarProduccion(data) {
    const resultContainer = document.getElementById("result-container");

    resultContainer.innerHTML = `
        <div class="info-card">
            <img class="poster"
                src="${obtenerPosterSeguro(data.Poster)}"
                alt="${data.Title}"
            >
            <h3>Producción</h3>

            <p>
                <strong>Director:</strong>
                ${obtenerValorSeguro(data.Director)}
            </p>

            <p>
                <strong>Escritor:</strong>
                ${obtenerValorSeguro(data.Writer)}
            </p>

            <p>
                <strong>País:</strong>
                ${obtenerValorSeguro(data.Country)}
            </p>

            <p>
                <strong>Idioma:</strong>
                ${obtenerValorSeguro(data.Language)}
            </p>
        </div>
    `;
}

function mostrarCalificaciones(data) {

    const resultContainer = document.getElementById("result-container");

    let ratingsHTML = "";

    data.Ratings.forEach(rating => {
        ratingsHTML += `
            <p>
                <strong>${rating.Source}:</strong>
                ${rating.Value}
            </p>
        `;
    });

    resultContainer.innerHTML = `
        <div class="info-card">
            <img class="poster"
                src="${obtenerPosterSeguro(data.Poster)}"
                alt="${data.Title}"
            >
            <h3>Calificaciones</h3>

            ${ratingsHTML}

            <p>
                <strong>IMDb:</strong>
                ${data.imdbRating}
            </p>
        </div>
    `;
}

function mostrarPremios(data) {

    const resultContainer = document.getElementById("result-container");

    resultContainer.innerHTML = `
        <div class="info-card">
            <img class="poster"
                src="${obtenerPosterSeguro(data.Poster)}"
                alt="${data.Title}"
            >
            <h3>Premios y Reconocimientos</h3>
            <p>
                ${obtenerValorSeguro(data.Awards)}
            </p>
        </div>
    `;
}

function mostrarSinopsis(data) {
    const resultContainer = document.getElementById("result-container");

    resultContainer.innerHTML = `
        <div class="info-card">
            <img
                class="poster"
                src="${obtenerPosterSeguro(data.Poster)}"
                alt="${data.Title}"
            >
            <div class="info-content">
                <h3>Sinopsis</h3>
                <p>
                    ${obtenerValorSeguro(data.Plot)}
                </p>
            </div>
        </div>
    `;
}

function limpiarResultado() {
    const resultContainer = document.getElementById("result-container");

    resultContainer.innerHTML = `
        <div class="welcome-card">
            <h3>Bienvenido a Yellowstone Information Center</h3>

            <p>
                Explora información sobre la famosa serie
                Yellowstone utilizando datos obtenidos
                directamente desde la API OMDb.
            </p>

            <p>
                Selecciona una categoría para comenzar.
            </p>
        </div>
    `;
}

function obtenerValorSeguro(valor) {
    return valor && valor !== "N/A" ? valor: "Información no disponible";
}

function obtenerPosterSeguro(poster) {
    return poster && poster !== "N/A" ? poster: "./assets/images/no-poster.png";
}