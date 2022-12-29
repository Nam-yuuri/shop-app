import axios from 'axios';
import {
    ALL_BRAND_SUCCESS,
    ALL_BRAND_REQUEST,
    ALL_BRAND_FAIL,
    ALL_BRAND_MAIN_SUCCESS,
    ALL_BRAND_MAIN_REQUEST,
    ALL_BRAND_MAIN_FAIL,
    NEW_BRAND_REQUEST,
    NEW_BRAND_SUCCESS,
    NEW_BRAND_RESET,
    NEW_BRAND_FAIL,
    UPDATE_BRAND_REQUEST,
    UPDATE_BRAND_SUCCESS,
    UPDATE_BRAND_RESET,
    UPDATE_BRAND_FAIL,
    DELETE_BRAND_REQUEST,
    DELETE_BRAND_SUCCESS,
    DELETE_BRAND_RESET,
    DELETE_BRAND_FAIL,
    BRAND_DETAILS_REQUEST,
    BRAND_DETAILS_SUCCESS,
    BRAND_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '~/constants/brandConstants.js';

// Get All Brands
export const getAllBrands = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_BRAND_REQUEST });
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `token ${token}`,
          },
        };

        const data = await axios.get('http://localhost:8000/api/v1/brand', config);

        // console.log('brand db: ', data);

        dispatch({
            type: ALL_BRAND_SUCCESS,
            payload: data.data.brand,
        });
    } catch (error) {
        dispatch({
            type: ALL_BRAND_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get All Brands
export const getBrandsMain = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_BRAND_MAIN_REQUEST });
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `token ${token}`,
          },
        };

        const data = await axios.get('http://localhost:8000/api/v1/brand/main', config);

        // console.log('brand db: ', data);

        dispatch({
            type: ALL_BRAND_MAIN_SUCCESS,
            payload: data.data.brand,
        });
    } catch (error) {
        dispatch({
            type: ALL_BRAND_MAIN_FAIL,
            payload: error.response.data.message,
        });
    }
};
// Delete Product
export const deleteBrand = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_BRAND_REQUEST });

        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `token ${token}`,
          },
        };

        const { data } = await axios.delete(`http://localhost:8000/api/v1/admin/brand/${id}`, config);
        // const { data } = await axios.delete(`http://localhost:8000/api/v1/admin/brand/${id}`);

        dispatch({
            type: DELETE_BRAND_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DELETE_BRAND_FAIL,
            payload: error.response.data.message,
        });
    }
};

//create
export const createBrand = (brandData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_BRAND_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };

        const data = await axios.post(`http://localhost:8000/api/v1/admin/brand/new`, brandData, config);
        // const data = await axios.post(`http://localhost:8000/api/v1/admin/brand/new`, brandData);

        dispatch({
            type: NEW_BRAND_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_BRAND_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Header Details
export const getBrandDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BRAND_DETAILS_REQUEST });
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `token ${token}`,
          },
        };

        const data = await axios.get(`http://localhost:8000/api/v1/brand/${id}`, config);

        // console.log('data', data.data.brand);

        dispatch({
            type: BRAND_DETAILS_SUCCESS,
            payload: data.data.brand,
        });
    } catch (error) {
        dispatch({
            type: BRAND_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const updateBrand = (id, brandData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_BRAND_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const data = await axios.put(`http://localhost:8000/api/v1/admin/brand/${id}`, brandData, config);
        // const data = await axios.put(`http://localhost:8000/api/v1/admin/brand/${id}`, brandData);

        dispatch({
            type: UPDATE_BRAND_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_BRAND_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
