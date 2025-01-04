
import {
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_PICTURE_FAIL, 
    UPDATE_PROFILE_PICTURE_REQUEST, 
    UPDATE_PROFILE_PICTURE_SUCCESS, 
    UPDATE_PROFILE_REQUEST, 
    UPDATE_PROFILE_SUCCESS,
    CLEAR_ERRORS,
    CLEAR_MESSAGE
} from '../constants/userConstants'


export const profileReducer = (state={}, action) => {

    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
            return {
                loading: true
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                loading: false,
                message: action.payload
            }
        case UPDATE_PROFILE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CHANGE_PASSWORD_REQUEST:
            return {
                loading: true
            }
        case CHANGE_PASSWORD_SUCCESS:
            return {
                loading: false,
                message: action.payload
            }

        case CHANGE_PASSWORD_FAIL:
            return {
                loading: false,
                error: action.payload
            }


        case UPDATE_PROFILE_PICTURE_REQUEST:
            return {
                loading: true
            }
        case UPDATE_PROFILE_PICTURE_SUCCESS:
            return {
                loading: false,
                message: action.payload
            }

        case UPDATE_PROFILE_PICTURE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        case CLEAR_MESSAGE:
            return {
                ...state,
                message: null
            }
        default:
            return {
                state
            }

    }

}