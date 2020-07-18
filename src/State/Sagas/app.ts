import { take, call, put } from 'redux-saga/effects';

import { FETCH_WEATHER, SET_ERROR_MESSAGE, SAVE_WEATHER } from '../Actions/App/types';
import * as Api from '../../Api';

function* fetchWeather(city: string) {
    try {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        const res = yield call(Api.getWeatherRequest, city);
        yield put({ type: SAVE_WEATHER, temp: res.data.main.temp });
    }
    catch (error) {
        yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
    }
};

export function* watchFetchWeather() {
    while (true) {
        const { city } = yield take(FETCH_WEATHER);
        yield call(fetchWeather, city);
    }
};