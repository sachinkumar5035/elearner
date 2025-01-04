// import axios from 'axios';
import axiosInstance from '../../config/baseApi';
import { CHANGE_PASSWORD_FAIL, 
    CHANGE_PASSWORD_REQUEST, 
    CHANGE_PASSWORD_SUCCESS, 
    UPDATE_PROFILE_FAIL, 
    UPDATE_PROFILE_PICTURE_FAIL, 
    UPDATE_PROFILE_PICTURE_REQUEST, 
    UPDATE_PROFILE_PICTURE_SUCCESS, 
    UPDATE_PROFILE_REQUEST, 
    UPDATE_PROFILE_SUCCESS } from '../constants/userConstants';



export const updateProfile = (name,email)=>async(dispatch)=>{
    try {   
        const config = { headers: { "Content-Type": "application/json" } };

        dispatch({type:UPDATE_PROFILE_REQUEST});

        const {data} = await axiosInstance.put('/api/v1/updateprofile',{name,email},config,{withCredential:true})
        
        dispatch({
            type:UPDATE_PROFILE_SUCCESS,
            payload:data.message
        })

    } catch (error) {
        dispatch({
            type:UPDATE_PROFILE_FAIL,
            payload:error.response.data.message
        })
        console.log("error in updateProfile action method ", error);
    }
}

export const changePassword = (oldPassword, newPassword)=>async(dispatch)=>{
    try {   
        const config = { headers: { "Content-Type": "application/json" } };

        dispatch({type:CHANGE_PASSWORD_REQUEST});

        const {data} = await axiosInstance.put('/api/v1/changepassword',{oldPassword, newPassword},config,{withCredential:true})
        
        dispatch({
            type:CHANGE_PASSWORD_SUCCESS,
            payload:data.message
        })

    } catch (error) {
        dispatch({
            type:CHANGE_PASSWORD_FAIL,
            payload:error.response.data.message
        })
        console.log("error in updateProfile action method ", error);
    }
}

export const updateProfilePicture = (formdata)=>async(dispatch)=>{
    try {   
        const config = { headers: { "Content-Type": "multipart/form-data"} };

        dispatch({type:UPDATE_PROFILE_PICTURE_REQUEST});

        const {data} = await axiosInstance.put('/api/v1/updateprofilepicture',{formdata},config,{withCredential:true})
        
        dispatch({
            type:UPDATE_PROFILE_PICTURE_SUCCESS,
            payload:data.message
        })

    } catch (error) {
        dispatch({
            type:UPDATE_PROFILE_PICTURE_FAIL,
            payload:error.response.data.message
        })
        console.log("error in updateProfile action method ", error);
    }
}