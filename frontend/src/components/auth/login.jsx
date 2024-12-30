import { VStack, Formcontrol, Formlabel, Input,Button } from "@chakra-ui/react";
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"


import { useState } from "react";
const Login = () => {

    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    // const handleSubmit () ={ pa

    // }
    return (
        <VStack>
            {/* <Formcontrol>
                <Formlabel>Username</Formlabel>
                <Input onChange={(e) => setUsername(e.target.value)} value={username} type="text" />  
                <Formlabel>Password</Formlabel>
                <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" />  
                <Button >Login</Button>
            </Formcontrol> */}



            <Field label="Name">
          <Input name="name" />
        </Field>

        <Field label="Email address">
          <Input name="email" type="email" />
        </Field>

        </VStack>
    )
    
    }
    
    export default Login;