import axios from 'axios';

export const getAllShowroom = () => async (dispatch) => {
    try {
        dispatch({ type: 'ALL_SHOWROOM_REQUEST' });
        const data = await axios.get('http://localhost:8000/api/v1/showroom');

        // console.log('showroom db:', data.data.showroom);

        dispatch({
            type: 'ALL_SHOWROOM_SUCCESS',
            payload: data.data.showroom,
        });
    } catch (error) {
        dispatch({
            type: 'ALL_SHOWROOM_FAIL',
            payload: error.response.data.message,
        });
    }
};
