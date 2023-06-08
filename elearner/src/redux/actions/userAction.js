import axios from 'axios';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants/userConstants.js';


export const login = (email, password) => async (dispatch) => {
    try {
        // alert(email+"++++"+password);
        const config = { heaeder: { "Content-Type": "application/json" } };
        dispatch({ type: LOGIN_REQUEST })
        const { data } = await axios.post(`/api/v1/login`,{ email, password },config);
            dispatch({type:LOGIN_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:LOGIN_FAIL,payload:error.response.data.message});
    }
}
