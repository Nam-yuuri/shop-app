import axios from 'axios';
import axiosClient from '../api/axiosClient';

import {
    ADD_TO_CART,
    ADD_TO_CART_FAIL,
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    GET_CART_FAIL,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    REMOVE_CART_ITEM,
    REMOVE_CART_ITEM_FAIL,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    SAVE_SHIPPING_INFO,
} from '../constants/cartConstants';

// Get cart
export const getCart = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CART_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                Authorization: `token ${token}`,
            },
        };

        const data = await axios.get('http://localhost:8000/api/v1/cart', config);

        dispatch({
            type: GET_CART_SUCCESS,
            payload1: data.data.cart,
            payload2: data.data.cartItems,
        });
    } catch (error) {
        dispatch({
            type: GET_CART_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Add to cart
export const addToCart = (productId, quantity) => async (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const { data } = await axios.post(
            'http://localhost:8000/api/v1/cart',
            {
                productId,
                quantity,
            },
            config,
        );

        dispatch({
            type: ADD_TO_CART_SUCCESS,
            payload: data.success,
            payload1: data.cart,
            payload2: data.cartItems,
        });
    } catch (error) {
        dispatch({
            type: ADD_TO_CART_FAIL,
            payload: error.response.data.message,
        });
    }
};

//Remove item from cart
export const deleteFromCart = (productId) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_CART_ITEM_REQUEST });

        const token = localStorage.getItem('token');

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `token ${token}`,
            },
        };

        const { data } = await axios.delete(`http://localhost:8000/api/v1/cart/${productId}`, config);

        dispatch({
            type: REMOVE_CART_ITEM_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: REMOVE_CART_ITEM_FAIL,
            payload: error.response.data.message,
        });
    }
};


// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data,
    });

    localStorage.setItem('shippingInfo', JSON.stringify(data));
};
