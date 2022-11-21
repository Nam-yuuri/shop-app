import axios from 'axios';

// Get All Brands
export const getAllBrands = () => async (dispatch) => {
    try {
        dispatch({ type: 'ALL_BRAND_REQUEST' });

        const data = await axios.get('http://localhost:8000/api/v1/brand');

        // console.log('brand db: ', data);

        dispatch({
            type: 'ALL_BRAND_SUCCESS',
            payload: data.data.brand,
        });
    } catch (error) {
        dispatch({
            type: 'ALL_BRAND_FAIL',
            payload: error.response.data.message,
        });
    }
};