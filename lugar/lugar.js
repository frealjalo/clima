const axios = require('axios');

const getLugarLatLng = async(direc) => {

    const direccionEnc = encodeURI(direc);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ direccionEnc }`,
        headers: { 'x-rapidapi-key': '98748a1311msh4164e7b2df2410bp16bc3bjsn9bdbd4532fa1' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const long = data.lon;
    return {
        direccion,
        lat,
        long
    };
}

module.exports = {
    getLugarLatLng
}