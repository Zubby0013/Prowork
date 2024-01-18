import axios from 'axios';

const URL:string = "http://localhost:/3444/api/v1";

export const registerApi = async(data:any)=>{
    try {
        return await axios.post(`${URL}/create-user`,data).then((res:any)=>{
            return res?.data
        });
    } catch (error) {
        return error
    }
};

export const verifyApi = async(userID:string)=>{
    try {
        return await axios.patch(`${URL}/verify-user/${userID}`).then((res:any)=>{
            return res?.data
        });
    } catch (error) {
        return error
    }
};

export const loginApi = async(data:any)=>{
    try {
        return await axios.post(`${URL}/signin-user`,data).then((res:any)=>{
            return res?.data
        });
    } catch (error) {
        return error
    }
};

export const getUserApi = async(data:any)=>{
    try {
        return await axios.get(`${URL}/read-all-user`,data).then((res:any)=>{
            return res?.data
        });
    } catch (error) {
        return error
    }
};

export const getCookiesApi = async()=>{
    try {
        return await axios.get(`${URL}/read-cookies`,{withCredentials: true}).then((res:any)=>{
            return res?.data
        });
    } catch (error) {
        return error
    }
};