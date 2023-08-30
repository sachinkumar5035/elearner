// import { createReducer } from "@reduxjs/toolkit";
import { CLEAR_ERRORS, CLEAR_MESSAGE, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS } from "../constants/userConstants";


// export const userReducer = createReducer({},{
//     loginRequest:(state)=>{
//         state.loading=true
//     },
//     loginSuccess:(state,action)=>{
//         state.loading=false;
//         state.isAuthenticated=true;
//         state.user = action.payload;
//         state.message=action.payload.message
//     },
//     loginFail:(state,action)=>{
//         state.loading=false;
//         state.isAuthenticated=false;
//         state.error=action.payload
//     },
//     clearError:(state)=>{
//         state.error = null
//     },
//     clearMessage:(state)=>{
//         state.message = null
//     }
// })

export const userReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                message: action.payload.message,
                user: action.payload.user,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };

        case LOGOUT_USER_REQUEST:
            return {
                loading: true,
            };
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                message: action.payload.message,
                user: null,
            };
        case LOGOUT_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error: action.payload,
            };

        case LOAD_USER_REQUEST:
            return {
                loading: true,
            };
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case LOAD_USER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };

        case CLEAR_ERRORS:
        case CLEAR_MESSAGE:
            return {
                ...state,
                error: null,
                message: null
            };
        default:
            return state;
    }
};