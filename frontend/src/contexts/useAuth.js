import { useContext,useState,useEffect,createContext } from "react"
import { isAuthenticated } from "../endpoints/api"
const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    const getAuthenticated = async () => {
        try{
            const response = await isAuthenticated()
            setAuthenticated(response)
        }catch{
            setAuthenticated('User is not authenticated')
        } finally {
            setLoading(false)
    }

    useEffect(() => {
        getAuthenticated()
    },[window.location.pathname])


  return (
    <AuthContext.Provider>
     {children}
    </AuthContext.Provider>
  )
}


 