import axios from 'axios';

import {
    ALL_CAROUSEL_SUCCESS,
    ALL_CAROUSEL_FAIL,
    MAIN_CAROUSEL_REQUEST,
    MAIN_CAROUSEL_SUCCESS,
    MAIN_CAROUSEL_FAIL,
    NEW_CAROUSEL_REQUEST,
    NEW_CAROUSEL_SUCCESS,
    NEW_CAROUSEL_RESET,
    NEW_CAROUSEL_FAIL,
    UPDATE_CAROUSEL_REQUEST,
    UPDATE_CAROUSEL_SUCCESS,
    UPDATE_CAROUSEL_RESET,
    UPDATE_CAROUSEL_FAIL,
    DELETE_CAROUSEL_REQUEST,
    DELETE_CAROUSEL_SUCCESS,
    DELETE_CAROUSEL_RESET,
    DELETE_CAROUSEL_FAIL,
    CAROUSEL_DETAILS_REQUEST,
    CAROUSEL_DETAILS_SUCCESS,
    CAROUSEL_DETAILS_FAIL,
    CLEAR_ERRORS,
    ALL_CAROUSEL_REQUEST,
} from '../constants/carouselConstants.js';

export const getAllCarousels = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_CAROUSEL_REQUEST });

        const data = await axios.get('http://localhost:8000/api/v1/carousel');

        // console.log('carousel', data);

        dispatch({
            type: ALL_CAROUSEL_SUCCESS,
            payload: data.data.carousel,
        });
    } catch (error) {
        dispatch({
            type: ALL_CAROUSEL_FAIL,
            payload: error.response.data.message,
        });
    }
};
