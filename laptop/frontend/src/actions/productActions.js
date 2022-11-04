import axios from 'axios';
import axiosClient from '../api/axiosClient';

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    CLEAR_ERRORS,
    N_PRODUCT_REQUEST,
    N_PRODUCT_SUCCESS,
    N_PRODUCT_FAIL,
    TOP_PRODUCT_REQUEST,
    TOP_PRODUCT_SUCCESS,
    TOP_PRODUCT_FAIL,
} from '../constants/productConstants';

// Get All Products
export const getProduct =
    (
        currentPage = 1,
        category,
        cost = [0, 151],
        sort,
        keyword = '',
        RAM,
        CPU,
        brand,
        Monitor = [11, 100],
    ) =>
    async (dispatch) => {
        try {
            dispatch({ type: ALL_PRODUCT_REQUEST });

            // let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&cost[gte]=${cost[0]}&cost[lte]=${cost[1]}&ratings[gte]=${ratings}&${sort}`;

            // if (category) {
            //   link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&cost[gte]=${cost[0]}&cost[lte]=${cost[1]}&category=${category}&ratings[gte]=${ratings}&${sort}`;
            // }

            let costSort0 = cost[0] * 1000000;
            let costSort1 = cost[1] * 1000000;

            let link = `http://localhost:8000/api/v1/products?keyword=${keyword}&cost[gte]=${costSort0}&cost[lte]=${costSort1}&page=${currentPage}&${sort}&Monitor[gte]=${Monitor[0]}&Monitor[lte]=${Monitor[1]}`;

            if (category) {
                link = `http://localhost:8000/api/v1/products?keyword=${keyword}&cost[gte]=${costSort0}&cost[lte]=${costSort1}&page=${currentPage}&category=${category}&${sort}&Monitor[gte]=${Monitor[0]}&Monitor[lte]=${Monitor[1]}`;
            }

            if (RAM) {
                link = `http://localhost:8000/api/v1/products?keyword=${keyword}&cost[gte]=${costSort0}&cost[lte]=${costSort1}&page=${currentPage}&RAM=${RAM}&${sort}&Monitor[gte]=${Monitor[0]}&Monitor[lte]=${Monitor[1]}`;
            }

            if (CPU) {
                link = `http://localhost:8000/api/v1/products?keyword=${keyword}&cost[gte]=${costSort0}&cost[lte]=${costSort1}&page=${currentPage}&CPU=${CPU}&${sort}&Monitor[gte]=${Monitor[0]}&Monitor[lte]=${Monitor[1]}`;
            }

            if (brand) {
                link = `http://localhost:8000/api/v1/products?keyword=${keyword}&cost[gte]=${costSort0}&cost[lte]=${costSort1}&page=${currentPage}&brand=${brand}&${sort}&Monitor[gte]=${Monitor[0]}&Monitor[lte]=${Monitor[1]}`;
            }

            const { data } = await axios.get(link);

            dispatch({
                type: ALL_PRODUCT_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ALL_PRODUCT_FAIL,
                payload: error.response.data.message,
            });
        }
    };

// Get All Products For Admin
export const getAdminProduct = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST });

        const data = await axiosClient.get('/api/v1/admin/products');

        dispatch({
            type: ADMIN_PRODUCT_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Top Products For Admin
export const getTopProducts = () => async (dispatch) => {
    try {
        dispatch({ type: TOP_PRODUCT_REQUEST });

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const data = await axiosClient.get('/api/v1/admin/top', config);

        dispatch({
            type: TOP_PRODUCT_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: TOP_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Create Product
export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                Authorization: `token ${token}`,
            },
        };

        const { data } = await axios.post(`http://localhost:8000/api/v1/admin/product/new`, productData, config);

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const { data } = await axios.put(`http://localhost:8000/api/v1/admin/product/${id}`, productData, config);

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Delete Product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `token ${token}`,
            },
        };

        const { data } = await axios.delete(`http://localhost:8000/api/v1/admin/product/${id}`, config);

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const data = await axiosClient.get(`/api/v1/product/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
