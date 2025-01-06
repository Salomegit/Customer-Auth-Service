import { useContext,useState,useEffect,createContext } from "react"
import { isAuthenticated } from "../endpoints/api"
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

    useEffect(() => {
        getAuthenticated();
    },[window.location.pathname])


  return (
    <AuthContext.Provider value={{authenticated,loading}}>
     {children}
    </AuthContext.Provider>
  )
}



export const useAuth =() => 
    useContext(AuthContext );
