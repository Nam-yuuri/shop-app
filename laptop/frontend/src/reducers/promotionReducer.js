export const promotionsReducer = (state = { promotions: [] }, action) => {
    switch (action.type) {
        case 'ALL_PROMOTION_REQUEST':
            return {
                loading: true,
                promotions: [],
            };
        case 'ALL_PROMOTION_SUCCESS':
            return {
                loading: false,
                promotions: action.payload,
            };
        case 'ALL_PROMOTION_FAIL':
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

export const mainPromotionReducer = (state = { promotions: [] }, action) => {
    switch (action.type) {
        case 'MAIN_PROMOTION_REQUEST':
            return {
                loading: true,
                promotions: [],
            };

        case 'MAIN_PROMOTION_SUCCESS':
            return {
                loading: false,
                promotions: action.payload,
            };
        case 'MAIN_PROMOTION_FAIL':
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
