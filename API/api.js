import axios from 'axios';

const APIkey = 'Insert_apikey';

export const cityName = city =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`,
  );

export const getHours = city =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`,
  );

export const getCityByGeoCoords = (lat,lon) => 
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`,
  );
