import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Login from '../../components/pages/auth/login';
const Login_route = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>   
    )
}

export default Login_route