import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password,setPassword] = useState("");
    const params = useParams();
    // alert(params.token);

    return (
        <Container padding={'14'} h={'90vh'}>
            <form>
                <Heading children="Reset Password" textTransform={'uppercase'} my={'16'} textAlign={['center', 'left']} />
                <VStack spacing={'6'}>
                    
                    <Input 
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder='Enter your password'
                        type='password'
                        focusBorderColor='purple.400'
                    />
                    <Button type='submit' w={'full'} colorScheme='purple' >
                        Reset Password
                    </Button>
                </VStack>
            </form>
        </Container>
    )
}

export default ResetPassword
