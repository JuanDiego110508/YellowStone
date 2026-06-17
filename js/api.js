async function buscarPeliculas(palabra) {

    try {const response = await fetch(`${BASE_URL}?s=${palabra}&apikey=${API_KEY}`);
    
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        return null;
    }
}

async function obtenerDetalle(imdbID) {

    try {const response = await fetch(`${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`);

        const data = await response.json();
        return data;
    } catch (error) {

        console.error(error);
        return null;
    }
}