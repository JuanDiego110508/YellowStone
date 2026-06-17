function obtenerPosterSeguro(poster) {
    return poster && poster !== "N/A" ? poster: "./assets/images/no-poster.png";
}

function obtenerValorSeguro(valor) {
    return valor && valor !== "N/A" ? valor: "Información no disponible";
}

function mostrarBienvenida() {

    const container = document.getElementById("result-container");

    container.innerHTML = `

        <div class="welcome-card">

            <h3>Movie Explorer</h3>

            <p>
                Busca películas y series utilizando
                la API OMDb.
            </p>

            <p>
                Selecciona una palabra clave para comenzar.
            </p>

        </div>
    `;
}

function mostrarDetalle(data) {
    const container = document.getElementById("result-container");

    container.innerHTML = `
        <div class="info-card">

            <img
                class="poster"
                src="${obtenerPosterSeguro(data.Poster)}"
                alt="${data.Title}"
            >

            <div class="info-content">

                <h3>${data.Title}</h3>

                <p>
                    <strong>Año:</strong>
                    ${obtenerValorSeguro(data.Year)}
                </p>

                <p>
                    <strong>Género:</strong>
                    ${obtenerValorSeguro(data.Genre)}
                </p>

                <p>
                    <strong>Tipo:</strong>
                    ${obtenerValorSeguro(data.Type)}
                </p>

                <p>
                    <strong>Actores:</strong>
                    ${obtenerValorSeguro(data.Actors)}
                </p>

                <p>
                    <strong>IMDb:</strong>
                    ${obtenerValorSeguro(data.imdbRating)}
                </p>

                <p>
                    <strong>Premios:</strong>
                    ${obtenerValorSeguro(data.Awards)}
                </p>

                <p>
                    <strong>Sinopsis:</strong>
                    ${obtenerValorSeguro(data.Plot)}
                </p>

            </div>
        </div>
    `;
}