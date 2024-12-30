
import { ChakraProvider } from '@chakra-ui/react'  
import Login_route from './routes/auth/login_route'
function App() {

  return (
    <ChakraProvider>
    <Login_route/>
    </ChakraProvider>
  )
}

export default App
