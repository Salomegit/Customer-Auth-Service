import { useContext, useState, useEffect, createContext } from "react"
import { isAuthenticated } from "../endpoints/api"
import { login_api } from "../endpoints/api"
import { useNavigate, useLocation } from "react-router-dom"
import { register_api } from "../endpoints/api"
import PropTypes from 'prop-types';
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

  const register_user = async (first_name, username, email, password) => {
    try {
      await register_api(first_name, username, email, password);
      return { success: true }; // Return a success indicator
    } catch (error) {
      console.error("Registration failed:", error); // Log the error for debugging
      return { success: false, error: error.message }; // Include error details
    }
  };
  

  


  useEffect(() => {
    getAuthenticated();
  }, [location]);


  return (
    <AuthContext.Provider value={{ authenticated, loading, login_user, register_user }}>
      {children}
    </AuthContext.Provider>
  );
}




export const useAuth = () =>
  useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Specify that children must be passed
}