import {
    WEATHER_REQUEST,
    WEATHER_SUCCESS,
    WEATHER_FAILURE
} from './constanst'
import { getApiUrl } from "./config";

//dispatch запускает action

export const getWeather = (payload) => (dispatch) => {
    dispatch({
        type: WEATHER_REQUEST,
        payload
    });

    fetch({
        method: 'GET',
        url: getApiUrl('Kharkiv')
    })
        .then(respons => respons.toJSON())
        .then(data => {
            dispatch({
                type: WEATHER_SUCCESS,
                payload: data
            });
        })
        .catch(err => {
            dispatch({
                type: WEATHER_FAILURE,
                payload: err
            });
        })
};