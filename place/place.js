const axios = require("axios");

const getUbication = async(description) => {
  const encodeUrl = encodeURI(description);
  
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {'X-RapidAPI-Key': '1ca6113aaamsh8ce71eccd8eb379p1c6703jsn6b564b59f1f0'}
  }); 
  
  const response = await instance.get();

  if(response.data.length == 0) {
    throw new Error("No hay data");
  } 

  const data = response.data.Results[0];
  const name = data.name;
  const lat = data.lat;
  const lng = data.lon;
  return {
    name,
    lat,
    lng
  }
}


module.exports = {
  getUbication
}