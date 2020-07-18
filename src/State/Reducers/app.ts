import produce from 'immer';

import { appActionType, SAVE_WEATHER, SET_ERROR_MESSAGE } from '../Actions/App/types';

export interface IGuess {
    currentWeather: number;
    guess: number;
    color: boolean;
    city: string;
}

export interface IAppState {
    currentWeather: number;
    errorMessage: string;
}

const initialState: IAppState = {
    currentWeather: 0,
    errorMessage: '',
}

export function appReducer(state: IAppState = initialState, action: appActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SAVE_WEATHER:
                draft.currentWeather = action.temp;
                break;
            case SET_ERROR_MESSAGE:
                draft.errorMessage = action.errorMessage;
                break;
        }
    });
}