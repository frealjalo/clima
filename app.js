const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
let datosDir = {};
let datosClima = {};

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// argv.direccion



const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const valoresClima = await clima.getClima(coords.lat, coords.long);
        return `El clima de ${coords.direccion} es el siguiente:\n Temperatura actual: ${valoresClima.temp}\n Temperatura mínima: ${valoresClima.temp_min}\n Temperatura máxima: ${valoresClima.temp_max}`
    } catch (error) {
        console.log(`No se ha podido hallar los datos para ${direccion}`);
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);