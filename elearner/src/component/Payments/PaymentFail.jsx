import {  Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import {  RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentFail = () => {
  return (
    <Container height={'90vh'}>
      <VStack justifyContent={'center'} height={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'}/>
        <Heading textTransform={'uppercase'} children="Payment Failed"/>
        <Link to={'/subscribe'}>
            <Button colorScheme='purple'>Try again</Button>
          </Link>
      </VStack>
    </Container>
  )
}


export default PaymentFail
