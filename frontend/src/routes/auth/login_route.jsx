import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Login from '../../components/pages/auth/login';
import Menu from '../../components/pages/shop/menu';
import PrivateRoute from '../../components/private/private_route';
// import { AuthProvider } from '../../contexts/useAuth';
const Login_route = () => {
    return(
        <Router>
            
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<PrivateRoute><Menu/></PrivateRoute>} />
            </Routes>
        </Router>   
    )
}

export default Login_route