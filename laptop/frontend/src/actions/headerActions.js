import axios from 'axios';
import axiosClient from '~/api/axiosClient';

export const getAllHeader = () => async (dispatch) => {
    try {
        dispatch({ type: 'All_HEADER_REQUEST' });
        const data = await axiosClient.get('/api/v1/header/');

        dispatch({
            type: 'ALL_HEADER_SUCCESS',
            payload: data.headers,
        });
    } catch (error) {
        dispatch({
            type: 'ALL_HEADER_FAIL',
            payload: error.response.data.message,
        });
    }
};
