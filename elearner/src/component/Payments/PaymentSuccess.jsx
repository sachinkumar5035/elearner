import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckFill, RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <Container h={'90ch'} p={'16'}>
      <Heading my={'8'} textAlign={'center'} children='You have access to premium courses' />
      <VStack
        boxShadow={'lg'}
        alignItems={'center'}
        paddingBottom={'16'}
        borderRadius={'lg'}
      >
        <Box background={'purple.400'} width={'full'} padding={'4'} css={{ borderRadius: '8px 8px 0 0' }} >
          <Text children="Payment successfull" color="black" />
        </Box>

        <Box
          padding={'4'}
        >
          <VStack
            textAlign={'center'}
            paddingX={'8'}
            marginTop={'4'}
            spacing='8'
          >
            <Text children="Congratulations you are now a pro member. You can access to the premium courses"/>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill/>
            </Heading>

          <Link to={'/profile'}>
            <Button variant={'ghost'}>Go to profile</Button>
          </Link>
          <Heading size={'xs'}>
            Refrence: ahkjaslkdjlkjl kjjlaskjdlaskjl kjlakjl 
          </Heading>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default PaymentSuccess
