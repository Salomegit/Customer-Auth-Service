import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:8000/'; 
const LOGIN_URL = `${BASE_URL}auth/login/`;
const NOTES_URL = `${BASE_URL}notes/`;
const REFRESH_TOKEN_URL = `${BASE_URL}auth/token/refresh/`;
const LOGOUT_URL = `${BASE_URL}auth/logout/`;
const Authenticated_URL = `${BASE_URL}auth/authenticated/`;
export const login_api = async (username ,password) =>{
    

        try {
            const response = await axios.post(LOGIN_URL, { username, password }, { withCredentials: true });
    
            if (response.status === 200 && response.data.success) {
                // Assume response contains a success field and authentication data
                return true; // Successful login
            } else {
                return false; // Handle failed login response
            }
        } catch (error) {
            console.error("Error during login:", error); // Add error handling
            return false;
        }
    

}


export const getNotes = async () =>{
    try {
        const response = await axios.get(NOTES_URL,{withCredentials:true});
        return response.data
    }
    catch (error){
        return callRefreshNotCalled(error, axios.get(NOTES_URL, { withCredentials: true }));
    }
}


export const refreshToken = async () => {
    try {
      await axios.post(
        REFRESH_TOKEN_URL,
        {}, 
        { withCredentials: true } 
      );
      return true;
    } catch (error) {
      console.error(
        "Error refreshing access token",
        error.response?.data || error.message
      );
      return false;
    }
  };


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

 export const isAuthenticated = async () => {
    try {
        // Sending POST request to the authentication endpoint with credentials
        await axios.post(Authenticated_URL, {}, { withCredentials: true });
        return true;
    } catch (error) {
        if (error.response) {
         
            console.error("Error Response:", error.response);
            console.error("Error Status:", error.response.status);
            console.error("Error Data:", error.response.data);
            return false;
        } else if (error.request) {
            console.error("Error Request:", error.request);
            return false;
        } else {
            console.error("Error Message:", error.message);
            return false;
        }
    }
};
