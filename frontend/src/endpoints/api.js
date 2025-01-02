import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:8000/'; 
const LOGIN_URL = `${BASE_URL}auth/login/`;
const NOTES_URL = `${BASE_URL}notes/`;

export const login_api = async (username ,password) =>{
    const response = await axios.post(LOGIN_URL,{username:username,password:password},
                    {withCredentials:true}
    );
        return response.data.success
    

}

export const getNotes =  async ()={
    const response await
}

