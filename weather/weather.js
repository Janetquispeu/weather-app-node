const axios = require("axios");

const getWeather = async(lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ee2059bae181cd873d6062bc3881f1c2`);
  return resp.data.main.temp;
}

module.exports = {
  getWeather
}