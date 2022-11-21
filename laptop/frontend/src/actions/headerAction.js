import axios from 'axios';

//get All header
export const getAllHeaders = () => async (dispatch) => {
    try {
        dispatch({ type: 'ALL_HEADER_REQUEST' });

        const data = await axios.get('http://localhost:8000/api/v1/header');

        // console.log('header db:', data);

        dispatch({
            type: 'ALL_HEADER_SUCCESS',
            payload: data.data.header,
        });
    } catch (error) {
        dispatch({
            type: 'ALL_HEADER_FAIL',
            payload: error.response.data.message,
        });
    }
};

// Get All Banners main
export const getAllHeaderMain = () => async (dispatch) => {
    try {
        dispatch({ type: 'MAIN_HEADER_REQUEST' });

        const data = await axios.get('http://localhost:8000/api/v1/header/main');

        // console.log('header db: ', data.data.header[0].images.url);

        dispatch({
            type: 'MAIN_HEADER_SUCCESS',
            payload: data.data.header,
        });
    } catch (error) {
        dispatch({
            type: 'MAIN_HEADER_FAIL',
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: 'CLEAR_ERRORS' });
};