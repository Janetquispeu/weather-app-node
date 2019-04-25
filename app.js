const colors = require("colors");
const place = require("./place/place");
const weather = require("./weather/weather");

const argv = require("yargs").options({
  description: {
    alias: "d",
    demand: true,
    desc: "Dirección de la ciudad para obtener el clima"
  }
}).argv 

const getInfo = async(description) => {
  try{
  
    const coord = await place.getUbication(description);
    const getWeather = await weather.getWeather(coord.lat, coord.lng)
      .then((resp) => {
        return {
          weather: resp,
          name: coord.name
        }
      });
    return `El clima de ${getWeather.name} es : ${getWeather.weather}° grados`;
  } catch (e) {
    return `No se encontro información para ${description}`;
  }
}


getInfo(argv.description)
  .then(response => console.log(response.magenta))
  .catch(error => console.log("error"))