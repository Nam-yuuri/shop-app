export const brandsReducer = (state = { brands: [] }, action) => {
    switch (action.type) {
        case 'ALL_BRAND_REQUEST':
            return {
                loading: true,
                brands: [],
            };

        case 'ALL_BRAND_SUCCESS':
            return {
                loading: false,
                brands: action.payload,
            };
        case 'ALL_BRAND_FAIL':
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