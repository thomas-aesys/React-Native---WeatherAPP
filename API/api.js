import axios from "axios";

const APIkey = 'insertAPI';

export const cityName = (city) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`);

export const getfiveDay = (city) => axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`)