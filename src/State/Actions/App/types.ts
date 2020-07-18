export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SAVE_WEATHER = 'SAVE_WEATHER';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export interface IFetchWeather {
    type: typeof FETCH_WEATHER;
    city: string;
}

export interface ISaveWeather {
    type: typeof SAVE_WEATHER;
    temp: number;
}

export interface IAppError {
    type: typeof SET_ERROR_MESSAGE;
    errorMessage: string;
}

export type appActionType = IFetchWeather
    | ISaveWeather
    | IAppError;
