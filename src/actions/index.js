import Axios from 'axios';

const API_KEY = '3f61276c643db6329b2163345d409cbd';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?appid='+ API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = API_URL + '&q=' + city + ',in';
    const request = Axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request // it's a promise, redux middleware should take care of them
    };
};