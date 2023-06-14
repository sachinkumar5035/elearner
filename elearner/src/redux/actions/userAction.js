import axios from 'axios';
import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_USER_FAIL, LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS } from '../constants/userConstants.js';


export const login = (email, password) => async (dispatch) => {
    try {
        // alert(email+"++++"+password);
        const config = { heaeder: { "Content-Type": "application/json" } };
        dispatch({ type: LOGIN_REQUEST })
        const { data } = await axios.post(`/api/v1/login`, { email, password },
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


export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST })
        const { data } = await axios.get(`/api/v1/me`,
            {
                withCredential: true
            }
        );
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
}


export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_USER_REQUEST })
        const { data } = await axios.get(`/api/v1/logout`,
            {
                withCredential: true
            }
        );
        dispatch({ type: LOGOUT_USER_SUCCESS, payload: data.message });
    } catch (error) {
        dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message });
    }
}
