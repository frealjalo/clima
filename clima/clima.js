const axios = require('axios');

const appid = 'e72b26debf5050375b4cb29dbf9a279d'

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${appid}&units=metric`);

    return resp.data.main;
}

module.exports = {
    getClima
}