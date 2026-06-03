async function obtenerYellowstone() {
    try {
        const response = await fetch(`${BASE_URL}?t=Yellowstone&apikey=${API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al consultar la API:", error);
        return null;
    }
}