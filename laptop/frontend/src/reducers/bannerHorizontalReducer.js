import {
  ALL_BANNER_HORIZONTAL_FAIL,
  ALL_BANNER_HORIZONTAL_REQUEST,
  ALL_BANNER_HORIZONTAL_SUCCESS,
  MAIN_BANNER_HORIZONTAL_FAIL,
  MAIN_BANNER_HORIZONTAL_REQUEST,
  MAIN_BANNER_HORIZONTAL_SUCCESS,
  BANNER_HORIZONTAL_DETAILS_FAIL,
  BANNER_HORIZONTAL_DETAILS_REQUEST,
  BANNER_HORIZONTAL_DETAILS_SUCCESS,
  CLEAR_ERRORS,
  DELETE_BANNER_HORIZONTAL_FAIL,
  DELETE_BANNER_HORIZONTAL_REQUEST,
  DELETE_BANNER_HORIZONTAL_SUCCESS,
  NEW_BANNER_HORIZONTAL_FAIL,
  NEW_BANNER_HORIZONTAL_REQUEST,
  NEW_BANNER_HORIZONTAL_SUCCESS,
  UPDATE_BANNER_HORIZONTAL_FAIL,
  UPDATE_BANNER_HORIZONTAL_REQUEST,
  UPDATE_BANNER_HORIZONTAL_SUCCESS,
  DELETE_BANNER_HORIZONTAL_RESET,
  UPDATE_BANNER_HORIZONTAL_RESET,
  NEW_BANNER_HORIZONTAL_RESET
} from '../constants/bannerHorizontalConstants';

export const bannersHorizontalReducer = (state = { horizontals: [] }, action) => {
    switch (action.type) {
        case ALL_BANNER_HORIZONTAL_REQUEST:
            return {
                loading: true,
                horizontals: [],
            };

        case ALL_BANNER_HORIZONTAL_SUCCESS:
            return {
                loading: false,
                horizontals: action.payload,
            };
        case ALL_BANNER_HORIZONTAL_FAIL:
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

export const mainHorizontalReducer = (state = { horizontals: [] }, action) => {
  switch (action.type) {
      case MAIN_BANNER_HORIZONTAL_REQUEST:
          return {
              loading: true,
              horizontals: [],
          };

      case MAIN_BANNER_HORIZONTAL_SUCCESS:
          return {
              loading: false,
              horizontals: action.payload,
          };
      case MAIN_BANNER_HORIZONTAL_FAIL:
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

export const newHorizontalReducer = (state = { horizontal: {} }, action) => {
  switch (action.type) {
      case NEW_BANNER_HORIZONTAL_REQUEST:
          return {
              ...state,
              loading: true,
              success: false,
          };
      case NEW_BANNER_HORIZONTAL_SUCCESS:
          return {
              loading: false,
              // success: action.payload.success,
              success: true,
              horizontal: action.payload.horizontal,
          };
      case NEW_BANNER_HORIZONTAL_FAIL:
          return {
              ...state,
              loading: false,
              error: action.payload,
          };
      case NEW_BANNER_HORIZONTAL_RESET:
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

// //

export const bannerHorizontalReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BANNER_HORIZONTAL_REQUEST:
    case UPDATE_BANNER_HORIZONTAL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BANNER_HORIZONTAL_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };

    case UPDATE_BANNER_HORIZONTAL_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true,
      };
    case DELETE_BANNER_HORIZONTAL_FAIL:
    case UPDATE_BANNER_HORIZONTAL_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case DELETE_BANNER_HORIZONTAL_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_BANNER_HORIZONTAL_RESET:
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

export const bannerHorizontalDetailsReducer = (state = { horizontals: {} }, action) => {
  switch (action.type) {
      case BANNER_HORIZONTAL_DETAILS_REQUEST:
          return {
              loading: true,
              ...state,
          };
      case BANNER_HORIZONTAL_DETAILS_SUCCESS:
          return {
              loading: false,
              horizontals: action.payload,
          };
      case BANNER_HORIZONTAL_DETAILS_FAIL:
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