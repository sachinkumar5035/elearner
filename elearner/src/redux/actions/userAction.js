import axios from 'axios';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants/userConstants';


const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        const { data } = await axios.post(`/api/v1/login`,
            { email, password },
            {
                headers:{
                    "Content-Type":"application/json"
                },
                withCredentials:true
            });
            console.log(data); // just to check 
            dispatch({type:LOGIN_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:LOGIN_FAIL,payload:error.response.data.message});
    }
}