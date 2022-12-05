import axios from 'axios';

import {
    ALL_HEADER_REQUEST,
    ALL_HEADER_SUCCESS,
    ALL_HEADER_FAIL,
    MAIN_HEADER_REQUEST,
    MAIN_HEADER_SUCCESS,
    MAIN_HEADER_FAIL,
    NEW_HEADER_REQUEST,
    NEW_HEADER_SUCCESS,
    NEW_HEADER_RESET,
    NEW_HEADER_FAIL,
    UPDATE_HEADER_REQUEST,
    UPDATE_HEADER_SUCCESS,
    UPDATE_HEADER_RESET,
    UPDATE_HEADER_FAIL,
    DELETE_HEADER_REQUEST,
    DELETE_HEADER_SUCCESS,
    DELETE_HEADER_RESET,
    DELETE_HEADER_FAIL,
    HEADER_DETAILS_REQUEST,
    HEADER_DETAILS_SUCCESS,
    HEADER_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '~/constants/headerConstants';

//get All header
export const getAllHeaders = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_HEADER_REQUEST });

        const data = await axios.get('http://localhost:8000/api/v1/header');

        // console.log('header db:', data);

        dispatch({
            type: ALL_HEADER_SUCCESS,
            payload: data.data.header,
        });
    } catch (error) {
        dispatch({
            type: ALL_HEADER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get All Banners main
export const getAllHeaderMain = () => async (dispatch) => {
    try {
        dispatch({ type: MAIN_HEADER_REQUEST });

        const data = await axios.get('http://localhost:8000/api/v1/header/main');

        // console.log('header db: ', data.data.header[0].images.url);

        dispatch({
            type: MAIN_HEADER_SUCCESS,
            payload: data.data.header,
        });
    } catch (error) {
        dispatch({
            type: MAIN_HEADER_FAIL,
            payload: error.response.data.message,
        });
    }
};

//create
export const createHeader = (headerData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_HEADER_REQUEST });

        // const token = localStorage.getItem('token');

        // const config = {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //         Authorization: `token ${token}`,
        //     },
        // };

        // const data = await axios.post(`http://localhost:8000/api/v1/header/new`, headerData, config);
        const data = await axios.post(`http://localhost:8000/api/v1/header/new`, headerData);

        dispatch({
            type: NEW_HEADER_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_HEADER_FAIL,
            payload: error.response.data.message,
        });
    }
};

//delete
export const deleteHeader = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_HEADER_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const data = await axios.delete(`http://localhost:8000/api/v1/header/${id}`, config);

        dispatch({
            type: DELETE_HEADER_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_HEADER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Header Details
export const getHeaderDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: HEADER_DETAILS_REQUEST });

        const data = await axios.get(`http://localhost:8000/api/v1/header/${id}`);

        // console.log("data", data.data.header)

        dispatch({
            type: HEADER_DETAILS_SUCCESS,
            payload: data.data.header,
        });
    } catch (error) {
        dispatch({
            type: HEADER_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Update Banner
export const updateHeader = (id, bannerData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_HEADER_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        // const data = await axiosClient.put(`/api/v1/admin/banner/${id}`, bannerData, config);
        const data = await axios.put(`http://localhost:8000/api/v1/header/${id}`, bannerData);

        dispatch({
            type: UPDATE_HEADER_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_HEADER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
