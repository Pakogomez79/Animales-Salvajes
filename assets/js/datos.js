export const mandarDatos = (() => {
    try {
        const obtenerDatos = async () => {
            const url = './animales.json';
            const animales = await fetch(url);
            const respuesta = await animales.json();
            return respuesta;
        }
        return {
            mostrar: obtenerDatos()
        }
    } catch (error) {
        alert(eror)
    }
})();