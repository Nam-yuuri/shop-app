import * as api from '../api/brands';

export const getBrands = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBrands();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createBrand = (brand) => async (dispatch) => {
    try {
        const { data } = await api.createBrand(brand);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateBrand = (id, brand) => async (dispatch) => {
    try {
        const { data } = await api.updateBrand(id, brand);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteBrand = (id) => async (dispatch) => {
    try {
        await api.deleteBrand(id)

        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}