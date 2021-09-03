import axios from "axios";

const APIkey = 'insert APIKEY';

export const cityName = (city) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`);

export const cityDay = (city) => axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=3&appid=${APIkey}`)

export const getfiveDay = (city) => axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIkey}`)