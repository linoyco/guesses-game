import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://api.openweathermap.org'
});

const API_KEY = '308a457aaec919a2227e6a73f69ff109';
const GET_WEATHER_URL = '/data/2.5/weather';


export const getWeatherRequest = (city: string) => {
    const url = `${GET_WEATHER_URL}`;
    return Axios.get(url, {
        params: {
            'q': city,
            'units': 'metric',
            'appid': API_KEY
        }
    });
}