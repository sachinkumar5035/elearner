import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  form,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'14'}>
        <Heading children="Welcome to E-Learner" />
        <form>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="purple.400"
            ></Input>
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="your password"
              type="password"
              focusBorderColor="purple.400"
            ></Input>
          </Box>
          <Box my={'4'}>
            <Link to={'/forgetpassword'}>
              <Button fontSize={'xs'} colorScheme="purple" variant={'link'}>
                Forget password
              </Button>
            </Link>
          </Box>
          <Button my={'4'} type="submit" colorScheme={'purple'}>
            Login
          </Button>
          <Box my={'4'}>
            New User?{' '}
            <Link to={'/register'}>
              <Button colorScheme="purple" variant={'link'}>
                Sign Up
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
