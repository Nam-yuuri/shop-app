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

// Delete Product
export const deleteBrand = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'DELETE_BRAND_REQUEST' });

        // const token = localStorage.getItem("token");
        // const config = {
        //   headers: {
        //     Authorization: `token ${token}`,
        //   },
        // };

        // const { data } = await axios.delete(`http://localhost:5000/api/v1/admin/product/${id}`, config);
        const { data } = await axios.delete(`http://localhost:8000/api/v1/admin/brand/${id}`);

        dispatch({
            type: 'DELETE_BRAND_SUCCESS',
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: 'DELETE_BRAND_FAIL',
            payload: error.response.data.message,
        });
    }
};