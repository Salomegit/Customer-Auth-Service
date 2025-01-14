import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Login from '../../components/pages/auth/login';
import Menu from '../../components/pages/shop/menu';
import PrivateRoute from '../../components/private/private_route';
import { AuthProvider } from '../../contexts/useAuth';
import RegisterForm from '../../components/pages/auth/register';
import LandingPage from '../../components/pages/Landing';
const Login_route = () => {
    return(
        <Router>
            <AuthProvider>
            <Routes>
                
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/menu" element={<PrivateRoute><Menu/></PrivateRoute>} />
                <Route path="/" element={<LandingPage />} />
            </Routes>
            </AuthProvider>
        </Router>   
    )
}

export default Login_route