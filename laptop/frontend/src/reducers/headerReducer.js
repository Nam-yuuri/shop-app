export const headersReducer = (state = { headers: [] }, action) => {
    switch (action.type) {
        case 'ALL_HEADER_REQUEST':
            return {
                loading: true,
                headers: [],
            };
        case 'ALL_HEADER_SUCCESS':
            return {
                loading: false,
                headers: action.payload,
            };
        case 'ALL_HEADER_FAIL':
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
