import { useContext,useState,useEffect,createContext } from "react"
import { isAuthenticated } from "../endpoints/api"
import { login_api } from "../endpoints/api"



const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    const getAuthenticated = async () => {
        try{
            const success = await isAuthenticated()
            setAuthenticated(success)
        }catch{
            setAuthenticated(false)
        } finally { 
            setLoading(false)
    }
}

  const login_user = async (username,password) =>{
    const success = await login_api(username,password)
    if (success){
        setAuthenticated(true)
        navigator('/menu')
    }
}

    useEffect(() => {
        getAuthenticated();
    },[window.location.pathname])


  return (
    <AuthContext.Provider value={{authenticated,loading,login_user }}>
     {children}
    </AuthContext.Provider>
  )
}




export const useAuth =() => 
    useContext(AuthContext );
