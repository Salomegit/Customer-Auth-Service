import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Login from '../../components/pages/auth/login';
import Menu from '../../components/pages/shop/menu';
const Login_route = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </Router>   
    )
}

export default Login_route