import {
    ALL_PROMOTION_SUCCESS,
    ALL_PROMOTION_REQUEST,
    ALL_PROMOTION_FAIL,
    MAIN_PROMOTION_SUCCESS,
    MAIN_PROMOTION_REQUEST,
    MAIN_PROMOTION_FAIL,
    NEW_PROMOTION_REQUEST,
    NEW_PROMOTION_SUCCESS,
    NEW_PROMOTION_RESET,
    NEW_PROMOTION_FAIL,
    UPDATE_PROMOTION_REQUEST,
    UPDATE_PROMOTION_SUCCESS,
    UPDATE_PROMOTION_RESET,
    UPDATE_PROMOTION_FAIL,
    DELETE_PROMOTION_REQUEST,
    DELETE_PROMOTION_SUCCESS,
    DELETE_PROMOTION_RESET,
    DELETE_PROMOTION_FAIL,
    PROMOTION_DETAILS_REQUEST,
    PROMOTION_DETAILS_SUCCESS,
    PROMOTION_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '~/constants/promotionConstants';

export const promotionsReducer = (state = { promotions: [] }, action) => {
    switch (action.type) {
        case ALL_PROMOTION_REQUEST:
            return {
                loading: true,
                promotions: [],
            };
        case ALL_PROMOTION_SUCCESS:
            return {
                loading: false,
                promotions: action.payload,
            };
        case ALL_PROMOTION_FAIL:
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

export const mainPromotionReducer = (state = { promotions: [] }, action) => {
    switch (action.type) {
        case MAIN_PROMOTION_REQUEST:
            return {
                loading: true,
                promotions: [],
            };

        case MAIN_PROMOTION_SUCCESS:
            return {
                loading: false,
                promotions: action.payload,
            };
        case MAIN_PROMOTION_FAIL:
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

export const promotionReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_PROMOTION_REQUEST:
      case UPDATE_PROMOTION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_PROMOTION_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_PROMOTION_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_PROMOTION_FAIL:
      case UPDATE_PROMOTION_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_PROMOTION_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_PROMOTION_RESET:
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

export const promotionDetailsReducer = (state = { promotions: {} }, action) => {
    switch (action.type) {
        case PROMOTION_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case PROMOTION_DETAILS_SUCCESS:
            return {
                loading: false,
                promotions: action.payload,
            };
        case PROMOTION_DETAILS_FAIL:
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

export const newPromotionReducer = (state = { brand: {} }, action) => {
  switch (action.type) {
      case NEW_PROMOTION_REQUEST:
          return {
              ...state,
              loading: true,
              success: false,
          };
      case NEW_PROMOTION_SUCCESS:
          return {
              loading: false,
              // success: action.payload.success,
              success: true,
              brand: action.payload.brand,
          };
      case NEW_PROMOTION_FAIL:
          return {
              ...state,
              loading: false,
              error: action.payload,
          };
      case NEW_PROMOTION_RESET:
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
