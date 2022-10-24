import * as api from '../api/carousel';

export const getCarousels = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCarousels();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createCarousel = (carousel) => async (dispatch) => {
    try {
        const { data } = await api.createCarousel(carousel);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateCarousel = (id, carousel) => async (dispatch) => {
    try {
        const { data } = await api.updateCarousel(id, carousel);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteCarousel = (id) => async (dispatch) => {
    try {
        await api.deleteCarousel(id)

        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}