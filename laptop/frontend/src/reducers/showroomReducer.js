export const showroomsReducer = (state = { showrooms: [] }, action) => {
    switch (action.type) {
        case 'ALL_SHOWROOM_REQUEST':
            return {
                loading: true,
                showrooms: [],
            };
        case 'ALL_SHOWROOM_SUCCESS':
            return {
                loading: false,
                showrooms: action.payload,
            };
        case 'ALL_SHOWROOM_FAIL':
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