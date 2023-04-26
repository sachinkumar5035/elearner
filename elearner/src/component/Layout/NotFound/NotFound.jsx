import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Container height={'90vh'}>
      <VStack justifyContent={'center'} height={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'}/>
        <Heading children="Page not found"/>
        <Link to={'/'}>
            <Button colorScheme='purple'>Go to home</Button>
          </Link>
      </VStack>
    </Container>
  )
}

export default NotFound
