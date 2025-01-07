import { useAuth } from "../../contexts/useAuth"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
import { CircularProgress, Box } from "@mui/material";


const PrivateRoute = ({ children }) => {
    const {authenticated,loading} = useAuth()
    const navigate = useNavigate()

    if (loading){
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh", 
                    backgroundColor: "#f0f0f0", 
               
                }}
            >
                <CircularProgress size={60} thickness={5} color="primary" />
            </Box>
        );
        }

    if (authenticated){
        return children
    }else{
        navigate('/login')  
    }

    // return null
}


PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute
