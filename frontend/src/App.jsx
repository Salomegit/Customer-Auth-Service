import './App.css'
import { AuthProvider } from './contexts/useAuth'
import Login_route from './routes/auth/login_route'
function App() {

  return (
    <AuthProvider>
      <Login_route/>
      </AuthProvider>
  )
}

export default App
