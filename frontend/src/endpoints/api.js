import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:8000/'; 
const LOGIN_URL = `${BASE_URL}auth/login/`;
const NOTES_URL = `${BASE_URL}notes/`;
const REFRESH_TOKEN_URL = `${BASE_URL}auth/token/refresh`;
const LOGOUT_URL = `${BASE_URL}auth/logout/`;
const Authenticated_URL = `${BASE_URL}auth/authenticated/`;
const login_api = async (username ,password) =>{
    const response = await axios.post(LOGIN_URL,{username:username,password:password},
                    {withCredentials:true}
    );
        return response.data.success
    

}

export default login_api

export const getNotes = async () =>{
    try {
        const response = await axios.get(NOTES_URL,{withCredentials:true});
        return response.data
    }
    catch (error){
        return callRefreshNotCalled(error,getNotes)
    }
}

export const refreshToken = async () =>{
    try {
         await axios.post(REFRESH_TOKEN_URL,{},{withCredentials:true});
        return true
    } catch (error) {
        return error("Failed to refresh token")
        
    }
   
}

const callRefreshNotCalled = async (error, func) => {
    if(error.response && error.response.status === 401) {
        const token_refreshed =await refreshToken()
            if (token_refreshed){
                const retry_response = await func()
                return retry_response.data
            }
    }
    return false
}


export const logout = async () =>{ 
    try {
        await axios.post(LOGOUT_URL,{},{withCredentials:true});
    return true
    } catch (error) {
        console.error("Failed to logout:", error.message); 
        return { success: false, message: error.message };     }
    
 }

 export const isAuthenticated = async () =>{
    try{
        await axios.post(Authenticated_URL,{},{withCredentials:true});
        return 'user is authenticated'
    } catch{
        return 'user is not authenticated'
    }
 }