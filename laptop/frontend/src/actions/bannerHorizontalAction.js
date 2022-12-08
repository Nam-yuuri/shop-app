import axios from 'axios';
import axiosClient from '~/api/axiosClient';

import {
    ALL_BANNER_HORIZONTAL_FAIL,
    ALL_BANNER_HORIZONTAL_REQUEST,
    ALL_BANNER_HORIZONTAL_SUCCESS,
    MAIN_BANNER_HORIZONTAL_FAIL,
    MAIN_BANNER_HORIZONTAL_REQUEST,
    MAIN_BANNER_HORIZONTAL_SUCCESS,
    BANNER_HORIZONTAL_DETAILS_FAIL,
    BANNER_HORIZONTAL_DETAILS_REQUEST,
    BANNER_HORIZONTAL_DETAILS_SUCCESS,
    CLEAR_ERRORS,
    DELETE_BANNER_HORIZONTAL_FAIL,
    DELETE_BANNER_HORIZONTAL_REQUEST,
    DELETE_BANNER_HORIZONTAL_SUCCESS,
    NEW_BANNER_HORIZONTAL_FAIL,
    NEW_BANNER_HORIZONTAL_REQUEST,
    NEW_BANNER_HORIZONTAL_SUCCESS,
    UPDATE_BANNER_HORIZONTAL_FAIL,
    UPDATE_BANNER_HORIZONTAL_REQUEST,
    UPDATE_BANNER_HORIZONTAL_SUCCESS,
    DELETE_BANNER_HORIZONTAL_RESET,
    UPDATE_BANNER_HORIZONTAL_RESET,
    NEW_BANNER_HORIZONTAL_RESET
  } from '../constants/bannerHorizontalConstants';

// Get All Banners
export const getAllBannersHorizontal = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_BANNER_HORIZONTAL_REQUEST });

        const data = await axios.get('http://localhost:8000/api/v1/bannerHorizontal');

        // console.log('horizon db: ', data);

        dispatch({
            type: ALL_BANNER_HORIZONTAL_SUCCESS,
            payload: data.data.horizontal,
        });
    } catch (error) {
        dispatch({
            type: ALL_BANNER_HORIZONTAL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get All Banners main
export const getHorizontalMain = () => async (dispatch) => {
    try {
        dispatch({ type: MAIN_BANNER_HORIZONTAL_REQUEST });

        const data = await axios.get('http://localhost:8000/api/v1/bannerHorizontal/main');

        // console.log('bannerho', data.data.horizontal[0].url);

        dispatch({
            type: MAIN_BANNER_HORIZONTAL_SUCCESS,
            payload: data.data.horizontal,
        });
    } catch (error) {
        dispatch({
            type: MAIN_BANNER_HORIZONTAL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Create Banner
export const createBannerHorizontal = (bannerData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_BANNER_HORIZONTAL_REQUEST });

        // const token = localStorage.getItem("token");

        // const config = {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //     Authorization: `token ${token}`,
        //   },
        // };

        const data = await axios.post(
            'http://localhost:8000/api/v1/admin/bannerHorizontal/new',
            bannerData,
            // config
        );

        dispatch({
            type: NEW_BANNER_HORIZONTAL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_BANNER_HORIZONTAL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Update Banner
export const updateBannerHorizontal = (id, bannerData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_BANNER_HORIZONTAL_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        // const data = await axios.put(`http://localhost:8000/api/v1/bannerHorizontal/${id}`, bannerData, config);
        const data = await axios.put(`http://localhost:8000/api/v1/bannerHorizontal/${id}`, bannerData);

        dispatch({
            type: UPDATE_BANNER_HORIZONTAL_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_BANNER_HORIZONTAL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Delete Banner
export const deleteBannerHorizontal = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_BANNER_HORIZONTAL_REQUEST });

        // const token = localStorage.getItem('token');

        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `token ${token}`,
        //     },
        // };

        // const data = await axios.delete(`http://localhost:8000/api/v1/bannerHorizontal/${id}`, config);
        const data = await axios.delete(`http://localhost:8000/api/v1/bannerHorizontal/${id}`);

        dispatch({
            type: DELETE_BANNER_HORIZONTAL_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_BANNER_HORIZONTAL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Banner Details
export const getBannerHorizontalDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BANNER_HORIZONTAL_DETAILS_REQUEST });

        const data = await axios.get(`http://localhost:8000/api/v1/admin/bannerHorizontal/${id}`);

        // console.log("horizontal: ", data.data.horizontal)
        dispatch({
            type: BANNER_HORIZONTAL_DETAILS_SUCCESS,
            payload: data.data.horizontal,
        });
    } catch (error) {
        dispatch({
            type: BANNER_HORIZONTAL_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
