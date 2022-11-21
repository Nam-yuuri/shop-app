import axios from 'axios';

//get All promotion
export const getAllPromotion = () => async (dispatch) => {
    try {
        dispatch({ type: 'ALL_PROMOTION_SUCCESS' });

        const data = await axios.get('http://localhost:8000/api/v1/admin/promotion');

        dispatch({
            type: 'ALL_PROMOTION_SUCCESS',
            payload: data.data.promotion,
        });
    } catch (error) {
        dispatch({
            type: 'ALL_PROMOTION_FAIL',
            payload: error.response.data.message,
        });
    }
};

// Get All promotion main
export const getAllPromotionMain = () => async (dispatch) => {
    try {
        dispatch({ type: 'MAIN_PROMOTION_REQUEST' });

        const data = await axios.get('http://localhost:8000/api/v1/promotion/main');

        console.log('promotion db: ', data.data);

        dispatch({
            type: 'MAIN_PROMOTION_SUCCESS',
            payload: data.data.promotion,
        });
    } catch (error) {
        dispatch({
            type: 'MAIN_PROMOTION_FAIL',
            payload: error.response.data.message,
        });
    }
};