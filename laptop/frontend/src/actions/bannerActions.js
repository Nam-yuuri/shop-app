import axios from 'axios';
import axiosClient from '../api/axiosClient';

// Get All Banners
export const getAllBanners = () => async (dispatch) => {
    try {
        dispatch({ type: 'ALL_BANNER_REQUEST' });

        const data = await axiosClient.get('/api/v1/banner/');

        dispatch({
            type: 'ALL_BANNER_SUCCESS',
            payload: data.banners,
        });
    } catch (error) {
        dispatch({
            type: 'ALL_BANNER_FAIL',
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
};
