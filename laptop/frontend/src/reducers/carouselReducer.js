import {
    ALL_CAROUSEL_SUCCESS,
    ALL_CAROUSEL_FAIL,
    ALL_CAROUSEL_REQUEST,
    MAIN_CAROUSEL_REQUEST,
    MAIN_CAROUSEL_SUCCESS,
    MAIN_CAROUSEL_FAIL,
    NEW_CAROUSEL_REQUEST,
    NEW_CAROUSEL_SUCCESS,
    NEW_CAROUSEL_RESET,
    NEW_CAROUSEL_FAIL,
    UPDATE_CAROUSEL_REQUEST,
    UPDATE_CAROUSEL_SUCCESS,
    UPDATE_CAROUSEL_RESET,
    UPDATE_CAROUSEL_FAIL,
    DELETE_CAROUSEL_REQUEST,
    DELETE_CAROUSEL_SUCCESS,
    DELETE_CAROUSEL_RESET,
    DELETE_CAROUSEL_FAIL,
    CAROUSEL_DETAILS_REQUEST,
    CAROUSEL_DETAILS_SUCCESS,
    CAROUSEL_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '../constants/carouselConstants.js'


export const carouselsReducer = (state = { carousels: [] }, action) => {
    switch (action.type) {
        case ALL_CAROUSEL_REQUEST:
            return {
                loading: true,
                carousels: [],
            };

        case ALL_CAROUSEL_SUCCESS:
            return {
                loading: false,
                carousels: action.payload,
            };
        case ALL_CAROUSEL_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};

export const carouselsMainReducer = (state = { carousels: [] }, action) => {
    switch (action.type) {
        case 'ALL_CAROUSEL_MAIN_REQUEST':
            return {
                loading: true,
                carousels: [],
            };

        case 'ALL_CAROUSEL_MAIN_SUCCESS':
            return {
                loading: false,
                carousels: action.payload,
            };
        case 'ALL_CAROUSEL_MAIN_FAIL':
            return {
                loading: false,
                error: action.payload,
            };

        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};