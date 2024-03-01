import axios from 'axios';
import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from '../constants/userConstants.js';
import axiosInstance from '../../config/baseApi.js';

const stringApi = "http://192.168.0.100:4000";

export const login = (email, password) => async (dispatch) => {
    try {
        const config = { headers: { "Content-Type": "application/json" } };
        dispatch({ type: LOGIN_REQUEST })
        const { data } = await axiosInstance.post(`/api/v1/login`, { email, password },
            config,
            {
                withCredential: true
            }  
        );
        dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
}

export const register = (formdata) => async (dispatch) => {
    try {
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        dispatch({ type: REGISTER_USER_REQUEST })
        const { data } = await axiosInstance.post(`/api/v1/register`, formdata,
            config,
            {
                withCredential: true
            }
        );
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data.message });
    }
}



// load user
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST })
        const { data } = await axiosInstance.get(`/api/v1/me`,
            {
                withCredential: true
            }
        );
        // console.log(data);
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message
         });
    }
}

// this function will be called from the header.js file of frontend
export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_USER_REQUEST })
        const { data } = await axiosInstance.get(`/api/v1/logout`,
            {
                withCredential: true,
            }
        );
        // console.log(data);
        dispatch({ type: LOGOUT_USER_SUCCESS, payload: data.message });
    } catch (error) {
        dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message });
    }
}
