import * as api from '../api/boximgs';

export const getBoximgs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBoximgs();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createBoximg = (boximg) => async (dispatch) => {
    try {
        const { data } = await api.createBoximg(boximg);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateBoximg = (id, boximg) => async (dispatch) => {
    try {
        const { data } = await api.updateBoximg(id, boximg);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteBoximg = (id) => async (dispatch) => {
    try {
        await api.deleteBoximg(id)

        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error)
    }
}