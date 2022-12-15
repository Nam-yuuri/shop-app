import { idID } from '@mui/material/locale';
import axios from 'axios';

import {
    ALL_CAROUSEL_REQUEST,
    ALL_CAROUSEL_SUCCESS,
    ALL_CAROUSEL_FAIL,
    ALL_CAROUSEL_MAIN_REQUEST,
    ALL_CAROUSEL_MAIN_SUCCESS,
    ALL_CAROUSEL_MAIN_FAIL,
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
} from '../constants/carouselConstants.js';

export const getAllCarousels = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_CAROUSEL_REQUEST });
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };
        const data = await axios.get('http://localhost:8000/api/v1/carousel', config);

        // console.log('carousel', data.data.carousel);

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

export const getCarouselsMain = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_CAROUSEL_MAIN_REQUEST });
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };
        const data = await axios.get('http://localhost:8000/api/v1/carousel/main', config);

        // console.log('carousel', data);

        dispatch({
            type: ALL_CAROUSEL_MAIN_SUCCESS,
            payload: data.data.carousel,
        });
    } catch (error) {
        dispatch({
            type: ALL_CAROUSEL_MAIN_FAIL,
            payload: error.response.data.message,
        });
    }
};

//create
export const createCarousel = (carouselData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_CAROUSEL_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };

        const data = await axios.post(`http://localhost:8000/api/v1/admin/carousel/new`, carouselData, config);
        // const data = await axios.post(`http://localhost:8000/api/v1/admin/carousel/new`, carouselData);

        dispatch({
            type: NEW_CAROUSEL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_CAROUSEL_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const deleteCarousel = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_CAROUSEL_REQUEST });

        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `token ${token}`,
          },
        };

        const { data } = await axios.delete(`http://localhost:8000/api/v1/admin/carousel/${id}`, config);
        // const { data } = await axios.delete(`http://localhost:8000/api/v1/admin/carousel/${id}`);

        dispatch({
            type: DELETE_CAROUSEL_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_CAROUSEL_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const getCarouselDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: CAROUSEL_DETAILS_REQUEST });
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };
        const data = await axios.get(`http://localhost:8000/api/v1/carousel/${id}`, config);

        // console.log('data', data.data.brand);

        dispatch({
            type: CAROUSEL_DETAILS_SUCCESS,
            payload: data.data.carousel,
        });
    } catch (error) {
        dispatch({
            type: CAROUSEL_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const updateCarousel = (id, carouselData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_CAROUSEL_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const data = await axios.put(`http://localhost:8000/api/v1/admin/carousel/${id}`, carouselData, config);
        // const data = await axios.put(`http://localhost:8000/api/v1/admin/carousel/${id}`, carouselData);

        dispatch({
            type: UPDATE_CAROUSEL_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_CAROUSEL_FAIL,
            payload: error.response.data.message,
        });
    }
    
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
