import axios from 'axios';
import {
    ALL_SHOWROOM_SUCCESS,
    ALL_SHOWROOM_REQUEST,
    ALL_SHOWROOM_FAIL,
    MAIN_SHOWROOM_SUCCESS,
    MAIN_SHOWROOM_REQUEST,
    MAIN_SHOWROOM_FAIL,
    NEW_SHOWROOM_REQUEST,
    NEW_SHOWROOM_SUCCESS,
    NEW_SHOWROOM_RESET,
    NEW_SHOWROOM_FAIL,
    UPDATE_SHOWROOM_REQUEST,
    UPDATE_SHOWROOM_SUCCESS,
    UPDATE_SHOWROOM_RESET,
    UPDATE_SHOWROOM_FAIL,
    DELETE_SHOWROOM_REQUEST,
    DELETE_SHOWROOM_SUCCESS,
    DELETE_SHOWROOM_RESET,
    DELETE_SHOWROOM_FAIL,
    SHOWROOM_DETAILS_REQUEST,
    SHOWROOM_DETAILS_SUCCESS,
    SHOWROOM_DETAILS_FAIL,
    CLEAR_ERRORS,
    SHOWROOM_CITY_REQUEST,
    SHOWROOM_CITY_SUCCESS,
    SHOWROOM_CITY_FAIL,
} from '~/constants/showroomConstants';

//get all
export const getAllShowroom = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_SHOWROOM_REQUEST });
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };
        const data = await axios.get('http://localhost:8000/api/v1/showroom', config);

        // console.log('showroom db:', data.data.showroom);

        dispatch({
            type: ALL_SHOWROOM_SUCCESS,
            payload: data.data.showroom,
        });
    } catch (error) {
        dispatch({
            type: ALL_SHOWROOM_FAIL,
            payload: error.response.data.message,
        });
    }
};

// get with city
export const getShowroomCity = (city) => async (dispatch) => {
    try {
        dispatch({ type: SHOWROOM_CITY_REQUEST });
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };

        let link = 'http://localhost:8000/api/v1/showroom';

        if (city) {
            link = `http://localhost:8000/api/v1/showroom/${city}`;
        }
        
        const data = await axios.get(link, config);

        // console.log("data", data.data.showroom)

        dispatch({
            type: SHOWROOM_CITY_SUCCESS,
            payload: data.data.showroom,
        });
    } catch (error) {
        dispatch({
            type: SHOWROOM_CITY_FAIL,
            payload: error.response.data.message,
        });
    }
};

//create
export const createShowroom = (showroomData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_SHOWROOM_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };

        const data = await axios.post(`http://localhost:8000/api/v1/showroom/new`, showroomData, config);
        // const data = await axios.post(`http://localhost:8000/api/v1/showroom/new`, showroomData);

        dispatch({
            type: NEW_SHOWROOM_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_SHOWROOM_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Header Details
export const getShowroomDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: SHOWROOM_DETAILS_REQUEST });
        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `token ${token}`,
            },
        };
        const data = await axios.get(`http://localhost:8000/api/v1//admin/showroom/${id}`, config);

        // console.log("data", data.data.showroom)

        dispatch({
            type: SHOWROOM_DETAILS_SUCCESS,
            payload: data.data.showroom,
        });
    } catch (error) {
        dispatch({
            type: SHOWROOM_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Update Banner
export const updateShowroom = (id, showroomData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_SHOWROOM_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const data = await axios.put(`http://localhost:8000/api/v1//admin/showroom/${id}`, showroomData, config);
        // const data = await axios.put(`http://localhost:8000/api/v1//admin/showroom/${id}`, showroomData);

        dispatch({
            type: UPDATE_SHOWROOM_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_SHOWROOM_FAIL,
            payload: error.response.data.message,
        });
    }
};

//delete
export const deleteShowroom = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_SHOWROOM_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const data = await axios.delete(`http://localhost:8000/api/v1/admin/showroom/${id}`, config);
        // const data = await axios.delete(`http://localhost:8000/api/v1/admin/showroom/${id}`);

        dispatch({
            type: DELETE_SHOWROOM_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_SHOWROOM_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
};
