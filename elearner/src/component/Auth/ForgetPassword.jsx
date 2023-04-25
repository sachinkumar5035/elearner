import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container padding={'14'} h={'90vh'}>
      <form>
        <Heading
          children="Forget Password"
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'6'}>
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            type="email"
            focusBorderColor="purple.400"
          />
          <Button type="submit" w={'full'} colorScheme="purple">
            Send reset link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
