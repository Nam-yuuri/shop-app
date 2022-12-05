import {
    ALL_BRAND_SUCCESS,
    ALL_BRAND_REQUEST,
    ALL_BRAND_FAIL,
    ALL_BRAND_MAIN_SUCCESS,
    ALL_BRAND_MAIN_REQUEST,
    ALL_BRAND_MAIN_FAIL,
    NEW_BRAND_REQUEST,
    NEW_BRAND_SUCCESS,
    NEW_BRAND_RESET,
    NEW_BRAND_FAIL,
    UPDATE_BRAND_REQUEST,
    UPDATE_BRAND_SUCCESS,
    UPDATE_BRAND_RESET,
    UPDATE_BRAND_FAIL,
    DELETE_BRAND_REQUEST,
    DELETE_BRAND_SUCCESS,
    DELETE_BRAND_RESET,
    DELETE_BRAND_FAIL,
    BRAND_DETAILS_REQUEST,
    BRAND_DETAILS_SUCCESS,
    BRAND_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '../constants/brandConstants';

export const brandsReducer = (state = { brands: [] }, action) => {
    switch (action.type) {
        case ALL_BRAND_REQUEST:
            return {
                loading: true,
                brands: [],
            };

        case ALL_BRAND_SUCCESS:
            return {
                loading: false,
                brands: action.payload,
            };
        case ALL_BRAND_FAIL:
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

export const brandsMainReducer = (state = { brands: [] }, action) => {
    switch (action.type) {
        case ALL_BRAND_MAIN_REQUEST:
            return {
                loading: true,
                brands: [],
            };

        case ALL_BRAND_MAIN_SUCCESS:
            return {
                loading: false,
                brands: action.payload,
            };
        case ALL_BRAND_MAIN_FAIL:
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


export const newBrandReducer = (state = { brand: {} }, action) => {
    switch (action.type) {
        case NEW_BRAND_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
            };
        case NEW_BRAND_SUCCESS:
            return {
                loading: false,
                // success: action.payload.success,
                success: true,
                brand: action.payload.brand,
            };
        case NEW_BRAND_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case NEW_BRAND_RESET:
            return {
                ...state,
                success: false,
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

export const brandDetailsReducer = (state = { brands: {} }, action) => {
    switch (action.type) {
        case BRAND_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case BRAND_DETAILS_SUCCESS:
            return {
                loading: false,
                brands: action.payload,
            };
        case BRAND_DETAILS_FAIL:
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

export const brandReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_BRAND_REQUEST:
      case UPDATE_BRAND_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_BRAND_SUCCESS:
        return {
          ...state,
          loading: false,
        //   isUpdated: action.payload,
          isUpdated: true,
        };
      case DELETE_BRAND_FAIL:
      case UPDATE_BRAND_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_BRAND_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_BRAND_RESET:
        return {
          ...state,
          isUpdated: false,
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
  