import { useContext, useState, useEffect, createContext } from "react"
import { isAuthenticated } from "../endpoints/api"
import { login_api } from "../endpoints/api"
import { useNavigate, useLocation } from "react-router-dom"
import { register_api } from "../endpoints/api"
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigator = useNavigate();
  const location = useLocation();


  const getAuthenticated = async () => {
    try {
      const success = await isAuthenticated()
      setAuthenticated(success)
    } catch {
      setAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const login_user = async (username, password) => {
    const success = await login_api(username, password)
    try {
      if (success) {
        setAuthenticated(true)
        navigator('/menu')
        return true
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login failed:", error); // Add error logging here
      return false; // Return false on error
    }
  }

  const register_user = async (username, email, password, confirmPassword) => {
    if (password === confirmPassword) {
      try {
        await register_api(username, email, password)
        alert("Registration Successful")
      } catch (error) {
        alert("Error during registration: " + error.message);
        return false;

      }

    } else {
      alert("Passwords do not match")
    }


  }


  useEffect(() => {
    getAuthenticated();
  }, [location]);


  return (
    <AuthContext.Provider value={{ authenticated, loading, login_user, register_user }}>
      {children}
    </AuthContext.Provider>
  )
}





export const useAuth = () =>
  useContext(AuthContext);
