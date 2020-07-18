import { all } from 'redux-saga/effects';

import { watchFetchWeather } from './app';

export default function* rootSaga() {
	yield all([
		watchFetchWeather()
	]);
}