import { createReducer } from "@reduxjs/toolkit";
import { CLEAR_ERRORRS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/userConstants";


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
                user: action.payload,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case CLEAR_ERRORRS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};