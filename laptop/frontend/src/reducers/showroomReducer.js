import {
    ALL_SHOWROOM_SUCCESS,
    ALL_SHOWROOM_REQUEST,
    ALL_SHOWROOM_FAIL,
    MAIN_SHOWROOM_SUCCESS,
    MAIN_SHOWROOM_REQUEST,
    MAIN_SHOWROOM_FAIL,
    NEW_SHOWROOM_REQUEST,
    NEW_SHOWROOM_SUCCESS,
    NEW_SHOWROOM_RESET,
    NEW_SHOWROOM_FAIL,
    UPDATE_SHOWROOM_REQUEST,
    UPDATE_SHOWROOM_SUCCESS,
    UPDATE_SHOWROOM_RESET,
    UPDATE_SHOWROOM_FAIL,
    DELETE_SHOWROOM_REQUEST,
    DELETE_SHOWROOM_SUCCESS,
    DELETE_SHOWROOM_RESET,
    DELETE_SHOWROOM_FAIL,
    SHOWROOM_DETAILS_REQUEST,
    SHOWROOM_DETAILS_SUCCESS,
    SHOWROOM_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '~/constants/showroomConstants';

export const showroomsReducer = (state = { showrooms: [] }, action) => {
    switch (action.type) {
        case ALL_SHOWROOM_REQUEST:
            return {
                loading: true,
                showrooms: [],
            };
        case ALL_SHOWROOM_SUCCESS:
            return {
                loading: false,
                showrooms: action.payload,
            };
        case ALL_SHOWROOM_FAIL:
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

export const showroomReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_SHOWROOM_REQUEST:
        case UPDATE_SHOWROOM_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_SHOWROOM_SUCCESS:
            return {
                ...state,
                loading: false,
                // isDeleted: action.payload,
                isDeleted: true,
            };

        case UPDATE_SHOWROOM_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: true,
            };
        case DELETE_SHOWROOM_FAIL:
        case UPDATE_SHOWROOM_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case DELETE_SHOWROOM_RESET:
            return {
                ...state,
                isDeleted: false,
            };
        case UPDATE_SHOWROOM_RESET:
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

export const showroomDetailsReducer = (state = { showrooms: {} }, action) => {
    switch (action.type) {
        case SHOWROOM_DETAILS_REQUEST:
            return {
                loading: true,
                ...state,
            };
        case SHOWROOM_DETAILS_SUCCESS:
            return {
                loading: false,
                showrooms: action.payload,
            };
        case SHOWROOM_DETAILS_FAIL:
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

export const newShowroomReducer = (state = { showroom: {} }, action) => {
  switch (action.type) {
      case NEW_SHOWROOM_REQUEST:
          return {
              ...state,
              loading: true,
              success: false,
          };
      case NEW_SHOWROOM_SUCCESS:
          return {
              loading: false,
              // success: action.payload.success,
              success: true,
              showroom: action.payload.showroom,
          };
      case NEW_SHOWROOM_FAIL:
          return {
              ...state,
              loading: false,
              error: action.payload,
          };
      case NEW_SHOWROOM_RESET:
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