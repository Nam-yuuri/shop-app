export const bannersReducer = (state = { banners: [] }, action) => {
    switch (action.type) {
      case 'ALL_BANNER_REQUEST':
        return {
          loading: true,
          banners: [],
        };
  
      case 'ALL_BANNER_SUCCESS':
        return {
          loading: false,
          banners: action.payload,
        };
      case 'ALL_BANNER_FAIL':
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