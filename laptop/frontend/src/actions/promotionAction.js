import axios from 'axios';
import {
    ALL_PROMOTION_SUCCESS,
    ALL_PROMOTION_REQUEST,
    ALL_PROMOTION_FAIL,
    MAIN_PROMOTION_SUCCESS,
    MAIN_PROMOTION_REQUEST,
    MAIN_PROMOTION_FAIL,
    NEW_PROMOTION_REQUEST,
    NEW_PROMOTION_SUCCESS,
    NEW_PROMOTION_RESET,
    NEW_PROMOTION_FAIL,
    UPDATE_PROMOTION_REQUEST,
    UPDATE_PROMOTION_SUCCESS,
    UPDATE_PROMOTION_RESET,
    UPDATE_PROMOTION_FAIL,
    DELETE_PROMOTION_REQUEST,
    DELETE_PROMOTION_SUCCESS,
    DELETE_PROMOTION_RESET,
    DELETE_PROMOTION_FAIL,
    PROMOTION_DETAILS_REQUEST,
    PROMOTION_DETAILS_SUCCESS,
    PROMOTION_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '~/constants/promotionConstants';

//get All promotion
export const getAllPromotion = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PROMOTION_SUCCESS });
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };
        const data = await axios.get('http://localhost:8000/api/v1/admin/promotion', config);

        dispatch({
            type: ALL_PROMOTION_SUCCESS,
            payload: data.data.promotion,
        });
    } catch (error) {
        dispatch({
            type: ALL_PROMOTION_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get All promotion main
export const getAllPromotionMain = () => async (dispatch) => {
    try {
        dispatch({ type: MAIN_PROMOTION_REQUEST });
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };
        const data = await axios.get('http://localhost:8000/api/v1/promotion/main', config);

        // console.log('promotion db: ', data.data);

        dispatch({
            type: MAIN_PROMOTION_SUCCESS,
            payload: data.data.promotion,
        });
    } catch (error) {
        dispatch({
            type: MAIN_PROMOTION_FAIL,
            payload: error.response.data.message,
        });
    }
};

//create
export const createPromotion = (promotionData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PROMOTION_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };

        const data = await axios.post(`http://localhost:8000/api/v1/admin/promotion/new`, promotionData, config);
        // const data = await axios.post(`http://localhost:8000/api/v1/admin/promotion/new`, showroomData);

        dispatch({
            type: NEW_PROMOTION_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_PROMOTION_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Delete Product
export const deletePromotion = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PROMOTION_REQUEST });

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `token ${token}`,
            },
        };

        const { data } = await axios.delete(`http://localhost:8000/api/v1/admin/promotion/${id}`, config);
        // const { data } = await axios.delete(`http://localhost:8000/api/v1/admin/promotion/${id}`);

        dispatch({
            type: DELETE_PROMOTION_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PROMOTION_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Header Details
export const getPromotionDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PROMOTION_DETAILS_REQUEST });
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };
        const data = await axios.get(`http://localhost:8000/api/v1/promotion/${id}`, config);

        // console.log("data", data.data.promotion)

        dispatch({
            type: PROMOTION_DETAILS_SUCCESS,
            payload: data.data.promotion,
        });
    } catch (error) {
        dispatch({
            type: PROMOTION_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const updatePromotion = (id, promotionData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROMOTION_SUCCESS });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const data = await axios.put(`http://localhost:8000/api/v1/admin/promotion/${id}`, promotionData, config);
        // const data = await axios.put(`http://localhost:8000/api/v1/admin/promotion/${id}`, promotionData);

        dispatch({
            type: UPDATE_PROMOTION_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PROMOTION_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
};
