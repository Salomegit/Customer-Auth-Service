import { useAuth } from "../../contexts/useAuth"
import { useNavigate } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const {authenticated,loading} = useAuth()
    const navigate = useNavigate()

    if (loading){
        return <div>Loading...</div>
    }
    if (authenticated){
        return children
    }else{
        navigate('/login')  
    }

    return null
}

export default PrivateRoute