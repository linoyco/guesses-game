import * as AppActions from './types';

export function fetchWeather(city: string): AppActions.IFetchWeather {
    return {
        type: AppActions.FETCH_WEATHER,
        city: city
    }
}